import React from 'react';
import {Route,Routes} from "react-router-dom";
import './scss/app.scss';

import Header from './components/Header';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
    const [searchValue, setSearchValue] = React.useState('');
   return (
      <div className='App'>
         <div className='wrapper'>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className='content'>
               <Routes>
                    <Route path='/cart.html' element={<Cart />} />
                    <Route path='/' element={<Home searchValue={searchValue} />} />
                    <Route path='*' element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
