import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';


interface QuestionListPageButtonsProps {
	questionCount: number
	currentPage: number
}

interface PageButtonProps {
	label: string
	page: number
}

function PageButton(props: PageButtonProps) {
	const handleClick = () => {

	}

	return (
		<div>
			<Button
				variant='text'
				color='default'
				size='small'
				onClick={handleClick}>
				<Typography>
					{props.label}
				</Typography>
			</Button>
		</div>
	);
}

export function QuestionListPageButtons(props:QuestionListPageButtonsProps) {
	const maxDisplayPageButtons = 10;

	const questionCount: number = props.questionCount;
	if ( questionCount === 0 ) {
		return null;
	}

	const currentPage = props.currentPage;
	const lastPage = Math.floor( ( props.questionCount + ( maxDisplayPageButtons - 1 ) ) / maxDisplayPageButtons );

	let previousPage: number;
	if ( currentPage === 1 ) {
		previousPage = 1;
	} else {
		previousPage = currentPage - 1;
	}

	let nextPage: number;
	if ( ( previousPage + maxDisplayPageButtons + 1 ) > lastPage ) {
		nextPage = lastPage;
	} else {
		nextPage = ( previousPage + maxDisplayPageButtons ) + 1;
	}

	const pageButtons: JSX.Element[] = [];
	for (let i = 0; i < maxDisplayPageButtons; i++) {
		let pageButtonNumber: number = currentPage + i;
		pageButtons.push(
			<PageButton label={pageButtonNumber.toString()} page={i} />
		);
		if ( pageButtonNumber >= lastPage ) {
			break;
		}
	}

	return (
		<div> 
			<Card style={{ display: 'flex', }}>
				<PageButton label="<" page={previousPage} />
				{pageButtons}
				<PageButton label=">" page={nextPage} />
			</Card>
		</div>
	);
}
