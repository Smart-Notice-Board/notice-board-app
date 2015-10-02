import AppDispatcher from '../dispatcher/AppDispatcher'
import ActionTypes from '../constants/ActionTypes'
import { EventEmitter } from 'events'
import Scheduler from '../util/Scheduler'
import Sync from '../util/Sync'
import NoticeActions from '../actions/NoticeActions'
// selected index of selected college
// selectedDepartment index of selected Department
// selectedSem selected Semseter
let data = {
  notices: [],
  activeNotice: null
}

let wareHouse = {
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

let filterNotice =  () => {
  console.log('Filter notie');
  data.notices = wareHouse.notices.filter((notice) => {
    console.log("Notice", notice);
    if(notice.type === "image" || notice.type === "video") {
      Sync.getStaticFiles(notice.path, notice.type)
    }

    return Scheduler.valid(notice.startTime, notice.endTime);
  })

  if(!data.activeNotice) {
    console.log("no call no gud")
    data.activeNotice = data.notices.length > 0 ? data.notices[0] : null;
  }

   //data.activeNotice = data.activeNotice || ( data.notices.length > 0 ? data.notices[0] : null);

//  Scheduler.setCalled(false);
}

AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log('Action received', action.type);
  switch (action.type) {
    case ActionTypes.FETCH_NOTICES:
      wareHouse.notices = action.data;

      Scheduler.schedule(wareHouse.notices);
      filterNotice();

      _NoticeStore.emitChange();
      break;

    case ActionTypes.RELOAD_NOTICES:
      filterNotice();
      _NoticeStore.emitChange();
      break;

    case ActionTypes.CHANGE_NOTICE:
      if (data.notices.length > 0 || data.activeNotice) {
        let length = data.notices.length;


        //Since indexOf checks for === , wont work with objects
        let index = data.notices.map(function (notice) {
          return notice.id;
        }).indexOf(data.activeNotice.id);

        console.log('Current is', index, length);

        if(index == -1) {
          console.warn("Current is -1", data.activeNotice);
          console.log("Current is dta notices", data.notices);
        }


        data.activeNotice = index < (length - 1) ? data.notices[++index] : data.notices[0];
        console.log('activeNotice now', data.activeNotice, Date.now());

        if(data.activeNotice.type != 'video') {
          //for video changing controlled by the component
          Scheduler.changeNotice(3000, true);
        }
        _NoticeStore.emitChange();
      }

      break;

    default:

  }


})
