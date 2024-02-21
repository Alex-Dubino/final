export default function logicAddBasketProduct(item, stateBasket) {
  const addCopyProductItemValidate = stateBasket.basket.find(
    (elem) => elem.title === item.title
  );

  if (addCopyProductItemValidate) {
    const updateBasket = stateBasket.basket.map((element) => {
      if (element.title === addCopyProductItemValidate.title) {
        element.count += 1;
        return element;
      }
      return element;
    });

    stateBasket.setBasket(updateBasket);
    return;
  }

  const copyItem = { ...item };
  const lastElementIdBasket =
    stateBasket.basket.length > 0
      ? stateBasket.basket[stateBasket.basket.length - 1].id
      : 0;
  copyItem.id = +lastElementIdBasket + 1;
  stateBasket.setBasket((prevState) => [...prevState, copyItem]);
}
