import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      let total = 0

      const res = cartList.map(item => {
        total += item.price * item.quantity
        return item
      })

      console.log(res)

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-all-container">
                  <button
                    className="remove-all-button"
                    type="button"
                    onClick={removeAllCartItems}
                    data-testid="remove"
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {/* : Add your code for Cart Summary here */}
                <div className="remove-all-container">
                  <div className="cart-summery-container">
                    <h1 className="summery-heading">
                      Order Total:{' '}
                      <span className="summery-span">Rs {total}/-</span>
                    </h1>
                    <p className="summary-para">
                      {cartList.length} items in cart
                    </p>
                    <button className="checkout-button" type="button">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
