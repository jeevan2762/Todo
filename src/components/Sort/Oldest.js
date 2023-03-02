import { Button } from '@mui/material';
import React from 'react';
import TaskManager from '../../services/TaskManager';

const Oldest = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="oldest"
			variant="outlined"
			onClick={ () => setState({
				...state,
				tasks: TaskManager.sortByOldest(context),
			}) }
		>Oldest</Button>);
};

export default Oldest;
