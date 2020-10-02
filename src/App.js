import { Http } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Body />
      </div>
      
    </div>
  );
}

export default App;

// api_key: AIzaSyDaAf9sPuwYuWVvLMT-ny1QKR_yW7ODPO4

// PL-J2q3Ga50oOptecwiykPFqT1Pb-8WESV
