export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_ex08udEH.mjs').then(n => n.i);

export { page };
