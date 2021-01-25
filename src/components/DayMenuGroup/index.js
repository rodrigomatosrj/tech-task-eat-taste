import React from "react";
import DayMenuItem from "../DayMenuItem/index";
import "./index.css";

function DayMenuGroup(props) {
	return (
		<div className="row">
			<h2>{props.name}</h2>
			{props.items.map((meal) => {
				return (
					<DayMenuItem
						key={meal.id}
						nome={meal.nome}
						img={meal.imagem}
						desc={meal.descricao}
						tipo={meal.tipo}
						labels={meal.labels}
						valor={meal.valor}
						id={meal.id}
						ingredients={meal.ingredients}
						observacoes={meal.observacoes}
						nutri={meal.nutricional}
					/>
				);
			})}
		</div>
	);
}

export default DayMenuGroup;
