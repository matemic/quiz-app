import React, { useState } from 'react';
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
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	}
}));

const Header = (props) => {
	const [ drawerOpen, setDrawerOpen ] = useState(false);
	const classes = useStyles(props);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<AppBar color="primary" position="static">
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
				<div className="tabContainer">
					<Tabs value={1} aria-label="simple tabs example">
						<Tab label="Item One" />
						<Tab label="Item Two" />
						<Tab label="Item Three" />
					</Tabs>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
