import Button from '@material-ui/core/Button';

interface QuickLoginButtonProps {
	userName: string
}

export function QuickLoginButton (props:QuickLoginButtonProps) {
	return (
		<div>
			<Button 
				variant="contained"
				color="default"
				style={{ textTransform: "none" }}
			>
				Quick Login as {props.userName}
			</Button>
		</div>
	);
}
