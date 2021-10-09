import { Link } from "react-router-dom";
import HelmetHandler from "../../Components/HelmetHandler";

const Error = () => {
    return(
        <HelmetHandler title="Page not found">
            <div className="container">
                <p>Oups, the page does not exist</p>
                <Link to="/home">Bring me back home</Link>
            </div>
        </HelmetHandler>

    )   
}

export default Error;