import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Checkout/Banner';
import CheckoutBody from '../components/Checkout/CheckoutBody';
import EmptyNavbar from '../components/Layouts/EmptyNavbar';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <EmptyNavbar />
                <Banner />
                <CheckoutBody />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Checkout;