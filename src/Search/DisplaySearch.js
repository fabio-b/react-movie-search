import React from 'react';

export default function DisplaySearch(props) {
    return (
        <React.Fragment>
            <h2>Movie Data</h2>
            <pre>{ JSON.stringify(props.data,  null, 2) }</pre>
        </React.Fragment>
    )
}