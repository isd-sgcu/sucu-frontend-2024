import type { Role } from './role';

export type User = {
	id: string;
	first_name: string;
	last_name: string;
	role: Role;
	created_at: string;
	updated_at: string;
};
