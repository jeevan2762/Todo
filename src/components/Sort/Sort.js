import { Box } from '@mui/material';
import React from 'react';
import Newest from './Newest';
import Oldest from './Oldest';

const Sort = (context) =>
	<Box>
		<label className="sortBy">Sort By:</label>
		<Oldest { ...context }/>
		<Newest { ...context }/>
	</Box>;

export default Sort;
