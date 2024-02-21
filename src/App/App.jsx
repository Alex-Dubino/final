import { useState } from "react";

import ModalBurgers from "../Components/ModalBurgers/ModalBurgers";
import ControllerRoute from "../Components/ControllerRoute/ControllerRoute";

import basketServer from "../dt/basket.json";

import "../style/App.scss";

function App() {
  const [basket, setBasket] = useState(basketServer);
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const stateBasket = { basket, setBasket };
  const stateModal = { cardModal, setCardModal, showModal, setShowModal };
  return (
    <>
      {showModal && (
        <ModalBurgers
          cardModal={cardModal}
          {...stateModal}
          stateBasket={stateBasket}
        />
      )}
      <header></header>
      <ControllerRoute stateBasket={stateBasket} stateModal={stateModal} />
    </>
  );
}

export default App;
