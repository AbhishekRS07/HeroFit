
import './App.css';
import AllRoutes from './Components/AllRouts/Routs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import Register from './Components/Login/Register';
import Boxing from './Components/Product/Boxing';
import { TempNav } from './Components/NavigationBar/TempNav';

function App() {
  return (
    <div className="App">
    {/* <Navbar/>
  

{/* <Boxing/> */}
   
   <TempNav/>
  
   <AllRoutes/>
   {/* <Footer/> */}
   {/* <Register/> */}
    </div>
  );
}

export default App;
