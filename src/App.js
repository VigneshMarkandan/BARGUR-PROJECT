import React from 'react';
import './assets/style.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
const App = () => {
    return (
        <div>
          <Header/>
           <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
           </Router>
          <Footer/>
        </div>
    );
};

export default App;
