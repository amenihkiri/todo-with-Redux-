import React, { Component } from 'react'
import {connect} from "react-redux"
import{addTask,deleteTask,completeTask} from"../actions/actions"

//react
class todoList extends Component {
state={
    myInput:""
}


handleChange=(event)=>{
    this.setState({
        myInput:event.target.value
    })
}
handleAdd=()=>{
    this.props.addTask({
        text:this.state.myInput,
        id:Math.random(),
        isComplete:false

    })
    this.setState({
        myInput:""
    })
}

    render() {
        return (
            <>
            <header>
             <input value={this.state.myInput} onChange={this.handleChange}/>   
             <button onClick={this.handleAdd}>ADD</button>
            </header>
            <ul>
                {this.props.todos.map(el=>
                <li key={el.id}>
                    <span style={el.isComplete? {textDecoration:'line-through'}: null}>{el.text}</span>
                    <button onClick={()=>this.props.deleteTask(el.id)}>delete</button>
                    <button onClick={()=>this.props.completeTask(el.id)}>Complete</button>
                    </li>)}
            </ul>
            </>
        )
    }
}



//redux 
//1
const mapStateToProps=state=>{
    return{ todos:state}
}

//2
const mapDispatchToProps=dispatch=>{
    return { addTask:(payload)=>dispatch(addTask(payload)),
        deleteTask:(payload)=>dispatch(deleteTask(payload)),
        completeTask:(payload)=>dispatch(completeTask(payload))
    }
}


//connct rEact to redux

export default connect (mapStateToProps,mapDispatchToProps)  (todoList)