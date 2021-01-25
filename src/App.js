import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import DayMenu from "./components/DayMenu/index";
import Pedido from "./components/Pedido/index";
import "./index.css";

function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Pedido />
					</div>
					<div className="col-md-9">
						<DayMenu />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
