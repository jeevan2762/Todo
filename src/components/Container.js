import { Box } from '@mui/material';
import React from 'react';

const Container = (context) => {
	const { state: { list }} = context;

	return <Box className="container">
		{list.map((ele, key) =>
			<Box key={ key }>
				{ele.name}
			</Box>)}
	</Box>;
};

export default Container;
