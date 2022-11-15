export type AnswerBuilder = {
	text: string;
	valid: boolean;
};

export type QuestionBuilder = {
	text: string;
	answers: AnswerBuilder[];
};
