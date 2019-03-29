import axios from 'axios';
const KEY = 'AIzaSyDuB-1ePMWSsM0Cpqf6khIR8cA_XHDp8x4';

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params  : {
		part       : 'snippet',
		maxResults : 5,
		key        : KEY
	}
});
