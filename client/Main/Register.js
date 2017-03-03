Template.register.events({
	'submit form' : function(event){
		event.preventDefault();
		var fnameVar = event.target.registerFName.value;
		var lnameVar = event.target.registerLName.value;
		var phoneVar = event.target.registerPhone.value;
		var emailVar = event.target.registerEmail.value;
		var passwordVar = event.target.registerPassword.value;
		
		var profileVar = {
			fname: fnameVar,
			lname: lnameVar,
			phone: phoneVar,
		};

		Accounts.createUser({
			email: emailVar,
			password: passwordVar,
			profile: profileVar
		});

		Session.set('isProfileTab',true);
	}
});