import Button from '@material-ui/core/Button';

export function PostReplyButton () {
	return (
		<div>
			<Button 
				variant="contained"
				color="default"
				style={{ textTransform: "none" }}
			>
				Reply
			</Button>
		</div>
	);
}
