import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { PostContentInputField } from './PostContentInputField';
import { PostButton } from './PostButton';

export function PostReply () {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<PostContentInputField />
					<div style={{ textAlign: "right" }} >
						<PostButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
