import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');    //wheter dark mode is enabled or not

  const [alert, setalert] = useState(null);     //we make alert a object

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  // const removeClass = (cls)=>{
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }

  const toggleMode = (cls)=>{
    // removeClass();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color='white';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');   
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    //in react a function never return two elements so we use a jsx fragment 
    <>
      <Router>
        <div>
          <Navbar title = "textChange" mode={Mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Switch>
              <Route path="/about">
                <About mode={Mode} />
              </Route>

              <Route path="/">
                <Form Heading="Enter the Text for analyze" showAlert={showAlert} mode={Mode}/>
              </Route>
            </Switch>
          </div>
  
        {/* <About/ */}
        </div>
      </Router>

    </>
  );
}

export default App;
