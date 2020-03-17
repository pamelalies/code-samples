<?php

/**
 * @file
 * Definition of MediaBrowserWistia.
 */

class MediaBrowserWistia extends MediaBrowserPlugin {
  /**
   * Implements MediaBrowserPluginInterface::access().
   */
  public function access($account = NULL) {
    return file_entity_access('create', NULL, $account);
  }

  /**
   * Implements MediaBrowserPlugin::view().
   */
  public function view() {

   $path = drupal_get_path('module', 'media_wistia');
   $project_filter_keyword = variable_get('media_wistia_project_filter_keyword', '');
  
   return array(
        '#title' => t('Wistia videos'),
        '#attached' => array(
          'js' => array(
            $path . '/js/plugins/media_wistia.library.js',
          ),
          'css' => array(
            $path . '/js/plugins/media_wistia.library.css',
          ),
        ),
        '#settings' => array(
          'viewMode' => 'thumbnails',
          'getProjectList' => url('wistia/browser/projectList'),
          'getProject' => url('wistia/browser/project'),
          'getProjectFilterKey' => $project_filter_keyword,
          'types' => array(),
          'multiselect' => FALSE,
        ),
        '#markup' => '<div id="container"><div id="scrollbox">' .
        '<div id="media-browser-wistia-list" class="media-list-thumbnails"></div>' .
        '<div id="wistia-status"></div></div></div>',
      );
  }
}
