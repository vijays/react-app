import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        }
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map(
            (todo) => {return <Todo key={todo.id} {...todo} />;}
        );
        
        return (
            <div>
                <h2>Todos</h2>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}
