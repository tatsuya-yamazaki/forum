import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { AuthRoute } from './AuthRoute';
import { Top } from './Top';
import { QuestionList } from './QuestionList';
import { QuestionDetail } from './QuestionDetail';
import { LoginScreen } from './LoginScreen';
import { PostQuestion } from './PostQuestion';
import { PostReply } from './PostReply';
import { ChangeEmailScreen } from './ChangeEmailScreen';
import { ChangePasswordScreen } from './ChangePasswordScreen';
import { SignupScreen } from './SignupScreen';
import { UserScreen } from './UserScreen';
import { PageNotFoundScreen } from './PageNotFoundScreen';

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
				<BrowserRouter>
					<Top />
					<Switch>
						<Route path='/' exact children={<QuestionList />} />
						<Route path='/question/detail/:id' exact children={<QuestionDetail />} />
						<Route path='/login' exact children={<LoginScreen />} />
						<AuthRoute path='/question/post' exact children={<PostQuestion />} />
						<AuthRoute path='/question/post/reply' exact children={<PostReply />} />
						<AuthRoute path='/user' exact children={<UserScreen />} />
						<AuthRoute path='/user/password/change' exact children={<ChangePasswordScreen />} />
						<AuthRoute path='/user/email/change' exact children={<ChangeEmailScreen />} />
						<Route path='/signup' exact children={<SignupScreen />} />
						<Route path='*' children={<PageNotFoundScreen />} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
