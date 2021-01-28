import React, { useEffect, useState } from "react";
import DayMenuGroup from "../DayMenuGroup/index";
import ButtonMode from "../ButtonMode/index";
import styled from "styled-components";

const DayMenuWrapper = styled.div`
	width: 70%;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-itens: center;

	h1 {
		font-size: 3rem;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.25;
		letter-spacing: -1.92px;
		display: inline;
		padding-right: 100px;
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
