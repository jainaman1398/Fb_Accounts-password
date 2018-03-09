import React,{Component} from "react";
import {Tokens} from "../api/Tokens";

export default class Fblogin extends Component{

    constructor(props){
        super(props);
        this.state=({auth:false,token:" ",status:"login"});
    }

    aman() {
        let yo=this
        FB.login(function (response) {
            if (response.authResponse) {
                yo.setState({
                    token:response.authResponse.accessToken,
                    status:"logout"
                })
                console.log(yo.state.token);
                Meteor.call("tokens.insert",yo.state.token,"small_term", (err, res) => {
                    if(err) {
                        console.log(" err : ", err);
                    } else {
                        console.log("shortres : ", res);
                        Meteor.call("get_fb_long_token",yo.state.token, (err, res) => {
                            if(err) {
                                console.log("long err ", err);
                            } else {
                                console.log("long res ", res);
                                console.log("long res ", res.data.access_token);

                                Meteor.call("tokens.insert",res.data.access_token,"long",(err,res)=>{
                                    if(err)
                                        console.log(err);
                                    else
                                        console.log("done");
                                })
                            }
                        });
                    }
                });
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    aj()
    {
        FB.logout(function(response){
            console.log("logged out");
        })
    }

    render(){
        return(
            <div>
            <p>FBLogin</p>
            <button className="btn btn-primary " onClick={this.aman.bind(this)}>Login</button>

            <button className="btn btn-primary " onClick={this.aj.bind(this)}>Logout</button>
            </div>
        )
    }
}