import TextField from '@material-ui/core/TextField';

export function PostContentInputField () {
	return (
		<div>
			<TextField required multiline fullWidth rows={20} label="Content" />
		</div>
	);
}
