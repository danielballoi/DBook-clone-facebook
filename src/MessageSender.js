import React, {useState} from 'react'
import './MessageSender.css' 
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';




function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');



const handleSubmit = e => {
    e.prevendtDefault();

setImageUrl(''); 
setInput(''); 
}

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={'https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1652313600&v=beta&t=_m5v5BAmggTEt-u_4q0mpg1-Njgc0PvI--qIGUpgUuU'}/> 
                <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className = 'messageSender__input' 
                 placeholder={`A cosa stai pensando?`}/>
                <input
                value= {imageUrl}
                onChange= {(e)  => setImageUrl(e.target.value)}
                placeholder='image URL(optional)'/>
                <button onClick={handleSubmit} type ='submit'>
                    Hidden submit
                </button>

                </form>


            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style = {{color: 'red'}} />
                    <h3>Video in diretta</h3>

                </div>
            <div className='messageSender__option'>
                <InsertPhotoSharpIcon style={{color:'green'}}></InsertPhotoSharpIcon>
                <h3>Photo/Video</h3>
            </div>

            <div className='messageSender__option'>
                <EmojiEmotionsIcon style={{color:'orange'}}></EmojiEmotionsIcon>
                <h3>Feeling/Attività</h3>
            </div>

            </div>
        </div>
    )
}

export default MessageSender
