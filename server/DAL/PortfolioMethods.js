/**
 * Created by sarimj on 1/8/2016.
 */
Meteor.methods({
    insertPortfolio: function(obj){
        if(Meteor.userId()) {
            portfolios.insert(obj);
        }else{
            throw new Meteor.Error("Unauthorized user");
        }
    },
    updatePortfolio: function(id, objToSet){
        if(Meteor.userId()) {
            portfolios.update(id, {$set: objToSet});
        }else{
            throw new Meteor.Error("Unauthorized user");
        }
    },
    removePortfolio: function(currentPortfolioId){
        if(Meteor.userId()){
            portfolios.remove({_id: currentPortfolioId});

            //Removing the buildings of the deleted portfolios
            var buildingIds = [];
            var buildingObjs = buildings.find({portfolioId: currentPortfolioId});
            buildingObjs.forEach(function(building){
                buildingIds.push(building._id);
            });

            buildingIds.forEach(function(id){
                buildings.remove({_id: id});

                //Also removing the units of the deleted buildings
                var unitIds = [];
                var unitObjs = units.find({buildingId: id});
                unitObjs.forEach(function(unit){
                    unitIds.push(unit._id);
                });

                unitIds.forEach(function(id){
                    units.remove({_id: id});
                });
            });
        }else{
            throw new Meteor.error("Unauthroized user");
        }
    }
});

Meteor.publish('getPortfolios', function(userid){
    return portfolios.find({userId: userid});
});
Meteor.publish('getPortfolioById',function(id){
    return portfolios.find({_id: id});
});