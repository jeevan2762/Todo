import { Button } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TaskManager from '../../services/TaskManager';

const Add = (context) => {
	const { state: { todoList }, data: { task }} = context;
	const {	state, setState } = context;

	return (
		<Button
			className="taskAddButton"
			variant="outlined"
			size="small"
			startIcon={ <AddOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, task],
				tasks: TaskManager.removeTask({ ...{ ...context,
					data: { task }}}),
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
