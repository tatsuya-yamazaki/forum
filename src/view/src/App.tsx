import React from 'react';
import { Button, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Top } from './Top';

function App() {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
		},
	});

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Top />
			</ThemeProvider>
		</div>
	);
}

export default App;
