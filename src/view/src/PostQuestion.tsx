import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { QuestionTitleInputField } from './QuestionTitleInputField';
import { QuestionTagsInputField } from './QuestionTagsInputField';
import { PostContentInputField } from './PostContentInputField';
import { PostButton } from './PostButton';

export function PostQuestion () {
	return (
		<div>
			<Card variant="outlined" >
				<CardContent >
					<QuestionTitleInputField />
					<QuestionTagsInputField />
					<PostContentInputField />
					<div style={{ textAlign: "right" }} >
						<PostButton />
					</div>
				</CardContent >
			</Card>
		</div>
	);
}
