import React,{Component} from "react";

export default class Table extends Component{

    constructor(props){
        super(props);
        this.props=props;
        console.log("props",props);
        this.state={
            data:props.data.data
        };
    }


  /*  getdata(){
        let data={this.state.data};
        console.log("map",data);
        if(data) {
            return data.map((task, key) => {
                <li>{task.id}</li>
            })
        }
    }*/

    render(){

        this.setState({data:this.props});
        return(
            <div>
         <h>{this.state.data}</h>
            </div>
        )
    }

}

