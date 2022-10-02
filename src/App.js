import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler=()=>
  {
    setOpenCart(false);
  }

  return (
    <div>
      {openCart && <Cart onClose={closeCartHandler} />}
      <Header onShow={openCartHandler}></Header>
      <Meals />
    </div>
  );
}

export default App;
