/**
 * Created by akash on 3/7/15.
 */
import React from 'react'
import Department from './form/Department'
import Sem from './form/Sem'
import College from './form/College'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'

import { RaisedButton, Dialog } from 'material-ui'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();

    this.changeCallback = this.onChange.bind(this);
  }

  componentWillMount () {
    AppStore.addChangeListener(this.changeCallback);

    console.log("Mounting", this.state)

    if (this.state.colleges.length === 0) {
      console.log("Fetch College")
      AppActions.fetchColleges();
    }

  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.changeCallback);
  }

  onChange () {
    console.log('On Change')
    this.setState(AppStore.getState())
  }

  fetchNotices () {
    console.log('Going to fetch notice for');
  }

  render() {

      var selectedCollege = this.state.colleges[this.state.selected];
      var selectedDepartment = selectedCollege.department[this.state.selectedDepartment];
      var selectedSem = this.state.selectedSem;

      console.log('In Search department ', this.state.selectedDepartment);

      return (
          <div>
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

                  <div className="row">
                    <button className="btn btn-default btn-lg" onClick={this.fetchNotices} >Fetch Notices</button>
                  </div>
                </form>
            </div>
          </div>
      )
  }
}

export default Search;
