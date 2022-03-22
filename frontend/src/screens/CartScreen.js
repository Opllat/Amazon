import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";
const addToCart = (item, forceUpdate = fallse) => {
  let cartItems = getCartItems();
};
const CartScreen = {
  after_render: () => {},
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        prodcut: product._id,
        name: product.name,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      });
    }
    return `<div>Cart Screen</div>`;
  },
};

export default CartScreen;
