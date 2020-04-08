import React from 'react';

function Page(props) {
    return (
        <React.Fragment>
            {props.patients.length}
        </React.Fragment>
    )
}

export default Page;