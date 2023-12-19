import plus from "../assets/img/plus.svg";
import { useState } from "react";

type PropsType = {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const PizzaBlock = ({
  title,
  price,
  imageUrl,
  sizes,
  types,
}: PropsType) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const typeNames = ["тонкое", "традиционное"];
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
            >
              {typeNames[type]}
            </li>
          ))}
          {/*<li className="active">тонкое</li>*/}
          {/*<li>традиционное</li>*/}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <img className="" src={plus} alt="plus" />
          <span>Добавить</span>
          <i>0</i>
        </div>
      </div>
    </div>
  );
};
