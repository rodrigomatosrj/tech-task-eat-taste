import React from "react";
import styled from "styled-components";

const label = {
	Semaipo: "https://eattasty.pt/icons/icn-celery-free.svg",
	Semcrustaceos: "https://eattasty.pt/icons/icn-crustaceans-free.svg",
	Sempeixe: "https://eattasty.pt/icons/icn-fish-free.svg",
	Semtremoco: "https://eattasty.pt/icons/icn-lupine-free.svg",
	Semmolusco: "https://eattasty.pt/icons/icn-mollusk-free.svg",
	Semmostarda: "https://eattasty.pt/icons/icn-mustard-free.svg",
	Semlactose: "https://eattasty.pt/icons/icn-dairy-free.svg",
	Semgluten: "https://eattasty.pt/icons/icn-gluten-free.svg",
	Semfrutossecos: "https://eattasty.pt/icons/icn-nut-free.svg",
	Semsoja: "https://eattasty.pt/icons/icn-soya-free.svg",
};

const A = styled.a`
	cursor: pointer;
	position: relative;

	&:hover::after {
		opacity: 1;
		pointer-events: all;
	}
	&::after {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
		white-space: nowrap;
		pointer-events: none;
		transition: 1s;
		opacity: 0;
		content: "${(props) => props.txt}";
		background: ${(props) => props.theme.text};
		color: ${(props) => props.theme.body};
		border-radius: 5px;
		padding: 5px 6px;
		font-size: 12px;
		position: absolute;
		margin: -20px;
		/* display: none; */
	}
`;

function LabelMealSpec(props) {
	return (
		<A txt={props.children}>
			<img
				src={label[props.children.split(" ").join("")]}
				alt={props.children}
			/>
		</A>
	);
}

export default LabelMealSpec;
