import React from 'react'

export default function Video() {
    return (
        <section className="video-two">
            <div className="container"><img src="assets/images/scratch-1-1.png" className="video-two__scratch" alt="" />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="video-two__content">
                            <h2 className="video-two__title">Kipso one &amp; only <br />mission is to extend <br />your knowledge base
                            </h2><a href="/" className="thm-btn">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
                        <div className="my-auto">
                            <div className="video-two__popup"><i className="fa fa-play"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
