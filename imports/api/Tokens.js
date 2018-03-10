import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export  const Tokens=new Mongo.Collection('tokens');

Meteor.methods({
"tokens.insert"(token,type){
    return Tokens.insert({token,type});
},
"tokens.get"(type){
    return Tokens.findOne({type:type});
}
});