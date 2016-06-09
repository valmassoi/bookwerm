import React from 'react'

const BookItem = ({ book, mode, selectBook, deleteBook }) => {
  let { title } = book
  if(title.length>32)
    title = title.substring(0, 35)+"..."

  let deleteBtn = null
  if(mode=="user_collection"){
    deleteBtn = <button onClick={() => deleteBook(book)}><span class="glyphicon glyphicon-remove pull-right" aria-label="true" style={{ position: 'absolute', zIndex:'3', right:'10px', top:'10px', color:'#e50000', fontSize:'20px', textShadow: '0px 0px 7px white', WebkitTextStroke: '1px black' }}/></button>
  }

  let selectBtn = null
  if(mode=="search"){
    selectBtn = <button onClick={() => selectBook(book)} class="btn btn-primary" style={{position: 'absolute', width:'80px', marginLeft: 'auto', marginRight: 'auto', top:'120px', left: '0', right: '0'}}>Add</button>
  }

  return (

    <li class="list-group-item" style={{float:'left', position: 'relative', width: '200px', height:'300px'}}>

      {deleteBtn}

      <img src={book.img} style={{maxHeight: '250px', width:'190px', position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top:'5px', left: '0', right: '0' }} />

      {selectBtn}

      <h5 style={{position: 'absolute', bottom:'5px', background:'white'}}>{title}</h5>

    </li>
  )
}

export default BookItem
