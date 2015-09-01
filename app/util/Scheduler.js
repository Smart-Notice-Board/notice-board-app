import moment from 'moment'
import sch from 'node-schedule'
import NoticeActions from '../actions/NoticeActions'

let formatString = "DD/MM/YYYY HH:mm";
let called = false;
class Scheduler {

  //Schedule notice
  schedule (notices) {
    console.log('Notice sched', notices)
      notices.map((notice) => {

        if (!this.valid(notice.startTime, notice.endTime)) {
          console.log("Event fired");

          let start = moment(notice.startTime, formatString).toDate();
          let end = moment(notice.endTime, formatString).toDate();


          sch.scheduleJob(start,() => {
            console.log('fired')
            NoticeActions.refreshLocalNotice();
          })

          sch.scheduleJob(end,() => {
            NoticeActions.refreshLocalNotice();
          })
        }
      })
  }

  valid (noticeStartTime, noticeEndTime) {

    var curTime = moment();
    var startTime = moment(noticeStartTime, formatString);
    var endTime = moment(noticeEndTime, formatString)
    console.log('Are you sane',curTime.isBetween(startTime, endTime))

    if (curTime.isBetween(startTime, endTime) || curTime.isSame(startTime)) {
      return true;
    }
    else {
      return false;
    }

  }

  changeNotice (time, call) {
    if(call || !called) {
      console.log('Once');
      called = true;
      setTimeout(() => {
        NoticeActions.changeNotice();
      }, time);
  }
  }

}

let _Scheduler = new Scheduler();

export default _Scheduler;
