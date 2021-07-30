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
		<div>
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

			<ul>
				{todos.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button
								onClick={() => {
									const newerTodos = todos.filter((e, i) => {
										return i !== index;
									});
									setTodos(newerTodos);
								}}>
								delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
