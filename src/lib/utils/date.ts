import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import 'dayjs/locale/th';
import 'dayjs/locale/th';

dayjs.extend(buddhistEra);

export function formatDateTH(dateString: string): string {
	return dayjs(dateString).locale('th').format('DD MMMM BBBB');
}
