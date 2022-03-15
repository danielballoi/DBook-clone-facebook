import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Storefront from '@mui/icons-material/Storefront';
import { ExpandMoreOutlined } from '@mui/icons-material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar () {
return (
<div className='sidebar'>
<SidebarRow src = 'https://media-exp1.licdn.com/dms/image/C4E03AQF7IbShaPnOLA/profile-displayphoto-shrink_200_200/0/1637539822456?e=1651708800&v=beta&t=dQE__NGIg_BUnSS77jmAPJMUpGlRAWSv90UZWQrSgI4' title='Dani Balloi'/>
<SidebarRow Icon={LocalHospitalIcon} title ='Covid-19 info'/>
<SidebarRow Icon={EmojiEmotionsIcon}title='Pagine'/>
<SidebarRow Icon={PeopleIcon} title='Amici'/>
<SidebarRow Icon ={ChatIcon} title='Messanger'/>
<SidebarRow Icon ={StorefrontIcon} title='Marketplace'/>
<SidebarRow Icon ={VideoLibraryIcon} title='Video'/>
<SidebarRow Icon = {ExpandMoreOutlined} title= 'Altro'></SidebarRow>

</div>

)

}

export default Sidebar; 