/**
 * Created by sarimj on 12/25/2015.
 */
Session.setDefault('isSecondLevelBuildingsTab',true);
Session.setDefault('isSecondLevelAddBuildingTab',false);
Session.setDefault('isSecondLevelEditPortfolioTab',false);

Session.setDefault('secondLevelBuildingsTabActive','active');
Session.setDefault('secondLevelAddBuildingTabActive','');
Session.setDefault('secondLevelEditPortfolioTabActive','');

Template.portfolio.events({
    'click #buildingsTabBtn': function(event){
        Session.set('isSecondLevelBuildingsTab',true);
        Session.set('isSecondLevelAddBuildingTab',false);
        Session.set('isSecondLevelEditPortfolioTab',false);

        Session.set('isBuildingDetailsTab',false);

        Session.set('secondLevelBuildingsTabActive','active');
        Session.set('secondLevelAddBuildingTabActive','');
        Session.set('secondLevelEditPortfolioTabActive','');
    },
    'click #addBuildingTabBtn': function(event){
        Session.set('isSecondLevelBuildingsTab',false);
        Session.set('isSecondLevelAddBuildingTab',true);
        Session.set('isSecondLevelEditPortfolioTab',false);

        Session.set('isBuildingDetailsTab',false);

        Session.set('secondLevelBuildingsTabActive','');
        Session.set('secondLevelAddBuildingTabActive','active');
        Session.set('secondLevelEditPortfolioTabActive','');
    },
    'click #editPortfolioTabBtn': function(event){
        Session.set('isSecondLevelBuildingsTab',false);
        Session.set('isSecondLevelAddBuildingTab',false);
        Session.set('isSecondLevelEditPortfolioTab',true);

        Session.set('isBuildingDetailsTab',false);

        Session.set('secondLevelBuildingsTabActive','');
        Session.set('secondLevelAddBuildingTabActive','');
        Session.set('secondLevelEditPortfolioTabActive','active');
    }
});

Template.portfolio.helpers({
    isSecondLevelBuildingsTab: function(){
        return Session.get('isSecondLevelBuildingsTab');
    },
    isSecondLevelAddBuildingTab: function(){
        return Session.get('isSecondLevelAddBuildingTab');
    },
    isSecondLevelEditPortfolioTab: function(){
        return Session.get('isSecondLevelEditPortfolioTab');
    },
    secondLevelBuildingsTabActive: function(){
        return Session.get('secondLevelBuildingsTabActive');
    },
    secondLevelAddBuildingTabActive: function(){
        return Session.get('secondLevelAddBuildingTabActive');
    },
    secondLevelEditPortfolioTabActive: function(){
        return Session.get('secondLevelEditPortfolioTabActive');
    },
    currentPortfolioObj: function(){
        var portfolioId = Session.get('currentPortfolioId');
        Meteor.subscribe('getPortfolioById',portfolioId);
        return portfolios.findOne({_id: portfolioId});
    }
});