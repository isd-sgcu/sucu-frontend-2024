<script lang="ts">
    import { type Variant , listVariants} from '../../../styles/tailwind/list';
	import { typography } from '../../../styles/tailwind/typography';

	export let title: string;
    export let createdAt: string;
	export let createdBy: string;
    export let linkHref: string;
    export let variant: Variant;

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            calendar: 'buddhist'
        };
        return new Intl.DateTimeFormat('th-TH', options).format(date);
    }

</script>

<a href={linkHref}  target="_blank"   class={`h-auto w-[761px] flex flex-col py-[12px] px-[24px] max-md:w-[390px] rounded ${listVariants[variant]}`}>
    <div class={`${typography({ variant : 'body-large' })} text-ellipsis whitespace-nowrap overflow-hidden`}>{title}</div>

    <div class={typography({ variant : 'body-normal' })}>{formatDate(createdAt)} โดย {createdBy}</div>

</a>


