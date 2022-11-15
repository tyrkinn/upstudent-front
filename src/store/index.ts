import {atom} from 'jotai';
import type {GetAllQuizesQuery, Quiz} from '../graphql/gql/graphql';
import type {User} from '../types/user.type';

export const userAtom = atom<User | undefined>(undefined);

export const quizesAtom = atom<GetAllQuizesQuery['allQuizes']>([]);

export const searchInputAtom = atom('');

export const filteredQuizesAtom = atom(get => {
	const quizes = get(quizesAtom);
	const searchQuery = get(searchInputAtom).trim();
	if (searchQuery === '') {
		return quizes;
	}

	return quizes.filter(q => q.title.includes(searchQuery));
});
