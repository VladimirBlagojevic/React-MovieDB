import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {

    console.log(props);
    return (
        <div>
            <h1>Info</h1>
            <p>This is info page: {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrapedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>dont share this</p>}
            <WrapedComponent {...props} />
        </div>
    )
}

const AdminInfo=withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info={'this is inog'}/>, document.getElementById('app'));