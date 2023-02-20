import { Box } from '@mui/material';
import React from 'react';

const Display = (context) => {
	const { data: { todo }, state, setState } = context;

	return <Box>
		<label
			onClick={ () => setState({
				...state,
				editTodo: todo,
				initialText: todo.name,
			}) }
		>
			{todo.name}
		</label>
	</Box>;
};

export default Display;
