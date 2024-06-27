import App from "../../App";
import Banner from "../../Components/Banner/Banner";
import Contract from "../../Components/Contract/Contract";
import Footer from "../../Components/Footer/Footer";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";

import Skills from "../../Components/Skills/Skills";


const Home = () => {
    return (
        <div>
          
           <Banner></Banner>
           <Services></Services>
           <Skills></Skills>
           <Projects></Projects>
           <Contract></Contract>
           <Footer></Footer>
        </div>
    );
};

export default Home;