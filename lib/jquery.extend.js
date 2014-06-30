/*
 Copyright (c) 2012, G�oMetzMetropole, Metz M�tropole - D.S.C.I / S.I.G.
 http://geo.metzmetropole.fr
*/

// ***************************************************************************************************************
// JQuery extend
// ***************************************************************************************************************
$.extend({
	getTime: function() {
		return (new Date()).getTime();
	},	
	postJSON: function (url, data, callback) {
		return $.post(url, data, callback, 'json');
	},
	addSlashes: function(ch) {
		ch = ch.replace(/\\/g,"\\\\");
		ch = ch.replace(/\'/g,"\\'");
		ch = ch.replace(/\"/g,"\\\"");
		return ch;
	},
	stripSlashes: function(ch){ 
		ch = ch.replace(/\\/gi,"");
		return ch;
	},
	isPopupOpen: function(popup) {
		return $(popup + '-popup').hasClass('ui-popup-active');
	}
});

$.extend(jQuery.validator.messages, {
  required: "Ce champ est requis !",
  remote: "votre message",
  email: "Veuillez enter une adresse mail valide !",
  url: "votre message",
  date: "votre message",
  dateISO: "votre message",
  number: "votre message",
  digits: "votre message",
  creditcard: "votre message",
  equalTo: "votre message",
  accept: "votre message",
  maxlength: jQuery.validator.format("votre message {0} caract�res."),
  minlength: jQuery.validator.format("votre message {0} caract�res."),
  rangelength: jQuery.validator.format("votre message  entre {0} et {1} caract�res."),
  range: jQuery.validator.format("votre message  entre {0} et {1}."),
  max: jQuery.validator.format("votre message  inf�rieur ou �gal � {0}."),
  min: jQuery.validator.format("votre message  sup�rieur ou �gal � {0}.")
});