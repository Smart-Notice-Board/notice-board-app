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
     slidesToShow: 1,
     slidesToScroll: 1
   };

   var noticeData = this.props.noticeData;

   var pla = noticeData.notices.map( (notice) => {
     console.log(notice);


     switch (notice.type) {
       case 'text':
         return (<div key={notice.id}> {notice.description} </div>)
         break;

        case 'image':
          var p = "./data/image/" + notice.path + '?' + Math.random();
          return (<div key={notice.id}> <img src={p} className="image" alt={notice.description} /></div>)
          break;
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
