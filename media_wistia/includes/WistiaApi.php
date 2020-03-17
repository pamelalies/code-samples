<?php
/**
 * @file
 * WistiaApi
 * 
 * A simple PHP Class for interfacing with the Wistia Data API
 * Starting Point can be seen here 
 * http://dev-forum.wistia.com/discussion/6/php-libraries
 * Thanks Brian Kutyah
 * 
 * I Don't need to write anything in my current scope, 
 * But this should be added at some point. Not sure why I prematurely optimized 
 * with a cache array
 * 
 * @since 6/26/2012
 */


class WistiaApi {

  protected $format = 'json';
  protected $apiKey = NULL;
  protected $cache = array();
  protected $debug = FALSE;
  public $response = '';

  /**
   * Constructor.
   * 
   * Builds a new instance of this class, stores an authenticator api key.
   * 
   * @param string $api_key 
   *   Get an api key from your wistia account.
   */
  public function __construct($api_key = NULL) {
    if ($api_key) {
      $this->cache = array();
      $this->apiKey = $api_key;
    }
  }

  /**
   * A simple method to check if we can use the API.
   * 
   * @return bool
   *   Is there a key?
   */
  public function hasApiKey() {
    return !empty($this->apiKey);
  }

  /**
   * Account Read.
   * 
   * Gets the account as a stdObject
   * Properties id, name, url.
   * 
   * @return object
   *   The Wistia account.
   */
  public function accountRead() {
    if (!isset($this->cache['account'])) {
      $this->cache['account'] = $this->sendRequest('account');
    }
    return $this->cache['account'];
  }

  /**
   * Account Stats.
   * 
   * Get some overall statistics for the account.
   * 
   * @since 12/13/2012
   * 
   * @return object
   *   Account stats object.
   */
  public function accountStats() {
    if (!isset($this->cache['accountStats'])) {
      $this->cache['accountStats'] = $this->sendRequest('stats/account');
    }
    return $this->cache['accountStats'] = $this->sendRequest('stats/account');
  }

  /**
   * Event Read.
   * 
   * Gets the details from any given event.
   * 
   * @param string $key
   *   Event key.
   * 
   * @return object
   *   Wistia object.
   */
  public function eventRead($key = NULL) {
    if (!isset($this->cache['events'][$key])) {
      $this->cache['events'][$key] = $this->sendRequest('events', array('event_key' => $key));
    }
    return $this->cache['events'][$key];
  }

  /**
   * Project Create.
   * 
   * @param array $project_data 
   *   Assosciative array. 
   *   Keys: name,(adminEmail),(anonymousCanUpload),
   *         (anonymousCanDownload),(public)
   * 
   * @return object
   *   Project object.
   */
  public function projectCreate($project_data = NULL) {
    if (!$project_data) {
      return NULL;
    }
    // Empty our cache.
    $this->cache['projects'] = NULL;
    return $this->sendRequest('projects', $project_data);
  }

  /**
   * Project List.
   * 
   * Fetches all of the projects in this account.
   * 
   * @return array
   *   An array of project objects.
   */
  public function projectList() {
    if (!isset($this->cache['projects'])) {
      /** Sort the project list alphabetically by project name. **/
      $params = array(
        'sort_by' => 'name',
      );
      
      $this->cache['projects'] = $this->sendRequest('projects', $params);
    }
    return $this->cache['projects'];
  }

  /**
   * Project Update.
   * 
   * @param object $project
   *   Name,(adminEmail),(anonymousCanUpload),(anonymousCanDownload),(public).
   * 
   * @return object
   *   Project object.
   */
  public function projectUpdate($project = NULL) {
    if (!$project) {
      return FALSE;
    }
    // Make sure that they are different.
    $id = $project->id;
    if (count(array_diff(get_object_vars($this->cache['projects'][$id]), get_object_vars($project))) == 0) {
      return $this->cache['projects'][$id];
    }
    // Empty our cache.
    $this->cache['projects'] = NULL;
    return $this->sendRequest('projects/' . $id);
  }

