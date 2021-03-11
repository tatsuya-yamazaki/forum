import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CurrentPasswordInputField } from './CurrentPasswordInputField';
import { PasswordInputField } from './PasswordInputField';
import { PasswordToConfirmInputField } from './PasswordToConfirmInputField';
import { ChangeButton } from './ChangeButton';

export function ChangePasswordScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<CurrentPasswordInputField />
					<PasswordInputField />
					<PasswordToConfirmInputField />
					<div style={{ textAlign: "right" }} >
						<ChangeButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
