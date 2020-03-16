 /**
 * This code implements a new process on the helpsystems.com website so that registrations for our live webinars
 * can be facilitated via our site rather than forcing our customers to register on the GoToWebinar (GTW) site.
 * The code interfaces with embedded HubSpot forms, which in turn communicate with GoToWebinar via additional
 * HubSpot customizations. 
 *
 * A data file is programmatically created periodically from the list of all of our live webinars currently active on
 * the GTW site (and from all 10 of our GoToWebinar accounts). Current live data can be viewed in a human-readable format here:
 * https://www.helpsystems.com/json-parse-same-source. This code parses that data file and presents upcoming
 * webinars for registration to users on-the-fly via a single HubSpot form per GTW account, which can be easily placed on
 * any page of helpsystems.com to encourage increased webinar registrations.
 *
 * Note that some code that might normally be called from a library (such as converting dates and times) has been added
 * into the code here to help speed up page load time.
 *
 * PRL 10/22/2019
 * 
 */

/**
 * Get webinar IDs of Single Webinars and fill into HubSpot form.
 */
function getWebinarIDs(webinar_type) {

    // Clear any possible Webinar ID values (from any type of Webinar) in HubSpot form from previous submits.
    document.getElementsByName('automation_webinars')[0].value = null;
    document.getElementsByName('business_intelligence_webinars')[0].value = null;
    document.getElementsByName('capacity_management_webinars')[0].value = null;
    document.getElementsByName('cross_security_webinars')[0].value = null;
    document.getElementsByName('document_management_webinars')[0].value = null;
    document.getElementsByName('helpsystems_webinars')[0].value = null;
    document.getElementsByName('ibm_i_security_webinars')[0].value = null;
    document.getElementsByName('managed_file_transfer_webinars')[0].value = null;
    document.getElementsByName('network_monitoring_webinars')[0].value = null;
    document.getElementsByName('systems_management_webinars')[0].value = null;

    // Only Single Webinars need have their IDs filled into the form.
    if (webinar_type == "Single Webinar") {
        var webinarid;
        var foundkey = 0;

        if (document.querySelector(".field-name-field-automation-webinar-account > .field-items > .field-item > p")) {
            webinarid = document.querySelector(".field-name-field-automation-webinar-account > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('automation_webinars')[0].value = webinarid.innerHTML;
                //alert ("Automation Webinar: " + document.getElementsByName('automation_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-business-intelligence-webi > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-business-intelligence-webi > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('business_intelligence_webinars')[0].value = webinarid.innerHTML;
                //alert ("BI Webinar: " + document.getElementsByName('business_intelligence_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-capacity-managment-gtw-acc > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-capacity-managment-gtw-acc > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('capacity_management_webinars')[0].value = webinarid.innerHTML;
                //alert ("Capacity Webinar: " + document.getElementsByName('capacity_management_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-cybersecurity-gtw-account- > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-cybersecurity-gtw-account- > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('cross_security_webinars')[0].value = webinarid.innerHTML;
                //alert ("Cybersecurity Webinar: " + document.getElementsByName('cross_security_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-doc-management-gtw-account > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-doc-management-gtw-account > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('document_management_webinars')[0].value = webinarid.innerHTML;
                //alert ("Doc Webinar: " + document.getElementsByName('document_management_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-helpsystems-gtw-account-id > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-helpsystems-gtw-account-id > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('helpsystems_webinars')[0].value = webinarid.innerHTML;
                //alert ("HelpSystems Webinar: " + document.getElementsByName('helpsystems_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-ibm-i-security-gtw-account > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-ibm-i-security-gtw-account > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('ibm_i_security_webinars')[0].value = webinarid.innerHTML;
                //alert ("IBM i Webinar: " + document.getElementsByName('ibm_i_security_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-mft-gtw-account-id-s- > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-mft-gtw-account-id-s- > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('managed_file_transfer_webinars')[0].value = webinarid.innerHTML;
                //alert ("MFT Webinar: " + document.getElementsByName('managed_file_transfer_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-network-monitoring-gtw-acc > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-network-monitoring-gtw-acc > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('network_monitoring_webinars')[0].value = webinarid.innerHTML;
                //alert ("Network Webinar: " + document.getElementsByName('network_monitoring_webinars')[0].value);
            }
        }
        if ((foundkey === 0) && (document.querySelector(".field-name-field-systems-management-gtw-acc > .field-items > .field-item > p"))) {
            webinarid = document.querySelector(".field-name-field-systems-management-gtw-acc > .field-items > .field-item > p");
            if (webinarid.innerHTML) {
                // Put Webinar ID into HubSpot form
                foundkey = 1;
                document.getElementsByName('systems_management_webinars')[0].value = webinarid.innerHTML;
                //alert ("Systems Webinar: " + document.getElementsByName('systems_management_webinars')[0].value);
            }
        }
    }
}

/**
 * Parse the URL and return the URL parameters.
 */
function getup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var string = window.location.href;

    // Remove extraneous characters added to the URL by AJAX paging.
    string = string.split('#')[0];
    string = string.split('&page')[0];
    var results = regex.exec(string);
    if (results === null) {
        return "0";
    } else {
        return results[1];
    }
}

/**
 * Convert ISO 8601 Date Format into human-readable form.
 */
var convertDate = function(datein) {
    var date = datein.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/);
    if (date === null) {
        return false;
    } else {
        var monthString, monthShortString;
        switch (date[2]) {
            case "01":
                monthString = "January ";
                monthShortString = "JAN";
                break;
            case "02":
                monthString = "February ";
                monthShortString = "FEB";
                break;
            case "03":
                monthString = "March ";
                monthShortString = "MAR";
                break;
            case "04":
                monthString = "April ";
                monthShortString = "APR";
                break;
            case "05":
                monthString = "May ";
                monthShortString = "MAY";
                break;
            case "06":
                monthString = "June ";
                monthShortString = "JUN";
                break;
            case "07":
                monthString = "July ";
                monthShortString = "JUL";
                break;
            case "08":
                monthString = "August ";
                monthShortString = "AUG";
                break;
            case "09":
                monthString = "September ";
                monthShortString = "SEP";
                break;
            case "10":
                monthString = "October ";
                monthShortString = "OCT";
                break;
            case "11":
                monthString = "November ";
                monthShortString = "NOV";
                break;
            case "12":
                monthString = "December ";
                monthShortString = "DEC";
                break;
            default:
                // do nothing
        }
        var dateObj = {
            dateFormat1: date[3] + '.' + date[2] + '.' + date[1],
            dateFormat2: date[1] + '-' + date[2] + '-' + date[3],
            dateFormat3: date[2] + '/' + date[3] + '/' + date[1],
            dateFormat4: monthString + date[3] + ', ' + date[1] + ' ' + date[4] + ':' + date[5],
            dateFormat5: monthString + date[3] + ', ' + date[1],
            time: date[4] + ':' + date[5] + ':' + date[6],
            longMonth: monthString,
            shortMonth: monthShortString,
            dayOnly: date[3],
        };
        return dateObj;
    }
};

/**
 * Convert 3-letter month to full month name.
 */
var convertMonth = function(monthin) {
    switch (monthin) {
        case "Jan":
            return ("January ");
        case "Feb":
            return ("February ");
        case "Mar":
            return ("March ");
        case "Apr":
            return ("April ");
        case "May":
            return ("May ");
        case "Jun":
            return ("June ");
        case "Jul":
            return ("July ");
        case "Aug":
            return ("August ");
        case "Sep":
            return ("September ");
        case "Oct":
            return ("October ");
        case "Nov":
            return ("November ");
        case "Dec":
            return ("December ");
        default:
            return (0);
    }
};

