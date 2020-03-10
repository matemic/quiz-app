import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header/Header';
import Paper from '@material-ui/core/Paper';
import QuizForm from './Quiz/QuizForm';
import Home from './Home/Home';
import './App.module.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffffff'
		}
	}
});

const useStyles = makeStyles(() => ({
	rootMain: {
		marginTop: '7rem',
		display: 'flex',
		justifyContent: 'center'
	},
	container: {
		width: '80%',
		padding: '2rem'
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<main className={classes.rootMain}>
					<Switch>
						<Route exact path="/">
							<Paper className={classes.container} square>
								<Home />
							</Paper>
						</Route>
						<Route path="/quiz-form">
							<Paper className={classes.container} square>
								<QuizForm />
							</Paper>
						</Route>
					</Switch>
				</main>
			</Router>
		</ThemeProvider>
	);
};

export default App;
