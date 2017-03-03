/**
 * Created by sarimj on 12/27/2015.
 */
Template.tenantunitstab.onCreated(function(){
    var tenantUserObj = Session.get('tenantObj');

    Meteor.subscribe('getUnitsByUser',tenantUserObj.tenantEmail,tenantUserObj.tenantPassword);
});

Template.tenantunitstab.helpers({
   unitsList: function(){
       var tenantUserObj = Session.get('tenantObj');

       var allUnits = units.find();
       var unitsToReturn = [];
       allUnits.forEach(function(item){
           Meteor.subscribe('getBuildingsByTenantUser',item.buildingId);
           var oneBuilding = buildings.find({_id: item.buildingId}).fetch();
           item.buildingName = oneBuilding[0].name;
           unitsToReturn.push(item);
       });
       return unitsToReturn;
   }
});