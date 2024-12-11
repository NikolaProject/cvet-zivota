import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Slika from "./components/Slika";
import Statistic from "./components/Statistic";
import Obuke from "./components/Obuke";
import OpsteDobro from "./components/OpsteDobro";
import {Routes, Route} from 'react-router-dom'
import NewApp from "./NewApp";
import Footer from "./components3/Footer";
import { Onama } from "./components/Onama";
import Ciljevi from "./components/Ciljevi";
import Ciljevi2 from "./components/Ciljevi2";
import Ciljevi3 from "./components/Ciljevi3";

<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"></link>;


function App() {
  return (
    <>
    <Navbar/>

    <Ciljevi/>

    <Ciljevi2/>

    <Ciljevi3/>

    <Onama/>
    
    <Content/>

    <Statistic/>

    <Obuke/>

    <Footer/>
   

    {/*<Navbar/>
    <Content/>
    <Slika />
    <Offer/>
    <Obuke/>
  <OpsteDobro/>*/}
    
    </>
  );
}

export default App;
