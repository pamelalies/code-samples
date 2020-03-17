<?php
/**
 * @file
 * Create a Wistia Stream Wrapper class for the Media/Resource module.
 */

include_once DRUPAL_ROOT . '/' . drupal_get_path('module', 'media_wistia') . '/includes/DrupalWistiaApi.php';

/**
 *  Create an instance like this:
 *  $wistia = new MediaWistiaStreamWrapper('wistia://v/[video-code]');
 */
class MediaWistiaStreamWrapper extends MediaReadOnlyStreamWrapper {

  protected $api;
  protected $baseUrl = 'http://home.wistia.com/medias/';

  /**
   * Constructor.
   */
  public function __construct() {
    $this->api = new DrupalWistiaApi(variable_get('media_wistia_api_key'));
  }

  /**
   * Overrides interpolateUrl() defined in MediaReadOnlyStreamWrapper.
   *
   * Checks to see if the video is in our cache, if not we request from the api.
   */
  public function interpolateUrl() {
    $parameters = $this->get_parameters();
    if (!empty($parameters['v'])) {
      return $this->baseUrl . $parameters['v'];
    }
    return '';
  }

  /**
   * Returns the wistia mimetype.
   *
   * @param string $uri
   *   Uri.
   * @param null $mapping
   *   Mappings.
   *
   * @return string
   *   Wistia mime type.
   */
  public static function getMimeType($uri, $mapping = NULL) {
    return 'video/wistia';
  }

  /**
   * Gets the original thumbnail for the wistia video.
   */
  public function getOriginalThumbnailPath($http_path = '') {
    $parts = $this->get_parameters();
    if (!empty($parts['v']) && $this->api->hasApiKey()) {
      $media = $this->api->mediaShow($parts['v']);
      $url = $media->thumbnail->url;
    }
    else {
      if (isset($parts['url'])) {
        $media = _media_wistia_request_data($parts['url']);
        $url = $media['thumbnail_url'];
      }
      else {
        $media = _media_wistia_request_data($this->baseUrl . $parts['v']);
        $url = $media['thumbnail_url'];
      }
    }
    return $url;
  }

  /**
   * Returns the url to the thumbnail for the wistia video.
   */
  public function getLocalThumbnailPath() {
    $parts = $this->get_parameters();
    $local_path = file_default_scheme() . '://media-wistia/' . check_plain($parts['v']) . '.jpg';
    if (!file_exists($local_path)) {
      $dirname = drupal_dirname($local_path);
      file_prepare_directory($dirname, FILE_CREATE_DIRECTORY | FILE_MODIFY_PERMISSIONS);

      $response = drupal_http_request($this->getOriginalThumbnailPath());

      if (!isset($response->error)) {
        file_unmanaged_save_data($response->data, $local_path, TRUE);
      }
      else {
        @copy($this->getOriginalThumbnailPath(), $local_path);
      }
    }
    return $local_path;
  }

  /**
   * Parse the url.
   */
  public function mediaWistiaParseHttpUrl($url) {
    $parts = explode("//v/", $url);

    return $parts[1];
  }

  /**
   * Parse the embed code.
   */
  public function parse($embed_code) {
    $patterns = array(
      '/https?:\/\/(.+)?(wistia\.com|wi\.st|wistia\.net)\/(medias|embed\/iframe|embed)\/(.*)/',
    );
    foreach ($patterns as $pattern) {
      preg_match($pattern, $embed_code, $matches);
      if (isset($matches[4])) {
        return $matches[4];
      }
    }
    return '';
  }

}
