import React,{Component} from "react";
import ReactDOM from "react-dom";
import {pages_search} from "../../api/pages_search"
import Head from "../../ui/header"
import Fblogin from "../../ui/Fblogin"
var faker=require('faker');


/*export default class App extends Component{
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

*/

export default  class App extends Component{
    constructor(props){
        super(props);
        this.state={
            query_string:" "
        }
    }

    aj(event){
        console.log(event.target.value);
        this.setState({query_string:event.target.value});
    }

    click(){
        console.log("hello"+ this.state.query_string);
        Meteor.call("page_search_karo",this.state.query_string,(err,res)=>{
            if(err)
                console.log(err);
            else
                console.log(res);
        })
      //  console.log("button clicked");
    }




    render(){
        return(
            <div>
                <div class="page-header">
                    <h1>Facebook Page API <small>Extract pages</small></h1>
                </div>
            <input value={this.state.query_string} placeholder="Page Search" onChange={this.aj.bind(this)}/>
                <button className="btn btn-success" onClick={this.click.bind(this)}>Search Pages</button>
            </div>
        )
    }
}

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'));
})