import { Box } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import Delete from './Delete';

const Container = (context) => {
	const { state: { list }} = context;

	return list.map((todo, key) =>
		<Box
			key={ key }
			className="container"
		>
			<CheckBox { ...{ ...context, data: { todo }} }/>
			<Box>
				{todo.name}
			</Box>
			<Delete { ...{ ...context, data: { todo }} }/>
		</Box>);
};

export default Container;
