import React from 'react'
import './Post.css'; 
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReplyIcon from '@mui/icons-material/Reply';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Post({profilePic,
    username,
    message,
    timestamp,
    image,}) {

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src = {profilePic}
                className = 'post__avatar'/>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

                <div className='post__bottom'>
                    <p>{message}</p>
                </div>
                <div className='post__image'>
                    <img src = {image} alt=''/>
                </div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon/>
                    <p>Mi piace</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon/>
                    <p>Commenta</p>
                </div>
                <div className='post__option'>
                    <ReplyIcon/>
                    <p>Condividi</p>
                </div>
                <div className='post__option'>
                <Avatar src={'https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1652313600&v=beta&t=_m5v5BAmggTEt-u_4q0mpg1-Njgc0PvI--qIGUpgUuU'}/>
                <ExpandMoreIcon/>
                </div>
            </div>
            

        </div>
    )
}

export default Post

