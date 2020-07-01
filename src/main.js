import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Katherine',
		lastName: 'Aguilera' // variable definida en App.svelte
	}
});

export default app;