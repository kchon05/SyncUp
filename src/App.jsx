import React from 'react';
// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { AskAIPage } from './components/AskAIPage'
import { ChatPage } from './components/ChatPage'
import { LikesPage } from './components/LikesPage'
import { ProfilePage } from './components/ProfilePage';

import './App.css'


function App() {
  return (
    <>
      <div>
        <NavBar/>

        <Routes>
          <Route path="/ai" element={<AskAIPage/>}/>
          <Route path="/likes" element={<LikesPage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<ChatPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </div>
        
    </>
  );
}

export default App;
