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
import { InputPage } from './Pages/InputPage';
import { ViewingPage } from './Pages/ViewingPage';
import { Footer } from './Pages/Footer';
import { HomePage } from './Pages/HomePage';
import Cookies from 'react-cookies';
import { About } from './Pages/About';


import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';





class App extends React.Component {

  state = {
    isLoggedIn: false,
  }

  setLoginStatus = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  }

  componentDidMount() {
    const loggedIn = Cookies.load('loggedIn');
    if (loggedIn === 'true') {
        this.setState({ isLoggedIn: true });
    }
}

handleLogout = () => {
  Cookies.remove('loggedIn', { path: '/' });
  this.setState({ isLoggedIn: false });
}
  


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="info" variant="dark">
            <Container>
              <img src={Logo} className="Logo" alt="Logo" style={{ height: '50px', marginRight: '10px' }}></img>
              <Navbar.Brand href="/"> Salthill Devon</Navbar.Brand>
              <Nav className="me-auto">
                {this.state.isLoggedIn && <Nav.Link href="#/view">View</Nav.Link>}
                {this.state.isLoggedIn && <Nav.Link href="#/InputPage">Insert</Nav.Link>}
                {!this.state.isLoggedIn && <Nav.Link href="#/login">Login</Nav.Link>}
                {this.state.isLoggedIn && ( <Nav.Link href="#/" onClick={this.handleLogout}>Logout</Nav.Link>)}
              </Nav>
            </Container>
          </Navbar>
  
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/InputPage' element={<InputPage></InputPage>}></Route>
            <Route path='/view' element={<ViewingPage></ViewingPage>}></Route>
            <Route path='/login' element={<Login setLoginStatus={this.setLoginStatus}></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/About' element={<About></About>}></Route>
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