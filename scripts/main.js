'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var AppComponent = require('./components/AppComponent.js');
var JobListComponent = require('./components/JobListComponent.js');
var AddJobComponent = require('./components/AddJobComponent.js');
var JobDetailsPageComponent = require('./components/JobDetailsPageComponent.js');
var NavComponent = require('./components/NavComponent.js');
var jobInputCollection = require('./collections/jobInputCollection.js');

//*****For Employers Page*****
var Nav = document.getElementById('Nav');
var AppCom = document.getElementById('AppCom');

React.render (
	<div>
		<NavComponent />
	</div>,
	Nav
);


var Router = Backbone.Router.extend({

	routes: {
		'For-Employers': 'onForEmployersLink',
		'Jobs': 'onJobs',
		'Details': 'onDetails'
	},

	onForEmployersLink: function() {
		React.render (
			<AddJobComponent />,
			AppCom
		);
	},
	onJobs: function() {
		React.render (
			<JobListComponent />,
			AppCom
		);
	},
	onDetails: function() {
		React.render (
			<JobDetailsPageComponent />,
			AppCom
		);
	}
});

var r = new Router();
Backbone.history.start();
