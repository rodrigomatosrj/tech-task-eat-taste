import React from "react";
import "./index.css";

function ButtonAddItem(props) {
	return (
		<button onClick={props.onClick} className="btn btn-yellow">
			Adicionar
		</button>
	);
}

export default ButtonAddItem;
