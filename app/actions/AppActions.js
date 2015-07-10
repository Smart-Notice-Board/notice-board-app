import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/ActionTypes'

export default ({
  fetchColleges: () => {
    AppDispatcher.handleAction({
      type: AppConstants.FETCHING_COLLEGES,
      data: [
          {
              name: 'rvce',
              department: [
                { name: 'cse', sem: [{ name: 'Sem 4'  }] },
                { name: 'ece', sem: [{ name: 'Sem 2'  }] }
              ]
          },
          {
                  name: 'PESIT',
                  department: [
                    { name: 'Mechanical', sem: [{ name: 'Sem 2' }] },
                    { name: 'Electrical', sem: [{ name: 'Sem 6'  }] }
                  ]
          }
        ]
      });
    },

    selectCollege: (collegeIndex) => {
      AppDispatcher.handleAction({
        type: AppConstants.SELECT_COLLEGE,
        data: collegeIndex
      })
    },

    selectDepartment: (departmentIndex) => {
      AppDispatcher.handleAction({
        type: AppConstants.SELECT_DEPARTMENT,
        data: departmentIndex
      })
    },

    selectSem: (sem) => {
      console.log('Selecting sem ', sem)
      AppDispatcher.handleAction({
        type: AppConstants.SELECT_SEMESTER,
        data: sem
      })
    }

})
