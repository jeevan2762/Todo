import { Box, Checkbox } from '@mui/material';
import React from 'react';

const CheckBox = (context) => {
	const { state, setState, data: { todo: { isChecked }}} = context;

	return <Box>
		<Checkbox
			defaultChecked={ isChecked }
			size="medium"
			onClick={ () => setState({
				...state,
				isChecked: !state.isChecked,
			}) }
		/>
	</Box>;
};

export default CheckBox;
