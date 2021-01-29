import React, { useEffect, useState } from "react";
import DayMenuGroup from "../DayMenuGroup/index";
import ButtonMode from "../ButtonMode/index";
import styled from "styled-components";

const DayMenuWrapper = styled.div`
	width: 100%;
	padding-top: 20px;

	@media (min-width: 576px) {
		width: 70%;
	}

	@media (min-width: 768px) {
		width: 70%;
	}

	@media (min-width: 992px) {
		justify-content: space-between;
		flex-direction: row;
		width: 70%;
	}

	@media (min-width: 1200px) {
		justify-content: space-between;
		flex-direction: row;
		width: 70%;
	}

	@media (min-width: 1400px) {
		justify-content: space-between;
		flex-direction: row;
		width: 70%;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-itens: center;
	padding: 1rem;
	
	h1 {
		font-size: 3rem;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.25;
		letter-spacing: -1.92px;
		display: inline;
	}
`;

function DayMenu(props) {
	const [menu, setMenu] = useState({ entrada: [] });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getMenu() {
			try {
				setMenu(await require("../../data/data"));
				setLoading(false);
			} catch (e) {
				console.error(e);
			}
		}
		getMenu();
	}, []);

	function handleClick() {
		props.setMode(!props.mode);
	}

	return loading ? (
		<div>loading</div>
	) : (
		<DayMenuWrapper>
			<Title>
				<h1>Menu do Dia</h1>
				<ButtonMode onClick={handleClick} mode={props.mode} />
			</Title>
			<DayMenuGroup items={menu.entrada} name="Entrada" />
		</DayMenuWrapper>
	);
}

export default DayMenu;
