import {default as React, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../components";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  {name: "популярности", type: "popular"},
  {name: "цене", type: "price"},
  {name: "алфавиту", type: "alphabet"},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((item) => <PizzaBlock key={item.id} isLoading={true} {...item} />)
        : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
