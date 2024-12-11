import AboutUs from "../AboutUs";
import Services from "../Services";
import Slider from "../Slider";

const Home = () => {
    return (
        <div>
        <div className="max-w-screen-xl mx-auto">
            <Slider />
            <AboutUs />
            <Services />
        </div>
        
        
        <h1>home</h1>
        </div>
    );
};

export default Home;
