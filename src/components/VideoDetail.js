import React from 'react';
import './VideoDetail.css';
import Moment from 'react-moment';

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div>
				<h1>
					<i class='inverted huge spinner loading icon' />
					Daily API Quota Limit Reached
				</h1>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	const videoPublishDate = video.snippet.publishedAt;

	return (
		<div>
			<div className='ui embed'>
				<iframe src={videoSrc} frameBorder='0' title='video player' />
			</div>
			<div className='video-detail ui segment'>
				<h4 className='video-title ui header'>{video.snippet.title}</h4>
				<span className='video-date'>
					Published on <Moment format='D MMM, YYYY' date={videoPublishDate} />
				</span>
				<div class='ui inverted divider' />
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
