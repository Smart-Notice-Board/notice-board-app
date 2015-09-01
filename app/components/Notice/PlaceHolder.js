import React from 'react'
import NoticeActions from '../../actions/NoticeActions'
import Scheduler from '../../util/Scheduler'

class PlaceHolder extends React.Component {

  render () {

   var noticeData = this.props.noticeData;

   var pla = <div>No Notice </div>;
   let notice = noticeData.activeNotice;

   if(noticeData.activeNotice) {

     switch (notice.type) {
       case 'text':
         pla = (<div key={notice.id}> {notice.description} </div>)
         break;

        case 'image':
          var p = "./data/image/" + notice.path + '?' + Math.random();
          pla = (<div key={notice.id}> <img src={p} className="image" alt={notice.description} /></div>)
          break;

        case 'video':
        console.log("Inside");
          var p = "./data/video/" + notice.path + '?' + Math.random();
          pla = (
            <div key={notice.id}>
            <video className="image" alt={notice.description} controls autoPlay>
              <source src={p} type="video/mp4" />
              No suppoty
            </video>
            </div>
          )
          break;

          // case 'video':
          //   return (
          //     <VideoPlayer
          //       notice={notice} >
          //     </VideoPlayer>
          //   )
          //   break;

       default:
        pla = <div key={notice.id}>Nothing</div>
     }
     Scheduler.changeNotice(3000, false);

   }

    return (
      <div >
        {pla}
      </div>
    )
  }
}

export default PlaceHolder;
