import { Button } from '@mui/material';
import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskManager from '../../services/TaskManager';

const Add = (context) => {
	const { state: { todoList }, data: { task }} = context;
	const {	state, setState } = context;

	return (
		<Button
			variant="outlined"
			size="small"
			startIcon={ <AddTaskIcon/> }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, TaskManager
					.getIdAndIsChecked({ ...context, data: task })],
				tasks: TaskManager.removeTask(context),
				initialText: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
