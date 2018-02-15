/**
 * Created by behroz baig on 12/24/2015.
 */
buildings = new Mongo.Collection('buildings')
Template.addbuilding.events({
    'submit form': function(event){
        event.preventDefault();

        var ownerName = Meteor.user().profile.fname;
        var portfolioIdVar = Session.get('currentPortfolioId');

        var buildingObjToAdd = {
            portfolioId: portfolioIdVar,
            owner: ownerName,
            name: event.target.buildingName.value,
            address: event.target.buildingAddress.value
        };

        Meteor.call('insertBuilding',buildingObjToAdd);

        Session.set('isSecondLevelAddBuildingTab',false);
        Session.set('secondLevelAddBuildingTabActive','');
        Session.set('isSecondLevelBuildingsTab',true);
        Session.set('secondLevelBuildingsTabActive','active');
    }
});
