import React from 'react'

class VideoPlayer extends React.Component {
  componentWillMount () {
      console.log('Mount');
  }

  render () {
    var notice = this.props.notice;
    var p = "./data/video/" + notice.path + '?' + Math.random();
    return (
      <div key={notice.id}>
      <video className="image" alt={notice.description} controls autoPlay>
        <source src={p} type="video/mp4" />
        No suppoty
      </video>
      </div>
    )
  }
}

export default VideoPlayer;
