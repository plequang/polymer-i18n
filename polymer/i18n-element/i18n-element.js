/*global i18n,Polymer,PolymerExpressions, window */
(function () {

	"use strict";

	PolymerExpressions.prototype._ = function (args) {
		return i18n.t(args);
	};

	window._ = i18n.t;

	Polymer('i18n-element', {
		publish: {
			translationLoaded: false
		},
		created: function () {
			var i18nElement = this;
			i18n.init({ lng: "en" }, function (t) {
				console.log('i18n initialized', i18n.t('Hello'));
				i18nElement.translationLoaded = true;
			});
		}

	});

}());






