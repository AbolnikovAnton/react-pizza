import {default as React, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = [
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
  "Closed",
];
const sortItems = [
  {name: "popular", type: "popular"},
  {name: "price", type: "price"},
  {name: "alphabet", type: "alphabet"},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({filters}) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
        activeCategory={category} 
        onClickCategory={onSelectCategory} 
        items={categoryNames} />
        <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((item) => <PizzaBlock key={item.id} isLoading={true} {...item} />)
        : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
