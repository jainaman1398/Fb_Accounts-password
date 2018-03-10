import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";
import Token from "../../api/Tokens";

Meteor.methods({
    "page_search_karo"(page){

        console.log(page);
       let baseURL = "https://graph.facebook.com/v2.12/search?";
        let type = "page"
        let yo=page;
     //   let shortToken="KNp7E7NDCcXd89fey";
        let longToken='EAABdcXJQebwBAB3yi8ZBwGh9pzsVPTFrNlmsF0VKiVyZBsTS6ZBa3MOq8vpWnLxAuCTT9R2tm4S0ekpL7k5ItnWrGNcDbZCNZCowEtKDebDEo8cgR5syRwKhb2w05yZBhDs0a79S5lxiZBidxBNAyBUZCV3zwi17mNtgPEqF8oClewZDZD';
        let clientId = "102741830564284";
        let clientSecret = "f79f5ca6b2a7b0da499ada9bfcc61519";
        let apiURL = `${baseURL}type=${type}&q=${yo}&client_id=${clientId}&client_secret=${clientSecret}&oauth_token=${longToken}`;
        let res = HTTP.call("get", apiURL);
        console.log("pages retreived: ", res.data);
        return (res);

    }
})