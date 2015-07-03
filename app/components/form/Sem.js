import React from 'react'

class Sem extends React.Component {

    setSem (event) {
      AppActions.selectSem(event.target.value);
    }

    render () {
      console.log('Department', this.props.department);

      var semesters = this.props.department.sem.map((sem, index) => {
        return (
          <option value={sem} key={index} >{sem.name}</option>
        )
      })

      return (
        <div className="form-group">
        <label className="col-sm-2 control-label"> Semester </label>
        <div className="col-sm-10">
          <select className="form-control" name="semester" id="sem" onChange="setSem" >
            {semesters}
          </select>
            </div>
        </div>
      )
    }
}

export default Sem;
