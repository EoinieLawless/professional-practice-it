import React from 'react';
import Logo from './Images/Logo.png';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Login } from './Pages/login';
import { Register } from './Pages/register'
import { CageView } from './Pages/cageView';
import { ViewingPage } from './Pages/ViewingPage';
import { Footer } from './Pages/Footer';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from 'react-router-dom';




class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="info" variant="dark">
            <Container>
              <img src={Logo} className="Logo" alt="Logo" style={{ height: '50px', marginRight: '10px' }}></img>
              <Navbar.Brand href="/"> Salthill Devon</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/view">View</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
  
          <Routes>
            <Route path='/' element={<CageView></CageView>}></Route>
            <Route path='/view' element={<ViewingPage></ViewingPage>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
        </div>
  
        <Container>
          <div>
            <Footer />
          </div>
        </Container>
  
      </Router>
    );
  }
}
export default App;