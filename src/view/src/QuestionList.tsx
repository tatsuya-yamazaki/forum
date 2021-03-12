import { NewQuestion } from './NewQuestion';
import { QuestionListItem } from './QuestionListItem';
import { QuestionListPageButtons } from './QuestionListPageButtons';

const tmpQuestionCount: number = 181;
const tmpCurrentPage: number = 1;

const tmpTitle:string = 'Single Page Applicationがフロントエンド開発において用いられるようになったのはなぜですか？';
const tmpContentHead:string = '普段はjQueryなどを使用しているフロントエンジニアです。昨今Single Page applicationがフロントエンド開発において用いられるようになりましたが、\nいまいち利点がわかりません。従来通りのjavascript開発ではだめなのでしょうか。また、typescriptの役割についても知りたいです';
const tmpTags: string[] = ['typescript','vue.js','react.js'];
const tmpAnswerCount: number = 5

const tmpTitle2:string = 'Single Page Applicationがフロントエンド開発において用いられるようになったのはなぜですか？';
const tmpContentHead2:string = '普段はjQueryなどを使用しているフロントエンジニアです。昨今Single Page applicationがフロントエンド開発において用いられるようになりましたが、\nいまいち利点がわかりません。従来通りのjavascript開発ではだめなのでしょうか。また、typescriptの役割についても知りたいです';
const tmpTags2: string[] = ['typescript','vue.js','react.js'];
const tmpAnswerCount2: number = 8;

export function QuestionList() {
	const QuestionListItems: JSX.Element[] = [
				<QuestionListItem
					id={1}
					title={tmpTitle}
					contentHead={tmpContentHead}
					tags={tmpTags}
					closed={true}
					answerCount={tmpAnswerCount}
				/>
				,
				<QuestionListItem
					id={2}
					title={tmpTitle2}
					contentHead={tmpContentHead2}
					tags={tmpTags2}
					closed={false}
					answerCount={tmpAnswerCount2}
				/>
	];

	return (
		<div>
			<NewQuestion />

			<div>
				{QuestionListItems}
			</div>

			<QuestionListPageButtons
				questionCount={tmpQuestionCount}
				currentPage={tmpCurrentPage}
			/>
		</div>
	);
}
