import React from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import { finalPath } from "../../pages/index";
import { default as NextLink } from "next/link";
import { Link } from "react-scroll";

class NavbarSinglePage extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;

    let layOutCls = "";
    let logo = finalPath + "/images/logo.png";
    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = "/images/logo2.png";
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

      const {customClass, orderButtonText} = this.props;
   
    return (
      <React.Fragment>
        <header id="header" className={customClass}>
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container" id="top">
              <nav className="navbar navbar-expand-md navbar-light">
                <NextLink href="/">
                  <a className="navbar-brand">
                    {/* <img src={logo} alt="logo" /> */}
                    Sekrety Rozwoju
                    <br /> Osobistego
                  </a>
                </NextLink>
                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                      <NextLink href="/">
                        <a className="nav-link" >
                          Start
                        </a>
                      </NextLink>
                    </li>

                    <li className="nav-item">
                    <NextLink href="/#author">
                        <a className="nav-link" >
                          O autorze
                        </a>
                      </NextLink>
                    </li>

                    <li className="nav-item">
                    <NextLink href="/#index">
                        <a className="nav-link">
                          Spis tre??ci
                        </a>
                      </NextLink>
                    </li>

                    <li className="nav-item">
                    <NextLink href="/#references">
                        <a className="nav-link">
                          Recenzje
                        </a>
                      </NextLink>
                    </li>
                    <li className="nav-item">
                    <NextLink href="/#faq">
                        <a className="nav-link">
                          FAQ
                        </a>
                      </NextLink>
                    </li>
                    <li className="nav-item">
                      <NextLink href="/sklep">Sklep</NextLink>
                    </li>
                    <li className="nav-item zamowteraz">
                    <NextLink href="/#kupteraz">
                        <a className="btn btn-primary in-navbar">
                          {orderButtonText ? orderButtonText : 'ZAM??W TERAZ'}
                        </a>
                      </NextLink>
                    </li>

                    {/* <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Shop</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/shop-one">
                                                        <a>Shop 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-two">
                                                        <a>Shop 2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-details">
                                                        <a>Shop Details</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/cart">
                                                        <a>Cart</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                    {/* <li className="nav-item">
                                            <Link activeClassName="active" href="/contact">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                  </ul>
                </div>
                {/* <div className="mr-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="/cart">
                                                <a>
                                                    <i className="icofont-shopping-cart cart-icon"></i>

                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="header-search-box">
                                            <Link activeClassName="active" href="#">
                                                <a 
                                                    onClick={e => {e.preventDefault();this.handleSearchForm();}}
                                                    title="Search"
                                                >
                                                    <i className="icofont-search-2"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(NavbarSinglePage));
