import { writable } from 'svelte/store';

let storedModalShow = false;
if (typeof window !== 'undefined') {
    storedModalShow = localStorage.getItem('modalShow') === 'true';
}

export const modalShow = writable(storedModalShow);

if (typeof window !== 'undefined') {
    modalShow.subscribe(value => {
        localStorage.setItem('modalShow', value ? 'true' : 'false');
    });
}