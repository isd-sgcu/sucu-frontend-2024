import { tv, type VariantProps } from 'tailwind-variants';

export const listVariants = tv({
	base: 'rounded-lg p-4',
	variants: {
		variant: {
			pink: 'bg-sucu-pink-05',
			grey: 'bg-sucu-gray-light',
			default: 'bg-white'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof listVariants>['variant'];
