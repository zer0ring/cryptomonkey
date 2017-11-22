// ==UserScript==
// @name        DCR.info address prefill
// @namespace   faucet address prefill
// @description DCR.info address prefill code for Greasemonkey
// @icon        http://decredfaucet.info/view/images/favicon.png
// @version     1
// @copyright   2017, neuromancer (https://steemit.com/@neuromancer)
// @license     GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @include     http://decredfaucet.info/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
document.getElementById("address").value = "neuromancer";
