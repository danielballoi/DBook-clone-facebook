import React from 'react'; 
import './App.css';
import Header from './Header'; 
import Sidebar from './Sidebar';
import Feed from './Feed'; 
import Widget from './Widget' 



function App() {
const user = null;

  return ( <>
    <div className="App">
     
<Header/>


{/*Header*/}
{/*App.js*/}

      <div className='app__body'>
        <Sidebar/>
        <Feed/>
       
       <Widget/> 
      {/*Sidebar*/}
      {/*Feed*/}
      {/*Widgets*/}
    </div>

      
    </div>
    </>
      ) }
  


export default App;
