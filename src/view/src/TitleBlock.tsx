import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export function TitleBlock() {
	return(
		<div>
			<Link to="/" style={{ textDecoration: "none" }} >
				<Button style={{ textTransform: "none",  }} >
					<Typography variant="h6">
						ForumApp
					</Typography>
				</Button>
			</Link>
		</div>
	);
}
