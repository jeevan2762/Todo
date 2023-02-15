import { Box, TextField } from '@mui/material';
import React from 'react';
import Add from './Add';

const Input = () => <Box class="input">
	<TextField variant="outlined"/>
	<Add/>
</Box>;

export default Input;
