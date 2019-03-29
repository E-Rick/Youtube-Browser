import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		// TODO: make sure we callback from parent component
		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor=''>Video Search</label>
						<input value={this.state.term} type='text' onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}
