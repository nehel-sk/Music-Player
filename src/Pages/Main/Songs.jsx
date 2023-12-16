import React from 'react'
import './Songs.css'
import AddButton from '../../Components/AddSong/AddButton'
import RowPost from '../../Components/RowSong/RowPost'


function Songs() {
  return (
    <div className='songContainer'>
        {/*-----------------side bar-----------  */}
        <div className='sideBar'>
          <h1>Logo</h1> 
          <div className='songNavigation'>
            
            <p>Songs</p>
          </div>
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
            
            <div className='songListContainer'>
              <div className='song'><h5>SONG NAME</h5></div>
              <div className='source'><h5>SOURCE</h5></div>
              <div className='addedOn'><h5>ADDED ON</h5></div>
            </div>
            <p className='hrHeading'></p>
            <RowPost/>
            <RowPost/>
            <RowPost/>
            <RowPost/>
            <RowPost/>
            <RowPost/>
            <RowPost/>
            
          </div>


          {/* -----------footer now plyaing----------- */}
          <div className='nowPlaying'>

          </div>
        
        </div>
      
    </div>
  )
}

export default Songs
