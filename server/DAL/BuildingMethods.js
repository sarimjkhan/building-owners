/**
 * Created by sarimj on 1/8/2016.
 */
Meteor.methods({
    insertBuilding: function(obj){
        if(Meteor.userId()){
            buildings.insert(obj);
        }else{
            throw new Meteor.Error('Unauthorized user');
        }
    },
    updateBuilding: function(id, obj){
        buildings.update(id,{$set: obj});
    },
    removeBuilding: function(currentBuildingId){
        buildings.remove({_id: currentBuildingId});

        //Also remove the building units
        var unitIds = [];
        var unitObjs = units.find({buildingId: currentBuildingId});
        unitObjs.forEach(function(unit){
            unitIds.push(unit._id);
        });

        unitIds.forEach(function(id){
            units.remove({_id: id});
        });
    }
});

Meteor.publish('getBuildings',function(idVar){
    return buildings.find({portfolioId: idVar});
});
Meteor.publish('getBuildingById',function(id){
    return buildings.find({_id: id});
});
Meteor.publish('getBuildingsByTenantUser',function(unitId){
    //unitIds.forEach(function(id){
        return buildings.find({_id: unitId});
    //});
});