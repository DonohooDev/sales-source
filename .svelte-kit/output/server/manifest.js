export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C0RLsI96.js","app":"_app/immutable/entry/app.CcBqBxUh.js","imports":["_app/immutable/entry/start.C0RLsI96.js","_app/immutable/chunks/entry.BZ2Ej_Et.js","_app/immutable/chunks/scheduler.DpvVodA1.js","_app/immutable/entry/app.CcBqBxUh.js","_app/immutable/chunks/scheduler.DpvVodA1.js","_app/immutable/chunks/index.D2Aevhxh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
