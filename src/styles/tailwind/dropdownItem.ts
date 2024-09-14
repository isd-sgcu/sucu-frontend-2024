import { tv, type VariantProps } from 'tailwind-variants';
import { typography } from './typography';

export const dropdownItemVariants = tv({
	base: `w-full ${typography({ variant : "body-normal"})} transition-colors duration-200 px-4 py-2 text-left`,
	variants: {
		variant: {
			default: `bg-white text-black`,
			hover : `bg-sucu-pink-05 text-sucu-pink-01`,
			pressed : `bg-sucu-pink-01 text-white`,
			disabled : `bg-white text-sucu-gray-dark`
		},
	},
	defaultVariants : {
		variant : "default"
	}
});

export type Variant = VariantProps<typeof dropdownItemVariants>['variant'];

export type DropdownItemProps = {
	variant?: Variant;
}
