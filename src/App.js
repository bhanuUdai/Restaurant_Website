import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div>
      <Cart/>
      <Header></Header>
      <Meals/>
    </div>
  );
}

export default App;
