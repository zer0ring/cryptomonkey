// ==UserScript==
// @name        LTC.info prefill GM
// @namespace   unoriginal-but-unique
// @description LTC.info address prefill code for Greasemonkey
// @icon        http://litecoinfaucet.info/view/images/favicon.png
// @version     1
// @copyright   2017, neuromancer
// @homepageURL https://steemit.com/@neuromancer
// @supportURL  https://openuserjs.org/scripts/neuromancer/LTC.info_address_prefill/issues
// @updateURL   https://openuserjs.org/meta/neuromancer/LTC.info_address_prefill_GM.meta.js
// @downloadURL https://openuserjs.org/install/neuromancer/LTC.info_address_prefill_GM.user.js
// @license     GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @include     http://litecoinfaucet.info/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
document.getElementById("address").value = "neuromancer";
