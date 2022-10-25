import "./App.scss";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Sort from "./src/components/Sort";
import PizzaCard from "./src/components/PizzaCard";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {/* {[...Array(8)].map((_, index) => (
                <PizzaCard key={index}  />
              ))} */}
              <PizzaCard title={"Мексиканська піца"} price={900} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
