import "./mainContent.css";

const MainContent = (props) => {
  console.log(props);
  return (
    <div className="container category">
      <div className="cart">
        <div className="cart-card">
          <button className="validate-cart">Valider mon panier</button>
          <div className="cart-summary">Votre panier est vide</div>
        </div>
      </div>
      <div className="all-items">
        {props.data.categories.map((category, index) => {
          return (
            <div className="category-item">
              <h2>{category.name}</h2>
              <div>
                {category.meals.map((meals, index) => {
                  return (
                    <div className="category-meal">
                      <div className="category-meal-text">
                        <h3>{meals.title}</h3>
                        <p className="category-meal-description">
                          {meals.description}
                        </p>
                        <p className="category-meal-price">{meals.price} €</p>
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
