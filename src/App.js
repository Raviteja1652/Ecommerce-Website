import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/List/ItemsList";
import ContextProvider from "./Store/ContextProvider";

function App() {
  const [isShown, setIsShown] = useState(false)
  const cartEnableHandler = (bool) => {
    setIsShown((prev) => !prev)
  }
  return (
    <ContextProvider>
      <NavBar cartOnClick={cartEnableHandler} />
      <ItemsList />
      {isShown && <Cart />}
    </ContextProvider>
  );
}

export default App;
