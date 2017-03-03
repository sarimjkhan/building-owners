/**
 * Created by sarimj on 12/25/2015.
 */
Session.setDefault('isBuildingDetailsTab',false);
Session.setDefault('currentBuildingId',-1);

Template.buildings.events({
    'click .buildingItem': function(event){
        Session.set('isBuildingDetailsTab',true);
        Session.set('currentBuildingId',event.currentTarget.id);
    },
    'click .removeBtn': function(event){
        var currentBuildingId = event.currentTarget.id;
        Meteor.call('removeBuilding',currentBuildingId);
    }
});

Template.buildings.helpers({
    buildingList: function(){
        var portFolioIdVar = Session.get('currentPortfolioId');
        Meteor.subscribe('getBuildings',portFolioIdVar);
        return buildings.find({portfolioId: portFolioIdVar});
    },
    isBuildingDetailsTab: function(){
        return Session.get('isBuildingDetailsTab');
    },
    isThirdLevelUnitsTab: function(){
        return Session.get('isThirdLevelUnitsTab');
    }
});