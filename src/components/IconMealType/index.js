import React from "react";
import "./index.css";

const images = {
	veggie: "https://eattasty.pt/img/type/vegetarian.svg",
	carnebranca: "https://eattasty.pt/img/type/white-meat.svg",
	carnevermelha: "https://eattasty.pt/img/type/red-meat.svg",
	peixe: "https://eattasty.pt/img/type/fish.svg",
	vegan: "https://eattasty.pt/img/type/vegan.svg",
};

function IconMealType(props) {
	return (
		<>
			<img src={images[props.children]} /> <span>{props.children.toUpperCase()}</span>
		</>
	);
}

export default IconMealType;
