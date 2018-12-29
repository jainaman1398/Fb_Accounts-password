import React,{Component} from "react";
import {withTracker} from "meteor/react-meteor-data";
import {Tokens} from "../api/Tokens";
//import {Session} from "meteor/session";

 class Fblogin extends Component{

    constructor(props){
        super(props);
        this.state=({auth:false,token:" ",status:"login"});
    }

    componentWillReceiveProps(nextProps){
        console.log("this props",this.props);
        console.log("next props",nextProps);
    }

    aman() {
        let yo=this
        window.FB.login(function (response) {
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
                window.FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }.bind(this),{
            scope: 'manage_pages, read_insights, pages_show_list,instagram_manage_insights,instagram_basic',
            return_scopes: true
            }
        );
    }

    aj()
    {
        FB.logout(function(response){
            console.log("logged out");
        })
    }

    render(){
        if(!this.props.dataLoaded){
            return <p>data Loading!</p>
        }
        else {
            return (
                <div>
                    <h1>FBLogin</h1>
                    <button className="btn btn-primary " onClick={this.aman.bind(this)}>Login</button>

                    <button className="btn btn-primary " onClick={this.aj.bind(this)}>Logout</button>
                  /*  <h>{this.props.test1}</h>*/
                </div>
            )
        }
    }
}

export default withTracker(
    (props)=>{
        let dataLoaded;
    //    let test1=session.get("test1");
       const tokenSubHandle=Meteor.subscribe("Tokens");
       let tokens;
       if(tokenSubHandle.ready()) {
           tokens = Tokens.find().fetch();
       }
        dataLoaded=tokenSubHandle.ready();
       console.log("count",dataLoaded);
        return{
            dataLoaded,tokens
        }
    }
)(Fblogin)