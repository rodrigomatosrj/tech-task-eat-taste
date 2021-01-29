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
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	padding-top: 20px;

	@media (min-width: 576px) {
		width: 60%;
		align-items: center;
		padding-top: 0;
	}

	@media (min-width: 768px) {
		width: 60%;
		align-items: center;
		padding-top: 0;
	}

	@media (min-width: 992px) {
		width: 60%;
		align-items: center;
		padding-top: 0;
	}

	@media (min-width: 1200px) {
		width: 60%;
		align-items: center;
		padding-top: 0;
	}

	@media (min-width: 1400px) {
		width: 60%;
		align-items: center;
		padding-top: 0;
	}

	.labels{
		width:50%;
		padding-right: .5rem
	}
`;

const WrapperActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media (min-width: 576px) {
		width: 40%;
		align-items: center;
	}

	@media (min-width: 768px) {
		width: 40%;
		align-items: center;
	}

	@media (min-width: 992px) {
		width: 40%;
		align-items: center;
	}

	@media (min-width: 1200px) {
		width: 40%;
		align-items: center;
	}

	@media (min-width: 1400px) {
		width: 40%;
		align-items: center;
	}
`;

const WrapperBtns = styled.div`
	width: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	flex-direction: column-reverse;
	width: 100%;

	@media (min-width: 576px) {
		width: 540px;
	}

	@media (min-width: 768px) {
		width: 720px;
	}

	@media (min-width: 992px) {
		justify-content: space-between;
		flex-direction: row;
		width: 960px;
	}

	@media (min-width: 1200px) {
		justify-content: space-between;
		flex-direction: row;
		width: 1140px;
	}

	@media (min-width: 1400px) {
		justify-content: space-between;
		flex-direction: row;
		width: 1320px;
	}
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
						<div className = "labels">
							{props.labels.map((label) => (
								<LabelMealSpec key={label}>{label}</LabelMealSpec>
							))}
						</div>
						<ButtonInfo onClick={buttonInfoHandler} selected={btnInfoStatus} />
					</WrapperIngredients>
					<WrapperActions>
						<Currency>{props.valor.toFixed(2)}</Currency>
						{item.qtd === 0 ? (
							<ButtonAddItem onClick={buttonAddItemHandler} />
						) : (
							<WrapperBtns>
								<ButtonPlusMinus onClick={buttonPlusHandler}>
									{" "}
									+{" "}
								</ButtonPlusMinus>
								{item.qtd}
								<ButtonPlusMinus onClick={buttonMinusHandler}>
									{" "}
									-{" "}
								</ButtonPlusMinus>
							</WrapperBtns>
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
