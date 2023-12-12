export const PizzaBlock = () => {
  return (
      <div className='pizza-block' >
          <img
              className="pizza-block__image"
              src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
              alt="Pizza"/>
          <h4 className="pizza-block__title">Чизбургер-пицца</h4>
          <div className="pizza-block__selector">
              <ul>
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
              </ul>
              <ul>
                  <li className='active'>26 см.</li>
                  <li>30 см.</li>
                  <li>40см.</li>
              </ul>
          </div>
          <div className="pizza-block__bottom">
              <div className="pizza-block__price">от 395 руб.</div>
              <div className="button button--outline button--add">
                  <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org./2000/svg">
                      <path
                          d="M10.8.4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.337"
                          fill="white"/>

                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
              </div>
          </div>
      </div>

  );
};
