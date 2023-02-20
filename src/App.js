import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import Container from './components/Container';
import ToggleButton from './components/ToggleButton';
import Clear from './components/Clear';

const initialState = {
	initialText: '',
	list: [],
	editTodo: '',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <Box className="App">
		<Input { ...extendedContext }/>
		<Container { ...extendedContext }/>
		<ToggleButton { ...extendedContext }/>
		<Clear { ...extendedContext }/>
	</Box>;
};

export default App;
