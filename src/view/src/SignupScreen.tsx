import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { UserIdInputField } from './UserIdInputField';
import { EmailInputField } from './EmailInputField';
import { PasswordInputField } from './PasswordInputField';
import { PasswordToConfirmInputField } from './PasswordToConfirmInputField';
import { ConfirmButton } from './ConfirmButton';

export function SignupScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<UserIdInputField />
					<EmailInputField />
					<PasswordInputField />
					<PasswordToConfirmInputField />
					<div style={{ textAlign: "right" }} >
						<ConfirmButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
