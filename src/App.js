import React, { useState } from 'react'
import "./App.css"
import TodoInput from './Devision/TodoInput'  
import TodoList from './Devision/TodoList'
function App() {
  const[listTodo, setListTodo]=useState([]);   //Using the useState hook to create a state variable 'listTodo' and its setter function 'setListTodo' with an initial value of an empty array
  let addList = (input)=>{
    //applying if condition such that when no task is entred and + button clicked then nothing will happen
     if(input!=='')
    setListTodo([...listTodo, input]);  //using spread operator to add the input to the listTodo array
  }
  const deleteListItem = (key)=>{
    let newListTodo = ([...listTodo]);     //making a new ListTodo to store listtodo item and then deleting the specified item using the splice method
    newListTodo.splice(key, 1)      //splicing method to remove items form newListTodo array
    // Updating the list after deleting the item
    setListTodo([...newListTodo]);
  }
  //returning the App
  return (
    <div className="parent-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">ToDo</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
        


      </div>


    </div>
  )
}

export default App