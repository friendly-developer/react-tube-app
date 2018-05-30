import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
    if (Object.keys(this.props.video).length == 0) return <div>Loading..</div>;
    const video = this.props.video;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
