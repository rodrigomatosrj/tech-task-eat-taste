import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

function Pedido() {
	const itemsPedidos = useSelector((state) => state.items);
	const total = useSelector((state) => state.total);

	return (
		<div className="sticky-top box-pedido">
			<ul className="ulPedidos">
				{itemsPedidos.map((item) => {
					return (
						<li>
							{item.nome} x {item.qtd}
						</li>
					);
				})}
			</ul>
			<p>Total pedido: &euro; {total.toFixed(2)}</p>
		</div>
	);
}

export default Pedido;
