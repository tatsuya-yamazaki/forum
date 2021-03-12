import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export function SignupButton() {
	return(
		<Link to="/signup" style={{ textDecoration: "none" }} >
			<Button variant="contained" color="primary">Signup</Button>
		</Link>
	);
}
