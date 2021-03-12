import  Button from  "@material-ui/core/Button"
import  Card from  "@material-ui/core/Card"
import  CardContent from  "@material-ui/core/CardContent"

export function NewQuestion() {
	return (
		<div>
			<Card variant="outlined" >
				<Button fullWidth >
					<CardContent>
						+new question
					</CardContent>
				</Button>
			</Card>
		</div>
	);
}
