import React, { useState } from "react";
import ButtonIngredients from "../ButtonIngredients";
import "./index.css";

function BoxIngredients(props) {
	const [ativo, setAtivo] = useState(true);

	function handleClick() {
		setAtivo(!ativo);
	}

	return (
		<div className="row box-ingredients">
			<div className="box-ingredients-header">
				<ButtonIngredients
					text="Ingredientes"
					onClick={handleClick}
					ativo={ativo}
				/>
				<ButtonIngredients
					text="Tabela Nutricional"
					onClick={handleClick}
					ativo={!ativo}
				/>
			</div>
			<div className="col-md-12">
				{ativo ? (
					<>
						<ul className="ulIngredients">
							{props.ingredients.map((el) => (
								<li>{el}</li>
							))}
						</ul>
						{props.observacoes.map((el) => (
							<p>{el}</p>
						))}
					</>
				) : (
					<>
						<table className="table">
							<thead>
								<tr>
									<th></th>
									{props.nutri.header.map((el) => (
										<th>{el}</th>
									))}
									<th>
										DR<sup>*</sup>
									</th>
								</tr>
							</thead>
							<tbody>
								{props.nutri.items.map((el) => (
									<tr>
										{el.map((item) => (
											<td>{item}</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
						<small>
							* Dose de Referência para um adulto médio (2000 kcal / 8400 kJ)
						</small>
					</>
				)}
			</div>
		</div>
	);
}

export default BoxIngredients;
