

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "csr": true,
  "ssr": false,
  "trailingSlash": "ignore"
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.9Yd50-tR.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BRKPnRWf.js","_app/immutable/chunks/B8CSoV-B.js","_app/immutable/chunks/BqTMxKvq.js","_app/immutable/chunks/pkLQLtkm.js","_app/immutable/chunks/cv6B8TTb.js","_app/immutable/chunks/Bm9TvUvh.js","_app/immutable/chunks/1wnZ02Xi.js","_app/immutable/chunks/DHKeha_7.js","_app/immutable/chunks/CjSE9txk.js"];
export const stylesheets = ["_app/immutable/assets/0.wSHcoOfl.css"];
export const fonts = ["_app/immutable/assets/recursive-vietnamese-crsv-normal.C_I92Ijb.woff2","_app/immutable/assets/recursive-latin-ext-crsv-normal.o5HGQk-q.woff2","_app/immutable/assets/recursive-latin-crsv-normal.DIT8G0YR.woff2"];
