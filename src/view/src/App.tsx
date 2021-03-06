import React from 'react';
import { Button, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Top } from './Top';
import { QuestionList } from './QuestionList';

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
				<QuestionList />
			</ThemeProvider>
		</div>
	);
}

export default App;
