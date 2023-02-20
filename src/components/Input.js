import { Box, TextField } from '@mui/material';
import React from 'react';
import Add from './Add';

const Input = (context) => {
	const { state: { initialText }, state, setState } = context;

	return <Box className="input">
		<TextField
			variant="outlined"
			size="small"
			placeholder="Enter To-Do"
			value={ initialText }
			onChange={ (event) => setState({
				...state,
				initialText: event.target.value,
			}) }
		/>
		<Add { ...context }/>
	</Box>;
};

export default Input;
