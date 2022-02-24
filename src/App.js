
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  // document.title =""
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if (mode=== 'dark'){
      setMode ('light')
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode ('dark')
      document.body.style.backgroundColor = '#404040'

    }
  }
  return (
    <>
<Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode}/>
<div className="container my-3">
<TextForm heading = "Enter the text to Analyze" mode = {mode}/>
</div>
</>
  );
}

export default App;
