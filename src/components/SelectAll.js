import { CheckBox } from '@mui/icons-material';
import { Box, InputLabel } from '@mui/material';
import React from 'react';

const SelectAll = (context) => {
	const { state: { list }, state, setState } = context;

	return <Box>
		<CheckBox
			variant="contained"
			color="secondary"
		/>
		<InputLabel
			onClick={ () => setState({
				...state,
				list: [...list],
			}) }
		>SelectAll</InputLabel>
	</Box>;
};

export default SelectAll;
