import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/ActionTypes'
import axios from 'axios'

export default ({
  getNotices: (data) => {
    console.log('Get notice from server',data)

    let data_sent =  {
      college: data.colleges[data.selected].name,
      department: data.colleges[data.selected].department[data.selectedDepartment].name,
      semester: data.colleges[data.selected].department[data.selectedDepartment].sem[data.selectedSem].name
    }

    console.log('Ijefoie',data_sent);

    axios.post('http://192.168.50.4:3000/notices/deptnotices', data_sent)
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
