import { w as push, z as ensure_array_like, A as attr_class, B as attr, D as clsx, y as pop, E as hasContext, F as getContext, x as setContext, G as attr_style, I as spread_props, J as escape_html, K as spread_attributes, M as run, N as stringify, O as fallback, P as bind_props, Q as head, R as store_get, S as unsubscribe_stores } from "../../chunks/index2.js";
import { c as createSubscriber, t as toastState, a as cn, S as SonnerState, s as setInitialMode, d as defineConfig } from "../../chunks/mode.js";
import "clsx";
import { d as disableTransitions, t as themeColors, a as darkClassNames, l as lightClassNames, m as modeStorageKey, b as themeStorageKey, c as derivedMode } from "../../chunks/state.js";
import { w as writable } from "../../chunks/index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const bars = Array(12).fill(0);
function Loader($$payload, $$props) {
  push();
  let { visible, class: className } = $$props;
  const each_array = ensure_array_like(bars);
  $$payload.out.push(`<div${attr_class(clsx(["sonner-loading-wrapper", className].filter(Boolean).join(" ")))}${attr("data-visible", visible)}><div class="sonner-spinner"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out.push(`<div class="sonner-loading-bar"></div>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
const defaultWindow = void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement(this.#document);
  }
}
new ActiveElement();
class Context {
  #name;
  #key;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    this.#name = name;
    this.#key = Symbol(name);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#key;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(this.#key);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(this.#key);
    if (context === void 0) {
      throw new Error(`Context "${this.#name}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback2) {
    const context = getContext(this.#key);
    if (context === void 0) {
      return fallback2;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(this.#key, context);
  }
}
const sonnerContext = new Context("<Toaster/>");
function isAction(action) {
  return action.label !== void 0;
}
const TOAST_LIFETIME$1 = 4e3;
const GAP$1 = 14;
const TIME_BEFORE_UNMOUNT = 200;
const DEFAULT_TOAST_CLASSES = {
  toast: "",
  title: "",
  description: "",
  loader: "",
  closeButton: "",
  cancelButton: "",
  actionButton: "",
  action: "",
  warning: "",
  error: "",
  success: "",
  default: "",
  info: "",
  loading: ""
};
function Toast($$payload, $$props) {
  push();
  let {
    toast,
    index,
    expanded,
    invert: invertFromToaster,
    position,
    visibleToasts,
    expandByDefault,
    closeButton: closeButtonFromToaster,
    interacting,
    cancelButtonStyle = "",
    actionButtonStyle = "",
    duration: durationFromToaster,
    descriptionClass = "",
    classes: classesProp,
    unstyled = false,
    loadingIcon,
    successIcon,
    errorIcon,
    warningIcon,
    closeIcon,
    infoIcon,
    defaultRichColors = false,
    swipeDirections: swipeDirectionsProp,
    closeButtonAriaLabel,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
  let mounted = false;
  let removed = false;
  let swiping = false;
  let swipeOut = false;
  let isSwiped = false;
  let offsetBeforeRemove = 0;
  let initialHeight = 0;
  toast.duration || durationFromToaster || TOAST_LIFETIME$1;
  let swipeOutDirection = null;
  const isFront = index === 0;
  const isVisible = index + 1 <= visibleToasts;
  const toastType = toast.type;
  const dismissable = toast.dismissable !== false;
  const toastClass = toast.class || "";
  const toastDescriptionClass = toast.descriptionClass || "";
  const heightIndex = toastState.heights.findIndex((height) => height.toastId === toast.id) || 0;
  const closeButton = toast.closeButton ?? closeButtonFromToaster;
  toast.duration ?? durationFromToaster ?? TOAST_LIFETIME$1;
  const coords = position.split("-");
  const toastsHeightBefore = toastState.heights.reduce(
    (prev, curr, reducerIndex) => {
      if (reducerIndex >= heightIndex) return prev;
      return prev + curr.height;
    },
    0
  );
  const invert = toast.invert || invertFromToaster;
  const disabled = toastType === "loading";
  const classes = { ...defaultClasses, ...classesProp };
  toast.title;
  toast.description;
  const offset = Math.round(heightIndex * GAP$1 + toastsHeightBefore);
  function deleteToast() {
    removed = true;
    offsetBeforeRemove = offset;
    toastState.removeHeight(toast.id);
    setTimeout(
      () => {
        toastState.remove(toast.id);
      },
      TIME_BEFORE_UNMOUNT
    );
  }
  toast.promise && toastType === "loading" || toast.duration === Number.POSITIVE_INFINITY;
  const icon = (() => {
    if (toast.icon) return toast.icon;
    if (toastType === "success") return successIcon;
    if (toastType === "error") return errorIcon;
    if (toastType === "warning") return warningIcon;
    if (toastType === "info") return infoIcon;
    if (toastType === "loading") return loadingIcon;
    return null;
  })();
  function LoadingIcon($$payload2) {
    if (loadingIcon) {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<div${attr_class(clsx(cn(classes?.loader, toast?.classes?.loader, "sonner-loader")))}${attr("data-visible", toastType === "loading")}>`);
      loadingIcon($$payload2);
      $$payload2.out.push(`<!----></div>`);
    } else {
      $$payload2.out.push("<!--[!-->");
      Loader($$payload2, {
        class: cn(classes?.loader, toast.classes?.loader),
        visible: toastType === "loading"
      });
    }
    $$payload2.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<li${attr("tabindex", 0)}${attr_class(clsx(cn(restProps.class, toastClass, classes?.toast, toast?.classes?.toast, classes?.[toastType], toast?.classes?.[toastType])))} data-sonner-toast=""${attr("data-rich-colors", toast.richColors ?? defaultRichColors)}${attr("data-styled", !(toast.component || toast.unstyled || unstyled))}${attr("data-mounted", mounted)}${attr("data-promise", Boolean(toast.promise))}${attr("data-swiped", isSwiped)}${attr("data-removed", removed)}${attr("data-visible", isVisible)}${attr("data-y-position", coords[0])}${attr("data-x-position", coords[1])}${attr("data-index", index)}${attr("data-front", isFront)}${attr("data-swiping", swiping)}${attr("data-dismissable", dismissable)}${attr("data-type", toastType)}${attr("data-invert", invert)}${attr("data-swipe-out", swipeOut)}${attr("data-swipe-direction", swipeOutDirection)}${attr("data-expanded", Boolean(expanded || expandByDefault && mounted))}${attr_style(`${restProps.style} ${toast.style}`, {
    "--index": index,
    "--toasts-before": index,
    "--z-index": toastState.toasts.length - index,
    "--offset": `${removed ? offsetBeforeRemove : offset}px`,
    "--initial-height": expandByDefault ? "auto" : `${initialHeight}px`
  })}>`);
  if (closeButton && !toast.component && toastType !== "loading" && closeIcon !== null) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button${attr("aria-label", closeButtonAriaLabel)}${attr("data-disabled", disabled)} data-close-button=""${attr_class(clsx(cn(classes?.closeButton, toast?.classes?.closeButton)))}>`);
    closeIcon?.($$payload);
    $$payload.out.push(`<!----></button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (toast.component) {
    $$payload.out.push("<!--[-->");
    const Component = toast.component;
    $$payload.out.push(`<!---->`);
    Component($$payload, spread_props([toast.componentProps, { closeToast: deleteToast }]));
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    if ((toastType || toast.icon || toast.promise) && toast.icon !== null && (icon !== null || toast.icon)) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div data-icon=""${attr_class(clsx(cn(classes?.icon, toast?.classes?.icon)))}>`);
      if (toast.promise || toastType === "loading") {
        $$payload.out.push("<!--[-->");
        if (toast.icon) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<!---->`);
          toast.icon($$payload, {});
          $$payload.out.push(`<!---->`);
        } else {
          $$payload.out.push("<!--[!-->");
          LoadingIcon($$payload);
        }
        $$payload.out.push(`<!--]-->`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (toast.type !== "loading") {
        $$payload.out.push("<!--[-->");
        if (toast.icon) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<!---->`);
          toast.icon($$payload, {});
          $$payload.out.push(`<!---->`);
        } else {
          $$payload.out.push("<!--[!-->");
          if (toastType === "success") {
            $$payload.out.push("<!--[-->");
            successIcon?.($$payload);
            $$payload.out.push(`<!---->`);
          } else {
            $$payload.out.push("<!--[!-->");
            if (toastType === "error") {
              $$payload.out.push("<!--[-->");
              errorIcon?.($$payload);
              $$payload.out.push(`<!---->`);
            } else {
              $$payload.out.push("<!--[!-->");
              if (toastType === "warning") {
                $$payload.out.push("<!--[-->");
                warningIcon?.($$payload);
                $$payload.out.push(`<!---->`);
              } else {
                $$payload.out.push("<!--[!-->");
                if (toastType === "info") {
                  $$payload.out.push("<!--[-->");
                  infoIcon?.($$payload);
                  $$payload.out.push(`<!---->`);
                } else {
                  $$payload.out.push("<!--[!-->");
                }
                $$payload.out.push(`<!--]-->`);
              }
              $$payload.out.push(`<!--]-->`);
            }
            $$payload.out.push(`<!--]-->`);
          }
          $$payload.out.push(`<!--]-->`);
        }
        $$payload.out.push(`<!--]-->`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <div data-content=""><div data-title=""${attr_class(clsx(cn(classes?.title, toast?.classes?.title)))}>`);
    if (toast.title) {
      $$payload.out.push("<!--[-->");
      if (typeof toast.title !== "string") {
        $$payload.out.push("<!--[-->");
        const Title = toast.title;
        $$payload.out.push(`<!---->`);
        Title($$payload, spread_props([toast.componentProps]));
        $$payload.out.push(`<!---->`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`${escape_html(toast.title)}`);
      }
      $$payload.out.push(`<!--]-->`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div> `);
    if (toast.description) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div data-description=""${attr_class(clsx(cn(descriptionClass, toastDescriptionClass, classes?.description, toast.classes?.description)))}>`);
      if (typeof toast.description !== "string") {
        $$payload.out.push("<!--[-->");
        const Description = toast.description;
        $$payload.out.push(`<!---->`);
        Description($$payload, spread_props([toast.componentProps]));
        $$payload.out.push(`<!---->`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`${escape_html(toast.description)}`);
      }
      $$payload.out.push(`<!--]--></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div> `);
    if (toast.cancel) {
      $$payload.out.push("<!--[-->");
      if (typeof toast.cancel === "function") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<!---->`);
        toast.cancel($$payload, {});
        $$payload.out.push(`<!---->`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (isAction(toast.cancel)) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx(cn(classes?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    if (toast.action) {
      $$payload.out.push("<!--[-->");
      if (typeof toast.action === "function") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<!---->`);
        toast.action($$payload, {});
        $$payload.out.push(`<!---->`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (isAction(toast.action)) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx(cn(classes?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></li>`);
  pop();
}
function SuccessIcon($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
}
function ErrorIcon($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
}
function WarningIcon($$payload) {
  $$payload.out.push(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
}
function InfoIcon($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
}
function CloseIcon($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}
const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "24px";
const MOBILE_VIEWPORT_OFFSET = "16px";
const TOAST_LIFETIME = 4e3;
const TOAST_WIDTH = 356;
const GAP = 14;
const DARK = "dark";
const LIGHT = "light";
function getOffsetObject(defaultOffset, mobileOffset) {
  const styles = {};
  [defaultOffset, mobileOffset].forEach((offset, index) => {
    const isMobile = index === 1;
    const prefix = isMobile ? "--mobile-offset" : "--offset";
    const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
    function assignAll(offset2) {
      ["top", "right", "bottom", "left"].forEach((key) => {
        styles[`${prefix}-${key}`] = typeof offset2 === "number" ? `${offset2}px` : offset2;
      });
    }
    if (typeof offset === "number" || typeof offset === "string") {
      assignAll(offset);
    } else if (typeof offset === "object") {
      ["top", "right", "bottom", "left"].forEach((key) => {
        const value = offset[key];
        if (value === void 0) {
          styles[`${prefix}-${key}`] = defaultValue;
        } else {
          styles[`${prefix}-${key}`] = typeof value === "number" ? `${value}px` : value;
        }
      });
    } else {
      assignAll(defaultValue);
    }
  });
  return styles;
}
function Toaster($$payload, $$props) {
  push();
  function getInitialTheme(t) {
    if (t !== "system") return t;
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK;
      }
      return LIGHT;
    }
    return LIGHT;
  }
  let {
    invert = false,
    position = "bottom-right",
    hotkey = ["altKey", "KeyT"],
    expand = false,
    closeButton = false,
    offset = VIEWPORT_OFFSET,
    mobileOffset = MOBILE_VIEWPORT_OFFSET,
    theme = "light",
    richColors = false,
    duration = TOAST_LIFETIME,
    visibleToasts = VISIBLE_TOASTS_AMOUNT,
    toastOptions = {},
    dir = "auto",
    gap = GAP,
    loadingIcon: loadingIconProp,
    successIcon: successIconProp,
    errorIcon: errorIconProp,
    warningIcon: warningIconProp,
    closeIcon: closeIconProp,
    infoIcon: infoIconProp,
    containerAriaLabel = "Notifications",
    class: className,
    closeButtonAriaLabel = "Close toast",
    onblur,
    onfocus,
    onmouseenter,
    onmousemove,
    onmouseleave,
    ondragend,
    onpointerdown,
    onpointerup,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function getDocumentDirection() {
    if (dir !== "auto") return dir;
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      run(() => dir = window.getComputedStyle(document.documentElement).direction ?? "ltr");
      return dir;
    }
    run(() => dir = dirAttribute);
    return dirAttribute;
  }
  const possiblePositions = Array.from(new Set([
    position,
    ...toastState.toasts.filter((toast) => toast.position).map((toast) => toast.position)
  ].filter(Boolean)));
  let expanded = false;
  let interacting = false;
  let actualTheme = getInitialTheme(theme);
  const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  sonnerContext.set(new SonnerState());
  $$payload.out.push(`<section${attr("aria-label", `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel)}`)}${attr("tabindex", -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g">`);
  if (toastState.toasts.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(possiblePositions);
    $$payload.out.push(`<!--[-->`);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let position2 = each_array[index];
      const [y, x] = position2.split("-");
      const offsetObject = getOffsetObject(offset, mobileOffset);
      const each_array_1 = ensure_array_like(toastState.toasts.filter((toast) => !toast.position && index === 0 || toast.position === position2));
      $$payload.out.push(`<ol${spread_attributes(
        {
          tabindex: -1,
          dir: getDocumentDirection(),
          class: clsx(className),
          "data-sonner-toaster": true,
          "data-sonner-theme": actualTheme,
          "data-y-position": y,
          "data-x-position": x,
          style: restProps.style,
          ...restProps
        },
        "svelte-tppj9g",
        void 0,
        {
          "--front-toast-height": `${toastState.heights[0]?.height}px`,
          "--width": `${TOAST_WIDTH}px`,
          "--gap": `${gap}px`,
          "--offset-top": offsetObject["--offset-top"],
          "--offset-right": offsetObject["--offset-right"],
          "--offset-bottom": offsetObject["--offset-bottom"],
          "--offset-left": offsetObject["--offset-left"],
          "--mobile-offset-top": offsetObject["--mobile-offset-top"],
          "--mobile-offset-right": offsetObject["--mobile-offset-right"],
          "--mobile-offset-bottom": offsetObject["--mobile-offset-bottom"],
          "--mobile-offset-left": offsetObject["--mobile-offset-left"]
        }
      )}><!--[-->`);
      for (let index2 = 0, $$length2 = each_array_1.length; index2 < $$length2; index2++) {
        let toast = each_array_1[index2];
        {
          let successIcon = function($$payload2) {
            if (successIconProp) {
              $$payload2.out.push("<!--[-->");
              successIconProp?.($$payload2);
              $$payload2.out.push(`<!---->`);
            } else {
              $$payload2.out.push("<!--[!-->");
              if (successIconProp !== null) {
                $$payload2.out.push("<!--[-->");
                SuccessIcon($$payload2);
              } else {
                $$payload2.out.push("<!--[!-->");
              }
              $$payload2.out.push(`<!--]-->`);
            }
            $$payload2.out.push(`<!--]-->`);
          }, errorIcon = function($$payload2) {
            if (errorIconProp) {
              $$payload2.out.push("<!--[-->");
              errorIconProp?.($$payload2);
              $$payload2.out.push(`<!---->`);
            } else {
              $$payload2.out.push("<!--[!-->");
              if (errorIconProp !== null) {
                $$payload2.out.push("<!--[-->");
                ErrorIcon($$payload2);
              } else {
                $$payload2.out.push("<!--[!-->");
              }
              $$payload2.out.push(`<!--]-->`);
            }
            $$payload2.out.push(`<!--]-->`);
          }, warningIcon = function($$payload2) {
            if (warningIconProp) {
              $$payload2.out.push("<!--[-->");
              warningIconProp?.($$payload2);
              $$payload2.out.push(`<!---->`);
            } else {
              $$payload2.out.push("<!--[!-->");
              if (warningIconProp !== null) {
                $$payload2.out.push("<!--[-->");
                WarningIcon($$payload2);
              } else {
                $$payload2.out.push("<!--[!-->");
              }
              $$payload2.out.push(`<!--]-->`);
            }
            $$payload2.out.push(`<!--]-->`);
          }, infoIcon = function($$payload2) {
            if (infoIconProp) {
              $$payload2.out.push("<!--[-->");
              infoIconProp?.($$payload2);
              $$payload2.out.push(`<!---->`);
            } else {
              $$payload2.out.push("<!--[!-->");
              if (infoIconProp !== null) {
                $$payload2.out.push("<!--[-->");
                InfoIcon($$payload2);
              } else {
                $$payload2.out.push("<!--[!-->");
              }
              $$payload2.out.push(`<!--]-->`);
            }
            $$payload2.out.push(`<!--]-->`);
          }, closeIcon = function($$payload2) {
            if (closeIconProp) {
              $$payload2.out.push("<!--[-->");
              closeIconProp?.($$payload2);
              $$payload2.out.push(`<!---->`);
            } else {
              $$payload2.out.push("<!--[!-->");
              if (closeIconProp !== null) {
                $$payload2.out.push("<!--[-->");
                CloseIcon($$payload2);
              } else {
                $$payload2.out.push("<!--[!-->");
              }
              $$payload2.out.push(`<!--]-->`);
            }
            $$payload2.out.push(`<!--]-->`);
          };
          Toast($$payload, {
            index: index2,
            toast,
            defaultRichColors: richColors,
            duration: toastOptions?.duration ?? duration,
            class: toastOptions?.class ?? "",
            descriptionClass: toastOptions?.descriptionClass || "",
            invert,
            visibleToasts,
            closeButton,
            interacting,
            position: position2,
            style: toastOptions?.style ?? "",
            classes: toastOptions.classes || {},
            unstyled: toastOptions.unstyled ?? false,
            cancelButtonStyle: toastOptions?.cancelButtonStyle ?? "",
            actionButtonStyle: toastOptions?.actionButtonStyle ?? "",
            closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
            expandByDefault: expand,
            expanded,
            loadingIcon: loadingIconProp,
            successIcon,
            errorIcon,
            warningIcon,
            infoIcon,
            closeIcon,
            $$slots: {
              successIcon: true,
              errorIcon: true,
              warningIcon: true,
              infoIcon: true,
              closeIcon: true
            }
          });
        }
      }
      $$payload.out.push(`<!--]--></ol>`);
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
function Mode_watcher_lite($$payload, $$props) {
  push();
  let themeColors2 = fallback($$props["themeColors"], () => void 0, true);
  if (themeColors2) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<meta name="theme-color"${attr("content", themeColors2.dark)}/>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { themeColors: themeColors2 });
  pop();
}
function Mode_watcher_full($$payload, $$props) {
  push();
  let trueNonce = fallback($$props["trueNonce"], "");
  let initConfig = $$props["initConfig"];
  let themeColors2 = fallback($$props["themeColors"], () => void 0, true);
  head($$payload, ($$payload2) => {
    if (themeColors2) {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<meta name="theme-color"${attr("content", themeColors2.dark)}/>`);
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]--> ${html(`<script${trueNonce ? ` nonce=${trueNonce}` : ""}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`)}`);
  });
  bind_props($$props, { trueNonce, initConfig, themeColors: themeColors2 });
  pop();
}
function Mode_watcher($$payload, $$props) {
  push();
  let trueNonce;
  let track = fallback($$props["track"], true);
  let defaultMode = fallback($$props["defaultMode"], "system");
  let themeColors$1 = fallback($$props["themeColors"], () => void 0, true);
  let disableTransitions$1 = fallback($$props["disableTransitions"], true);
  let darkClassNames$1 = fallback($$props["darkClassNames"], () => ["dark"], true);
  let lightClassNames$1 = fallback($$props["lightClassNames"], () => [], true);
  let defaultTheme = fallback($$props["defaultTheme"], "");
  let nonce = fallback($$props["nonce"], "");
  let themeStorageKey$1 = fallback($$props["themeStorageKey"], "mode-watcher-theme");
  let modeStorageKey$1 = fallback($$props["modeStorageKey"], "mode-watcher-mode");
  let disableHeadScriptInjection = fallback($$props["disableHeadScriptInjection"], false);
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  disableTransitions.set(disableTransitions$1);
  themeColors.set(themeColors$1);
  darkClassNames.set(darkClassNames$1);
  lightClassNames.set(lightClassNames$1);
  modeStorageKey.set(modeStorageKey$1);
  themeStorageKey.set(themeStorageKey$1);
  trueNonce = typeof window === "undefined" ? nonce : "";
  if (disableHeadScriptInjection) {
    $$payload.out.push("<!--[-->");
    Mode_watcher_lite($$payload, { themeColors: themeColors$1 });
  } else {
    $$payload.out.push("<!--[!-->");
    Mode_watcher_full($$payload, { trueNonce, initConfig, themeColors: themeColors$1 });
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, {
    track,
    defaultMode,
    themeColors: themeColors$1,
    disableTransitions: disableTransitions$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    nonce,
    themeStorageKey: themeStorageKey$1,
    modeStorageKey: modeStorageKey$1,
    disableHeadScriptInjection
  });
  pop();
}
function Sonner_1($$payload, $$props) {
  var $$store_subs;
  let { $$slots, $$events, ...restProps } = $$props;
  Toaster($$payload, spread_props([
    {
      theme: store_get($$store_subs ??= {}, "$mode", derivedMode),
      class: "toaster group",
      toastOptions: {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    },
    restProps
  ]));
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
const defaultLoading = {
  loading: false
};
const loadingStateStore = writable(defaultLoading);
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  Mode_watcher($$payload, {});
  $$payload.out.push(`<!----> `);
  Sonner_1($$payload, {});
  $$payload.out.push(`<!----> <main class="h-[100dvh] svelte-9mgnl3">`);
  children($$payload);
  $$payload.out.push(`<!----></main> `);
  if (store_get($$store_subs ??= {}, "$loadingStateStore", loadingStateStore).loading) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="absolute top-0 left-0 z-50 flex h-screen w-screen justify-center bg-gray-600 align-middle opacity-50 svelte-9mgnl3"><div class="my-auto text-4xl font-bold text-indigo-100 svelte-9mgnl3"><div class="loader mx-auto svelte-9mgnl3"></div> <div class="svelte-9mgnl3">${escape_html(store_get($$store_subs ??= {}, "$loadingStateStore", loadingStateStore).message)}</div></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
