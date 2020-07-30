import React from 'react';
import Todo from './Todo/Todo';
import './App.css';
import Header from './Header/Header'
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'talking on phone',
          complete: false,
        },
        {
          id: 2,
          title: 'playing football',
          complete: true,
        },
        {
          id: 3,
          title: 'do some washing',
          complete: false,
        },
      ],
    };
  }
  handleChange = (id) => {
    this.setState({todo: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo;
    })})
  }
  render () {
    return (
      <div>
        <Header />
        <Todo todos={this.state.todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
