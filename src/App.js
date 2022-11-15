import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
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
   return (
      <div className='App'>
         <div className='wrapper'>
            <Header />
            <div className='content'>
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
            </div>
         </div>
      </div>
   );
}

export default App;
