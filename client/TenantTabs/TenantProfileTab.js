/**
 * Created by sarimj on 12/27/2015.
 */
Template.tenantprofiletab.helpers({
    tenantUserObj:function(){
        return Session.get('tenantObj');
    }
});