  /**
   * Media List.
   *
   * @param null $project_id
   *   An optional filter to show only videos from a specific project.
   * @param int $page
   *   Page number
   * @param int $per_page
   *   Items per page
   * @param bool $full
   *   Load full set.
   *
   * @return array|mixed
   *   Array of media objects.
   */
  public function mediaList($project_id = NULL, $page = 1, $per_page = 100, $full = TRUE) {
    $medias = array();
    if (!isset($this->cache['medias'][$project_id]) || $page > 1) {
      $params = array(
        'page' => $page,
        'per_page' => $per_page,
        'sort_by' => 'name',
      );
      if ($project_id) {
        $params['project_id'] = $project_id;
      }
      $medias = $this->sendRequest('medias', $params);

    }
    // If we received the max possible, query the next page.
    if ($full && count($medias) == $per_page) {
      $next_page = $this->mediaList($project_id, $page += 1, $per_page);
      if (count($next_page) > 0) {
        $medias = array_merge($medias, $next_page);
      }
    }
    return $medias;
  }

  /**
   * Media Show.
   *
   * Get a video's details including its name, url, embed code, thumbnails, etc.
   *
   * @param int $id
   *   Ie 7880 the wistia identifier for a video.
   *
   * @return object
   *   Video object.
   */
  public function mediaShow($id = NULL) {
    if (!isset($this->cache['media'][$id])) {
      $this->cache['media'][$id] = $this->sendRequest('medias/' . $id);
    }
    return $this->cache['media'][$id];
  }

  /**
   * Media Show Stats.
   *
   * Gets the cumulative stats for a given video id.
   *
   * @param int $id
   *   A Wistia video id
   *
   * @return object
   *   Media stats object.
   */
  public function mediaShowStats($id = NULL) {
    if (!isset($this->cache['mediaStats'][$id])) {
      $this->cache['mediaStats'][$id] = $this->sendRequest('medias/' . $id . '/stats');
    }
    return $this->cache['mediaStats'][$id];
  }

  /**
   * Media Update.
   *
   * Update the media's name, description, and new_still_media_id
   *
   * @param object $media
   *   Media object.
   *
   * @return object
   *   Media object.
   */
  public function mediaUpdate($media = NULL) {
    if (!$media) {
      return FALSE;
    }
    $id = $media->id;
    $params = array();
    if ($media->name != $this->cache['media']['id']->name) {
      $params['name'] = $media->name;
    }
    if ($media->description != $this->cache['media']['id']->description) {
      $params['descriptions'] = $media->descriptions;
    }
    return $this->cache['media'][$id] = $this->sendRequest('medias/' . $id, $params);
  }

  /**
   * Send Request.
   *
   * @param string $module
   *   Component to send to the api.
   *
   * @param array $params
   *   Params to send to the api.
   *
   * @return mixed
   *   Response from the api.
   */
  protected function sendRequest($module, $params = NULL) {

    // Build our url.
    $url = variable_get('media_wistia_api_url', 'https://api.wistia.com/v1/') . $module . '.' . $this->format;

    // Set our aparams if we have them.
    if ($params) {
      $url .= '?' . http_build_query($params);
    }
    if ($this->debug) {
      echo 'Sending Request: ' . $url;
    }

    $result = $this->send($url, $params);

    if ($this->debug) {
      echo 'Received: ' . $result;
    }
    $result = json_decode($result);
    return $result;
  }

  /**
   * Send request.
   *
   * @param string $url
   *   Url to send
   *
   * @return mixed
   *   Json response.
   */
  protected function send($url) {
    $username = 'api';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_USERPWD, $username . ':' . $this->apiKey);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

    $result = curl_exec($ch);
    $err = curl_errno($ch);
    $errmsg = curl_error($ch);
    curl_close($ch);
    $this->response = $result;
    return $result;
  }

  /**
   * Debugging.
   */
  public function enableDebugging() {
    $this->debug = TRUE;
  }

}

/**
 * Class WistiaException
 *
 * Currently unused.
 */
class WistiaException extends Exception {
}
