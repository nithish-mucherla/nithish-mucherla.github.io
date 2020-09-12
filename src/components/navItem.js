import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';

function Navitem(props) {
    return(
        <Fragment>
            <Link to= { props.path } >
                { props.item }
            </Link>
        </Fragment>
    );
    
}

export default Navitem