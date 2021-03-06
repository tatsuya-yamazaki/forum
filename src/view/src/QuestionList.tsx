import { QuestionListItem } from './QuestionListItem';

const tmpTitle:string = 'Single Page Applicationがフロントエンド開発において用いられるようになったのはなぜですか？';
const tmpContentHead:string = '普段はjQueryなどを使用しているフロントエンジニアです。昨今Single Page applicationがフロントエンド開発において用いられるようになりましたが、\nいまいち利点がわかりません。従来通りのjavascript開発ではだめなのでしょうか。また、typescriptの役割についても知りたいです';
const tmpTags: string[] = ['typescript','vue.js','react.js'];
const tmpAnswerCount: number = 5

const tmpTitle2:string = 'Single Page Applicationがフロントエンド開発において用いられるようになったのはなぜですか？';
const tmpContentHead2:string = '普段はjQueryなどを使用しているフロントエンジニアです。昨今Single Page applicationがフロントエンド開発において用いられるようになりましたが、\nいまいち利点がわかりません。従来通りのjavascript開発ではだめなのでしょうか。また、typescriptの役割についても知りたいです';
const tmpTags2: string[] = ['typescript','vue.js','react.js'];
const tmpAnswerCount2: number = 8;

export function QuestionList() {
	return (
		<div>
			<QuestionListItem
				title={tmpTitle}
				contentHead={tmpContentHead}
				tags={tmpTags}
				answerCount={tmpAnswerCount}
			/>
			<QuestionListItem
				title={tmpTitle2}
				contentHead={tmpContentHead2}
				tags={tmpTags2}
				answerCount={tmpAnswerCount2}
			/>
		</div>
	);
}
