import React from 'react'
import addButton from '../img/check.png'

function EntryField(props) {

  // code for making enter submit code 

  const handleKeyPress = (event) =>{
    if(event.keyCode === 13 || event.which === 13){
      document.getElementById("addButton").click();
    }
  }

  // code ends

  return (
    <div className='mainBox'>
      <div className="field">
        <input type="text" className='enfield' id='inputField' value={props.inputV} onChange = {props.setInputV} onKeyPress={handleKeyPress}/>
        <img src={addButton} alt="Button" className='buttonimg' id='addButton' onClick={props.addItem}/>
      </div>
    </div>
  )
}

export default EntryField