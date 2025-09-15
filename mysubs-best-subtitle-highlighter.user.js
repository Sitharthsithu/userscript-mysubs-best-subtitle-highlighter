// ==UserScript==
// @name         MySubs Best Subtitle Highlighter
// @namespace    https://greasyfork.org/users/1002054-igorskyflyer
// @version      v1.0.1
// @description  Highlights the most-voted subtitle per language on MySubs film pages. Works only for films!
// @author       igorskyflyer
// @date         2025-09-15
// @match        https://my-subs.co/film*
// @match        https://my-subs.com/film*
// @match        https://my-subs.net/film*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=my-subs.co
// @run-at       document-end
// @grant        none
// @license      CC-BY-NC-ND-4.0
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL https://update.greasyfork.org/scripts/549637/MySubs%20Best%20Subtitle%20Highlighter.user.js
// @updateURL https://update.greasyfork.org/scripts/549637/MySubs%20Best%20Subtitle%20Highlighter.meta.js
// ==/UserScript==

;(() => {
  const languages = document
    .querySelectorAll('.col-md-12')[1]
    .querySelectorAll('ul.list-group')

  for (let i = 0; i < languages.length; i++) {
    let max = -1
    let index = -1
    const entry = languages[i].querySelectorAll('a div.pull-right > b')

    for (let j = 0; j < entry.length; j++) {
      const count = +entry[j].textContent

      if (count > max) {
        max = count
        index = j
      }
    }

    languages[i].querySelectorAll('a')[index].style.background = '#198754'
    languages[i].querySelectorAll('a')[index].style.color = '#eee'
  }
})()
