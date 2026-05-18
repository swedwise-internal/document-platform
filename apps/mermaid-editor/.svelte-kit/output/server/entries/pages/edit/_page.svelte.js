import { U as is_array, V as get_prototype_of, W as object_prototype, X as ATTACHMENT_KEY, Y as current_component, K as spread_attributes, w as push, D as clsx$1, P as bind_props, y as pop, E as hasContext, F as getContext, x as setContext, Z as derived, M as run, _ as props_id, $ as getAllContexts, I as spread_props, a0 as copy_payload, a1 as assign_payload, z as ensure_array_like, J as escape_html, A as attr_class, R as store_get, B as attr, S as unsubscribe_stores, N as stringify, a2 as store_mutate, a3 as sanitize_props, a4 as rest_props, O as fallback, a5 as element$1, a6 as slot } from "../../../chunks/index2.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { c as createSubscriber, b as SvelteMap, e as toast, f as setMode } from "../../../chunks/mode.js";
import { e as copyToClipboard, s as stateStore, u as urlsStore, g as getDomain, T as TID, i as inputStateStore, f as standardizeDiagramType, h as loaderHistoryStore, j as historyModeStore, k as historyStore, n as clearHistoryData, r as restoreHistory, o as getStateString, p as getPreviousState, q as addHistoryEntry, c as derivedMode, M as MCBaseURL, C, v as persist, w as localStorage$1, x as getSampleDiagrams, y as updateCode, z as defaultState, A as updateCodeStore } from "../../../chunks/state.js";
import { B as BROWSER } from "../../../chunks/false.js";
import { o as on } from "../../../chunks/events.js";
import { w as waitForRender, P as PanZoomState, V as View } from "../../../chunks/View.js";
import dayjs from "dayjs";
import { toBase64 } from "js-base64";
import "monaco-editor";
import { debounce as debounce$2 } from "lodash-es";
import dayjsRelativeTime from "dayjs/plugin/relativeTime.js";
import { g as get$2, w as writable } from "../../../chunks/index.js";
import duration from "dayjs/plugin/duration.js";
const empty = [];
function snapshot(value, skip_warning = false, no_tojson = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty, null, no_tojson);
}
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element2 = value[i];
        if (i in value) {
          copy[i] = clone(element2, cloned, path, paths, null, no_tojson);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key in value) {
        copy[key] = clone(
          // @ts-expect-error
          value[key],
          cloned,
          path,
          paths,
          null,
          no_tojson
        );
      }
      return copy;
    }
    if (value instanceof Date) {
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function" && !no_tojson) {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function lifecycle_function_unavailable(name) {
  const error = new Error(`lifecycle_function_unavailable
\`${name}(...)\` is not available on the server
https://svelte.dev/e/lifecycle_function_unavailable`);
  error.name = "Svelte error";
  throw error;
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function mount() {
  lifecycle_function_unavailable("mount");
}
function unmount() {
  lifecycle_function_unavailable("unmount");
}
async function tick() {
}
const env = {
  docsUrl: "https://mermaid.js.org",
  isEnabledMermaidChartLinks: false
};
function Collapse_all_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m12 17.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575L17.3 19.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm0-10.8l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.875 3.875Q12.85 8.55 12 8.55t-1.425-.575L6.7 4.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path></svg>`);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = tv({
  base: "focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      accent: "bg-accent text-accent-foreground hover:bg-accent/80 shadow-sm",
      ghost: "hover:bg-primary hover:text-primary-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-8"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$payload, $$props) {
  push();
  let {
    class: className,
    variant = "default",
    size: size2 = "default",
    ref = null,
    href,
    type = "button",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (href) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${spread_attributes(
      {
        class: clsx$1(cn(buttonVariants({ variant, size: size2 }), className)),
        href,
        ...restProps
      },
      null
    )}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></a>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes(
      {
        class: clsx$1(cn(buttonVariants({ variant, size: size2 }), className)),
        type,
        ...restProps
      },
      null
    )}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function isFunction$1(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
function boxWith(getter, setter) {
  const derived2 = getter();
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived2;
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction$1(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        handler.current?.call(this, e);
      }
    }
  };
}
var cjs = {};
var inlineStyleParser;
var hasRequiredInlineStyleParser;
function requireInlineStyleParser() {
  if (hasRequiredInlineStyleParser) return inlineStyleParser;
  hasRequiredInlineStyleParser = 1;
  var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  var NEWLINE_REGEX = /\n/g;
  var WHITESPACE_REGEX = /^\s*/;
  var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var COLON_REGEX = /^:\s*/;
  var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var SEMICOLON_REGEX = /^[;\s]*/;
  var TRIM_REGEX = /^\s+|\s+$/g;
  var NEWLINE = "\n";
  var FORWARD_SLASH = "/";
  var ASTERISK = "*";
  var EMPTY_STRING = "";
  var TYPE_COMMENT = "comment";
  var TYPE_DECLARATION = "declaration";
  inlineStyleParser = function(style, options) {
    if (typeof style !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (!style) return [];
    options = options || {};
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
      var lines = str.match(NEWLINE_REGEX);
      if (lines) lineno += lines.length;
      var i = str.lastIndexOf(NEWLINE);
      column = ~i ? str.length - i : column + str.length;
    }
    function position() {
      var start = { line: lineno, column };
      return function(node) {
        node.position = new Position(start);
        whitespace();
        return node;
      };
    }
    function Position(start) {
      this.start = start;
      this.end = { line: lineno, column };
      this.source = options.source;
    }
    Position.prototype.content = style;
    function error(msg) {
      var err = new Error(
        options.source + ":" + lineno + ":" + column + ": " + msg
      );
      err.reason = msg;
      err.filename = options.source;
      err.line = lineno;
      err.column = column;
      err.source = style;
      if (options.silent) ;
      else {
        throw err;
      }
    }
    function match(re) {
      var m = re.exec(style);
      if (!m) return;
      var str = m[0];
      updatePosition(str);
      style = style.slice(str.length);
      return m;
    }
    function whitespace() {
      match(WHITESPACE_REGEX);
    }
    function comments(rules) {
      var c;
      rules = rules || [];
      while (c = comment()) {
        if (c !== false) {
          rules.push(c);
        }
      }
      return rules;
    }
    function comment() {
      var pos = position();
      if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
      var i = 2;
      while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
        ++i;
      }
      i += 2;
      if (EMPTY_STRING === style.charAt(i - 1)) {
        return error("End of comment missing");
      }
      var str = style.slice(2, i - 2);
      column += 2;
      updatePosition(str);
      style = style.slice(i);
      column += 2;
      return pos({
        type: TYPE_COMMENT,
        comment: str
      });
    }
    function declaration() {
      var pos = position();
      var prop = match(PROPERTY_REGEX);
      if (!prop) return;
      comment();
      if (!match(COLON_REGEX)) return error("property missing ':'");
      var val = match(VALUE_REGEX);
      var ret = pos({
        type: TYPE_DECLARATION,
        property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
        value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
      });
      match(SEMICOLON_REGEX);
      return ret;
    }
    function declarations() {
      var decls = [];
      comments(decls);
      var decl;
      while (decl = declaration()) {
        if (decl !== false) {
          decls.push(decl);
          comments(decls);
        }
      }
      return decls;
    }
    whitespace();
    return declarations();
  };
  function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
  }
  return inlineStyleParser;
}
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var __importDefault = cjs && cjs.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(cjs, "__esModule", { value: true });
  cjs.default = StyleToObject2;
  var inline_style_parser_1 = __importDefault(requireInlineStyleParser());
  function StyleToObject2(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== "string") {
      return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === "function";
    declarations.forEach(function(declaration) {
      if (declaration.type !== "declaration") {
        return;
      }
      var property = declaration.property, value = declaration.value;
      if (hasIterator) {
        iterator(property, value, declaration);
      } else if (value) {
        styleObject = styleObject || {};
        styleObject[property] = value;
      }
    });
    return styleObject;
  }
  return cjs;
}
var cjsExports = requireCjs();
const StyleToObject = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
const parse = StyleToObject.default || StyleToObject;
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  parse(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function addEventListener$1(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
const EVENT_LIST = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key) {
  return EVENT_LIST_SET.has(key);
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    if (!props)
      continue;
    for (const key of Object.keys(props)) {
      const a = result[key];
      const b = props[key];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx(a, b);
        } else if (aIsClassValue) {
          result[key] = clsx(a);
        } else if (bIsClassValue) {
          result[key] = clsx(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
    for (const key of Object.getOwnPropertySymbols(props)) {
      const a = result[key];
      const b = props[key];
      result[key] = b !== void 0 ? b : a;
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden !== true) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled !== true) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const defaultWindow$1 = void 0;
function getActiveElement$2(document2) {
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
let ActiveElement$1 = class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow$1, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement$2(this.#document);
  }
};
new ActiveElement$1();
function isFunction(value) {
  return typeof value === "function";
}
let Context$1 = class Context {
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
};
function runWatcher$1(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch$1(sources, effect, options) {
  runWatcher$1(sources, "post", effect, options);
}
function watchPre$1(sources, effect, options) {
  runWatcher$1(sources, "pre", effect, options);
}
watch$1.pre = watchPre$1;
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  // no need to use `$state` here since we are using createSubscriber
  #size = { width: 0, height: 0 };
  #observed = false;
  #options;
  #node;
  #window;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #width = derived(() => {
    this.#subscribe()?.();
    return this.getSize().width;
  });
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #height = derived(() => {
    this.#subscribe()?.();
    return this.getSize().height;
  });
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #subscribe = derived(() => {
    const node$ = get$1(this.#node);
    if (!node$) return;
    return createSubscriber();
  });
  constructor(node, options = { box: "border-box" }) {
    this.#window = options.window ?? defaultWindow$1;
    this.#options = options;
    this.#node = node;
    this.#size = { width: 0, height: 0 };
  }
  calculateSize() {
    const element2 = get$1(this.#node);
    if (!element2 || !this.#window) {
      return;
    }
    const offsetWidth = element2.offsetWidth;
    const offsetHeight = element2.offsetHeight;
    if (this.#options.box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = this.#window.getComputedStyle(element2);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
  }
  get current() {
    this.#subscribe()?.();
    return this.getSize();
  }
  get width() {
    return this.#width();
  }
  get height() {
    return this.#height();
  }
}
class Previous {
  #previous = void 0;
  constructor(getter, initialValue) {
    if (initialValue !== void 0) this.#previous = initialValue;
    watch$1(() => getter(), (_, v) => {
      this.#previous = v;
    });
  }
  get current() {
    return this.#previous;
  }
}
function onDestroyEffect(fn) {
}
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$3(node) {
  return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode$1(node) {
  return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot$1(node) {
  return isNode$1(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
  if (!parent || !child)
    return false;
  if (!isHTMLElement$3(parent) || !isHTMLElement$3(child))
    return false;
  const rootNode = child.getRootNode?.();
  if (parent === child)
    return true;
  if (parent.contains(child))
    return true;
  if (rootNode && isShadowRoot$1(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next)
        return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return node?.ownerDocument ?? document;
}
function getWindow$1(node) {
  if (isShadowRoot$1(node))
    return getWindow$1(node.host);
  if (isDocument(node))
    return node.defaultView ?? window;
  if (isHTMLElement$3(node))
    return node.ownerDocument?.defaultView ?? window;
  return window;
}
function getActiveElement$1(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement?.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  element;
  #root = derived(() => {
    if (!this.element.current) return document;
    const rootNode = this.element.current.getRootNode() ?? document;
    return rootNode;
  });
  get root() {
    return this.#root();
  }
  set root($$value) {
    return this.#root($$value);
  }
  constructor(element2) {
    if (typeof element2 === "function") {
      this.element = box.with(element2);
    } else {
      this.element = element2;
    }
  }
  getDocument = () => {
    return getDocument(this.root);
  };
  getWindow = () => {
    return this.getDocument().defaultView ?? window;
  };
  getActiveElement = () => {
    return getActiveElement$1(this.root);
  };
  isActiveElement = (node) => {
    return node === this.getActiveElement();
  };
  getElementById(id) {
    return this.root.getElementById(id);
  }
  querySelector = (selector) => {
    if (!this.root) return null;
    return this.root.querySelector(selector);
  };
  querySelectorAll = (selector) => {
    if (!this.root) return [];
    return this.root.querySelectorAll(selector);
  };
  setTimeout = (callback, delay) => {
    return this.getWindow().setTimeout(callback, delay);
  };
  clearTimeout = (timeoutId) => {
    return this.getWindow().clearTimeout(timeoutId);
  };
}
function attachRef(ref, onChange) {
  return {
    [createAttachmentKey()]: (node) => {
      if (box.isBox(ref)) {
        ref.current = node;
        run(() => onChange?.(node));
        return () => {
          if ("isConnected" in node && node.isConnected)
            return;
          ref.current = null;
          onChange?.(null);
        };
      }
      ref(node);
      run(() => onChange?.(node));
      return () => {
        if ("isConnected" in node && node.isConnected)
          return;
        ref(null);
        onChange?.(null);
      };
    }
  };
}
function getDataOpenClosed(condition) {
  return condition ? "open" : "closed";
}
function getDataChecked(condition) {
  return condition ? "checked" : "unchecked";
}
function getAriaExpanded(condition) {
  return condition ? "true" : "false";
}
function getDataDisabled(condition) {
  return condition ? "" : void 0;
}
function getAriaRequired(condition) {
  return condition ? "true" : "false";
}
function getAriaChecked(checked, indeterminate) {
  return checked ? "true" : "false";
}
function getAriaOrientation(orientation) {
  return orientation;
}
function getAriaHidden(condition) {
  return condition ? "true" : void 0;
}
function getDataOrientation(orientation) {
  return orientation;
}
function getDataRequired(condition) {
  return condition ? "" : void 0;
}
function getDisabled(condition) {
  return condition ? true : void 0;
}
function getAriaPressed(condition) {
  return condition ? "true" : "false";
}
class BitsAttrs {
  #variant;
  #prefix;
  attrs;
  constructor(config) {
    this.#variant = config.getVariant ? config.getVariant() : null;
    this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
    this.getAttr = this.getAttr.bind(this);
    this.selector = this.selector.bind(this);
    this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
  }
  getAttr(part, variantOverride) {
    if (variantOverride)
      return `data-${variantOverride}-${part}`;
    return `${this.#prefix}${part}`;
  }
  selector(part, variantOverride) {
    return `[${this.getAttr(part, variantOverride)}]`;
  }
}
function createBitsAttrs(config) {
  const bitsAttrs = new BitsAttrs(config);
  return {
    ...bitsAttrs.attrs,
    selector: bitsAttrs.selector,
    getAttr: bitsAttrs.getAttr
  };
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const SPACE = " ";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
class RovingFocusGroup {
  #opts;
  #currentTabStopId = box(null);
  constructor(opts) {
    this.#opts = opts;
  }
  getCandidateNodes() {
    return [];
  }
  focusFirstCandidate() {
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    items[0]?.focus();
  }
  handleKeydown(node, e, both = false) {
    const rootNode = this.#opts.rootNode.current;
    if (!rootNode || !node)
      return;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, this.#opts.orientation.current);
    const loop = this.#opts.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0)
      return;
    e.preventDefault();
    if (itemIndex < 0 && loop) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus)
      return;
    itemToFocus.focus();
    this.#currentTabStopId.current = itemToFocus.id;
    this.#opts.onCandidateFocus?.(itemToFocus);
    return itemToFocus;
  }
  getTabIndex(node) {
    const items = this.getCandidateNodes();
    const anyActive = this.#currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      this.#currentTabStopId.current = node.id;
      return 0;
    } else if (node?.id === this.#currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  setCurrentTabStopId(id) {
    this.#currentTabStopId.current = id;
  }
}
function noop$1() {
}
function createId(prefixOrUid, uid) {
  return `bits-${prefixOrUid}`;
}
class StateMachine {
  state;
  #machine;
  constructor(initialState, machine) {
    this.state = box(initialState);
    this.#machine = machine;
    this.dispatch = this.dispatch.bind(this);
  }
  #reducer(event) {
    const nextState = this.#machine[this.state.current][event];
    return nextState ?? this.state.current;
  }
  dispatch(event) {
    this.state.current = this.#reducer(event);
  }
}
const presenceMachine = {
  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
  unmounted: { MOUNT: "mounted" }
};
class Presence {
  opts;
  prevAnimationNameState = "none";
  styles = {};
  initialStatus;
  previousPresent;
  machine;
  present;
  constructor(opts) {
    this.opts = opts;
    this.present = this.opts.open;
    this.initialStatus = opts.open.current ? "mounted" : "unmounted";
    this.previousPresent = new Previous(() => this.present.current);
    this.machine = new StateMachine(this.initialStatus, presenceMachine);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    watchPresenceChange(this);
    watchStatusChange(this);
    watchRefChange(this);
  }
  /**
   * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
   * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
   * make sure we only trigger ANIMATION_END for the currently active animation.
   */
  handleAnimationEnd(event) {
    if (!this.opts.ref.current) return;
    const currAnimationName = getAnimationName(this.opts.ref.current);
    const isCurrentAnimation = currAnimationName.includes(event.animationName) || currAnimationName === "none";
    if (event.target === this.opts.ref.current && isCurrentAnimation) {
      this.machine.dispatch("ANIMATION_END");
    }
  }
  handleAnimationStart(event) {
    if (!this.opts.ref.current) return;
    if (event.target === this.opts.ref.current) {
      this.prevAnimationNameState = getAnimationName(this.opts.ref.current);
    }
  }
  #isPresent = derived(() => {
    return ["mounted", "unmountSuspended"].includes(this.machine.state.current);
  });
  get isPresent() {
    return this.#isPresent();
  }
  set isPresent($$value) {
    return this.#isPresent($$value);
  }
}
function watchPresenceChange(state) {
  watch$1(() => state.present.current, () => {
    if (!state.opts.ref.current) return;
    const hasPresentChanged = state.present.current !== state.previousPresent.current;
    if (!hasPresentChanged) return;
    const prevAnimationName = state.prevAnimationNameState;
    const currAnimationName = getAnimationName(state.opts.ref.current);
    if (state.present.current) {
      state.machine.dispatch("MOUNT");
    } else if (currAnimationName === "none" || state.styles.display === "none") {
      state.machine.dispatch("UNMOUNT");
    } else {
      const isAnimating = prevAnimationName !== currAnimationName;
      if (state.previousPresent.current && isAnimating) {
        state.machine.dispatch("ANIMATION_OUT");
      } else {
        state.machine.dispatch("UNMOUNT");
      }
    }
  });
}
function watchStatusChange(state) {
  watch$1(() => state.machine.state.current, () => {
    if (!state.opts.ref.current) return;
    const currAnimationName = getAnimationName(state.opts.ref.current);
    state.prevAnimationNameState = state.machine.state.current === "mounted" ? currAnimationName : "none";
  });
}
function watchRefChange(state) {
  watch$1(() => state.opts.ref.current, () => {
    if (!state.opts.ref.current) return;
    state.styles = getComputedStyle(state.opts.ref.current);
    return executeCallbacks(on(state.opts.ref.current, "animationstart", state.handleAnimationStart), on(state.opts.ref.current, "animationcancel", state.handleAnimationEnd), on(state.opts.ref.current, "animationend", state.handleAnimationEnd));
  });
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
function Presence_layer($$payload, $$props) {
  push();
  let { open, forceMount, presence, ref } = $$props;
  const presenceState = new Presence({ open: box.with(() => open), ref });
  if (forceMount || open || presenceState.isPresent) {
    $$payload.out.push("<!--[-->");
    presence?.($$payload, { present: presenceState.isPresent });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
class AnimationsComplete {
  #opts;
  #currentFrame = void 0;
  #isRunning = false;
  constructor(opts) {
    this.#opts = opts;
  }
  #cleanup() {
    if (this.#currentFrame) {
      window.cancelAnimationFrame(this.#currentFrame);
      this.#currentFrame = void 0;
    }
    this.#isRunning = false;
  }
  run(fn) {
    if (this.#isRunning)
      return;
    this.#cleanup();
    this.#isRunning = true;
    const node = this.#opts.ref.current;
    if (!node) {
      this.#isRunning = false;
      return;
    }
    if (typeof node.getAnimations !== "function") {
      this.#executeCallback(fn);
      return;
    }
    this.#currentFrame = window.requestAnimationFrame(() => {
      const animations = node.getAnimations();
      if (animations.length === 0) {
        this.#executeCallback(fn);
        return;
      }
      Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
        this.#executeCallback(fn);
      });
    });
  }
  #executeCallback(fn) {
    const execute = () => {
      fn();
      this.#isRunning = false;
    };
    if (this.#opts.afterTick) {
      afterTick(execute);
    } else {
      execute();
    }
  }
}
class OpenChangeComplete {
  #opts;
  #enabled;
  #afterAnimations;
  constructor(opts) {
    this.#opts = opts;
    this.#enabled = opts.enabled ?? true;
    this.#afterAnimations = new AnimationsComplete({
      ref: this.#opts.ref,
      afterTick: this.#opts.open
    });
    watch$1([() => this.#opts.open.current], ([open]) => {
      if (!this.#enabled)
        return;
      this.#afterAnimations.run(() => {
        if (open === this.#opts.open.current) {
          this.#opts.onComplete();
        }
      });
    });
  }
}
const dialogAttrs = createBitsAttrs({
  component: "dialog",
  parts: [
    "content",
    "trigger",
    "overlay",
    "title",
    "description",
    "close",
    "cancel",
    "action"
  ]
});
const DialogRootContext = new Context$1("Dialog.Root | AlertDialog.Root");
class DialogRootState {
  static create(opts) {
    return DialogRootContext.set(new DialogRootState(opts));
  }
  opts;
  triggerNode = null;
  contentNode = null;
  descriptionNode = null;
  contentId = void 0;
  titleId = void 0;
  triggerId = void 0;
  descriptionId = void 0;
  cancelNode = null;
  constructor(opts) {
    this.opts = opts;
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    new OpenChangeComplete({
      ref: box.with(() => this.contentNode),
      open: this.opts.open,
      enabled: true,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  handleOpen() {
    if (this.opts.open.current) return;
    this.opts.open.current = true;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
  getBitsAttr = (part) => {
    return dialogAttrs.getAttr(part, this.opts.variant.current);
  };
  #sharedProps = derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));
  get sharedProps() {
    return this.#sharedProps();
  }
  set sharedProps($$value) {
    return this.#sharedProps($$value);
  }
}
class DialogTriggerState {
  static create(opts) {
    return new DialogTriggerState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.triggerNode = v;
      this.root.triggerId = v?.id;
    });
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleOpen();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleOpen();
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-haspopup": "dialog",
    "aria-expanded": getAriaExpanded(this.root.opts.open.current),
    "aria-controls": this.root.contentId,
    [this.root.getBitsAttr("trigger")]: "",
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    disabled: this.opts.disabled.current ? true : void 0,
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogCloseState {
  static create(opts) {
    return new DialogCloseState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleClose();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleClose();
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr(this.opts.variant.current)]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    disabled: this.opts.disabled.current ? true : void 0,
    tabindex: 0,
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogTitleState {
  static create(opts) {
    return new DialogTitleState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.titleId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref);
    watch$1.pre(() => this.opts.id.current, (id) => {
      this.root.titleId = id;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "heading",
    "aria-level": this.opts.level.current,
    [this.root.getBitsAttr("title")]: "",
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogDescriptionState {
  static create(opts) {
    return new DialogDescriptionState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.root.descriptionId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.descriptionNode = v;
    });
    watch$1.pre(() => this.opts.id.current, (id) => {
      this.root.descriptionId = id;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr("description")]: "",
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogContentState {
  static create(opts) {
    return new DialogContentState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.contentNode = v;
      this.root.contentId = v?.id;
    });
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
    "aria-modal": "true",
    "aria-describedby": this.root.descriptionId,
    "aria-labelledby": this.root.titleId,
    [this.root.getBitsAttr("content")]: "",
    style: {
      pointerEvents: "auto",
      outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0
    },
    tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class DialogOverlayState {
  static create(opts) {
    return new DialogOverlayState(opts, DialogRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [this.root.getBitsAttr("overlay")]: "",
    style: { pointerEvents: "auto" },
    ...this.root.sharedProps,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Dialog_title$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    child,
    children,
    level = 2,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const titleState = DialogTitleState.create({
    id: box.with(() => id),
    level: box.with(() => level),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, titleState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
const isBrowser$1 = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  return isBrowser$1 && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement$2(element2) {
  return element2 instanceof HTMLElement;
}
function isElement$1(element2) {
  return element2 instanceof Element;
}
function isFocusVisible(element2) {
  return element2.matches(":focus-visible");
}
function isNotNull(value) {
  return value !== null;
}
const BitsConfigContext = new Context$1("BitsConfig");
function getBitsConfig() {
  const fallback2 = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback2).opts;
}
class BitsConfigState {
  opts;
  constructor(parent, opts) {
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = box.with(() => {
      const value = getter(currentOpts)?.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return getter(parent.opts)?.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback2) {
  return (getProp) => {
    const config = getBitsConfig();
    return box.with(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback2;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal$1($$payload, $$props) {
  push();
  let { to: toProp, children, disabled } = $$props;
  const to = resolvePortalToProp(() => toProp);
  getAllContexts();
  let target = getTarget();
  function getTarget() {
    if (!isBrowser$1 || disabled) return null;
    let localTarget = null;
    if (typeof to.current === "string") {
      const target2 = document.querySelector(to.current);
      localTarget = target2;
    } else {
      localTarget = to.current;
    }
    return localTarget;
  }
  let instance;
  function unmountInstance() {
    if (instance) {
      unmount();
      instance = null;
    }
  }
  watch$1([() => target, () => disabled], ([target2, disabled2]) => {
    if (!target2 || disabled2) {
      unmountInstance();
      return;
    }
    instance = mount();
    return () => {
      unmountInstance();
    };
  });
  if (disabled) {
    $$payload.out.push("<!--[-->");
    children?.($$payload);
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function debounce$1(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
function isClickTrulyOutside(event, contentNode) {
  const { clientX, clientY } = event;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class DismissibleLayerState {
  static create(opts) {
    return new DismissibleLayerState(opts);
  }
  opts;
  #interactOutsideProp;
  #behaviorType;
  #interceptedEvents = { pointerdown: false };
  #isResponsibleLayer = false;
  #isFocusInsideDOMTree = false;
  #documentObj = void 0;
  #onFocusOutside;
  #unsubClickListener = noop$1;
  constructor(opts) {
    this.opts = opts;
    this.#behaviorType = opts.interactOutsideBehavior;
    this.#interactOutsideProp = opts.onInteractOutside;
    this.#onFocusOutside = opts.onFocusOutside;
    let unsubEvents = noop$1;
    const cleanup = () => {
      this.#resetState();
      globalThis.bitsDismissableLayers.delete(this);
      this.#handleInteractOutside.destroy();
      unsubEvents();
    };
    watch$1([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!this.opts.enabled.current || !this.opts.ref.current) return;
      afterSleep(1, () => {
        if (!this.opts.ref.current) return;
        globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      });
      return cleanup;
    });
  }
  #handleFocus = (event) => {
    if (event.defaultPrevented) return;
    if (!this.opts.ref.current) return;
    afterTick(() => {
      if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
      if (event.target && !this.#isFocusInsideDOMTree) {
        this.#onFocusOutside.current?.(event);
      }
    });
  };
  #addEventListeners() {
    return executeCallbacks(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      on(this.#documentObj, "focusin", this.#handleFocus)
    );
  }
  #handleDismiss = (e) => {
    let event = e;
    if (event.defaultPrevented) {
      event = createWrappedEvent(e);
    }
    this.#interactOutsideProp.current(e);
  };
  #handleInteractOutside = debounce$1(
    (e) => {
      if (!this.opts.ref.current) {
        this.#unsubClickListener();
        return;
      }
      const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
      if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
        this.#unsubClickListener();
        return;
      }
      let event = e;
      if (event.defaultPrevented) {
        event = createWrappedEvent(event);
      }
      if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
        this.#unsubClickListener();
        return;
      }
      if (e.pointerType === "touch") {
        this.#unsubClickListener();
        this.#unsubClickListener = addEventListener(this.#documentObj, "click", this.#handleDismiss, { once: true });
      } else {
        this.#interactOutsideProp.current(event);
      }
    },
    10
  );
  #markInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = true;
  };
  #markNonInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = false;
  };
  #markResponsibleLayer = () => {
    if (!this.opts.ref.current) return;
    this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
  };
  #isTargetWithinLayer = (target) => {
    if (!this.opts.ref.current) return false;
    return isOrContainsTarget(this.opts.ref.current, target);
  };
  #resetState = debounce$1(
    () => {
      for (const eventType in this.#interceptedEvents) {
        this.#interceptedEvents[eventType] = false;
      }
      this.#isResponsibleLayer = false;
    },
    20
  );
  #isAnyEventIntercepted() {
    const i = Object.values(this.#interceptedEvents).some(Boolean);
    return i;
  }
  #onfocuscapture = () => {
    this.#isFocusInsideDOMTree = true;
  };
  #onblurcapture = () => {
    this.#isFocusInsideDOMTree = false;
  };
  props = {
    onfocuscapture: this.#onfocuscapture,
    onblurcapture: this.#onblurcapture
  };
}
function getTopMostLayer(layersArr) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0) return false;
  const target = e.target;
  if (!isElement$1(target)) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop) => {
      if (prop === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop === "target") {
        return capturedTarget;
      }
      if (prop === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop === "defaultPrevented") {
        return isPrevented;
      }
      if (prop in target) {
        return target[prop];
      }
      return e[prop];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$payload, $$props) {
  push();
  let {
    interactOutsideBehavior = "close",
    onInteractOutside = noop$1,
    onFocusOutside = noop$1,
    id,
    children,
    enabled,
    isValidEvent: isValidEvent2 = () => false,
    ref
  } = $$props;
  const dismissibleLayerState = DismissibleLayerState.create({
    id: box.with(() => id),
    interactOutsideBehavior: box.with(() => interactOutsideBehavior),
    onInteractOutside: box.with(() => onInteractOutside),
    enabled: box.with(() => enabled),
    onFocusOutside: box.with(() => onFocusOutside),
    isValidEvent: box.with(() => isValidEvent2),
    ref
  });
  children?.($$payload, { props: dismissibleLayerState.props });
  $$payload.out.push(`<!---->`);
  pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class EscapeLayerState {
  static create(opts) {
    return new EscapeLayerState(opts);
  }
  opts;
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop$1;
    watch$1(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = this.#addEventListener();
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  #addEventListener = () => {
    return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
  };
  #onkeydown = (e) => {
    if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
    const clonedEvent = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const behaviorType = this.opts.escapeKeydownBehavior.current;
    if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
    this.opts.onEscapeKeydown.current(clonedEvent);
  };
}
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$payload, $$props) {
  push();
  let {
    escapeKeydownBehavior = "close",
    onEscapeKeydown = noop$1,
    children,
    enabled,
    ref
  } = $$props;
  EscapeLayerState.create({
    escapeKeydownBehavior: box.with(() => escapeKeydownBehavior),
    onEscapeKeydown: box.with(() => onEscapeKeydown),
    enabled: box.with(() => enabled),
    ref
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
class FocusScopeManager {
  static instance;
  #scopeStack = box([]);
  #focusHistory = /* @__PURE__ */ new WeakMap();
  #preFocusHistory = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    if (!this.instance) {
      this.instance = new FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      this.#preFocusHistory.set(scope, activeElement);
    }
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    this.#scopeStack.current.unshift(scope);
  }
  unregister(scope) {
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    const next = this.getActive();
    if (next) {
      next.resume();
    }
  }
  getActive() {
    return this.#scopeStack.current[0];
  }
  setFocusMemory(scope, element2) {
    this.#focusHistory.set(scope, element2);
  }
  getFocusMemory(scope) {
    return this.#focusHistory.get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
  setPreFocusMemory(scope, element2) {
    this.#preFocusHistory.set(scope, element2);
  }
  getPreFocusMemory(scope) {
    return this.#preFocusHistory.get(scope);
  }
  clearPreFocusMemory(scope) {
    this.#preFocusHistory.delete(scope);
  }
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element2) {
  var _element$getRootNode;
  return element2 === null || element2 === void 0 ? void 0 : (_element$getRootNode = element2.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element2);
} : function(element2) {
  return element2 === null || element2 === void 0 ? void 0 : element2.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element2 = elementsToCheck.shift();
    if (isInert(element2, false)) {
      continue;
    }
    if (element2.tagName === "SLOT") {
      var assigned = element2.assignedElements();
      var content = assigned.length ? assigned : element2.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element2,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element2, candidateSelector);
      if (validCandidate && options.filter(element2) && (includeContainer || !elements.includes(element2))) {
        candidates.push(element2);
      }
      var shadowRoot = element2.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element2);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element2));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element2.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element2,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element2.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element2 = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element2, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element2;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element2);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
class FocusScope {
  #paused = false;
  #container = null;
  #manager = FocusScopeManager.getInstance();
  #cleanupFns = [];
  #opts;
  constructor(opts) {
    this.#opts = opts;
  }
  get paused() {
    return this.#paused;
  }
  pause() {
    this.#paused = true;
  }
  resume() {
    this.#paused = false;
  }
  #cleanup() {
    for (const fn of this.#cleanupFns) {
      fn();
    }
    this.#cleanupFns = [];
  }
  mount(container) {
    if (this.#container) {
      this.unmount();
    }
    this.#container = container;
    this.#manager.register(this);
    this.#setupEventListeners();
    this.#handleOpenAutoFocus();
  }
  unmount() {
    if (!this.#container) return;
    this.#cleanup();
    this.#handleCloseAutoFocus();
    this.#manager.unregister(this);
    this.#manager.clearPreFocusMemory(this);
    this.#container = null;
  }
  #handleOpenAutoFocus() {
    if (!this.#container) return;
    const event = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onOpenAutoFocus.current(event);
    if (!event.defaultPrevented) {
      requestAnimationFrame(() => {
        if (!this.#container) return;
        const firstTabbable = this.#getFirstTabbable();
        if (firstTabbable) {
          firstTabbable.focus();
          this.#manager.setFocusMemory(this, firstTabbable);
        } else {
          this.#container.focus();
        }
      });
    }
  }
  #handleCloseAutoFocus() {
    const event = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onCloseAutoFocus.current?.(event);
    if (!event.defaultPrevented) {
      const preFocusedElement = this.#manager.getPreFocusMemory(this);
      if (preFocusedElement && document.contains(preFocusedElement)) {
        try {
          preFocusedElement.focus();
        } catch {
          document.body.focus();
        }
      }
    }
  }
  #setupEventListeners() {
    if (!this.#container || !this.#opts.trap.current) return;
    const container = this.#container;
    const doc = container.ownerDocument;
    const handleFocus = (e) => {
      if (this.#paused || !this.#manager.isActiveScope(this)) return;
      const target = e.target;
      if (!target) return;
      const isInside = container.contains(target);
      if (isInside) {
        this.#manager.setFocusMemory(this, target);
      } else {
        const lastFocused = this.#manager.getFocusMemory(this);
        if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
          e.preventDefault();
          lastFocused.focus();
        } else {
          const firstTabbable = this.#getFirstTabbable();
          const firstFocusable = this.#getAllFocusables()[0];
          (firstTabbable || firstFocusable || container).focus();
        }
      }
    };
    const handleKeydown = (e) => {
      if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
      if (!this.#manager.isActiveScope(this)) return;
      const tabbables = this.#getTabbables();
      if (tabbables.length < 2) return;
      const first = tabbables[0];
      const last = tabbables[tabbables.length - 1];
      if (!e.shiftKey && doc.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && doc.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };
    this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
    const observer = new MutationObserver(() => {
      const lastFocused = this.#manager.getFocusMemory(this);
      if (lastFocused && !container.contains(lastFocused)) {
        const firstTabbable = this.#getFirstTabbable();
        const firstFocusable = this.#getAllFocusables()[0];
        const elementToFocus = firstTabbable || firstFocusable;
        if (elementToFocus) {
          elementToFocus.focus();
          this.#manager.setFocusMemory(this, elementToFocus);
        } else {
          container.focus();
        }
      }
    });
    observer.observe(container, { childList: true, subtree: true });
    this.#cleanupFns.push(() => observer.disconnect());
  }
  #getTabbables() {
    if (!this.#container) return [];
    return tabbable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  #getFirstTabbable() {
    const tabbables = this.#getTabbables();
    return tabbables[0] || null;
  }
  #getAllFocusables() {
    if (!this.#container) return [];
    return focusable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  static use(opts) {
    let scope = null;
    watch$1([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
      if (ref && enabled) {
        if (!scope) {
          scope = new FocusScope(opts);
        }
        scope.mount(ref);
      } else if (scope) {
        scope.unmount();
        scope = null;
      }
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Focus_scope($$payload, $$props) {
  push();
  let {
    enabled = false,
    trapFocus = false,
    loop = false,
    onCloseAutoFocus = noop$1,
    onOpenAutoFocus = noop$1,
    focusScope,
    ref
  } = $$props;
  const focusScopeState = FocusScope.use({
    enabled: box.with(() => enabled),
    trap: box.with(() => trapFocus),
    loop,
    onCloseAutoFocus: box.with(() => onCloseAutoFocus),
    onOpenAutoFocus: box.with(() => onOpenAutoFocus),
    ref
  });
  focusScope?.($$payload, { props: focusScopeState.props });
  $$payload.out.push(`<!---->`);
  pop();
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class TextSelectionLayerState {
  static create(opts) {
    return new TextSelectionLayerState(opts);
  }
  opts;
  domContext;
  #unsubSelectionLock = noop$1;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop$1;
    watch$1(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      }
      return () => {
        unsubEvents();
        this.#resetSelectionLock();
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
  #addEventListeners() {
    return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)));
  }
  #pointerdown = (e) => {
    const node = this.opts.ref.current;
    const target = e.target;
    if (!isHTMLElement$2(node) || !isHTMLElement$2(target) || !this.opts.enabled.current) return;
    if (!isHighestLayer(this) || !contains(node, target)) return;
    this.opts.onPointerDown.current(e);
    if (e.defaultPrevented) return;
    this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
  };
  #resetSelectionLock = () => {
    this.#unsubSelectionLock();
    this.#unsubSelectionLock = noop$1;
  };
}
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$payload, $$props) {
  push();
  let {
    preventOverflowTextSelection = true,
    onPointerDown = noop$1,
    onPointerUp = noop$1,
    id,
    children,
    enabled,
    ref
  } = $$props;
  TextSelectionLayerState.create({
    id: box.with(() => id),
    onPointerDown: box.with(() => onPointerDown),
    onPointerUp: box.with(() => onPointerUp),
    enabled: box.with(() => enabled && preventOverflowTextSelection),
    ref
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId$1(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
  #factory;
  #subscribers = 0;
  #state;
  #scope;
  constructor(factory) {
    this.#factory = factory;
  }
  #dispose() {
    this.#subscribers -= 1;
    if (this.#scope && this.#subscribers <= 0) {
      this.#scope();
      this.#state = void 0;
      this.#scope = void 0;
    }
  }
  get(...args) {
    this.#subscribers += 1;
    if (this.#state === void 0) {
      this.#scope = () => {
      };
    }
    return this.#state;
  }
}
const lockMap = new SvelteMap();
let initialBodyStyle = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = box.with(() => {
  for (const value of lockMap.values()) {
    if (value) return true;
  }
  return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
  function resetBodyStyle() {
    return;
  }
  function cancelPendingCleanup() {
    if (cleanupTimeoutId === null) return;
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }
  function scheduleCleanupIfNoNewLocks(delay, callback) {
    cancelPendingCleanup();
    isInCleanupTransition = true;
    cleanupScheduledAt = Date.now();
    const currentCleanupId = cleanupScheduledAt;
    const cleanupFn = () => {
      cleanupTimeoutId = null;
      if (cleanupScheduledAt !== currentCleanupId) return;
      if (!isAnyLocked(lockMap)) {
        isInCleanupTransition = false;
        callback();
      } else {
        isInCleanupTransition = false;
      }
    };
    const actualDelay = delay === null ? 24 : delay;
    cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
  }
  function ensureInitialStyleCaptured() {
    if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) {
      initialBodyStyle = document.body.getAttribute("style");
    }
  }
  watch$1(() => anyLocked.current, () => {
    if (!anyLocked.current) return;
    ensureInitialStyleCaptured();
    isInCleanupTransition = false;
    const bodyStyle = getComputedStyle(document.body);
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      document.body.style.overflow = "hidden";
    }
    if (isIOS) {
      addEventListener(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  return {
    get lockMap() {
      return lockMap;
    },
    resetBodyStyle,
    scheduleCleanupIfNoNewLocks,
    cancelPendingCleanup,
    ensureInitialStyleCaptured
  };
});
class BodyScrollLock {
  #id = useId$1();
  #initialState;
  #restoreScrollDelay = () => null;
  #countState;
  locked;
  constructor(initialState, restoreScrollDelay = () => null) {
    this.#initialState = initialState;
    this.#restoreScrollDelay = restoreScrollDelay;
    this.#countState = bodyLockStackCount.get();
    if (!this.#countState) return;
    this.#countState.cancelPendingCleanup();
    this.#countState.ensureInitialStyleCaptured();
    this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
    this.locked = box.with(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
  }
}
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$payload, $$props) {
  push();
  let { preventScroll = true, restoreScrollDelay = null } = $$props;
  if (preventScroll) {
    new BodyScrollLock(preventScroll, () => restoreScrollDelay);
  }
  pop();
}
function shouldEnableFocusTrap({ forceMount, present, open }) {
  if (forceMount)
    return open;
  return present && open;
}
function Dialog_overlay$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    forceMount = false,
    child,
    children,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const overlayState = DialogOverlayState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, overlayState.props);
  {
    let presence = function($$payload2) {
      if (child) {
        $$payload2.out.push("<!--[-->");
        child($$payload2, { props: mergeProps(mergedProps), ...overlayState.snippetProps });
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<div${spread_attributes({ ...mergeProps(mergedProps) }, null)}>`);
        children?.($$payload2, overlayState.snippetProps);
        $$payload2.out.push(`<!----></div>`);
      }
      $$payload2.out.push(`<!--]-->`);
    };
    Presence_layer($$payload, {
      open: overlayState.root.opts.open.current || forceMount,
      ref: overlayState.opts.ref,
      presence
    });
  }
  bind_props($$props, { ref });
  pop();
}
function Dialog_trigger($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    children,
    child,
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = DialogTriggerState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, triggerState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Dialog_description$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    children,
    child,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const descriptionState = DialogDescriptionState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, descriptionState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Hidden_input($$payload, $$props) {
  push();
  let { value = void 0, $$slots, $$events, ...restProps } = $$props;
  const mergedProps = mergeProps(restProps, {
    "aria-hidden": "true",
    tabindex: -1,
    style: srOnlyStylesString
  });
  if (mergedProps.type === "checkbox") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<input${spread_attributes({ ...mergedProps, value }, null)}/>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<input${spread_attributes({ value, ...mergedProps }, null)}/>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { value });
  pop();
}
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element2) {
  return tableElements.has(getNodeName(element2));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element2) {
  return topLayerSelectors.some((selector) => {
    try {
      return element2.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.scrollX,
    scrollTop: element2.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement$1(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement$1(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element2, rect) {
  const leftScroll = getNodeScroll(element2).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element2)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement$1(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement$1(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, []).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element2) ? [] : getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element2) {
  return getComputedStyle$1(element2).position === "static";
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement$1(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  let rawOffsetParent = element2.offsetParent;
  if (getDocumentElement(element2) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element2, polyfill) {
  const win = getWindow(element2);
  if (isTopLayer(element2)) {
    return win;
  }
  if (!isHTMLElement$1(element2)) {
    let svgOffsetParent = getParentNode(element2);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element2) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element2) {
  if (typeof window === "undefined") return 1;
  const win = element2.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element2, value) {
  const dpr = getDPR(element2);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const openOption = get(options.open) ?? true;
  const middlewareOption = get(options.middleware);
  const transformOption = get(options.transform) ?? true;
  const placementOption = get(options.placement) ?? "bottom";
  const strategyOption = get(options.strategy) ?? "absolute";
  const sideOffsetOption = get(options.sideOffset) ?? 0;
  const alignOffsetOption = get(options.alignOffset) ?? 0;
  const reference = options.reference;
  let x = 0;
  let y = 0;
  const floating = box(null);
  let strategy = strategyOption;
  let placement = placementOption;
  let middlewareData = {};
  let isPositioned = false;
  const floatingStyles = (() => {
    const xVal = floating.current ? roundByDPR(floating.current, x) : x;
    const yVal = floating.current ? roundByDPR(floating.current, y) : y;
    if (transformOption) {
      return {
        position: strategy,
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return { position: strategy, left: `${xVal}px`, top: `${yVal}px` };
  })();
  function update() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: middlewareOption,
      placement: placementOption,
      strategy: strategyOption
    }).then((position) => {
      if (!openOption && x !== 0 && y !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(sideOffsetOption), Math.abs(alignOffsetOption), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      x = position.x;
      y = position.y;
      strategy = position.strategy;
      placement = position.placement;
      middlewareData = position.middlewareData;
      isPositioned = true;
    });
  }
  return {
    floating,
    reference,
    get strategy() {
      return strategy;
    },
    get placement() {
      return placement;
    },
    get middlewareData() {
      return middlewareData;
    },
    get isPositioned() {
      return isPositioned;
    },
    get floatingStyles() {
      return floatingStyles;
    },
    get update() {
      return update;
    }
  };
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context$1("Floating.Root");
const FloatingContentContext = new Context$1("Floating.Content");
const FloatingTooltipRootContext = new Context$1("Floating.Root");
class FloatingRootState {
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
  anchorNode = box(null);
  customAnchorNode = box(null);
  triggerNode = box(null);
  constructor() {
  }
}
class FloatingContentState {
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
  }
  opts;
  root;
  // nodes
  contentRef = box(null);
  wrapperRef = box(null);
  arrowRef = box(null);
  contentAttachment = attachRef(this.contentRef);
  wrapperAttachment = attachRef(this.wrapperRef);
  arrowAttachment = attachRef(this.arrowRef);
  // ids
  arrowId = box(useId$1());
  #transformedStyle = derived(() => {
    if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
    if (!this.opts.style) return {};
  });
  #updatePositionStrategy = void 0;
  #arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
  #arrowWidth = derived(() => this.#arrowSize?.width ?? 0);
  #arrowHeight = derived(() => this.#arrowSize?.height ?? 0);
  #desiredPlacement = derived(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #boundary = derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #hasExplicitBoundaries = derived(() => this.#boundary().length > 0);
  get hasExplicitBoundaries() {
    return this.#hasExplicitBoundaries();
  }
  set hasExplicitBoundaries($$value) {
    return this.#hasExplicitBoundaries($$value);
  }
  #detectOverflowOptions = derived(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: this.#boundary().filter(isNotNull),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return this.#detectOverflowOptions();
  }
  set detectOverflowOptions($$value) {
    return this.#detectOverflowOptions($$value);
  }
  #availableWidth = void 0;
  #availableHeight = void 0;
  #anchorWidth = void 0;
  #anchorHeight = void 0;
  #middleware = derived(() => [
    offset({
      mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && shift({
      mainAxis: true,
      crossAxis: false,
      limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
    size({
      ...this.detectOverflowOptions,
      apply: ({ rects, availableWidth, availableHeight }) => {
        const { width: anchorWidth, height: anchorHeight } = rects.reference;
        this.#availableWidth = availableWidth;
        this.#availableHeight = availableHeight;
        this.#anchorWidth = anchorWidth;
        this.#anchorHeight = anchorHeight;
      }
    }),
    this.arrowRef.current && arrow({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    transformOrigin({
      arrowWidth: this.#arrowWidth(),
      arrowHeight: this.#arrowHeight()
    }),
    this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return this.#middleware();
  }
  set middleware($$value) {
    return this.#middleware($$value);
  }
  floating;
  #placedSide = derived(() => getSideFromPlacement(this.floating.placement));
  get placedSide() {
    return this.#placedSide();
  }
  set placedSide($$value) {
    return this.#placedSide($$value);
  }
  #placedAlign = derived(() => getAlignFromPlacement(this.floating.placement));
  get placedAlign() {
    return this.#placedAlign();
  }
  set placedAlign($$value) {
    return this.#placedAlign($$value);
  }
  #arrowX = derived(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return this.#arrowX();
  }
  set arrowX($$value) {
    return this.#arrowX($$value);
  }
  #arrowY = derived(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return this.#arrowY();
  }
  set arrowY($$value) {
    return this.#arrowY($$value);
  }
  #cannotCenterArrow = derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return this.#cannotCenterArrow();
  }
  set cannotCenterArrow($$value) {
    return this.#cannotCenterArrow($$value);
  }
  contentZIndex;
  #arrowBaseSide = derived(() => OPPOSITE_SIDE[this.placedSide]);
  get arrowBaseSide() {
    return this.#arrowBaseSide();
  }
  set arrowBaseSide($$value) {
    return this.#arrowBaseSide($$value);
  }
  #wrapperProps = derived(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${this.#availableWidth}px`,
      "--bits-floating-available-height": `${this.#availableHeight}px`,
      "--bits-floating-anchor-width": `${this.#anchorWidth}px`,
      "--bits-floating-anchor-height": `${this.#anchorHeight}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...this.#transformedStyle()
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return this.#wrapperProps();
  }
  set wrapperProps($$value) {
    return this.#wrapperProps($$value);
  }
  #props = derived(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: styleToString({ ...this.#transformedStyle() }),
    ...this.contentAttachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  #arrowStyle = derived(() => ({
    position: "absolute",
    left: this.arrowX ? `${this.arrowX}px` : void 0,
    top: this.arrowY ? `${this.arrowY}px` : void 0,
    [this.arrowBaseSide]: 0,
    "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
    transform: {
      top: "translateY(100%)",
      right: "translateY(50%) rotate(90deg) translateX(-50%)",
      bottom: "rotate(180deg)",
      left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[this.placedSide],
    visibility: this.cannotCenterArrow ? "hidden" : void 0
  }));
  get arrowStyle() {
    return this.#arrowStyle();
  }
  set arrowStyle($$value) {
    return this.#arrowStyle($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch$1(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => this.#desiredPlacement(),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    watch$1(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      const win = getWindow$1(contentNode);
      this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
    });
  }
}
class FloatingAnchorState {
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.virtualEl && opts.virtualEl.current) {
      root.triggerNode = box.from(opts.virtualEl.current);
    } else {
      root.triggerNode = opts.ref;
    }
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$payload, $$props) {
  push();
  let { children, tooltip = false } = $$props;
  FloatingRootState.create(tooltip);
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
const defaultOptions = { afterMs: 1e4, onChange: noop$1 };
function boxAutoReset(defaultValue, options) {
  const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
  let timeout = null;
  let value = defaultValue;
  function resetAfter() {
    return getWindow2().setTimeout(
      () => {
        value = defaultValue;
        onChange?.(defaultValue);
      },
      afterMs
    );
  }
  return box.with(() => value, (v) => {
    value = v;
    onChange?.(v);
    if (timeout) getWindow2().clearTimeout(timeout);
    timeout = resetAfter();
  });
}
function Floating_layer_anchor($$payload, $$props) {
  push();
  let { id, children, virtualEl, ref, tooltip = false } = $$props;
  FloatingAnchorState.create(
    {
      id: box.with(() => id),
      virtualEl: box.with(() => virtualEl),
      ref
    },
    tooltip
  );
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
function Floating_layer_content($$payload, $$props) {
  push();
  let {
    content,
    side = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    id,
    arrowPadding = 0,
    avoidCollisions = true,
    collisionBoundary = [],
    collisionPadding = 0,
    hideWhenDetached = false,
    onPlaced = () => {
    },
    sticky = "partial",
    updatePositionStrategy = "optimized",
    strategy = "fixed",
    dir = "ltr",
    style = {},
    wrapperId = useId$1(),
    customAnchor = null,
    enabled,
    tooltip = false
  } = $$props;
  const contentState = FloatingContentState.create(
    {
      side: box.with(() => side),
      sideOffset: box.with(() => sideOffset),
      align: box.with(() => align),
      alignOffset: box.with(() => alignOffset),
      id: box.with(() => id),
      arrowPadding: box.with(() => arrowPadding),
      avoidCollisions: box.with(() => avoidCollisions),
      collisionBoundary: box.with(() => collisionBoundary),
      collisionPadding: box.with(() => collisionPadding),
      hideWhenDetached: box.with(() => hideWhenDetached),
      onPlaced: box.with(() => onPlaced),
      sticky: box.with(() => sticky),
      updatePositionStrategy: box.with(() => updatePositionStrategy),
      strategy: box.with(() => strategy),
      dir: box.with(() => dir),
      style: box.with(() => style),
      enabled: box.with(() => enabled),
      wrapperId: box.with(() => wrapperId),
      customAnchor: box.with(() => customAnchor)
    },
    tooltip
  );
  const mergedProps = mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } });
  content?.($$payload, { props: contentState.props, wrapperProps: mergedProps });
  $$payload.out.push(`<!---->`);
  pop();
}
function Floating_layer_content_static($$payload, $$props) {
  push();
  let { content } = $$props;
  content?.($$payload, { props: {}, wrapperProps: {} });
  $$payload.out.push(`<!---->`);
  pop();
}
const separatorAttrs = createBitsAttrs({ component: "separator", parts: ["root"] });
class SeparatorRootState {
  static create(opts) {
    return new SeparatorRootState(opts);
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.opts.decorative.current ? "none" : "separator",
    "aria-orientation": getAriaOrientation(this.opts.orientation.current),
    "aria-hidden": getAriaHidden(this.opts.decorative.current),
    "data-orientation": getDataOrientation(this.opts.orientation.current),
    [separatorAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Separator$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    child,
    children,
    decorative = false,
    orientation = "horizontal",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = SeparatorRootState.create({
    ref: box.with(() => ref, (v) => ref = v),
    id: box.with(() => id),
    decorative: box.with(() => decorative),
    orientation: box.with(() => orientation)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Popper_content($$payload, $$props) {
  let {
    content,
    isStatic = false,
    onPlaced,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (isStatic) {
    $$payload.out.push("<!--[-->");
    Floating_layer_content_static($$payload, { content });
  } else {
    $$payload.out.push("<!--[!-->");
    Floating_layer_content($$payload, spread_props([{ content, onPlaced }, restProps]));
  }
  $$payload.out.push(`<!--]-->`);
}
function Popper_layer_inner($$payload, $$props) {
  push();
  let {
    popper,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent: isValidEvent2 = () => false,
    customAnchor = null,
    isStatic = false,
    enabled,
    ref,
    tooltip = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  {
    let content = function($$payload2, { props: floatingProps, wrapperProps }) {
      if (restProps.forceMount && enabled) {
        $$payload2.out.push("<!--[-->");
        Scroll_lock($$payload2, { preventScroll });
      } else {
        $$payload2.out.push("<!--[!-->");
        if (!restProps.forceMount) {
          $$payload2.out.push("<!--[-->");
          Scroll_lock($$payload2, { preventScroll });
        } else {
          $$payload2.out.push("<!--[!-->");
        }
        $$payload2.out.push(`<!--]-->`);
      }
      $$payload2.out.push(`<!--]--> `);
      {
        let focusScope = function($$payload3, { props: focusScopeProps }) {
          Escape_layer($$payload3, {
            onEscapeKeydown,
            escapeKeydownBehavior,
            enabled,
            ref,
            children: ($$payload4) => {
              {
                let children = function($$payload5, { props: dismissibleProps }) {
                  Text_selection_layer($$payload5, {
                    id,
                    preventOverflowTextSelection,
                    onPointerDown,
                    onPointerUp,
                    enabled,
                    ref,
                    children: ($$payload6) => {
                      popper?.($$payload6, {
                        props: mergeProps(restProps, floatingProps, dismissibleProps, focusScopeProps, { style: { pointerEvents: "auto" } }),
                        wrapperProps
                      });
                      $$payload6.out.push(`<!---->`);
                    }
                  });
                };
                Dismissible_layer($$payload4, {
                  id,
                  onInteractOutside,
                  onFocusOutside,
                  interactOutsideBehavior,
                  isValidEvent: isValidEvent2,
                  enabled,
                  ref,
                  children
                });
              }
            }
          });
        };
        Focus_scope($$payload2, {
          onOpenAutoFocus,
          onCloseAutoFocus,
          loop,
          enabled,
          trapFocus,
          forceMount: restProps.forceMount,
          ref,
          focusScope
        });
      }
      $$payload2.out.push(`<!---->`);
    };
    Popper_content($$payload, {
      isStatic,
      id,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      wrapperId,
      style,
      onPlaced,
      customAnchor,
      enabled,
      tooltip,
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
function Popper_layer($$payload, $$props) {
  let {
    popper,
    open,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent: isValidEvent2 = () => false,
    customAnchor = null,
    isStatic = false,
    ref,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  {
    let presence = function($$payload2) {
      Popper_layer_inner($$payload2, spread_props([
        {
          popper,
          onEscapeKeydown,
          escapeKeydownBehavior,
          preventOverflowTextSelection,
          id,
          onPointerDown,
          onPointerUp,
          side,
          sideOffset,
          align,
          alignOffset,
          arrowPadding,
          avoidCollisions,
          collisionBoundary,
          collisionPadding,
          sticky,
          hideWhenDetached,
          updatePositionStrategy,
          strategy,
          dir,
          preventScroll,
          wrapperId,
          style,
          onPlaced,
          customAnchor,
          isStatic,
          enabled: open,
          onInteractOutside,
          onCloseAutoFocus,
          onOpenAutoFocus,
          interactOutsideBehavior,
          loop,
          trapFocus,
          isValidEvent: isValidEvent2,
          onFocusOutside,
          forceMount: false,
          ref
        },
        restProps
      ]));
    };
    Presence_layer($$payload, { open, ref, presence });
  }
}
function Popper_layer_force_mount($$payload, $$props) {
  let {
    popper,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent: isValidEvent2 = () => false,
    customAnchor = null,
    isStatic = false,
    enabled,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  Popper_layer_inner($$payload, spread_props([
    {
      popper,
      onEscapeKeydown,
      escapeKeydownBehavior,
      preventOverflowTextSelection,
      id,
      onPointerDown,
      onPointerUp,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      preventScroll,
      wrapperId,
      style,
      onPlaced,
      customAnchor,
      isStatic,
      enabled,
      onInteractOutside,
      onCloseAutoFocus,
      onOpenAutoFocus,
      interactOutsideBehavior,
      loop,
      trapFocus,
      isValidEvent: isValidEvent2,
      onFocusOutside
    },
    restProps,
    { forceMount: true }
  ]));
}
class GraceArea {
  #opts;
  #enabled;
  #isPointerInTransit;
  #pointerGraceArea = null;
  constructor(opts) {
    this.#opts = opts;
    this.#enabled = derived(() => this.#opts.enabled());
    this.#isPointerInTransit = boxAutoReset(false, {
      afterMs: opts.transitTimeout ?? 300,
      onChange: (value) => {
        if (!this.#enabled()) return;
        this.#opts.setIsPointerInTransit?.(value);
      },
      getWindow: () => getWindow$1(this.#opts.triggerNode())
    });
    watch$1([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled]) => {
      if (!triggerNode || !contentNode || !enabled) return;
      const handleTriggerLeave = (e) => {
        this.#createGraceArea(e, contentNode);
      };
      const handleContentLeave = (e) => {
        this.#createGraceArea(e, triggerNode);
      };
      return executeCallbacks(on(triggerNode, "pointerleave", handleTriggerLeave), on(contentNode, "pointerleave", handleContentLeave));
    });
    watch$1(() => this.#pointerGraceArea, () => {
      const handleTrackPointerGrace = (e) => {
        if (!this.#pointerGraceArea) return;
        const target = e.target;
        if (!isElement$1(target)) return;
        const pointerPosition = { x: e.clientX, y: e.clientY };
        const hasEnteredTarget = opts.triggerNode()?.contains(target) || opts.contentNode()?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, this.#pointerGraceArea);
        if (hasEnteredTarget) {
          this.#removeGraceArea();
        } else if (isPointerOutsideGraceArea) {
          this.#removeGraceArea();
          opts.onPointerExit();
        }
      };
      const doc = getDocument(opts.triggerNode() ?? opts.contentNode());
      if (!doc) return;
      return on(doc, "pointermove", handleTrackPointerGrace);
    });
  }
  #removeGraceArea() {
    this.#pointerGraceArea = null;
    this.#isPointerInTransit.current = false;
  }
  #createGraceArea(e, hoverTarget) {
    const currentTarget = e.currentTarget;
    if (!isHTMLElement$2(currentTarget)) return;
    const exitPoint = { x: e.clientX, y: e.clientY };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    this.#pointerGraceArea = graceArea;
    this.#isPointerInTransit.current = true;
  }
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const tipPadding = padding * 1.5;
  switch (exitSide) {
    case "top":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x, y: exitPoint.y - tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "bottom":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x, y: exitPoint.y + tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      ];
    case "left":
      return [
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x - tipPadding, y: exitPoint.y },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "right":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + tipPadding, y: exitPoint.y },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      ];
  }
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
const popoverAttrs = createBitsAttrs({
  component: "popover",
  parts: ["root", "trigger", "content", "close"]
});
const PopoverRootContext = new Context$1("Popover.Root");
class PopoverRootState {
  static create(opts) {
    return PopoverRootContext.set(new PopoverRootState(opts));
  }
  opts;
  contentNode = null;
  triggerNode = null;
  constructor(opts) {
    this.opts = opts;
    new OpenChangeComplete({
      ref: box.with(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
}
class PopoverTriggerState {
  static create(opts) {
    return new PopoverTriggerState(opts, PopoverRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.toggleOpen();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (!(e.key === ENTER || e.key === SPACE)) return;
    e.preventDefault();
    this.root.toggleOpen();
  }
  #getAriaControls() {
    if (this.root.opts.open.current && this.root.contentNode?.id) {
      return this.root.contentNode?.id;
    }
    return void 0;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-haspopup": "dialog",
    "aria-expanded": getAriaExpanded(this.root.opts.open.current),
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "aria-controls": this.#getAriaControls(),
    [popoverAttrs.trigger]: "",
    disabled: this.opts.disabled.current,
    //
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PopoverContentState {
  static create(opts) {
    return new PopoverContentState(opts, PopoverRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
  }
  onInteractOutside = (e) => {
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    if (!isElement$1(e.target)) return;
    const closestTrigger = e.target.closest(popoverAttrs.selector("trigger"));
    if (closestTrigger && closestTrigger === this.root.triggerNode) return;
    if (this.opts.customAnchor.current) {
      if (isElement$1(this.opts.customAnchor.current)) {
        if (this.opts.customAnchor.current.contains(e.target)) return;
      } else if (typeof this.opts.customAnchor.current === "string") {
        const el = document.querySelector(this.opts.customAnchor.current);
        if (el && el.contains(e.target)) return;
      }
    }
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    tabindex: -1,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    [popoverAttrs.content]: "",
    style: { pointerEvents: "auto" },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown
  };
}
function Popover_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    ref = null,
    id = createId(uid),
    forceMount = false,
    onCloseAutoFocus = noop$1,
    onEscapeKeydown = noop$1,
    onInteractOutside = noop$1,
    trapFocus = true,
    preventScroll = false,
    customAnchor = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = PopoverContentState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    onInteractOutside: box.with(() => onInteractOutside),
    onEscapeKeydown: box.with(() => onEscapeKeydown),
    customAnchor: box.with(() => customAnchor)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  if (forceMount) {
    $$payload.out.push("<!--[-->");
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") });
        if (child) {
          $$payload2.out.push("<!--[-->");
          child($$payload2, {
            props: finalProps,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out.push(`<!---->`);
        } else {
          $$payload2.out.push("<!--[!-->");
          $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...finalProps }, null)}>`);
          children?.($$payload2);
          $$payload2.out.push(`<!----></div></div>`);
        }
        $$payload2.out.push(`<!--]-->`);
      };
      Popper_layer_force_mount($$payload, spread_props([
        mergedProps,
        contentState.popperProps,
        {
          ref: contentState.opts.ref,
          enabled: contentState.root.opts.open.current,
          id,
          trapFocus,
          preventScroll,
          loop: true,
          forceMount: true,
          customAnchor,
          onCloseAutoFocus,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else {
    $$payload.out.push("<!--[!-->");
    if (!forceMount) {
      $$payload.out.push("<!--[-->");
      {
        let popper = function($$payload2, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") });
          if (child) {
            $$payload2.out.push("<!--[-->");
            child($$payload2, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload2.out.push(`<!---->`);
          } else {
            $$payload2.out.push("<!--[!-->");
            $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...finalProps }, null)}>`);
            children?.($$payload2);
            $$payload2.out.push(`<!----></div></div>`);
          }
          $$payload2.out.push(`<!--]-->`);
        };
        Popper_layer($$payload, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            open: contentState.root.opts.open.current,
            id,
            trapFocus,
            preventScroll,
            loop: true,
            forceMount: false,
            customAnchor,
            onCloseAutoFocus,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Popover_trigger($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    type = "button",
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = PopoverTriggerState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
  Floating_layer_anchor($$payload, {
    id,
    ref: triggerState.opts.ref,
    children: ($$payload2) => {
      if (child) {
        $$payload2.out.push("<!--[-->");
        child($$payload2, { props: mergedProps });
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
        children?.($$payload2);
        $$payload2.out.push(`<!----></button>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
  });
  bind_props($$props, { ref });
  pop();
}
function Dialog($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop$1,
    onOpenChangeComplete = noop$1,
    children
  } = $$props;
  DialogRootState.create({
    variant: box.with(() => "dialog"),
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete)
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  bind_props($$props, { open });
  pop();
}
function Dialog_close($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const closeState = DialogCloseState.create({
    variant: box.with(() => "close"),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, closeState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Dialog_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    children,
    child,
    ref = null,
    forceMount = false,
    onCloseAutoFocus = noop$1,
    onOpenAutoFocus = noop$1,
    onEscapeKeydown = noop$1,
    onInteractOutside = noop$1,
    trapFocus = true,
    preventScroll = true,
    restoreScrollDelay = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = DialogContentState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  {
    let presence = function($$payload2) {
      {
        let focusScope = function($$payload3, { props: focusScopeProps }) {
          Escape_layer($$payload3, spread_props([
            mergedProps,
            {
              enabled: contentState.root.opts.open.current,
              ref: contentState.opts.ref,
              onEscapeKeydown: (e) => {
                onEscapeKeydown(e);
                if (e.defaultPrevented) return;
                contentState.root.handleClose();
              },
              children: ($$payload4) => {
                Dismissible_layer($$payload4, spread_props([
                  mergedProps,
                  {
                    ref: contentState.opts.ref,
                    enabled: contentState.root.opts.open.current,
                    onInteractOutside: (e) => {
                      onInteractOutside(e);
                      if (e.defaultPrevented) return;
                      contentState.root.handleClose();
                    },
                    children: ($$payload5) => {
                      Text_selection_layer($$payload5, spread_props([
                        mergedProps,
                        {
                          ref: contentState.opts.ref,
                          enabled: contentState.root.opts.open.current,
                          children: ($$payload6) => {
                            if (child) {
                              $$payload6.out.push("<!--[-->");
                              if (contentState.root.opts.open.current) {
                                $$payload6.out.push("<!--[-->");
                                Scroll_lock($$payload6, { preventScroll, restoreScrollDelay });
                              } else {
                                $$payload6.out.push("<!--[!-->");
                              }
                              $$payload6.out.push(`<!--]--> `);
                              child($$payload6, {
                                props: mergeProps(mergedProps, focusScopeProps),
                                ...contentState.snippetProps
                              });
                              $$payload6.out.push(`<!---->`);
                            } else {
                              $$payload6.out.push("<!--[!-->");
                              Scroll_lock($$payload6, { preventScroll });
                              $$payload6.out.push(`<!----> <div${spread_attributes({ ...mergeProps(mergedProps, focusScopeProps) }, null)}>`);
                              children?.($$payload6);
                              $$payload6.out.push(`<!----></div>`);
                            }
                            $$payload6.out.push(`<!--]-->`);
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            }
          ]));
        };
        Focus_scope($$payload2, {
          ref: contentState.opts.ref,
          loop: true,
          trapFocus,
          enabled: shouldEnableFocusTrap({
            forceMount,
            present: contentState.root.opts.open.current,
            open: contentState.root.opts.open.current
          }),
          onOpenAutoFocus,
          onCloseAutoFocus,
          focusScope
        });
      }
    };
    Presence_layer($$payload, spread_props([
      mergedProps,
      {
        forceMount,
        open: contentState.root.opts.open.current || forceMount,
        ref: contentState.opts.ref,
        presence,
        $$slots: { presence: true }
      }
    ]));
  }
  bind_props($$props, { ref });
  pop();
}
function Popover($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop$1,
    onOpenChangeComplete = noop$1,
    children
  } = $$props;
  PopoverRootState.create({
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete)
  });
  Floating_layer($$payload, {
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out.push(`<!---->`);
    }
  });
  bind_props($$props, { open });
  pop();
}
const switchAttrs = createBitsAttrs({ component: "switch", parts: ["root", "thumb"] });
const SwitchRootContext = new Context$1("Switch.Root");
class SwitchRootState {
  static create(opts) {
    return SwitchRootContext.set(new SwitchRootState(opts));
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  #toggle() {
    this.opts.checked.current = !this.opts.checked.current;
  }
  onkeydown(e) {
    if (!(e.key === ENTER || e.key === SPACE) || this.opts.disabled.current) return;
    e.preventDefault();
    this.#toggle();
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    this.#toggle();
  }
  #sharedProps = derived(() => ({
    "data-disabled": getDataDisabled(this.opts.disabled.current),
    "data-state": getDataChecked(this.opts.checked.current),
    "data-required": getDataRequired(this.opts.required.current)
  }));
  get sharedProps() {
    return this.#sharedProps();
  }
  set sharedProps($$value) {
    return this.#sharedProps($$value);
  }
  #snippetProps = derived(() => ({ checked: this.opts.checked.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    ...this.sharedProps,
    id: this.opts.id.current,
    role: "switch",
    disabled: getDisabled(this.opts.disabled.current),
    "aria-checked": getAriaChecked(this.opts.checked.current),
    "aria-required": getAriaRequired(this.opts.required.current),
    [switchAttrs.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SwitchInputState {
  static create() {
    return new SwitchInputState(SwitchRootContext.get());
  }
  root;
  #shouldRender = derived(() => this.root.opts.name.current !== void 0);
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(root) {
    this.root = root;
  }
  #props = derived(() => ({
    type: "checkbox",
    name: this.root.opts.name.current,
    value: this.root.opts.value.current,
    checked: this.root.opts.checked.current,
    disabled: this.root.opts.disabled.current,
    required: this.root.opts.required.current
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SwitchThumbState {
  static create(opts) {
    return new SwitchThumbState(opts, SwitchRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #snippetProps = derived(() => ({ checked: this.root.opts.checked.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    ...this.root.sharedProps,
    id: this.opts.id.current,
    [switchAttrs.thumb]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Switch_input($$payload, $$props) {
  push();
  const inputState = SwitchInputState.create();
  if (inputState.shouldRender) {
    $$payload.out.push("<!--[-->");
    Hidden_input($$payload, spread_props([inputState.props]));
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function Switch$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    ref = null,
    id = createId(uid),
    disabled = false,
    required = false,
    checked = false,
    value = "on",
    name = void 0,
    type = "button",
    onCheckedChange = noop$1,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = SwitchRootState.create({
    checked: box.with(() => checked, (v) => {
      checked = v;
      onCheckedChange?.(v);
    }),
    disabled: box.with(() => disabled ?? false),
    required: box.with(() => required),
    value: box.with(() => value),
    name: box.with(() => name),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props, { type });
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps, ...rootState.snippetProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload, rootState.snippetProps);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]--> `);
  Switch_input($$payload);
  $$payload.out.push(`<!---->`);
  bind_props($$props, { ref, checked });
  pop();
}
function Switch_thumb($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    child,
    children,
    ref = null,
    id = createId(uid),
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const thumbState = SwitchThumbState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, thumbState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps, ...thumbState.snippetProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<span${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload, thumbState.snippetProps);
    $$payload.out.push(`<!----></span>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
const toggleAttrs = createBitsAttrs({ component: "toggle", parts: ["root"] });
class ToggleRootState {
  static create(opts) {
    return new ToggleRootState(opts);
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
  }
  #togglePressed() {
    if (!this.opts.disabled.current) {
      this.opts.pressed.current = !this.opts.pressed.current;
    }
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    this.#togglePressed();
  }
  #snippetProps = derived(() => ({ pressed: this.opts.pressed.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    [toggleAttrs.root]: "",
    id: this.opts.id.current,
    "data-disabled": getDataDisabled(this.opts.disabled.current),
    "aria-pressed": getAriaPressed(this.opts.pressed.current),
    "data-state": getToggleDataState(this.opts.pressed.current),
    disabled: getDisabled(this.opts.disabled.current),
    onclick: this.onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getToggleDataState(condition) {
  return condition ? "on" : "off";
}
function Toggle$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    ref = null,
    id = createId(uid),
    pressed = false,
    onPressedChange = noop$1,
    disabled = false,
    type = "button",
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const toggleState = ToggleRootState.create({
    pressed: box.with(() => pressed, (v) => {
      pressed = v;
      onPressedChange(v);
    }),
    disabled: box.with(() => disabled ?? false),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, toggleState.props, { type });
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps, ...toggleState.snippetProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload, toggleState.snippetProps);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, pressed });
  pop();
}
const toggleGroupAttrs = createBitsAttrs({ component: "toggle-group", parts: ["root", "item"] });
const ToggleGroupRootContext = new Context$1("ToggleGroup.Root");
class ToggleGroupBaseState {
  opts;
  rovingFocusGroup;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      candidateAttr: toggleGroupAttrs.item,
      rootNode: opts.ref,
      loop: opts.loop,
      orientation: opts.orientation
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [toggleGroupAttrs.root]: "",
    role: "group",
    "data-orientation": getDataOrientation(this.opts.orientation.current),
    "data-disabled": getDataDisabled(this.opts.disabled.current),
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ToggleGroupSingleState extends ToggleGroupBaseState {
  opts;
  isMulti = false;
  #anyPressed = derived(() => this.opts.value.current !== "");
  get anyPressed() {
    return this.#anyPressed();
  }
  set anyPressed($$value) {
    return this.#anyPressed($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }
  includesItem(item) {
    return this.opts.value.current === item;
  }
  toggleItem(item, id) {
    if (this.includesItem(item)) {
      this.opts.value.current = "";
    } else {
      this.opts.value.current = item;
      this.rovingFocusGroup.setCurrentTabStopId(id);
    }
  }
}
class ToggleGroupMultipleState extends ToggleGroupBaseState {
  opts;
  isMulti = true;
  #anyPressed = derived(() => this.opts.value.current.length > 0);
  get anyPressed() {
    return this.#anyPressed();
  }
  set anyPressed($$value) {
    return this.#anyPressed($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }
  includesItem(item) {
    return this.opts.value.current.includes(item);
  }
  toggleItem(item, id) {
    if (this.includesItem(item)) {
      this.opts.value.current = this.opts.value.current.filter((v) => v !== item);
    } else {
      this.opts.value.current = [...this.opts.value.current, item];
      this.rovingFocusGroup.setCurrentTabStopId(id);
    }
  }
}
class ToggleGroupRootState {
  static create(opts) {
    const { type, ...rest } = opts;
    const rootState = type === "single" ? new ToggleGroupSingleState(rest) : new ToggleGroupMultipleState(rest);
    return ToggleGroupRootContext.set(rootState);
  }
}
class ToggleGroupItemState {
  static create(opts) {
    return new ToggleGroupItemState(opts, ToggleGroupRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
  #isPressed = derived(() => this.root.includesItem(this.opts.value.current));
  get isPressed() {
    return this.#isPressed();
  }
  set isPressed($$value) {
    return this.#isPressed($$value);
  }
  #ariaChecked = derived(() => {
    return this.root.isMulti ? void 0 : getAriaChecked(this.isPressed);
  });
  #ariaPressed = derived(() => {
    return this.root.isMulti ? getAriaPressed(this.isPressed) : void 0;
  });
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #toggleItem() {
    if (this.#isDisabled()) return;
    this.root.toggleItem(this.opts.value.current, this.opts.id.current);
  }
  onclick(_) {
    if (this.#isDisabled()) return;
    this.root.toggleItem(this.opts.value.current, this.opts.id.current);
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === ENTER || e.key === SPACE) {
      e.preventDefault();
      this.#toggleItem();
      return;
    }
    if (!this.root.opts.rovingFocus.current) return;
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  #tabIndex = 0;
  #snippetProps = derived(() => ({ pressed: this.isPressed }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.root.isMulti ? void 0 : "radio",
    tabindex: this.#tabIndex,
    "data-orientation": getDataOrientation(this.root.opts.orientation.current),
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "data-state": getToggleItemDataState(this.isPressed),
    "data-value": this.opts.value.current,
    "aria-pressed": this.#ariaPressed(),
    "aria-checked": this.#ariaChecked(),
    disabled: getDisabled(this.#isDisabled()),
    [toggleGroupAttrs.item]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getToggleItemDataState(condition) {
  return condition ? "on" : "off";
}
function Toggle_group$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    id = createId(uid),
    ref = null,
    value = void 0,
    onValueChange = noop$1,
    type,
    disabled = false,
    loop = true,
    orientation = "horizontal",
    rovingFocus = true,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function handleDefaultValue() {
    if (value !== void 0) return;
    value = type === "single" ? "" : [];
  }
  handleDefaultValue();
  watch$1.pre(() => value, () => {
    handleDefaultValue();
  });
  const rootState = ToggleGroupRootState.create({
    id: box.with(() => id),
    value: box.with(() => value, (v) => {
      value = v;
      onValueChange(v);
    }),
    disabled: box.with(() => disabled),
    loop: box.with(() => loop),
    orientation: box.with(() => orientation),
    rovingFocus: box.with(() => rovingFocus),
    type,
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, value });
  pop();
}
function Toggle_group_item$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    ref = null,
    value,
    disabled = false,
    id = createId(uid),
    type = "button",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = ToggleGroupItemState.create({
    id: box.with(() => id),
    value: box.with(() => value),
    disabled: box.with(() => disabled ?? false),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, itemState.props, { type });
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps, ...itemState.snippetProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload, itemState.snippetProps);
    $$payload.out.push(`<!----></button>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
const defaultOpts = {
  immediate: true
};
class TimeoutFn {
  #opts;
  #interval;
  #cb;
  #timer = null;
  constructor(cb, interval, opts = {}) {
    this.#cb = cb;
    this.#interval = interval;
    this.#opts = { ...defaultOpts, ...opts };
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    if (this.#opts.immediate && BROWSER) ;
    onDestroyEffect(this.stop);
  }
  #clear() {
    if (this.#timer !== null) {
      window.clearTimeout(this.#timer);
      this.#timer = null;
    }
  }
  stop() {
    this.#clear();
  }
  start(...args) {
    this.#clear();
    this.#timer = window.setTimeout(() => {
      this.#timer = null;
      this.#cb(...args);
    }, this.#interval);
  }
}
const tooltipAttrs = createBitsAttrs({ component: "tooltip", parts: ["content", "trigger"] });
const TooltipProviderContext = new Context$1("Tooltip.Provider");
const TooltipRootContext = new Context$1("Tooltip.Root");
class TooltipProviderState {
  static create(opts) {
    return TooltipProviderContext.set(new TooltipProviderState(opts));
  }
  opts;
  isOpenDelayed = true;
  isPointerInTransit = box(false);
  #timerFn;
  #openTooltip = null;
  constructor(opts) {
    this.opts = opts;
    this.#timerFn = new TimeoutFn(
      () => {
        this.isOpenDelayed = true;
      },
      this.opts.skipDelayDuration.current,
      { immediate: false }
    );
  }
  #startTimer = () => {
    const skipDuration = this.opts.skipDelayDuration.current;
    if (skipDuration === 0) {
      return;
    } else {
      this.#timerFn.start();
    }
  };
  #clearTimer = () => {
    this.#timerFn.stop();
  };
  onOpen = (tooltip) => {
    if (this.#openTooltip && this.#openTooltip !== tooltip) {
      this.#openTooltip.handleClose();
    }
    this.#clearTimer();
    this.isOpenDelayed = false;
    this.#openTooltip = tooltip;
  };
  onClose = (tooltip) => {
    if (this.#openTooltip === tooltip) {
      this.#openTooltip = null;
    }
    this.#startTimer();
  };
  isTooltipOpen = (tooltip) => {
    return this.#openTooltip === tooltip;
  };
}
class TooltipRootState {
  static create(opts) {
    return TooltipRootContext.set(new TooltipRootState(opts, TooltipProviderContext.get()));
  }
  opts;
  provider;
  #delayDuration = derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current);
  get delayDuration() {
    return this.#delayDuration();
  }
  set delayDuration($$value) {
    return this.#delayDuration($$value);
  }
  #disableHoverableContent = derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current);
  get disableHoverableContent() {
    return this.#disableHoverableContent();
  }
  set disableHoverableContent($$value) {
    return this.#disableHoverableContent($$value);
  }
  #disableCloseOnTriggerClick = derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current);
  get disableCloseOnTriggerClick() {
    return this.#disableCloseOnTriggerClick();
  }
  set disableCloseOnTriggerClick($$value) {
    return this.#disableCloseOnTriggerClick($$value);
  }
  #disabled = derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
  get disabled() {
    return this.#disabled();
  }
  set disabled($$value) {
    return this.#disabled($$value);
  }
  #ignoreNonKeyboardFocus = derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current);
  get ignoreNonKeyboardFocus() {
    return this.#ignoreNonKeyboardFocus();
  }
  set ignoreNonKeyboardFocus($$value) {
    return this.#ignoreNonKeyboardFocus($$value);
  }
  contentNode = null;
  triggerNode = null;
  #wasOpenDelayed = false;
  #timerFn;
  #stateAttr = derived(() => {
    if (!this.opts.open.current) return "closed";
    return this.#wasOpenDelayed ? "delayed-open" : "instant-open";
  });
  get stateAttr() {
    return this.#stateAttr();
  }
  set stateAttr($$value) {
    return this.#stateAttr($$value);
  }
  constructor(opts, provider) {
    this.opts = opts;
    this.provider = provider;
    this.#timerFn = new TimeoutFn(
      () => {
        this.#wasOpenDelayed = true;
        this.opts.open.current = true;
      },
      this.delayDuration ?? 0,
      { immediate: false }
    );
    new OpenChangeComplete({
      open: this.opts.open,
      ref: box.with(() => this.contentNode),
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    watch$1(() => this.delayDuration, () => {
      if (this.delayDuration === void 0) return;
      this.#timerFn = new TimeoutFn(
        () => {
          this.#wasOpenDelayed = true;
          this.opts.open.current = true;
        },
        this.delayDuration,
        { immediate: false }
      );
    });
    watch$1(() => this.opts.open.current, (isOpen) => {
      if (isOpen) {
        this.provider.onOpen(this);
      } else {
        this.provider.onClose(this);
      }
    });
  }
  handleOpen = () => {
    this.#timerFn.stop();
    this.#wasOpenDelayed = false;
    this.opts.open.current = true;
  };
  handleClose = () => {
    this.#timerFn.stop();
    this.opts.open.current = false;
  };
  #handleDelayedOpen = () => {
    this.#timerFn.stop();
    const shouldSkipDelay = !this.provider.isOpenDelayed;
    const delayDuration = this.delayDuration ?? 0;
    if (shouldSkipDelay || delayDuration === 0) {
      this.#wasOpenDelayed = delayDuration > 0 && shouldSkipDelay;
      this.opts.open.current = true;
    } else {
      this.#timerFn.start();
    }
  };
  onTriggerEnter = () => {
    this.#handleDelayedOpen();
  };
  onTriggerLeave = () => {
    if (this.disableHoverableContent) {
      this.handleClose();
    } else {
      this.#timerFn.stop();
    }
  };
}
class TooltipTriggerState {
  static create(opts) {
    return new TooltipTriggerState(opts, TooltipRootContext.get());
  }
  opts;
  root;
  attachment;
  #isPointerDown = box(false);
  #hasPointerMoveOpened = false;
  #isDisabled = derived(() => this.opts.disabled.current || this.root.disabled);
  domContext;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.domContext = new DOMContext(opts.ref);
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
  }
  handlePointerUp = () => {
    this.#isPointerDown.current = false;
  };
  #onpointerup = () => {
    if (this.#isDisabled()) return;
    this.#isPointerDown.current = false;
  };
  #onpointerdown = () => {
    if (this.#isDisabled()) return;
    this.#isPointerDown.current = true;
    this.domContext.getDocument().addEventListener(
      "pointerup",
      () => {
        this.handlePointerUp();
      },
      { once: true }
    );
  };
  #onpointermove = (e) => {
    if (this.#isDisabled()) return;
    if (e.pointerType === "touch") return;
    if (this.#hasPointerMoveOpened) return;
    if (this.root.provider.isPointerInTransit.current) return;
    this.root.onTriggerEnter();
    this.#hasPointerMoveOpened = true;
  };
  #onpointerleave = () => {
    if (this.#isDisabled()) return;
    this.root.onTriggerLeave();
    this.#hasPointerMoveOpened = false;
  };
  #onfocus = (e) => {
    if (this.#isPointerDown.current || this.#isDisabled()) return;
    if (this.root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget)) return;
    this.root.handleOpen();
  };
  #onblur = () => {
    if (this.#isDisabled()) return;
    this.root.handleClose();
  };
  #onclick = () => {
    if (this.root.disableCloseOnTriggerClick || this.#isDisabled()) return;
    this.root.handleClose();
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-describedby": this.root.opts.open.current ? this.root.contentNode?.id : void 0,
    "data-state": this.root.stateAttr,
    "data-disabled": getDataDisabled(this.#isDisabled()),
    "data-delay-duration": `${this.root.delayDuration}`,
    [tooltipAttrs.trigger]: "",
    tabindex: this.#isDisabled() ? void 0 : 0,
    disabled: this.opts.disabled.current,
    onpointerup: this.#onpointerup,
    onpointerdown: this.#onpointerdown,
    onpointermove: this.#onpointermove,
    onpointerleave: this.#onpointerleave,
    onfocus: this.#onfocus,
    onblur: this.#onblur,
    onclick: this.#onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class TooltipContentState {
  static create(opts) {
    return new TooltipContentState(opts, TooltipRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
    new GraceArea({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.root.contentNode,
      enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
      onPointerExit: () => {
        if (this.root.provider.isTooltipOpen(this.root)) {
          this.root.handleClose();
        }
      },
      setIsPointerInTransit: (value) => {
        this.root.provider.isPointerInTransit.current = value;
      },
      transitTimeout: this.root.provider.opts.skipDelayDuration.current
    });
  }
  onInteractOutside = (e) => {
    if (isElement$1(e.target) && this.root.triggerNode?.contains(e.target) && this.root.disableCloseOnTriggerClick) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current?.(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-state": this.root.stateAttr,
    "data-disabled": getDataDisabled(this.root.disabled),
    style: { pointerEvents: "auto", outline: "none" },
    [tooltipAttrs.content]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus
  };
}
function Tooltip($$payload, $$props) {
  push();
  let {
    open = false,
    onOpenChange = noop$1,
    onOpenChangeComplete = noop$1,
    disabled,
    delayDuration,
    disableCloseOnTriggerClick,
    disableHoverableContent,
    ignoreNonKeyboardFocus,
    children
  } = $$props;
  TooltipRootState.create({
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    delayDuration: box.with(() => delayDuration),
    disableCloseOnTriggerClick: box.with(() => disableCloseOnTriggerClick),
    disableHoverableContent: box.with(() => disableHoverableContent),
    ignoreNonKeyboardFocus: box.with(() => ignoreNonKeyboardFocus),
    disabled: box.with(() => disabled),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete)
  });
  Floating_layer($$payload, {
    tooltip: true,
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out.push(`<!---->`);
    }
  });
  bind_props($$props, { open });
  pop();
}
function Tooltip_content$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    side = "top",
    sideOffset = 0,
    align = "center",
    avoidCollisions = true,
    arrowPadding = 0,
    sticky = "partial",
    hideWhenDetached = false,
    collisionPadding = 0,
    onInteractOutside = noop$1,
    onEscapeKeydown = noop$1,
    forceMount = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = TooltipContentState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    onInteractOutside: box.with(() => onInteractOutside),
    onEscapeKeydown: box.with(() => onEscapeKeydown)
  });
  const floatingProps = {
    side,
    sideOffset,
    align,
    avoidCollisions,
    arrowPadding,
    sticky,
    hideWhenDetached,
    collisionPadding
  };
  const mergedProps = mergeProps(restProps, floatingProps, contentState.props);
  if (forceMount) {
    $$payload.out.push("<!--[-->");
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const mergedProps2 = mergeProps(props, { style: getFloatingContentCSSVars("tooltip") });
        if (child) {
          $$payload2.out.push("<!--[-->");
          child($$payload2, {
            props: mergedProps2,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out.push(`<!---->`);
        } else {
          $$payload2.out.push("<!--[!-->");
          $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...mergedProps2 }, null)}>`);
          children?.($$payload2);
          $$payload2.out.push(`<!----></div></div>`);
        }
        $$payload2.out.push(`<!--]-->`);
      };
      Popper_layer_force_mount($$payload, spread_props([
        mergedProps,
        contentState.popperProps,
        {
          enabled: contentState.root.opts.open.current,
          id,
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: true,
          ref: contentState.opts.ref,
          tooltip: true,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else {
    $$payload.out.push("<!--[!-->");
    if (!forceMount) {
      $$payload.out.push("<!--[-->");
      {
        let popper = function($$payload2, { props, wrapperProps }) {
          const mergedProps2 = mergeProps(props, { style: getFloatingContentCSSVars("tooltip") });
          if (child) {
            $$payload2.out.push("<!--[-->");
            child($$payload2, {
              props: mergedProps2,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload2.out.push(`<!---->`);
          } else {
            $$payload2.out.push("<!--[!-->");
            $$payload2.out.push(`<div${spread_attributes({ ...wrapperProps }, null)}><div${spread_attributes({ ...mergedProps2 }, null)}>`);
            children?.($$payload2);
            $$payload2.out.push(`<!----></div></div>`);
          }
          $$payload2.out.push(`<!--]-->`);
        };
        Popper_layer($$payload, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            open: contentState.root.opts.open.current,
            id,
            trapFocus: false,
            loop: false,
            preventScroll: false,
            forceMount: false,
            ref: contentState.opts.ref,
            tooltip: true,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Tooltip_trigger($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    disabled = false,
    type = "button",
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = TooltipTriggerState.create({
    id: box.with(() => id),
    disabled: box.with(() => disabled ?? false),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
  Floating_layer_anchor($$payload, {
    id,
    ref: triggerState.opts.ref,
    tooltip: true,
    children: ($$payload2) => {
      if (child) {
        $$payload2.out.push("<!--[-->");
        child($$payload2, { props: mergedProps });
        $$payload2.out.push(`<!---->`);
      } else {
        $$payload2.out.push("<!--[!-->");
        $$payload2.out.push(`<button${spread_attributes({ ...mergedProps }, null)}>`);
        children?.($$payload2);
        $$payload2.out.push(`<!----></button>`);
      }
      $$payload2.out.push(`<!--]-->`);
    }
  });
  bind_props($$props, { ref });
  pop();
}
function Tooltip_provider($$payload, $$props) {
  push();
  let {
    children,
    delayDuration = 700,
    disableCloseOnTriggerClick = false,
    disableHoverableContent = false,
    disabled = false,
    ignoreNonKeyboardFocus = false,
    skipDelayDuration = 300
  } = $$props;
  TooltipProviderState.create({
    delayDuration: box.with(() => delayDuration),
    disableCloseOnTriggerClick: box.with(() => disableCloseOnTriggerClick),
    disableHoverableContent: box.with(() => disableHoverableContent),
    disabled: box.with(() => disabled),
    ignoreNonKeyboardFocus: box.with(() => ignoreNonKeyboardFocus),
    skipDelayDuration: box.with(() => skipDelayDuration)
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
function Separator($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    orientation = "horizontal",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Separator$1($$payload2, spread_props([
      {
        class: cn("shrink-0 rounded border", orientation === "horizontal" ? "h-[1px] w-full" : "min-h-6 w-[0px]", className),
        orientation
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Tabs($$payload, $$props) {
  push();
  let { tabs, activeTabID, onselect } = $$props;
  if (!activeTabID && tabs.length > 0) {
    activeTabID = tabs[0].id;
  }
  const toggleTabs = (tab) => {
    return (event) => {
      event.stopPropagation();
      onselect?.(tab);
    };
  };
  const each_array = ensure_array_like(tabs);
  $$payload.out.push(`<div class="flex w-fit cursor-default items-center gap-2"><ul class="flex gap-2 align-middle"><!--[-->`);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let tab = each_array[index];
    Button($$payload, {
      role: "tab",
      variant: "ghost",
      class: [
        "px-2",
        activeTabID === tab.id && "rounded-b-none border-b-2 border-b-primary-foreground/50"
      ],
      onclick: toggleTabs(tab),
      onkeypress: toggleTabs(tab),
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        tab.icon($$payload2, {});
        $$payload2.out.push(`<!----> ${escape_html(tab.title)}`);
      },
      $$slots: { default: true }
    });
    $$payload.out.push(`<!----> `);
    if (index < tabs.length - 1) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="my-2">`);
      Separator($$payload, { orientation: "vertical", class: "w-0.5 bg-slate-300" });
      $$payload.out.push(`<!----></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></ul></div>`);
  pop();
}
function Card($$payload, $$props) {
  push();
  let {
    isClosable = true,
    isOpen = false,
    isStackable = false,
    tabs = [],
    activeTabID = "",
    title,
    icon,
    onselect,
    actions,
    children
  } = $$props;
  let isTabsShown = isOpen && tabs.length > 0;
  $$payload.out.push(`<div${attr_class(clsx$1([
    "card flex h-fit flex-col overflow-hidden rounded-2xl border-2 border-muted",
    isOpen && "isOpen flex-grow",
    isStackable ? "flex-1 group-has-[.isOpen]:w-full group-has-[.isOpen]:flex-none" : "w-full"
  ]))}><div role="toolbar" tabindex="0"${attr_class(clsx$1([
    "flex h-11 flex-none cursor-pointer items-center justify-between bg-muted p-2 whitespace-nowrap",
    isTabsShown && "pb-1"
  ]))}>`);
  if (icon || title) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span role="menubar" tabindex="0" class="flex w-fit items-center gap-3">`);
    if (icon) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<!---->`);
      icon.component($$payload, { class: icon.class });
      $$payload.out.push(`<!---->`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> ${escape_html(title)}</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (isOpen && tabs && tabs.length > 0) {
    $$payload.out.push("<!--[-->");
    Tabs($$payload, { onselect, tabs, activeTabID });
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  actions?.($$payload);
  $$payload.out.push(`<!----> `);
  if (isOpen && isClosable) {
    $$payload.out.push("<!--[-->");
    Collapse_all_rounded($$payload, {});
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> `);
  if (isOpen) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="flex-grow overflow-x-auto">`);
    children($$payload);
    $$payload.out.push(`<!----></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
const notify = (message) => {
  toast(message);
};
const prompt = (message) => {
  return confirm(message);
};
function Check_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path></svg>`);
}
function Content_copy_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm4-6V4z"></path></svg>`);
}
function CopyButton($$payload, $$props) {
  push();
  let { onclick, label = "Copy" } = $$props;
  let showCheckIcon = false;
  Button($$payload, {
    onclick: async (event) => {
      try {
        showCheckIcon = true;
        setTimeout(
          () => {
            showCheckIcon = false;
          },
          1e3
        );
        await onclick(event);
      } catch {
        notify("Failed to copy");
      }
    },
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="grid"><!---->`);
      {
        $$payload2.out.push(`<span class="col-start-1 row-start-1">`);
        if (showCheckIcon) {
          $$payload2.out.push("<!--[-->");
          Check_rounded($$payload2, {});
        } else {
          $$payload2.out.push("<!--[!-->");
          Content_copy_outline_rounded($$payload2, {});
        }
        $$payload2.out.push(`<!--]--></span>`);
      }
      $$payload2.out.push(`<!----></div> ${escape_html(label)}`);
    },
    $$slots: { default: true }
  });
  pop();
}
function Input($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    type,
    files = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (type === "file") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<input${spread_attributes(
      {
        class: clsx$1(cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)),
        type: "file",
        ...restProps
      },
      null
    )}/>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<input${spread_attributes(
      {
        class: clsx$1(cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)),
        type,
        value,
        ...restProps
      },
      null
    )}/>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, value, files });
  pop();
}
function CopyInput($$payload, $$props) {
  push();
  let { value, label = "Copy", type = "url", testID } = $$props;
  $$payload.out.push(`<div class="flex w-full items-center gap-2">`);
  Input($$payload, {
    type,
    value,
    "data-testid": testID,
    onclick: (event) => {
      event.currentTarget.setSelectionRange(0, event.currentTarget.value.length);
    }
  });
  $$payload.out.push(`<!----> `);
  CopyButton($$payload, { onclick: () => copyToClipboard(value), label });
  $$payload.out.push(`<!----></div>`);
  pop();
}
function Tooltip_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    sideOffset = 4,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Tooltip_content$1($$payload2, spread_props([
      {
        sideOffset,
        class: cn("z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
const Root$2 = Tooltip;
const Trigger$2 = Tooltip_trigger;
const Provider = Tooltip_provider;
function Open_in_new_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z"></path></svg>`);
}
function ExternalLinkWrapper($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    children,
    domain,
    shouldCheckDiagramType = true,
    side = "bottom",
    labelPrefix = "Opens your diagram in",
    isVisible = true,
    sharesData = true,
    showPopup = true
  } = $$props;
  let shouldDisableComponent = shouldCheckDiagramType && store_get($$store_subs ??= {}, "$stateStore", stateStore).diagramType === "zenuml";
  if (isVisible) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<!---->`);
    Provider($$payload, {
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        Root$2($$payload2, {
          delayDuration: 100,
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->`);
            Trigger$2($$payload3, {
              children: ($$payload4) => {
                $$payload4.out.push(`<div${attr_class(clsx$1([
                  shouldDisableComponent && "pointer-events-none cursor-not-allowed grayscale"
                ]))}>`);
                children($$payload4);
                $$payload4.out.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$payload3.out.push(`<!----> `);
            if (showPopup) {
              $$payload3.out.push("<!--[-->");
              $$payload3.out.push(`<!---->`);
              Tooltip_content($$payload3, {
                side,
                class: "bg-secondary shadow-xl",
                children: ($$payload4) => {
                  $$payload4.out.push(`<div class="flex cursor-help items-center gap-2"${attr("title", sharesData ? "Your diagram will be sent to the external service" : "Your diagram is not shared")}>`);
                  if (shouldDisableComponent) {
                    $$payload4.out.push("<!--[-->");
                    $$payload4.out.push(`<div class="text-muted-foreground">This diagram type is not supported in ${escape_html(domain)}</div>`);
                  } else {
                    $$payload4.out.push("<!--[!-->");
                    Open_in_new_rounded($$payload4, {});
                    $$payload4.out.push(`<!----> <span class="flex items-center gap-1">${escape_html(labelPrefix)} <div class="text-accent">${escape_html(domain)}</div></span>`);
                  }
                  $$payload4.out.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$payload3.out.push(`<!---->`);
            } else {
              $$payload3.out.push("<!--[!-->");
            }
            $$payload3.out.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!---->`);
      }
    });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function setToggleGroupCtx(props) {
  setContext("toggleGroup", props);
}
function getToggleGroupCtx() {
  return getContext("toggleGroup");
}
function Toggle_group($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    class: className,
    size: size2 = "default",
    variant = "default",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setToggleGroupCtx({ variant, size: size2 });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Toggle_group$1($$payload2, spread_props([
      {
        class: cn("flex items-center justify-center gap-1", className)
      },
      restProps,
      {
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, value });
  pop();
}
const toggleVariants = tv({
  base: "hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-primary data-[state=on]:text-primary-foreground inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border-input hover:bg-primary/80 hover:text-primary-foreground border bg-transparent"
    },
    size: {
      default: "h-9 min-w-9 px-3",
      sm: "h-8 min-w-8 px-2",
      lg: "h-10 min-w-10 px-3"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Toggle($$payload, $$props) {
  push();
  let {
    ref = null,
    pressed = false,
    class: className,
    size: size2 = "default",
    variant = "default",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Toggle$1($$payload2, spread_props([
      { class: cn(toggleVariants({ variant, size: size2 }), className) },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get pressed() {
          return pressed;
        },
        set pressed($$value) {
          pressed = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, pressed });
  pop();
}
function Toggle_group_item($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    class: className,
    size: size2,
    variant,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const ctx = getToggleGroupCtx();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Toggle_group_item$1($$payload2, spread_props([
      {
        class: cn(toggleVariants({ variant: ctx.variant || variant, size: ctx.size || size2 }), className),
        value
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, value });
  pop();
}
const version$1 = "6.7.2";
function Download($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path></svg>`);
}
function Width_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m6.825 13l.875.925q.275.275.275.688T7.7 15.3q-.3.3-.712.3t-.688-.3l-2.6-2.575q-.15-.15-.225-.337T3.4 12t.075-.375t.225-.325l2.6-2.6q.275-.275.688-.275T7.7 8.7q.3.3.3.713t-.3.712L6.825 11h10.35l-.9-.9Q16 9.825 16 9.413t.3-.713q.275-.275.688-.275t.712.275l2.575 2.6q.15.15.225.325t.075.375t-.075.387t-.225.338l-2.6 2.6q-.275.275-.687.275t-.713-.3Q16 15.025 16 14.613t.275-.688l.9-.925z"></path></svg>`);
}
function dualActionButton($$payload, text, download, url) {
  $$payload.out.push(`<div class="flex flex-grow gap-0.5">`);
  Button($$payload, {
    class: ["flex-grow", url && "rounded-r-none"],
    onclick: download,
    "data-testid": `download-${stringify(text)}`,
    children: ($$payload2) => {
      Download($$payload2, {});
      $$payload2.out.push(`<!----> ${escape_html(text)}`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  ExternalLinkWrapper($$payload, {
    domain: getDomain(url),
    isVisible: !!url,
    children: ($$payload2) => {
      Button($$payload2, {
        class: "rounded-l-none",
        href: url,
        target: "_blank",
        rel: "noreferrer noopener",
        children: ($$payload3) => {
          Open_in_new_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
    }
  });
  $$payload.out.push(`<!----></div>`);
}
function Actions($$payload, $$props) {
  push();
  var $$store_subs;
  const FONT_AWESOME_URL = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${version$1}/css/all.min.css`;
  const getFileName = (extension) => `mermaid-diagram-${dayjs().format("YYYY-MM-DD-HHmmss")}.${extension}`;
  const fixForeignObjectClipping = (svg) => {
    const foreignObjects = svg.querySelectorAll("foreignObject");
    foreignObjects.forEach((foreignObj) => {
      const currentHeight = parseFloat(foreignObj.getAttribute("height") || "0");
      if (currentHeight <= 0) return;
      const currentY = parseFloat(foreignObj.getAttribute("y") || "0");
      const newHeight = currentHeight * 1.5;
      const heightDiff = newHeight - currentHeight;
      foreignObj.setAttribute("height", newHeight.toString());
      foreignObj.setAttribute("y", (currentY - heightDiff / 2).toString());
      const htmlElements = foreignObj.querySelectorAll("div, span, p");
      htmlElements.forEach((htmlEl) => {
        const el = htmlEl;
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
        el.style.height = "100%";
      });
    });
  };
  const getSvgElement = () => {
    const svgElement = document.querySelector("#container svg")?.cloneNode(true);
    svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    return svgElement;
  };
  const getBase64SVG = (svg, width, height) => {
    if (svg) {
      svg = svg.cloneNode(true);
    }
    if (height) {
      svg?.setAttribute("height", `${height}px`);
    }
    if (width) {
      svg?.setAttribute("width", `${width}px`);
    }
    if (!svg) {
      svg = getSvgElement();
    }
    if (store_get($$store_subs ??= {}, "$stateStore", stateStore).rough) {
      fixForeignObjectClipping(svg);
    }
    svg.style.backgroundColor = window.getComputedStyle(document.body).getPropertyValue("--background");
    const svgString = svg.outerHTML.replaceAll("<br>", "<br/>").replaceAll(/<img([^>]*)>/g, (m, g) => `<img ${g} />`);
    return toBase64(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="${FONT_AWESOME_URL}" type="text/css"?>
${svgString}`);
  };
  const simulateDownload = (download, href) => {
    const a = document.createElement("a");
    a.download = download;
    a.href = href;
    a.click();
    a.remove();
  };
  const exportImage = async (event, exporter) => {
    store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).panZoom = false);
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await waitForRender();
    const canvas = document.createElement("canvas");
    const svg = document.querySelector("#container svg");
    if (!svg) {
      throw new Error("svg not found");
    }
    const box2 = svg.getBoundingClientRect();
    const svgEl = svg;
    const viewBox = svgEl.viewBox?.baseVal;
    const contentWidth = viewBox && viewBox.width > 0 ? viewBox.width : box2.width;
    const contentHeight = viewBox && viewBox.height > 0 ? viewBox.height : box2.height;
    if (imageSizeMode === "width") {
      const ratio = contentHeight / contentWidth;
      canvas.width = imageSize;
      canvas.height = imageSize * ratio;
    } else if (imageSizeMode === "height") {
      const ratio = contentWidth / contentHeight;
      canvas.width = imageSize * ratio;
      canvas.height = imageSize;
    } else {
      const multiplier = 2;
      canvas.width = contentWidth * multiplier;
      canvas.height = contentHeight * multiplier;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("context not found");
    }
    context.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--background");
    context.fillRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.addEventListener("load", () => {
      exporter(context, image)();
      store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).panZoom = true);
    });
    image.src = `data:image/svg+xml;base64,${getBase64SVG(svg, canvas.width, canvas.height)}`;
    setTimeout(
      () => {
        if (!store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).panZoom) {
          store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).panZoom = true);
        }
      },
      2e3
    );
    event.stopPropagation();
    event.preventDefault();
  };
  const downloadImage = (context, image) => {
    return () => {
      const { canvas } = context;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      simulateDownload(getFileName("png"), canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    };
  };
  const isClipboardAvailable = () => {
    return Object.prototype.hasOwnProperty.call(window, "ClipboardItem");
  };
  const clipboardCopy = (context, image) => {
    return () => {
      const { canvas } = context;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        try {
          if (!blob) {
            throw new Error("blob is empty");
          }
          void navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        } catch (error) {
          console.error(error);
        }
      });
    };
  };
  const onCopyClipboard = async (event) => {
    await exportImage(event, clipboardCopy);
  };
  const onDownloadPNG = async (event) => {
    await exportImage(event, downloadImage);
  };
  const onDownloadSVG = () => {
    simulateDownload(getFileName("svg"), `data:image/svg+xml;base64,${getBase64SVG()}`);
  };
  let gistURL = "";
  stateStore.subscribe(({ loader }) => {
    if (loader?.type === "gist") {
      gistURL = loader.config.url;
    }
  });
  const loadGist = () => {
    if (!gistURL) {
      return alert("Please enter a Gist URL first");
    }
    window.location.href = `${window.location.pathname}?gist=${gistURL}`;
  };
  let imageSizeMode = "auto";
  let imageSize = 1080;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Card($$payload2, {
      title: "Actions",
      isStackable: true,
      icon: { component: Download, class: "rotate-180" },
      children: ($$payload3) => {
        $$payload3.out.push(`<div class="flex min-w-fit flex-col gap-2 p-2"><div class="flex w-full items-center gap-2 py-2 whitespace-nowrap">PNG size <!---->`);
        Toggle_group($$payload3, {
          type: "single",
          variant: "outline",
          get value() {
            return imageSizeMode;
          },
          set value($$value) {
            imageSizeMode = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out.push(`<!---->`);
            Toggle_group_item($$payload4, {
              value: "auto",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Auto`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <!---->`);
            Toggle_group_item($$payload4, {
              value: "width",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Width`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----> <!---->`);
            Toggle_group_item($$payload4, {
              value: "height",
              children: ($$payload5) => {
                $$payload5.out.push(`<!---->Height`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        if (imageSizeMode !== "auto") {
          $$payload3.out.push("<!--[-->");
          Width_rounded($$payload3, {
            class: [
              "size-6 shrink-0 transition-all",
              imageSizeMode === "width" && "rotate-90"
            ]
          });
        } else {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--> `);
        Input($$payload3, {
          type: "number",
          min: "3",
          max: "10000",
          disabled: imageSizeMode === "auto",
          get value() {
            return imageSize;
          },
          set value($$value) {
            imageSize = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div> <div class="flex gap-2">`);
        dualActionButton($$payload3, "PNG", onDownloadPNG, store_get($$store_subs ??= {}, "$urlsStore", urlsStore).png);
        $$payload3.out.push(`<!----> `);
        dualActionButton($$payload3, "SVG", onDownloadSVG, store_get($$store_subs ??= {}, "$urlsStore", urlsStore).svg);
        $$payload3.out.push(`<!----> `);
        ExternalLinkWrapper($$payload3, {
          domain: getDomain(store_get($$store_subs ??= {}, "$urlsStore", urlsStore).kroki),
          isVisible: !!store_get($$store_subs ??= {}, "$urlsStore", urlsStore).kroki,
          children: ($$payload4) => {
            $$payload4.out.push(`<a target="_blank" rel="noreferrer" class="flex-grow"${attr("href", store_get($$store_subs ??= {}, "$urlsStore", urlsStore).kroki)}>`);
            Button($$payload4, {
              class: "action-btn flex w-full items-center gap-2",
              children: ($$payload5) => {
                Open_in_new_rounded($$payload5, {});
                $$payload5.out.push(`<!----> Kroki`);
              },
              $$slots: { default: true }
            });
            $$payload4.out.push(`<!----></a>`);
          }
        });
        $$payload3.out.push(`<!----></div> `);
        Separator($$payload3, {});
        $$payload3.out.push(`<!----> `);
        if (isClipboardAvailable()) {
          $$payload3.out.push("<!--[-->");
          CopyButton($$payload3, { onclick: onCopyClipboard, label: "Copy Image" });
        } else {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--> `);
        ExternalLinkWrapper($$payload3, {
          labelPrefix: "Thumbnail generated by",
          domain: getDomain(store_get($$store_subs ??= {}, "$urlsStore", urlsStore).png),
          isVisible: !!store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mdCode,
          children: ($$payload4) => {
            CopyInput($$payload4, {
              value: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mdCode,
              label: "Copy Markdown",
              testID: TID.copyMarkdown
            });
          }
        });
        $$payload3.out.push(`<!----> <div class="flex w-full items-center gap-2">`);
        Input($$payload3, {
          type: "url",
          placeholder: "Enter Gist URL",
          get value() {
            return gistURL;
          },
          set value($$value) {
            gistURL = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> `);
        Button($$payload3, {
          onclick: loadGist,
          children: ($$payload4) => {
            $$payload4.out.push(`<!---->Load Gist`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----></div> `);
        {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--></div>`);
      }
    });
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
function Book_2_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"></path></svg>`);
}
function DiagramDocumentationButton($$payload, $$props) {
  push();
  var $$store_subs;
  const docURLBase = env.docsUrl;
  const docMap = {
    architecture: { code: "/syntax/architecture.html" },
    block: { code: "/syntax/block.html" },
    c4: { code: "/syntax/c4.html" },
    class: {
      code: "/syntax/classDiagram.html",
      config: "/syntax/classDiagram.html#configuration"
    },
    er: {
      code: "/syntax/entityRelationshipDiagram.html",
      config: "/syntax/entityRelationshipDiagram.html#styling"
    },
    flowchart: {
      code: "/syntax/flowchart.html",
      config: "/syntax/flowchart.html#configuration"
    },
    gantt: {
      code: "/syntax/gantt.html",
      config: "/syntax/gantt.html#configuration"
    },
    gitGraph: {
      code: "/syntax/gitgraph.html",
      config: "/syntax/gitgraph.html#gitgraph-specific-configuration-options"
    },
    journey: { code: "/syntax/userJourney.html" },
    kanban: {
      code: "/syntax/kanban.html",
      config: "/syntax/kanban.html#configuration-options"
    },
    mindmap: { code: "/syntax/mindmap.html" },
    packet: {
      code: "/syntax/packet.html",
      config: "/config/schema-docs/config-defs-packet-diagram-config.html"
    },
    pie: {
      code: "/syntax/pie.html",
      config: "/syntax/pie.html#configuration"
    },
    quadrantChart: {
      code: "/syntax/quadrantChart.html",
      config: "/syntax/quadrantChart.html#chart-configurations"
    },
    requirement: { code: "/syntax/requirementDiagram.html" },
    sankey: {
      code: "/syntax/sankey.html",
      config: "/syntax/sankey.html#configuration"
    },
    sequence: {
      code: "/syntax/sequenceDiagram.html",
      config: "/syntax/sequenceDiagram.html#configuration"
    },
    stateDiagram: { code: "/syntax/stateDiagram.html" },
    timeline: {
      code: "/syntax/timeline.html",
      config: "/syntax/timeline.html#themes"
    },
    treemap: {
      code: "/syntax/treemap.html",
      config: "/syntax/treemap.html#configuration-options"
    },
    xychart: {
      code: "/syntax/xyChart.html",
      config: "/syntax/xyChart.html#chart-configurations"
    },
    zenuml: { code: "/syntax/zenuml.html" }
  };
  const doc = (() => {
    const { editorMode, diagramType } = store_get($$store_subs ??= {}, "$stateStore", stateStore);
    if (!diagramType) {
      return { key: "", url: docURLBase };
    }
    const key = standardizeDiagramType(diagramType);
    const docConfig = docMap[key] ?? { code: "" };
    const url = docURLBase + (docConfig[editorMode] ?? docConfig.code ?? "");
    return { key, url };
  })();
  Button($$payload, {
    variant: "ghost",
    "data-testid": TID.diagramDocumentationButton,
    href: doc.url,
    target: "_blank",
    title: `View documentation for ${stringify(doc.key.replace("Diagram", ""))} diagram`,
    children: ($$payload2) => {
      Book_2_outline_rounded($$payload2, {});
      $$payload2.out.push(`<!----> Docs`);
    },
    $$slots: { default: true }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Close_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg>`);
}
function McWrapper($$payload, $$props) {
  push();
  let { children, $$slots, $$events, ...props } = $$props;
  const mermaidChartDomain = "mermaid.ai";
  ExternalLinkWrapper($$payload, spread_props([
    props,
    {
      domain: mermaidChartDomain,
      isVisible: env.isEnabledMermaidChartLinks,
      showPopup: true,
      children: ($$payload2) => {
        children($$payload2);
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
function MermaidChartIcon($$payload, $$props) {
  let { class: className } = $$props;
  $$payload.out.push(`<img${attr_class(clsx$1(["size-4", className]))} src="/mermaidchart-logo.svg" alt="Mermaid Chart"/>`);
}
function MobileEditor($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="size-full"></div>`);
  pop();
}
function Error_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>`);
}
function Editor($$payload, $$props) {
  push();
  var $$store_subs;
  let showError = false;
  debounce$2(
    () => {
      showError = true;
    },
    5e3
  );
  $$payload.out.push(`<div class="flex h-full flex-col">`);
  {
    $$payload.out.push("<!--[-->");
    MobileEditor($$payload);
  }
  $$payload.out.push(`<!--]--> `);
  if (showError && store_get($$store_subs ??= {}, "$stateStore", stateStore).error instanceof Error) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="flex flex-col text-sm"${attr("data-testid", TID.errorContainer)}><div class="flex items-center justify-between gap-2 bg-slate-900 p-2 text-white"><div class="flex w-fit items-center gap-2">`);
    Error_outline_rounded($$payload, { class: "size-6 text-destructive", "aria-hidden": "true" });
    $$payload.out.push(`<!----> <div class="flex flex-col"><p>Syntax error</p> `);
    {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div></div> `);
    if (store_get($$store_subs ??= {}, "$stateStore", stateStore).editorMode === "code") {
      $$payload.out.push("<!--[-->");
      McWrapper($$payload, {
        children: ($$payload2) => {
          Button($$payload2, {
            variant: "accent",
            size: "sm",
            "data-testid": TID.aiRepairButton,
            href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mermaidChart({ medium: "ai_repair" }).save,
            children: ($$payload3) => {
              MermaidChartIcon($$payload3, {});
              $$payload3.out.push(`<!----> AI Repair`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div> <output class="max-h-32 overflow-auto bg-muted p-2" name="mermaid-error" for="editor"><pre>${escape_html(store_get($$store_subs ??= {}, "$stateStore", stateStore).error?.toString())}</pre></output></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Bookmark_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162zm0-2.2l5 2.15V5H7v12.95zM12 5H7h10z"></path></svg>`);
}
function Delete_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"></path></svg>`);
}
function Download_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"></path></svg>`);
}
function Save_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zM19 7.85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.712T14 6H7q-.425 0-.712.288T6 7v2q0 .425.288.713T7 10M5 7.85V19V5z"></path></svg>`);
}
function Settings_backup_restore_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m0-7q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14"></path></svg>`);
}
function Upload_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16t-.712-.288T11 15z"></path></svg>`);
}
function Clock_outline($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"></path></svg>`);
}
function Git($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"></path></svg>`);
}
function History$1($$payload, $$props) {
  push();
  var $$store_subs;
  dayjs.extend(dayjsRelativeTime);
  const tabSelectHandler = (tab) => {
    historyModeStore.set(tab.id);
  };
  let tabs = [
    { id: "manual", title: "Saved", icon: Bookmark_outline_rounded },
    { id: "auto", title: "Timeline", icon: Clock_outline }
  ];
  const downloadHistory = () => {
    const data = get$2(historyStore);
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mermaid-history-${dayjs().format("YYYY-MM-DD-HHmmss")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const uploadHistory = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", async ({ target }) => {
      const file = target?.files?.[0];
      if (!file) {
        return;
      }
      const data = JSON.parse(await file.text());
      restoreHistory(data);
    });
    input.click();
  };
  const saveHistory = (auto = false) => {
    const currentState2 = getStateString();
    const previousState = getPreviousState(auto);
    if (previousState !== currentState2) {
      addHistoryEntry({
        state: store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore),
        time: Date.now(),
        type: auto ? "auto" : "manual"
      });
    } else if (!auto) {
      notify("State already saved.");
    }
  };
  const clearHistory = (id) => {
    if (!id && !prompt("Clear all saved items?")) {
      return;
    }
    clearHistoryData(id);
  };
  const restoreHistoryItem = (state) => {
    inputStateStore.set({ ...state, updateDiagram: true });
  };
  loaderHistoryStore.subscribe((entries) => {
    if (entries.length > 0 && tabs.length === 2) {
      tabs = [
        { id: "loader", title: "Revisions", icon: Git },
        ...tabs
      ];
      historyModeStore.set("loader");
    }
  });
  {
    let actions = function($$payload2) {
      $$payload2.out.push(`<div class="flex items-center gap-2">`);
      Button($$payload2, {
        size: "icon",
        variant: "ghost",
        id: "uploadHistory",
        onclick: uploadHistory,
        title: "Upload history",
        children: ($$payload3) => {
          Upload_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$historyStore", historyStore).length > 0) {
        $$payload2.out.push("<!--[-->");
        Button($$payload2, {
          id: "downloadHistory",
          size: "icon",
          variant: "ghost",
          onclick: downloadHistory,
          title: "Download history",
          children: ($$payload3) => {
            Download_rounded($$payload3, {});
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out.push("<!--[!-->");
      }
      $$payload2.out.push(`<!--]--> `);
      Separator($$payload2, { orientation: "vertical" });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        id: "saveHistory",
        size: "icon",
        variant: "ghost",
        onclick: () => saveHistory(),
        title: "Save current state",
        children: ($$payload3) => {
          Save_outline_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$historyModeStore", historyModeStore) !== "loader") {
        $$payload2.out.push("<!--[-->");
        Button($$payload2, {
          id: "clearHistory",
          size: "icon",
          variant: "ghost",
          class: "hover:text-destructive",
          onclick: () => clearHistory(),
          title: "Delete all saved states",
          children: ($$payload3) => {
            Delete_outline_rounded($$payload3, {});
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out.push("<!--[!-->");
      }
      $$payload2.out.push(`<!--]--></div>`);
    };
    Card($$payload, {
      onselect: tabSelectHandler,
      isOpen: true,
      isClosable: false,
      tabs,
      actions,
      children: ($$payload2) => {
        $$payload2.out.push(`<ul class="flex h-full min-w-fit flex-col gap-2 overflow-auto p-2" id="historyList">`);
        if (store_get($$store_subs ??= {}, "$historyStore", historyStore).length > 0) {
          $$payload2.out.push("<!--[-->");
          const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$historyStore", historyStore));
          $$payload2.out.push(`<!--[-->`);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { id, state, time, name, url, type } = each_array[$$index];
            $$payload2.out.push(`<li class="flex flex-col gap-2"><div class="flex items-center justify-between"><div class="flex flex-col">`);
            if (url) {
              $$payload2.out.push("<!--[-->");
              $$payload2.out.push(`<a${attr("href", url)} target="_blank" title="Open revision in new tab" class="text-blue-500 hover:underline">${escape_html(name)}</a>`);
            } else {
              $$payload2.out.push("<!--[!-->");
              $$payload2.out.push(`<span class="whitespace-nowrap">${escape_html(name)}</span>`);
            }
            $$payload2.out.push(`<!--]--> <span class="text-xs whitespace-nowrap text-primary-foreground/30">${escape_html(new Date(time).toLocaleString())}</span></div> <div class="flex items-center gap-2"><span class="text-sm whitespace-nowrap text-primary-foreground/50">${escape_html(dayjs(time).fromNow())}</span> `);
            Button($$payload2, {
              size: "icon",
              variant: "ghost",
              onclick: () => restoreHistoryItem(state),
              children: ($$payload3) => {
                Settings_backup_restore_rounded($$payload3, {});
              },
              $$slots: { default: true }
            });
            $$payload2.out.push(`<!----> `);
            if (type !== "loader") {
              $$payload2.out.push("<!--[-->");
              Button($$payload2, {
                size: "icon",
                variant: "ghost",
                class: "hover:text-destructive",
                onclick: () => clearHistory(id),
                children: ($$payload3) => {
                  Delete_outline_rounded($$payload3, {});
                },
                $$slots: { default: true }
              });
            } else {
              $$payload2.out.push("<!--[!-->");
            }
            $$payload2.out.push(`<!--]--></div></div> `);
            Separator($$payload2, {});
            $$payload2.out.push(`<!----></li>`);
          }
          $$payload2.out.push(`<!--]-->`);
        } else {
          $$payload2.out.push("<!--[!-->");
          $$payload2.out.push(`<div class="m-2 text-center">No items in History<br/> Click the Save button to save current state and restore it later.<br/> Timeline will automatically be saved every minute.</div>`);
        }
        $$payload2.out.push(`<!--]--></ul>`);
      }
    });
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Popover_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    align = "center",
    sideOffset = 4,
    portalProps,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Portal$1($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          Popover_content$1($$payload3, spread_props([
            {
              align,
              sideOffset,
              class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", className)
            },
            restProps,
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              }
            }
          ]));
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
const Root$1 = Popover;
const Trigger$1 = Popover_trigger;
function Switch($$payload, $$props) {
  push();
  let {
    ref = null,
    checked = false,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Switch$1($$payload2, spread_props([
      {
        class: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-slate-700", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          Switch_thumb($$payload3, {
            class: cn("pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, checked });
  pop();
}
function Mermaid_tail($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes(
    {
      width: "1.2em",
      height: "1.2em",
      viewBox: "40 40 410 410",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xml:space": "preserve",
      "xmlns:serif": "http://www.serif.com/",
      style: "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;",
      ...p
    },
    null,
    void 0,
    void 0,
    3
  )}><path d="M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z" fill="currentColor"></path></svg>`);
}
function Add_2_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21"></path></svg>`);
}
function Contrast($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m1-2.075q2.975-.375 4.988-2.613T20 12t-2.013-5.312T13 4.075z"></path></svg>`);
}
function Electrical_services_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M19 15q-.425 0-.712-.288T18 14t.288-.712T19 13h1q.425 0 .713.288T21 14t-.288.713T20 15zm0 4q-.425 0-.712-.288T18 18t.288-.712T19 17h1q.425 0 .713.288T21 18t-.288.713T20 19zm-5 1q-.825 0-1.412-.587T12 18h-1q-.425 0-.712-.288T10 17v-2q0-.425.288-.712T11 14h1q0-.825.588-1.412T14 12h2q.425 0 .713.288T17 13v6q0 .425-.288.713T16 20zm-7-3q-1.65 0-2.825-1.175T3 13t1.175-2.825T7 9h1.5q.625 0 1.063-.437T10 7.5t-.437-1.062T8.5 6H5q-.425 0-.712-.288T4 5t.288-.712T5 4h3.5q1.45 0 2.475 1.025T12 7.5t-1.025 2.475T8.5 11H7q-.825 0-1.412.588T5 13t.588 1.413T7 15h1q.425 0 .713.288T9 16t-.288.713T8 17z"></path></svg>`);
}
function Menu_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"></path></svg>`);
}
function Person_play_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M4.8 11.7L2.3 9.2Q2 8.9 2 8.5t.3-.7l2.5-2.5q.3-.3.7-.3t.7.3l2.5 2.5q.3.3.3.7t-.3.7l-2.5 2.5q-.3.3-.7.3t-.7-.3M10 22q-.425 0-.712-.288T9 21v-4q-1.25-.1-2.475-.275t-2.45-.45q-.425-.1-.687-.475T3.25 15t.513-.625t.812-.1q1.825.425 3.688.575T12 15t3.738-.15t3.687-.575q.425-.1.813.1t.512.625t-.137.8t-.688.475q-1.225.275-2.45.45T15 17v4q0 .425-.287.713T14 22zM5.5 9.6l1.1-1.1l-1.1-1.1l-1.1 1.1zM12 7q-1.25 0-2.125-.875T9 4t.875-2.125T12 1t2.125.875T15 4t-.875 2.125T12 7m0 7q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0-9q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5m4.775 6.5l-1.15-2Q15.5 9.275 15.5 9t.125-.5l1.15-2q.125-.25.35-.375t.5-.125h2.25q.275 0 .5.125t.35.375l1.15 2Q22 8.725 22 9t-.125.5l-1.15 2q-.125.25-.35.375t-.5.125h-2.25q-.275 0-.5-.125t-.35-.375M18.2 10h1.1l.55-1l-.55-1h-1.1l-.55 1zm.55-1"></path></svg>`);
}
function Shape_line_outline($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M6 11q-2.075 0-3.537-1.463T1 6q0-2.1 1.463-3.55T6 1q2.1 0 3.55 1.45T11 6q0 2.075-1.45 3.538T6 11m0-2q1.275 0 2.138-.875T9 6q0-1.275-.862-2.137T6 3q-1.25 0-2.125.863T3 6q0 1.25.875 2.125T6 9m10 14q-.825 0-1.412-.587T14 21v-5q0-.825.588-1.412T16 14h5q.825 0 1.413.588T23 16v5q0 .825-.587 1.413T21 23zm0-2h5v-5h-5zm1.725-13.3L7.7 17.7q.125.3.212.625T8 19q0 1.25-.862 2.125T5 22q-1.25 0-2.125-.875T2 19q0-1.275.875-2.137T5 16q.35 0 .675.088t.625.212l10-10.025q-.125-.3-.213-.613T16 5q0-1.275.875-2.137T19 2q1.275 0 2.138.863T22 5q0 1.25-.862 2.125T19 8q-.35 0-.663-.088t-.612-.212"></path></svg>`);
}
function menuItem($$payload, options) {
  $$payload.out.push(`<a${attr("href", options.href)} target="_blank"${attr_class(clsx$1(cn("flex items-center justify-start gap-2 border-b-2 p-2 px-3 hover:bg-muted", options.isSectionEnd && "border-border-dark", options.class)))}><!---->`);
  options.icon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----> ${escape_html(options.label)}</a>`);
}
function mcMenuItem($$payload, item) {
  McWrapper($$payload, {
    side: "right",
    labelPrefix: item.sharesData === false ? "Opens a new tab in" : void 0,
    sharesData: item.sharesData,
    shouldCheckDiagramType: item.checkDiagramType,
    children: ($$payload2) => {
      menuItem($$payload2, item);
    },
    $$slots: { default: true }
  });
}
function MainMenu($$payload, $$props) {
  push();
  var $$store_subs;
  const menuItems = [
    {
      label: "New",
      icon: Add_2_rounded,
      href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).new,
      renderer: menuItem
    },
    {
      label: "Duplicate",
      icon: Content_copy_outline_rounded,
      href: window.location.href,
      renderer: menuItem
    },
    {
      href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mermaidChart({ medium: "main_menu" }).playground,
      icon: Shape_line_outline,
      isSectionEnd: true,
      label: "Edit in Playground",
      renderer: mcMenuItem
    },
    {
      label: "Mermaid.js",
      icon: Mermaid_tail,
      href: env.docsUrl,
      renderer: menuItem
    },
    {
      label: "Documentation",
      icon: Book_2_outline_rounded,
      href: `${env.docsUrl}/intro/`,
      renderer: menuItem
    },
    {
      label: "Community",
      icon: Person_play_outline_rounded,
      href: "https://discord.gg/sKeNQX4Wtj",
      renderer: menuItem
    },
    {
      checkDiagramType: false,
      href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mermaidChart({ medium: "main_menu" }).plugins,
      icon: Electrical_services_rounded,
      label: "Plugins",
      renderer: mcMenuItem,
      sharesData: false
    },
    {
      href: "#",
      icon: Contrast,
      isSectionEnd: true,
      label: "Dark Mode",
      renderer: darkModeMenuItem
    },
    {
      checkDiagramType: false,
      class: "text-accent border-b-0",
      href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mermaidChart({ medium: "main_menu" }).home,
      icon: MermaidChartIcon,
      label: "Mermaid",
      renderer: mcMenuItem,
      sharesData: false
    }
  ];
  function darkModeMenuItem($$payload2, options) {
    $$payload2.out.push(`<div${attr_class(clsx$1(cn("flex cursor-pointer items-center justify-between border-b-2 px-3 py-2 hover:bg-muted", options.isSectionEnd && "border-border-dark", options.class)))}><span class="flex items-center gap-2">`);
    Contrast($$payload2, {});
    $$payload2.out.push(`<!----> Dark Mode</span> `);
    Switch($$payload2, {
      checked: store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark",
      onCheckedChange: (dark) => setMode(dark ? "dark" : "light")
    });
    $$payload2.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!---->`);
  Root$1($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->`);
      Trigger$1($$payload2, {
        class: "shrink-0",
        children: ($$payload3) => {
          Menu_rounded($$payload3, { class: "size-6" });
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <!---->`);
      Popover_content($$payload2, {
        align: "start",
        class: "flex flex-col overflow-hidden border-2 p-0",
        sideOffset: 16,
        children: ($$payload3) => {
          const each_array = ensure_array_like(menuItems);
          $$payload3.out.push(`<!--[-->`);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { renderer, ...item } = each_array[$$index];
            renderer($$payload3, item);
            $$payload3.out.push(`<!---->`);
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!---->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function April2025($$payload, $$props) {
  push();
  let { closeBanner } = $$props;
  const commonParams = { utm_source: C.utmSource, utm_medium: "banner_ad" };
  let taglines = [
    {
      label: "Replace ChatGPT Pro, Mermaid.live, and Lucid Chart with Mermaid Chart",
      url: { path: "/mermaid-ai", params: { utm_campaign: "aibundle" } }
    },
    {
      label: "Diagram live with teammates in Mermaid Chart",
      url: {
        path: "/landing",
        params: { utm_campaign: "team_collaboration" }
      }
    },
    {
      label: "Customize your layout and design in Mermaid Chart’s visual editor!",
      url: {
        path: "/whiteboard",
        params: { utm_campaign: "visual_editor" }
      }
    }
  ];
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  let index = getRandomIndex(taglines);
  let currentTagline = taglines[index];
  const interval = setInterval(
    () => {
      {
        index = (index + 1) % taglines.length;
      }
    },
    5e3
  );
  onDestroy(() => {
    clearInterval(interval);
  });
  $$payload.out.push(`<div class="flex w-full items-center bg-[#E0095F] p-1.5" role="banner"><div class="grid grow"><!---->`);
  {
    $$payload.out.push(`<a${attr("href", `${stringify(MCBaseURL)}${stringify(currentTagline.url.path)}?${stringify(new URLSearchParams({ ...commonParams, ...currentTagline.url.params }).toString())}`)} target="_blank" class="col-start-1 row-start-1 flex items-center justify-center gap-4 no-underline"><span class="text-base tracking-wider text-white">${escape_html(currentTagline.label)}</span> `);
    Button($$payload, {
      class: "shrink-0 rounded-md bg-[#1E1A2E] px-3 py-1.5 text-base font-semibold tracking-wide text-white hover:bg-[#261A56]",
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->Try now`);
      },
      $$slots: { default: true }
    });
    $$payload.out.push(`<!----></a>`);
  }
  $$payload.out.push(`<!----></div> `);
  closeBanner($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
function NewYear2026($$payload, $$props) {
  push();
  let { closeBanner } = $$props;
  const utmSource = "mermaid_live_editor";
  const url = `https://mermaid.ai/app/user/billing/checkout?${new URLSearchParams({
    coupon: "dmIuNbqx",
    tier: "plus",
    utm_campaign: "newyear",
    utm_medium: "banner_ad",
    utm_source: utmSource
  }).toString()}`;
  $$payload.out.push(`<div class="flex w-full items-center bg-[#E0095F] p-1.5" role="banner"><div class="grid grow"><a${attr("href", url)} target="_blank" class="col-start-1 row-start-1 flex items-center justify-center gap-4 no-underline"><span class="text-base tracking-wider text-white">Limited time: 10% off Mermaid Advanced Editor with code NEWYEAR</span> `);
  Button($$payload, {
    class: "shrink-0 rounded-md bg-[#1E1A2E] px-3 py-1.5 text-base font-semibold tracking-wide text-white hover:bg-[#261A56]",
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->Claim discount`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></a></div> `);
  closeBanner($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
dayjs.extend(duration);
const promotions = {
  "promo-newyear-2026": {
    startDate: /* @__PURE__ */ new Date("2026-01-01"),
    endDate: /* @__PURE__ */ new Date("2026-03-14"),
    component: NewYear2026,
    hideDurationMs: dayjs.duration(1, "week").asMilliseconds()
  },
  "promo-april-2025": {
    startDate: /* @__PURE__ */ new Date("2025-04-01"),
    endDate: /* @__PURE__ */ new Date("2028-12-31"),
    component: April2025,
    hideDurationMs: dayjs.duration(1, "week").asMilliseconds()
  }
};
const dismissPromotion = (id) => {
  if (!id || !promotions[id]) {
    return;
  }
  hiddenPromotionsStore.update((dismissedIDs) => {
    dismissedIDs[id] = dayjs().add(promotions[id].hideDurationMs).valueOf();
    return dismissedIDs;
  });
};
const hiddenPromotionsStore = persist(
  writable({}),
  localStorage$1(),
  "hiddenPromotions"
);
const getActivePromotion = () => {
  {
    return;
  }
};
function Mermaid($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes(
    {
      width: "1.2em",
      height: "1.2em",
      viewBox: "0 0 490 490",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xml:space": "preserve",
      "xmlns:serif": "http://www.serif.com/",
      style: "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;",
      ...p
    },
    null,
    void 0,
    void 0,
    3
  )}><path d="M490.16,84.61C490.16,37.912 452.248,0 405.55,0L84.61,0C37.912,0 0,37.912 0,84.61L0,405.55C0,452.248 37.912,490.16 84.61,490.16L405.55,490.16C452.248,490.16 490.16,452.248 490.16,405.55L490.16,84.61Z" style="fill:#ff3670;"></path><path d="M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z" style="fill:white;fill-rule:nonzero;"></path></svg>`);
}
function Github($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>`);
}
function DropdownNavMenu($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  $$payload.out.push(`<!---->`);
  Root$1($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->`);
      Trigger$1($$payload2, {
        class: "flex items-center gap-0",
        children: ($$payload3) => {
          Button($$payload3, {
            variant: "ghost",
            size: "sm",
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->`);
              props.icon($$payload4, { class: props.class });
              $$payload4.out.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <!---->`);
      Popover_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(props.links);
          $$payload3.out.push(`<ul tabindex="0" class="flex flex-col"><!--[-->`);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { href, title } = each_array[$$index];
            $$payload3.out.push(`<li class="rounded-md p-2 hover:bg-muted"><a role="menuitem" tabindex="0" class="whitespace-nowrap underline" target="_blank"${attr("href", href)}>${escape_html(title)}</a></li>`);
          }
          $$payload3.out.push(`<!--]--></ul>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!---->`);
  pop();
}
const version = "11.12.0";
function Navbar($$payload, $$props) {
  push();
  let { children, mobileToggle } = $$props;
  const githubLinks = [
    {
      title: "Mermaid JS",
      href: "https://github.com/mermaid-js/mermaid"
    },
    {
      title: "Mermaid Live Editor",
      href: "https://github.com/mermaid-js/mermaid-live-editor"
    },
    {
      title: "Mermaid CLI",
      href: "https://github.com/mermaid-js/mermaid-cli"
    }
  ];
  let activePromotion = getActivePromotion();
  if (activePromotion) {
    let closeBanner = function($$payload2) {
      Button($$payload2, {
        title: "Dismiss banner",
        variant: "ghost",
        class: "hover:bg-transparent hover:text-[#261A56]",
        size: "sm",
        onclick: () => {
          dismissPromotion(activePromotion?.id);
          activePromotion = void 0;
        },
        children: ($$payload3) => {
          Close_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
    };
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="top-bar z-10 flex h-fit w-full bg-primary"><div class="flex flex-grow" role="button" tabindex="0"><!---->`);
    activePromotion.component($$payload, { closeBanner });
    $$payload.out.push(`<!----></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <nav class="z-50 flex p-4 sm:p-6"><div class="flex flex-1 items-center gap-2">`);
  MainMenu($$payload);
  $$payload.out.push(`<!----> `);
  Mermaid($$payload, { class: "size-6" });
  $$payload.out.push(`<!----> <a href="/" class="whitespace-nowrap text-accent">`);
  if (!mobileToggle) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`Mermaid`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> Live Editor</a></div> <div id="menu" class="hidden flex-nowrap items-center justify-between gap-3 overflow-hidden md:flex">`);
  DropdownNavMenu($$payload, { icon: Github, links: githubLinks });
  $$payload.out.push(`<!----> `);
  Separator($$payload, { orientation: "vertical" });
  $$payload.out.push(`<!----> `);
  children($$payload);
  $$payload.out.push(`<!----></div> `);
  mobileToggle?.($$payload);
  $$payload.out.push(`<!----></nav>`);
  pop();
}
function FloatingToolbar($$payload, $$props) {
  let { children } = $$props;
  $$payload.out.push(`<div class="flex h-12 items-center justify-between gap-2 rounded-2xl bg-muted p-3">`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
}
function Open_in_full_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"></path></svg>`);
}
function Screenshot_frame_2($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M20 10V7h-3V5h3q.825 0 1.413.588T22 7v3zM2 10V7q0-.825.588-1.412T4 5h3v2H4v3zm15 9v-2h3v-3h2v3q0 .825-.587 1.413T20 19zM4 19q-.825 0-1.412-.587T2 17v-3h2v3h3v2z"></path></svg>`);
}
function Zoom_in($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14m-1-1.5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></path></svg>`);
}
function Zoom_out($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14M7 10.5v-2h5v2z"></path></svg>`);
}
function PanZoomToolbar($$payload, $$props) {
  push();
  var $$store_subs;
  let { panZoomState } = $$props;
  FloatingToolbar($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        title: "Reset view",
        onclick: () => panZoomState.reset(),
        children: ($$payload3) => {
          Screenshot_frame_2($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Separator($$payload2, { orientation: "vertical" });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        class: "hidden sm:block",
        onclick: () => panZoomState.zoomOut(),
        children: ($$payload3) => {
          Zoom_out($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        class: "hidden sm:block",
        onclick: () => panZoomState.zoomIn(),
        children: ($$payload3) => {
          Zoom_in($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Separator($$payload2, { orientation: "vertical", class: "hidden sm:block" });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        title: "Full Screen",
        href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).view,
        target: "_blank",
        children: ($$payload3) => {
          Open_in_full_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Account_tree_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M15 19v-1h-2q-.825 0-1.412-.587T11 16V8H9v1q0 .825-.587 1.413T7 11H4q-.825 0-1.412-.587T2 9V5q0-.825.588-1.412T4 3h3q.825 0 1.413.588T9 5v1h6V5q0-.825.588-1.412T17 3h3q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11h-3q-.825 0-1.412-.587T15 9V8h-2v8h2v-1q0-.825.588-1.412T17 13h3q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21h-3q-.825 0-1.412-.587T15 19M4 5v4zm13 10v4zm0-10v4zm0 4h3V5h-3zm0 10h3v-4h-3zM4 9h3V5H4z"></path></svg>`);
}
function Preset($$payload, $$props) {
  push();
  const extras = {
    ZenUML: `zenuml
    title Order Service
    @Actor Client #FFEBE6
    @Boundary OrderController #0747A6
    @EC2 <<BFF>> OrderService #E3FCEF
    group BusinessService {
      @Lambda PurchaseService
      @AzureFunction InvoiceService
    }

    @Starter(Client)
    // \`POST /orders\`
    OrderController.post(payload) {
      OrderService.create(payload) {
        order = new Order(payload)
        if(order != null) {
          par {
            PurchaseService.createPO(order)
            InvoiceService.createInvoice(order)      
          }      
        }
      }
    }
    `
  };
  const samples = { ...getSampleDiagrams(), ...extras };
  const loadSampleDiagram = (diagramType) => {
    updateCode(samples[diagramType], { resetPanZoom: true, updateDiagram: true });
  };
  const mainDiagrams = [
    "Flowchart",
    "Class",
    "Sequence",
    "Entity Relationship",
    "State",
    "Mindmap"
  ];
  const diagramOrder = [
    ...mainDiagrams,
    ...Object.keys(samples).filter((key) => !mainDiagrams.includes(key)).sort()
  ];
  Card($$payload, {
    title: "Sample Diagrams",
    isOpen: true,
    isStackable: true,
    icon: { component: Account_tree_outline_rounded },
    children: ($$payload2) => {
      const each_array = ensure_array_like(diagramOrder);
      $$payload2.out.push(`<div class="flex h-fit max-h-52 flex-wrap gap-2 overflow-y-auto p-2"><!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let sample = each_array[$$index];
        Button($$payload2, {
          size: "sm",
          class: "w-fit min-w-20 flex-grow normal-case",
          onclick: () => loadSampleDiagram(sample),
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->${escape_html(sample)}`);
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out.push(`<!--]--></div>`);
    }
  });
  pop();
}
/**
 * @license lucide-svelte v0.507.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size2 = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out.push(`<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size2,
      height: size2,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
      class: clsx$1(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element$1($$payload, tag, () => {
      $$payload.out.push(`${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`);
    });
  }
  $$payload.out.push(`<!--]--><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></svg>`);
  bind_props($$props, {
    name,
    color,
    size: size2,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function X($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.507.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Dialog_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    portalProps,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Portal($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          Dialog_overlay($$payload3, {});
          $$payload3.out.push(`<!----> <!---->`);
          Dialog_content$1($$payload3, spread_props([
            {
              class: cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className)
            },
            restProps,
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              },
              children: ($$payload4) => {
                children?.($$payload4);
                $$payload4.out.push(`<!----> <!---->`);
                Dialog_close($$payload4, {
                  class: "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:text-muted-foreground",
                  children: ($$payload5) => {
                    X($$payload5, { class: "size-4" });
                    $$payload5.out.push(`<!----> <span class="sr-only">Close</span>`);
                  },
                  $$slots: { default: true }
                });
                $$payload4.out.push(`<!---->`);
              },
              $$slots: { default: true }
            }
          ]));
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Dialog_description($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Dialog_description$1($$payload2, spread_props([
      { class: cn("text-sm text-muted-foreground", className) },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Dialog_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out.push(`<div${spread_attributes(
    {
      class: clsx$1(cn("flex flex-col space-y-1.5 text-center sm:text-left", className)),
      ...restProps
    },
    null
  )}>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div>`);
  bind_props($$props, { ref });
  pop();
}
function Dialog_overlay($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Dialog_overlay$1($$payload2, spread_props([
      {
        class: cn("fixed inset-0 z-50 bg-black/80  data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Dialog_title($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Dialog_title$1($$payload2, spread_props([
      {
        class: cn("text-lg leading-none font-semibold tracking-tight", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
const Root = Dialog;
const Trigger = Dialog_trigger;
const Portal = Portal$1;
function Share$1($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"></path></svg>`);
}
function Share($$payload, $$props) {
  push();
  Root($$payload, {
    children: ($$payload2) => {
      Trigger($$payload2, {
        class: buttonVariants({ size: "sm" }),
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->Share`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Dialog_content($$payload2, {
        children: ($$payload3) => {
          Dialog_header($$payload3, {
            children: ($$payload4) => {
              Dialog_title($$payload4, {
                class: "flex items-center gap-2 text-xl",
                children: ($$payload5) => {
                  Share$1($$payload5, { class: "size-5" });
                  $$payload5.out.push(`<!----> Shareable links`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!----> `);
              Dialog_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out.push(`<!---->Share your diagrams with others.`);
                },
                $$slots: { default: true }
              });
              $$payload4.out.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><h2 class="flex items-center gap-2"><img class="size-5" src="/favicon.svg" alt="Mermaid Live Editor"/> Mermaid Live Editor</h2> `);
          CopyInput($$payload3, { value: window.location.href });
          $$payload3.out.push(`<!----> `);
          Dialog_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out.push(`<!---->The content of the diagrams you create never leaves your browser.`);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div> `);
          {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]--></div>`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  pop();
}
function Draw_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-2.425q0-.4.15-.763t.425-.637L17.175 3.6q.3-.3.675-.45T18.6 3q.4 0 .763.15T20 3.6L21.4 5q.3.275.45.638T22 6.4q0 .375-.15.75t-.45.675l-12.575 12.6q-.275.275-.637.425t-.763.15zm1-2h1.4l9.825-9.8l-.7-.725l-.725-.7L6 17.6zM20 6.425L18.575 5zm-3.475 2.05l-.725-.7L17.225 9.2zM14 21q1.85 0 3.425-.925T19 17.5q0-.8-.4-1.388t-1.05-1.087q-.35-.25-.75-.25t-.675.3t-.275.738t.35.687q.35.275.575.5t.225.5q0 .575-.913 1.038T14 19q-.425 0-.712.288T13 20t.288.713T14 21M9 6q0 .35-.437.638T6.55 7.65q-2 .875-2.775 1.588T3 11q0 .65.3 1.15t.775.875q.325.275.725.238t.675-.363t.25-.725t-.35-.675q-.175-.125-.275-.25T5 11q0-.3.45-.6t1.9-.925q2.2-.95 2.925-1.725T11 6q0-1.375-1.1-2.187T7 3q-1.125 0-2.013.4t-1.362.975Q3.35 4.7 3.4 5.1t.375.65q.325.275.725.225t.675-.325q.35-.35.775-.5T7 5q1.025 0 1.513.3T9 6"></path></svg>`);
}
function Grid_4x4_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M5 19H3q-.425 0-.712-.288T2 18t.288-.712T3 17h2v-4H3q-.425 0-.712-.288T2 12t.288-.712T3 11h2V7H3q-.425 0-.712-.288T2 6t.288-.712T3 5h2V3q0-.425.288-.712T6 2t.713.288T7 3v2h4V3q0-.425.288-.712T12 2t.713.288T13 3v2h4V3q0-.425.288-.712T18 2t.713.288T19 3v2h2q.425 0 .713.288T22 6t-.288.713T21 7h-2v4h2q.425 0 .713.288T22 12t-.288.713T21 13h-2v4h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22t-.712-.288T17 21v-2h-4v2q0 .425-.288.713T12 22t-.712-.288T11 21v-2H7v2q0 .425-.288.713T6 22t-.712-.288T5 21zm2-2h4v-4H7zm6 0h4v-4h-4zm-6-6h4V7H7zm6 0h4V7h-4z"></path></svg>`);
}
function SyncRoughToolbar($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).grid === void 0) {
    store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).grid = defaultState.grid);
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    FloatingToolbar($$payload2, {
      children: ($$payload3) => {
        Toggle($$payload3, {
          size: "sm",
          title: "Hand-Drawn",
          get pressed() {
            return store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).rough;
          },
          set pressed($$value) {
            store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).rough = $$value);
            $$settled = false;
          },
          children: ($$payload4) => {
            Draw_outline_rounded($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Toggle($$payload3, {
          size: "sm",
          title: "Background Grid",
          get pressed() {
            return store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).grid;
          },
          set pressed($$value) {
            store_mutate($$store_subs ??= {}, "$inputStateStore", inputStateStore, store_get($$store_subs ??= {}, "$inputStateStore", inputStateStore).grid = $$value);
            $$settled = false;
          },
          children: ($$payload4) => {
            Grid_4x4_rounded($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      }
    });
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
function calculateAriaValues({ layout, panesArray, pivotIndices }) {
  let currentMinSize = 0;
  let currentMaxSize = 100;
  let totalMinSize = 0;
  let totalMaxSize = 0;
  const firstIndex = pivotIndices[0];
  for (let i = 0; i < panesArray.length; i++) {
    const constraints = panesArray[i].constraints;
    const { maxSize = 100, minSize = 0 } = constraints;
    if (i === firstIndex) {
      currentMinSize = minSize;
      currentMaxSize = maxSize;
    } else {
      totalMinSize += minSize;
      totalMaxSize += maxSize;
    }
  }
  const valueMax = Math.min(currentMaxSize, 100 - totalMinSize);
  const valueMin = Math.max(currentMinSize, 100 - totalMaxSize);
  const valueNow = layout[firstIndex];
  return {
    valueMax,
    valueMin,
    valueNow
  };
}
function assert(expectedCondition, message = "Assertion failed!") {
  if (!expectedCondition) {
    console.error(message);
    throw new Error(message);
  }
}
const LOCAL_STORAGE_DEBOUNCE_INTERVAL = 100;
const PRECISION = 10;
function areNumbersAlmostEqual(actual, expected, fractionDigits = PRECISION) {
  return compareNumbersWithTolerance(actual, expected, fractionDigits) === 0;
}
function compareNumbersWithTolerance(actual, expected, fractionDigits = PRECISION) {
  const roundedActual = roundTo(actual, fractionDigits);
  const roundedExpected = roundTo(expected, fractionDigits);
  return Math.sign(roundedActual - roundedExpected);
}
function areArraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length)
    return false;
  for (let index = 0; index < arrA.length; index++) {
    if (arrA[index] !== arrB[index])
      return false;
  }
  return true;
}
function roundTo(value, decimals) {
  return Number.parseFloat(value.toFixed(decimals));
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element2) {
  return element2 instanceof HTMLElement;
}
function isKeyDown(event) {
  return event.type === "keydown";
}
function isMouseEvent(event) {
  return event.type.startsWith("mouse");
}
function isTouchEvent(event) {
  return event.type.startsWith("touch");
}
function resizePane({ paneConstraints: paneConstraintsArray, paneIndex, initialSize }) {
  const paneConstraints = paneConstraintsArray[paneIndex];
  assert(paneConstraints != null, "Pane constraints should not be null.");
  const { collapsedSize = 0, collapsible, maxSize = 100, minSize = 0 } = paneConstraints;
  let newSize = initialSize;
  if (compareNumbersWithTolerance(newSize, minSize) < 0) {
    newSize = getAdjustedSizeForCollapsible(newSize, collapsible, collapsedSize, minSize);
  }
  newSize = Math.min(maxSize, newSize);
  return Number.parseFloat(newSize.toFixed(PRECISION));
}
function getAdjustedSizeForCollapsible(size2, collapsible, collapsedSize, minSize) {
  if (!collapsible)
    return minSize;
  const halfwayPoint = (collapsedSize + minSize) / 2;
  return compareNumbersWithTolerance(size2, halfwayPoint) < 0 ? collapsedSize : minSize;
}
function noop() {
}
function updateResizeHandleAriaValues({ groupId, layout, panesArray, domContext }) {
  const resizeHandleElements = getResizeHandleElementsForGroup(groupId, domContext);
  for (let index = 0; index < panesArray.length - 1; index++) {
    const { valueMax, valueMin, valueNow } = calculateAriaValues({
      layout,
      panesArray,
      pivotIndices: [index, index + 1]
    });
    const resizeHandleEl = resizeHandleElements[index];
    if (isHTMLElement(resizeHandleEl)) {
      const paneData = panesArray[index];
      resizeHandleEl.setAttribute("aria-controls", paneData.opts.id.current);
      resizeHandleEl.setAttribute("aria-valuemax", `${Math.round(valueMax)}`);
      resizeHandleEl.setAttribute("aria-valuemin", `${Math.round(valueMin)}`);
      resizeHandleEl.setAttribute("aria-valuenow", valueNow != null ? `${Math.round(valueNow)}` : "");
    }
  }
  return () => {
    for (const el of resizeHandleElements) {
      el.removeAttribute("aria-controls");
      el.removeAttribute("aria-valuemax");
      el.removeAttribute("aria-valuemin");
      el.removeAttribute("aria-valuenow");
    }
  };
}
function getResizeHandleElementsForGroup(groupId, domContext) {
  if (!isBrowser)
    return [];
  return Array.from(domContext.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${groupId}"]`));
}
function getResizeHandleElementIndex({ groupId, id, domContext }) {
  if (!isBrowser)
    return null;
  const handles = getResizeHandleElementsForGroup(groupId, domContext);
  const index = handles.findIndex((handle) => handle.getAttribute("data-pane-resizer-id") === id);
  return index ?? null;
}
function getPivotIndices({ groupId, dragHandleId, domContext }) {
  const index = getResizeHandleElementIndex({
    groupId,
    id: dragHandleId,
    domContext
  });
  return index != null ? [index, index + 1] : [-1, -1];
}
function paneDataHelper(panesArray, pane, layout) {
  const paneConstraintsArray = panesArray.map((paneData) => paneData.constraints);
  const paneIndex = findPaneDataIndex(panesArray, pane);
  const paneConstraints = paneConstraintsArray[paneIndex];
  const isLastPane = paneIndex === panesArray.length - 1;
  const pivotIndices = isLastPane ? [paneIndex - 1, paneIndex] : [paneIndex, paneIndex + 1];
  const paneSize = layout[paneIndex];
  return {
    ...paneConstraints,
    paneSize,
    pivotIndices
  };
}
function findPaneDataIndex(panesArray, pane) {
  return panesArray.findIndex((prevPaneData) => prevPaneData.opts.id.current === pane.opts.id.current);
}
function callPaneCallbacks(panesArray, layout, paneIdToLastNotifiedSizeMap) {
  for (let index = 0; index < layout.length; index++) {
    const size2 = layout[index];
    const paneData = panesArray[index];
    assert(paneData);
    const { collapsedSize = 0, collapsible } = paneData.constraints;
    const lastNotifiedSize = paneIdToLastNotifiedSizeMap[paneData.opts.id.current];
    if (!(lastNotifiedSize == null || size2 !== lastNotifiedSize))
      continue;
    paneIdToLastNotifiedSizeMap[paneData.opts.id.current] = size2;
    const { onCollapse, onExpand, onResize } = paneData.callbacks;
    onResize?.(size2, lastNotifiedSize);
    if (collapsible && (onCollapse || onExpand)) {
      if (onExpand && (lastNotifiedSize == null || lastNotifiedSize === collapsedSize) && size2 !== collapsedSize) {
        onExpand();
      }
      if (onCollapse && (lastNotifiedSize == null || lastNotifiedSize !== collapsedSize) && size2 === collapsedSize) {
        onCollapse();
      }
    }
  }
}
function getUnsafeDefaultLayout({ panesArray }) {
  const layout = Array(panesArray.length);
  const paneConstraintsArray = panesArray.map((paneData) => paneData.constraints);
  let numPanesWithSizes = 0;
  let remainingSize = 100;
  for (let index = 0; index < panesArray.length; index++) {
    const paneConstraints = paneConstraintsArray[index];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      numPanesWithSizes++;
      layout[index] = defaultSize;
      remainingSize -= defaultSize;
    }
  }
  for (let index = 0; index < panesArray.length; index++) {
    const paneConstraints = paneConstraintsArray[index];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      continue;
    }
    const numRemainingPanes = panesArray.length - numPanesWithSizes;
    const size2 = remainingSize / numRemainingPanes;
    numPanesWithSizes++;
    layout[index] = size2;
    remainingSize -= size2;
  }
  return layout;
}
function validatePaneGroupLayout({ layout: prevLayout, paneConstraints }) {
  const nextLayout = [...prevLayout];
  const nextLayoutTotalSize = nextLayout.reduce((accumulated, current) => accumulated + current, 0);
  if (nextLayout.length !== paneConstraints.length) {
    throw new Error(`Invalid ${paneConstraints.length} pane layout: ${nextLayout.map((size2) => `${size2}%`).join(", ")}`);
  } else if (!areNumbersAlmostEqual(nextLayoutTotalSize, 100)) {
    for (let index = 0; index < paneConstraints.length; index++) {
      const unsafeSize = nextLayout[index];
      assert(unsafeSize != null);
      const safeSize = 100 / nextLayoutTotalSize * unsafeSize;
      nextLayout[index] = safeSize;
    }
  }
  let remainingSize = 0;
  for (let index = 0; index < paneConstraints.length; index++) {
    const unsafeSize = nextLayout[index];
    assert(unsafeSize != null);
    const safeSize = resizePane({
      paneConstraints,
      paneIndex: index,
      initialSize: unsafeSize
    });
    if (unsafeSize !== safeSize) {
      remainingSize += unsafeSize - safeSize;
      nextLayout[index] = safeSize;
    }
  }
  if (!areNumbersAlmostEqual(remainingSize, 0)) {
    for (let index = 0; index < paneConstraints.length; index++) {
      const prevSize = nextLayout[index];
      assert(prevSize != null);
      const unsafeSize = prevSize + remainingSize;
      const safeSize = resizePane({
        paneConstraints,
        paneIndex: index,
        initialSize: unsafeSize
      });
      if (prevSize !== safeSize) {
        remainingSize -= safeSize - prevSize;
        nextLayout[index] = safeSize;
        if (areNumbersAlmostEqual(remainingSize, 0)) {
          break;
        }
      }
    }
  }
  return nextLayout;
}
function getPaneGroupElement(id, domContext) {
  if (!isBrowser)
    return null;
  const element2 = domContext.querySelector(`[data-pane-group][data-pane-group-id="${id}"]`);
  if (element2)
    return element2;
  return null;
}
function getResizeHandleElement(id, domContext) {
  if (!isBrowser)
    return null;
  const element2 = domContext.querySelector(`[data-pane-resizer-id="${id}"]`);
  if (element2)
    return element2;
  return null;
}
function getDragOffsetPercentage({ event, dragHandleId, dir, initialDragState, domContext }) {
  const isHorizontal = dir === "horizontal";
  const handleElement = getResizeHandleElement(dragHandleId, domContext);
  assert(handleElement);
  const groupId = handleElement.getAttribute("data-pane-group-id");
  assert(groupId);
  const { initialCursorPosition } = initialDragState;
  const cursorPosition = getResizeEventCursorPosition(dir, event);
  const groupElement = getPaneGroupElement(groupId, domContext);
  assert(groupElement);
  const groupRect = groupElement.getBoundingClientRect();
  const groupSizeInPixels = isHorizontal ? groupRect.width : groupRect.height;
  const offsetPixels = cursorPosition - initialCursorPosition;
  const offsetPercentage = offsetPixels / groupSizeInPixels * 100;
  return offsetPercentage;
}
function getDeltaPercentage({ event, dragHandleId, dir, initialDragState, keyboardResizeBy, domContext }) {
  if (isKeyDown(event)) {
    const isHorizontal = dir === "horizontal";
    let delta = 0;
    if (event.shiftKey) {
      delta = 100;
    } else if (keyboardResizeBy != null) {
      delta = keyboardResizeBy;
    } else {
      delta = 10;
    }
    let movement = 0;
    switch (event.key) {
      case "ArrowDown":
        movement = isHorizontal ? 0 : delta;
        break;
      case "ArrowLeft":
        movement = isHorizontal ? -delta : 0;
        break;
      case "ArrowRight":
        movement = isHorizontal ? delta : 0;
        break;
      case "ArrowUp":
        movement = isHorizontal ? 0 : -delta;
        break;
      case "End":
        movement = 100;
        break;
      case "Home":
        movement = -100;
        break;
    }
    return movement;
  } else {
    if (initialDragState == null)
      return 0;
    return getDragOffsetPercentage({
      event,
      dragHandleId,
      dir,
      initialDragState,
      domContext
    });
  }
}
function getResizeEventCursorPosition(dir, e) {
  const isHorizontal = dir === "horizontal";
  if (isMouseEvent(e)) {
    return isHorizontal ? e.clientX : e.clientY;
  } else if (isTouchEvent(e)) {
    const firstTouch = e.touches[0];
    assert(firstTouch);
    return isHorizontal ? firstTouch.screenX : firstTouch.screenY;
  } else {
    throw new Error(`Unsupported event type "${e.type}"`);
  }
}
function getResizeHandlePaneIds({ groupId, handleId, panesArray, domContext }) {
  const handle = getResizeHandleElement(handleId, domContext);
  const handles = getResizeHandleElementsForGroup(groupId, domContext);
  const index = handle ? handles.indexOf(handle) : -1;
  const idBefore = panesArray[index]?.opts.id.current ?? null;
  const idAfter = panesArray[index + 1]?.opts.id.current ?? null;
  return [idBefore, idAfter];
}
let count = 0;
function useId(prefix = "paneforge") {
  count++;
  return `${prefix}-${count}`;
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
class ActiveElement2 {
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
new ActiveElement2();
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
class Context2 {
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
function adjustLayoutByDelta({ delta, layout: prevLayout, paneConstraints: paneConstraintsArray, pivotIndices, trigger }) {
  if (areNumbersAlmostEqual(delta, 0))
    return prevLayout;
  const nextLayout = [...prevLayout];
  const [firstPivotIndex, secondPivotIndex] = pivotIndices;
  let deltaApplied = 0;
  {
    if (trigger === "keyboard") {
      {
        const index = delta < 0 ? secondPivotIndex : firstPivotIndex;
        const paneConstraints = paneConstraintsArray[index];
        assert(paneConstraints);
        if (paneConstraints.collapsible) {
          const prevSize = prevLayout[index];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, collapsedSize)) {
            const localDelta = minSize - prevSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
      {
        const index = delta < 0 ? firstPivotIndex : secondPivotIndex;
        const paneConstraints = paneConstraintsArray[index];
        assert(paneConstraints);
        const { collapsible } = paneConstraints;
        if (collapsible) {
          const prevSize = prevLayout[index];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, minSize)) {
            const localDelta = prevSize - collapsedSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
    }
  }
  {
    const increment = delta < 0 ? 1 : -1;
    let index = delta < 0 ? secondPivotIndex : firstPivotIndex;
    let maxAvailableDelta = 0;
    while (true) {
      const prevSize = prevLayout[index];
      assert(prevSize != null);
      const maxSafeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index,
        initialSize: 100
      });
      const delta2 = maxSafeSize - prevSize;
      maxAvailableDelta += delta2;
      index += increment;
      if (index < 0 || index >= paneConstraintsArray.length) {
        break;
      }
    }
    const minAbsDelta = Math.min(Math.abs(delta), Math.abs(maxAvailableDelta));
    delta = delta < 0 ? 0 - minAbsDelta : minAbsDelta;
  }
  {
    const pivotIndex = delta < 0 ? firstPivotIndex : secondPivotIndex;
    let index = pivotIndex;
    while (index >= 0 && index < paneConstraintsArray.length) {
      const deltaRemaining = Math.abs(delta) - Math.abs(deltaApplied);
      const prevSize = prevLayout[index];
      assert(prevSize != null);
      const unsafeSize = prevSize - deltaRemaining;
      const safeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index,
        initialSize: unsafeSize
      });
      if (!areNumbersAlmostEqual(prevSize, safeSize)) {
        deltaApplied += prevSize - safeSize;
        nextLayout[index] = safeSize;
        if (deltaApplied.toPrecision(3).localeCompare(Math.abs(delta).toPrecision(3), void 0, {
          numeric: true
        }) >= 0) {
          break;
        }
      }
      if (delta < 0) {
        index--;
      } else {
        index++;
      }
    }
  }
  if (areNumbersAlmostEqual(deltaApplied, 0)) {
    return prevLayout;
  }
  {
    const pivotIndex = delta < 0 ? secondPivotIndex : firstPivotIndex;
    const prevSize = prevLayout[pivotIndex];
    assert(prevSize != null);
    const unsafeSize = prevSize + deltaApplied;
    const safeSize = resizePane({
      paneConstraints: paneConstraintsArray,
      paneIndex: pivotIndex,
      initialSize: unsafeSize
    });
    nextLayout[pivotIndex] = safeSize;
    if (!areNumbersAlmostEqual(safeSize, unsafeSize)) {
      let deltaRemaining = unsafeSize - safeSize;
      const pivotIndex2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
      let index = pivotIndex2;
      while (index >= 0 && index < paneConstraintsArray.length) {
        const prevSize2 = nextLayout[index];
        assert(prevSize2 != null);
        const unsafeSize2 = prevSize2 + deltaRemaining;
        const safeSize2 = resizePane({
          paneConstraints: paneConstraintsArray,
          paneIndex: index,
          initialSize: unsafeSize2
        });
        if (!areNumbersAlmostEqual(prevSize2, safeSize2)) {
          deltaRemaining -= safeSize2 - prevSize2;
          nextLayout[index] = safeSize2;
        }
        if (areNumbersAlmostEqual(deltaRemaining, 0))
          break;
        delta > 0 ? index-- : index++;
      }
    }
  }
  const totalSize = nextLayout.reduce((total, size2) => size2 + total, 0);
  if (!areNumbersAlmostEqual(totalSize, 100))
    return prevLayout;
  return nextLayout;
}
let currentState = null;
let element = null;
function getCursorStyle(state) {
  switch (state) {
    case "horizontal":
      return "ew-resize";
    case "horizontal-max":
      return "w-resize";
    case "horizontal-min":
      return "e-resize";
    case "vertical":
      return "ns-resize";
    case "vertical-max":
      return "n-resize";
    case "vertical-min":
      return "s-resize";
  }
}
function resetGlobalCursorStyle() {
  if (element === null)
    return;
  document.head.removeChild(element);
  currentState = null;
  element = null;
}
function setGlobalCursorStyle(state, doc) {
  if (currentState === state)
    return;
  currentState = state;
  const style = getCursorStyle(state);
  if (element === null) {
    element = doc.createElement("style");
    doc.head.appendChild(element);
  }
  element.innerHTML = `*{cursor: ${style}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize, dragState, layout, panesArray, paneIndex, precision = 3 }) {
  const size2 = layout[paneIndex];
  let flexGrow;
  if (size2 == null) {
    flexGrow = defaultSize ?? "1";
  } else if (panesArray.length === 1) {
    flexGrow = "1";
  } else {
    flexGrow = size2.toPrecision(precision);
  }
  return {
    flexBasis: 0,
    flexGrow,
    flexShrink: 1,
    // Without this, pane sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a pane during resize
    // This avoid edge cases like nested iframes
    pointerEvents: dragState !== null ? "none" : void 0
  };
}
function initializeStorage(storageObject) {
  try {
    if (typeof localStorage === "undefined") {
      throw new TypeError("localStorage is not supported in this environment");
    }
    storageObject.getItem = (name) => localStorage.getItem(name);
    storageObject.setItem = (name, value) => localStorage.setItem(name, value);
  } catch (err) {
    console.error(err);
    storageObject.getItem = () => null;
    storageObject.setItem = () => {
    };
  }
}
function getPaneGroupKey(autoSaveId) {
  return `paneforge:${autoSaveId}`;
}
function getPaneKey(panes) {
  const sortedPaneIds = panes.map((pane) => {
    return pane.opts.order.current ? `${pane.opts.order.current}:${JSON.stringify(pane.constraints)}` : JSON.stringify(pane.constraints);
  }).sort().join(",");
  return sortedPaneIds;
}
function loadSerializedPaneGroupState(autoSaveId, storage) {
  try {
    const paneGroupKey = getPaneGroupKey(autoSaveId);
    const serialized = storage.getItem(paneGroupKey);
    const parsed = JSON.parse(serialized || "");
    if (typeof parsed === "object" && parsed !== null) {
      return parsed;
    }
  } catch {
  }
  return null;
}
function loadPaneGroupState(autoSaveId, panesArray, storage) {
  const state = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  const paneKey = getPaneKey(panesArray);
  return state[paneKey] || null;
}
function savePaneGroupState(autoSaveId, panesArray, paneSizesBeforeCollapse, sizes, storage) {
  const paneGroupKey = getPaneGroupKey(autoSaveId);
  const paneKey = getPaneKey(panesArray);
  const state = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  state[paneKey] = {
    expandToSizes: Object.fromEntries(paneSizesBeforeCollapse.entries()),
    layout: sizes
  };
  try {
    storage.setItem(paneGroupKey, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}
const debounceMap = {};
function debounce(callback, durationMs = 10) {
  let timeoutId = null;
  const callable = (...args) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, durationMs);
  };
  return callable;
}
function updateStorageValues({ autoSaveId, layout, storage, panesArray, paneSizeBeforeCollapse }) {
  if (layout.length === 0 || layout.length !== panesArray.length)
    return;
  let debouncedSave = debounceMap[autoSaveId];
  if (debouncedSave == null) {
    debouncedSave = debounce(savePaneGroupState, LOCAL_STORAGE_DEBOUNCE_INTERVAL);
    debounceMap[autoSaveId] = debouncedSave;
  }
  const clonedPanesArray = [...panesArray];
  const clonedPaneSizesBeforeCollapse = new Map(paneSizeBeforeCollapse);
  debouncedSave(autoSaveId, clonedPanesArray, clonedPaneSizesBeforeCollapse, layout, storage);
}
const defaultStorage = {
  getItem: (name) => {
    initializeStorage(defaultStorage);
    return defaultStorage.getItem(name);
  },
  setItem: (name, value) => {
    initializeStorage(defaultStorage);
    defaultStorage.setItem(name, value);
  }
};
const PaneGroupContext = new Context2("PaneGroup");
class PaneGroupState {
  static create(opts) {
    return PaneGroupContext.set(new PaneGroupState(opts));
  }
  opts;
  attachment;
  domContext;
  dragState = null;
  layout = [];
  panesArray = [];
  panesArrayChanged = false;
  paneIdToLastNotifiedSizeMap = {};
  paneSizeBeforeCollapseMap = /* @__PURE__ */ new Map();
  prevDelta = 0;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.domContext = new DOMContext(this.opts.ref);
    watch(
      [
        () => this.opts.id.current,
        () => this.layout,
        () => this.panesArray
      ],
      () => {
        return updateResizeHandleAriaValues({
          groupId: this.opts.id.current,
          layout: this.layout,
          panesArray: this.panesArray,
          domContext: this.domContext
        });
      }
    );
    watch(
      [
        () => this.opts.autoSaveId.current,
        () => this.layout,
        () => this.opts.storage.current
      ],
      () => {
        if (!this.opts.autoSaveId.current) return;
        updateStorageValues({
          autoSaveId: this.opts.autoSaveId.current,
          layout: this.layout,
          storage: this.opts.storage.current,
          panesArray: this.panesArray,
          paneSizeBeforeCollapse: this.paneSizeBeforeCollapseMap
        });
      }
    );
    watch(() => this.panesArrayChanged, () => {
      if (!this.panesArrayChanged) return;
      this.panesArrayChanged = false;
      const prevLayout = this.layout;
      let unsafeLayout = null;
      if (this.opts.autoSaveId.current) {
        const state = loadPaneGroupState(this.opts.autoSaveId.current, this.panesArray, this.opts.storage.current);
        if (state) {
          this.paneSizeBeforeCollapseMap = new Map(Object.entries(state.expandToSizes));
          unsafeLayout = state.layout;
        }
      }
      if (unsafeLayout == null) {
        unsafeLayout = getUnsafeDefaultLayout({ panesArray: this.panesArray });
      }
      const nextLayout = validatePaneGroupLayout({
        layout: unsafeLayout,
        paneConstraints: this.panesArray.map((paneData) => paneData.constraints)
      });
      if (areArraysEqual(prevLayout, nextLayout)) return;
      this.layout = nextLayout;
      this.opts.onLayout.current?.(nextLayout);
      callPaneCallbacks(this.panesArray, nextLayout, this.paneIdToLastNotifiedSizeMap);
    });
  }
  setLayout = (newLayout) => {
    this.layout = newLayout;
  };
  registerResizeHandle = (dragHandleId) => {
    return (event) => {
      event.preventDefault();
      const direction = this.opts.direction.current;
      const dragState = this.dragState;
      const groupId = this.opts.id.current;
      const keyboardResizeBy = this.opts.keyboardResizeBy.current;
      const prevLayout = this.layout;
      const paneDataArray = this.panesArray;
      const { initialLayout } = dragState ?? {};
      const doc = this.domContext.getDocument();
      const pivotIndices = getPivotIndices({ groupId, dragHandleId, domContext: this.domContext });
      let delta = getDeltaPercentage({
        event,
        dragHandleId,
        dir: direction,
        initialDragState: dragState,
        keyboardResizeBy,
        domContext: this.domContext
      });
      if (delta === 0) return;
      const isHorizontal = direction === "horizontal";
      if (doc.dir === "rtl" && isHorizontal) {
        delta = -delta;
      }
      const paneConstraints = paneDataArray.map((paneData) => paneData.constraints);
      const nextLayout = adjustLayoutByDelta({
        delta,
        layout: initialLayout ?? prevLayout,
        paneConstraints,
        pivotIndices,
        trigger: isKeyDown(event) ? "keyboard" : "mouse-or-touch"
      });
      const layoutChanged = !areArraysEqual(prevLayout, nextLayout);
      if (isMouseEvent(event) || isTouchEvent(event)) {
        const prevDelta = this.prevDelta;
        if (prevDelta !== delta) {
          this.prevDelta = delta;
          if (!layoutChanged) {
            if (isHorizontal) {
              setGlobalCursorStyle(delta < 0 ? "horizontal-min" : "horizontal-max", doc);
            } else {
              setGlobalCursorStyle(delta < 0 ? "vertical-min" : "vertical-max", doc);
            }
          } else {
            setGlobalCursorStyle(isHorizontal ? "horizontal" : "vertical", doc);
          }
        }
      }
      if (layoutChanged) {
        this.setLayout(nextLayout);
        this.opts.onLayout.current?.(nextLayout);
        callPaneCallbacks(paneDataArray, nextLayout, this.paneIdToLastNotifiedSizeMap);
      }
    };
  };
  resizePane = (paneState, unsafePaneSize) => {
    const prevLayout = this.layout;
    const panesArray = this.panesArray;
    const paneConstraintsArr = panesArray.map((paneData) => paneData.constraints);
    const { paneSize, pivotIndices } = paneDataHelper(panesArray, paneState, prevLayout);
    assert(paneSize != null);
    const isLastPane = findPaneDataIndex(panesArray, paneState) === panesArray.length - 1;
    const delta = isLastPane ? paneSize - unsafePaneSize : unsafePaneSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: prevLayout,
      paneConstraints: paneConstraintsArr,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual(prevLayout, nextLayout)) return;
    this.setLayout(nextLayout);
    this.opts.onLayout.current?.(nextLayout);
    callPaneCallbacks(panesArray, nextLayout, this.paneIdToLastNotifiedSizeMap);
  };
  startDragging = (dragHandleId, e) => {
    const direction = this.opts.direction.current;
    const layout = this.layout;
    const handleElement = getResizeHandleElement(dragHandleId, this.domContext);
    assert(handleElement);
    const initialCursorPosition = getResizeEventCursorPosition(direction, e);
    this.dragState = {
      dragHandleId,
      dragHandleRect: handleElement.getBoundingClientRect(),
      initialCursorPosition,
      initialLayout: layout
    };
  };
  stopDragging = () => {
    resetGlobalCursorStyle();
    this.dragState = null;
  };
  isPaneCollapsed = (pane) => {
    const paneDataArray = this.panesArray;
    const layout = this.layout;
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper(paneDataArray, pane, layout);
    return collapsible === true && paneSize === collapsedSize;
  };
  expandPane = (pane) => {
    const prevLayout = this.layout;
    const paneDataArray = this.panesArray;
    if (!pane.constraints.collapsible) return;
    const paneConstraintsArray = paneDataArray.map((paneData) => paneData.constraints);
    const { collapsedSize = 0, paneSize, minSize = 0, pivotIndices } = paneDataHelper(paneDataArray, pane, prevLayout);
    if (paneSize !== collapsedSize) return;
    const prevPaneSize = this.paneSizeBeforeCollapseMap.get(pane.opts.id.current);
    const baseSize = prevPaneSize != null && prevPaneSize >= minSize ? prevPaneSize : minSize;
    const isLastPane = findPaneDataIndex(paneDataArray, pane) === paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - baseSize : baseSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual(prevLayout, nextLayout)) return;
    this.setLayout(nextLayout);
    this.opts.onLayout.current?.(nextLayout);
    callPaneCallbacks(paneDataArray, nextLayout, this.paneIdToLastNotifiedSizeMap);
  };
  collapsePane = (pane) => {
    const prevLayout = this.layout;
    const paneDataArray = this.panesArray;
    if (!pane.constraints.collapsible) return;
    const paneConstraintsArray = paneDataArray.map((paneData) => paneData.constraints);
    const { collapsedSize = 0, paneSize, pivotIndices } = paneDataHelper(paneDataArray, pane, prevLayout);
    assert(paneSize != null);
    if (paneSize === collapsedSize) return;
    this.paneSizeBeforeCollapseMap.set(pane.opts.id.current, paneSize);
    const isLastPane = findPaneDataIndex(paneDataArray, pane) === paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - collapsedSize : collapsedSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual(prevLayout, nextLayout)) return;
    this.layout = nextLayout;
    this.opts.onLayout.current?.(nextLayout);
    callPaneCallbacks(paneDataArray, nextLayout, this.paneIdToLastNotifiedSizeMap);
  };
  getPaneSize = (pane) => {
    return paneDataHelper(this.panesArray, pane, this.layout).paneSize;
  };
  getPaneStyle = (pane, defaultSize) => {
    const paneDataArray = this.panesArray;
    const layout = this.layout;
    const dragState = this.dragState;
    const paneIndex = findPaneDataIndex(paneDataArray, pane);
    return computePaneFlexBoxStyle({
      defaultSize,
      dragState,
      layout,
      panesArray: paneDataArray,
      paneIndex
    });
  };
  isPaneExpanded = (pane) => {
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper(this.panesArray, pane, this.layout);
    return !collapsible || paneSize > collapsedSize;
  };
  registerPane = (pane) => {
    const newPaneDataArray = [...this.panesArray, pane];
    newPaneDataArray.sort((paneA, paneB) => {
      const orderA = paneA.opts.order.current;
      const orderB = paneB.opts.order.current;
      if (orderA == null && orderB == null) {
        return 0;
      } else if (orderA == null) {
        return -1;
      } else if (orderB == null) {
        return 1;
      } else {
        return orderA - orderB;
      }
    });
    this.panesArray = newPaneDataArray;
    this.panesArrayChanged = true;
    return () => {
      const paneDataArray = [...this.panesArray];
      const index = findPaneDataIndex(this.panesArray, pane);
      if (index < 0) return;
      paneDataArray.splice(index, 1);
      this.panesArray = paneDataArray;
      delete this.paneIdToLastNotifiedSizeMap[pane.opts.id.current];
      this.panesArrayChanged = true;
    };
  };
  #setResizeHandlerEventListeners = () => {
    const groupId = this.opts.id.current;
    const handles = getResizeHandleElementsForGroup(groupId, this.domContext);
    const paneDataArray = this.panesArray;
    const unsubHandlers = handles.map((handle) => {
      const handleId = handle.getAttribute("data-pane-resizer-id");
      if (!handleId) return noop;
      const [idBefore, idAfter] = getResizeHandlePaneIds({
        groupId,
        handleId,
        panesArray: paneDataArray,
        domContext: this.domContext
      });
      if (idBefore == null || idAfter == null) return noop;
      const onKeydown = (e) => {
        if (e.defaultPrevented || e.key !== "Enter") return;
        e.preventDefault();
        const paneDataArray2 = this.panesArray;
        const index = paneDataArray2.findIndex((paneData2) => paneData2.opts.id.current === idBefore);
        if (index < 0) return;
        const paneData = paneDataArray2[index];
        assert(paneData);
        const layout = this.layout;
        const size2 = layout[index];
        const { collapsedSize = 0, collapsible, minSize = 0 } = paneData.constraints;
        if (!(size2 != null && collapsible)) return;
        const nextLayout = adjustLayoutByDelta({
          delta: areNumbersAlmostEqual(size2, collapsedSize) ? minSize - size2 : collapsedSize - size2,
          layout,
          paneConstraints: paneDataArray2.map((paneData2) => paneData2.constraints),
          pivotIndices: getPivotIndices({ groupId, dragHandleId: handleId, domContext: this.domContext }),
          trigger: "keyboard"
        });
        if (layout !== nextLayout) {
          this.layout = nextLayout;
        }
      };
      const unsubListener = addEventListener$1(handle, "keydown", onKeydown);
      return () => {
        unsubListener();
      };
    });
    return () => {
      for (const unsub of unsubHandlers) {
        unsub();
      }
    };
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-pane-group": "",
    "data-direction": this.opts.direction.current,
    "data-pane-group-id": this.opts.id.current,
    style: {
      display: "flex",
      flexDirection: this.opts.direction.current === "horizontal" ? "row" : "column",
      height: "100%",
      overflow: "hidden",
      width: "100%"
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
const resizeKeys = [
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home"
];
class PaneResizerState {
  static create(opts) {
    return new PaneResizerState(opts, PaneGroupContext.get());
  }
  opts;
  #group;
  attachment;
  domContext;
  #isDragging = derived(() => this.#group.dragState?.dragHandleId === this.opts.id.current);
  #isFocused = false;
  resizeHandler = null;
  constructor(opts, group) {
    this.opts = opts;
    this.#group = group;
    this.attachment = attachRef(this.opts.ref);
    this.domContext = new DOMContext(this.opts.ref);
  }
  #startDragging = (e) => {
    e.preventDefault();
    if (this.opts.disabled.current) return;
    this.#group.startDragging(this.opts.id.current, e);
    this.opts.onDraggingChange.current(true);
  };
  #stopDraggingAndBlur = () => {
    const node = this.opts.ref.current;
    if (!node) return;
    node.blur();
    this.#group.stopDragging();
    this.opts.onDraggingChange.current(false);
  };
  #onkeydown = (e) => {
    if (this.opts.disabled.current || !this.resizeHandler || e.defaultPrevented) return;
    if (resizeKeys.includes(e.key)) {
      e.preventDefault();
      this.resizeHandler(e);
      return;
    }
    if (e.key !== "F6") return;
    e.preventDefault();
    const handles = getResizeHandleElementsForGroup(this.#group.opts.id.current, this.domContext);
    const index = getResizeHandleElementIndex({
      groupId: this.#group.opts.id.current,
      id: this.opts.id.current,
      domContext: this.domContext
    });
    if (index === null) return;
    let nextIndex = 0;
    if (e.shiftKey) {
      if (index > 0) {
        nextIndex = index - 1;
      } else {
        nextIndex = handles.length - 1;
      }
    } else {
      if (index + 1 < handles.length) {
        nextIndex = index + 1;
      } else {
        nextIndex = 0;
      }
    }
    const nextHandle = handles[nextIndex];
    nextHandle.focus();
  };
  #onblur = () => {
    this.#isFocused = false;
  };
  #onfocus = () => {
    this.#isFocused = true;
  };
  #onmousedown = (e) => {
    this.#startDragging(e);
  };
  #onmouseup = () => {
    this.#stopDraggingAndBlur();
  };
  #ontouchcancel = () => {
    this.#stopDraggingAndBlur();
  };
  #ontouchend = () => {
    this.#stopDraggingAndBlur();
  };
  #ontouchstart = (e) => {
    this.#startDragging(e);
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "separator",
    "data-direction": this.#group.opts.direction.current,
    "data-pane-group-id": this.#group.opts.id.current,
    "data-active": this.#isDragging() ? "pointer" : this.#isFocused ? "keyboard" : void 0,
    "data-enabled": !this.opts.disabled.current,
    "data-pane-resizer-id": this.opts.id.current,
    "data-pane-resizer": "",
    tabIndex: this.opts.tabIndex.current,
    style: {
      cursor: getCursorStyle(this.#group.opts.direction.current),
      touchAction: "none",
      userSelect: "none",
      "-webkit-user-select": "none",
      "-webkit-touch-callout": "none"
    },
    onkeydown: this.#onkeydown,
    onblur: this.#onblur,
    onfocus: this.#onfocus,
    onmousedown: this.#onmousedown,
    onmouseup: this.#onmouseup,
    ontouchcancel: this.#ontouchcancel,
    ontouchend: this.#ontouchend,
    ontouchstart: this.#ontouchstart,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaneState {
  static create(opts) {
    return new PaneState(opts, PaneGroupContext.get());
  }
  opts;
  group;
  attachment;
  domContext;
  #paneTransitionState = "";
  #callbacks = derived(() => ({
    onCollapse: this.opts.onCollapse.current,
    onExpand: this.opts.onExpand.current,
    onResize: this.opts.onResize.current
  }));
  get callbacks() {
    return this.#callbacks();
  }
  set callbacks($$value) {
    return this.#callbacks($$value);
  }
  #constraints = derived(() => ({
    collapsedSize: this.opts.collapsedSize.current,
    collapsible: this.opts.collapsible.current,
    defaultSize: this.opts.defaultSize.current,
    maxSize: this.opts.maxSize.current,
    minSize: this.opts.minSize.current
  }));
  get constraints() {
    return this.#constraints();
  }
  set constraints($$value) {
    return this.#constraints($$value);
  }
  #handleTransition = (state) => {
    this.#paneTransitionState = state;
    afterTick(() => {
      if (this.opts.ref.current) {
        const element2 = this.opts.ref.current;
        const computedStyle = getComputedStyle(element2);
        const hasTransition = computedStyle.transitionDuration !== "0s";
        if (!hasTransition) {
          this.#paneTransitionState = "";
          return;
        }
        const handleTransitionEnd = (event) => {
          if (event.propertyName === "flex-grow") {
            this.#paneTransitionState = "";
            element2.removeEventListener("transitionend", handleTransitionEnd);
          }
        };
        element2.addEventListener("transitionend", handleTransitionEnd);
      } else {
        this.#paneTransitionState = "";
      }
    });
  };
  pane = {
    collapse: () => {
      this.#handleTransition("collapsing");
      this.group.collapsePane(this);
    },
    expand: () => {
      this.#handleTransition("expanding");
      this.group.expandPane(this);
    },
    getSize: () => this.group.getPaneSize(this),
    isCollapsed: () => this.group.isPaneCollapsed(this),
    isExpanded: () => this.group.isPaneExpanded(this),
    resize: (size2) => this.group.resizePane(this, size2),
    getId: () => this.opts.id.current
  };
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref);
    this.domContext = new DOMContext(this.opts.ref);
    watch(() => snapshot(this.constraints), () => {
      this.group.panesArrayChanged = true;
    });
  }
  #isCollapsed = derived(() => this.group.isPaneCollapsed(this));
  #paneState = derived(() => this.#paneTransitionState !== "" ? this.#paneTransitionState : this.#isCollapsed() ? "collapsed" : "expanded");
  #props = derived(() => ({
    id: this.opts.id.current,
    style: this.group.getPaneStyle(this, this.opts.defaultSize.current),
    "data-pane": "",
    "data-pane-id": this.opts.id.current,
    "data-pane-group-id": this.group.opts.id.current,
    "data-collapsed": this.#isCollapsed() ? "" : void 0,
    "data-expanded": this.#isCollapsed() ? void 0 : "",
    "data-pane-state": this.#paneState(),
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Pane_group($$payload, $$props) {
  push();
  let {
    autoSaveId = null,
    direction,
    id = useId(),
    keyboardResizeBy = null,
    onLayoutChange = noop,
    storage = defaultStorage,
    ref = null,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const paneGroupState = PaneGroupState.create({
    id: box.with(() => id ?? useId()),
    ref: box.with(() => ref, (v) => ref = v),
    autoSaveId: box.with(() => autoSaveId),
    direction: box.with(() => direction),
    keyboardResizeBy: box.with(() => keyboardResizeBy),
    onLayout: box.with(() => onLayoutChange),
    storage: box.with(() => storage)
  });
  const getLayout = () => paneGroupState.layout;
  const setLayout = paneGroupState.setLayout;
  const getId = () => paneGroupState.opts.id.current;
  const mergedProps = mergeProps(restProps, paneGroupState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref, getLayout, setLayout, getId });
  pop();
}
function Pane($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    collapsedSize,
    collapsible,
    defaultSize,
    maxSize,
    minSize,
    onCollapse = noop,
    onExpand = noop,
    onResize = noop,
    order,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const paneState = PaneState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    collapsedSize: box.with(() => collapsedSize),
    collapsible: box.with(() => collapsible),
    defaultSize: box.with(() => defaultSize),
    maxSize: box.with(() => maxSize),
    minSize: box.with(() => minSize),
    onCollapse: box.with(() => onCollapse),
    onExpand: box.with(() => onExpand),
    onResize: box.with(() => onResize),
    order: box.with(() => order)
  });
  const collapse = paneState.pane.collapse;
  const expand = paneState.pane.expand;
  const getSize = paneState.pane.getSize;
  const isCollapsed = paneState.pane.isCollapsed;
  const isExpanded = paneState.pane.isExpanded;
  const resize = paneState.pane.resize;
  const getId = paneState.pane.getId;
  const mergedProps = mergeProps(restProps, paneState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, {
    ref,
    collapse,
    expand,
    getSize,
    isCollapsed,
    isExpanded,
    resize,
    getId
  });
  pop();
}
function Pane_resizer($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    disabled = false,
    onDraggingChange = noop,
    tabindex = 0,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const resizerState = PaneResizerState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => disabled),
    onDraggingChange: box.with(() => onDraggingChange),
    tabIndex: box.with(() => tabindex)
  });
  const mergedProps = mergeProps(restProps, resizerState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div${spread_attributes({ ...mergedProps }, null)}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Grip_vertical($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.507.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "9", "cy": "12", "r": "1" }],
    ["circle", { "cx": "9", "cy": "5", "r": "1" }],
    ["circle", { "cx": "9", "cy": "19", "r": "1" }],
    ["circle", { "cx": "15", "cy": "12", "r": "1" }],
    ["circle", { "cx": "15", "cy": "5", "r": "1" }],
    ["circle", { "cx": "15", "cy": "19", "r": "1" }]
  ];
  Icon($$payload, spread_props([
    { name: "grip-vertical" },
    $$sanitized_props,
    {
      /**
       * @component @name GripVertical
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjUiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjE5IiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iMTUiIGN5PSI1IiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTkiIHI9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/grip-vertical
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Resizable_handle($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    withHandle = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Pane_resizer($$payload2, spread_props([
      {
        class: cn("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          if (withHandle) {
            $$payload3.out.push("<!--[-->");
            $$payload3.out.push(`<div class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">`);
            Grip_vertical($$payload3, { class: "size-2.5" });
            $$payload3.out.push(`<!----></div>`);
          } else {
            $$payload3.out.push("<!--[!-->");
          }
          $$payload3.out.push(`<!--]-->`);
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Resizable_pane_group($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    direction,
    this: paneGroup = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Pane_group($$payload2, spread_props([
      {
        direction,
        class: cn("flex h-full w-full data-[direction=vertical]:flex-col", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, this: paneGroup });
  pop();
}
function Shield_lock_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M10 16h4q.425 0 .713-.288T15 15v-3q0-.425-.288-.712T14 11v-1q0-.825-.587-1.412T12 8t-1.412.588T10 10v1q-.425 0-.712.288T9 12v3q0 .425.288.713T10 16m1-5v-1q0-.425.288-.712T12 9t.713.288T13 10v1zm1 10.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"></path></svg>`);
}
function Privacy($$payload) {
  Root($$payload, {
    children: ($$payload2) => {
      Trigger($$payload2, {
        children: ($$payload3) => {
          Shield_lock_outline_rounded($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Dialog_content($$payload2, {
        class: "max-h-full overflow-hidden overflow-y-auto p-12",
        children: ($$payload3) => {
          Dialog_header($$payload3, {
            children: ($$payload4) => {
              Dialog_title($$payload4, {
                class: "flex items-center gap-2 text-xl",
                children: ($$payload5) => {
                  Shield_lock_outline_rounded($$payload5, { class: "size-8 text-green-700" });
                  $$payload5.out.push(`<!----> Data security`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----> <p class="text-xl font-semibold">Your diagrams never leave your browser.</p> <p>They're only stored in the URL and your browser's local storage.</p> <p>This is a fully open source, client-side app deployed on <a href="https://github.com/mermaid-js/mermaid-live-editor/deployments" class="underline" target="_blank">GitHub Pages</a> that works offline as a <a href="https://web.dev/explore/progressive-web-apps" target="_blank">Progressive Web App</a>.</p> <p>We use self hosted, privacy-friendly Plausible Analytics to collect anonymous usage metadata
      (diagram types, feature usage, etc.). All data is <a href="https://p.mermaid.live/mermaid.live" class="underline" target="_blank">publicly available</a>.</p> `);
          ExternalLinkWrapper($$payload3, {
            domain: "example.com",
            isVisible: true,
            children: ($$payload4) => {
              $$payload4.out.push(`<p class="text-left">External services (PNG/SVG/Kroki exports, "Save to Mermaid Chart", "Repair with AI", etc)
        will share your diagram with those 3rd parties, and are highlighted in the UI on hover.</p>`);
            }
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
function Dark_mode_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"></path></svg>`);
}
function Light_mode_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288M12 12"></path></svg>`);
}
function ThemeIcon($$payload) {
  var $$store_subs;
  $$payload.out.push(`<div class="inline-grid"><!---->`);
  {
    $$payload.out.push(`<div class="col-start-1 row-start-1">`);
    if (store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark") {
      $$payload.out.push("<!--[-->");
      Dark_mode_outline_rounded($$payload, {});
    } else {
      $$payload.out.push("<!--[!-->");
      Light_mode_outline_rounded($$payload, {});
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!----></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function VersionSecurityToolbar($$payload, $$props) {
  push();
  var $$store_subs;
  FloatingToolbar($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<span class="text-sm font-semibold opacity-60">v${escape_html(version)}</span> `);
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        title: "Privacy & Security",
        children: ($$payload3) => {
          Privacy($$payload3);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Separator($$payload2, { orientation: "vertical" });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "ghost",
        size: "icon",
        "data-testid": TID.themeToggleButton,
        title: `Switch to ${stringify(store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark" ? "light" : "dark")} theme`,
        class: "[&_svg]:size-5",
        onclick: () => setMode(store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark" ? "light" : "dark"),
        children: ($$payload3) => {
          ThemeIcon($$payload3);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!---->`);
    }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Code($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes(
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...p
    },
    null,
    void 0,
    void 0,
    3
  )}><g id="terminal"><mask id="mask0_13660_101033" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect id="Bounding box" width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_13660_101033)"><g id="terminal_2"><path d="M3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V5C1 4.45 1.19583 3.97917 1.5875 3.5875C1.97917 3.19583 2.45 3 3 3H21C21.55 3 22.0208 3.19583 22.4125 3.5875C22.8042 3.97917 23 4.45 23 5V19C23 19.55 22.8042 20.0208 22.4125 20.4125C22.0208 20.8042 21.55 21 21 21H3ZM3 19H21V7H3V19ZM16.675 13L14.775 11.1C14.575 10.9 14.4792 10.6667 14.4875 10.4C14.4958 10.1333 14.6 9.9 14.8 9.7C15 9.51667 15.2333 9.42083 15.5 9.4125C15.7667 9.40417 16 9.5 16.2 9.7L18.8 12.3C19 12.5 19.1 12.7333 19.1 13C19.1 13.2667 19 13.5 18.8 13.7L16.2 16.3C16.0167 16.4833 15.7875 16.5792 15.5125 16.5875C15.2375 16.5958 15 16.5 14.8 16.3C14.6167 16.1167 14.525 15.8833 14.525 15.6C14.525 15.3167 14.6167 15.0833 14.8 14.9L16.675 13ZM6 14C5.71667 14 5.47917 13.9042 5.2875 13.7125C5.09583 13.5208 5 13.2833 5 13C5 12.7167 5.09583 12.4792 5.2875 12.2875C5.47917 12.0958 5.71667 12 6 12H8C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14H6Z" fill="currentColor"></path><path d="M11 14C10.7167 14 10.4792 13.9042 10.2875 13.7125C10.0958 13.5208 10 13.2833 10 13C10 12.7167 10.0958 12.4792 10.2875 12.2875C10.4792 12.0958 10.7167 12 11 12H13C13.2833 12 13.5208 12.0958 13.7125 12.2875C13.9042 12.4792 14 12.7167 14 13C14 13.2833 13.9042 13.5208 13.7125 13.7125C13.5208 13.9042 13.2833 14 13 14H11Z" fill="currentColor"></path></g></g></g></svg>`);
}
function History($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"></path></svg>`);
}
function Settings_outline_rounded($$payload, $$props) {
  const { $$slots, $$events, ...p } = $$props;
  $$payload.out.push(`<svg${spread_attributes({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...p }, null, void 0, void 0, 3)}><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"></path></svg>`);
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const panZoomState = new PanZoomState();
  const tabSelectHandler = (tab) => {
    const editorMode = tab.id === "code" ? "code" : "config";
    updateCodeStore({ editorMode });
  };
  const editorTabs = [
    { icon: Code, id: "code", title: "Code" },
    { icon: Settings_outline_rounded, id: "config", title: "Config" }
  ];
  let isViewMode = true;
  let isHistoryOpen = false;
  function mobileToggle($$payload2) {
    $$payload2.out.push(`<div class="flex items-center gap-2">Edit `);
    Switch($$payload2, {
      id: "editorMode",
      class: "data-[state=checked]:bg-accent",
      onclick: () => {
      },
      get checked() {
        return isViewMode;
      },
      set checked($$value) {
        isViewMode = $$value;
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----> View</div>`);
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="flex h-full flex-col overflow-hidden">`);
    Navbar($$payload2, {
      mobileToggle,
      children: ($$payload3) => {
        Toggle($$payload3, {
          size: "sm",
          get pressed() {
            return isHistoryOpen;
          },
          set pressed($$value) {
            isHistoryOpen = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            History($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        Share($$payload3);
        $$payload3.out.push(`<!----> `);
        McWrapper($$payload3, {
          children: ($$payload4) => {
            Button($$payload4, {
              variant: "accent",
              size: "sm",
              href: store_get($$store_subs ??= {}, "$urlsStore", urlsStore).mermaidChart({ medium: "save_diagram" }).save,
              target: "_blank",
              children: ($$payload5) => {
                MermaidChartIcon($$payload5, {});
                $$payload5.out.push(`<!----> Save diagram`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!---->`);
      }
    });
    $$payload2.out.push(`<!----> <div class="flex flex-1 flex-col overflow-hidden"><div${attr_class(clsx$1([
      "size-full",
      ["w-[200%] duration-300", isViewMode && "-translate-x-1/2"]
    ]))}><!---->`);
    Resizable_pane_group($$payload2, {
      direction: "horizontal",
      autoSaveId: "liveEditor",
      class: "gap-4 p-2 pt-0 sm:gap-0 sm:p-6 sm:pt-0",
      children: ($$payload3) => {
        $$payload3.out.push(`<!---->`);
        Pane($$payload3, {
          defaultSize: 30,
          minSize: 15,
          children: ($$payload4) => {
            $$payload4.out.push(`<div class="flex h-full flex-col gap-4 sm:gap-6">`);
            {
              let actions = function($$payload5) {
                DiagramDocumentationButton($$payload5);
              };
              Card($$payload4, {
                onselect: tabSelectHandler,
                isOpen: true,
                tabs: editorTabs,
                activeTabID: store_get($$store_subs ??= {}, "$stateStore", stateStore).editorMode,
                isClosable: false,
                actions,
                children: ($$payload5) => {
                  Editor($$payload5);
                }
              });
            }
            $$payload4.out.push(`<!----> <div class="group flex flex-wrap justify-between gap-4 sm:gap-6">`);
            Preset($$payload4);
            $$payload4.out.push(`<!----> `);
            Actions($$payload4);
            $$payload4.out.push(`<!----></div></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> <!---->`);
        Resizable_handle($$payload3, { class: "mr-1 hidden opacity-0 sm:block" });
        $$payload3.out.push(`<!----> <!---->`);
        Pane($$payload3, {
          minSize: 15,
          class: "relative flex h-full flex-1 flex-col overflow-hidden",
          children: ($$payload4) => {
            View($$payload4, {
              panZoomState,
              shouldShowGrid: store_get($$store_subs ??= {}, "$stateStore", stateStore).grid
            });
            $$payload4.out.push(`<!----> <div class="absolute top-0 right-0">`);
            PanZoomToolbar($$payload4, { panZoomState });
            $$payload4.out.push(`<!----></div> <div class="absolute right-0 bottom-0">`);
            VersionSecurityToolbar($$payload4);
            $$payload4.out.push(`<!----></div> <div class="absolute bottom-0 left-0 sm:left-5">`);
            SyncRoughToolbar($$payload4);
            $$payload4.out.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> `);
        if (isHistoryOpen) {
          $$payload3.out.push("<!--[-->");
          $$payload3.out.push(`<!---->`);
          Resizable_handle($$payload3, { class: "ml-1 hidden opacity-0 sm:block" });
          $$payload3.out.push(`<!----> <!---->`);
          Pane($$payload3, {
            minSize: 15,
            defaultSize: 30,
            class: "hidden h-full flex-grow flex-col sm:flex",
            children: ($$payload4) => {
              History$1($$payload4);
            },
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!---->`);
        } else {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div></div></div>`);
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
  _page as default
};
