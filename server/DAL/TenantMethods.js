/**
 * Created by sarimj on 1/8/2016.
 */
Meteor.methods({
    updateTenantProfile: function(tenantObj,tenantPhone){
        var tenants = units.find({tenantEmail: tenantObj.tenantEmail});
        var tenantIds = [];
        tenants.forEach(function(tenant){
            tenantIds.push(tenant._id);
        });

        tenantIds.forEach(function(id){
            units.update({_id: id},{$set: {tenantPhone: tenantPhone}},{multi: true});
        });
    }
});

Meteor.publish('getUserByEmailPass',function(emailVar,passwordVar){
    return units.find({tenantEmail: emailVar,tenantPassword: passwordVar});
});