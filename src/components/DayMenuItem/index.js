import React, { useState } from "react";
import IconMealType from "../IconMealType/index";
import LabelMealSpec from "../LabelMealSpec/index";
import ButtonAddItem from "../ButtonAddItem/index";
import ButtonPlusMinus from "../ButtonPlusMinus/index";
import ButtonInfo from "../ButtonInfo/index";
import BoxIngredients from "../BoxIngredients/index";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

function DayMenuItem(props) {
	const [item, setItem] = useState({
		id: props.id,
		qtd: 0,
		nome: props.nome,
		valor: props.valor,
	});
	const itemsPedidos = useSelector((state) => state.items);
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
		<div className="box-meal">
			<div className="row">
				<div className="col-md-12 box-image">
					<img src={props.img} className="img-fluid" />
				</div>
			</div>
			<div className="row">
				<div className="box-plate">
					<h3>{props.nome}</h3>
					<p>{props.desc}</p>
					<div className="row">
						<div className="col-md-6 box-labels">
							<IconMealType>{props.tipo}</IconMealType>
							{props.labels.map((label) => (
								<LabelMealSpec>{label}</LabelMealSpec>
							))}
						</div>
						<div className="col-md-6 box-actions">
							<ButtonInfo
								onClick={buttonInfoHandler}
								selected={btnInfoStatus}
							/>{" "}
							<span>&euro; {props.valor}</span>
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
						</div>
					</div>
				</div>
			</div>
			{btnInfoStatus ? (
				<BoxIngredients
					ingredients={props.ingredients}
					observacoes={props.observacoes}
					nutri={props.nutri}
				/>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default DayMenuItem;
