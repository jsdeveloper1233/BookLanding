import React from 'react';

const SimpleTextSection = (props    ) => {
const {pText, theClass} = props;


        return (
            <section className="app-funfacts-area ptb-100 simple-text-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-6">
                            <p className={theClass}>{pText}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default SimpleTextSection;
