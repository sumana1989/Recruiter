
if(Meteor.isClient) {
Accounts.onLogin(function(){           /* Redirects users to Candidates page after logging in */

   FlowRouter.go('/Candidates'); 

});

Accounts.onLogout(function(){           /* Redirects users to home page after logging out */

   FlowRouter.go('/'); 

});

}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('/');
	}

}]);


FlowRouter.route('/', {
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('/Candidates');  /*  Only logged in users can co to Candidate page */
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}

});

FlowRouter.route('/Candidates', {
	name:'Candidates',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main:'Candidates'});
	}

}); 

FlowRouter.route('/recruiter/:id', {              /* router for viewing single candidate*/
	name:'recruiter',
	action(){
		BlazeLayout.render('MainLayout',{main:'CandidateDetails'});
	}

});