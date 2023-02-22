import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import ActionButton from './components/ActionButton';
import TodoContainer from './components/TodoContainer';

const initialState = {
	initialText: '',
	todoList: [],
	editTodo: '',
	filter: 'all',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <Box className="App">
		<Input { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		<TodoContainer { ...extendedContext }/>
	</Box>;
};

export default App;
