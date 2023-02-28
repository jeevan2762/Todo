import { rndString, rndValue } from '@laufire/utils/random';

const addFields = ({ config: { idLength }, data: task }) => ({
	...task,
	name: task,
	id: rndString(idLength),
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

const generateTasks = (context) => {
	const { setState, config: { tasks, taskLength, timeDelay }} = context;

	return setInterval(() => setState((state) => ({
		...state,
		tasks: state.tasks.length < taskLength
			? [...state.tasks, addFields({ ...context,
				data: rndValue(tasks) })]
			: state.tasks,
	})), timeDelay);
};

const TaskManager = {
	removeTask,
	getTask,
	generateTasks,
};

export default TaskManager;
