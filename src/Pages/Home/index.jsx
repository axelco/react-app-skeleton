import { Link } from "react-router-dom";
import HelmetHandler from "../../Components/HelmetHandler";

const Home = () => {
     return(
        <HelmetHandler title="Home">
            <div className="container">
                <h1>Welcome !</h1>
                <Link to="/no-exist">Try a route that does not exit</Link>
            </div>
         </HelmetHandler>
     )   
}

export default Home;