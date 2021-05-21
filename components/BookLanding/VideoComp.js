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
