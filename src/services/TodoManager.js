import { rndString } from '@laufire/utils/random';

const removeTodo = ({ state: { todoList }, data: { todo: { id }}}) =>
	todoList.filter((todo) => todo.id !== id);

const getTodo = ({ state: { initialText }, config: { idLength }}) => (
	{
		id: rndString(idLength),
		name: initialText,
		isChecked: false,
	});

const isEmpty = ({ data }) => data === '';

const updateName = ({ state: { initialText, todoList, editTodo: todo }}) =>
	todoList.map((todoItem) => (todoItem.id === todo.id
		? { ...todoItem, name: initialText }
		: todoItem));

const clearSelected = ({ state: { todoList }}) =>
	todoList.filter((todo) => !todo.isChecked);

const updateIsChecked = (context) => {
	const { state: { todoList }, data: { todo }} = context;

	return todoList.map((data) => {
		const { isChecked } = data;

		return data.id === todo.id
			? { ...data, isChecked: !isChecked }
			: data;
	});
};

const toggleAll = ({ state: { todoList }, data }) =>
	todoList.map((todo) => ({ ...todo, isChecked: data }));

const isAllTodoSelected = ({ state: { todoList }}) =>
	todoList.every((todo) => todo.isChecked);

const getLength = ({ state: { todoList }}) =>	todoList.length;

const filter = {
	all: ({ state: { todoList }}) => todoList,
	active: (context) => clearSelected(context),
	completed: ({ state: { todoList }}) => todoList.filter((todo) =>
		todo.isChecked),
};

const isAnyTodoChecked = ({ state: { todoList }}) =>
	todoList.some((todo) => todo.isChecked);

const getTask = ({ config: { tasks, idLength }}) => tasks.map((task) => ({
	...task,
	id: rndString(idLength),
}));

const TodoManager = {
	removeTodo,
	getTodo,
	updateName,
	clearSelected,
	updateIsChecked,
	toggleAll,
	isEmpty,
	isAllTodoSelected,
	getLength,
	filter,
	isAnyTodoChecked,
	getTask,
};

export default TodoManager;
