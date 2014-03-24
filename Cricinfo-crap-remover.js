// ==UserScript==
// @name       Cricinfo crap remover
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://*.espncricinfo.com/*
// @copyright  2012+, You
// ==/UserScript==

div = document.getElementById("watch-espn-block");
if(div)
{
    div.parentNode.removeChild(div);
}

div = document.getElementById("rhs_content");
if(div)
{
    div.parentNode.removeChild(div);
}

div = document.getElementById("chromePrompt");
if(div)
{
    div.parentNode.removeChild(div);
}

div = deleteByClassName('edition-msg');

//Generic function that can be used to delete a div by its class name
function deleteByClassName(matchClass) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            {
                elems[i].parentNode.removeChild(elems[i]);
                break;
            }
        }
    }
}
