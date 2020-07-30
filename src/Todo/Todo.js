import React from 'react'
import TodoItems from './TodoItems'


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
 
export default Todo;