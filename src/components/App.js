import React, { Component } from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

export default class App extends Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params : {
				q : term
			}
		});
		this.setState({ videos: response.data.items });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
			</div>
		);
	}
}
