import React from 'react';

function Button(props){
    const handleClick = () => props.onClick(props.count);
    // return (
    //     <button onClick={props.onClick.bind(this,props.count)}>*{props.count}</button>
    // )
    return (
        <button onClick={handleClick}>*{props.count}</button>
    )
}

export default Button;