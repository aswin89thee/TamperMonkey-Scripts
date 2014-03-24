// ==UserScript==
// @name       Google ad remover
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://www.google.com/*
// @copyright  2012+, You
// ==/UserScript==

div = document.getElementById("tvcap");
if(div)
{
    div.parentNode.removeChild(div);
}

div = document.getElementById("rhs_block");
if(div)
{
    div.parentNode.removeChild(div);
}
