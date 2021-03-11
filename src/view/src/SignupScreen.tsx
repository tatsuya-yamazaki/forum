import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { UserIdInputField } from './UserIdInputField';
import { EmailInputField } from './EmailInputField';
import { CurrentPasswordInputField } from './CurrentPasswordInputField';
import { PasswordInputField } from './PasswordInputField';
import { PasswordToConfirmInputField } from './PasswordToConfirmInputField';
import { SignupButton } from './SignupButton';

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
						<SignupButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
