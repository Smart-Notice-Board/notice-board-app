import React from 'react'
import NoticeStore from '../stores/NoticeStore'
import AppStore from '../stores/AppStore'
import NoticeActions from '../actions/NoticeActions'
import AppActions from '../actions/AppActions'
import { Link, Router } from 'react-router'
import PlaceHolder from './Notice/PlaceHolder'
import Sync from '../util/Sync'

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor instantiated');

    this.state = this.inflateState();

    this.changeCallback = this.onChange.bind(this);
    Sync.start();
    $notifier.on('done', function () {
      console.log('Hehaa');
      NoticeActions.refreshLocalNotice();
    })
  }

  inflateState () {
    var data = {};
    data.noticeData = NoticeStore.getState();
    data.boardData = AppStore.getState();
    console.log('Got data inflate state', data)
    return data;
  }

  componentWillMount () {
    console.log("Comp will mount");
    this.router = this.context.router;
    NoticeStore.addChangeListener(this.changeCallback);

    console.log("Mounting", this.state)

    if (this.state.noticeData.notices.length === 0) {
      console.log("Fetch notices")
      NoticeActions.getNotices(this.state.boardData);
    }

    if (this.state.boardData.boards.length === 0) {
      console.log('No boards', this.state)
      this.router.transitionTo('app');
    }

  }

  componentWillUnmount() {
  //  NoticeStore.removeChangeListener(this.changeCallback);
  }

  onChange () {
    console.log('On Change hey')
    this.state = this.inflateState();
  //  this.forceUpdate();
  }

  getOut () {
    console.log('Trying to get out', this.state)
  }

  render () {
    console.log('Home', this.state);

    var isNotice =  this.state.noticeData.notices.length != 0 ? true : false;
    var template;
    var college;

    console.log("isNotice", isNotice);

    if(isNotice) {
      var path = "data/image/" + this.state.noticeData.notices[0].path;
      college = this.state.boardData.boards[this.state.boardData.selectedBoard];
      console.log("isNotice mgkhakra");

    } else {
      college = this.state.boardData.boards[this.state.boardData.selectedBoard];
    }

   /* return (

      <div>
        <div className="navbar navbar-default ">
        <div className="row container">
            <div className="col-md-4">
            Current Date
            </div>
            <div className="col-md-4">
                  <div className="row">{college}</div>
            </div>

            <div className="col-md-4 pull-right">
              <Link to="app">
              <button className="btn btn-default" >Get me outta here</button>
              </Link>
            </div>
          </div>
          </div>
          <div className="panel">
        <div className="row">
          <div className="col-md-4 container">
              {isNotice && this.state.noticeData.notices[0].description}
          </div>
          <div className="col-md-8 jumbotron container">

          </div>
        </div>
        </div>
        </div>
    );*/


      return (
          <div>
          <PlaceHolder noticeData = {this.state.noticeData} />
          <Link to="app">
          <button className="btn btn-default" >Get me outta here</button>
          </Link>
              </div>
      );
  }
}

Home.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Home;
