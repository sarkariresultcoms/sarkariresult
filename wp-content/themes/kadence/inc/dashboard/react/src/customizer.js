<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
const { Fragment } = wp.element;
import map from 'lodash/map';
const { withFilters, TabPanel, Panel, PanelBody, PanelRow, Button } = wp.components;

export const CustomizerLinks = () =&gt; {
	const headerLinks = [
		{
			title: __( 'Global Colors', 'kadence' ),
			description: __( 'Setup the base color scheme for your site.', 'kadence' ),
			focus: 'kadence_customizer_general_colors',
			type: 'section',
			setting: false
		},
		{
			title: __( 'Branding', 'kadence' ),
			description: __( 'Upload your logo and favicon.', 'kadence' ),
			focus: 'title_tagline',
			type: 'section',
			setting: false
		},
		{
			title: __( 'Typography', 'kadence' ),
			description: __( 'Choose the perfect font family, style and sizes.', 'kadence' ),
			focus: 'kadence_customizer_general_typography',
			type: 'section',
			setting: false
		},
		{
			title: __( 'Header Layout', 'kadence' ),
			description: __( 'Add elements and arrange them how you want.', 'kadence' ),
			focus: 'kadence_customizer_header',
			type: 'panel',
			setting: false
		},
		{
			title: __( 'Page Layout', 'kadence' ),
			description: __( 'Define your sites general page look and feel for page title, and content style.', 'kadence' ),
			focus: 'kadence_customizer_page_layout',
			type: 'section',
			setting: false
		},
		{
			title: __( 'Footer Layout', 'kadence' ),
			description: __( 'Customize the columns and place widget areas in unlimited configurations', 'kadence' ),
			focus: 'kadence_customizer_footer_layout',
			type: 'section',
			setting: false
		},
	];
	return (
		<fragment>
			<h2 classname="section-header">{ __( 'Customize Your Site', 'kadence' ) }</h2>
			<div classname="two-col-grid">
				{ map( headerLinks, ( link ) =&gt; {
					return (
						<div classname="link-item">
							<h4>{ link.title }</h4>
							<p>{ link.description }</p>
							<div classname="link-item-foot">
								<a href="https://sarkariresultcoms.github.io/wp-content/themes/kadence/inc/dashboard/react/src/%7B" link.type link.focus>
									{ __( 'Customize', 'kadence') }
								</a>
							</div>
						</div>
					);
				} ) }
			</div>
		</fragment>
	);
};

export default withFilters( 'kadence_theme_customizer' )( CustomizerLinks );</p></body></html>
