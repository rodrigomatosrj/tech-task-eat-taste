import React from "react";

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

function LabelMealSpec(props) {
	return (
		<>
			<img
				src={label[props.children.split(" ").join("")]}
				alt={props.children}
			/>
		</>
	);
}

export default LabelMealSpec;
