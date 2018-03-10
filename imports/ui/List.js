import React,{Component} from "react";
import Table from "./Table"

export default  class List extends Component{
    constructor(props){
        super(props);
        this.state={
            query_string:" ",data:""
        };
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
          else {
              console.log("pageclick", res);
              this.setState({data:res});
          }
      })

    }




    render(){
        return(
            <div>
                <div class="page-header">
                    <h1>Facebook Page API <small>Extract pages</small></h1>
                </div>
                <input value={this.state.query_string} placeholder="Page Search" onChange={this.aj.bind(this)}/>
                <button className="btn btn-success" onClick={this.click.bind(this)}>Search Pages</button>


                        <Table
                            data = {this.state.data}
                        />

            </div>
        )
    }
}