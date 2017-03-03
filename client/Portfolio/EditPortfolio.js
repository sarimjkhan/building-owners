/**
 * Created by sarimj on 12/26/2015.
 */
Template.editportfolio.events({
    'submit form': function(event){
        event.preventDefault();
        var portfolioId = Session.get('currentPortfolioId');

        var objToSet = {name: event.target.portfolioName.value};

        Meteor.call('updatePortfolio',portfolioId,objToSet);
        //portfolios.update(portfolioId,{$set: {name: event.target.portfolioName.value}});
    }
});

Template.editportfolio.helpers({
   portfolioObj: function(){
       var portfolioId = Session.get('currentPortfolioId');
       Meteor.subscribe('getPortfolioById',portfolioId);
       return portfolios.findOne({_id: portfolioId});
   }
});