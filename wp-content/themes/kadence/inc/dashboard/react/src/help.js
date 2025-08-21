<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body><p>/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
const { Fragment } = wp.element;
const { withFilters } = wp.components;

export const HelpTab = () =&gt; {
	return (
		</p><div classname="kadence-desk-help-inner">
			<h2>{ __( 'Welcome to Kadence!', 'kadence' ) }</h2>
			<p>{ __( 'You are going to love working with this theme! View the video below to get started with our video tutorials or click the view knowledge base button below to see all the documentation.', 'kadence' ) }</p>
			<div classname="video-container">
				<a href="https://www.youtube.com/watch?v=GqEecMF7WtE"><img width="1280" height="720" src="https://sarkariresultcoms.github.io/wp-content/themes/kadence/inc/dashboard/react/src/%7B" kadencedashboardparams.videoimage alt="{" __ theme getting started tutorial minute quick start guide></a>
			</div>
			<a href="https://kadence-theme.com/learn-kadence" classname="kadence-desk-button" target="_blank">{ __( 'Video Tutorials', 'kadence' ) }</a><a href="https://kadence-theme.com/knowledge-base/" classname="kadence-desk-button kadence-desk-button-second" target="_blank">{ __( 'View Knowledge Base', 'kadence' ) }</a>
		</div>
	);
};

export default withFilters( 'kadence_theme_help' )( HelpTab );</body></html>
