import React, { useState } from 'react'
import './AddButton.css'

function AddButton() {
    const[songNmae,setSongName]=useState("")
    const[songSource,setSongSource]=useState()

  return (
    <div className='addButton'>
      <button>Add Song</button>
    </div>
  )
}

export default AddButton



