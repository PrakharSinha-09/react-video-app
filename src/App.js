import React from 'react';
// import {Button} from '@chakra-ui/react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/videos" element={<Videos /> } />
        <Route exact path="/upload" element={<Upload /> } />
        <Route exact path="/login" element={<Login /> } />
        <Route exact path="/signup" element={<Signup /> } />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

