import React from 'react'

const BookItem = ({book, deleteBook}) => { //, onBookSelect
  // const imageUrl = book.snippet.thumbnails.default.url

  return (
    <li class="list-group-item" style={{float:'left', position: 'relative', width: '200px', height:'300px'}}>

      <button onClick={() => deleteBook(book)}><span class="glyphicon glyphicon-remove pull-right" aria-label="true" style={{ position: 'absolute', zIndex:'3', right:'10px', top:'10px', color:'#e50000', fontSize:'20px', textShadow: '0px 0px 7px white', WebkitTextStroke: '1px black' }}/></button>

      <img src={book.img} style={{maxHeight: '250px', width:'190px', position: 'absolute', marginLeft: 'auto', marginRight: 'auto', top:'5px', left: '0', right: '0' }} />

      <h5 style={{position: 'absolute', bottom:'5px'}}>{book.title}</h5>
    </li>
  )
}

export default BookItem
