import React from 'react';
import TodoManager from '../services/TodoManager';
import Add from './Add';
import Update from './Update';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return TodoManager.isEmpty({ ...{ ...context, data: editTodo }})
		? <Add { ...context }/>
		: <Update { ...context }/>;
};

export default ActionButton;
