import { tv } from 'tailwind-variants';

export const typography = tv({
	variants: {
		variant: {
			heading1: 'font-bold text-[64px]',
			heading2: 'font-bold text-5xl',
			heading3: 'font-bold text-3xl',
			heading4: 'font-bold text-2xl',
			'body-large': 'text-2xl',
			'body-medium': 'text-xl',
			'body-normal': 'text-base',
			'body-small': 'text-xs',
			'body-very-small': 'text-[8px]'
		}
	},
	defaultVariants: {
		variant: 'body-large'
	}
});
