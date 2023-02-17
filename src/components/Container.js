import { Box } from '@mui/material';
import React from 'react';
import Delete from './Delete';

const Container = (context) => {
	const { state: { list }} = context;

	return list.map((ele, key) =>
		<Box
			key={ key }
			className="container"
		>
			<Box>
				{ele.name}
			</Box>
			<Delete { ...{ ...context, data: ele } }/>
		</Box>);
};

export default Container;
