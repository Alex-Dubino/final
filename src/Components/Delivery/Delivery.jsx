
import './Delivery.scss'
export default function Delivery({allPrice}) {


  return (
    <div className="dev_container">
      <div className="wr_button-dev">
        <button>Оформить заказ</button>
      </div>
      {+allPrice > 3000 && <div className="bonus">
        <img src="./dostavka.png" alt="dostavka" />
        <span>Бесплатная доставка</span>
        </div>}
    </div>
  );  
}
