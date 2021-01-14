import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from "next/link";
import Payment from '../Payment/Payment';
import { useRouter } from 'next/router'
import axios from 'axios'
class OrderSummary extends Component {
    products = {
        "ebook": {
            "name": "Ebook Version ",
            "price": "38.90",
            "sku": "ebook"
        },
        "pdf": {
            "name": "PDF Version",
            "price": "39.90",
            "sku": "pdf"
        },
        "hard": {
            "name": "Hard Copy Version",
            "price": "69.90",
            "sku": "hard"
        }
    }
    constructor(props) {
        super(props);
        this.state = {product:null, load: false};
    }
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('product');
        // console.log(myParam)
        var p = this.products[myParam]
        // console.log(p)
        this.setState({product: p, load: true})
        // console.log(this.state.product)
    }
    orderProduct(){
        console.log(this.state.product)
        axios.post("/api/buy/"+this.state.product.sku, {}).then((d)=> {
            console.log(d.data)
            console.log(d.data.link)
            window.open(d.data.link, '_blank');
        })
    }
    render() {
        let totalAmount = (this.props.total).toFixed(2)
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>
                    <div className="bar"></div>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            {!this.state.load?(<></>): <tbody>
                                {/* {this.props.products.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <Link href="#">
                                                <a>{data.title}</a>
                                            </Link>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">${data.price * data.quantity}</span>
                                        </td>
                                    </tr>
                                ))} */}
                                <tr>
                                    <td className="product-name">
                                        <Link href="#">
                                            <a>{this.state.product.name}</a>
                                        </Link>
                                    </td>

                                    <td className="product-total">
                                        <span className="subtotal-amount">${this.state.product.price}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="order-subtotal">
                                        <span>Cart Subtotal</span>
                                    </td>

                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">${this.state.product.price}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="order-shipping">
                                        <span>Shipping</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>$0.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">${this.state.product.price}</span>
                                    </td>
                                </tr>
                            </tbody>}
                        </table>
                    </div>

                    <div className="payment-method">
                        {/* <p>
                            <input type="radio" id="direct-bank-transfer" name="radio-group" />
                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>

                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p> */}
                        <p>
                            <input type="radio" id="prz" name="radio-group" checked readOnly />
                            <label htmlFor="prz">Przelewy24</label>
                        </p>
                        {/* <p>
                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                        </p> */}
                    </div>
                    {!this.state.load?(<></>): <div className="order-btn">

                        <button disabled={this.props.disabled} onClick={this.orderProduct.bind(this)} className={`btn btn-primary order-btn ${this.props.disabled ? 'btn-disabled' : ''}`} >
                            Place Order
                        </button>
                    </div>}
                    {/* <Payment 
                        amount={totalAmount * 100}
                        disabled={this.props.disabled}
                    /> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total
    }
}

export default connect(
    mapStateToProps
)(OrderSummary)
