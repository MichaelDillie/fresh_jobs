var React = require('react');

var jobInputCollection = require('../collections/jobInputCollection.js');
var jobCollection = new jobInputCollection();

module.exports = React.createClass({
	render: function() {
		return(
			<div className="inputComponent">
				<h3>Post your job</h3>

				<h4 className="labels">Title</h4>
				<input type="text" ref="title"/>

				<h4 className="labels">Company Name</h4>
				<input type="text" ref="companyName"/>

				<h4 className="labels">Location</h4>
				<input type="text" ref="location"/>

				<h4 className="labels">Description</h4>
				<textarea ref="description"></textarea>

				<h4 className="labels">Tags</h4>
				<input type="text" ref="tags"/>

				<div className="button-area">
					<button onClick={this.post} className="input-button">Submit Job</button>
				</div>
			</div>
		)
	},
	post: function(e) {
		e.preventDefault();
		jobCollection.create({
			title: this.refs.title.getDOMNode().value,
			companyName: this.refs.companyName.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			tags: this.refs.tags.getDOMNode().value
		},{success: function(response){
			console.log(response)
		}});
	}
});

