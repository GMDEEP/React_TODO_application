import React from "react";
import { ToDo } from "./ToDo";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<ToDo />
			</div>
		</div>
	);
}
