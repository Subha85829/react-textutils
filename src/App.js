//import logo from './logo.svg';
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Normal mode has been enabled','success');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container my-3">
      {<TextForm showAlert={showAlert} heading = "Enter the text to analyze." mode={mode}/>}
      </div>
    </>
  );
}

export default App;
