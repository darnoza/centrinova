/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	//config.fullPage = true;
	
	//config.extraPlugins = 'codesnippet,widget,lineutils,image2';
	
//config.allowedContent = true;
	//config.entities_latin = false;
	//config.entities = false;
	//config.removeDialogTabs = 'image:advanced;link:advanced';	
	config.filebrowserImageUploadUrl = BASE_URL + 'eupload/editor_upload';	
	
};
