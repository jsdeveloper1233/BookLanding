import React, { Component } from 'react';
import Link from 'next/link';

class BuyCzyGrupaJestSekta extends Component {
    render() {
        return (
            <section className="join-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="join-img">
                                <img src='/images/3.png' alt="img" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="join-content">
                                <span>Test - Czy dana grupa jest sektą?</span>
                                <h3>Overall 400k+ Our Clients! Please Get Start Now</h3> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <Link href="/checkout?product=ebook">
                                    <a className="btn btn-primary">Kup Teraz</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BuyCzyGrupaJestSekta;
