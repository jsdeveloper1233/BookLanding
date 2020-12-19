import React from 'react';
import Link from 'next/link';

class CtaCard extends React.Component {
    render() {
        return (
            <div className="cta-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <p>Piękny Call to Action</p>
                        </div>

                        <div className="col-lg-5 col-md-5 text-right">
                            <Link href="#">
                                <a className="btn btn-primary">Zamów książkę teraz!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaCard;
