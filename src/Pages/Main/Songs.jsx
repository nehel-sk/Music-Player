import React from 'react'
import './Songs.css'


function Songs() {
  return (
    <div className='songContainer'>
        <div className='sideBar'>
          <h1>Logo</h1> 
        </div>
        <div className='mainContainer'>
          <div className='songBar'>
            
            <div className='path'>
              <p>First-level Menu / Second-level Menu/ <span style={{color:'black'}}>Current page</span></p>
            </div>
            <div className='title'>
              <h2>Songs</h2>
              <button>Add Song</button>
            </div> 
            
          </div>
         
          <div className='songList'>
            <h1>songs list</h1>
          </div>
          <div className='nowPlaying'>

          </div>
        
        </div>
      
    </div>
  )
}

export default Songs
