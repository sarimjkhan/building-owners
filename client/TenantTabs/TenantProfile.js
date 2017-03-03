/**
 * Created by sarimj on 12/27/2015.
 */
Session.setDefault('isTenantProfileTab',true);
Session.setDefault('isTenantUnitsTab',false);
Session.setDefault('isTenantEditProfileTab',false);

Session.setDefault('tenantProfileTabActive','active');
Session.setDefault('tenantUnitsTabActive','');
Session.setDefault('tenantEditProfileTabActive','');

Template.tenantprofile.events({
    'click #tenantProfileTabBtn': function(event){
        Session.set('isTenantProfileTab',true);
        Session.set('isTenantUnitsTab',false);
        Session.set('isTenantEditProfileTab',false);

        Session.set('tenantProfileTabActive','active');
        Session.set('tenantUnitsTabActive','');
        Session.set('tenantEditProfileTabActive','');
    },
    'click #tenantUnitsTabBtn': function(event){
        Session.set('isTenantProfileTab',false);
        Session.set('isTenantUnitsTab',true);
        Session.set('isTenantEditProfileTab',false);

        Session.set('tenantProfileTabActive','');
        Session.set('tenantUnitsTabActive','active');
        Session.set('tenantEditProfileTabActive','');
    },
    'click #editTenantProfileTabBtn': function(event){
        Session.set('isTenantProfileTab',false);
        Session.set('isTenantUnitsTab',false);
        Session.set('isTenantEditProfileTab',true);

        Session.set('tenantProfileTabActive','');
        Session.set('tenantUnitsTabActive','');
        Session.set('tenantEditProfileTabActive','active');
    },
    'click .logout': function(event){
        Session.set('tenantUser',false);
        Session.set('signinForm',true);
    }
});

Template.tenantprofile.helpers({
    tenantObj: function(){
       return Session.get('tenantObj');
    },
    isTenantProfileTab: function(){
        return Session.get('isTenantProfileTab')
    },
    isTenantUnitsTab: function(){
        return Session.get('isTenantUnitsTab');
    },
    isTenantEditProfileTab: function(){
        return Session.get('isTenantEditProfileTab');
    },
    tenantProfileTabActive: function(){
        return Session.get('tenantProfileTabActive');
    },
    tenantUnitsTabActive: function(){
        return Session.get('tenantUnitsTabActive');
    },
    tenantEditProfileTabActive: function(){
        return Session.get('tenantEditProfileTabActive');
    }
});