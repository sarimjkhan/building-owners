/**
 * Created by sarimj on 12/25/2015.
 */
Session.setDefault('isUnitDetailsTab',false);
Session.setDefault('currentUnitId',-1);

Template.units.events({
    'click .unitItem': function(event){
        Session.set('isUnitDetailsTab',true);
        Session.set('currentUnitId',event.currentTarget.id);
    },
    'click .removeBtn': function(event){
        var currentUnitId = event.currentTarget.id;
        Meteor.call('removeUnit',currentUnitId);
    }
});

Template.units.helpers({
    unitList: function(){
        var buildingIdVar = Session.get('currentBuildingId');
        Meteor.subscribe('getUnits',buildingIdVar);
        return units.find({buildingId: buildingIdVar})
    },
    isUnitDetailsTab: function(){
        return Session.get('isUnitDetailsTab');
    }
});