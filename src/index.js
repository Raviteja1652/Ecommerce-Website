import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import ContextProvider from "./Store/ContextProvider";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
);
