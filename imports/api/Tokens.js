import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export  const Tokens=new Mongo.Collection('tokens');

Meteor.methods({
"tokens.insert"(token,type){
    if(!this.userId)
        throw new Meteor.error("login","you better login to access my App");
    else
    return Tokens.insert({uid:this.userId,token,type});
},
"tokens.get"(type){
    return Tokens.findOne({type:type});
}
});