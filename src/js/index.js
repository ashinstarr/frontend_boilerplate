'use strict';

var _ = require('lodash');

/* React workflow

	var React = require('react');

	// require views
	var App = require('./views/app.jsx');

	// example view
	var React = require('react'),
		Helpers = require('../helpers.js'),
		TodoList = require('./todoList.jsx'),
		TodoAddButton = require('./todoAddButton.jsx'),
		Items = require('../models/todos.js');

	module.exports = React.createClass({
		getInitialState: function(){
			return {
				items: Items.get()
			}
		},
		onClick: function(){
			console.log(this.props);
		},
		addItem: function(){
			
			Items.add({});

			this.setState({
				items: Items.get()
			});
		},
		render: function(){
			return (
				<div className="todo__container">
					<TodoList list={ this.state.items } onChangeItem={ this.onChangeItem } />
					<TodoAddButton onClick={this.addItem} />
				</div>
			)
		}
	});

	// render it out
	React.render(<App />, document.querySelector('#app'));

*/

/* Angular workflow

*/