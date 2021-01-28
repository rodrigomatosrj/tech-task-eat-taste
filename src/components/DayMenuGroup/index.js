import React from "react";
import DayMenuItem from "../DayMenuItem/index";
import styled from "styled-components";

const Title = styled.h2`
	font-size: 2rem;
	color: ${(props) => props.theme.textAlternative};
	t-style: normal;
	line-height: 1.5;
	letter-spacing: -0.32px;
	font-weight: 600;
	font-stretch: normal;
`;

const Wrapper = styled.div`
	width: 100%;
`;

function DayMenuGroup(props) {
	return (
		<Wrapper>
			<Title>{props.name}</Title>
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
		</Wrapper>
	);
}

export default DayMenuGroup;
