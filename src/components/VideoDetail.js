import React from 'react';
import './VideoDetail.css';
import Moment from 'react-moment';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
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
				<hr />
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
