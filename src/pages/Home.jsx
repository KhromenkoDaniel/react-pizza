import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaCard from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({name:'популярності(DESC)',sortProperty: '-rating'});

    console.log(categoryId , sortType)  ;
    React.useEffect(() => {
        setIsLoading(true);
        const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
        const sortBy = sortType.sortProperty.replace('-','');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        fetch(`https://6373751c348e9472990cfb4e.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                    setItems(data);
                    setIsLoading(false);
                    window.scrollTo(0, 0);
            });

    }, [categoryId,sortType]);
  return (
      <div className='container'>
          <div className='content__top'>
              <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
              <Sort value={sortType} onClickSort={(i) => setSortType(i)}/>
          </div>
          <h2 className='content__title'>Всі піци🧡</h2>
          <div className='content__items'>
              {isLoading ? Array(12).fill(0).map((_, index) => <Skeleton key={index} />)
                  : items.map((item) => <PizzaCard key={item.id} {...item} />)}
          </div>
      </div>
  );
}
export default Home;