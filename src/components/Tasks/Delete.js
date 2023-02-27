import { Button } from '@mui/material';
import React from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import TaskManager from '../../services/TaskManager';

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
				tasks: TaskManager.removeTask(context),
			}) }
		/>);
};

export default Delete;
