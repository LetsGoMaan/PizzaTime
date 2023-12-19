import "./scss/app.scss";
import { Header } from "./components/Header.tsx";
import { Categories } from "./components/Categories.tsx";
import { Sort } from "./components/Sort.tsx";
import { PizzaBlock } from "./components/PizzaBlock.tsx";
import { useEffect, useState } from "react";

export const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://65817ac83dfdd1b11c43626b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <>
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
              {items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
