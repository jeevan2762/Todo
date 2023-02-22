import { rndString } from '@laufire/utils/random';

const removeTodo = ({ state: { todoList }, data: { todo: { id }}}) =>
	todoList.filter((todo) => todo.id !== id);

const getTodo = ({ state: { initialText }, config: { idLength }}) => (
	{
		id: rndString(idLength),
		name: initialText,
		isChecked: false,
	});

const getAction = ({ state: { editTodo }}) => editTodo === '';

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

const getSelected = ({ state: { todoList }}) =>
	todoList.length && todoList.every((todo) => todo.isChecked);

const TodoManager = {
	removeTodo,
	getTodo,
	updateName,
	clearSelected,
	updateIsChecked,
	toggleAll,
	getAction,
	getSelected,
};

export default TodoManager;
