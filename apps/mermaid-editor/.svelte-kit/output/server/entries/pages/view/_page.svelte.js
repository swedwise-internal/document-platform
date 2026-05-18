import { Q as head, y as pop, w as push } from "../../../chunks/index2.js";
import { V as View } from "../../../chunks/View.js";
import "../../../chunks/state.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<meta name="robots" content="noindex"/>`);
  });
  View($$payload, { shouldShowGrid: false });
  pop();
}
export {
  _page as default
};
