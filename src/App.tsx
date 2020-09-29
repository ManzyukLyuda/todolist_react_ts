import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/newTodo';
import Todo from './todo.model';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errors, setErrors] = useState<string>('');

  const validateForm = (text: string) => text.length>3;

  const todoAddHandler = (text: string) => {
    
      const errorText = validateForm(text) ? '' : 'Description must contain at least four characters';
      const enteredId = 't' + Math.random();
      
      validateForm(text) && setTodos(prevTodos => [...prevTodos, {id: enteredId, text: text}])
      setErrors(errorText);
  }
  const deleteHandler = (id: string)=> {

    setTodos(prevTodos => [...prevTodos].filter(prevTodo => prevTodo.id !== id))
  }

  return (
    <div className="App">
        <NewTodo onAddHandler={todoAddHandler} errorText={errors}/>
        <TodoList items={todos} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
