import "./App.css";
import React, { useState } from 'react';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
} from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
 function App() {
  const [mode, setMode] = useState('light');
  // const [mod, setMod] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
       setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  //for multiple background add in webpage
  const toggleMode = (cls)=>{
  removeBodyClasses()
  console.log(cls)
  document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","Success");
      // document.title = 'TextUtile=Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtile is good Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'glow'
      // }, 1500);
  }
    else{
      setMode ('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","Success");
      // document.title='TextUtile=light mode';
    }
  }
  // const RedToggleMode = ()=>{
  //       if(mod === 'light'){
  //         setMod ('Dark');
  //         document.body.style.backgroundColor ='red';
  //         showAlert("Dark mode has been enabled","Success");
  //         // document.title = 'TextUtile=Dark Mode';
  //         // setInterval(() => {
  //         //   document.title = 'TextUtile is good Mode'
  //         // }, 2000);
  //         // setInterval(() => {
  //         //   document.title = 'glow'
  //         // }, 1500);
  //       }
  //       else{
  //         setMod ('light');
  //         document.body.style.backgroundColor ='white';
  //         showAlert("Light mode has been enabled","Success");
  //         // document.title='TextUtile=light mode';
  //       }
  // }
  return (
  <>
    <Router>
      {/* <Navbar/> */}
      {/* <Navbar  title="TextUtils" aboutText="about TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* //For add two backgroundColor used this "mod={mod} RedToggleMode={RedToggleMode}" */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode}/>}
          />
      </Routes>
      </div>
      
    </Router>
    {/* <TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode}/> */}
    {/* <About/> */}
  </>
  );
}
export default App;