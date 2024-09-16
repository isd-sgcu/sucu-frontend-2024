import { Role } from '$lib/types';
import type { Document, User } from '$lib/types';
import { Type } from '$lib/types/type';
import type { PageLoad } from './$types';
import 'dayjs/locale/th';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';

export const load: PageLoad = async () => {
	dayjs.extend(buddhistEra);

	// * mock data
	const created_at_1 = '2022-01-01';
	const created_at_2 = '2023-01-01';
	const created_at_3 = '2024-01-01';
	const created_at_4 = '2025-01-01';
	const updated_at = '2030-02-01';

	const sgcu_admin: User = {
		id: '6000000000',
		first_name: 'Admin',
		last_name: 'Admin',
		role: Role.SGCU_SUPERADMIN,
		created_at: created_at_1,
		updated_at
	};
	const sccu_admin: User = {
		id: '6000000001',
		first_name: 'Admin',
		last_name: 'Admin',
		role: Role.SCCU_SUPERADMIN,
		created_at: created_at_2,
		updated_at
	};
	const documents: Document[] = [
		{
			id: 'DOC-09649054',
			title: 'เอกสารลับจากดัมเบิลดอร์',
			content: 'เนื้อหาของเอกสารลับจากดัมเบิลดอร์',
			user_id: sgcu_admin.id,
			type_id: Type.ANNOUNCEMENT,
			created_at: created_at_3,
			updated_at,
			author: sgcu_admin
		},
		{
			id: 'DOC-09649055',
			title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต 00',
			content: 'เนื้อหาของประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต',
			user_id: sccu_admin.id,
			type_id: Type.ANNOUNCEMENT,
			created_at: created_at_4,
			updated_at,
			author: sccu_admin
		},
		{
			id: 'DOC-09649056',
			title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต 01',
			content: 'เนื้อหาของประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต',
			user_id: sgcu_admin.id,
			type_id: Type.ANNOUNCEMENT,
			created_at: created_at_4,
			updated_at,
			author: sgcu_admin
		},
		{
			id: 'DOC-09649056',
			title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต 02',
			content: 'เนื้อหาของประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต',
			user_id: sccu_admin.id,
			type_id: Type.BUDGET,
			created_at: created_at_1,
			updated_at,
			author: sccu_admin
		},
		{
			id: 'DOC-09649058',
			title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต 03',
			content: 'เนื้อหาของประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต',
			user_id: sccu_admin.id,
			type_id: Type.STATISTIC,
			created_at: created_at_1,
			updated_at,
			author: sgcu_admin
		},
		{
			id: 'DOC-09649060',
			title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต 04',
			content: 'เนื้อหาของประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิต',
			user_id: sccu_admin.id,
			type_id: Type.STATISTIC,
			created_at: created_at_1,
			updated_at,
			author: sgcu_admin
		}
	];
	return {
		documents
	};
};
