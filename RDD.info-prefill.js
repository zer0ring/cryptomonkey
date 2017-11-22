// ==UserScript==
// @name        RDD.info faucet prefill
// @description RDD.info faucet address prefill code for Greasemonkey
// @icon        http://reddcoinfaucet.info/view/images/favicon.png
// @namespace   unoriginal-but-unique
// @include     http://reddcoinfaucet.info/*
// @version     1
// @copyright   2017, neuromancer https://steemit.com/@neuromancer
// @license     GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @updateURL   https://openuserjs.org/meta/neuromancer/RDD.info-prefill-GM.meta.js
// @grant       none
// ==/UserScript==
document.getElementById("address").value = "neuromancer";
