

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BMKZpqlC.js","_app/immutable/chunks/scheduler.DpvVodA1.js","_app/immutable/chunks/index.D2Aevhxh.js","_app/immutable/chunks/GridBackgroundWrapper.BOS2HERt.js"];
export const stylesheets = ["_app/immutable/assets/GridBackgroundWrapper.CfrML8OZ.css"];
export const fonts = [];
