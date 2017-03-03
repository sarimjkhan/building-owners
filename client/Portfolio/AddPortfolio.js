/**
 * Created by sarimj on 12/24/2015.
 */
portfolios = new Mongo.Collection('portfolios')
Template.addportfolio.events({
   'submit form': function(event){
       event.preventDefault();

       var portfolioObj = {
           userId: Meteor.userId(),
           name: event.target.portfolioName.value
       };

       Meteor.call('insertPortfolio',portfolioObj);

       Session.set('isAddPortfolioTab',false);
       Session.set('isPortfoliosTab',true);
       Session.set('addPortfolioTabActive','');
       Session.set('portfoliosTabActive','active');
   }
});