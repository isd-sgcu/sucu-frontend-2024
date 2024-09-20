import type { User } from './user';

export type Document = {
	id: string;
	title: string;
	content: string;
	banner?: string;
	cover?: string;
	user_id: string;
	type_id: string;
	created_at: string;
	updated_at: string;

	author: User;
	// images: Attachment[];
	// docs: Attachment[];
};

export enum DocumentType {
	ANNOUNCEMENT = 'ANNOUNCEMENT',
	BUDGET = 'BUDGET',
	STATISTIC = 'STATISTIC'
}
