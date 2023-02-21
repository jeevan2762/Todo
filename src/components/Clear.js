import { Box, Button } from '@mui/material';
import React from 'react';
import TodoManager from '../services/TodoManager';

const Clear = (context) => {
	const { state, setState } = context;

	return <Box>
		<Button
			className="clear"
			variant="outlined"
			color="error"
			onClick={ () => setState({
				...state,
				todoList: TodoManager.clearSelected(context),
			}) }
		>Clear</Button>
	</Box>;
};

export default Clear;
