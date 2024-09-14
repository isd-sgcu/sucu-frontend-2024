import { tv, type VariantProps } from 'tailwind-variants';
import { typography } from './typography';

export const dropdownVariants = tv({
	base: `w-full ${typography({ variant: 'body-normal' })} transition-colors duration-200 px-4 py-2 text-left`,
	variants: {
		variant: {
			default: `text-sucu-gray-dark border border-sucu-gray`,
			focus: `text-sucu-gray border border-sucu-pink-03`,
			transparent: `text-sucu-gray-light border border-sucu-gray-light`
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof dropdownVariants>['variant'];

export type DropdownProps = {
	variant?: Variant;
};
