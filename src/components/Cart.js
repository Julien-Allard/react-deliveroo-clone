import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const counterMinus = (index) => {
    const newCart = [...props.cartItems];
    // console.log(newCart[index].counter);
    if (newCart[index].counter > 0) {
      newCart[index].counter = newCart[index].counter - 1;
      props.setCartItems(newCart);
    }
  };

  const counterPlus = (index) => {
    const newCart = [...props.cartItems];
    // console.log(newCart[index].counter);
    newCart[index].counter = newCart[index].counter + 1;
    props.setCartItems(newCart);
  };

  return (
    <div className="cart">
      <div className="cart-card">
        <button className="validate-cart">Valider mon panier</button>
        <div className="cart-summary">
          {props.cartItems.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <div className="plus-minus">
                  <FontAwesomeIcon
                    icon="minus-circle"
                    onClick={() => {
                      counterMinus(index);
                    }}
                  />
                  <span className="item-counter">{item.counter}</span>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    onClick={() => {
                      counterPlus(index, item);
                    }}
                  />
                  <span>{item.title}</span>
                </div>
                <div className="cart-price">
                  <span>{Math.ceil(item.price * item.counter)} €</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="subtotal-and-fee">
          <div className="subtotal">
            <span>Sous-total</span>
            <span>{props.subTotal}</span>
          </div>
          <div className="fee">
            <span>Frais de livraison</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
