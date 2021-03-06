export const getTodoList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export const updateTodoList = todos => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
		method: "PUT",
		body: JSON.stringify(todos.map(x => ({ label: x, done: false }))),
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export const createTodoList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify([])
	});
};
