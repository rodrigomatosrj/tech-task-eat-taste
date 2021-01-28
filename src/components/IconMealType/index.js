import React from "react";
import styled from "styled-components";

const images = {
	veggie: "https://eattasty.pt/img/type/vegetarian.svg",
	carnebranca: "https://eattasty.pt/img/type/white-meat.svg",
	carnevermelha: "https://eattasty.pt/img/type/red-meat.svg",
	peixe: "https://eattasty.pt/img/type/fish.svg",
	vegan: "https://eattasty.pt/img/type/vegan.svg",
};

const Span = styled.span`
	 {
		margin: 10px;
		font-weight: 300;
		color: ${(props) => props.theme.textAlternative};
	}
`;

function IconMealType(props) {
	return (
		<>
			<img src={images[props.children]} alt="#"/>{" "}
			<Span>{props.children.toUpperCase()}</Span>
		</>
	);
}

export default IconMealType;
