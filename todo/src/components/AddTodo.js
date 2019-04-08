import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        title : ''
    }
    changeTodo = (e) => this.setState({'title' : e.target.value})
    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render (){
        return (
            <form onSubmit={this.addTodo}>
                <input
                    type='text'
                    name='title'
                    placeholder='Add todo'
                    value={this.state.title}
                    onChange={this.changeTodo}
                />
                <button
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}

export default AddTodo;
