/**
 * Created by sarimj on 12/24/2015.
 */
Template.profiletab.helpers({
   userObj:function(){
      var obj = {};
      obj.fname = Meteor.user().profile.fname;
      obj.lname = Meteor.user().profile.lname;
      obj.phone = Meteor.user().profile.phone;
      return obj;
   }
});