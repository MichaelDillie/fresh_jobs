var React = require('react');

var JobTipsComponent = require('./JobTipsComponent.js');
var JobInputComponent = require('./JobInputComponent.js');
var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var InfoBoxComponent = require('./InfoBoxComponent.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="for-employers-page">
					<JobInputComponent />
					<JobTipsComponent />
				</div>
				<div className="jobs-page">
					<FilterBoxComponent />
					<InfoBoxComponent />
					<JobRowComponent />
					<JobRowComponent />
					<JobRowComponent />
				</div>
			</div>
		);
	}
});
