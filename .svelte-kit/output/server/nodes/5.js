

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a4j5HLqh.js","_app/immutable/chunks/scheduler.CTx89dd4.js","_app/immutable/chunks/index.CAIP_Ldt.js","_app/immutable/chunks/GridBackgroundWrapper.TLE0hMT9.js"];
export const stylesheets = ["_app/immutable/assets/GridBackgroundWrapper.CfrML8OZ.css"];
export const fonts = [];
