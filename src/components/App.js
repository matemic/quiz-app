import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Header/Header';
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

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/quiz-form">
						<QuizForm />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
