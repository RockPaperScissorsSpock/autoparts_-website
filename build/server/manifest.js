const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["barcode.png","favicon.png","logo.svg","qrcode1.png","qrcode2.png","robots.txt","test.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CbcJ8M0-.js","app":"_app/immutable/entry/app.DdLsbKC4.js","imports":["_app/immutable/entry/start.CbcJ8M0-.js","_app/immutable/chunks/entry.Dlt0aQ84.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/entry/app.DdLsbKC4.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-ssR-wvcl.js')),
			__memo(() => import('./chunks/1-oUMdm-Cp.js')),
			__memo(() => import('./chunks/2-nTRtQ7Iy.js')),
			__memo(() => import('./chunks/3-DtCm_Wlr.js')),
			__memo(() => import('./chunks/4-DLj9o0nk.js')),
			__memo(() => import('./chunks/5-CbmpkSmR.js')),
			__memo(() => import('./chunks/6-DLHXxr2Z.js')),
			__memo(() => import('./chunks/7-C25bMRMq.js')),
			__memo(() => import('./chunks/8-Bo0KFo3e.js')),
			__memo(() => import('./chunks/9-Vl7NVmWy.js')),
			__memo(() => import('./chunks/10-KUGgIJcp.js')),
			__memo(() => import('./chunks/11-ZKesznBh.js')),
			__memo(() => import('./chunks/12-Bz_Us_TQ.js')),
			__memo(() => import('./chunks/13-UOON7o7n.js')),
			__memo(() => import('./chunks/14-ellqmloN.js')),
			__memo(() => import('./chunks/15-DPkKW3NB.js')),
			__memo(() => import('./chunks/16-FnwJpBL4.js')),
			__memo(() => import('./chunks/17-BAqRLs24.js')),
			__memo(() => import('./chunks/18-QXjgNArF.js')),
			__memo(() => import('./chunks/19-CVbChb6I.js')),
			__memo(() => import('./chunks/20-B3rq0pZd.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/administration",
				pattern: /^\/administration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/administration/[remove]",
				pattern: /^\/administration\/([^/]+?)\/?$/,
				params: [{"name":"remove","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/checkout/[status]",
				pattern: /^\/checkout\/([^/]+?)\/?$/,
				params: [{"name":"status","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/employee",
				pattern: /^\/employee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/order",
				pattern: /^\/order\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/order/customer",
				pattern: /^\/order\/customer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/order/customer/[manage]",
				pattern: /^\/order\/customer\/([^/]+?)\/?$/,
				params: [{"name":"manage","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/order/employee",
				pattern: /^\/order\/employee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/order/employee/[manage]",
				pattern: /^\/order\/employee\/([^/]+?)\/?$/,
				params: [{"name":"manage","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/product",
				pattern: /^\/product\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/product/[slug]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/test/ccprocessor",
				pattern: /^\/test\/ccprocessor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/test/legacy",
				pattern: /^\/test\/legacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/test/mail",
				pattern: /^\/test\/mail\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/test/pdf",
				pattern: /^\/test\/pdf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/warehouse",
				pattern: /^\/warehouse\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
