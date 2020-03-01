import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Header/Header';
import './App.module.css';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffffff'
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
			</Router>
		</ThemeProvider>
	);
};

export default App;
