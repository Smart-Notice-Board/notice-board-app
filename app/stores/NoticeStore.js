import AppDispatcher from '../dispatcher/AppDispatcher'
import ActionTypes from '../constants/ActionTypes'
import { EventEmitter } from 'events'


// selected index of selected college
// selectedDepartment index of selected Department
// selectedSem selected Semseter
let data = {
  notices: []
}

class NoticeStore extends EventEmitter {
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

let _NoticeStore = new NoticeStore();

export default _NoticeStore;

AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log('Action received');
  switch (action.type) {
    case ActionTypes.FETCH_NOTICES:
      data.notices = action.data;
      _NoticeStore.emitChange();
      break;

    default:

  }
})
