
import React from 'react'

import Iframe from 'react-iframe'
import './Widget.css'
import Chat from './Chat.js'

function Widget() {
    return ( <div className='w-container'>
      
        <div className='widgets'>
            <h5>Sponsorizzato</h5>
        <Iframe url="https://www.karalisnonsolotende.com/"
        width="340px"
        height="100%"
        style={{ border: 'none', overflow: 'hidden'}}
        scrolling='no'
        frameborder='0'
        allowTransparency="true"
        allow="encrypted-media"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        <Chat/>
        </div>
        </div>
    )
}

export default Widget
