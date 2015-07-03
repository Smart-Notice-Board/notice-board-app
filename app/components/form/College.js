import React from 'react'
import AppActions from '../../actions/AppActions'

class College extends React.Component {

  setSelected (event) {
    //event.target.value is the selected index of college
    console.log(event.target.value);
    AppActions.selectCollege(event.target.value);
  }

  render () {
    console.log('In College',this.props)
    var Input = this.props.colleges.map( (college, index) => {
      return (
        <option key={index} value={index} > {college.name} </option>
      )
    })

    return (
      <div className="form-group">

      <label className="col-sm-2 control-label" > College </label>
        <div className="col-sm-10">
        <select className="form-control" name="college" onChange={this.setSelected} id="college">
        {Input}
        </select>
        </div>
      </div>
    )
  }
}

export default College;
