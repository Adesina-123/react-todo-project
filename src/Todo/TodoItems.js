import React from 'react';
import PropTypes from 'prop-types';

class TodoItems extends React.Component {
  styles = () => {
    return {
      textDecoration: this.props.todo.complete ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    };
  };
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.styles()}>
        <input
          type="checkbox"
          onChange={this.props.handleChange.bind(this, id)}
        />{' '}
        {title}
        <button style={btn} onClick={this.handleClick}>
          {' '}
          x
        </button>
      </div>
    );
  }
}
const btn = {
  backgroundColor: '#ff0000',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50px',
  color: '#fff',
  float: 'right',
};


TodoItems.propTypes = {
  TodoItems: PropTypes.object.isRequired,
};

export default TodoItems;
