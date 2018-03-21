import React,{Component} from "react";
import ReactDOM from "react-dom";
//import  "../server/pages_search"
import Head from "../../ui/header"
import Fblogin from "../../ui/Fblogin"
import {Tokens} from "../../api/Tokens";
var faker=require('faker');
import List from "../../ui/List"
import Signup from "../../ui/Signup"

export default class App extends Component{
      constructor(props){
          super(props);
      };

      login(){
          window.fbAsyncInit = function() {

              FB.init({
                  appId      : '102741830564284',
                  cookie     : true,
                  xfbml      : true,
                  version    : '{latest-api-version}'
              });

              FB.AppEvents.logPageView();

          };

          (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/all.js";
              fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
      }

      componentDidMount(){
          this.login();
      }

    render() {

        return (
            <div>
                <Fblogin />
               <List />
                <Signup/>
            </div>
        )
    }
}



Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})