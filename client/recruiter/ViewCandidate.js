//Meteor.subscribe('Candidates');

Template.CandidateDetails.onCreated(function() {
   
   	var self = this;
   	self.autorun(function() {
   		self.subscribe('Candidates');
   	});
  }); 	

Template.CandidateDetails.helpers({
	ViewCandidate: ()=> {
		var id = FlowRouter.getParam('id');
		return Candidates.findOne({_id: id});   
		}    
	});