import React from 'react'
import './RowPost.css'
import { SiApplemusic } from "react-icons/si"
import { SiYoutubemusic } from "react-icons/si"
import { RiDeleteBin7Line } from "react-icons/ri"

function RowPost() {
  return (
    <>
    <div className='rowContainer'>
      <div className='name'>
        <SiApplemusic style={{width: '1.5rem',height: '1.5rem',marginTop: '10px',paddingLeft: '61px'}} />
        <p>Song</p>
      </div>
      <div className='source'>
        <p>YouTube</p>
      </div>
      <div className='playButton'>
        <SiYoutubemusic style={{color:'rgba(253, 185, 39, 1)',marginTop:'15px',paddingLeft: '26px'}}/>
        <RiDeleteBin7Line style={{marginTop:'15px',paddingRight: '204px'}} />
      </div>
    </div>
    <p className='hrSongTile'></p>
    </>
  )
}
 
export default RowPost
 