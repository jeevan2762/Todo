import { Box } from '@mui/material';
import { React } from 'react';
import Active from './Active';
import All from './All';
import Completed from './Completed';

const FilterButtons = (context) =>
	<Box className="filterButtons">
		<All { ...context }/>
		<Active { ...context }/>
		<Completed { ...context }/>
	</Box>;

export default FilterButtons;
