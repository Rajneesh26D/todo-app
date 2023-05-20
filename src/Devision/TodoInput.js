import React,{useState} from 'react'

function TodoInput(props) {
     const [input, setInput] = useState('')
  return (
    <div className="input-box">
        <input
         type="text"
         className="input-box-todo"
         placeholder="Type your Todo here"
         value={input}
         onChange={e=>{
            setInput(e.target.value)
         }}
        />
        <button className="Add-btn"
        onClick={()=>{
            props.addList(input)     //calling addList function
            setInput("")  // to set input box empety after each task added
        }}>Add</button>
    </div>
  );
}

export default TodoInput;