

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DL0Xe8zP.js","_app/immutable/chunks/scheduler.CTx89dd4.js","_app/immutable/chunks/index.CAIP_Ldt.js","_app/immutable/chunks/entry.CbdKWdwt.js"];
export const stylesheets = [];
export const fonts = [];
