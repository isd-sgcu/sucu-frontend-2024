import thumbnail from '../assets/images/thumbnail.png';

export const mockAnnouncementCard = Array(4).fill({
	imageURL: thumbnail,
	title:
		'ประกาศจุฬาลงกรณ์มหาวิทยาลัย เรื่อง การไปต่างประเทศหรือการเข้ามาในประเทศเพื่อศึกษา อบรม วิจัย หรือปฏิบัติงาน ในสถานการณ์ปัจจุบัน ลงวันที่ 22 พฤศจิกายน 2565',
	createdAt: '2024-07-04',
	createdBy: 'สภานิสิต',
	linkHref: 'https://www.google.com'
});

mockAnnouncementCard.push({
	imageURL: '',
	title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิตฯ',
	createdAt: '2024-07-04',
	createdBy: 'สภานิสิต',
	linkHref: 'https://www.google.com'
});

mockAnnouncementCard.push(
	...Array(3).fill({
		imageURL: thumbnail,
		title: 'ประกาศรับสมัครคณะกรรมาธิการ วิสามัญพิจารณางบประมาณสโมสรนิสิตฯ',
		createdAt: '2024-07-04',
		createdBy: 'สภานิสิต',
		linkHref: 'https://www.google.com'
	})
);
