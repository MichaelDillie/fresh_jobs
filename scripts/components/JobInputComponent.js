var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="inputComponent">
				<h3>Post your job</h3>
				<h4 className="labels">Title</h4>
				<input type="text" />
				<h4 className="labels">Company Name</h4>
				<input type="text" />
				<h4 className="labels">Location</h4>
				<input type="text" />
				<h4 className="labels">Description</h4>
				<textarea></textarea>
				<h4 className="labels">Tags</h4>
				<input type="text" />
				<div className="button-area">
					<button className="input-button">Submit Job</button>
				</div>
			</div>
		)
	}
});
