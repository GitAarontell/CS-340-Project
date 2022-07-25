import './App.css';
import Title from './Title/Title.jsx';
import Drivers from './Drivers/Drivers.jsx';
import Trucks from './Trucks/Trucks.jsx';
import Customers from './Customers/Customers.jsx';
import Facilities from './Facilities/Facilities.jsx';
import Deliveries from './Deliveries/Deliveries';
import Orders from './Orders/Orders.jsx';
import Nav from './Nav/Nav.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav></Nav>
        <Title></Title>
          
          <Routes>
              <Route exact path='/Drivers' element={< Drivers />}></Route>
              <Route exact path='/Trucks' element={< Trucks />}></Route>
              <Route exact path='/Customers' element={< Customers />}></Route>
              <Route exact path='/Facilities' element={< Facilities />}></Route>
              <Route exact path='/Deliveries' element={< Deliveries />}></Route>
              <Route exact path='/Orders' element={< Orders />}></Route>
          </Routes>
      </div>
    </Router>

  );
}

export default App;
