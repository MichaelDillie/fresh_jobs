var React = require('react');
module.exports = React.createClass({
	render: function() {
		return(
			<div className="jobTips">
				<div className="title">Tips for your job posting</div>
				<div><strong>Add Keywords</strong> because the majority of candidates search for available positions using keywords, make sure you use all relevant keywords in your postion.</div>
				<div><strong>Use Familiar Job Titles.</strong> Use specific but familiar job titles in your postings. Make sure the titles are clear and succinct.</div>
				<div><strong>Give Them Details.</strong> The purpose of posting a job is to spark a candidates interest in the available postion. When job postings have a detailed descriptions, candidates tend to apply to them more.</div>
				<div><strong>Expand Your Location.</strong> Do not limit your job postings to a restricted area around the jobs location. Make sure you include the surrounding cities and metropolitan areas in your searches.</div>
				<div><strong>Discuss Compensations.</strong> Even though you may not want to give an exact compensation, give a range. Make sure to point out any bonuses, commissions, or nonmonetary compensation, as well.</div>
			</div>
		)
	}
});
