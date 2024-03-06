import Footer from "./footer/Footer";
import Gallarys from "./gallary/Gallarys";
import About from "./header/head/About";
import Head from "./header/head/Head";
import Navbar from "./header/navbar/Navbar";
import Menus from "./menu/Menus";
import Order from "./order/Order";
import Reviews from "./review/Reviews";
import Teams from "./team/Teams";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <About/>
      <Menus/>
      <Gallarys/>
      <Reviews/>
      <Order/>
      <Teams/>
      <Footer/>
    </div>
  );
}

export default App;
