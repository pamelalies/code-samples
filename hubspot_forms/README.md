CONTENTS OF THIS FILE
---------------------
* Introduction
* Requirements
* Installation
* Configuration
* Troubleshooting
* Contributing
* Credits
* Maintainers


INTRODUCTION
------------

This module allows you to create Hubspot form blocks on your Drupal sites.

This module comes with a new field type so each entity can have it's own unique form.

The module interfaces with the HubSpot API to obtain a list of all forms in the HubSpot account with the (admin-configured) API key. Resultant
select list can then be added to any content type, allowing editors to add a HubSpot form to a page by simply selecting the form from the list.

The provided CKEditor plugin allows editors to easily embed a Hubspot Form into content by adding the token:
```
[hubspot-form:FORM_ID partner_id:PARTNER_ID]
```


REQUIREMENTS
------------
* Core block module
* Core field module


INSTALLATION
------------
* Enable module
* Enter Hubspot API key at Administration >> Configuration >> Web Services >> Hubspot Forms
  * If you need to generate an API key at Hubspot visit https://app.hubspot.com/keys/get


CONFIGURATION
-------------
* Visit Administration >> Structure >> Block
* Click 'Place block' give your block a name and then select the appropriate form from the provided dropdown.


TROUBLESHOOTING
---------------
* Clear Drupal cache after adding or changing a Hubspot key


CONTRIBUTING
------------
* Create an issue and attach a patch.
* Master branch is default for new contributions.

CREDITS
-----------
* D7 back-port from D8 version of hubspot_form module: by Pamela Lies - https://www.drupal.org/u/pamelalies

MAINTAINERS
-----------
* Minnur Yunusov https://www.drupal.org/u/minnur
