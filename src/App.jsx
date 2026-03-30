import { Suspense } from "react";
import "./App.css";
import DigitalTools from "./component/DigitalTools/DigitalTools";
import Header from "./component/header/Header";
import Hero from "./component/header/hero/HeroSection";

let fakeApi = async () => {
  let res = await fetch("/package.json");
  return res.json();
};

function App() {
  const dataApi = fakeApi();
  console.log(dataApi);
  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <Suspense fallback={<h1>ovi.............</h1>}>
        <DigitalTools dataApi={dataApi}></DigitalTools>
      </Suspense>
    </>
  );
}

export default App;
