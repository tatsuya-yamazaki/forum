import TextField from '@material-ui/core/TextField';

export function QuestionTagsInputField () {
	return (
		<div>
			<TextField required fullWidth label="Tags" helperText="Please enter tags separated by spaces" />
		</div>
	);
}
