import { Box } from '@mui/material';
import React from 'react';

const Display = (context) => {
	const { data: { task }} = context;

	return <Box>
		<label className="taskLabel">
			{task.name}
		</label>
	</Box>;
};

export default Display;
