import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border-radius: 50%;
	background-color: #ffbe00;
	margin: 0;
	width: 40px;
	height: 40px;
	border: none;
	vertical-align: middle;
	box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

function ButtonPlusMinus(props) {
	return <Button onClick={props.onClick}>{props.children}</Button>;
}

export default ButtonPlusMinus;
