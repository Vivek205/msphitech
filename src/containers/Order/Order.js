import React, { Component } from 'react';
import css from './order.module.css';

import Courier from '../../components/Courier/Courier';

let couriersGlobal = [];
class Order extends Component {
    state = {
        couriers: [],
        count: 0
    }

    componentDidUpdate = () => {
        this.divideCouriers();
    }
    divideCouriers = () => {
        let list = [...this.props.list];
        list.sort((a, b) => b.Price - a.Price);
        list.sort((a, b) => {
            if (a.Price === b.Price) {
                return b.Weight - a.Weight;
            }
        });
        let i = 0, j = 0;
        let sum = list.reduce((a, b) => a + b.Price, 0);
        let couriersCount = Math.ceil(sum / 250);
        let couriersPrice = new Array(couriersCount).fill(0);
        let couriers = new Array(couriersCount).fill([]);
        let highArr = list.slice(0, list.length / 2);
        let lowArr = list.slice(list.length / 2);
        let highlen = highArr.length;
        while (j < highlen) {
            if (couriersPrice[i] + highArr[j].Price > 250) {
                i++;
            }
            couriers[i] = couriers[i].concat(highArr[j]);
            couriersPrice[i] = parseFloat(couriersPrice[i] + highArr[j].Price);
            j++;
        }
        lowArr.reverse();
        let lowlen = lowArr.length;
        i = 0; j = 0;
        while (j < lowlen) {
            if (!(couriersPrice[i] + lowArr[j].Price > 250)) {
                couriers[i] = couriers[i].concat(lowArr[j]);
                couriersPrice[i] = parseFloat(couriersPrice[i] + lowArr[j].Price);
                j++;
            } else {
                i++;
            }

        }
        couriersGlobal = couriers;
    }


    render() {
        return (<div>
            <p>Double click to update the <button onClick={this.props.clicked}>Order !</button></p>
            {couriersGlobal.map((value, index) => {
                return <div key={index} className={css.courier}><Courier id={index} couriers={value} /></div>
            })}
        </div>);
    }
}

export default Order;