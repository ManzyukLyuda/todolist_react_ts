import React from 'react';
import Todo from '../todo.model';

interface TodoListProps{
    items: Todo[];
    deleteHandler: (text: string)=>void;
}

const TodoList: React.FC<TodoListProps> = props => {
    
    const onDeleteHandler = (id: string)=>{
        props.deleteHandler(id);

    }
    return <div className="list-wrap">
            <ul className="list">
                {props.items.map(todo => 
                <li key={todo.id} className="list-item">
                    <span>{todo.text}</span>
                    <button className="list-item-btn" onClick={onDeleteHandler.bind(null, todo.id)}>DELETE</button>
                </li>)}
            </ul>
        </div>
};

export default TodoList;