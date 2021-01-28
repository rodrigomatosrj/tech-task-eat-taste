import React, { useState } from "react";
import IconMealType from "../IconMealType/index";
import LabelMealSpec from "../LabelMealSpec/index";
import ButtonAddItem from "../ButtonAddItem/index";
import ButtonPlusMinus from "../ButtonPlusMinus/index";
import ButtonInfo from "../ButtonInfo/index";
import BoxIngredients from "../BoxIngredients/index";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 20px 0px;
	border-bottom: 1px solid #ffbd1b;
	background-color: ${(props) => props.theme.bodySecondary};
`;

const WrapperImage = styled.div`
	background: ${(props) => `url("${props.src}")`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 50vh;
	width: 100%;
`;

const WrapperInfo = styled.div`
	font-size: 1.2rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.textAlternative};
`;

const WrapperIngredients = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 60%;
`;

const WrapperActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
`;

const Title = styled.h3`
	font-size: 1.5rem;
	display: block;
	color: ${(props) => props.theme.h2};
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	line-height: 1;
	letter-spacing: -0.32px;
	padding-bottom: 10px;
`;

const Row = styled.div`
	display: flex;
	margin-top: 20px;
`;
const Currency = styled.span`
	font-size: 1.2rem;
	font-weight: 300;

	&:before {
		content: "€ ";
	}
`;

function DayMenuItem(props) {
	const [item, setItem] = useState({
		id: props.id,
		qtd: 0,
		nome: props.nome,
		valor: props.valor,
	});
	const total = useSelector((state) => state.total);
	const [btnInfoStatus, setBtnInfoStatus] = useState(false);

	const dispatch = useDispatch();

	function buttonInfoHandler() {
		setBtnInfoStatus(!btnInfoStatus);
	}

	function buttonAddItemHandler() {
		setItem({ ...item, qtd: 1 });
		dispatch({ type: "ADD_ITEM", item: { ...item, qtd: 1 } });
	}

	function buttonPlusHandler() {
		setItem({ ...item, qtd: item.qtd + 1 });
		dispatch({
			type: "UPDATE_ITEM",
			item: { ...item, qtd: item.qtd + 1 },
			total: total + item.valor,
		});
	}

	function buttonMinusHandler() {
		setItem({ ...item, qtd: item.qtd - 1 });
		item.qtd - 1 <= 0
			? dispatch({
					type: "REMOVE_ITEM",
					item: item,
					total: parseFloat((total - item.valor).toFixed(2)),
			  })
			: dispatch({
					type: "UPDATE_ITEM",
					item: { ...item, qtd: item.qtd - 1 },
					total: parseFloat((total - item.valor).toFixed(2)),
			  });
	}

	return (
		<Wrapper>
			<WrapperImage src={props.img}></WrapperImage>
			<WrapperInfo>
				<Title>{props.nome}</Title>
				{props.desc}
				<Row>
					<WrapperIngredients>
						<IconMealType>{props.tipo}</IconMealType>
						<div>
							{props.labels.map((label) => (
								<LabelMealSpec key={label}>{label}</LabelMealSpec>
							))}
						</div>
					</WrapperIngredients>
					<WrapperActions>
						<ButtonInfo onClick={buttonInfoHandler} selected={btnInfoStatus} />
						<Currency>{props.valor.toFixed(2)}</Currency>
						{item.qtd === 0 ? (
							<ButtonAddItem onClick={buttonAddItemHandler} />
						) : (
							<>
								<ButtonPlusMinus onClick={buttonPlusHandler}>
									{" "}
									+{" "}
								</ButtonPlusMinus>
								{item.qtd}
								<ButtonPlusMinus onClick={buttonMinusHandler}>
									{" "}
									-{" "}
								</ButtonPlusMinus>
							</>
						)}
					</WrapperActions>
				</Row>
				{btnInfoStatus ? (
					<BoxIngredients
						ingredients={props.ingredients}
						observacoes={props.observacoes}
						nutri={props.nutri}
					/>
				) : (
					<></>
				)}
			</WrapperInfo>
		</Wrapper>
	);
}

export default DayMenuItem;
