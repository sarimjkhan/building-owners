/**
 * Created by sarimj on 1/8/2016.
 */
Meteor.methods({
    insertUnit: function(unitObj){
        if(Meteor.userId()) {
            units.insert(unitObj);

            //If the user already exists, then all info is replaced with the new one
            var tenants = units.find({tenantEmail: unitObj.tenantEmail});
            var tenantIds = [];
            tenants.forEach(function (tenant) {
                tenantIds.push(tenant._id);
            });

            tenantIds.forEach(function (id) {
                units.update(
                    {_id: id},
                    {
                        $set: {
                            tenantFname: unitObj.tenantFname,
                            tenantLname: unitObj.tenantLname,
                            tenantPhone: unitObj.tenantPhone,
                            tenantPassword: unitObj.tenantPassword
                        }
                    },
                    {multi: true}
                );
            });
        }else{
            throw new Meteor.Error('Unauthorised user');
        }
    },
    removeUnit: function(id){
        if(Meteor.userId()) {
            units.remove({_id: id});
        }else{
            throw new Meteor.Error('Unauthorised user');
        }
    }
});

Meteor.publish('getUnits',function(id){
    return units.find({buildingId: id});
});

Meteor.publish('getUnitsByUser',function(tenantEmailPar, tenantPasswordPar){
    var unitsCursor = units.find({tenantEmail: tenantEmailPar, tenantPassword: tenantPasswordPar});
    unitsCursor.allUnits = [];

    unitsCursor.forEach(function(item){
        //console.log("Buildingname: " + item.buildingName);
        item.buildingName = buildings.findOne({_id: item.buildingId}).name;
        unitsCursor.allUnits.push(item);
    });

    return unitsCursor;
});