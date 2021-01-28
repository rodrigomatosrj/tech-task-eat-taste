import React from "react";
import styled from "styled-components";

const Button = styled.button`
	color: ${(props) => props.theme.text};
	font-weight: bold;
	background-color: #ffbe00;
	padding: 20px;
	border: none;
	box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

function ButtonAddItem(props) {
	return <Button onClick={props.onClick}>Adicionar</Button>;
}

export default ButtonAddItem;
