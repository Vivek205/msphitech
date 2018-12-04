import React from 'react';
import Item from '../Item/Item';
import css from './items.module.css';

const items = props =>{
    return (
        <div className={css.items} onClick={props.clicked}>
        <table>
        <thead>
            <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Select</th>
            </tr>
        </thead>
        {/* <div className={css.scroll}> */}
        <tbody>
        {props.products.map(product=>{
            return <Item key={product.Item} name={product.Item} price={product.Price}/>
        })}
        </tbody>
        {/* </div> */}
        </table>
        </div>
    );
}

export default items;