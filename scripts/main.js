'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var AppComponent = require('./components/AppComponent.js');
var NavComponent = require('./components/NavComponent.js');

//*****For Employers Page*****
var jobTips = document.getElementById('jobTips');
var inputComponent = document.getElementById('inputComponent');

React.render (
	<div>
		<NavComponent />
	</div>,
	Nav
);

React.render (
	<div>
		<AppComponent />
	</div>,
	AppCom
);

var Router = Backbone.Router.extend({

	routes: {
		'For-Employers': 'onForEmployersLink'
	},

	onForEmployersLink: function() {
		jobTips.show();
		inputComponent.show();
	}
});
