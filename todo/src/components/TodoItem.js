import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor : '#F7F7F7'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>
                <p>{ title}</p>
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        );
    }
}

TodoItem.propType = {
    todo : PropTypes.object.isRequired
}

export default TodoItem;