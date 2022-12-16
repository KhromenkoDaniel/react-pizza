import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import NotFound from "./components/NotFoundBlock";
import Home from "./pages/Home";

function App() {



   return (
      <div className='App'>
         <div className='wrapper'>
            <Header />
            <div className='content'>
                <Home />
            </div>
         </div>
      </div>
   );
}

export default App;
