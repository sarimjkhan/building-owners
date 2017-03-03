/**
 * Created by sarimj on 12/26/2015.
 */
Template.editbuilding.events({
    'submit form': function(event){
        event.preventDefault();
        var buildingId = Session.get('currentBuildingId');
        var objToSet = {name: event.target.buildingName.value, address: event.target.buildingAddress.value};
        Meteor.call('updateBuilding',buildingId,objToSet);
    }
});

Template.editbuilding.helpers({
   buildingObj: function(){
       var buildingId = Session.get('currentBuildingId');
       Meteor.subscribe('getBuildingById',buildingId);
       return buildings.findOne({_id: buildingId});
   }
});