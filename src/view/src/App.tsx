import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Top } from './Top';
import { QuestionList } from './QuestionList';
import { QuestionDetail } from './QuestionDetail';

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
				<BrowserRouter>
					<Switch>
						<Route path='/' exact children={<QuestionList />} />
						<Route path='/question/detail/:id' children={<QuestionDetail />} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
