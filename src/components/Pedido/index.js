import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin: 50px 10px;
	padding: 20px;

	p {
		line-height: 50px;
	}

	@media (min-width: 576px) {
		width: 30%;
		margin: 50px 10px;
	}

	@media (min-width: 768px) {
		width: 30%;
		margin: 50px 10px;
	}

	@media (min-width: 992px) {
		width: 30%;
		margin: 50px 10px;
	}

	@media (min-width: 1200px) {
		width: 30%;
		margin: 50px 10px;
	}

	@media (min-width: 1400px) {
		width: 30%;
		margin: 50px 10px;
	}
`;

const Ul = styled.ul`
	list-style-type: none;
	font-size: 1rem;
	padding: 0;

	li {
		margin-top: 10px;
	}
`;

function Pedido() {
	const itemsPedidos = useSelector((state) => state.items);
	const total = useSelector((state) => state.total);

	return (
		<Wrapper>
			<p>Resumo do Pedido:</p>
			<Ul>
				{itemsPedidos.map((item) => {
					return (
						<li key={item.id}>
							{item.nome} x {item.qtd}
						</li>
					);
				})}
			</Ul>
			<p>Total pedido: &euro; {total.toFixed(2)}</p>
		</Wrapper>
	);
}

export default Pedido;
