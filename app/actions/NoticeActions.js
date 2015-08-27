import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/ActionTypes'
import Config from '../constants/Config'
import axios from 'axios'

export default ({
  getNotices: (data) => {
    console.log('Get notice from server',data)

    let data_sent =  {
      board_name: data.boards[data.selectedBoard]
    }

    console.log('Ijefoie',data_sent);

    axios.post(Config.HOST + '/notices/', data_sent)
      .then((response) => {
        console.log('Gogt from Rag',response);
        AppDispatcher.handleAction({
          type: AppConstants.FETCH_NOTICES,
          data: response.data.result
        })
      })
      .catch((response) => {
        console.log("Error", response)
      })



  },

  refreshLocalNotice: () => {
    AppDispatcher.handleAction({
      type: AppConstants.RELOAD_NOTICES
    })
  }
})
