import Basket from "../Basket/Basket";
import {
  allCountProductsCart,
  allPriceProductsCart,
} from "../../template/counterLogic";
import Delivery from "../Delivery/Delivery";
export default function AssideBasket({ basket, setBasket }) {
  function delItemCart(id, count) {
    if (count > 0) return;
    const copyBasket = basket.filter((item) => item.id != id);
    setBasket(copyBasket);
  }
  function editCountCart(id, num) {
    const copyBasket = basket.map((item) => {
      if (item.id === id) {
        item.count += num;
        return item;
      }
      return item;
    });
    setBasket(copyBasket);
  }
  return (
    <div className="cont__activeBurgers">
      <div className="container_basket">
        <div className="container_head">
          <h1>Корзина</h1>
          <div className="wr_allcount">
            <h2>{allCountProductsCart(basket)}</h2>
          </div>
        </div>
        <div className="conteiner_main">
          <Basket
            basketArr={basket}
            editCountCart={editCountCart}
            delItemCart={delItemCart}
          />
        </div>

        <div className="container_footer">
          <h1>Итого</h1>
          <h2>{allPriceProductsCart(basket)}₽</h2>
        </div>
        <div className="wrapper_delivery">
          <Delivery allPrice={allPriceProductsCart(basket)}/>
        </div>
      </div>
    </div>
  );
}
