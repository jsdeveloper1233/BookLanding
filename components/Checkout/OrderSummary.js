import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Payment from "../Payment/Payment";
import { useRouter } from "next/router";
import buyingOptions from "../../buyingOptions";
import axios from "axios";
class OrderSummary extends Component {
  products = {
    ...buyingOptions,
  };
  constructor(props) {
    super(props);
    this.state = { product: null, load: false, quantity: 1 };
  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("product");
    // console.log(myParam)
    var p = this.products[myParam];
    // console.log(p)
    this.setState({ product: p, load: true, total: p.price });
    // console.log(this.state.product)
  }
  orderProduct() {
    axios
      .post("/api/buy/" + this.state.product.sku, {
        email: this.props.email,
        name: this.props.name,
        phone: this.props.phone,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        newsletter: this.props.newsletter,
        product: this.state.product.name,
        quantity: this.state.quantity,
        total: this.state.total,
        privacy: this.props.privacy,
        terms: this.props.terms,
        comment: this.props.comment,
      })
      .then((d) => {
        console.log(d.data);
        console.log(d.data.link);
        window.open(d.data.link, "_blank");
      });
  }

  decreaseQuantity() {
    let newQuantity = this.state.quantity - 1;
    let newPrice =
      (Math.round(this.state.product.price * 100) * newQuantity) / 100;
    if (newQuantity <= 1) {
      newQuantity = 1;
      newPrice = this.state.product.price;
    }
    this.setState({ quantity: newQuantity, total: newPrice });
  }

  increaseQuantity() {
    const newQuantity = this.state.quantity + 1;
    const newPrice =
      (Math.round(this.state.product.price * 100) * newQuantity) / 100;
    this.setState({ quantity: newQuantity, total: newPrice });
  }

  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="order-details">
          <h3 className="title">Twoje zamówienie</h3>
          <div className="bar"></div>

          <div className="order-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Produkt</th>
                  <th scope="col">Cena</th>
                </tr>
              </thead>

              {!this.state.load ? (
                <></>
              ) : (
                <tbody>
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
                      <div className="clearfix flex">
                        <a
                          className="add-product-btn btn-left"
                          onClick={this.decreaseQuantity.bind(this)}
                        >
                          -
                        </a>
                        <input
                          type="value"
                          value={this.state.quantity}
                          name=""
                          className="cart-items"
                          readOnly
                        ></input>
                        <a
                          className="add-product-btn btn-right"
                          onClick={this.increaseQuantity.bind(this)}
                        >
                          +
                        </a>
                      </div>
                    </td>
                    <td className="product-total">
                      <span className="subtotal-amount">
                        {this.state.product.originalPrice && (
                          <>
                            <span className="strikeout">
                              {this.state.product.originalPrice} zł
                            </span>
                            <br />
                          </>
                        )}
                        <span>{this.state.product.price} zł</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="order-subtotal">
                      <span className="gray-cost">Suma</span>
                    </td>

                    <td className="order-subtotal-price">
                      <span className="order-subtotal-amount">
                        {this.state.total} zł
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="order-shipping">
                      <span className="gray-cost">Dostawa</span>
                    </td>

                    <td className="shipping-price">
                      <span>{this.state.product.shipping} zł</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="total-price">
                      <span>Do zapłaty</span>
                    </td>

                    <td className="product-total">
                      <span className="total-amount">
                        {this.state.total + this.state.product.shipping} zł
                      </span>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>

          {/* <div className="payment-method">
                        Payment Method: */}
          {/* <p>
                            <input type="radio" id="direct-bank-transfer" name="radio-group" />
                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>

                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p> */}
          {/* <p>
                            <input type="radio" id="prz" name="radio-group" checked readOnly />
                            <label htmlFor="prz">Przelewy24</label>
                        </p> */}
          {/* <p>
                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                        </p> */}
          {/* </div> */}
          <div className="payment-method">
            Sposób dostawy:
            <p>
              <input
                type="radio"
                id="express"
                name="radio-group"
                checked
                readOnly
              />
              <label htmlFor="prz">Kurier 24/48h</label>
            </p>
          </div>
          {!this.state.load ? (
            <></>
          ) : (
            <div className="order-btn">
              <button
                disabled={this.props.disabled}
                onClick={this.orderProduct.bind(this)}
                className={`btn btn-primary order-btn ${
                  this.props.disabled ? "btn-disabled" : ""
                }`}
              >
                Zamawiam
              </button>

              <div className="order-image">
                <div>
                  <h2>Zamawiasz:</h2>
                  <Link href="#">
                    <a>
                      {this.state.product.name}, {this.state.quantity} szt.
                    </a>
                  </Link>
                </div>
                <span className="arrow-right-order">
                  <i class="icofont-long-arrow-right"></i>
                </span>
                <img
                  src={this.state.product.image}
                  alt={this.state.product.name}
                ></img>
              </div>
            </div>
          )}
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
    total: state.total,
  };
};

export default connect(mapStateToProps)(OrderSummary);
