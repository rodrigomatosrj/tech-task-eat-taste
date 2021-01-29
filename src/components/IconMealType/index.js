import React from "react";
import styled from "styled-components";

const images = {
	veggie: "https://eattasty.pt/img/type/vegetarian.svg",
	carnebranca: "https://eattasty.pt/img/type/white-meat.svg",
	carnevermelha: "https://eattasty.pt/img/type/red-meat.svg",
	peixe: "https://eattasty.pt/img/type/fish.svg",
	vegan: "https://eattasty.pt/img/type/vegan.svg",
};


const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 25%;

	span {
		margin: 10px;
		font-weight: 300;
		color: ${(props) => props.theme.textAlternative};
	}
`;

function IconMealType(props) {
	return (
		<Wrapper>
			<img src={images[props.children]} alt="#"/>{" "}
			<span>{props.children.toUpperCase()}</span>
		</Wrapper>
	);
}

export default IconMealType;
