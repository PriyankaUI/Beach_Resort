
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singleroom from './pages/Singleroom';
import { Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/rooms/" component={Rooms}></Route>
    <Route exact path="/rooms/:slug" component={Singleroom}></Route>
    <Route component={Error}></Route>
    </Switch>
    </>
  );
}

export default App;
