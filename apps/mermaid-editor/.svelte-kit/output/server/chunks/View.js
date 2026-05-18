import { w as push, ac as await_block, P as bind_props, y as pop, a0 as copy_payload, a1 as assign_payload, A as attr_class, D as clsx, R as store_get, S as unsubscribe_stores } from "./index2.js";
import debounce from "lodash-es/debounce.js";
import { c as derivedMode } from "./state.js";
import Hammer from "hammerjs";
import panzoom from "svg-pan-zoom";
import "svg2roughjs";
let updater;
const renderDelay = 1e3;
debounce(() => {
  updater();
}, renderDelay);
const waitForRender = () => {
  return Promise.resolve();
};
class PanZoomState {
  pan;
  zoom;
  pzoom;
  isDirty = false;
  resizeObserver;
  isPanEnabled;
  onPanZoomChange;
  constructor() {
    this.isPanEnabled = true;
    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
      if (!this.isDirty) {
        this.reset();
      }
    });
  }
  updateElement(diagramView, { pan, zoom }) {
    this.pzoom?.destroy();
    let hammer;
    this.pzoom = panzoom(diagramView, {
      center: true,
      controlIconsEnabled: false,
      customEventsHandler: {
        haltEventListeners: ["touchstart", "touchend", "touchmove", "touchleave", "touchcancel"],
        init: function(options) {
          const instance = options.instance;
          let initialScale = 1;
          let pannedX = 0;
          let pannedY = 0;
          hammer = new Hammer(options.svgElement);
          const resetPanned = () => {
            pannedX = 0;
            pannedY = 0;
          };
          const handlePan = (event) => {
            instance.panBy({ x: event.deltaX - pannedX, y: event.deltaY - pannedY });
            pannedX = event.deltaX;
            pannedY = event.deltaY;
          };
          hammer.get("pinch").set({ enable: true });
          hammer.on("panstart panmove", function(event) {
            if (event.type === "panstart") {
              resetPanned();
            }
            handlePan(event);
          });
          hammer.on("pinchstart pinchmove", function(event) {
            if (event.type === "pinchstart") {
              initialScale = instance.getZoom();
              resetPanned();
            }
            instance.zoomAtPoint(initialScale * event.scale, {
              x: event.center.x,
              y: event.center.y
            });
            handlePan(event);
          });
          options.svgElement.addEventListener("touchmove", function(event) {
            event.preventDefault();
          });
        },
        destroy: function() {
          hammer?.destroy();
        }
      },
      fit: true,
      maxZoom: 12,
      minZoom: 0.2,
      onPan: (pan2) => {
        this.pan = pan2;
        this.zoom = this.pzoom?.getZoom();
        this.isDirty = true;
        if (this.zoom) {
          this.onPanZoomChange?.(this.pan, this.zoom);
        }
      },
      onZoom: (zoom2) => {
        this.zoom = zoom2;
        this.pan = this.pzoom?.getPan();
        this.isDirty = true;
        if (this.pan) {
          this.onPanZoomChange?.(this.pan, this.zoom);
        }
      },
      panEnabled: true,
      zoomEnabled: true
    });
    this.pzoom.disableDblClickZoom();
    this.resizeObserver.disconnect();
    this.resizeObserver.observe(diagramView);
    if (pan && zoom && Number.isFinite(zoom) && Number.isFinite(pan.x) && Number.isFinite(pan.y)) {
      this.restorePanZoom(pan, zoom);
    } else {
      this.reset();
    }
    if (this.isPanEnabled) {
      this.pzoom.enablePan();
      this.pzoom.enableZoom();
    } else {
      this.pzoom.disableZoom();
      this.pzoom.disablePan();
    }
    if (pan === void 0 && zoom === void 0) {
      this.reset();
    }
  }
  restorePanZoom(pan, zoom) {
    if (!this.pzoom) {
      console.error("PanZoomState.restorePanZoom: pzoom is not initialized");
      return;
    }
    this.pzoom.zoom(zoom);
    this.pzoom.pan(pan);
  }
  resize() {
    this.pzoom?.resize();
    if (!this.isDirty) {
      this.reset();
    }
  }
  zoomIn() {
    this.pzoom?.zoomIn();
  }
  zoomOut() {
    this.pzoom?.zoomOut();
  }
  reset() {
    this.pzoom?.reset();
    this.pzoom?.zoom(0.875);
    this.isDirty = false;
  }
}
function FontAwesome($$payload, $$props) {
  push();
  let lazyLoadFontAwesomeCSS = import("./FontAwesomeCSS.js");
  let fontsLoaded = (async () => {
    await lazyLoadFontAwesomeCSS;
    await Promise.allSettled(Array.from(document.fonts, (font) => font.load()));
  })();
  async function waitForFontAwesomeToLoad() {
    return await fontsLoaded;
  }
  await_block($$payload, lazyLoadFontAwesomeCSS, () => {
  }, (FontAwesomeCSS) => {
    FontAwesomeCSS.default($$payload, {});
  });
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { waitForFontAwesomeToLoad });
  pop();
}
function View($$payload, $$props) {
  push();
  var $$store_subs;
  let { panZoomState = new PanZoomState(), shouldShowGrid = true } = $$props;
  let error = false;
  let waitForFontAwesomeToLoad = void 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    FontAwesome($$payload2, {
      get waitForFontAwesomeToLoad() {
        return waitForFontAwesomeToLoad;
      },
      set waitForFontAwesomeToLoad($$value) {
        waitForFontAwesomeToLoad = $$value;
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----> <div id="view"${attr_class(
      clsx([
        "h-full w-full",
        shouldShowGrid && `grid-bg-${store_get($$store_subs ??= {}, "$mode", derivedMode)}`,
        error
      ]),
      "svelte-rx3fj1"
    )}><div id="container" class="h-full overflow-auto"></div></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  PanZoomState as P,
  View as V,
  waitForRender as w
};
