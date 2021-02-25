import React, { useState } from 'react';

import { Container, Typography } from '@material-ui/core';

import Game from './Game/Game';
import Home from './Home/Home';
import { useStyles } from './styles';

function App() {
	const [time, setTime] = useState(6);
	const [start, setStart] = useState(false);
	const classes = useStyles();

	const beginGame = time => {
		setTime(time);
		setStart(true);
	};

	const exitGame = () => {
		setStart(false);
	};

	return (
		<Container className={classes.root}>
			<div>
				<Typography className={classes.title} variant="h2">
					Touch Typer
				</Typography>
				{start ? (
					<Game time={time} exitGame={exitGame} />
				) : (
					<Home beginGame={beginGame} />
				)}
			</div>
		</Container>
	);
}

export default App;
