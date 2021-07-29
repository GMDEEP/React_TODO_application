import React from "react";

export function ToDo() {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		console.log("");
	});

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
