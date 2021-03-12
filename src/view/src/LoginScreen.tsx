import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { QuickLoginButton } from './QuickLoginButton';
import { UserIdInputField } from './UserIdInputField';
import { PasswordInputField } from './PasswordInputField';
import { ConfirmButton } from './ConfirmButton';

export function LoginScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<div style={{ marginBottom: "1em" }} >
						<QuickLoginButton userName="testuser1" />
					</div>
					<QuickLoginButton userName="testuser2" />
				</CardContent >
			</Card>

			<Card variant="outlined" >
				<CardContent >
					<Typography variant="body2" >
						Regular Login is available below
					</Typography >
					<UserIdInputField />
					<PasswordInputField />
					<div style={{ textAlign: "right" }} >
						<ConfirmButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
