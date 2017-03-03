/**
 * Created by sarimj on 12/24/2015.
 */
Session.setDefault('isPortfolioDetailsTab',false);
Session.setDefault('currentPortfolioId',-1);

Template.portfolios.events({
    'click .portfolioItem': function(event){
        Session.set('isPortfolioDetailsTab',true);
        Session.set('currentPortfolioId',event.currentTarget.id);
    },
    'click .removeBtn': function(event){
        var currentPortfolioId = event.currentTarget.id;
        Meteor.call('removePortfolio',currentPortfolioId);
    }
});

Template.portfolios.helpers({
    portfolioList: function(){
        Meteor.subscribe('getPortfolios',Meteor.userId());
        return portfolios.find({ userId: Meteor.userId()});
    },
    isPortfolioDetailsTab: function(){
        return Session.get('isPortfolioDetailsTab');
    },
    isSecondLevelBuildingsTab: function(){
        return Session.get('isSecondLevelBuildingsTab');
    }
});