import React from 'react';
import Navbar from "./Navbar";
import Chats from "./Chats";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Searchbar/>
      <Chats/>
    </div>
  )
}

export default Sidebar