import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TodoManager from '../services/TodoManager';

const Add = (context) => {
	const { state: { initialText, todoList }} = context;
	const {	state, setState } = context;

	return (
		<Button
			className="addButton"
			variant="outlined"
			disabled={ TodoManager.isEmpty({ ...{ ...context,
				data: initialText }}) }
			size="small"
			startIcon={ <AddOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, TodoManager.getTodo(context)],
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
