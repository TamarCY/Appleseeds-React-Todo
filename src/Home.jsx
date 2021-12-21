import React from "react";
import Item from './Item'


class Home extends React.Component {
    state = {
        itemsArray: [],
        input: ""
    }
    createItem = () => {
        const newItem = {
            key: Date.now(),
            text: this.state.input
        }
        this.setState((prevState) => {
            return {
                itemsArray: prevState.itemsArray.concat(newItem),
                input: ""
            }
        },()=> this.setToLocalStorage(this.state.itemsArray))
    }

    removeItem = (e) => {
        const filteredArray = this.state.itemsArray.filter((item) => (item.key !== +e.target.id))
        this.setState({itemsArray:filteredArray},
           ()=> this.setToLocalStorage(this.state.itemsArray) )
    }

    editItem = () => {
        
    }

    setToLocalStorage = (updatedList) =>{
        localStorage.setItem("todoList",JSON.stringify(updatedList))
    }

    renderItems = () => {
        return this.state.itemsArray.map((element) => {
            return <Item
                id = {element.key}
                key={element.key}
                text={element.text}
                delete={this.removeItem}
            />
        })
    }

    componentDidMount = () => {
        this.setState({ itemsArray:
        JSON.parse(localStorage.getItem("todoList"))})}
    

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.input}
                        onChange={(e) => this.setState({ input: e.target.value })}
                    />
                    <button onClick={this.createItem}>+</button>
                </div>
                <div>{this.renderItems()}</div>
            </>
        )
    }
}

export default Home