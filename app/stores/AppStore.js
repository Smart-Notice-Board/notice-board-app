import AppDispatcher from '../dispatcher/AppDispatcher'
import ActionTypes from '../constants/ActionTypes'
import { EventEmitter } from 'events'

// selected index of selected college
// selectedDepartment index of selected Department
// selectedSem selected Semseter
let data = {
  colleges: [],
  selected: 0,
  selectedDepartment: 0,
  selectedSem: 0
}

class AppStore extends EventEmitter {
  getState () {
    return data;
  }

  emitChange () {
    this.emit('CHANGE');
  }

  addChangeListener (cb) {
    this.on('CHANGE', cb);
  }

  removeChangeListener (cb) {
    this.removeListener(cb);
  }
}

let _AppStore = new AppStore();

export default _AppStore;

AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log('Action received', action.type);
  switch (action.type) {
    case ActionTypes.FETCHING_COLLEGES:
          data.colleges = action.data;
          _AppStore.emitChange();
          break;

    case ActionTypes.SELECT_COLLEGE:
          data.selected = action.data;
          _AppStore.emitChange();
          break;

    case ActionTypes.SELECT_DEPARTMENT:
          data.selectedDepartment = action.data;
          _AppStore.emitChange();
          break;

    case ActionTypes.SELECT_SEMESTER:
          data.selectedSem = action.data;
          _AppStore.emitChange();
          break;

    default:

  }
})
