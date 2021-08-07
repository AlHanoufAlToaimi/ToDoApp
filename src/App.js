import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import reducer from './reducer';

class App extends Component {  
  constructor(props){
    super(props);
    this.state = { todoTitle: "", nextId:4}
  }
  
  handleChange=(event)=> {
    this.setState({[event.target.name]:event.target.value});
  } 
  
  handleSubmit=(event)=> {
    event.preventDefault();
    this.props.addTodo({ id: this.state.nextId++,task: this.state.todoTitle });
    this.state = { todoTitle: ''};
  }
  
  render() { 

    
      const mystyle = {
       
        backgroundColor: "palevioletred",
        padding: "10px",
        fontFamily: "Arial"
      };
    
    return (
    
    <div className="container-fluid" style={mystyle}>
      <h2 style={{color:"DodgerBlue"}}>Track Your Task</h2>
      <form className="form-group" > 
      <input name="todoTitle" type="text" className="form-control" placeholder="Enter New Task" onChange={this.handleChange}/>
      <br/> <input className="btnn" type="submit" value="Add New Task" className="btn btn-success" onClick={this.handleSubmit}/>
          <input type="reset" value="reset" className="btn btn-secondary"/> 
          </form>
          
          <br/> <h3>To Do List</h3>
          <table border="2" className="table table-striped">
            <thead>
              <tr>
                <th>Task Description</th>
                <th>Complete</th>
                <th> </th>
                </tr>
                </thead>
                <tbody>
                  {this.props.toDoList.map(({id,task})=>(
                  <tr key={id}>
                    <td>{task}</td>
                    
                    <td><input  className="form-check-input" type="checkbox" value="Done"/> </td>
                    <td><input type="button" value="Delete Task" className="btn btn-danger" onClick={()=>this.props.deleteTodo({id,task })} /></td> 
                    </tr> ))}
                    </tbody>
                    </table>
                    </div> 
                    )
                  }
                }
                
const mapStateToProps = (state)=> {
  return{
    toDoList:state.toDoList,
    id:state.id,
    task:state.task
  }
}
                
const mapDispatchToProps = (dispatch)=> {
  return{
    addTodo:(todo)=>dispatch({type:"ADD",payload:{ todo }}),
    deleteTodo:(todo)=>dispatch({type:"DELETE",payload:{ todo }})
  }
}
                
export default connect(mapStateToProps,mapDispatchToProps)(App);