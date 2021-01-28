import React from "react";
import styled from "styled-components";

const IconOff = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-toggle2-off"
		viewBox="0 0 16 16"
	>
		<path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z" />
		<path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z" />
	</svg>
);

const IconOn = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-toggle2-on"
		viewBox="0 0 16 16"
	>
		<path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z" />
		<path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z" />
	</svg>
);

const Button = styled.button`
	border: none;
	background-color: transparent;
	display: flex;
	align-items: center;
	cursor: pointer;

	span{
		margin-right: 5px;
	}

	&:focus{
		outline:none;
	}
`;

function ButtonInfo(props) {
	return (
		<Button onClick={props.onClick}>
			<span>INFO</span>
			{props.selected ? <IconOff /> : <IconOn />}
		</Button>
	);
}

export default ButtonInfo;
