import { Box } from '@mui/material';
import React from 'react';
import Clear from './Clear';
import SelectAll from './SelectAll';

const ClearAndSelectAll = (context) => <Box>
	<SelectAll { ...context }/>
	<Clear { ...context }/>
</Box>;

export default ClearAndSelectAll;
