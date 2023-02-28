import { rndString, rndValue } from '@laufire/utils/random';

const addFields = ({ config: { idLength }, data: task }) => ({
	...task,
	id: rndString(idLength),
	name: task,
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

const TaskManager = {
	removeTask,
	getTask,
	generateTasks,
};

export default TaskManager;
