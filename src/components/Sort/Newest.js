import { Button } from '@mui/material';
import React from 'react';
import TaskManager from '../../services/TaskManager';

const Newest = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="newest"
			variant="outlined"
			onClick={ () => setState({
				...state,
				tasks: TaskManager.sortByNewest(context),
			}) }
		>Newest</Button>);
};

export default Newest;
