import { tv, type VariantProps } from 'tailwind-variants';

export const listVariants = tv({
	base: 'rounded-lg p-4',
	variants: {
		variant: {
			pink: 'bg-[#FFEBE7]',
			grey: 'bg-[#F7F7F7]',
			default: 'bg-white'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof listVariants>['variant'];
