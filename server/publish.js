/* Publishes the results from the database*/

Meteor.publish('Candidates' , function(){
	return Candidates.find({});
});

/* Subscribes to a single recepie */
Meteor.publish('CandidateDetails' , function(id){
	check(id, String);
	return Candidates.find({_id: id});
});