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
        startTime: '12/01/2015 9:30',
        endTime: '13/08/2016 10:30',
        priority: 5
      }]
    })
  }
})
