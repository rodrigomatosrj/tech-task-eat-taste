import React, { useEffect, useState } from "react";
import DayMenuGroup from "../DayMenuGroup/index";

function DayMenu() {
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

	return loading ? (
		<div>loading</div>
	) : (
		<div>
			<h1>Menu do Dia</h1>
			<DayMenuGroup items={menu.entrada} name="Entrada" />
		</div>
	);
}

export default DayMenu;
