import React, { FormEvent, useRef } from 'react';

interface onAddHandler{
    onAddHandler: (text: string) => void;
    errorText: string;
}


const NewTodo: React.FC<onAddHandler> = props =>{
    const textInputRef = useRef<HTMLInputElement>(null);

    const clearInput = (isEmpty: boolean)=>{
        if(isEmpty) {
            textInputRef.current!.value = '';
        } 
    }

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddHandler(enteredText);
        clearInput(!(props.errorText.length > 0));
    }

    return(
            <form onSubmit={todoSubmitHandler}>
                <div className="input-fild">
                    <label htmlFor="todo-text" className="control-label">Add a task </label>
                    <input type='text' ref={textInputRef} id='todo-text' placeholder="Your new task" className="control-input"/>
                    {props.errorText.length>0 && <span className='error'>{props.errorText}</span>}
                </div>
                <button type='submit' className="control-btn">ADD TASK</button>
            </form>
    )
}

export default NewTodo;