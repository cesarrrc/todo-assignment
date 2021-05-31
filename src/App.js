import React, { Component } from 'react';
import ToDoCard from './component/ToDoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state={
      isClicked: false,
      toDos: [],
      text: ""
    }
  }

  handleClick = () => {
    this.state.isClicked ?
      this.setState({ isClicked : false }) : 
        this.setState({ isClicked : true })
  }

  handleChange = (e) => {
    this.setState({ text : e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ toDos : [...this.state.toDos, this.state.text ]})
    this.setState({ text: "" })
  }
  
  deleteItem = (i) => {
    console.log("was clicked", i)
    let list = this.state.toDos
    list.splice(i, 1)
    this.setState({toDos : [...list]})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Cesar Cisneros
          </p>
        </header>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <button class="submitButton"type="submit">Add to To-Do List</button>
        </form>
        <h1>Things to do:</h1>
        <ol>{ this.state.toDos.map((toDo, index) => {
          return <ToDoCard key={index} index={ index } title={toDo} clickToRemove={this.deleteItem}/>
        })}</ol>
        {/* <p>{ this.state.isClicked? "true" : "false" }</p> */}
        
      </div>
    );
  }
}
export default App;
