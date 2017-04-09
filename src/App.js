import React, { Component } from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo></AddTodo>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
