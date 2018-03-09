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

/*export default  class App extends Component{
    constructor(props){
        super(props);
        this.State={
            query_string:" "
        }
    }

    render(){
        return(
            <div>
            <input value={this.state.query_string} placeholder="Page Search" />
            </div>
        )
    }
}*/

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})