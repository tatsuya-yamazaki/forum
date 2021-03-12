import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export function LoginButton() {
	return(
		<Link to="/login" style={{ textDecoration: "none" }} >
			<Button variant="contained" color="default">Login</Button>
		</Link>
	);
}
