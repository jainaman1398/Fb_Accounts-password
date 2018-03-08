import React,{Component} from "react";
import ReactDOM from "react-dom";
import Head from "../../ui/header"
import Fblogin from "../../ui/Fblogin"
var faker=require('faker');


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
          fetch('https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=102741830564284&client_secret=f79f5ca6b2a7b0da499ada9bfcc61519&fb_exchange_token=EAABdcXJQebwBABOVZCIJtAb52CFm6X91ZAPRx6bMCAtGF7KneIp4ryULpBl5ZCiTRbK0rhioIzHkcgE4tUCsasOiaN29DxUo17F6nDmF4TVkGIJkBF8ZAi0zDAioHKwlsgxLvpQLMF3jzP7ZCZCxQhlv2vVPwe6AAi4dPPGOJgeOUJROT8DJZAqU3vSoNH5CZAnHvZAhPAQx2tQZDZD')
              .then((response)=>response.json())
          this.login();
      }

    render() {

        return (
            <div>
                <Fblogin />

            </div>
        )
    }
}

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})