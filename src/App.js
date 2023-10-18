import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not

  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type 
    });
    setTimeout(() => {
     setAlert(null);
    },1500);
  }
   
  //  const removeBodyclasses = ()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-success")
    
  //  }

  const toggleMode = () => {
    // removeBodyclasses();
    // console.log(cls)
    // document.body.cla.ssList.add("bg-"+cls)
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils - dark Mode";
      // TextForm.multibutton = "multibutton - dark Mode"
      /*setInterval(()=>{
        document.title = "TextUtils is Amazing Mode"
      },2000)
      setInterval(()=>{
        document.title = "Install TextUtils Now"
      },1500)*/
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      // document.title = "TextUtils - light Mode";
      // TextForm.multibutton = "multibutton - light Mode"
    }
  };
  
  // const toggleMode2 = () => {
  //   if(mode === "light"){
  //     setMode("dark")
  //     document.body.style.backgroundColor = "green"
  //     showAlert("Dark mode has been enable", "success");
  //   }
  //   else{
  //     setMode("light")
  //     document.body.style.backgroundColor = "white"
  //     showAlert("light mode has been enable", "success");
  //   }
  // }
  
  return (
    <>
     {/* <Navbar titel="TextUtils" aboutText="About TextUtils"/> */}
     {/* <navbar/> */}
    <Router>
    <Navbar titel="TextTweaker" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className='container my-3'>
     
       <Routes>
            <Route exact path="/about" element={<About mode={mode} /> } >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading=" Try TextTweaker - word Counter, Character counter, Remove extra spaces"  mode={mode}/>}/>
            <Route exact path="/   " element={<TextForm  showAlert={showAlert} heading="Try TextTweaker - word Counter, Character counter, Remove extra spaces"  mode={mode}/>}/>
            {/* <Route exact path="/" element={<Home />}/> */}
          </Routes>
    </div>
    </Router>
    </>
    
  );
}

export default App;


