import { useContext, useState } from "react";
import Cart from "./Components/Cart/Cart";
import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/List/ItemsList";
import ContextProvider from "./Store/ContextProvider";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import About from "./Components/Header/About";
import Home from "./Components/Header/Home";
import MoviesApp from "./Components/Movies/MoviesApp";
import ContactUs from "./Components/Header/ContactUs";
import Colors from "./Components/ProductPages/Colors";
import Black from "./Components/ProductPages/Black";
import Yellow from "./Components/ProductPages/Yellow";
import Blue from "./Components/ProductPages/Blue";
import LoginForm from "./Components/Authentication/LoginForm";
import cartContext from "./Store/cart-context";

function App() {
  const ctx = useContext(cartContext);
  console.log(ctx.isLoggedIn)
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

  const cartEnableHandler = (bool) => {
    setIsShown((prev) => !prev)
  };

  return (
    <ContextProvider>
      <Router>
        <NavBar cartOnClick={cartEnableHandler} />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={ItemsList} />
          <Route path="/home" component={Home} />
          <Route path="/movies" component={MoviesApp} />
          <Route path="/contact" render={(props) => <ContactUs onAddDetail={addDetailHandler} />} />
          <Route path="/products/Colors" component={Colors} />
          <Route path="/products/Black and white Colors" component={Black} />
          <Route path="/products/Yellow and Black Colors" component={Yellow} />
          <Route path="/products/Blue Color" component={Blue} />
          {/* <Route path="/login" component={LoginForm} /> */}
          {/* <Route path='/login'>
            {!ctx.isLoggedIn && <LoginForm />}
            {ctx.isLoggedIn && <Redirect to='/' />}
          </Route> */}
          <Route path='/login'>
            {!ctx.isLoggedIn ? (
              <LoginForm />
            ) : (
              <Redirect to='/about' />
            )}
          </Route>
        </Switch>

        {isShown && <Cart />}
      </Router>
    </ContextProvider>
  );
}

export default App;
