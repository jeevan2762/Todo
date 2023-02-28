import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Input from './components/Input';
import ActionButton from './components/ActionButton';
import Container from './components/Container';
import TaskContainer from './components/Tasks/TaskContainer';
import Headings from './components/Headings';
import TaskManager from './services/TaskManager';

const initialState = {
	initialText: '',
	todoList: [],
	editTodo: '',
	filter: 'all',
	tasks: [],
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };
	const { state: { todoList }} = extendedContext;
	const { once } = context;

	once(() => TaskManager.generateTasks(extendedContext));

	return <Box className="App">
		<Headings/>
		<Input { ...extendedContext }/>
		<ActionButton { ...extendedContext }/>
		{Boolean(todoList.length) && <Container { ...extendedContext }/>}
		<TaskContainer { ...extendedContext }/>
	</Box>;
};

export default App;
