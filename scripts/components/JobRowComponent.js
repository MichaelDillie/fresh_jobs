var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="jobRow">
				<div>
					<a href="#Details">
						<span className="title">{this.props.model.get('title')}</span>
					</a>
					<span className="date">{this.props.model.get('date')}</span>
				</div>
				<div>
					<span className="company">{this.props.model.get('companyName')}</span>
					<span className="location">{this.props.model.get('location')}</span>
				</div>
				<div className="description">{this.props.model.get('description')}</div>
				<div className="tags">JavaScript</div>
			</div>
		)
	}
});
