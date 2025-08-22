<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>'use strict';

let algolia_config_element = document.querySelector("meta[name='ssp-config-path']");

if (null !== algolia_config_element) {
    let config_path = algolia_config_element.getAttribute("content");
    let algolia_config_url = window.location.origin + config_path + 'algolia.json';
    let algolia_config = '';

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

    function loadIndex(callback) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', algolia_config_url, false);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 &amp;&amp; xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    loadIndex(function (response) {
        algolia_config = JSON.parse(response);
    });

    let client = algoliasearch(algolia_config.app_id, algolia_config.api_key)
    let index = client.initIndex(algolia_config.index);

    const selectors = algolia_config.selector.split(',').map(function(string){ return string.replace(' ', '')});

    for(let s=0; s<selectors.length s let selector="selectors[" autocomplete false source: autocomplete.sources.hits displaykey: templates: suggestion: function if suggestion.title return suggestion.language href="'%20+%20window.location.origin%20+%20suggestion.path%20+%20'"><span class="search-result-title">' + suggestion.title + '</span><span class="search-result-excerpt">' + suggestion.excerpt + '</span>';
                        } else {
                            return '<a href="https://sarkariresultcoms.github.io/wp-content/plugins/simply-static-pro/assets/'%20+%20window.location.origin%20+%20suggestion.path%20+%20'"><span class="search-result-title">' + suggestion.title + '</span></a>';
                        }
                    }
                }
            }
        ])
    }

} else {
    console.log('No Algolia config found.')
}

</selectors.length></p></body></html>
