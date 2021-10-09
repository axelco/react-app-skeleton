import {Helmet} from "react-helmet";
import PropTypes from 'prop-types'

function HelmetHandler({title, children}){

    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>            
            {children}
        </>        
    )
}

HelmetHandler.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HelmetHandler

