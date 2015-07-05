/**
 * Created by akash on 3/7/15.
 */
import React from 'react'
import { Link } from 'react-router'
import Department from './form/Department'
import Sem from './form/Sem'
import College from './form/College'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'
import NoticeActions from '../actions/NoticeActions'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();

    this.changeCallback = this.onChange.bind(this);
  }

  componentWillMount () {
    AppStore.addChangeListener(this.changeCallback);

    if (this.state.colleges.length === 0) {
      console.log("Fetch College")
      AppActions.fetchColleges();
    }

  }

  componentWillUnmount() {
  //  AppStore.removeChangeListener(this.changeCallback);
  }

  onChange () {
    this.setState(AppStore.getState())
  }

  fetchNotices () {

    var data = {
      college: this.state.colleges[this.state.selected],
      department: this.state.colleges[this.state.selected].department[this.state.selectedDepartment],
      sem: this.state.selectedSem
    }

    NoticeActions.getNotices(data);
  }

  render() {
      var selectedCollege = this.state.colleges[this.state.selected];
      var selectedDepartment = selectedCollege.department[this.state.selectedDepartment];
      var selectedSem = this.state.selectedSem;


      return (
          <div className="container">
            <div className="row">
              <form className="form-horizontal">
              <div className="row">
                <College
                  colleges={this.state.colleges}
                  selected={this.state.selected}
                />
              </div>
                <div className="row">
                  <Department
                    college={selectedCollege}
                    selectedDepartment={this.state.selectedDepartment}
                  />
                </div>
                  <div className="row">
                  <Sem
                    department={selectedDepartment}
                    selectedSem={selectedSem}
                  />
                  </div>

                  <Link to="notice">
                  <div className="row">
                    <button className="btn btn-default btn-lg" onClick={this.fetchNotices.bind(this)} >Fetch Notices</button>
                  </div>
                  </Link>
                </form>
            </div>
          </div>
      )
  }
}

Search.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Search;
