
import './App.css';          // *importing css for styling and bootstrap 
import Home from '../src/screens/Home';     //importing screens
import Login from './screens/Login';
import MyOrder from './screens/MyOrder';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Cart from './screens/Cart.js';
import {      //setting up routing
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
function App() {     //renders router with many routes
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Home />} />                       {/*<home/> will be rendered when when url path matches /home */}
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<Signup/>} />
          <Route exact path="/myOrder" element={<MyOrder/>} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
   
  );
}

export default App;
