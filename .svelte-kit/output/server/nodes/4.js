

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BICStyWn.js","_app/immutable/chunks/scheduler.DpvVodA1.js","_app/immutable/chunks/index.D2Aevhxh.js"];
export const stylesheets = [];
export const fonts = [];
