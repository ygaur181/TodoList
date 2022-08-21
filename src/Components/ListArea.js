import React from 'react'
import ListItems from './ListItems'

function ListArea(props) {
  return (
    <div className='ListingArea'>
        <ListItems itemsArr = {props.itemArr} deleteIt = {props.deleteIt}/>
    </div>
  )
}

export default ListArea