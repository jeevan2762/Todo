import React from 'react';
import Add from './Add';
import Update from './Update';

const ToggleButton = (context) => {
	const { state: { editTodo }} = context;

	return editTodo === ''
		? <Add { ...context }/>
		: <Update { ...context }/>;
};

export default ToggleButton;
