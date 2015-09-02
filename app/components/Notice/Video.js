import React from 'react'
import Scheduler from '../../util/Scheduler'

class VideoPlayer extends React.Component {
  componentWillMount () {
      console.log('Mounting here');
  }

  changeThis () {
    console.log("Ended");
    Scheduler.changeNotice(100, true);
  }

  componentDidMount () {
    var vidElement = React.findDOMNode(this.refs.video);
    vidElement.addEventListener('ended', this.changeThis.bind(this));

  }

  componentWillUnmount () {
    var vidElement = React.findDOMNode(this.refs.video);
    vidElement.removeEventListener('ended', this.changeThis.bind(this));
  }

  render () {
    var notice = this.props.notice;
    var p = "./data/video/" + notice.path + '?' + Math.random();
    return (
      <div key={notice.id}>
      <video ref="video" className="image" alt={notice.description}  controls autoPlay>
        <source src={p} type="video/mp4" />
        No suppoty
      </video>
      </div>
    )
  }
}

export default VideoPlayer;
