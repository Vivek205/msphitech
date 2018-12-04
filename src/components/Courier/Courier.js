import React from 'react';
import css from './courier.module.css';
const courier = props => {
    let price = props.couriers.reduce((a, b) => a + b.Price, 0);
    return (
        <div className={css.card}>
            <h4><b>Courier: {props.id}</b></h4>
            {props.couriers.map(value => {
                return (<div key={value.Item} className={css.container}>
                    <span>Product <b>{value.Item}</b>:</span>
                    <span>Price <b>{value.Price}</b>:</span>
                    <span>Weight <b>{value.Weight}</b></span>
                    <b></b>
                </div>)
            })}
            <span>Total Price <b>{price}</b></span>
        </div>
    );
}

export default courier;