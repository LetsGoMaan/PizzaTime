import { useEffect, useState } from "react";
import { Categories } from "../components/Categories.tsx";
import { Sort } from "../components/Sort.tsx";
import { Skeleton } from "../components/PizzaBlock/Skeleton.tsx";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock.tsx";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://65817ac83dfdd1b11c43626b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
