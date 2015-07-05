import React from 'react'
import NoticeStore from '../stores/NoticeStore'
import AppStore from '../stores/AppStore'
import NoticeActions from '../actions/NoticeActions'
import AppActions from '../actions/AppActions'
import { Link, Router } from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor instantiated');

    this.state = this.inflateState();

    this.changeCallback = this.onChange.bind(this);
  }

  inflateState () {
    var data = {};
    data.noticeData = NoticeStore.getState();
    data.collegeData = AppStore.getState();
    return data;
  }

  componentWillMount () {
    this.router = this.context.router;
    NoticeStore.addChangeListener(this.changeCallback);

    console.log("Mounting", this.state)

    if (this.state.noticeData.notices.length === 0) {
      console.log("Fetch notices")
      NoticeActions.getNotices();
    }

    if (this.state.collegeData.colleges.length === 0) {
      this.router.transitionTo('app');
    }

  }

  componentWillUnmount() {
  //  NoticeStore.removeChangeListener(this.changeCallback);
  }

  onChange () {
    console.log('On Change')
    this.setState(this.inflateState());
  }

  getOut () {
    console.log('Trying to get out', this.state)
  }

  render () {
    console.log('Home', this.state);

    var isNotice =  this.state.noticeData.notices.length != 0 ? true : false;

    var college = this.state.collegeData.colleges[this.state.collegeData.selected];

    return (
      <div>
        <div className="navbar navbar-default ">
        <div className="row container">
            <div className="col-md-4">
            Current Date
            </div>
            <div className="col-md-4">
                  <div className="row">{college.name}</div>
                  <div className="row">{college.department[this.state.collegeData.selectedDepartment].name}</div>
                  <div className="row">{this.state.collegeData.selectedSem}</div>
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
            Description of Placholder
          </div>
          <div className="col-md-8 jumbotron container">
            {isNotice && this.state.noticeData.notices[0].desc}
          </div>
        </div>
        </div>
        </div>
    )
  }
}

Home.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Home;
