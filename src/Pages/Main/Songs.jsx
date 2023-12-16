import React from 'react'
import './Songs.css'
import AddButton from '../../Components/AddSong/AddButton'


function Songs() {
  return (
    <div className='songContainer'>
        {/*-----------------side bar-----------  */}
        <div className='sideBar'>
          <h1>Logo</h1> 
        </div>
      
        <div className='mainContainer'>
          {/* -----------title song bar----------- */}
          <div className='songBar'>
            
            <div className='path'>
              <p>First-level Menu / Second-level Menu/ <span style={{color:'black'}}>Current page</span></p>
            </div>
            <div className='title'>
              <h2>Songs</h2>
              <AddButton/> 
            </div> 
            
          </div>


         {/* -----------song list----------- */}
          <div className='songList'>
            
            <div classsName='tableContainer'>
              <h4>SONG</h4>
              <h4>SOURCE</h4>
              <h4>ADDED ON</h4>
            </div> 
            
          </div>


          {/* -----------footer now plyaing----------- */}
          <div className='nowPlaying'>

          </div>
        
        </div>
      
    </div>
  )
}

export default Songs
