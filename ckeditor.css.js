/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/

html, body, h1, h2, h3, h4, h5, h6, div, span, blockquote, p, address, form, fieldset, img, ul, ol, dl, dt, dd, li, hr, table, td, th, strong, em, sup, sub, dfn, ins, del, q, cite, var, samp, code, kbd, tt, pre
{
	line-height: 1.5em;
}

body
{
	padding: 10px 30px;
}

input, textarea, select, option, optgroup, button, td, th
{
	font-size: 100%;
}

pre, code, kbd, samp, tt
{
	font-family: monospace,monospace;
	font-size: 1em;
}

body {
    width: 960px;
    margin: 0 auto;
}

code
{
	background: #f3f3f3;
	border: 1px solid #ddd;
	padding: 1px 4px;

	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
}

abbr
{
	border-bottom: 1px dotted #555;
	cursor: pointer;
}

.new
{
	background: #FF7E00;
	border: 1px solid #DA8028;
	color: #fff;
	font-size: 10px;
	font-weight: bold;
	padding: 1px 4px;
	text-shadow: 0 1px 0 #C97626;
	text-transform: uppercase;
	margin: 0 0 0 3px;

	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;

	-moz-box-shadow: 0 2px 3px 0 #FFA54E inset;
	-webkit-box-shadow: 0 2px 3px 0 #FFA54E inset;
	box-shadow: 0 2px 3px 0 #FFA54E inset;
}

h1.samples
{
	color: #0782C1;
	font-size: 200%;
	font-weight: normal;
	margin: 0;
	padding: 0;
}

h1.samples a
{
	color: #0782C1;
	text-decoration: none;
	border-bottom: 1px dotted #0782C1;
}

.samples a:hover
{
	border-bottom: 1px dotted #0782C1;
}

h2.samples
{
	color: #000000;
	font-size: 130%;
	margin: 15px 0 0 0;
	padding: 0;
}

p, blockquote, address, form, pre, dl, h1.samples, h2.samples
{
	margin-bottom: 15px;
}

ul.samples
{
	margin-bottom: 15px;
}

.clear
{
	clear: both;
}

fieldset
{
	margin: 0;
	padding: 10px;
}

body, input, textarea
{
	color: #333333;
	font-family: Arial, Helvetica, sans-serif;
}

body
{
	font-size: 75%;
}

a.samples
{
	color: #189DE1;
	text-decoration: none;
}

form
{
	margin: 0;
	padding: 0;
}

pre.samples
{
	background-color: #F7F7F7;
	border: 1px solid #D7D7D7;
	overflow: auto;
	padding: 0.25em;
	white-space: pre-wrap; /* CSS 2.1 */
	word-wrap: break-word; /* IE7 */
	-moz-tab-size: 4;
	-o-tab-size: 4;
	-webkit-tab-size: 4;
	tab-size: 4;
}

#footer
{
	clear: both;
	padding-top: 10px;
}

#footer hr
{
	margin: 10px 0 15px 0;
	height: 1px;
	border: solid 1px gray;
	border-bottom: none;
}

#footer p
{
	margin: 0 10px 10px 10px;
	float: left;
}

#footer #copy
{
	float: right;
}

#outputSample
{
	width: 100%;
	table-layout: fixed;
}

#outputSample thead th
{
	color: #dddddd;
	background-color: #999999;
	padding: 4px;
	white-space: nowrap;
}

#outputSample tbody th
{
	vertical-align: top;
	text-align: left;
}

#outputSample pre
{
	margin: 0;
	padding: 0;
}

.description
{
	border: 1px dotted #B7B7B7;
	margin-bottom: 10px;
	padding: 10px 10px 0;
	overflow: hidden;
}

label
{
	display: block;
	margin-bottom: 6px;
}

/**
 *	CKEditor editables are automatically set with the "cke_editable" class
 *	plus cke_editable_(inline|themed) depending on the editor type.
 */

/* Style a bit the inline editables. */
.cke_editable.cke_editable_inline
{
	cursor: pointer;
}

/* Once an editable element gets focused, the "cke_focus" class is
   added to it, so we can style it differently. */
.cke_editable.cke_editable_inline.cke_focus
{
	box-shadow: inset 0px 0px 20px 3px #ddd, inset 0 0 1px #000;
	outline: none;
	background: #eee;
	cursor: text;
}

/* Avoid pre-formatted overflows inline editable. */
.cke_editable_inline pre
{
	white-space: pre-wrap;
	word-wrap: break-word;
}

/**
 *	Samples index styles.
 */

.twoColumns,
.twoColumnsLeft,
.twoColumnsRight
{
	overflow: hidden;
}

.twoColumnsLeft,
.twoColumnsRight
{
	width: 45%;
}

.twoColumnsLeft
{
	float: left;
}

.twoColumnsRight
{
	float: right;
}

dl.samples
{
	padding: 0 0 0 40px;
}
dl.samples > dt
{
	display: list-item;
	list-style-type: disc;
	list-style-position: outside;
	margin: 0 0 3px;
}
dl.samples > dd
{
	margin: 0 0 3px;
}
.warning
{
    color: #ff0000;
	background-color: #FFCCBA;
    border: 2px dotted #ff0000;
	padding: 15px 10px;
	margin: 10px 0;
}

/* Used on inline samples */

blockquote
{
	font-style: italic;
	font-family: Georgia, Times, "Times New Roman", serif;
	padding: 2px 0;
	border-style: solid;
	border-color: #ccc;
	border-width: 0;
}

.cke_contents_ltr blockquote
{
	padding-left: 20px;
	padding-right: 8px;
	border-left-width: 5px;
}

.cke_contents_rtl blockquote
{
	padding-left: 8px;
	padding-right: 20px;
	border-right-width: 5px;
}

img.right {
    border: 1px solid #ccc;
    float: right;
    margin-left: 15px;
    padding: 5px;
}

img.left {
    border: 1px solid #ccc;
    float: left;
    margin-right: 15px;
    padding: 5px;
}
