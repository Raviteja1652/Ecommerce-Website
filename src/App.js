import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/List/ItemsList";
import ContextProvider from "./Store/ContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Header/About";
import Home from "./Components/Header/Home";
import MoviesApp from "./Components/Movies/MoviesApp";
import ContactUs from "./Components/Header/ContactUs";

function App() {
  const [isShown, setIsShown] = useState(false);
  const addDetailHandler = async (detail) => {
    const res = await fetch('https://react-http-7e214-default-rtdb.firebaseio.com/ContactDetails.json', {
      method: 'POST',
      body: JSON.stringify(detail),
      headers: {
        'Contact-Type': 'application/json'
      }
    });
    const data = await res.json();
    const convertedData = [];
    for (const key in data) {
      convertedData.push({
        id: key,
        name: data[key].name,
        email: data[key].email,
        phnNo: data[key].phnNo
      });
    }
    console.log(convertedData)
  }

  const router = createBrowserRouter([
    {path: '/about', element: <About />},
    {path: '/', element: <ItemsList />},
    {path: '/home', element: <Home />},
    {path: '/movies', element: <MoviesApp />},
    {path: '/contact', element: <ContactUs onAddDetail={addDetailHandler} />},
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
