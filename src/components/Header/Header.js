import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#009688',
		color: '#FFFFFF'
	},
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	tabContainer: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
			marginLeft: 'auto'
		}
	}
}));

const Header = (props) => {
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	const [ value, setValue ] = useState(0);
	const classes = useStyles(props);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleTabChange = (event, value) => {
		setValue(value);
	};

	return (
		<AppBar className={classes.appBar} color="default" position="fixed">
			<Toolbar>
				<IconButton
					className={classes.menuButton}
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerToggle}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Quiz App</Typography>
				<Navigation drawerOpen={drawerOpen} drawerClose={handleDrawerToggle} />
				<div className={classes.tabContainer}>
					<Tabs
						onChange={handleTabChange}
						indicatorColor="primary"
						value={value}
						aria-label="simple tabs example"
					>
						<Tab label="Home" component={Link} to="/" />
						<Tab label="Generate Quiz" component={Link} to="/quiz-form" />
					</Tabs>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
