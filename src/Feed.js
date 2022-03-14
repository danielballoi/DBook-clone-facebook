import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender'; 
import Post from './Post'; 


function Feed() {
return <div className='feed'>
<StoryReel/>
<MessageSender/> 
<Post
profilePic= 'https://it.gariwo.net/i/202001100429_Logo-Cagliari-Calcio-stadio-Sardegna-Arena.jpg'
message= 'Il Cagliari ha vinto 5 a 0😍'
timestamp='Juventus Stadium, Turin'
username='Cagliari Calcio'
image = 'https://static.sky.it/images/skysport/it/calcio/serie-a/2021/04/25/cagliari-roma-risultato-gol/cagliari_gol%20(1).jpg'
/>
<Post
profilePic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
message='DBbook mi ha plagiato 🥲'
username='Mark Zuckerberg'
image='https://images.agi.it/pictures/agi/agi/2018/05/18/072057334-4f693cff-8cf7-4b53-a8fa-726a281b4647.jpg'
/>



{/* story row */}
{/*MessangeSender*/}
</div>

}


export default Feed


