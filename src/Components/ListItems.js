import React from 'react'
import deleteButton from '../img/delete.png'

function ListItems(props) {

  return (
    <>
      {props.itemsArr.map((items) =>{
        return(
        <div className="item-box">
              {items.str}
              <img src={deleteButton} alt="delete button" className='buttonimg delete' onClick={() => props.deleteIt(items.id)}/>
          </div>
        )
      })}
    </>
  )
}

export default ListItems