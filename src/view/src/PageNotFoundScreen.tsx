import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export function PageNotFoundScreen() {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<Typography variant="h4" >
						Page Not Found
					</Typography>
					<div style={{ marginTop: "2em" }} >
						<Button variant="contained" color="default" >
							Return to Home
						</Button>
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
