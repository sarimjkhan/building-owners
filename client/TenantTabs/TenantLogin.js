/**
 * Created by sarimj on 12/26/2015.
 */
Session.setDefault('tenantUser',false);
Session.setDefault('tenantObj',{});

Template.tenantLogin.events({
    'submit form' : function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;

        Meteor.subscribe('getUserByEmailPass',emailVar,passwordVar);

        //quick fix : due to asynchronous call Meteor.subscribe() and units.findOne() were not working. So timeout is used.
        setTimeout(function(){
            var obj = units.findOne({tenantEmail: emailVar,tenantPassword: passwordVar});
            if(obj){
                Session.set('tenantUser',true);
                Session.set('isTenantLogin',false);
                Session.set('tenantObj',obj);
            }
        },1000);
    }
});

Template.tenantLogin.helpers({
    tenantUser: function(){
        return Session.get('tenantUser');
    },
    isTenantLogin: function(){
        return Session.get('isTenantLogin');
    }
});