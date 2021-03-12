import { SignupButton } from './SignupButton';
import { LoginButton } from './LoginButton';
import { AccountButton } from './AccountButton';
import { isLoggedIn } from './Auth';

export function AccountBar() {
	let components: JSX.Element[] = [];
	if (!isLoggedIn()) {
		components.push(<SignupButton />);
		components.push(<LoginButton />);
	} else {
		components.push(<AccountButton />);
	}

	return(
		<div style={{ marginLeft: "auto", display: "flex" }} >
			{components}
		</div>
	);
}
