/**
 * Created by sarimj on 12/24/2015.
 */
Template.editprofile.events({
    'submit form' : function(event){
        event.preventDefault();
        var fnameVar = event.target.registerFName.value;
        var lnameVar = event.target.registerLName.value;
        var phoneVar = event.target.registerPhone.value;

        var idObj = {_id: Meteor.userId()};
        var objToSet = {'profile.fname': fnameVar, 'profile.lname': lnameVar, 'profile.phone': phoneVar};
        Meteor.call('updateUserProfile',idObj, objToSet);
    }
});

Template.editprofile.helpers({
   profileObj:function(){
       var obj = {};
       obj.fname = Meteor.user().profile.fname;
       obj.lname = Meteor.user().profile.lname;
       obj.phone = Meteor.user().profile.phone;
       return obj;
   }
});