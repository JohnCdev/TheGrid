import React from 'react'

const divStyle = {
    'marginTop': '50px',
    'width': '30%', 
    'backgroundColor': '#3c4042',
    'marginRight': '0',
    'textAlign': 'center',
} 

const SuccessMessage = ({success}) => {

    const messageStyle = success ? "lightgreen" : "rgb(243, 63, 63)";

    return (
        <div className="rounded" style={divStyle}>
            <span style={{'color':`${messageStyle}`}}>{success ? "Submit Success" : "Login Failed"}</span>
        </div>
    );
}

export default SuccessMessage;