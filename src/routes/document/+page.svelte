<script lang="ts">
	import { cn } from '$lib/utils';
	import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { typography } from '../../styles/tailwind/typography';
	import Fa from 'svelte-fa';
	import TabsRoot from '$lib/components/Tabs/TabsRoot.svelte';
	import TabsList from '$lib/components/Tabs/TabsList.svelte';
	import TabsTrigger from '$lib/components/Tabs/TabsTrigger.svelte';
	import TabsContent from '$lib/components/Tabs/TabsContent.svelte';
	import MaxWidthWrapper from '$lib/components/MaxWidthWrapper.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { Role, type Document } from '$lib/types';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import DocumentList from './DocumentList.svelte';

	export let data;
	const { documents } = data;

	let searchValue = '';
	let dropdownValue = '';

	let years = Array.from(new Set(documents.map((doc) => new Date(doc.created_at).getFullYear())))
		.sort((a, b) => b - a)
		.map(String);

	let paginatedAll: Document[] = [];
	let paginatedSGCU: Document[] = [];
	let paginatedSCCU: Document[] = [];

	let currentPages = {
		all: 1,
		sgcu: 1,
		sccu: 1
	};
	const documentsPerPage = 3;

	$: totalPages = {
		all: Math.ceil(filteredDocuments('all').length / documentsPerPage),
		sgcu: Math.ceil(filteredDocuments('sgcu').length / documentsPerPage),
		sccu: Math.ceil(filteredDocuments('sccu').length / documentsPerPage)
	};

	$: {
		paginatedAll = paginate(filteredDocuments('all'), currentPages.all, documentsPerPage);
		paginatedSGCU = paginate(filteredDocuments('sgcu'), currentPages.sgcu, documentsPerPage);
		paginatedSCCU = paginate(filteredDocuments('sccu'), currentPages.sccu, documentsPerPage);
		searchValue;
		dropdownValue;
	}

	const filteredDocuments = (tab: 'all' | 'sgcu' | 'sccu') => {
		let filteredDocs = documents;
		const filterRole = (authorRole: string, docRole: Role) => {
			return authorRole.split('_')[0] === docRole.split('_')[0];
		};

		if (searchValue) {
			filteredDocs = filteredDocs.filter((doc) =>
				doc.title.toLowerCase().includes(searchValue.toLowerCase())
			);
		}

		if (dropdownValue && dropdownValue !== 'All') {
			filteredDocs = filteredDocs.filter((doc) => {
				const year = new Date(doc.created_at).getFullYear().toString();
				return year === dropdownValue;
			});
		}

		switch (tab) {
			case 'sgcu':
				filteredDocs = filteredDocs.filter((doc) => filterRole(doc.author.role, Role.SGCU_ADMIN));
				break;
			case 'sccu':
				filteredDocs = filteredDocs.filter((doc) => filterRole(doc.author.role, Role.SCCU_ADMIN));
				break;
		}

		return filteredDocs;
	};

	function paginate(docs: Document[], currentPage: number, documentsPerPage: number) {
		const start = (currentPage - 1) * documentsPerPage;
		const end = currentPage * documentsPerPage;
		return docs.slice(start, end);
	}

	function changePage(tab: 'all' | 'sgcu' | 'sccu', direction: 'next' | 'prev') {
		const page = currentPages[tab];
		const totalPage = totalPages[tab];

		if (direction === 'next' && page < totalPage) {
			currentPages[tab]++;
		} else if (direction === 'prev' && page > 1) {
			currentPages[tab]--;
		}
	}
</script>

<MaxWidthWrapper class="mt-10 space-y-3">
	<div class="flex items-center gap-3">
		<button on:click={() => history.back()} class="lg:relative -left-52">
			<Fa icon={faCircleArrowLeft} size="lg" />
		</button>
		<h1 class={cn(typography({ variant: 'heading3' }), 'md:text-5xl lg:order-first')}>เอกสาร</h1>
	</div>

	<p class="text-sucu-gray lg:w-full">
		เอกสารทั้งหมดในนามสโมสรนิสิตจุฬาฯ อบจ. และสภานิสิตจุฬาฯ ซึ่งเปิดเผยให้นิสิตได้อ่านโดยทั่วกัน
	</p>

	<SearchBar bind:value={searchValue} />
	<Dropdown items={['All', ...years]} bind:currentChoice={dropdownValue} outerClass="w-64 my-6" />

	<TabsRoot defaultActiveTab="all">
		<TabsList>
			<TabsTrigger value="all">ทั้งหมด</TabsTrigger>
			<TabsTrigger value="sgcu">อบจ.</TabsTrigger>
			<TabsTrigger value="sccu">สภานิสิต</TabsTrigger>
		</TabsList>

		<TabsContent value="all" class="space-y-2">
			<DocumentList
				currentPage={currentPages.all}
				changePage={(variant, direction) => changePage(variant, direction)}
				documents={paginatedAll}
				totalPages={totalPages.all}
				variantKey="all"
			/>
		</TabsContent>

		<TabsContent value="sgcu" class="space-y-2">
			<DocumentList
				currentPage={currentPages.sgcu}
				changePage={(variant, direction) => changePage(variant, direction)}
				documents={paginatedSGCU}
				totalPages={totalPages.sgcu}
				variantKey="sgcu"
			/>
		</TabsContent>

		<TabsContent value="sccu" class="space-y-2">
			<DocumentList
				currentPage={currentPages.sccu}
				changePage={(variant, direction) => changePage(variant, direction)}
				documents={paginatedSCCU}
				totalPages={totalPages.sccu}
				variantKey="sccu"
			/>
		</TabsContent>
	</TabsRoot>
</MaxWidthWrapper>
