export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.ico","favicon.png","favicon.svg","icons/code.svg","icons/mermaid-tail.svg","icons/mermaid.svg","icons/use-chat-dark.svg","icons/use-chat.svg","manifest.json","mermaidchart-logo.svg","robots.txt","service-worker.js","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain",".js":"text/javascript",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C-zG_9lQ.js",app:"_app/immutable/entry/app.dvTFHfOJ.js",imports:["_app/immutable/entry/start.C-zG_9lQ.js","_app/immutable/chunks/B9FaNPdH.js","_app/immutable/chunks/BRKPnRWf.js","_app/immutable/chunks/CjSE9txk.js","_app/immutable/entry/app.dvTFHfOJ.js","_app/immutable/chunks/pkLQLtkm.js","_app/immutable/chunks/BRKPnRWf.js","_app/immutable/chunks/BqTMxKvq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B8CSoV-B.js","_app/immutable/chunks/1wnZ02Xi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/edit",
				pattern: /^\/edit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/view",
				pattern: /^\/view\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
