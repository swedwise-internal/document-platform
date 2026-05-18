import { F as getContext, R as store_get, J as escape_html, S as unsubscribe_stores, y as pop, w as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$page", page).status !== 404) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="container mx-auto p-8"><h1 class="mb-4 text-2xl font-bold">Error ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p class="mb-4">${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message || "An unexpected error occurred")}</p> <a href="/" class="text-blue-500 hover:underline">Return to Home</a></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
