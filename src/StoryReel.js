import React from 'react';
import './StoryReel.css';
import Story from './Story'


function StoryReel() {

    return(
        <div className='storyReel'>
       {/*different stories*/}
<Story 
        image='https://www.metallirari.com/wp-content/uploads/2021/04/Ce%CC%80-chi-nasce-ricco-e-famoso-come-gli-8-bambini-piu%CC%80-ricchi-del-mondo.jpg.webp'
        profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1651708800&v=beta&t=dQE__NGIg_BUnSS77jmAPJMUpGlRAWSv90UZWQrSgI4'
        title='Daniel Balloi' />

<Story 
        image='https://news.avvocatoandreani.it/public/images/blog/economia/fallimento-uomo-fallito_large.jpg'
        profileSrc='https://www.repstatic.it/content/localirep/img/rep/2019/01/24/213209256-b078f599-062d-4850-b246-28e9183dab92.jpg'
        title='Mark Zuckerberg' />
<Story 
        image='https://d5rzfs5ck83rq.cloudfront.net/wp-content/uploads/2016/05/23073131/alidellavittoria_cagliari-compressed.jpg' 
        profileSrc='https://it.gariwo.net/i2/202001100429_Logo-Cagliari-Calcio-stadio-Sardegna-Arena.jpg'
        title='Cagliari calcio' />
<Story 
        image='https://images.pexels.com/photos/4161914/pexels-photo-4161914.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        profileSrc='https://hips.hearstapps.com/elleit.h-cdn.co/assets/17/31/640x854/gallery-1501492609-gettyimages-471331292.jpg?resize=480:*'
        title='Shakira' />
    
        </div>

    
    )
}

export default StoryReel