import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import axios from "axios";

class TeamOne extends Component {
    intervalID;

    constructor() {
        super()
        this.state = { status: 0 }
        this.getTheData = this.getTheData.bind(this)
    }

    componentDidMount() {

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        const localId = window.localStorage.getItem("order");

        if(id != localId) {
            window.location.href = "/404.html";
        }

        this.setState({ status: 0 });
        this.getTheData();
    }

    getTheData() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        axios
            .get("/api/status?id=" + id)
            .then((d) => {
                console.log(d.data);
                this.setState({ status: d.data.status });

                if (d.data.status == 0) {
                    this.intervalID = setTimeout(this.getTheData, 5000);
                }
            });
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }

    render() {

        // success
        if (this.state.status > 0) {
            return (
                <React.Fragment>
                    <Navbar />
                    <section className="page-title-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Thank You</h2>
                                </div>
                            </div>
                        </div>

                        <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                        <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                        <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                        <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                        <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                        <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    </section>
                    <div className="thank-you-area">
                        <div className="container">
                            <h1>Twoje zam??wienie zosta??o pomy??lnie z??o??one.</h1>
                            <h3>Sprawd?? sw??j mail. Potwierdzenie zakupu zosta??o wys??ane.</h3>
                            <p>W razie problem??w napisz do sergio@sergiosdorje.com</p>
                            <Link href="/">
                                <a className="btn btn-primary">Powr??t do strony g????wnej</a>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            );
        }
        //error
        else if (this.state.status < 0) {
            return (<React.Fragment>
                <Navbar />
                <section className="page-title-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Thank You</h2>
                            </div>
                        </div>
                    </div>

                    <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                    <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                    <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                    <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                    <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                    <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                </section>
                <div className="thank-you-area">
                    <div className="container">
                        <h1>Twoje zam??wienie nie zosta??o z??o??one.</h1>
                        <p>W razie problem??w napisz do sergio@sergiosdorje.com</p>
                        <Link href="/">
                            <a className="btn btn-primary">Powr??t do strony g????wnej</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>);
        }
        //checking...
        else {
            return (
                <React.Fragment>
                    <Navbar />
                    <section className="page-title-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2>Thank You</h2>
                                </div>
                            </div>
                        </div>

                        <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                        <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                        <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                        <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                        <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                        <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                    </section>
                    <div className="thank-you-area">
                        <div className="container">
                            <h1>Transakcja w trakcie procesowania.</h1>
                            <p>Je??eli transakcja zako??czy si?? sukcesem, w ci??gu 10 minut otrzymasz wiadomo???? e-mail z potwierdzeniem zam??wienia.</p>
                            <p>W przeciwnym razie napisz do nas na adres sergio@sergiosdorje.com. Postaramy si?? pom??c.</p>
                            <Link href="/">
                                <a className="btn btn-primary">Powr??t do strony g????wnej</a>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>);
        }
    }
}

export default TeamOne;
