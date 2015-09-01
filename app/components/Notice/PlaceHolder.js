import React from 'react'
import Slider from 'react-slick'
import NoticeActions from '../../actions/NoticeActions'

class PlaceHolder extends React.Component {

  render () {

    var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     autoplay: true,
     autoplaySpeed: 4000,
     slidesToShow: 1,
     slidesToScroll: 1
   };

   var noticeData = this.props.noticeData;

   var pla = noticeData.notices.map( (notice) => {
     console.log(notice);

     console.log('Props', this.props)
     switch (notice.type) {
       case 'text':
         return (<div key={notice.id}> {notice.description} </div>)
         break;

        case 'image':
          var p = "./data/image/" + notice.path + '?' + Math.random();
          return (<div key={notice.id}> <img src={p} className="image" alt={notice.description} /></div>)
          break;

        case 'video':
        console.log("Inside");
          var p = "./data/video/" + notice.path + '?' + Math.random();
        //  settings.autoplaySpeed = 24000;
          return (
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
        return <div key={notice.id}>Nothing</div>
     }

   })

    return (
      <Slider className="placeholder" {...settings}>
      {pla}
    </Slider>
    )
  }
}

export default PlaceHolder;
