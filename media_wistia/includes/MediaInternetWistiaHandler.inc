<?php
/**
 * @file
 * Contains MediaInternetWistiaHandler.
 */

/**
 * Implementation of MediaInternetBaseHandler.
 *
 * @see hook_media_internet_providers().
 */
class MediaInternetWistiaHandler extends MediaInternetBaseHandler {

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
        return file_stream_wrapper_uri_normalize('wistia://v/' . $matches[4]);
      }
    }
    return '';
  }

  /**
   * Checks to make sure the url is a wistia url.
   *
   * @param string $embed_code
   *   The wistia url
   *
   * @return bool
   *   Is the url correct.
   */
  public function claim($embed_code) {
    if ($this->parse($embed_code)) {
      return TRUE;
    }
    return FALSE;
  }

  /**
   * Gets the wistia file object.
   */
  public function getFileObject() {
    $uri = $this->parse($this->embedCode);
    $file = file_uri_to_object($uri, TRUE);

    if (empty($file->fid) && $info = $this->getOEmbed()) {
      $file->filename = truncate_utf8($info['title'], 255);
    }

    return $file;
  }

  /**
   * Returns information about the media. See http://www.oembed.com/.
   *
   * @return array
   *   If oEmbed information is available, an array containing 'title', 'type',
   *   'url', and other information as specified by the oEmbed standard.
   *   Otherwise, NULL.
   */
  public function getOEmbed() {
    static $response;
    if (empty($response)) {
      $uri = $this->parse($this->embedCode);
      $external_url = file_create_url($uri);
      $response = _media_wistia_request_data($external_url);
    }
    if (!empty($response)) {
      return $response;
    }
    else {
      throw new Exception("Error Processing Request. (Error: {$response->code}, {$response->error})");
    }
  }

}
