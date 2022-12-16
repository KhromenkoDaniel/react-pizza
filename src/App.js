import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
<<<<<<< HEAD
import NotFound from "./components/NotFoundBlock";
import Home from "./pages/Home";

function App() {



=======
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';

function App() {
   const [items, setItems] = React.useState([]);
   React.useEffect(() => {
      fetch('https://6373751c348e9472990cfb4e.mockapi.io/items')
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            setItems(data);
         });
   }, []);
>>>>>>> 18d1c89f282f7aa69b83b9e2ae351b1cebcd46db
   return (
      <div className='App'>
         <div className='wrapper'>
            <Header />
            <div className='content'>
<<<<<<< HEAD
                <Home />
=======
               <div className='container'>
                  <div className='content__top'>
                     <Categories />
                     <Sort />
                  </div>
                  <h2 className='content__title'>Все пиццы</h2>
                  <div className='content__items'>
                     {items.map((obj, id) => (
                        <PizzaCard key={id} {...obj} />
                     ))}
                  </div>
               </div>
>>>>>>> 18d1c89f282f7aa69b83b9e2ae351b1cebcd46db
            </div>
         </div>
      </div>
   );
}

export default App;
