import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from './App.module.css';
import Header from './Header/Header';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#009688'
		}
	}
});

const App = () => {
	return (
		<div className={styles.App}>
			<ThemeProvider theme={theme}>
				<Router>
					<Header />
				</Router>
			</ThemeProvider>
		</div>
	);
};

export default App;
