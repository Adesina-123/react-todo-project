import React from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItems todo={todo} handleChange={this.props.handleChange} />
        ))}
      </div>
    );
  }
}
Todo.propType = {
  Todo: PropTypes.array.isRequired,
};

export default Todo;
