import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import buyingOptions from "../../buyingOptions";
import Image from 'next/image'
const options = {
    autoplay: false,
    nav: false,
    loop:false,
    mouseDrag: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}

class LatestProducts extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="product-area ptb-100 kupteraz" id="price">
                <div className="container">
                    <div className="section-title">
                        <h2>Zamów Radykalną prawdę w związku już teraz</h2>
                        <div className="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="product-slides owl-carousel owl-theme"
                            {...options}
                        >
        
                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className='radykalna-s-image-custom'>
                                            <Image layout='fill' src='/images/radykalna-s.png' alt="item" />
                                        </div>

                                        <Link href="/checkout?product=radykalnaEbook">
                                            <a className="add-to-cart-btn">Dodaj do koszyka<i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/checkout?product=radykalnaEbook">
                                                <a>Radykalna prawda w związku<br />
                                                <small>Narzędzie w formacie e-book</small>
                                                <span className="btn btn-primary dodaj-do-koszyka">Dodaj do koszyka<i className="icofont-shopping-cart"></i></span>
                                                </a>
                                            </Link>

                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>{buyingOptions.radykalnaEbook.price.toFixed(2)}<small>zł</small></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/radykalna-sekrety-ebooks.jpg' alt="item" />

                                        <Link href="/checkout?product=ebookRadykalnaSekrety">
                                            <a className="add-to-cart-btn">Dodaj do koszyka<i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/checkout?product=ebookRadykalnaSekrety">
                                                <a>Radykalna prawda w związku + Sekrety rozwoju osobistego<br />
                                                <small>Narzędzie i książka w formacie e-book</small>  
                                                                                              <span className="btn btn-primary dodaj-do-koszyka">Dodaj do koszyka<i className="icofont-shopping-cart"></i></span>
                                                </a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>{buyingOptions.ebookRadykalnaSekrety.price.toFixed(2)}<small>zł</small></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="radykalna-s-image-custom">
                                            <Image layout='fill' src='/images/bundle.jpg' alt="item" />
                                        </div>

                                        <Link href="/checkout?product=bundle">
                                            <a className="add-to-cart-btn">Dodaj do koszyka<i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/checkout?product=bundle">
                                                <a>Radykalna prawda w związku + Sekrety rozwoju osobistego książka/ebook<br />
                                                <small>Narzędzie i książka w formacie e-book + książka papierowa</small>
                                                <span className="btn btn-primary dodaj-do-koszyka">Dodaj do koszyka<i className="icofont-shopping-cart"></i></span>
                                                </a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>{buyingOptions.bundle.price.toFixed(2)}<small>zł</small></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestProducts;
