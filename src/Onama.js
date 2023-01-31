import Footer from "./components3/Footer";
import { Herofour } from "./components4/Herofour";
import Kakofunkcionise from "./components4/Kakofunkcionise";
import Kocini from "./components4/Kocini";
import Postaticlan from "./components4/Postaticlan";
import Sistem from "./components4/Sistem";
import Stavamnudi from "./components4/Stavamnudi";
import Proba from "./components5/Proba";
import Proba2 from "./components5/Proba2";

function NewApp() {
    return (
      <>
      <div>
        
        <Herofour/>
        <Kocini/>
        <Kakofunkcionise/>
        <Sistem/>
        <Postaticlan/>
        <Proba/>
        <Proba2/>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default NewApp;