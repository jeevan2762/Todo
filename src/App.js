import { React, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import TaskContainer from './components/Tasks/TaskContainer';
import Headings from './components/Headings';
import TaskManager from './services/TaskManager';
import TodoContainer from './components/TodoContainer';

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
	const { once } = context;

	once(() => TaskManager.generateTasks(extendedContext));

	return <Box className="App">
		<Headings/>
		<TodoContainer { ...extendedContext }/>
		<TaskContainer { ...extendedContext }/>
	</Box>;
};

export default App;
