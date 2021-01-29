import React, { useState } from "react";
import ButtonIngredients from "../ButtonIngredients";
import styled from "styled-components";

const Header = styled.header`
	display: block;
	padding: 20px;
`;
const Ul = styled.ul`
	padding-left: 40px;
	margin-top: 0px;
	column-count: 2;
	font-size: 0.8rem;
	padding-bottom: 20px;

	@media (min-width: 576px) {
		column-count: 3;
	}

	@media (min-width: 768px) {
		column-count: 3;
	}

	@media (min-width: 992px) {
		column-count: 3;
	}

	@media (min-width: 1200px) {
		column-count: 3;
	}

	@media (min-width: 1400px) {
		column-count: 3;
	}
`;

const P = styled.p`
	font-size: 0.8rem;
	margin-left: 20px;
	padding-top: 5px;
`;

const Table = styled.table`
	border: none;
	font-size: 0.8rem;
	width: 90%;
	margin-left: 20px;
`;

const Th = styled.th`
	
	&:nth-child(1)
	text-align: left;
`;
const Td = styled.td`
	color: ${(props) => props.theme.textAlternative};
	text-align: center;

	&:nth-child(1) {
		border-bottom: 0.5px solid #f0f1f2;
		color: ${(props) => props.theme.text};
		font-weight: bold;
		text-align: left;
	}
`;





function BoxIngredients(props) {
	const [ativo, setAtivo] = useState(true);

	function handleClick() {
		setAtivo(!ativo);
	}

	return (
		<div>
			<Header>
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
			</Header>
			{ativo ? (
				<>
					<Ul>
						{props.ingredients.map((el) => (
							<li key={el}>{el}</li>
						))}
					</Ul>
					{props.observacoes.map((el) => (
						<P key={el}>{el}</P>
					))}
				</>
			) : (
				<>
					<Table>
						<thead>
							<tr>
								<th></th>
								{props.nutri.header.map((el) => (
									<Th key={el}>{el}</Th>
								))}
								<Th>
									DR<sup>*</sup>
								</Th>
							</tr>
						</thead>
						<tbody>
							{props.nutri.items.map((el) => (
								<tr key={el}>
									{el.map((item) => (
										<Td key={item}>{item}</Td>
									))}
								</tr>
							))}
						</tbody>
					</Table>
					<P>* Dose de Referência para um adulto médio (2000 kcal / 8400 kJ)</P>
				</>
			)}
		</div>
	);
}

export default BoxIngredients;
