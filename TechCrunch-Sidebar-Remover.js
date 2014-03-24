// ==UserScript==
// @name       TechCrunch Sidebar Remover
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Removes Sidebar in TechCrunch articles and improves Readability
// @match      http://*.techcrunch.com/*
// @copyright  2012+, You
// ==/UserScript==


var div = deleteByClassName('l-sidebar');

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
