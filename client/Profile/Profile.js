Session.setDefault('isProfileTab',true);
Session.setDefault('isPortfoliosTab',false);
Session.setDefault('isAddPortfolioTab',false);
Session.setDefault('isEditProfileTab',false);

Session.setDefault('profileTabActive','active');
Session.setDefault('portfoliosTabActive','');
Session.setDefault('addPortfolioTabActive','');
Session.setDefault('editProfileTabActive','');

Template.profile.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Session.set('signinForm',true);
		Session.set('registerForm',false);
	},
	'click #profileTabBtn': function(event){
		Session.set('isProfileTab',true);
		Session.set('isPortfoliosTab',false);
		Session.set('isAddPortfolioTab',false);
		Session.set('isEditProfileTab',false);

		Session.set('profileTabActive','active');
		Session.set('portfoliosTabActive','');
		Session.set('addPortfolioTabActive','');
		Session.set('editProfileTabActive','');
	},
	'click #portfoliosTabBtn': function(event){
		Session.set('isProfileTab',false);
		Session.set('isPortfoliosTab',true);
		Session.set('isAddPortfolioTab',false);
		Session.set('isEditProfileTab',false);

		//additional tab check for single portfolio that comes under portfolios
		Session.set('isPortfolioDetailsTab',false);

		Session.set('profileTabActive','');
		Session.set('portfoliosTabActive','active');
		Session.set('addPortfolioTabActive','');
		Session.set('editProfileTabActive','');
	},
	'click #addPortfolioTabBtn': function(event){
		Session.set('isProfileTab',false);
		Session.set('isPortfoliosTab',false);
		Session.set('isAddPortfolioTab',true);
		Session.set('isEditProfileTab',false);

		Session.set('profileTabActive','');
		Session.set('portfoliosTabActive','');
		Session.set('addPortfolioTabActive','active');
		Session.set('editProfileTabActive','');
	},
	'click #editProfileTabBtn': function(event){
		Session.set('isProfileTab',false);
		Session.set('isPortfoliosTab',false);
		Session.set('isAddPortfolioTab',false);
		Session.set('isEditProfileTab',true);

		Session.set('profileTabActive','');
		Session.set('portfoliosTabActive','');
		Session.set('addPortfolioTabActive','');
		Session.set('editProfileTabActive','active');
	},
});

Template.profile.helpers({
	username: function(){
		return Meteor.user().profile.fname + ' ' + Meteor.user().profile.lname;
	},
	isProfileTab: function(){
		return Session.get('isProfileTab');
	},
	isPortfoliosTab: function(){
		return Session.get('isPortfoliosTab');
	},
	isAddPortfolioTab: function(){
		return Session.get('isAddPortfolioTab');
	},
	isEditProfileTab: function(){
		return Session.get('isEditProfileTab');
	},
	profileTabActive: function(){
		return Session.get('profileTabActive')
	},
	portfoliosTabActive: function(){
		return Session.get('portfoliosTabActive')
	},
	addPortfolioTabActive: function(){
		return Session.get('addPortfolioTabActive')
	},
	editProfileTabActive: function(){
		return Session.get('editProfileTabActive')
	},
});