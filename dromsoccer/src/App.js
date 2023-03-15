import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Login } from './Pages/login';
import { Register } from './Pages/register'
import { CageView } from './Pages/cageView';
import { CageViewTestView } from './Pages/cageViewTestView';

import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Salthill Devon</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/view">View</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path='/' element={<CageView></CageView>}></Route>
            <Route path='/view' element={<CageViewTestView></CageViewTestView>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
          </div>
      </Router>
    );
  }
}
export default App;
