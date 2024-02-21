import "./Products.scss";
import { v4 as uuidv4 } from "uuid";
import logicAddBasketProduct from "./logicAddBasketProduct";
import AssideBasket from "../Asside/AssideBasket";
import NavPanel from "../NavPanel/NavPanel";
export default function ProductsComponent({
  productArr,
  stateBasket,
  stateModal,
  titleProd,
}) {
  const { setCardModal, setShowModal } = stateModal;
  const { basket, setBasket } = stateBasket;
  function logicOpenModal(element) {
    setShowModal(true);
    setCardModal(element);
  }

  return (
    <>
      <main>
        <NavPanel />
        <div className="glContent">
          <div className="container__basket">
            <AssideBasket basket={basket} setBasket={setBasket} />
          </div>
          <div className="container_content">
            <div className="content">
              <h2 className="container_cards-title">{titleProd}</h2>
              <div className="container_products">
                {productArr.length === 0 ? (
                  <h1>
                    Простите, данные позиции пока не доступны...
                    <br />
                    Хорошего дня
                  </h1>
                ) : (
                  productArr.map((item) => (
                    <div className="burgers__card" key={uuidv4()}>
                      <div className="burgers__card-wrap">
                        <div
                          className="burgers__card-head"
                          onClick={() => {
                            logicOpenModal(item);
                          }}
                        >
                          <img src={item.img} alt="#" />
                        </div>
                        <div className="burgers__card-body">
                          <p className="price">{item.price}</p>
                          <p className="title">{item.title}</p>
                          <p className="massa">{item.massa}</p>
                        </div>
                        <div className="burgers__card-footer">
                          <button
                            onClick={() => {
                              logicAddBasketProduct(item, stateBasket);
                            }}
                          >
                            Добавить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
