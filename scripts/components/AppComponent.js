var React = require('react');

var JobTipsComponent = require('./JobTipsComponent.js');
var JobInputComponent = require('.	/JobInputComponent.js');

module.exports = React.createClass(
	render: function() {
		return (
			<div>
				<JobInputComponent />
				<JobTipsComponent />
			</div>
		);
	}
});
