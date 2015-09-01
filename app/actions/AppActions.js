import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/ActionTypes'
import Config from '../constants/Config'
import axios from 'axios'

export default ({
  fetchBoards: () => {
    console.log("Action received");
    axios.get(Config.HOST + '/board_details')
      .then((response) => {
        console.log('Respose',response.data.boardInfo);
        let dataReceived = response.data.boardInfo;

        AppDispatcher.handleAction({
          type: AppConstants.FETCHING_BOARDS,
          data: dataReceived
          });

      })
      .catch((reason) => {
        console.log('Fucking cunt', reason);
      })
    },

    selectBoard: (boardIndex) => {
      AppDispatcher.handleAction({
        type: AppConstants.SELECT_BOARD,
        data: boardIndex
      })
    },


})
