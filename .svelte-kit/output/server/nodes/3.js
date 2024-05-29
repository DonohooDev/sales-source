

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CGWNyJ39.js","_app/immutable/chunks/scheduler.CTx89dd4.js","_app/immutable/chunks/index.CAIP_Ldt.js","_app/immutable/chunks/GridBackgroundWrapper.TLE0hMT9.js"];
export const stylesheets = ["_app/immutable/assets/GridBackgroundWrapper.CfrML8OZ.css"];
export const fonts = [];
