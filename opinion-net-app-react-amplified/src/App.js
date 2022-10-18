/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Posting from './pages/Posting.js';
import Settings from './pages/Settings.js';
import ViewPost from './pages/ViewPost.js';

<div className="App">
  <Login/>
</div>

export default App