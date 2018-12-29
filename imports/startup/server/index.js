import {Meteor} from "meteor/meteor";
import {Tokens} from "../../api/Tokens";
import {Pages} from "../../api/Pages";
import   "./pages_search";
import  "./fb_methods"


Meteor.startup(()=>{
    Meteor.publish("Tokens",function () {
        if(this.userId) {
            return Tokens.find({uid:this.userId});
        }
    });
})