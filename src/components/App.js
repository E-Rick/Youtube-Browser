import React, { Component } from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import './App.css';
import { Icon, notification } from 'antd';
import VideoDetail from './VideoDetail';
export default class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('react js');
		this.welcome();
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params : {
				q : term
			}
		});
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	welcome = () => {
		notification.open({
			message     : 'Hey nice to see you here',
			description : "Let's start by searching for some videos",
			icon        : <Icon type='smile' style={{ color: '#108ee9' }} />
		});
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
