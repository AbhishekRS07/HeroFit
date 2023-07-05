
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import Register from './Components/Login/Register';
import Navbar from './Components/NavigationBar/Navbar';
import TrySection from './Components/TrySection/TrySection';

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Home/>
   <TrySection/>
   <Footer/>
   {/* <Register/> */}
    </div>
  );
}

export default App;
