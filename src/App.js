import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Slika from "./components/Slika";
import Offer from "./components/Offer";
import Statistic from "./components/Statistic";
import Obuke from "./components/Obuke";
import OpsteDobro from "./components/OpsteDobro";
import {Routes, Route} from 'react-router-dom'
import NewApp from "./NewApp";
import Footer from "./components3/Footer";

<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"></link>;


function App() {
  return (
    <>
    <Navbar/>
    <Offer/>
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
