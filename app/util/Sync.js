import NoticeActions from '../actions/NoticeActions';
import isOnline from 'is-online';
import sch from 'node-schedule';
import request from 'axios';
import AppStore from '../stores/AppStore';

export default ({
	start: () => {
		var j = sch.scheduleJob('42 * * * * *', () => {
			isOnline((err,online) => {

				request.get('http://www.google.com')
					.then((response) => {
				       console.log("we are online");
				      	let data = AppStore.getState();

				      	if(data.colleges.length === 0) {
				      		console.log("Doomed");
				      	}

				      	else {
				      	    var data_sent = {
						      college: data.colleges[data.selected],
						      department: data.colleges[data.selected].department[data.selectedDepartment],
						      sem: data.selectedSem
						    }

							NoticeActions.getNotices(data_sent);
						}
			   		 })
					.catch((response) => {
						console.log("Nope ", response)
					})

			})
		});
	}
});
