import React from "react";
import "./index.css";

function ButtonPlusMinus(props) {
	return (
		<button onClick={props.onClick} className="btn btn-rounded">
			{props.children}
		</button>
	);
}

export default ButtonPlusMinus;
