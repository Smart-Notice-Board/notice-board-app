import React from 'react'
import AppActions from '../../actions/AppActions'

class Department extends React.Component {

  setDepartment (event) {
    AppActions.selectDepartment(event.target.value);
  }

  render () {
    console.log('Department', this.props.college);

    var departments = this.props.college.department.map((dept, index) => {
      return (
        <option value={index} key={index} >{dept.name}</option>
      )
    })

    return (
      <div className="form-group">
      <label className="col-sm-2 control-label"> Department </label>
      <div className="col-sm-10">
        <select className="form-control" onChange={this.setDepartment} >
          {departments}
        </select>
        </div>
      </div>
    )
  }
}

export default Department;
