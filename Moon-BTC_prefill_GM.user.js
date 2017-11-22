// ==UserScript==
// @name        Moon BTC prefill GM
// @namespace   unoriginal-but-unique
// @description Moon BTC address prefill code for Greasemonkey
// @icon        http://moonbit.co.in/img/btc.png
// @version     1
// @copyright   2017, neuromancer
// @homepageURL https://steemit.com/@neuromancer
// @supportURL  https://openuserjs.org/scripts/neuromancer/Moon-BTC_address_prefill/issues
// @updateURL   https://openuserjs.org/meta/neuromancer/Moon-BTC_address_prefill_GM.meta.js
// @downloadURL https://openuserjs.org/install/neuromancer/Moon-BTC_address_prefill_GM.user.js
// @license     GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @include     http://moonbit.co.in/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
document.getElementById("BodyPlaceholder_PaymentAddressTextbox").value = "neuromancer";
