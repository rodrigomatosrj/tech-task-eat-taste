import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 0;
	background-color: transparent;
	font-size: 12px;
	font-weight: 800;
	align-items: center;
	border-bottom-width: ${(props) => (props.ativo ? "2px" : "none")};
	border-bottom-style: solid;
	border-bottom-color: ${(props) => props.theme.text};
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
