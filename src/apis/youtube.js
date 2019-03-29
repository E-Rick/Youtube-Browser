import axios from 'axios';
const KEY = 'AIzaSyBp_GpAHuOkNgxR4cObvWovJIjHQmxrOQY';

export default axios.create({
	baseUrl : 'https://www.googleapis.com/youtube/v3',
	params  : {
		part       : 'snippet',
		maxResults : 5,
		key        : KEY
	}
});
