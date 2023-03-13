import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaCard from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

import { useSelector } from "react-redux";
function Home() {

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [sortType, setSortType] = React.useState({name:'популярності',sortProperty: '-rating'});
    const [currentPage, setCurrentPage] = React.useState(1);

    const categoryId = useSelector((state) => state.filter.categoryID);
    console.log('categoryId=>',categoryId);

    React.useEffect(() => {
        setIsLoading(true);
        const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
        const sortBy = sortType.sortProperty.replace('-','');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '';
        fetch(`https://6373751c348e9472990cfb4e.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                    setItems(data);
                    setIsLoading(false);
                    window.scrollTo(0, 0);
            });

    }, [categoryId,sortType,searchValue,currentPage]);
    const pizzas = items.map((item) => <PizzaCard key={item.id} {...item} />);
    const skeleton = Array(12).fill(0).map((_, index) => <Skeleton key={index} />)
  return (
      <div className='container'>
          <div className='content__top'>
              <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
              <Sort value={sortType} onClickSort={(i) => setSortType(i)}/>
          </div>
          <h2 className='content__title'>Всі піци🧡</h2>
          <div className='content__items'>
              {isLoading ? skeleton : pizzas }
          </div>
          <Pagination onChangePage={number => setCurrentPage(number)} />
      </div>
  );
}
export default Home;