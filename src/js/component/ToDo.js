import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { getTodoList, updateTodoList, createTodoList } from "../lib/api";

export function ToDo() {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		console.log("Hello");
		getTodoList()
			.then(resp => {
				if (resp.status === 404) {
					createTodoList();
					return [];
				} else {
					return resp.json();
				}
			})
			.then(data => {
				setTodos(data.map(x => x.label));
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	React.useEffect(() => {
		updateTodoList(todos);
	}, [todos]);

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
