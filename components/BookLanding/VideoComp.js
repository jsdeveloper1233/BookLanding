import React from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Image from "next/image";
import YoutubeEmbed from "../Features/YoutubeEmbed";


class VideoComp extends React.Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    const { disable } = this.props;
    return (
      <React.Fragment>
        <div className=" videoComp">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row wherevideois">

                <div className="video">
                  <YoutubeEmbed embedId="exHgJ528eYI?autoplay=1&modestbranding=1&showinfo=0&rel=0" />
                </div>

                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray shape-1"></div>
          <div className="shape1">
            <img src="/images/shape1.png" alt="img" />
          </div>
          <div className="shape2">
            <img src="/images/shape2.png" alt="img" />
          </div>
          <div className="shape3">
            <img src="/images/shape3.png" alt="img" />
          </div>
          <div className="shape6">
            <img src="/images/shape6.png" alt="img" />
          </div>
          <div className="shape8 rotateme">
            <img src="/images/shape8.svg" alt="shape" />
          </div>
          <div className="shape9">
            <img src="/images/shape9.svg" alt="shape" />
          </div>

          <div className="bubble-animate">
            <div className="circle small square1"></div>
            <div className="circle small square2"></div>
            <div className="circle small square3"></div>
            <div className="circle small square4"></div>
            <div className="circle small square5"></div>
            <div className="circle medium square1"></div>
            <div className="circle medium square2"></div>
            <div className="circle medium square3"></div>
            <div className="circle medium square4"></div>
            <div className="circle medium square5"></div>
            <div className="circle large square1"></div>
            <div className="circle large square2"></div>
            <div className="circle large square3"></div>
            <div className="circle large square4"></div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default VideoComp;
