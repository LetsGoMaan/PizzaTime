import plus from "../assets/img/plus.svg";
import { useState } from "react";

type PropsType = {
  title: string;
  price: number;
};

export const PizzaBlock = ({ title, price }: PropsType) => {
  const [pizzaCount, setPizzaCount] = useState(0);

  const addPizza = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={addPizza} className="button button--outline button--add">
          <img className="" src={plus} alt="plus" />
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
};
