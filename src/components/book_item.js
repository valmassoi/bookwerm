import React from 'react'

const BookItem = ({ book, mode, selectBook, deleteBook, requestBook, approveBook, rejectBook }) => {
  let { title } = book
  if(title.length>32)
    title = title.substring(0, 35)+"..."

  let deleteBtn = null
  if(mode=="user_collection"){
    deleteBtn = <button class="pull-right" style={{ position: 'absolute', zIndex:'3', right:'5px', top:'10px', border: 'none', backgroundColor:'Transparent'}} onClick={() => deleteBook(book)}><span class="glyphicon glyphicon-remove" aria-label="true" style={{color:'#e50000', fontSize:'20px', textShadow: '0px 0px 7px white', WebkitTextStroke: '1px black' }} /></button>
  }

  let tradeBtn = null
  if(mode=="all" && localStorage.getItem('token')) {
    tradeBtn = <button onClick={() => requestBook(book)} class="btn btn-primary" style={{position: 'absolute', width:'90px', marginLeft: 'auto', marginRight: 'auto', top:'120px', left: '0', right: '0'}}><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Trade</button>
  }

  let approveBtn = null
  if(mode=="queue") {
    approveBtn = <button onClick={() => approveBook(book)} class="btn btn-primary" style={{position: 'absolute', width:'110px', marginLeft: 'auto', marginRight: 'auto', top:'95px', left: '0', right: '0'}}><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Approve</button>
  }

  let rejectBtn = null
  if(mode=="queue") {
    rejectBtn = <button onClick={() => rejectBook(book)} class="btn btn-danger" style={{position: 'absolute', width:'110px', marginLeft: 'auto', marginRight: 'auto', top:'145px', left: '0', right: '0'}}><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Reject</button>
  }
  let borrower, link = null
  if(mode=="approved" || mode=="wishlist") {
    rejectBtn = <button onClick={() => rejectBook(book)} class="btn btn-danger" style={{position: 'absolute', width:'130px', marginLeft: 'auto', marginRight: 'auto', top:'120px', left: '0', right: '0'}}><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Nevermind</button>
    borrower=book.requester//TODO change for wishlister to owner
    link = `mailto:${borrower}?Subject=Give%20me%20my%20book%20back`
  }
  if(mode=="borrowing") {
    rejectBtn = <button onClick={() => rejectBook(book)} class="btn btn-danger" style={{position: 'absolute', width:'130px', marginLeft: 'auto', marginRight: 'auto', top:'120px', left: '0', right: '0'}}><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Give Back</button>
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
      {tradeBtn}
      {approveBtn}
      {rejectBtn}
      <div style={{position: 'absolute', bottom:'5px', left:'5px', paddingLeft:'5px', width:'190px', background:'rgba(255,255,255,0.7)'}}>
        <h6>{title}</h6>
        {borrower?<a href={link} target="_top">{borrower}</a>:""}
      </div>

    </li>
  )
}

export default BookItem
