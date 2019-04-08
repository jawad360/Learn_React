import React, { Component } from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layouts/Header';
import About from './components/pages/About';
class App extends Component {
  state = {
    todos : [
      {
        id : uuid.v4(),
        title : 'Task 1',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Task 2',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Task 3',
        completed : false
      }
    ]
  }

  markCompleted = (id) => {
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id)
        todo.completed = !todo.completed;
      return todo;
    })})
  }

  delTodo = id => this.setState({ todos : [...this.state.todos.filter(todo => todo.id != id)]})

  addTodo = title => {
    var todo = {
      id : uuid.v4(),
      title,
      completed : false
    }

    this.setState({ todos : [...this.state.todos, todo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={ this.state.todos } markCompleted={this.markCompleted}
                    delTodo={this.delTodo}/>
                </React.Fragment>
              )}>
            </Route>
            <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
