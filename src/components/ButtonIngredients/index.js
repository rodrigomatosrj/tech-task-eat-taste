import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 0;
	background-color: transparent;
	font-size: 12px;
	font-weight: 800;
	align-items: center;
	border-bottom: ${(props) => (props.ativo ? "2px solid black" : "none")};
	border-radius: 0px;
	margin-right: 20px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

function ButtonIngredients(props) {
	return (
		<Button onClick={props.onClick} ativo={props.ativo}>
			{props.text}
		</Button>
	);
}

export default ButtonIngredients;
