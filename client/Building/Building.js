/**
 * Created by sarimj on 12/25/2015.
 */
Session.setDefault('isThirdLevelUnitsTab',false);
Session.setDefault('isThirdLevelAddUnitTab',false);
Session.setDefault('isThirdLevelEditBuildingTab',false);

Session.setDefault('thirdLevelUnitsTabActive','active');
Session.setDefault('thirdLevelAddUnitTabActive','');
Session.setDefault('thirdLevelEditBuildingTabActive','');

Template.building.events({
    'click #unitsTabBtn': function(event){
        Session.set('isThirdLevelUnitsTab',true);
        Session.set('isThirdLevelAddUnitTab',false);
        Session.set('isThirdLevelEditBuildingTab',false);

        Session.set('thirdLevelUnitsTabActive','active');
        Session.set('thirdLevelAddUnitTabActive','');
        Session.set('thirdLevelEditBuildingTabActive','');
    },
    'click #addUnitTabBtn': function(event){
        Session.set('isThirdLevelUnitsTab',false);
        Session.set('isThirdLevelAddUnitTab',true);
        Session.set('isThirdLevelEditBuildingTab',false);

        Session.set('thirdLevelUnitsTabActive','');
        Session.set('thirdLevelAddUnitTabActive','active');
        Session.set('thirdLevelEditBuildingTabActive','');
    },
    'click #editBuildingTabBtn': function(event){
        Session.set('isThirdLevelUnitsTab',false);
        Session.set('isThirdLevelAddUnitTab',false);
        Session.set('isThirdLevelEditBuildingTab',true);

        Session.set('thirdLevelUnitsTabActive','');
        Session.set('thirdLevelAddUnitTabActive','');
        Session.set('thirdLevelEditBuildingTabActive','active');
    }
});

Template.building.helpers({
    isThirdLevelUnitsTab: function(){
        return Session.get('isThirdLevelUnitsTab');
    },
    isThirdLevelAddUnitTab: function(){
        return Session.get('isThirdLevelAddUnitTab');
    },
    isThirdLevelEditBuildingTab: function(){
        return Session.get('isThirdLevelEditBuildingTab');
    },
    thirdLevelUnitsTabActive: function(){
        return Session.get('thirdLevelUnitsTabActive');
    },
    thirdLevelAddUnitTabActive: function(){
        return Session.get('thirdLevelAddUnitTabActive');
    },
    thirdLevelEditBuildingTabActive: function(){
        return Session.get('thirdLevelEditBuildingTabActive');
    },
    currentBuildingObj: function(){
        var currentBuildingId = Session.get('currentBuildingId');
        Meteor.subscribe('getBuildingById',currentBuildingId);
        return buildings.findOne({_id: currentBuildingId});
    }
});