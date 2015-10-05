var React = require('react');

var jobListModel = require('../models/jobListModel.js');
var jobList = new jobListModel();

module.exports = React.createClass({
	render: function() {
		return(
			<div className="jobRow">
				<div>
					<a href="#Details">
						<span className="title" ref="title">{this.props.job.get('title')}</span>
					</a>
					<span className="date" ref="date">{this.props.job.get('date')}</span>
				</div>
				<div>
					<span className="company" ref="companyName">{this.props.job.get('companyName') + ' - '}</span>
					<span className="location" ref="location">{this.props.job.get('location')}</span>
				</div>
				<div className="description" ref="description">{this.props.job.get('description')}</div>
				<div className="tags">JavaScript</div>
			</div>
		);
	}
});
