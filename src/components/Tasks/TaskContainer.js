import { Box } from '@mui/material';
import React from 'react';
import Add from './Add';
import Delete from './Delete';
import Display from './Display';

const TaskContainer = (context) => {
	const { state: { tasks }} = context;

	return <Box>
		{tasks.map((task, key) =>
			<Box
				key={ key }
				className="taskContainer"
			>
				<Add { ...{ ...context, data: { task }} }/>
				<Display { ...{ ...context, data: { task }} }/>
				<Delete { ...{ ...context, data: { task }} }/>
			</Box>)}
	</Box>;
};

export default TaskContainer;
