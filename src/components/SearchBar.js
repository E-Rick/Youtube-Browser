import React, { Component } from 'react';
import './SearchBar.css';
export default class SearchBar extends Component {
	state = { term: '' };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui raised segment'>
				<form className='ui form search' onSubmit={this.onFormSubmit}>
					<label htmlFor=''>Video Search</label>
					<div className='ui fluid icon input'>
						<input
							id='search-input'
							value={this.state.term}
							placeholder='Search...'
							type='text'
							onChange={this.onInputChange}
						/>
						<i class='search icon' />
					</div>
				</form>
			</div>
		);
	}
}
