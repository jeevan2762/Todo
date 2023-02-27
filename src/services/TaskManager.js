import { rndString } from '@laufire/utils/random';

const getTask = ({ config: { tasks, idLength }}) => tasks.map((task) => ({
	...task,
	id: rndString(idLength),
	isChecked: false,
}));

const removeTask = (context) => {
	const { state: { tasks }, data: { task: { id }}} = context;

	return tasks.filter((task) => task.id !== id);
};

const TaskManager = {
	removeTask,
	getTask,
};

export default TaskManager;
