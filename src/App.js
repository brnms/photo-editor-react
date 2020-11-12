import React from 'react';
import './App.css';
import Slider from './Slider'
import SidebarItem from './SidebarItem'

function App() {
  return (
    <div className="container">
      <div className="main-image"></div>
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
