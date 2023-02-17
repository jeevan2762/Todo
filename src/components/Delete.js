import { Button } from '@mui/material';
import React from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import TodoManager from '../services/TodoManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="text"
			size="medium"
			color="error"
			startIcon={ <DeleteTwoToneIcon/> }
			onClick={ () => setState({
				...state,
				list: TodoManager.removeTodo(context),
			}) }
		/>);
};

export default Delete;
