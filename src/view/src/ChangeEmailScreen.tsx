import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { EmailInputField } from './EmailInputField';
import { ChangeButton } from './ChangeButton';

export function ChangeEmailScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<EmailInputField />
					<div style={{ textAlign: "right" }} >
						<ChangeButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}

