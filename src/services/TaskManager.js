import { rndString, rndValue } from '@laufire/utils/random';

const addFields = ({ config: { idLength }, data: task }) => ({
	...task,
	id: rndString(idLength),
	name: task,
	date: Date.now(),
	isChecked: false,
});

const getIdAndIsChecked = ({ config: { idLength }, data: task }) => ({
	id: rndString(idLength),
	name: task.name,
	isChecked: false,
});

const getTask = (context) => {
	const { config: { tasks }} = context;

	return tasks.map((task) => addFields({ ...{ ...context, data: task }}));
};

const removeTask = (context) => {
	const { state: { tasks }, data: { task: { id }}} = context;

	return tasks.filter((task) => task.id !== id);
};

const getRandomTasks = (context) => {
	const { data: { state }, config: { tasks, taskLength }} = context;

	return state.tasks.length < taskLength
		? [...state.tasks, addFields({
			...context,
			data: rndValue(tasks),
		})]
		: state.tasks;
};

const generateTasks = (context) => {
	const { setState, config: { timeDelay }} = context;

	setInterval(() => setState((state) => ({
		...state,
		tasks: getRandomTasks({ ...context, data: { state }}),
	})), timeDelay);
};

const sortByNewest = (context) => {
	const { state: { tasks }} = context;

	return tasks.sort((a, b) => b.date - a.date);
};

const sortByOldest = (context) => {
	const { state: { tasks }} = context;

	return tasks.sort((a, b) => a.date - b.date);
};

const TaskManager = {
	removeTask,
	getTask,
	generateTasks,
	getIdAndIsChecked,
	sortByNewest,
	sortByOldest,
};

export default TaskManager;
