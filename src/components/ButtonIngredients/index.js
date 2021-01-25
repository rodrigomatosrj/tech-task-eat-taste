import React from "react";
import "./index.css";

function ButtonIngredients(props) {
	return <button onClick={props.onClick} className={`btn btn-${props.ativo}`}>{props.text}</button>;
}

export default ButtonIngredients;
