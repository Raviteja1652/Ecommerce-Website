import NavBar from "./Components/Header/NavBar";
import ItemsList from "./Components/List/ItemsList";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <NavBar />
      <ItemsList />
      {/* <Button variant="primary"></Button> */}
    </div>
  );
}

export default App;
