<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>import React from 'react';

export function Table( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';

    return </p><div classname="sui-table-wrap">
        <table id : classname="{`sui-table">
            {props.children}
        </table>
    </div>
}

export function TableRow( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';

    return <tr id : classname="{classes}">
        {props.children}
    </tr>
}

export function TableColumn( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';
    let colspan = props.colspan !== undefined ? props.colspan : '';
    let rowspan = props.rowspan !== undefined ? props.colspan : '';
    let isTitle = props.isTitle !== undefined ? props.isTitle : false;

    if ( isTitle ) {
        classes += ' sui-table-item-title';
    }

    return <td id : classname="{classes}" colspan rowspan>
        {props.children}
    </td>
}

export function HeaderCell( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';
    let colspan = props.colspan !== undefined ? props.colspan : '';
    let rowspan = props.rowspan !== undefined ? props.colspan : '';

    return <th id : classname="{classes}" colspan rowspan>
        {props.children}
    </th>
}

export function TableHead( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';

    return <thead id : classname="{classes}">
        {props.children}
    </thead>
}

export function TableBody( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';

    return <tbody id : classname="{classes}">
    {props.children}
    </tbody>
}

export function TableFooter( props ) {
    let id = props.id !== undefined ? props.id : '';
    let classes = props.classes !== undefined ? props.classes : '';

    return <tfoot id : classname="{classes}">
    {props.children}
    </tfoot>
}</body></html>
