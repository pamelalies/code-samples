# code-samples
This repository contains a few examples of my work.

The gtw_registration.js file contains the bulk of the code for pulling data about currently-scheduled webinars from GoToWebinar on-the-fly,
filling in the list of available webinars into a HubSpot form, and when the user chooses their webinar(s), the code interfaces with HubSpot
via their API, which then sends the registration data off to GoToWebinar, and the user then receives their registration confirmation via 
email. This new process gives us the ability to let our users register for all our webinars without ever leaving our website. Prior to
this, users would have to go to the GoToWebinar.com site to register, causing us to lose valuable traffic.

The main_navigation.css file is just an example of styling for responsive sites - providing the appropriate types of header and navigation
for all device sizes.

The media_wistia folder contains all the code for the D7 module "Media Wistia" that I re-wrote to work with the Media 2.x module. Prior
to this, Media Wistia would only work in conjunction with the Media 1.x module - so I needed to create this rewrite for the module to 
work on our site.

The hubspot_forms folder contains all the code I wrote for the D7 version of the "HubSpot Forms" module. We needed this module on our 
site, but it was only available for D8 at the time - and our site was still on D7. 

Please see the README files as well as the code comments for further details!
