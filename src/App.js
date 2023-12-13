import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/List/ItemsList";
import ContextProvider from "./Store/ContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Header/About";
import Home from "./Components/Header/Home";

function App() {
  const [isShown, setIsShown] = useState(false);

  const router = createBrowserRouter([
    {path: '/about', element: <About />},
    {path: '/', element: <ItemsList />},
    {path: '/home', element: <Home />},
  ]);

  const cartEnableHandler = (bool) => {
    setIsShown((prev) => !prev)
  };

  return (
    <ContextProvider>
      <RouterProvider router={router} />
      <NavBar cartOnClick={cartEnableHandler} />
      
      {isShown && <Cart />}
    </ContextProvider>
  );
}

export default App;