/**
 * Convert 3-letter day to full day name.
 */
var convertDayofweek = function(dayofweek) {
    var dayofweekF;
    switch (dayofweek) {
        case "Mon":
            dayofweekF = "Monday";
            break;
        case "Tue":
            dayofweekF = "Tuesday";
            break;
        case "Wed":
            dayofweekF = "Wednesday";
            break;
        case "Thu":
            dayofweekF = "Thursday";
            break;
        case "Fri":
            dayofweekF = "Friday";
            break;
        case "Sat":
            dayofweekF = "Saturday";
            break;
        case "Sun":
            dayofweekF = "Sunday";
            break;
        default:
            // do nothing
    }
    return (dayofweekF);
};

/**
 * Convert military time to 12-hour time.
 */
var convertMilitaryTime = function(twoDigit) {
    switch (twoDigit) {
        case 12:
            return (12);
        case 13:
            return (01);
        case 14:
            return (02);
        case 15:
            return (03);
        case 16:
            return (04);
        case 17:
            return (05);
        case 18:
            return (06);
        case 19:
            return (07);
        case 20:
            return (08);
        case 21:
            return (09);
        case 22:
            return (10);
        case 23:
            return (11);
        case 0:
            return (12);
        default:
            return (null);
    }
};

/**
 * Populate various elements on the page from the retrieved data, such as date boxes, tooltips, form elements, etc.
 */
