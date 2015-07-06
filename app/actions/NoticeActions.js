import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/ActionTypes'

export default ({
  getNotices: (data) => {
    console.log('Get notice from server',data)
    AppDispatcher.handleAction({
      type: AppConstants.FETCH_NOTICES,
      data: [{
        id: 123,
        type: 'text',
        desc: 'This is to notify every1 to fuck off',
        path: 'None',
        startTime: '06/07/2015 03:31',
        endTime: '06/07/2016 03:32',
        priority: 5
      }, {
        id: 124,
        type: 'image',
        desc: 'This is to notify every1 to see shit',
        path: '2.jpg',
        startTime: '06/07/2015 03:31',
        endTime: '06/07/2016 03:50',
        priority: 5
      } ]
    })
  },

  refreshLocalNotice: () => {
    AppDispatcher.handleAction({
      type: AppConstants.RELOAD_NOTICES
    })
  }
})
