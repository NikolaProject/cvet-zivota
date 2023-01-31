import Ciljevi from "./components2/Ciljevi";
import HeroSecound from "./components2/HeroSecound";
import Kakopoceti from "./components2/Kakopoceti";
import Opstenapomene from "./components2/Opstenapomene";
import Sazetak from "./components2/Sazetak";
import UvodObuke from "./components2/UvodObuke";
import Footer from "./components3/Footer";

function NewApp() {
    return (
      <>
      <div>
        
        <HeroSecound/>
        <UvodObuke/>
        <Ciljevi/>
        <Kakopoceti/>
        <Sazetak/>
        <Opstenapomene/>
        <Footer/>
        
      </div>
      </>
    );
  }
  
  export default NewApp;