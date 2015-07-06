import React from 'react'
import Slider from 'react-slick'

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
         return (<div> {notice.desc} </div>)
         break;

        case 'image':
          var p = "./data/image/" + notice.path;
          return (<div><img src={p} alt={notice.desc} /></div>)
          break;
       default:
        return <div>Nothing</div>
     }

   })

    return (
      <Slider {...settings}>
      {pla}
    </Slider>
    )
  }
}

export default PlaceHolder;
