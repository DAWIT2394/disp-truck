import './App.css';
import Home from './components/home';
import AboutUs from './components/about';
import TruckingDispatchServices from './components/service';
import Stats from './components/state'
function App() {
  return (
    <div className="App">
    <Home/>
    <AboutUs/>
<Stats/>

    <TruckingDispatchServices/>
    </div>
  );
}

export default App;
