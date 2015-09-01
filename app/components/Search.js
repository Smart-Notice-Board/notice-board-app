/**
 * Created by akash on 3/7/15.
 */
import React from 'react'
import { Link } from 'react-router'
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

    if (this.state.boards.length === 0) {
      console.log("Fetch boards")
      AppActions.fetchBoards();
    }

  }

  componentWillUnmount() {
  //  AppStore.removeChangeListener(this.changeCallback);
  }

  onChange () {
    this.setState(AppStore.getState())
  }

  fetchNotices () {
    NoticeActions.getNotices(this.state);
  }

  render() {

      var selectedBoard = this.state.boards[this.state.selectedBoard] ;
      var template;

      if (selectedBoard) {
        console.log("Selected", selectedBoard);

        template = (
           <div className="container">
             <div className="row">
               <form className="form-horizontal">
               <div className="row">
                 <College
                   boards={this.state.boards}
                   selected={this.state.selectedBoard}
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

      } else  {
        template = (
          <div className="container">
            <div className="panel">Please connect to the server.</div>
          </div>
        )
      }



      return template;
  }
}

Search.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Search;
