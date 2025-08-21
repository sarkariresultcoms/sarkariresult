<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>import React from 'react';
import {Row} from "./grid";

require('@wpmudev/shared-ui/dist/js/_src/accordion');

export default function Accordion(props) {
    let id = props.id !== undefined ? props.id : 'blc-accordion';
    let classes = props.classes !== undefined ? props.classes : '';
    let accordionData = props.accordionData !== undefined ? props.accordionData : '';
    let accordionIcon = props.accordionIcon !== undefined ? props.accordionIcon : 'sui-icon-chevron-down';
    let active = props.active !== undefined &amp;&amp; props.active ? true : false;

    //SUI.suiAccordion( document.querySelector(`#${id}.sui-accordion`) );
    SUI.suiAccordion( document.querySelector(`#${id}`) );

    return </p><table id : classname="{`sui-table" sui-accordion>
        <tbody>
        {
            ( accordionData.length &gt; 0 ) &amp;&amp;
            accordionData.map(
                (accordionItem, i) =&gt; {
                    return [
                        <tr key="{`${accordionItem.id}-title`}" id="{`${accordionItem.id}-title`}" classname="{`sui-accordion-item" sui-accordion-item-head :>

                            <td classname="sui-table-item-title">{accordionItem.title}
                                <span classname="sui-accordion-open-indicator">
                                    <span classname="{accordionIcon}" aria-hidden="true"></span>
                                </span>
                            </td>
                        </tr>,
                        <tr key="{`${accordionItem.id}-content`}" id="{`${accordionItem.id}-content`}" classname="{`sui-accordion-item-content" :>
                            <td>
                                <div classname="accordion-content" tabindex="{i}">
                                    {accordionItem.description}
                                </div>
                            </td>
                        </tr>
                    ]
                }
            )
        }
        </tbody>
    </table>
}</body></html>
