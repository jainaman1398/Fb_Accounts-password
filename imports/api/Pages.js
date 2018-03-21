import {Meteor} from "meteor/meteor";
export const Pages=new Mongo.Collection('pages');

Meteor.methods({
    "pages.insert"(name,object){

        return Pages.insert({name:name,object:object});
    },
    "pages.check"(name){
        return Pages.findOne({name:name});
    }
});