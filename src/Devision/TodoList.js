import React from 'react'   //importing react library 

function TodoList(props) {
    return (
     <li className="list-item">
        ⭐ {props.item}   {/*displaying the list items*/}
        <span className="icons">
        <i class="fa-solid fa-rectangle-xmark icon-delete"
        //when icon got clicked function deleteItem get called 
           onClick={e=>{
             props.deleteItem(props.index)
           }}
        
        ></i>
        </span>
     </li>
  )
}

export default TodoList