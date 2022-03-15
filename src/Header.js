import React from 'react'
import'./Header.css'; 
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import daniellogo from './Daniel-Balloi.png'

function Header() {
    return (
        <div className = 'header'>
            <div className='header__left'>
<img src={daniellogo} alt=''></img>
            </div>
            <div className='header__input'>
                <SearchIcon></SearchIcon>
                <input text ="text" placeholder='Cerca su Facebook'></input>
            </div>
            
            <div className='header__center'>

                <div className='header__option 
                header__option--active'>
            <HomeIcon fontSize='large'></HomeIcon>

                </div>
            <div className='header__option'>
                <FlagIcon fontSize='large'></FlagIcon>
            </div>
        <div className='header__option'>
                <SubscriptionsIcon fontSize='large'></SubscriptionsIcon>
        </div>
           <div className='header__option'>
               <StorefrontIcon fontSize='large'></StorefrontIcon>

           </div>
           <div className='header__option'>
               <SupervisedUserCircleIcon fontSize='large'></SupervisedUserCircleIcon>



            
           </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar> <img src={'https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1651708800&v=beta&t=dQE__NGIg_BUnSS77jmAPJMUpGlRAWSv90UZWQrSgI4'} alt='' className='img-db'/></Avatar>
                    <h4>Dani Balloi</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>         
            <IconButton>
                <ExpandMoreIcon/>
                </IconButton>       
            </div>
        
            
        </div>
    )
}

export default Header
 