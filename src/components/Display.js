import { Box } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const Display = (context) => {
	const { data: { todo }, state, setState } = context;

	return <Box>
		<label
			onClick={ () => setState({
				...state,
				edit: [...todo, TodoManager.editName(context)],
			}) }
		>
			{todo.name}
		</label>
	</Box>;
};

export default Display;
