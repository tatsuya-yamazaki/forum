import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

interface QuickLoginButtonProps {
	userName: string
}

export function QuickLoginButton (props:QuickLoginButtonProps) {
	return (
		<div>
			<Link to="/" style={{ textDecoration: "none" }} >
				<Button 
					variant="contained"
					color="default"
					style={{ textTransform: "none" }}
				>
					Quick Login as {props.userName}
				</Button>
			</Link>
		</div>
	);
			}
