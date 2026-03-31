import { Suspense, useState } from "react";
import "./App.css";
import DigitalTools from "./component/DigitalTools/DigitalTools";
import Header from "./component/header/Header";
import Hero from "./component/header/hero/HeroSection";
import GetStarted from "./component/GetStarted/GetStarted";
import Pricing from "./component/pricing/Pricing";

let fakeApi = async () => {
  let res = await fetch("/package.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const dataApi = fakeApi();
  // console.log(dataApi);
  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <Suspense fallback={<h1>ovi.............</h1>}>
        <DigitalTools dataApi={dataApi} activeTab={activeTab} setActiveTab={setActiveTab}></DigitalTools>
      </Suspense>
      
      <GetStarted></GetStarted>
      <Pricing></Pricing>
    </>
  );
}

export default App;
