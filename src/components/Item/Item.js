import React from 'react';

const item = props =>{
    return (<tr>
            <td>Item {props.name}</td>
            <td>${props.price}</td>
            <td><input type='checkbox' id={props.name}/></td>
    
    </tr>);
}

export default item;