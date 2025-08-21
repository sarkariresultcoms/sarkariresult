<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>'use strict';

const searchResults = [];

// Get index from JSON file.
let fuse_config_element = document.querySelector("meta[name='ssp-config-path']");

if (null !== fuse_config_element) {
    let config_path = fuse_config_element.getAttribute("content");
    let index_url = window.location.origin + config_path + 'fuse-index.json';
    let config_url = window.location.origin + config_path + 'fuse-config.json';
    let index;
    let config;

    // Multilingual?
    let language = document.documentElement.lang.substring(0, 2);
    let is_multilingual = false;

    if (document.getElementsByTagName("link").length) {
        let links = document.getElementsByTagName("link");

        for (const link of links) {
            let language_tag = link.getAttribute("hreflang");

            if ('' !== language_tag &amp;&amp; null !== language_tag) {
                is_multilingual = true;
            }
        }
    }



    async function loadConfig(callback) {

        try {
            const response = await fetch( config_url, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.text();
            callback(json);

        } catch (error) {
            console.error(error.message);
        }


    }

    async function loadIndex(callback) {
        try {
            const response = await fetch( index_url, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.text();
            callback(json);

        } catch (error) {
            console.error(error.message);
        }

    }

    loadIndex(function (response) {
        let json = JSON.parse(response);
        const index = Object.values(json);

        // Build search index for Fuse.
        for (const value of index) {
            var result = {
                url: window.location.origin + value.path,
                title: value.title,
                excerpt: value.excerpt,
                content: value.content,
                language: value.language
            };

            if (is_multilingual) {
                if (result.language === language) {
                    searchResults.push(result);
                }
            } else {
                searchResults.push(result);
            }
        }
    });

// Search.

    let keys = ['title', 'content', 'excerpt', 'language'];
    let fuse = null;

    loadConfig(function (response) {
        config = JSON.parse(response);

        fuse = new Fuse(
            searchResults,
            {
                keys: keys,
                shouldSort: true,
                threshold: 0.5,
                maxPatternLength: 50
            }
        );

        initSearch();
    });

    function FuseSearchForm( el ) {
        var self = this;
        let input = '';
        let results = [];
        let selected = -1;
        let showAutoComplete = false;
        let container = el;
        let searchFormNode = null;
        let searchInputNode = null;
        let autoCompleteNode = null;
        let resultNode = null;

        this.handleSearchSubmit = function handleSearchSubmit(event) {
            if (event) {
                event.preventDefault()
            }

            input = searchInputNode.value.trim()
            selected = -1

            document.activeElement.blur()
            autoCompleteNode.innerHTML = self.renderAutoComplete()

            if (input.length &gt; 2) {
                if (results.length) {
                    resultNode.innerHTML = `
                </p><div class="ssp-results"><h5>Searched for: <b>${input}</b></h5>
                <ul>
                  ${results.map((result, index) =&gt; `
                  <a href="https://sarkariresultcoms.github.io/wp-content/plugins/simply-static-pro/assets/%24%7Bresult.item.url%7D" style="text-decoration:none;color:#000000">
                    <li class="auto-complete-item${index === selected ? " selected :>
                      <p><b>${result.item.title}</b>
                        <small>${result.item.excerpt}</small>
                      </p>
                    </li>
                  </a>
                `).join('')}
                </ul></div>`
                } else {
                    resultNode.innerHTML = `
            <div class="ssp-results">
            <h5>Searched for: <b>${input}</b></h5>
            <ul>
            <li>We couldn't find any matching results.</li>
            </ul>
            </div>`
                }
            } else {
                resultNode.innerHTML = '';
            }
        }

        this.renderAutoComplete = function renderAutoComplete() {
            if (!showAutoComplete || input.length &lt; 3 || results.length === 0) {
                autoCompleteNode.classList.remove('show')
                return ''
            } else {
                autoCompleteNode.classList.add('show')
            }
            return `
                <ul>
                  ${results.map((result, index) =&gt; `
                  <a href="https://sarkariresultcoms.github.io/wp-content/plugins/simply-static-pro/assets/%24%7Bresult.item.url%7D" style="text-decoration:none;color:#000000">
                    <li class="auto-complete-item${index === selected ? " selected :>
                      <p><b>${result.item.title}</b>
                        <small>${result.item.excerpt}</small>
                      </p>
                    </li>
                  </a>
                `).join('')}
                </ul>
              `
        }

        this.handleSearchInput = function handleSearchInput(event) {
            input = event.target.value
            results = []
            if (input.length &gt;= 3) {
                results = fuse.search(input).slice(0, 7)
            }
            showAutoComplete = true
            autoCompleteNode.innerHTML = self.renderAutoComplete()
        }

        this.handleAutoCompleteClick = function handleAutoCompleteClick(event) {
            event.stopPropagation() // Prevent click from bubbling to window click handler
            searchInputNode.value = event.target.textContent.trim()
            showAutoComplete = false
            self.handleSearchSubmit()
        }


        this.init = function init() {
            searchFormNode = container.querySelector('.search-form');
            searchInputNode = container.querySelector('.search-input');
            autoCompleteNode = container.querySelector('.search-auto-complete');
            resultNode = container.querySelector('.result');

            if ( ! searchFormNode ) {
                return;
            }

            // Make sure we remove such if it's registered before.
            searchFormNode.removeEventListener('submit', this.handleSearchSubmit)
            searchInputNode.removeEventListener('input', this.handleSearchInput)
            autoCompleteNode.removeEventListener('click', this.handleAutoCompleteClick)

            searchFormNode.addEventListener('submit', this.handleSearchSubmit)
            searchInputNode.addEventListener('input', this.handleSearchInput)
            autoCompleteNode.addEventListener('click', this.handleAutoCompleteClick)
        }

        this.init();

        return this;
    }

    function handleWindowClick(event) {
        let autocompleters = document.querySelectorAll('.search-auto-complete');
        if ( autocompleters.length ) {
            autocompleters.forEach((autocompleteNode) =&gt; autocompleteNode.classList.remove('show') );
        }
    }

    function initSearch() {
        if (ssp_search.use_selector) {
            maybeBuildSearch();
        }
    }

    function maybeBuildSearch() {
        if (!config) {
            return;
        }

        if (!config.selector) {
            return;
        }

        const selectors = config.selector.split(',').map(function (string) {
            return string.replace(' ', '')
        });

        for (let s = 0; s &lt; selectors.length; s++) {
            let selector = selectors[s];

            if (!document.querySelectorAll(selector).length) {
                continue;
            }

            let allSelectors = document.querySelectorAll(selector);

            for (let element = 0; element &lt; allSelectors.length; element++) {
                buildSearch(allSelectors[element]);
            }


        }
    }

    function getRandomId() {
        var id  = 'search' + Date.now() + ( Math.random() * 100 );

        if ( document.getElementById( id ) ) {
            id = getRandomId();
        }

        return id;
    }

    function buildSearch(el) {
        // Holder of search
        var div = document.createElement('div');
        // Random custom ID.&scaron;
        var id  = getRandomId();
        div.setAttribute('id', id);
        div.innerHTML = ssp_search.html;

        el.outerHTML = div.outerHTML;
        // Get it by ID to get the DOM element.
        el = document.getElementById( id );
        var form = new FuseSearchForm(el);
    }

    window.addEventListener('click', handleWindowClick)
} else {
    console.log('No Fuse.js config found.')
}
</body></html>
