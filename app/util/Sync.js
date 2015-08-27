import NoticeActions from '../actions/NoticeActions';
import isOnline from 'is-online';
import sch from 'node-schedule';
import request from 'axios';
import AppStore from '../stores/AppStore';
import Config from '../constants/Config';

// function downloadStatic (pathStatic) {
// 	console.log('Called even', pathStatic);
// 	request.get(Config.HOST + '/uploads/image/' + pathStatic)
// 		.then(function (response) {
// 			let buffer = new Buffer(response.data, 'base64');
// 			fs.writeFileSync("app/data/image/" + pathStatic, buffer);
// 			console.log('PIping response')
// 			NoticeActions.refreshLocalNotice();
// 		})
// 		.catch(function (reason) {
// 			console.log('Reaspn', reason);
// 		})
// }


export default ({


	start: () => {
		var j = sch.scheduleJob('42 * * * * *', () => {
			isOnline((err,online) => {

				request.get(Config.HOST + '/board_details')
					.then((response) => {
				       console.log("we are online");
				      	let data = AppStore.getState();

				      	if(data.boards.length === 0) {
				      		console.log("Doomed");
				      	}

				      	else {
									console.log("Data", data)
		      	    var data_sent = {
						      board_name: data.boards[data.selectedBoard]
						    }
									console.log("Sent", data_sent);
							NoticeActions.getNotices(data);
						}
			   		 })
					.catch((response) => {
						console.log("Nope not onlint", response)
					})

			})
		});
	},

	getStaticFiles: (path) => {
		//hard coded for image
		console.log("This shoulf noty be called", path);
		if (fs.existsSync($dir + '/data/image/' + path)) {

		} else {
			download(path);
		}

	}
});
