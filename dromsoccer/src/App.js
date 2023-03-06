import React from 'react';
import './App.css';
import  Login  from './Pages/login';

import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom';

function App() {     
  return (
    <div className="App">

<h1>Hello world</h1>

<Router>
 
<Routes>
        
        <Route path='/login' element={<Login></Login>}></Route>
        
      </Routes>
  
</Router>

    </div>
  );
}

export default App;
