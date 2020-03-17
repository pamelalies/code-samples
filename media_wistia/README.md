
Readme for the Media: Wistia module.
========================================

Media: Wistia integrates with the Media module to make Wistia videos
available as file entities. Users can insert Wistia videos with file fields
or directly into WYSIWYG text areas with the Media module insert button.


Authors
==============

- Initial Drupal 6 release by Evan Donovan - https://www.drupal.org/u/evandonovan
- Initial Drupal 7 port by Paul Barton - https://www.drupal.org/user/2506918
- Drupal 7 release, cleanup and bugfix by Jeremy Graham - https://www.drupal.org/u/jez500
- Drupal 7 update, to enable the module to work with Media 2.x, and adds project filter 
  feature, (see below), by Pamela Lies - https://www.drupal.org/u/pamelalies


File fields
==============

- Add a new field of type "File" to your content type or entity. Choose the widget type
  "Media file selector" / "Media browser". You can also select an existing file field.
  
- While setting up the field (or after selecting "edit" on an existing field)
  enable:
    - Allowed remote media types: "Video"
    - Allowed URI schemes: "wistia:// (Wistia videos)"

- On "Manage display" for the file field's content or entity type, choose
  "Rendered file" and a view mode. You can also change the view mode for the field.
  
- Set up the Wistia video formatter options for each view mode in Configuration ->
  Media -> File types -> Manage file display. This is where you can choose all your
  Wistia options.  There are settings here for choosing to display your videos inline
  on the page or as popups, setting the display size of the videos, choosing the embed
  type as one of: 1. iFrame (this is the default, but isn't the recommended option from
  Wistia), 2. API (the standard embed code), or 3. SEO (which also includes things like
  the video name, description, thumbnail, etc. with your video embeds, which should
  theoretically be the best option from an SEO perspective.)
  
- When using the file field while creating or editing content, paste a Wistia
  video url into the Web tab.

# Advanced: Media browser plugin

- If you have a Wistia API Key you can enter this in Configuration -> Web Services
  -> Wistia Settings. This will enable a "Wistia" tab on the media selector where
  you can browse your Wistia projects and videos and select them directly from Wistia.
  
- On this same configuration screen, if you enter a string in the "Wistia Project Filter Keyword"
  field, the list of projects returned on the "Wistia" tab will only include projects
  that contain that string.  This can be useful if you're sharing your Wistia account with
  another area or branch of your company and you only want to browse certain projects
  for inclusion on your site.  Just leave the field blank to return all projects.


WYSIWYG inserts
==================

- Enable the Media module "Media insert" button on your WYSIWYG profile.
- Enable "Convert Media tags to markup" filter in the appropriate text formats.
- Configure any desired settings in Configuration -> Media -> "Media browser
  settings"
- Set up Wistia video formatter options in Configuration -> Media -> File types
  -> Manage file display. **Note:** for any view mode that will be used in a WYSIWYG,
  enable both the Wistia video and preview image formatter. Arrange the Video
  formatter on top. This allows the video to be used when the content is viewed,
  and the preview when the content is being edited.

- When editing a text area with your WYSIWYG, click the "Media insert" button.