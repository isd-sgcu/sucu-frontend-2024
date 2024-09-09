import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-semibold shadow-button-shadow text-white transition-colors duration-200 focus:outline-none focus:ring-[3px] focus:ring-sucu-pink-focus focus:border-transparent ring-offset-0',
	variants: {
		variant: {
			default: 'bg-sucu-pink-02 hover:bg-sucu-pink-hover',
			outline:
				'border border-sucu-pink-04 bg-white text-black shadow-none hover:bg-sucu-pink-hover hover:text-white hover:border-sucu-pink-hover'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'py-1.5 px-3 text-xs focus:ring-2',
			lg: 'py-2 px-[18px] text-lg'
		},
		color: {
			white: 'bg-white text-black hover:text-white',
			black: 'bg-sucu-gray-dark text-white'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

export type Variant = VariantProps<typeof buttonVariants>['variant'];
export type Size = VariantProps<typeof buttonVariants>['size'];
export type Color = VariantProps<typeof buttonVariants>['color'];

export type ButtonProps = {
	variant?: Variant;
	size?: Size;
	color?: Color;
} & Partial<HTMLButtonElement>;
