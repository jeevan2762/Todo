import { Box } from '@mui/material';
import { React } from 'react';
import Filters from './Filters';

const FilterButtons = (context) => {
	const { config: { filters }} = context;

	return <Box className="filterButtons">
		{filters.map((filter, key) =>
			<Filters key={ key }{ ...{ ...context, data: filter } }/>)}
	</Box>;
};

export default FilterButtons;
