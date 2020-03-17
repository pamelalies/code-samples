<?php

/**
 * @file
 * Administration page for hubspot forms module
 *
 */

function hubspot_forms_settings() {
$form = array();
  $form['hubspot_forms_hubspot_api_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Hubspot API Key'),
    '#description' => t('Please use <strong>demo</strong> to load example forms.
        Generate a <a href="https://app.hubspot.com/keys/get" target="_blank">new key</a>.
        Make sure to clear Drupal cache after you change API Key.'),
    '#default_value' => variable_get('hubspot_forms_hubspot_api_key', ''),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}

