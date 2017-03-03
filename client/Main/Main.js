Session.setDefault('registerForm',false);
Session.setDefault('signinForm', true);
Session.setDefault('isTenantLogin',false);
Session.setDefault('tenantUser',false);
Template.mainContainer.events({
	'click .register-owner': function(event){
		event.preventDefault();
		Session.set('registerForm',true);
		Session.set('signinForm',false);
		Session.set('isTenantLogin',false);
	},
	'click .signin-owner': function(event){
		event.preventDefault();
		Session.set('registerForm',false);
		Session.set('signinForm',true);
		Session.set('isTenantLogin',false);
	},
	'click #tenantLoginBtn': function(event){
		event.preventDefault();
		Session.set('registerForm',false);
		Session.set('signinForm',false);
		Session.set('isTenantLogin',true);
	}
});

Template.mainContainer.helpers({
	registerForm: function(){
		return Session.get('registerForm');
	},
	signinForm: function(){
		return Session.get('signinForm');
	},
	isTenantLogin: function(){
		return Session.get('isTenantLogin');
	},
	tenantUser: function(){
		return Session.get('tenantUser');
	}
});

