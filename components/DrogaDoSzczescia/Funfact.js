import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends React.Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <section className="app-funfacts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-book-alt"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 3
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>eBooki</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-coffee-alt"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 2
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </h3>
                                <p>Sesje mentorskie</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-book-mark"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 5
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                    h
                                </h3>
                                <p>Pracy z medytacją</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-funfact">
                                <div className="icon">
                                    <i className="icofont-ui-user"></i>
                                </div>
                                <h3>
                                    <span className="count">
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 15
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                    h
                                </h3>
                                <p>przekazu wiedzy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Funfact;
