import Cart from "./Cart";
import "./mainContent.css";
import "./cart.css";
import { useState } from "react";

const MainContent = (props) => {
  // console.log(props);
  const [cartItems, setCartItems] = useState([]);

  //Pour calculer le sous-total
  const [subTotal, setSubTotal] = useState(0);

  const addItem = (meals) => {
    const newCart = [...cartItems];
    //la fonction findIndex() permet de chercher dans un tableau le premier élément correspondant
    //à la fonction indiquée entre parenthèses et renvoie son index.
    //Si rien n'est trouvé selon ces critères, renvoie -1

    //Ici je cherche dans mon tableau d'éléments envoyés au panier
    //Je regarde si l'un d'eux à une clé id avec une valeur identique à une élément du tableau data (meals)
    //Si oui, j'ajoute 1 à la clé counter de l'élément à l'index indiqué
    //Si non, je push un nouvel élément dans mon panier
    const findId = newCart.findIndex((item) => item.id === meals.id);
    if (findId === -1) {
      newCart.push({
        title: meals.title,
        price: meals.price,
        counter: 1,
        id: meals.id,
      });
      setSubTotal(
        Math.round((Number(subTotal) + Number(meals.price)) * 100) / 100
      );
    } else {
      newCart[findId].counter++;
      setSubTotal(
        Math.round((Number(subTotal) + Number(newCart[findId].price)) * 100) /
          100
      );
    }

    setCartItems(newCart);
  };

  return (
    <div className="container category">
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
      <div className="all-items">
        {props.data.categories.map((category, index) => {
          return (
            <div key={index} className="category-item">
              <h2>{category.name}</h2>
              <div>
                {category.meals.map((meals, index) => {
                  return (
                    <div
                      key={index}
                      className="category-meal"
                      onClick={() => {
                        addItem(meals);
                      }}
                    >
                      <div className="category-meal-text">
                        <h3>{meals.title}</h3>
                        <p className="category-meal-description">
                          {meals.description}
                        </p>
                        <div className="price-summary">
                          <p className="category-meal-price">{meals.price} €</p>
                          {meals.popular && (
                            <span className="popular">⭐ Populaire</span>
                          )}
                        </div>
                      </div>
                      {meals.picture ? (
                        <div className="category-image">
                          <img src={meals.picture} alt="" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );

          // return console.log(category);
        })}
      </div>
    </div>
  );
};

export default MainContent;
