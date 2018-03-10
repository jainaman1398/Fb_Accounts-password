import React,{Component} from "react";

export default class Table extends Component{

    constructor(props){
        super(props);

    }


   getdata(data){
        console.log("map",data);
        data=data.data||[];
        data=data.data||[];


            return data.map((task, key) => {
               return <li>{task.id}{task.name}</li>
            })

    }

    render(){


        return(
            <div>
         <ul>{this.getdata(this.props.data)}</ul>
            </div>
        )
    }

}

