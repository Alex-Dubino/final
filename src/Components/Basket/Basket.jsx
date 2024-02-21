import "./Basket.scss";
import { v4 as uuidv4 } from "uuid";
export default function Basket({ basketArr, editCountCart, delItemCart }) {
  if (basketArr.length === 0) {
    return <h1 className="titleBasketClear">Корзина пуста.</h1>;
  }

  return (
    <div>
      {basketArr.map((item) => (
        <div className="container_card" key={uuidv4()}>
          <div className="container_card-wrap">
            <div className="wr-content">
              <div className="wr-img">
                <img src={item.img} alt="#" />
              </div>

              <div className="info_func">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="massa">{item.massa}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
            <div className="wt_button">
              <button
                onClick={() => {
                  editCountCart(item.id, -1);
                  delItemCart(item.id, item.count);
                }}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                onClick={() => {
                  editCountCart(item.id, 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
