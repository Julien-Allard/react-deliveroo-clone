import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./mainContent.css";
import "./cart.css";

const Cart = (props) => {
  const counterMinus = (index) => {
    const newCart = [...props.cartItems];
    // console.log(newCart[index].counter);
    if (newCart[index].counter > 0) {
      newCart[index].counter = newCart[index].counter - 1;
      props.setCartItems(newCart);
      props.setSubTotal(
        Math.round(
          (Number(props.subTotal) - Number(newCart[index].price)) * 100
        ) / 100
      );
    }

    if (newCart[index].counter === 0) {
      newCart.splice(index, 1);
      props.setCartItems(newCart);
    }
  };

  const counterPlus = (index) => {
    const newCart = [...props.cartItems];
    // console.log(newCart[index].counter);
    newCart[index].counter = newCart[index].counter + 1;
    props.setCartItems(newCart);
    props.setSubTotal(
      Math.round(
        (Number(props.subTotal) + Number(newCart[index].price)) * 100
      ) / 100
    );
  };

  return (
    <div className="cart">
      <div className="cart-card">
        <button
          className={
            props.cartItems.length > 0 ? "validate-cart" : "validate-cart off"
          }
        >
          Valider mon panier
        </button>
        {props.cartItems.length > 0 ? (
          <div className="cart-summary">
            {props.cartItems.map((item, index) => {
              return item.counter ? (
                <div className="cart-item" key={index}>
                  <div className="plus-minus">
                    <FontAwesomeIcon
                      icon="minus-circle"
                      className="minus-circle"
                      onClick={() => {
                        counterMinus(index);
                      }}
                    />
                    <span className="item-counter">{item.counter}</span>
                    <FontAwesomeIcon
                      icon="plus-circle"
                      className="plus-circle"
                      onClick={() => {
                        counterPlus(index, item);
                      }}
                    />
                    <span className="item-title">{item.title}</span>
                  </div>
                  <div className="cart-price">
                    <span>
                      {Math.round(item.price * item.counter).toFixed(2)} €
                    </span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        ) : (
          <span className="cart-summary-empty">Votre panier est vide</span>
        )}

        {props.subTotal > 0 ? (
          <>
            <div className="subtotal-and-fee">
              <div className="subtotal">
                <span className="subtotal-text">Sous-total</span>
                <span className="subtotal-price">
                  {props.subTotal.toFixed(2)} €
                </span>
              </div>
              <div className="fee">
                <span>Frais de livraison</span>
                <span>2,50 €</span>
              </div>
            </div>
            <div className="true-total">
              <span>Total</span>
              <span>
                {(Math.round(props.subTotal * 100) / 100 + 2.5).toFixed(2)} €
              </span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
