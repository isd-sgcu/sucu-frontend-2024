import { tv, type VariantProps } from 'tailwind-variants';

export const listVariants = tv({
	base: 'rounded-xs p-4',
	variants: {
		variant: {
			pink: 'bg-sucu-pink-05',
			grey: 'bg-[#f7f7f7]',
			default: 'bg-white'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof listVariants>['variant'];