function populatePageElements(numMatches, program_subtype, heroes) {
    var webinar_type_selector = document.querySelector(".field-name-field-webinar-type > .field-items > .field-item");
    if (webinar_type_selector !== null) {
        webinar_type = webinar_type_selector.innerHTML;
        switch (webinar_type) {
            case "Single Webinar":
            case "Webinar Series":
            case "Webinar Program":

                // Set up to populate date boxes in right sidebar
                var webinar_select_box = document.querySelector('.hs-form select[name="webinar_attending"]');
                checkBoxes = document.querySelectorAll('.hs_webinars_attending input');
                var checkBoxesLabel = document.querySelectorAll('.hs_webinars_attending .hs-form-checkbox span');
                webinar_select_box.options.length = 1;
                var options, prnDt, prnDet, startDateString, endDateString, dayofweek, date1, fullDate, startTime, startTimef, strindex, endTime, endTimef, startTimeint, endTimeint, checkBoxDate, toolTipStart, toolTipStartf, toolTipStartff, toolTipEnd, toolTipEndf, toolTipEndff, toolTipStringFull, toolTipStringFullf, toolTipStringFullff, selectBoxStartDate, selectBoxEndDate, startTimeSave, endTimeSave, showEndTime;
                var datebox_month = document.getElementsByClassName("datebox__month__single");
                var datebox_day = document.getElementsByClassName("datebox__day");
                var rightside_date = document.getElementsByClassName("event_date1");
                var datebox_starttime = document.getElementsByClassName("event_time1");
                var datebox_endtime = document.getElementsByClassName("event_time2");

                // Make sure we're supposed to show the end time of the webinar
                if (datebox_endtime.length > 0) {
                    showEndTime = 1;
                } else {
                    showEndTime = 0;
                }
                var icon_trigger = document.getElementsByClassName("icon-trigger");

                // Cap the number of webinars to show at 5 for Series and 9 for Program
                var webinars_to_show;
                if (webinar_type == "Webinar Series") {
                    if (numMatches < 5) {
                        webinars_to_show = numMatches;
                    } else {
                        webinars_to_show = 5;
                    }
                } else {
                    if (numMatches < 9) {
                        webinars_to_show = numMatches;
                    } else {
                        webinars_to_show = 9;
                    }
                }

                // Cap the number of webinars returned in the dropdown or checkboxes and sidebar
                for (var j = 1; j <= webinars_to_show; j++) {
                    //options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
                    options = {
                        weekday: 'long',
                        hour12: false
                    };
                    if (program_subtype == "plain_topic") {
                        prnDt = new Date(heroes[j - 1].field_event_date_value.toString()).toLocaleTimeString('en-US', options);
                        prnDet = new Date(heroes[j - 1].field_event_date_value2.toString()).toLocaleTimeString('en-US', options);
                        startDateString = new Date(heroes[j - 1].field_event_date_value.toString());
                        endDateString = new Date(heroes[j - 1].field_event_date_value2.toString());
                    } else {
                        prnDt = new Date(heroes.webinars[saveIndices[j - 1]].times[0].start.toString()).toLocaleTimeString('en-US', options);
                        prnDet = new Date(heroes.webinars[saveIndices[j - 1]].times[0].end.toString()).toLocaleTimeString('en-US', options);
                        startDateString = new Date(heroes.webinars[saveIndices[j - 1]].times[0].start.toString());
                        endDateString = new Date(heroes.webinars[saveIndices[j - 1]].times[0].end.toString());
                    }
                    startTime = prnDt.substr(prnDt.indexOf(' '));
                    strindex = startTime.lastIndexOf(":");
                    startTimef = startTime.substring(0, strindex);
                    endTime = prnDet.substr(prnDet.indexOf(' '));
                    strindex = endTime.lastIndexOf(":");
                    endTimef = endTime.substring(0, strindex);

                    if (webinar_type != "Single Webinar") {

                        // Populate date and time info in right sidebar
                        if (datebox_month.length > 0) {
                            if (program_subtype == "plain_topic") {
                                datebox_month[j - 1].innerHTML = convertDate(heroes[j - 1].field_event_date_value.toString().replace(' ', 'T') + 'Z').shortMonth;
                            } else {
                                datebox_month[j - 1].innerHTML = convertDate(heroes.webinars[saveIndices[j - 1]].times[0].start.toString()).shortMonth;
                            }
                        }
                        if (datebox_day.length > 0) {
                            if (program_subtype == "plain_topic") {
                                datebox_day[j - 1].innerHTML = convertDate(heroes[j - 1].field_event_date_value.toString().replace(' ', 'T') + 'Z').dayOnly;
                            } else {
                                datebox_day[j - 1].innerHTML = startDateString.toString().substring(8, 10);
                            }
                        }
                    }
                    dayofweek = convertDayofweek(startDateString.toString().substring(0, 3));
                    fullDate = convertMonth(startDateString.toString().substring(4, 7)) + startDateString.toString().substring(8, 10) + ", " + startDateString.toString().substring(11, 15);
                    if (webinar_type != "Single Webinar") {
                        if (webinar_type == "Webinar Series") {
                            date1 = '<strong>' + dayofweek + ', <br>' + fullDate + '</strong>';
                        } else {
                            if (program_subtype == "plain_topic") {
                                date1 = '<strong style="position:relative; top:-5px;"><span style="color: #2b91d1;">' + heroes[j - 1].title + '</span><br>' + dayofweek + ', <br>' + convertDate(heroes[j - 1].field_event_date_value.toString().replace(' ', 'T') + 'Z').dateFormat5 + '</strong>';
                            } else {
                                date1 = '<strong style="position:relative; top:-5px;"><span style="color: #2b91d1;">' + heroes.webinars[saveIndices[j - 1]].subject + '</span><br>' + dayofweek + ', <br>' + convertDate(heroes.webinars[saveIndices[j - 1]].times[0].start.toString()).dateFormat5 + '</strong>';
                            }
                        }
                        if (typeof rightside_date[j - 1] !== 'undefined') {
                            rightside_date[j - 1].innerHTML = date1;
                        }
                    }

                    startTimeint = parseInt(startTimef, 10);
                    if (startTimeint < 12) {
                        startTimef = startTimef + "am";
                    }
                    endTimeint = parseInt(endTimef, 10);
                    if (endTimeint < 12) {
                        endTimef = endTimef + "am";
                    }

                    // Create tooltip info
                    toolTipStart = startDateString.toString().substring(4).split('(')[0];
                    toolTipStartf = toolTipStart.replace("GMT", "UTC ");
                    toolTipStartff = toolTipStartf.replace(/\:00 UTC/g, " UTC");
                    toolTipEnd = endDateString.toString().substring(4).split('(')[0];
                    toolTipEndf = toolTipEnd.replace("GMT", "UTC ");
                    toolTipEndff = toolTipEndf.replace(/\:00 UTC/g, " UTC");
                    toolTipStringFull = "<span><strong><div>Starts: </div>STARTHERE</strong><br><strong><div>Ends: &nbsp;</div>ENDHERE</strong></span><em>Event dates and times are calculated from your device's UTC (Coordinated Universal Time) offset.</em>";
                    toolTipStringFullf = toolTipStringFull.replace("STARTHERE", toolTipStartff);
                    toolTipStringFullff = toolTipStringFullf.replace("ENDHERE", toolTipEndff);
                    if (webinar_type != "Single Webinar") {
                        if (typeof icon_trigger[j - 1] !== 'undefined') {
                            icon_trigger[j - 1].setAttribute('data-tip', toolTipStringFullff);
                        }
                    }

                    selectBoxStartDate = toolTipStart.toString().substring(12, 17);
                    selectBoxEndDate = toolTipEnd.toString().substring(12, 17);
                    startTimeint = parseInt(selectBoxStartDate.substring(0, 2), 10);

                    if ((startTimeint < 12) && (startTimeint > 0)) {
                        startTimeSave = selectBoxStartDate + "am";
                        if (typeof datebox_starttime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                            datebox_starttime[j - 1].innerHTML = startTimeSave;
                        }
                    } else if (startTimeint === 0) {
                        startTimeSave = selectBoxStartDate.replace(/^.{2}/g, "12") + "am";
                        if (typeof datebox_starttime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                            datebox_starttime[j - 1].innerHTML = startTimeSave;
                        }
                    } else {
                        startTimeSave = selectBoxStartDate.replace(/^.{2}/g, convertMilitaryTime(startTimeint)) + "pm";
                        if (typeof datebox_starttime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                            datebox_starttime[j - 1].innerHTML = startTimeSave;
                        }
                    }
                    if (showEndTime == 1) {
                        endTimeint = parseInt(selectBoxEndDate.substring(0, 2), 10);
                        if ((endTimeint < 12) && (endTimeint > 0)) {
                            endTimeSave = selectBoxEndDate + "am";
                            if (typeof datebox_endtime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                                datebox_endtime[j - 1].innerHTML = endTimeSave;
                            }
                        } else if (endTimeint === 0) {
                            endTimeSave = selectBoxEndDate.replace(/^.{2}/g, "12") + "am";
                            if (typeof datebox_endtime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                                datebox_endtime[j - 1].innerHTML = endTimeSave;
                            }
                        } else {
                            endTimeSave = selectBoxEndDate.replace(/^.{2}/g, convertMilitaryTime(endTimeint)) + "pm";
                            if (typeof datebox_endtime[j - 1] !== 'undefined' && webinar_type != "Single Webinar") {
                                datebox_endtime[j - 1].innerHTML = endTimeSave;
                            }
                        }
                    }
                    // Populate webinar selection fields on form
                    if (webinar_type == "Single Webinar") {
                        document.getElementsByClassName("hs_webinars_attending")[0].style.display = "block";
                        document.querySelector(".hs_webinars_attending span").innerHTML = "<b style='position:relative; top:12px;'>You might also be interested in these related upcoming webinar(s), would you like to register?<p style='display: block; height: 15px;'></p></b>";
                    }
                    if (webinar_type == "Webinar Series") {
                        // Populate webinar dropdown on form with date and time info
                        webinar_select_box.options[j] = new Option(fullDate + " " + startTimeSave, heroes.webinars[saveIndices[j - 1]].webinarKey, false, false);
                    } else {
                        // For webinar program or related single webinars, populate webinar checkboxes on form with matching titles and webinarkeys.
                        var $jqe = jQuery.noConflict();
                        if (program_subtype == "plain_topic") {
                            checkBoxDate = convertDate(heroes[j - 1].field_event_date_value.toString().replace(' ', 'T') + 'Z').dateFormat5;
                            checkBoxesLabel[j - 1].innerHTML = "<b>" + heroes[j - 1].title + "</b>, " + checkBoxDate + ": " + startTimeSave;
                            $jqe('input[name="webinars_attending"]').eq(j - 1).val(heroes[j - 1].field_cybersecurity_gtw_account__value);
                        } else {
                            checkBoxDate = convertDate(heroes.webinars[saveIndices[j - 1]].times[0].start.toString()).dateFormat5;
                            checkBoxesLabel[j - 1].innerHTML = "<b>" + heroes.webinars[saveIndices[j - 1]].subject + "</b>, " + checkBoxDate + ": " + startTimeSave;
                            $jqe('input[name="webinars_attending"]').eq(j - 1).val(heroes.webinars[saveIndices[j - 1]].webinarKey);
                        }
                    }
                }

                // Hide loading spinner and fade in date boxes when data finishes loading
                $jq('#loader').fadeOut("fast");
                $jq('#no-spin').fadeOut("fast");
                $jq('#date-1').fadeIn("slow");
                if (webinar_type != "Single Webinar") {
                    if (datebox_month[1] !== null && datebox_month[1].innerHTML.length > 1) {
                        $jq('#date-2').fadeIn("slow");
                    }
                    if (datebox_month[2] !== null && datebox_month[2].innerHTML.length > 1) {
                        $jq('#date-3').fadeIn("slow");
                    }
                    if (datebox_month[3] !== null && datebox_month[3].innerHTML.length > 1) {
                        $jq('#date-4').fadeIn("slow");
                    }
                    if (datebox_month[4] !== null && datebox_month[4].innerHTML.length > 1) {
                        $jq('#date-5').fadeIn("slow");
                    }
                    if (datebox_month[5] !== null && datebox_month[5].innerHTML.length > 1) {
                        $jq('#date-6').fadeIn("slow");
                    }
                    if (datebox_month[6] !== null && datebox_month[6].innerHTML.length > 1) {
                        $jq('#date-7').fadeIn("slow");
                    }
                    if (datebox_month[7] !== null && datebox_month[7].innerHTML.length > 1) {
                        $jq('#date-8').fadeIn("slow");
                    }
                    if (datebox_month[8] !== null && datebox_month[8].innerHTML.length > 1) {
                        $jq('#date-9').fadeIn("slow");
                    }
                }

                // Hide any unused date boxes in the right sidebar  
                if (numMatches < 9) {
                    var extraDates2 = document.getElementsByClassName("pane-node-field-event-date");
                    for (var m = 8; m > numMatches; m--) {
                        if (typeof extraDates2[m] !== 'undefined') {
                            extraDates2[m].style.display = "none";
                        }
                    }
                }

                // Hide any unused checkboxes in the form
                if ((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && numMatches < 9) {
                    var extraCheckboxes = document.querySelectorAll(".hs_webinars_attending .hs-form-checkbox");
                    for (var l = 8; l >= numMatches; l--) {
                        extraCheckboxes[l].style.display = "none";
                    }
                }
                break;

            default:
                // do nothing
        }
    }
}

/**
 * Parse the data file of all available Webinars and store all pertinent data.
 */
var parseDatafile = function(account, datafile, webinar_type) {
    var pattern_filename;

    // Set string to parse data file for, based on account
    switch (account) {
        case "Automation":
            pattern_filename = 'GOT FILE: g2w-automation';
            break;
        case "BI":
            pattern_filename = 'GOT FILE: g2w-bi';
            break;
        case "Capacity":
            pattern_filename = 'GOT FILE: g2w-capacitymanagement';
            break;
        case "Cyber":
            pattern_filename = 'GOT FILE: g2w-cybersecurity';
            break;
        case "Doc":
            pattern_filename = 'GOT FILE: g2w-docmanagement';
            break;
        case "Helpsystems":
            pattern_filename = 'GOT FILE: g2w-helpsystems';
            break;
        case "IBMI":
            pattern_filename = 'GOT FILE: g2w-ibmisecurity';
            break;
        case "MFT":
            pattern_filename = 'GOT FILE: g2w-mft';
            break;
        case "Network":
            pattern_filename = 'GOT FILE: g2w-networkmonitoring';
            break;
        case "Systems":
            pattern_filename = 'GOT FILE: g2w-systemsmanagement';
            break;
        default:
            // do nothing
    }

    // Pull JSON list of all webinars for given account from data file and put into obj
    var pattern = 'script id="webinars">';
    var pattern2 = '</s';
    if ((datafile.indexOf(pattern_filename) != -1)) {
        found_auto = 1;
        var newstr = datafile.slice(datafile.indexOf(pattern_filename) + pattern_filename.length);
        var finalstr = newstr.slice(0, newstr.indexOf(pattern2) - (pattern2.length + 8));
        var ffinalstr = finalstr.slice(finalstr.indexOf(pattern) + 32 + pattern.length);
        obj = JSON.parse(ffinalstr);
        console.log("Obj length: ");
        console.log(Object.keys(obj.webinars).length);
        console.log(obj);
        if (Object.keys(obj.webinars).length === 0) {
            account = "0";
        }
        foundAccount = matchTitles(obj, account, webinar_type);

        return (foundAccount);
    }
    return (0);
};

/**
 * Parse through list of available webinars returned from daily data file.
 */
var matchTitles = function(jsonObj, account, webinar_type) {

    // Only parse through the data if there were some webinars returned
    if (account != "-1") {
        heroes = jsonObj;
        foundAccount = 0;
        var pageTitle = document.getElementsByTagName("H1");
        var numMatches = 0;
        var foundIndex = 0;
        saveIndices = [];

        for (var i = 0; i < heroes.webinars.length; i++) {
            
            // Get title, webinarkey, and date of webinar from data file
            var strSubject = heroes.webinars[i].subject.toString();
            var truncSubject = strSubject.split('[')[0];
            var strWebinarkey = heroes.webinars[i].webinarKey.toString();
            var webinarDate = new Date(heroes.webinars[i].times[0].start).getTime();

            switch (webinar_type) {
                // For Webinar Series, current webinar is a match if it matches the title of the page.
                case "Webinar Series":
                    // Get title of webinar on web page
                    var strTitle = pageTitle[0].innerHTML.toString();

                    if (strTitle.trim() === truncSubject.trim()) {
                        numMatches++;
                        saveIndices[foundIndex] = (i);
                        foundIndex++;
                    }
                    break;
                    // For Webinar Program or Single Webinar, current webinar is a match if it isn't the same as one of the webinars already saved, unless they occur within a few days each other.
                case "Webinar Program":
                case "Single Webinar":
                    var alreadyListed = 0;
                    var earlyDate, lateDate;
                    if (webinar_type == "Single Webinar") {
                        var single_webinar_key = document.querySelector(".webinarkey > .pane-content > .field > .field-items > .field-item p").innerHTML;
                    }
                    for (l = 0; l < saveIndices.length; l++) {
                        var savedDate = new Date(heroes.webinars[saveIndices[l]].times[0].start).getTime();
                        if (webinarDate < savedDate) {
                            earlyDate = webinarDate;
                            lateDate = savedDate;
                        } else {
                            earlyDate = savedDate;
                            lateDate = webinarDate;
                        }
                        // To calculate the time difference of two dates 
                        var Difference_In_Time = lateDate - earlyDate;
                        // To calculate the number of days between two dates 
                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

                        if (truncSubject.trim() == heroes.webinars[saveIndices[l]].subject.trim() && Difference_In_Days > 8) {
                            alreadyListed = 1;
                        }
                        
                        // For Single Webinar pages, don't list this page's webinar in the set of related webinars on the form
                        if (webinar_type == "Single Webinar" && strWebinarkey.trim() == single_webinar_key.trim()) {
                            alreadyListed = 1;
                        }
                    }
                    if (alreadyListed === 0) {
                        numMatches++;
                        saveIndices[foundIndex] = (i);
                        foundIndex++;
                    }
                    
                    break;
            }
        }

        if (numMatches > 0) {
            foundAccount = account;
            populatePageElements(numMatches, "account_topic", heroes);
        }
    } else {
        // No related webinars are currently sheduled
        // Hide loading spinner and form checkboxes, show not found message in sidebar
        document.getElementById("loader").style.display = "none";
        document.getElementById("no-spin").style.display = "none";
        document.querySelector('.hs_webinars_attending').style.display = "none";
        var extraCheckboxes2 = document.querySelectorAll(".pane-node-field-event-date");
        for (var n = 8; n >= 6; n--) {
            if (typeof extraCheckboxes2[n] !== 'undefined') {
                extraCheckboxes2[n].style.display = "none";
            }
        }
        document.querySelector("#date-6").innerHTML = "<b style='font-size: 18px; color: #379ddd; padding-left: 10px;'>No related webinars are currently scheduled.</b>";
        document.querySelector("#date-6.pane-content").style.display = "none";
    }
    if (typeof foundAccount === "undefined" || foundAccount === 0) {
        return (0);
    } else {
        return (foundAccount);
    }
};

/**
 *   Return key value for given topic taxonomy
 */
var convertTopicToKey = function(topic) {
    switch (topic) {
        case "Automation":
            return (551);
        case "Cybersecurity":
            return (552);
        case "Power":
            return (553);
        case "Power BI-Weekly":
            return (554);
        case "Product Features &amp; Updates":
            return (555);
        case "APAC":
            return (556);
        case "EMEA":
            return (557);
        case "LATAM":
            return (558);
        case "Automation Webinars – GTW Account":
            return (559);
        case "Business Intelligence Webinars – GTW Account":
            return (560);
        case "Capacity Management Webinars – GTW Account":
            return (561);
        case "Cross Security Webinars – GTW Account":
            return (562);
        case "Document Management Webinars – GTW Account":
            return (563);
        case "HelpSystems Webinars – GTW Account":
            return (564);
        case "IBM i Security Webinars – GTW Account":
            return (565);
        case "Managed File Transfer Webinars – GTW Account":
            return (566);
        case "Network Monitoring Webinars – GTW Account":
            return (567);
        case "Systems Management Webinars – GTW Account":
            return (568);
        default:
            return (0);
    }
};

var foundAccount;
var heroes;
var saveIndices;
var foundWebinarsByTopic = [];
var checkBoxes;
var webinar_topic;
var program_subtype;
var $jq = jQuery.noConflict();

/**
 *   Code to execute on page load
 */
$jq(window).load(function() {

    var extraDates, webinar_type, webinar_topic_selector;
    var single_webinar_key;

    // Get webinar type
    var webinar_type_selector = document.querySelector(".field-name-field-webinar-type > .field-items > .field-item");
    if (webinar_type_selector !== null) {
        webinar_type = webinar_type_selector.innerHTML;
    }
    // For webinars that don't have a type set yet (legacy), or offsite registrations, display register button
    if (webinar_type_selector === null || webinar_type == "Offsite Registration") {
        // Hide loading spinner and show single date box (currently hidden with CSS) if webinar_type is not set on page, or we're using an offsite registration button (no form).
        document.getElementById("loader").style.display = "none";
        document.getElementById("no-spin").style.display = "none";
        document.getElementById("date-1").style.display = "block";
    } else {
        switch (webinar_type) {
            case "Single Webinar":
                // See if this webinar has a topic selected, so we can list any related webinars on the registration form
                webinar_topic_selector = document.querySelector(".field-name-field-webinar-topic > .field-items > .field-item");
                if (webinar_topic_selector !== null) {
                    webinar_topic = webinar_topic_selector.innerHTML;
                }

                // Determine whether this webinar's topic is for an account (so parse data file for matches), or a "plain" topic (so query DB for matches).
                if (parseInt(convertTopicToKey(webinar_topic)) < 559 || parseInt(convertTopicToKey(webinar_topic)) > 568) {
                    program_subtype = "plain_topic";
                } else {
                    program_subtype = "account_topic";
                }

                // Remove Webinar chooser select box and checkboxes (if no related webinars) from form for single webinar
                if (document.getElementById("hubspot-form-wrapper")) {
                    document.getElementsByClassName("hs_webinars_attending")[0].style.display = "none";
                    document.getElementsByClassName("hs_webinar_attending")[0].style.display = "none";
                }

                // Hide unused date boxes in the sidebar (we only need one for Single Webinar)
                extraDates = document.getElementsByClassName("pane-node-field-event-date");
                for (var k = 4; k > 0; k--) {
                    if (typeof extraDates[k] !== 'undefined') {
                        extraDates[k].style.display = "none";
                    }
                }
                break;
            case "Webinar Series":
                // Remove Webinar chooser checkboxes from form for webinar series
                if (document.getElementById("hubspot-form-wrapper")) {
                    document.getElementsByClassName("hs_webinars_attending")[0].style.display = "none";
                }
                break;
            case "Webinar Program":
                // Remove Webinar chooser dropdown from form for webinar program
                if (document.getElementById("hubspot-form-wrapper")) {
                    document.getElementsByClassName("hs_webinar_attending")[0].style.display = "none";
                }

                // Ensure all webinar checkboxes are initially checked - WE DECIDED TO COMMENT THIS OUT UNTIL WE CAN FIGURE OUT THE PRE-POPULATE ISSUE WITH HUBSPOT, PRL
                //var webinarCheckBoxes = document.querySelectorAll('.hs_webinars_attending input');
                //for(k = 0; k < webinarCheckBoxes.length; k++) {
                //  webinarCheckBoxes[k].checked = true;
                //}

                // Get the topic for this webinar program
                webinar_topic_selector = document.querySelector(".field-name-field-webinar-topic > .field-items > .field-item");
                if (webinar_topic_selector !== null) {
                    webinar_topic = webinar_topic_selector.innerHTML;
                }

                // Determine whether this webinar program is for an account (so parse data file for matches), or a "plain" topic (so query DB for matches).
                if (parseInt(convertTopicToKey(webinar_topic)) < 559 || parseInt(convertTopicToKey(webinar_topic)) > 568) {
                    program_subtype = "plain_topic";
                } else {
                    program_subtype = "account_topic";
                }

                break;
            default:
                // Hide loading spinner and show single date box (currently hidden with CSS) if Webinar Type not yet set (legacy webinar pages).
                document.getElementById("loader").style.display = "none";
                document.getElementById("no-spin").style.display = "none";
                document.getElementById("date-1").style.display = "block";
        }
    }

    // Parse URL parameters and fill into hidden form fields if found and form exists.
    if (document.getElementById("hubspot-form-wrapper")) {
        var code_param = getup('code');
        var code_form_field = document.getElementsByClassName("hs_code");
        if (code_param !== 0 && code_form_field.length > 0) {
            code_form_field[0].value = code_param;
        }
        var ls_param = getup('ls');
        var ls_form_field = document.getElementsByClassName("hs_ls");
        if (ls_param !== 0 && ls_form_field.length > 0) {
            ls_form_field[0].value = ls_param;
        }
        var source_param = getup('source');
        var source_form_field = document.getElementsByClassName("hs_source");
        if (source_param !== 0 && source_form_field.length > 0) {
            source_form_field[0].value = source_param;
        }
    }

    // Parse the daily data file for Webinar Programs or Series, or Single Webinars with topic
    if (webinar_type == "Webinar Program" || webinar_type == "Webinar Series" || (webinar_type == "Single Webinar" && webinar_topic)) {
        var requestURL = '/test-gtw-data-file-get';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.send();

        request.onload = function() {

            // Variables to store data for each G2W account from the file retrieval prior to processing
            var str_auto, str_bi, str_capacity, str_cyber, str_doc, str_hs, str_ibmi, str_mft, str_network, str_systems;
            str_auto = str_bi = str_capacity = str_cyber = str_doc = str_hs = str_ibmi = str_mft = str_network = str_systems = request.response;
            foundAccount = 0;

            if (webinar_type == "Webinar Program" || webinar_type == "Webinar Series" || webinar_type == "Single Webinar") {
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Automation Webinars – GTW Account") || (webinar_type == "Webinar Series")) {
                    foundAccount = parseDatafile("Automation", str_auto, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Business Intelligence Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("BI", str_bi, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Capacity Management Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Capacity", str_capacity, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Cross Security Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Cyber", str_cyber, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Document Management Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Doc", str_doc, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "HelpSystems Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Helpsystems", str_hs, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "IBM i Security Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("IBMI", str_ibmi, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Managed File Transfer Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("MFT", str_mft, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Network Monitoring Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Network", str_network, webinar_type);
                }
                if (((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && webinar_topic == "Systems Management Webinars – GTW Account") || (webinar_type == "Webinar Series" && foundAccount === 0)) {
                    foundAccount = parseDatafile("Systems", str_systems, webinar_type);
                }

                if ((webinar_type == "Webinar Program" || webinar_type == "Single Webinar") && program_subtype == "plain_topic") {

                    // Pull the associated webinar data over from the backend DB so we can match all single webinars that have the same topic as this page
                    var node_webinar_ids_automation = Drupal.settings.webinar_ids_automation;
                    var node_webinar_ids_bi = Drupal.settings.webinar_ids_bi;
                    var node_webinar_ids_capacity = Drupal.settings.webinar_ids_capacity;
                    var node_webinar_ids_cyber = Drupal.settings.webinar_ids_cyber;
                    var node_webinar_ids_docm = Drupal.settings.webinar_ids_docm;
                    var node_webinar_ids_hs = Drupal.settings.webinar_ids_hs;
                    var node_webinar_ids_ibmi = Drupal.settings.webinar_ids_ibmi;
                    var node_webinar_ids_mft = Drupal.settings.webinar_ids_mft;
                    var node_webinar_ids_network = Drupal.settings.webinar_ids_network;
                    var node_webinar_ids_systems = Drupal.settings.webinar_ids_systems;

                    var foundWebinarsByTopicIndex = 0;
                    var autoArray = Object.entries(node_webinar_ids_automation);
                    var biArray = Object.entries(node_webinar_ids_bi);
                    var capacityArray = Object.entries(node_webinar_ids_capacity);
                    var cyberArray = Object.entries(node_webinar_ids_cyber);
                    var docmArray = Object.entries(node_webinar_ids_docm);
                    var hsArray = Object.entries(node_webinar_ids_hs);
                    var ibmiArray = Object.entries(node_webinar_ids_ibmi);
                    var mftArray = Object.entries(node_webinar_ids_mft);
                    var networkArray = Object.entries(node_webinar_ids_network);
                    var systemsArray = Object.entries(node_webinar_ids_systems);

                    // If single webinar, get this page's webinarkey to ensure it's not picked up as a related webinar below
                    if (webinar_type == "Single Webinar") {
                        single_webinar_key = document.querySelector(".webinarkey > .pane-content > .field > .field-items > .field-item p").innerHTML;
                    }

                    // Loop through all Automation webinars and see if topic matches
                    if (autoArray.length > 0) {
                        for (n = 0; n < autoArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (autoArray[n][1].field_automation_webinar_account_value != single_webinar_key.trim()))) {
                                if (autoArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    autoArray[n][1].gtwaccount = 'Automation';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = autoArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all BI webinars and see if topic matches
                    if (biArray.length > 0) {
                        for (n = 0; n < biArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (biArray[n][1].field_business_intelligence_webi_value != single_webinar_key.trim()))) {
                                if (biArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    biArray[n][1].gtwaccount = 'BI';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = biArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all Capacity Management webinars and see if topic matches
                    if (capacityArray.length > 0) {
                        for (n = 0; n < capacityArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (capacityArray[n][1].field_capacity_managment_gtw_acc_value != single_webinar_key.trim()))) {
                                if (capacityArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    capacityArray[n][1].gtwaccount = 'Capacity';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = capacityArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all Cybersecurity webinars and see if topic matches
                    if (cyberArray.length > 0) {
                        for (n = 0; n < cyberArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (cyberArray[n][1].field_cybersecurity_gtw_account__value != single_webinar_key.trim()))) {
                                if (cyberArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    cyberArray[n][1].gtwaccount = 'Cyber';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = cyberArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all Document Management webinars and see if topic matches
                    if (docmArray.length > 0) {
                        for (n = 0; n < docmArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (docmArray[n][1].field_doc_management_gtw_account_value != single_webinar_key.trim()))) {
                                if (docmArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    docmArray[n][1].gtwaccount = 'Doc';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = docmArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all HelpSystems (International) webinars and see if topic matches
                    if (hsArray.length > 0) {
                        for (n = 0; n < hsArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (hsArray[n][1].field_helpsystems_gtw_account_id_value != single_webinar_key.trim()))) {
                                if (hsArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    hsArray[n][1].gtwaccount = 'Helpsystems';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = hsArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all IBM i webinars and see if topic matches
                    if (ibmiArray.length > 0) {
                        for (n = 0; n < ibmiArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (ibmiArray[n][1].field_ibm_i_security_gtw_account_value != single_webinar_key.trim()))) {
                                if (ibmiArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    ibmiArray[n][1].gtwaccount = 'IBMI';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = ibmiArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all MFT webinars and see if topic matches
                    if (mftArray.length > 0) {
                        for (n = 0; n < mftArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (mftArray[n][1].field_mft_gtw_account_id_s__value != single_webinar_key.trim()))) {
                                if (mftArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    mftArray[n][1].gtwaccount = 'MFT';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = mftArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all Network Monitoring webinars and see if topic matches
                    if (networkArray.length > 0) {
                        for (n = 0; n < networkArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (networkArray[n][1].field_network_monitoring_gtw_acc_value != single_webinar_key.trim()))) {
                                if (networkArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    networkArray[n][1].gtwaccount = 'Network';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = networkArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }

                    // Loop through all Systems Management webinars and see if topic matches
                    if (systemsArray.length > 0) {
                        for (n = 0; n < systemsArray.length; n++) {
                            if (webinar_type == "Webinar Program" || (webinar_type == "Single Webinar" && (systemsArray[n][1].field_systems_management_gtw_acc_value != single_webinar_key.trim()))) {
                                if (systemsArray[n][1].field_webinar_topic_target_id == convertTopicToKey(webinar_topic)) {
                                    systemsArray[n][1].gtwaccount = 'Systems';
                                    foundWebinarsByTopic[foundWebinarsByTopicIndex] = systemsArray[n][1];
                                    foundWebinarsByTopicIndex++;
                                }
                            }
                        }
                    }
                    populatePageElements(foundWebinarsByTopic.length, program_subtype, foundWebinarsByTopic);  
                }
            }
        };
    }
    // Code to execute on form submit
    if (document.getElementById("hubspot-form-wrapper")) {
        document.querySelector('.hs-form input[type="submit"]').addEventListener('click', function(evt) {

            // Initialize webinar ID form fields  
            getWebinarIDs(webinar_type);

            switch (webinar_type) {
                case "Single Webinar":
                case "Webinar Program":

                    // Make sure at least one webinar checkbox has been checked
                    var checkBoxesSubmitted = document.querySelectorAll('.hs_webinars_attending input');
                    var checkBoxesShown = document.querySelectorAll('.hs_webinars_attending li.hs-form-checkbox');
                    var foundBoxes = checkBoxesSubmitted.length; // Number of all checkboxes on form
                    var foundChecked = 0; // Number of checked checkboxes on form
                    var checkedIndex = 0;
                    var webinarChecked = [];

                    if (program_subtype) {
                        for (k = 1; k <= checkBoxesSubmitted.length; k++) {
                            if (checkBoxesShown[k - 1].style.display == "none") {
                                foundBoxes--;
                            }
                        }

                        if (program_subtype == "account_topic") {
                            for (k = 1; k <= foundBoxes; k++) {
                                if (checkBoxesSubmitted[k - 1].checked) {
                                    foundChecked++;
                                    webinarChecked[checkedIndex] = heroes.webinars[saveIndices[k - 1]].webinarKey;
                                    checkedIndex++;
                                }
                            }
                        } else {
                            for (k = 1; k <= foundBoxes; k++) {
                                if (checkBoxesSubmitted[k - 1].checked) {
                                    foundChecked++;
                                    console.log("foundWebinarsByTopic after submit:");
                                    console.log(foundWebinarsByTopic);
                                    console.log(k - 1);
                                    switch (foundWebinarsByTopic[k - 1].gtwaccount) {
                                        case "Automation":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_automation_webinar_account_value;
                                            break;
                                        case "BI":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_business_intelligence_webi_value;
                                            break;
                                        case "Capacity":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_capacity_managment_gtw_acc_value;
                                            break;
                                        case "Cyber":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_cybersecurity_gtw_account__value;
                                            break;
                                        case "Doc":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_doc_management_gtw_account_value;
                                            break;
                                        case "Helpsystems":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_helpsystems_gtw_account_id_value;
                                            break;
                                        case "IBMI":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_ibm_i_security_gtw_account_value;
                                            break;
                                        case "MFT":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_mft_gtw_account_id_s__value;
                                            break;
                                        case "Network":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_network_monitoring_gtw_acc_value;
                                            break;
                                        case "Systems":
                                            webinarChecked[checkedIndex] = foundWebinarsByTopic[k - 1].field_systems_management_gtw_acc_value;
                                            break;
                                        default:
                                    }
                                    checkedIndex++;
                                }
                            }
                        }

                        if (webinar_type == "Webinar Program") {
                            if (foundChecked === 0) {
                                evt.preventDefault();
                                evt.stopPropagation();
                                alert("Please select at least one webinar from the list!");
                                return false;
                            }
                        }

                        // Change bogus value of checked checkboxes back into corresponding legit webinar IDs
                        var $jqe = jQuery.noConflict();
                        if (program_subtype == "account_topic") {
                            for (i = 1; i <= saveIndices.length; i++) {                     
                                $jqe('input[name="webinars_attending"]').eq(i - 1).val(heroes.webinars[saveIndices[i - 1]].webinarKey);
                            }
                        } else {
                            for (i = 1; i <= foundBoxes; i++) {
                                switch (foundWebinarsByTopic[i - 1].gtwaccount) {
                                    case "Automation":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_automation_webinar_account_value);
                                        break;
                                    case "BI":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_business_intelligence_webi_value);
                                        break;
                                    case "Capacity":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_capacity_managment_gtw_acc_value);
                                        break;
                                    case "Cyber":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_cybersecurity_gtw_account__value);
                                        break;
                                    case "Doc":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_doc_management_gtw_account_value);
                                        break;
                                    case "Helpsystems":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_helpsystems_gtw_account_id_value);
                                        break;
                                    case "IBMI":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_ibm_i_security_gtw_account_value);
                                        break;
                                    case "MFT":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_mft_gtw_account_id_s__value);
                                        break;
                                    case "Network":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_network_monitoring_gtw_acc_value);
                                        break;
                                    case "Systems":
                                        $jqe('input[name="webinars_attending"]').eq(i - 1).val(foundWebinarsByTopic[i - 1].field_systems_management_gtw_acc_value);
                                        break;
                                    default:
                                }
                            }
                        }

                        // Construct string/s of all webinars checked
                        // account_topic webinar programs will have only one GTW account, but plain_topic webinar programs can have webinars from multiple GTW accounts.
                        var webinarsCheckedString;
                        var autoCheckedString, biCheckedString, capacityCheckedString, cyberCheckedString, docmCheckedString, hsCheckedString, ibmiCheckedString, mftCheckedString, networkCheckedString, systemsCheckedString;
                        if (program_subtype == "account_topic") {
                            if (foundChecked === 1) {
                                webinarsCheckedString = webinarChecked[0];
                            } else {
                                webinarsCheckedString = webinarChecked[0];
                                for (l = 1; l < foundChecked; l++) {
                                    webinarsCheckedString = webinarsCheckedString + "," + webinarChecked[l];
                                }
                            }
                        } else {
                            autoCheckedString = biCheckedString = capacityCheckedString = cyberCheckedString = docmCheckedString = hsCheckedString = ibmiCheckedString = mftCheckedString = networkCheckedString = systemsCheckedString = 0;

                            for (i = 1; i <= foundBoxes; i++) {
                                switch (foundWebinarsByTopic[i - 1].gtwaccount) {
                                    case "Automation":
                                        if (autoCheckedString === 0) {
                                            autoCheckedString = foundWebinarsByTopic[i - 1].field_automation_webinar_account_value;
                                        } else {
                                            autoCheckedString = autoCheckedString + "," + foundWebinarsByTopic[i - 1].field_automation_webinar_account_value;
                                        }
                                        break;
                                    case "BI":
                                        if (biCheckedString === 0) {
                                            biCheckedString = foundWebinarsByTopic[i - 1].field_business_intelligence_webi_value;
                                        } else {
                                            biCheckedString = biCheckedString + "," + foundWebinarsByTopic[i - 1].field_business_intelligence_webi_value;
                                        }
                                        break;
                                    case "Capacity":
                                        if (capacityCheckedString === 0) {
                                            capacityCheckedString = foundWebinarsByTopic[i - 1].field_capacity_managment_gtw_acc_value;
                                        } else {
                                            capacityCheckedString = capacityCheckedString + "," + foundWebinarsByTopic[i - 1].field_capacity_managment_gtw_acc_value;
                                        }
                                        break;
                                    case "Cyber":
                                        if (cyberCheckedString === 0) {
                                            cyberCheckedString = foundWebinarsByTopic[i - 1].field_cybersecurity_gtw_account__value;
                                        } else {
                                            cyberCheckedString = cyberCheckedString + "," + foundWebinarsByTopic[i - 1].field_cybersecurity_gtw_account__value;
                                        }
                                        break;
                                    case "Doc":
                                        if (docmCheckedString === 0) {
                                            docmCheckedString = foundWebinarsByTopic[i - 1].field_doc_management_gtw_account_value;
                                        } else {
                                            docmCheckedString = docmCheckedString + "," + foundWebinarsByTopic[i - 1].field_doc_management_gtw_account_value;
                                        }
                                        break;
                                    case "Helpsystems":
                                        if (hsCheckedString === 0) {
                                            hsCheckedString = foundWebinarsByTopic[i - 1].field_helpsystems_gtw_account_id_value;
                                        } else {
                                            hsCheckedString = hsCheckedString + "," + foundWebinarsByTopic[i - 1].field_helpsystems_gtw_account_id_value;
                                        }
                                        break;
                                    case "IBMI":
                                        if (ibmiCheckedString === 0) {
                                            ibmiCheckedString = foundWebinarsByTopic[i - 1].field_ibm_i_security_gtw_account_value;
                                        } else {
                                            ibmiCheckedString = ibmiCheckedString + "," + foundWebinarsByTopic[i - 1].field_ibm_i_security_gtw_account_value;
                                        }
                                        break;
                                    case "MFT":
                                        if (mftCheckedString === 0) {
                                            mftCheckedString = foundWebinarsByTopic[i - 1].field_mft_gtw_account_id_s__value;
                                        } else {
                                            mftCheckedString = mftCheckedString + "," + foundWebinarsByTopic[i - 1].field_mft_gtw_account_id_s__value;
                                        }
                                        break;
                                    case "Network":
                                        if (networkCheckedString === 0) {
                                            networkCheckedString = foundWebinarsByTopic[i - 1].field_network_monitoring_gtw_acc_value;
                                        } else {
                                            networkCheckedString = networkCheckedString + "," + foundWebinarsByTopic[i - 1].field_network_monitoring_gtw_acc_value;
                                        }
                                        break;
                                    case "Systems":
                                        if (systemsCheckedString === 0) {
                                            systemsCheckedString = foundWebinarsByTopic[i - 1].field_systems_management_gtw_acc_value;
                                        } else {
                                            systemsCheckedString = systemsCheckedString + "," + foundWebinarsByTopic[i - 1].field_systems_management_gtw_acc_value;
                                        }
                                        break;
                                    default:
                                }
                            }
                        }

                        // Fill the correct webinar ID/s into the correct account form fields
                        // If this is for a single webinar, with additional related webinars selected (that is, there is already a webinar ID stored in the form),
                        // the related webinars will be tacked on the end of the existing webinar ID string
                        if (program_subtype == "account_topic") {
                            switch (foundAccount) {
                                case "Automation":
                                    if (document.getElementsByName('automation_webinars')[0].value === null) {
                                        document.getElementsByName('automation_webinars')[0].value = webinarsCheckedString;
                                    } else {
                                        document.getElementsByName('automation_webinars')[0].value = document.getElementsByName('automation_webinars')[0].value + ',' + webinarsCheckedString;
                                    }
                                    break;
                                case "BI":
                                    if (document.getElementsByName('business_intelligence_webinars')[0].value === null) {
                                        document.getElementsByName('business_intelligence_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('business_intelligence_webinars')[0].value = document.getElementsByName('business_intelligence_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Capacity":
                                    if (document.getElementsByName('capacity_management_webinars')[0].value === null) {
                                        document.getElementsByName('capacity_management_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('capacity_management_webinars')[0].value = document.getElementsByName('capacity_management_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Cyber":
                                    if (document.getElementsByName('cross_security_webinars')[0].value === null) {
                                        document.getElementsByName('cross_security_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('cross_security_webinars')[0].value = document.getElementsByName('cross_security_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Doc":
                                    if (document.getElementsByName('document_management_webinars')[0].value === null) {
                                        document.getElementsByName('document_management_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('document_management_webinars')[0].value = document.getElementsByName('document_management_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Helpsystems":
                                    if (document.getElementsByName('helpsystems_webinars')[0].value === null) {
                                        document.getElementsByName('helpsystems_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('helpsystems_webinars')[0].value = document.getElementsByName('helpsystems_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "IBMI":
                                    if (document.getElementsByName('ibm_i_security_webinars')[0].value === null) {
                                        document.getElementsByName('ibm_i_security_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('ibm_i_security_webinars')[0].value = document.getElementsByName('ibm_i_security_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "MFT":
                                    if (document.getElementsByName('managed_file_transfer_webinars')[0].value === null) {
                                        document.getElementsByName('managed_file_transfer_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('managed_file_transfer_webinars')[0].value = document.getElementsByName('managed_file_transfer_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Network":
                                    if (document.getElementsByName('network_monitoring_webinars')[0].value === null) {
                                        document.getElementsByName('network_monitoring_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('network_monitoring_webinars')[0].value = document.getElementsByName('network_monitoring_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                case "Systems":
                                    if (document.getElementsByName('systems_management_webinars')[0].value === null) {
                                        document.getElementsByName('systems_management_webinars')[0].value = webinarChecked;
                                    } else {
                                        document.getElementsByName('systems_management_webinars')[0].value = document.getElementsByName('systems_management_webinars')[0].value + ',' + webinarChecked;
                                    }
                                    break;
                                default:
                                    // do nothing
                            }
                        } else {
                            if (autoCheckedString !== 0) {
                                if (document.getElementsByName('automation_webinars')[0].value === null) {
                                    document.getElementsByName('automation_webinars')[0].value = autoCheckedString;
                                } else {
                                    document.getElementsByName('automation_webinars')[0].value = document.getElementsByName('automation_webinars')[0].value + ',' + autoCheckedString;
                                }
                            }
                            if (biCheckedString !== 0) {
                                if (document.getElementsByName('business_intelligence_webinars')[0].value === null) {
                                    document.getElementsByName('business_intelligence_webinars')[0].value = biCheckedString;
                                } else {
                                    document.getElementsByName('business_intelligence_webinars')[0].value = document.getElementsByName('business_intelligence_webinars')[0].value + ',' + biCheckedString;
                                }
                            }
                            if (capacityCheckedString !== 0) {
                                document.getElementsByName('capacity_management_webinars')[0].value = capacityCheckedString;
                                if (document.getElementsByName('capacity_management_webinars')[0].value === null) {
                                    document.getElementsByName('capacity_management_webinars')[0].value = capacityCheckedString;
                                } else {
                                    document.getElementsByName('capacity_management_webinars')[0].value = document.getElementsByName('capacity_management_webinars')[0].value + ',' + capacityCheckedString;
                                }
                            }
                            if (cyberCheckedString !== 0) {
                                if (document.getElementsByName('cross_security_webinars')[0].value === null) {
                                    document.getElementsByName('cross_security_webinars')[0].value = cyberCheckedString;
                                } else {
                                    document.getElementsByName('cross_security_webinars')[0].value = document.getElementsByName('cross_security_webinars')[0].value + ',' + cyberCheckedString;
                                }
                            }
                            if (docmCheckedString !== 0) {
                                if (document.getElementsByName('document_management_webinars')[0].value === null) {
                                    document.getElementsByName('document_management_webinars')[0].value = docmCheckedString;
                                } else {
                                    document.getElementsByName('document_management_webinars')[0].value = document.getElementsByName('document_management_webinars')[0].value + ',' + docmCheckedString;
                                }
                            }
                            if (hsCheckedString !== 0) {
                                if (document.getElementsByName('helpsystems_webinars')[0].value === null) {
                                    document.getElementsByName('helpsystems_webinars')[0].value = hsCheckedString;
                                } else {
                                    document.getElementsByName('helpsystems_webinars')[0].value = document.getElementsByName('helpsystems_webinars')[0].value + ',' + hsCheckedString;
                                }
                            }
                            if (ibmiCheckedString !== 0) {
                                if (document.getElementsByName('ibm_i_security_webinars')[0].value === null) {
                                    document.getElementsByName('ibm_i_security_webinars')[0].value = ibmiCheckedString;
                                } else {
                                    document.getElementsByName('ibm_i_security_webinars')[0].value = document.getElementsByName('ibm_i_security_webinars')[0].value + ',' + ibmiCheckedString;
                                }
                            }
                            if (mftCheckedString !== 0) {
                                if (document.getElementsByName('managed_file_transfer_webinars')[0].value === null) {
                                    document.getElementsByName('managed_file_transfer_webinars')[0].value = mftCheckedString;
                                } else {
                                    document.getElementsByName('managed_file_transfer_webinars')[0].value = document.getElementsByName('managed_file_transfer_webinars')[0].value + ',' + mftCheckedString;
                                }
                            }
                            if (networkCheckedString !== 0) {
                                if (document.getElementsByName('network_monitoring_webinars')[0].value === null) {
                                    document.getElementsByName('network_monitoring_webinars')[0].value = networkCheckedString;
                                } else {
                                    document.getElementsByName('network_monitoring_webinars')[0].value = document.getElementsByName('network_monitoring_webinars')[0].value + ',' + networkCheckedString;
                                }
                            }
                            if (systemsCheckedString !== 0) {
                                if (document.getElementsByName('systems_management_webinars')[0].value === null) {
                                    document.getElementsByName('systems_management_webinars')[0].value = systemsCheckedString;
                                } else {
                                    document.getElementsByName('systems_management_webinars')[0].value = document.getElementsByName('systems_management_webinars')[0].value + ',' + systemsCheckedString;
                                }
                            }
                        }

                    }
                    break;
                case "Webinar Series":
                    // Make sure a webinar has been selected from the dropdown
                    webinarselected = $jq('.hs-form select[name="webinar_attending"]');

                    if (webinarselected.val() === null) {
                        evt.preventDefault();
                        evt.stopPropagation();
                        alert("Please select a webinar from the list!");
                        document.querySelector('.hs-form select[name="webinar_attending"]').focus();
                        document.querySelector('.hs-form select[name="webinar_attending"]').style.borderColor = "red";
                        document.querySelector('.hs-form select[name="webinar_attending"]').style.boxShadow = "2px 2px 2px red";
                        return false;
                    }

                    switch (foundAccount) {
                        case "Automation":
                            document.getElementsByName('automation_webinars')[0].value = webinarselected.val();
                            break;
                        case "BI":
                            document.getElementsByName('business_intelligence_webinars')[0].value = webinarselected.val();
                            break;
                        case "Capacity":
                            document.getElementsByName('capacity_management_webinars')[0].value = webinarselected.val();
                            break;
                        case "Cyber":
                            document.getElementsByName('cross_security_webinars')[0].value = webinarselected.val();
                            break;
                        case "Doc":
                            document.getElementsByName('document_management_webinars')[0].value = webinarselected.val();
                            break;
                        case "Helpsystems":
                            document.getElementsByName('helpsystems_webinars')[0].value = webinarselected.val();
                            break;
                        case "IBMI":
                            document.getElementsByName('ibm_i_security_webinars')[0].value = webinarselected.val();
                            break;
                        case "MFT":
                            document.getElementsByName('managed_file_transfer_webinars')[0].value = webinarselected.val();
                            break;
                        case "Network":
                            document.getElementsByName('network_monitoring_webinars')[0].value = webinarselected.val();
                            break;
                        case "Systems":
                            document.getElementsByName('systems_management_webinars')[0].value = webinarselected.val();
                            break;
                        default:
                            // do nothing
                    }
                    break;
                default:
                    // do nothing
            }
        });
    }
    return true;
});