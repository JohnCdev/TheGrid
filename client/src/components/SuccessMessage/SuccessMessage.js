import React from 'react'

const divStyle = {
    'marginTop': '50px',
    'width': '100%', 
    'backgroundColor': '#3c4042',
    'marginRight': '0',
    'textAlign': 'center',
} 

const SuccessMessage = ({success, errMessage}) => {

    const messageStyle = success ? "lightgreen" : "rgb(243, 63, 63)";

    return (
        <div className="rounded" style={divStyle}>
            <span style={{'fontSize':'2em', 'color':`${messageStyle}`}}>{success ? "Submit Success" : errMessage}</span>
        </div>
    );
}

export default SuccessMessage;