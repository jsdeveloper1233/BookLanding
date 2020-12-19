import React, { Component } from 'react';
class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Dołącz społeczności Sergio S Dorje</h2>
                        <div className="bar"></div>
                        <p>Zapisz się do newslettera. Otrzymasz wartościowe informajce bezpośrednio od Autora</p>
                    </div>

                    <form className="newsletter-form">
                        <input type="email" className="form-control" placeholder="Twój adre email" name="EMAIL" required={true} />
                        <button className="btn btn-primary" type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Subscribe;
