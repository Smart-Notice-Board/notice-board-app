import React from 'react'

class Sem extends React.Component {

    setSem (event) {
      console.log('even', event.target.value)
      AppActions.selectSem(event.target.value);
    }

    render () {
      console.log('Departmenta', this.props.department);

      var semesters = this.props.department.sem.map((sem, index) => {
        return (
          <option value={index} key={index} >{sem.name}</option>
        )
      })

      return (
        <div className="form-group">
        <label className="col-sm-2 control-label"> Semester </label>
        <div className="col-sm-10">
          <select className="form-control" name="semester" id="sem" onChange={this.setSem} >
            {semesters}
          </select>
            </div>
        </div>
      )
    }
}

export default Sem;
