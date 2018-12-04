import React, { Component } from 'react';
import data from '../../assets/data/data';
import css from './layout.module.css'

import Items from '../../components/Items/Items';
import Order from '../Order/Order';

let selectedItems = [];
class Layout extends Component {
    state = {
        products: data,
        finalOrder: [],
        orderClickedCount: 0,
        inputCount:0
    }

    productSelectionHandler = (e) => {
        let id = e.target.id;
        let checked = e.target.checked;
        if( checked == undefined){
            return;
        }
        if (checked) {
            let selectedItem = this.state.products.filter(a => a.Item == id);
            selectedItems.push(...selectedItem);
        }else{
            let newArray = selectedItems.filter(obj=> obj.Item !=id)
            selectedItems = newArray;
        }
    }

    orderHandler = () => {

        this.setState(prevState => ({ finalOrder: selectedItems, inputCount: prevState.inputCount + 1 }));
    }

    render() {
        return (<div className={css.Layout}>
            <div className={css.Items}>
                <Items products={this.state.products} clicked={this.productSelectionHandler} className={css.Items} />
            </div>
            <div className={css.Orders}>
                <Order clicked={this.orderHandler}
                    className={css.Orders}
                    list={this.state.finalOrder}
                    clickedCount={this.state.orderClickedCount}
                    inputCount={this.state.inputCount} />
            </div>
        </div>);
    }
}

export default Layout;