import React from 'react'

const divStyle = {
    'marginTop': '50px',
    'width': '50%', 
    'backgroundColor': '',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'textAlign': 'center',
} 

const SuccessMessage = ({success, errMessage}) => {

    const messageStyle = success ? "lightgreen" : "rgb(243, 63, 63)";

    return (
        <div className="rounded" style={divStyle}>
            <span style={{'fontSize':'1em', 'color':`${messageStyle}`}}>{success ? "Submit Success" : errMessage}</span>
        </div>
    );
}

export default SuccessMessage;