import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.GpI1SjwX.js","_app/immutable/chunks/_page.DSSrkDPX.js","_app/immutable/chunks/scheduler.Cuy_yNc4.js","_app/immutable/chunks/index.Cdzko9m0.js","_app/immutable/chunks/Icon.CIfuR3ay.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/runtime.BKmQhhay.js","_app/immutable/chunks/index.CLbrShD4.js","_app/immutable/chunks/camila.BH4ikUQj.js"];
export const stylesheets = [];
export const fonts = [];
