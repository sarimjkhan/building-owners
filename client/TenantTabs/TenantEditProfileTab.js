/**
 * Created by sarimj on 12/27/2015.
 */
Template.tenanteditprofiletab.events({
    'submit form': function(event){
        event.preventDefault();

        var tenantObj = Session.get('tenantObj');
        var tenantPhone = event.target.tenantPhone.value;
        Meteor.call('updateTenantProfile',tenantObj,tenantPhone);
        tenantObj.tenantPhone = tenantPhone;

        //resetting the tenantObj variable
        Session.set('tenantObj',tenantObj);

        Session.set('isTenantProfileTab',true);
        Session.set('isTenantUnitsTab',false);
        Session.set('isTenantEditProfileTab',false);

        Session.set('tenantProfileTabActive','active');
        Session.set('tenantUnitsTabActive','');
        Session.set('tenantEditProfileTabActive','');
    }
});

Template.tenanteditprofiletab.helpers({
   tenantObj: function(){
       return Session.get('tenantObj');
   }
});