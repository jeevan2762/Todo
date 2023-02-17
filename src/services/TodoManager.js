import { rndString } from '@laufire/utils/random';

const removeTodo = (context) => {
	const { state: { list }, data: ele } = context;

	return list.filter((todo) => todo.id !== ele.id);
};

const getNameAndId = (context) => {
	const { state: { initialText }, config: { idLength }} = context;

	return { id: rndString(idLength),
		name: initialText };
};

const TodoManager = {
	removeTodo,
	getNameAndId,
};

export default TodoManager;
