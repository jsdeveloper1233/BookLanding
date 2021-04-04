import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Payment from "../Payment/Payment";
import { useRouter } from "next/router";
import buyingOptions from "../../buyingOptions";
import axios from "axios";
import Loader from "../Shared/Loader";

class OrderSummary extends Component {
  products = {
    ...buyingOptions,
  };
  constructor(props) {
    super(props);
    this.state = { product: null, load: false, quantity: 1, extra: null };
  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("product");
    // console.log(myParam)
    var p = this.products[myParam];
    // console.log(p)
    this.setState({
      product: p,
      load: true,
      total: p.price,
      isLoading: false,
      extra: null,
    });
    // console.log(this.state.product)
  }
  orderProduct() {
    this.setState((x) => ({ ...x, isLoading: true }));

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
        description: this.state.product.description,
        vat: this.props.vat,
        vatCompany: this.props.vatCompany,
        vatNip: this.props.vatNip,
        vatAddress: this.props.vatAddress,
        vatCity: this.props.vatCity,
        vatState: this.props.vatState,
        vatZip: this.props.vatZip,
        extra: this.state.extra,
      })
      .then((d) => {
        console.log(d.data);
        console.log(d.data.link);
        this.setState((x) => ({ ...x, isLoading: false }));
        window.open(d.data.link, "_blank");
      });
  }

  decreaseQuantity() {
    let newQuantity = this.state.quantity - 1;

    if (newQuantity <= 1) {
      newQuantity = 1;
    }

    this.setState((x) => ({ ...x, quantity: newQuantity }));
  }

  increaseQuantity() {
    const newQuantity = this.state.quantity + 1;
    this.setState((x) => ({ ...x, quantity: newQuantity }));
  }

  decreaseExtraQuantity() {
    let newQuantity = this.state.extra.quantity - 1;
    if (newQuantity <= 1) {
      newQuantity = 1;
    }

    this.setState((x) => ({
      ...x,
      extra: { ...x.extra, quantity: newQuantity },
    }));
  }

  increaseExtraQuantity() {
    const newQuantity = this.state.extra.quantity + 1;
    this.setState((x) => ({
      ...x,
      extra: { ...x.extra, quantity: newQuantity },
    }));
  }

  addExtra() {
    this.setState((x) => ({
      ...x,
      extra: { product: this.products[x.product.extra.key], quantity: 1 },
    }));
  }

  getShipping() {
    if (!this.state.product) {
      return 0;
    }

    let sum = this.state.product.shipping || 0;
    if (this.state.extra) {
      sum = Math.max(sum, this.state.extra.product.shipping || 0);
    }

    return sum;
  }

  isElectronicShipping() {
    if (!this.state.product) {
      return true;
    }

    var elec = this.state.product.electronicShipping;
    if (this.state.extra) {
      elec = elec && this.state.extra.product.electronicShipping;
    }

    return elec;
  }

  getProductsTotal() {
    if (!this.state.product) {
      return 0;
    }

    let sum =
      (Math.round(this.state.product.price * 100) * this.state.quantity) / 100;
    if (this.state.extra) {
      sum =
        (sum * 100 +
          Math.round(this.state.extra.product.price * 100) *
            this.state.extra.quantity) /
        100;
    }

    return sum;
  }

  getOriginalProductsTotal() {
    if (!this.state.product) {
      return 0;
    }

    let sum = this.state.product.originalPrice
      ? (Math.round(this.state.product.originalPrice * 100) *
          this.state.quantity) /
        100
      : (Math.round(this.state.product.price * 100) * this.state.quantity) /
        100;

    if (this.state.extra) {
      let sum2 = this.state.extra.product.originalPrice
        ? (Math.round(this.state.extra.product.originalPrice * 100) *
            this.state.extra.quantity) /
          100
        : (Math.round(this.state.extra.product.price * 100) *
            this.state.extra.quantity) /
          100;

      sum = Math.round((sum + sum2) * 100) / 100;
    }

    return sum;
  }

  getTotal() {
    return (
      Math.round((this.getShipping() + this.getProductsTotal()) * 100) / 100
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const popup =
      this.state.product && this.state.product.extra && !this.state.extra ? (
        <div
          id="popup"
          style={{
            position: "fixed",
            bottom: "5px",
            right: "5px",
            zIndex: "10",
            textAlign: "center",
          }}
        >
          <div class="card">
            <div class="card-header">{this.state.product.extra.title}</div>
            <div class="card-body">
              <p class="card-text">{this.state.product.extra.text}</p>
              <div>
                <img
                  class="card-img"
                  style={{ maxWidth: "120px", margin: "10px" }}
                  src={this.products[this.state.product.extra.key].image}
                ></img>
              </div>
              <button
                className="btn btn-primary order-btn"
                onClick={() => this.addExtra()}
              >
                Dodaj do koszyka
              </button>
            </div>
          </div>
        </div>
      ) : null;

    const shipping = this.getShipping();
    const total = this.getTotal();
    const productTotal = this.getProductsTotal();
    const productOriginalTotal = this.getOriginalProductsTotal();

    return (
      <React.Fragment>
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
                        <div style={{ float: "right" }}>
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

                    {this.state.extra ? (
                      <tr>
                        <td className="product-name">
                          <Link href="#">
                            <a>{this.state.extra.product.name}</a>
                          </Link>
                          <div style={{ float: "right" }}>
                            <a
                              className="add-product-btn btn-left"
                              onClick={this.decreaseExtraQuantity.bind(this)}
                            >
                              -
                            </a>
                            <input
                              type="value"
                              value={this.state.extra.quantity}
                              name=""
                              className="cart-items"
                              readOnly
                            ></input>
                            <a
                              className="add-product-btn btn-right"
                              onClick={this.increaseExtraQuantity.bind(this)}
                            >
                              +
                            </a>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="subtotal-amount">
                            {this.state.extra.product.originalPrice && (
                              <>
                                <span className="strikeout">
                                  {this.state.extra.product.originalPrice} zł
                                </span>
                                <br />
                              </>
                            )}
                            <span>{this.state.extra.product.price} zł</span>
                          </span>
                        </td>
                      </tr>
                    ) : null}

                    <tr>
                      <td className="order-subtotal">
                        <span className="gray-cost">Suma</span>
                      </td>

                      <td className="order-subtotal-price">
                        <span className="order-subtotal-amount">
                          {this.state.product.originalPrice && (
                            <>
                              <span className="strikeout">
                                {productOriginalTotal} zł
                              </span>
                              <br />
                            </>
                          )}
                          {productTotal} zł
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="order-shipping">
                        <span className="gray-cost">Dostawa</span>
                      </td>

                      <td className="shipping-price">
                        <span>{shipping} zł</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="total-price">
                        <span>Do zapłaty</span>
                      </td>

                      <td className="product-total">
                        <span className="total-amount">{total} zł</span>
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
            <div className="shipping-method">
              Sposób dostawy:
              <p>
                <input
                  type="radio"
                  id="express"
                  name="radio-group-shipping"
                  checked
                  readOnly
                />
                <label htmlFor="express">
                  {this.isElectronicShipping()
                    ? "Wysyłka elektroniczna"
                    : "Kurier 24/48h"}
                </label>
              </p>
            </div>

            <div className="payment-method">
              Sposób płatności:
              <p>
                <input
                  type="radio"
                  id="przelewy24"
                  name="radio-group-payment"
                  checked
                  readOnly
                />
                <label htmlFor="przelewy24">Szybkie płatności Przelewy24</label>
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
                  <div className="ordered-product">
                    <div>
                      <h2>Zamawiasz:</h2>
                      <a>
                        {this.state.product.name}, {this.state.quantity} szt.
                      </a>
                    </div>
                    <span className="arrow-right-order">
                      <i className="icofont-long-arrow-right"></i>
                    </span>

                    <img
                      src={this.state.product.image}
                      alt={this.state.product.name}
                    ></img>
                  </div>

                  {this.state.extra ?
                    <div className="ordered-product">
                      <div>
                        <a>
                          {this.state.extra.product.name +
                              ", " +
                              this.state.extra.quantity +
                              " szt."}
                        </a>
                      </div>
                      <span className="arrow-right-order">
                        <i className="icofont-long-arrow-right"></i>
                      </span>

                      <img
                        src={this.state.extra.product.image}
                        alt={this.state.extra.product.name}
                      ></img>
                    </div>
                  : null }
                </div>
              </div>
            )}
            {/* <Payment 
                        amount={totalAmount * 100}
                        disabled={this.props.disabled}
                    /> */}
          </div>
        </div>
        <div id="popup">{popup}</div>
      </React.Fragment>
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
