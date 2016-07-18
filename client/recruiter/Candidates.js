//Meteor.subscribe('Candidates');

Template.Candidates.onCreated(function(){
  var self = this;
   	self.autorun(function(){

   		self.subscribe('Candidates');
   	});

});


Template.Candidates.helpers({
	Candidates: ()=> {
		return Candidates.find({});       /*  Displays all the candidates */
	}
});