import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/index";
import DayMenu from "./components/DayMenu/index";
import Pedido from "./components/Pedido/index";
import { lightTheme, darkTheme } from "./components/styles/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Montserrat";
	color: ${(props) => props.theme.text};
  }

:root{
	font-size: 16px;
	background-color: ${(props) => props.theme.body};
} 
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const MainGrid = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media (min-width: 576px) {
		width: 540px;
	}

	@media (min-width: 768px) {
		width: 720px;
	}

	@media (min-width: 992px) {
		width: 960px;
	}

	@media (min-width: 1200px) {
		width: 1140px;
	}

	@media (min-width: 1400px) {
		width: 1320px;
	}
`;

function App() {
	const [mode, setMode] = useState(true);

	return (
		<ThemeProvider theme={mode ? lightTheme : darkTheme}>
			<Provider store={store}>
				<GlobalStyle />
				<Container>
					<MainGrid>
						<DayMenu setMode={setMode} mode={mode} />
						<Pedido />
					</MainGrid>
				</Container>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
