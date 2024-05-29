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
		client: {"start":"_app/immutable/entry/start.Bpmseild.js","app":"_app/immutable/entry/app.Bq6q3J_7.js","imports":["_app/immutable/entry/start.Bpmseild.js","_app/immutable/chunks/entry.CbdKWdwt.js","_app/immutable/chunks/scheduler.CTx89dd4.js","_app/immutable/entry/app.Bq6q3J_7.js","_app/immutable/chunks/scheduler.CTx89dd4.js","_app/immutable/chunks/index.CAIP_Ldt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
