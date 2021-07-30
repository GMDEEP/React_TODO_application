import React from "react";

export function ToDo() {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
			method: "GET"
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				const newTodos = data.map(x => x.label);
				setTodos(newTodos);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});

		fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
			method: "PUT"
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				const newTodos = data.map(x => x.label);
				setTodos(newTodos);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});

		fetch("https://assets.breatheco.de/apis/fake/todos/user/GMDEEP", {
			method: "DEL"
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				const newTodos = data.map(x => x.label);
				setTodos(newTodos);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	return (
		<div className="row w-50">
			<div className="col-12 d-flex justify-content-center">
				<input
					type="text"
					value={task}
					onChange={event => {
						setTask(event.target.value);
					}}
					onKeyPress={event => {
						if (event.key === "Enter") {
							const newTodos = todos.concat([task]);
							setTodos(newTodos);
							setTask("");
						}
					}}
				/>
			</div>
			<div className="col-12">
				{todos.map((item, index) => {
					return (
						<div
							className="row d-flex justify-content-between"
							key={index}>
							<div className="col">{item}</div>
							<div className="col-2 d-flex justify-content-end">
								<button
									onClick={() => {
										const newerTodos = todos.filter(
											(e, i) => {
												return i !== index;
											}
										);
										setTodos(newerTodos);
									}}>
									<i className="far fa-trash-alt"></i>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
