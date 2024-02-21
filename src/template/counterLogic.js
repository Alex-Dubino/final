export function allCountProductsCart(cart) {
  // console.log(cart)
  let countProduct = 0;
  cart.forEach((item) => {
    countProduct += item.count;
  });
  return countProduct;
}

export function allPriceProductsCart(cart) {
  let counterPrice = 0;
  cart.forEach((item) => {
    const allProductPrice = item.count * item.confCost;
    counterPrice += allProductPrice;
  });
  return counterPrice;
}
