import { Suspense, useState } from "react";
import "./App.css";
import DigitalTools from "./component/DigitalTools/DigitalTools";
import Header from "./component/header/Header";
import Hero from "./component/header/hero/HeroSection";
import GetStarted from "./component/GetStarted/GetStarted";
import Pricing from "./component/pricing/Pricing";
import WorkFlow from "./component/workflow/WorkFlow";
import Footer from "./component/Footer/Footer";
import { ToastContainer } from "react-toastify";

let fakeApi = async () => {
  let res = await fetch("/package.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const dataApi = fakeApi();
  // console.log(dataApi);
  return (
    <>
      <Header cart={cart}></Header>
      <Hero></Hero>

       <Suspense fallback={<h1>ovi.............</h1>}>
        <DigitalTools
          dataApi={dataApi}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          setCart={setCart}
        ></DigitalTools>
      </Suspense>

       <GetStarted></GetStarted>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
       <ToastContainer /> 
    </>


    
  );
}

export default App;
