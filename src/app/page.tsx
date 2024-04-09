
import { Navbar } from "./components/mainPage/Navbar";

import Footer from "./components/mainPage/Footer";
import Get_Quote from "./components/mainPage/Get_Quote";
import Main_Services from "./components/mainPage/Main_Services";
import Software from "./components/mainPage/Software";
import Video from "./components/mainPage/Video";
import Contact from "./pages/contact/page";
import Contact_mainpage from "./components/mainPage/Contact_mainpage";
// import main_Image from "./components/mainPage/Main_Image";


export default function Home() {
  return (
    <div>


       <Navbar/>
       {/* <main_Image/> */}
       <Get_Quote/>
       <Main_Services/>
       <Video/>
       <Software/>
       <Contact_mainpage/>
       




       {/* <Footer/> */}

      
    </div>
  );
}
