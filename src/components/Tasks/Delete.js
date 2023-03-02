import { Button } from '@mui/material';
import React from 'react';
// eslint-disable-next-line max-len, id-length
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import TaskManager from '../../services/TaskManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<Button
			variant="text"
			size="medium"
			color="error"
			startIcon={ <DeleteForeverOutlinedIcon/> }
			onClick={ () => setState({
				...state,
				tasks: TaskManager.removeTask(context),
			}) }
		/>);
};

export default Delete;
