/**
 * Created by sarimj on 12/25/2015.
 */
units = new Mongo.Collection('units')
Template.addunit.events({
    'submit form': function(event){
        event.preventDefault();

        var buildingIdVar = Session.get('currentBuildingId');
        var unitObj = {
            buildingId: buildingIdVar,
            noOfResidents: event.target.unitResidents.value,
            area: event.target.unitArea.value,
            tenantFname: event.target.tenantFname.value,
            tenantLname: event.target.tenantLname.value,
            tenantPhone: event.target.tenantPhone.value,
            tenantEmail: event.target.tenantEmail.value,
            tenantPassword: event.target.tenantPassword.value,
        };

        Meteor.call('insertUnit',unitObj);

        Session.set('isThirdLevelAddUnitTab',false);
        Session.set('thirdLevelAddUnitTabActive','');
        Session.set('isThirdLevelUnitsTab',true);
        Session.set('thirdLevelUnitsTabActive','active');
    }
});