import React from 'react'

import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Sidebar.css'
import { Avatar } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
const Chat = () => {
  return (
    <div className='container-chat'>
      <div className='container-chat-contact'>
        <h5>Contatti</h5>
        <div className='icons-chat'>
            <VideoCallIcon className='icon-svg-1'/>
            <SearchIcon className='icon-svg-2'/>
            <MoreHorizIcon className='icon-svg-3'/>
        </div>
        </div>
        <hr/>
        <div className='container-chat-names'>
           <div className='sidebarRow'>
                 <Avatar> <img src={'https://img.a.transfermarkt.technology/portrait/big/41982-1596029669.jpg?lm=1'} alt='' className='img-db'/></Avatar>
                <h4>Radja Nainggolan</h4> 
            </div>                
            <div className='sidebarRow'>  
                    <Avatar> <img src={'https://movieplayer.net-cdn.it/t/images/2008/10/06/primo-piano-di-mara-venier-91761_jpg_300x300_crop_q85.jpg'} alt='' className='img-db'/></Avatar>
                    <h4>Mara Venier</h4>
                </div>
             <div className='sidebarRow'>
                   <Avatar> <img src={'https://biografieonline.it/img/bio/p/Pippo_Baudo.jpg'} alt='' className='img-db'/></Avatar>
                    <h4>Pippo Baudo</h4>
              </div> 
              <div className='sidebarRow'>
                   <Avatar> <img src={'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sfera_Ebbasta_Rapper.jpg'} alt='' className='img-db'/></Avatar>
                   <h4>Sfera Ebbasta</h4>
              </div>
              <div className='sidebarRow'>
                    <Avatar> <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg'} alt='' className='img-db'/></Avatar>
                     <h4>Barak Obama</h4>
                </div>
                <div className='sidebarRow'>
                    <Avatar> <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png'} alt='' className='img-db'/></Avatar>
                    <h4>Rihanna</h4>
                  </div>
                  <div className='sidebarRow'>
                    <Avatar> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Franciscus_in_2015.jpg/204px-Franciscus_in_2015.jpg'} alt='' className='img-db'/></Avatar>
                    <h4>Papa Francesco</h4>
                  </div>
                  <div className='sidebarRow'>
                    <Avatar> <img src={'https://hips.hearstapps.com/elleit.h-cdn.co/assets/17/31/640x854/gallery-1501492609-gettyimages-471331292.jpg?resize=480:*'} alt='' className='img-db'/></Avatar>
                    <h4>Shakira</h4>
                  </div>
                  <div className='sidebarRow'>
                    <Avatar> <img src={'https://www.spettacolomania.it/wp-content/uploads/2020/02/MARIA-DE-FILIPPI-IN-CONFERENZA-STAMPA-AMICI_03-e1582810492581.jpeg'} alt='' className='img-db'/></Avatar>
                    <h4>Maria De Filippi</h4>
                  </div>
                  <div className='sidebarRow'>
                    <Avatar> <img src={'https://upload.wikimedia.org/wikipedia/commons/6/60/Giuseppe_Conte_-_Foto.jpeg'} alt='' className='img-db'/></Avatar>
                    <h4>Giuseppe Conte</h4>
                  </div>
                      <hr/>
                    
                        <button className='btn-chat'> <MessageIcon/> </button> 
                     
                   
        </div>
    </div>
  )
}

export default Chat