import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { ChangeButton } from './ChangeButton';

export function AccountScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >

					<Card variant="outlined" >
						<CardContent >
							<Typography variant="body2" >
								User ID:
							</Typography>
						</CardContent >
					</Card>

					<Card variant="outlined" >
						<CardContent >
							<div style={{ display: "flex" }} >
								<Typography variant="body2" >
									Email:
								</Typography>
								<div style={{ marginLeft: "auto" }} >
									<Link to="/user/email/change" style={{ textDecoration: "none" }} >
										<ChangeButton />
									</Link>
								</div>
							</div>
						</CardContent >
					</Card>

					<Card variant="outlined" >
						<CardContent >
							<div style={{ display: "flex" }} >
								<Typography variant="body2" >
									Password
								</Typography>
								<div style={{ marginLeft: "auto" }} >
									<Link to="/user/password/change" style={{ textDecoration: "none" }} >
										<ChangeButton />
									</Link>
								</div>
							</div>
						</CardContent >
					</Card>

				</CardContent >
			</Card>
		</div>
	);
}
