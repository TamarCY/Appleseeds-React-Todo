import React from "react";


class Item extends React.Component{
   
    render(){
        return (
        <div>
        {this.props.text}
        <button id={this.props.id} onClick={this.props.delete} >-</button>
        </div>
        )
    }
}



export default Item