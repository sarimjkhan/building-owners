/**
 * Created by sarimj on 1/8/2016.
 */
Meteor.methods({
    insertUser: function(obj){
        //insert User
    },
    updateUserProfile: function(idObj,obj){
        if(Meteor.userId()) {
            Meteor.users.update(idObj, {$set: obj});
        }else{
            throw new Meteor.Error('Unauthorized User');
        }
    },
    removeUser: function(){
        //remove User
    }
});