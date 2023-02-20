import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const Update = (context) => {
	const {	state, setState } = context;

	return (
		<Button
			className="updateButton"
			variant="outlined"
			onClick={ () => setState({
				...state,
				list: TodoManager.updateName(context),
				editTodo: '',
				initialText: '',
			}) }
		>
			Update
		</Button>);
};

export default Update;
