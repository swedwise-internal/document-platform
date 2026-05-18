import { g as get, w as writable, d as derived } from "./index.js";
import { diagramData } from "@mermaid-js/examples";
import elkLayouts from "@mermaid-js/layout-elk";
import tidyTreeLayouts from "@mermaid-js/layout-tidy-tree";
import zenuml from "@mermaid-js/mermaid-zenuml";
import mermaid from "mermaid";
import ESSerializer from "esserializer";
import { toUint8Array, fromUint8Array, fromBase64, toBase64 } from "js-base64";
import { inflate, deflate } from "pako";
import { generateSlug } from "random-word-slugs";
import { v4 } from "uuid";
import "clsx";
let timeoutAction;
let timeoutEnable;
function withoutTransition(action) {
  if (typeof document === "undefined")
    return;
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css);
  const disable = () => document.head.appendChild(style);
  const enable = () => document.head.removeChild(style);
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 120);
  }, 120);
}
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage$1 = {
  getItem: (_key) => null,
  setItem: (_key, _value) => {
  }
};
const isBrowser = typeof document !== "undefined";
const modes = ["dark", "light", "system"];
const modeStorageKey = writable("mode-watcher-mode");
const themeStorageKey = writable("mode-watcher-theme");
const userPrefersMode = createUserPrefersMode();
const systemPrefersMode = createSystemMode();
const themeColors = writable(void 0);
const theme = createCustomTheme();
const disableTransitions = writable(true);
const darkClassNames = writable([]);
const lightClassNames = writable([]);
const derivedMode = createDerivedMode();
createDerivedTheme();
function createUserPrefersMode() {
  const defaultValue = "system";
  const storage = isBrowser ? localStorage : noopStorage$1;
  const initialValue = storage.getItem(getModeStorageKey());
  let value = isValidMode(initialValue) ? initialValue : defaultValue;
  function getModeStorageKey() {
    return get(modeStorageKey);
  }
  const { subscribe, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getModeStorageKey())
        return;
      const newValue = e.newValue;
      if (isValidMode(newValue)) {
        _set(value = newValue);
      } else {
        _set(value = defaultValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getModeStorageKey(), value);
  }
  return {
    subscribe,
    set
  };
}
function createCustomTheme() {
  const storage = isBrowser ? localStorage : noopStorage$1;
  const initialValue = storage.getItem(getThemeStorageKey());
  let value = initialValue === null || initialValue === void 0 ? "" : initialValue;
  function getThemeStorageKey() {
    return get(themeStorageKey);
  }
  const { subscribe, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getThemeStorageKey())
        return;
      const newValue = e.newValue;
      if (newValue === null) {
        _set(value = "");
      } else {
        _set(value = newValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getThemeStorageKey(), value);
  }
  return {
    subscribe,
    set
  };
}
function createSystemMode() {
  const defaultValue = void 0;
  let track = true;
  const { subscribe, set } = writable(defaultValue, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (!track)
        return;
      set(e.matches ? "light" : "dark");
    };
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    mediaQueryState.addEventListener("change", handler);
    return () => mediaQueryState.removeEventListener("change", handler);
  });
  function query() {
    if (!isBrowser)
      return;
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    set(mediaQueryState.matches ? "light" : "dark");
  }
  function tracking(active) {
    track = active;
  }
  return {
    subscribe,
    query,
    tracking
  };
}
function createDerivedMode() {
  const { subscribe } = derived([
    userPrefersMode,
    systemPrefersMode,
    themeColors,
    disableTransitions,
    darkClassNames,
    lightClassNames
  ], ([$userPrefersMode, $systemPrefersMode, $themeColors, $disableTransitions, $darkClassNames, $lightClassNames]) => {
    if (!isBrowser)
      return void 0;
    const derivedMode2 = $userPrefersMode === "system" ? $systemPrefersMode : $userPrefersMode;
    const sanitizedDarkClassNames = sanitizeClassNames($darkClassNames);
    const sanitizedLightClassNames = sanitizeClassNames($lightClassNames);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode2 === "light") {
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length)
          htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.light);
        }
      } else {
        if (sanitizedLightClassNames.length)
          htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.dark);
        }
      }
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode2;
  });
  return {
    subscribe
  };
}
function createDerivedTheme() {
  const { subscribe } = derived([theme, disableTransitions], ([$theme, $disableTransitions]) => {
    if (!isBrowser)
      return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", $theme);
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return $theme;
  });
  return {
    subscribe
  };
}
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
function findMostRelevantLineNumber(errorLineText, code) {
  const codeLines = code.split("\n");
  let mostRelevantLineNumber = -1;
  let maxCommonLength = 0;
  for (const [i, line] of codeLines.entries()) {
    let commonLength = 0;
    for (let j = 0; j <= errorLineText.length; j++) {
      for (let k = j + 1; k <= errorLineText.length; k++) {
        const sub = errorLineText.slice(j, k);
        if (line.includes(sub)) {
          commonLength = Math.max(commonLength, sub.length);
        }
      }
    }
    if (commonLength > maxCommonLength) {
      maxCommonLength = commonLength;
      mostRelevantLineNumber = i + 1;
    }
  }
  return mostRelevantLineNumber;
}
function replaceLineNumberInErrorMessage(errorMessage, realLineNumber) {
  const regexParseError = /Parse error on line (\d+):/;
  const regexLexError = /Lexical error on line (\d+)/;
  return errorMessage.replace(regexParseError, `Parse error on line ${realLineNumber}:`).replace(regexLexError, `Lexical error on line ${realLineNumber}:`);
}
function extractErrorLineText(errorMessage) {
  const regex = /Error: Parse error on line \d+:\n(.+)\n+/;
  const match = errorMessage.match(regex);
  if (match) {
    return match[1].slice(3);
  }
  const regexLex = /Error: Lexical error on line \d+. Unrecognized text.\n(.+)\n-+/;
  const matchLex = errorMessage.match(regexLex);
  return matchLex ? matchLex[1].slice(3) : "";
}
mermaid.registerLayoutLoaders([...elkLayouts, ...tidyTreeLayouts]);
mermaid.registerExternalDiagrams([zenuml]);
const parse = async (code) => {
  return await mermaid.parse(code);
};
const standardizeDiagramType = (diagramType) => {
  switch (diagramType) {
    case "class":
    case "classDiagram": {
      return "classDiagram";
    }
    case "graph":
    case "flowchart":
    case "flowchart-elk":
    case "flowchart-v2": {
      return "flowchart";
    }
    default: {
      return diagramType;
    }
  }
};
const isValidDiagram = (diagram) => {
  return Boolean(diagram.name && diagram.examples && diagram.examples.length > 0);
};
const getSampleDiagrams = () => {
  const diagrams = diagramData.filter((d) => isValidDiagram(d)).map(({ examples: examples2, ...rest }) => ({
    ...rest,
    example: examples2?.filter(({ isDefault }) => isDefault)[0]
  }));
  const examples = {};
  for (const diagram of diagrams) {
    examples[diagram.name.replace(/ (Diagram|Chart|Graph)/, "")] = diagram.example.code;
  }
  return examples;
};
const alreadyWarnFor = [];
const warnStorageNotFound = (storageName) => {
  const isProduction = typeof process !== "undefined" && process.env.NODE_ENV === "production";
  if (!alreadyWarnFor.includes(storageName) && !isProduction) {
    let message = `Unable to find the ${storageName}. No data will be persisted.`;
    if (typeof window === "undefined") {
      message += "\nAre you running on a server? Most of storages are not available while running on a server.";
    }
    console.warn(message);
    alreadyWarnFor.push(storageName);
  }
};
const serialize = (value) => ESSerializer.serialize(value);
const deserialize = (value) => {
  if (value === "undefined") {
    return void 0;
  }
  if (value !== null && value !== void 0) {
    try {
      return ESSerializer.deserialize(value);
    } catch {
    }
    try {
      return JSON.parse(value);
    } catch {
    }
  }
  return value;
};
function persist(store, storage, key) {
  const initialValue = storage.getValue(key);
  if (null !== initialValue) {
    store.set(initialValue);
  }
  if ("addListener" in storage) {
    storage.addListener(key, (newValue) => {
      store.set(newValue);
    });
  }
  store.subscribe((value) => {
    storage.setValue(key, value);
  });
  return {
    ...store,
    delete() {
      storage.deleteValue(key);
    }
  };
}
function getBrowserStorage(browserStorage, listenExternalChanges = false) {
  const listeners = [];
  const listenerFunction = (event) => {
    const eventKey = event.key;
    if (event.storageArea === browserStorage) {
      for (const { listener } of listeners.filter(({ key }) => key === eventKey)) {
        listener(deserialize(event.newValue));
      }
    }
  };
  const connect = () => {
    if (listenExternalChanges && typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("storage", listenerFunction);
    }
  };
  const disconnect = () => {
    if (listenExternalChanges && typeof window !== "undefined" && window.removeEventListener) {
      window.removeEventListener("storage", listenerFunction);
    }
  };
  return {
    addListener(key, listener) {
      listeners.push({ key, listener });
      if (listeners.length === 1) {
        connect();
      }
    },
    deleteValue(key) {
      browserStorage.removeItem(key);
    },
    getValue(key) {
      const value = browserStorage.getItem(key);
      return deserialize(value);
    },
    removeListener(key, listener) {
      const index = listeners.indexOf({ key, listener });
      if (index !== -1) {
        listeners.splice(index, 1);
      }
      if (listeners.length === 0) {
        disconnect();
      }
    },
    setValue(key, value) {
      browserStorage.setItem(key, serialize(value));
    }
  };
}
function localStorage$1(listenExternalChanges = false) {
  if (typeof window !== "undefined" && window.localStorage) {
    return getBrowserStorage(window.localStorage, listenExternalChanges);
  }
  warnStorageNotFound("window.localStorage");
  return noopStorage();
}
function noopStorage() {
  return {
    getValue() {
      return null;
    },
    deleteValue() {
    },
    setValue() {
    }
  };
}
const base64Serde = {
  serialize: (state) => {
    return toBase64(state, true);
  },
  deserialize: (state) => {
    return fromBase64(state);
  }
};
const pakoSerde = {
  serialize: (state) => {
    const data = new TextEncoder().encode(state);
    const compressed = deflate(data, { level: 9 });
    return fromUint8Array(compressed, true);
  },
  deserialize: (state) => {
    const data = toUint8Array(state);
    return inflate(data, { to: "string" });
  }
};
const serdes = {
  base64: base64Serde,
  pako: pakoSerde
};
const serializeState = (state, serde = "pako") => {
  if (!(serde in serdes)) {
    throw new Error(`Unknown serde type: ${serde}`);
  }
  const json = JSON.stringify(state);
  const serialized = serdes[serde].serialize(json);
  return `${serde}:${serialized}`;
};
const TID = {
  aiRepairButton: "ai-repair-button",
  copyMarkdown: "copy-markdown",
  diagramDocumentationButton: "diagram-documentation-button",
  errorContainer: "error-container",
  themeToggleButton: "theme-toggle-button"
};
const C = {
  aiLiveEditor: "ai_live_editor",
  utmSource: "mermaid_live_editor"
};
const logEvent = (name, data) => {
  {
    return;
  }
};
const MAX_AUTO_HISTORY_LENGTH = 30;
const historyModeStore = persist(
  writable("manual"),
  localStorage$1(),
  "autoHistoryMode"
);
const autoHistoryStore = persist(
  writable([]),
  localStorage$1(),
  "autoHistoryStore"
);
const manualHistoryStore = persist(
  writable([]),
  localStorage$1(),
  "manualHistoryStore"
);
const loaderHistoryStore = writable([]);
const historyStore = derived(
  [historyModeStore, autoHistoryStore, manualHistoryStore, loaderHistoryStore],
  ([historyMode, autoHistories, manualHistories, loadedHistories], set) => {
    switch (historyMode) {
      case "auto": {
        set(autoHistories);
        break;
      }
      case "manual": {
        set(manualHistories);
        break;
      }
      case "loader": {
        set(loadedHistories);
        break;
      }
      default: {
        set(autoHistories);
      }
    }
  }
);
const addHistoryEntry = (entryToAdd) => {
  const entry = {
    ...entryToAdd,
    id: v4()
  };
  if (entry.type === "loader") {
    loaderHistoryStore.update((entries) => [entry, ...entries]);
    return;
  }
  if (!entry.name) {
    entry.name = generateSlug(2);
  }
  if (entry.type === "auto") {
    autoHistoryStore.update((entries) => {
      if (entries.length >= MAX_AUTO_HISTORY_LENGTH) {
        entries = entries.slice(0, MAX_AUTO_HISTORY_LENGTH - 1);
      }
      return [entry, ...entries];
    });
  }
  manualHistoryStore.update((entries) => [entry, ...entries]);
};
const clearHistoryData = (idToClear) => {
  (get(historyModeStore) === "auto" ? autoHistoryStore : manualHistoryStore).update((entries) => {
    if (get(historyModeStore) !== "loader") {
      entries = entries.filter(({ id }) => idToClear && id != idToClear);
    }
    return entries;
  });
};
const getPreviousState = (auto) => {
  const entries = get(auto ? autoHistoryStore : manualHistoryStore);
  if (entries.length > 0) {
    return JSON.stringify(entries[0].state);
  }
  return "";
};
const restoreHistory = (data) => {
  const entries = data.filter((element) => validateEntry(element));
  const invalidEntryCount = data.length - entries.length;
  if (invalidEntryCount > 0) {
    console.error(`${invalidEntryCount} invalid history entries were removed.`);
    console.error(data);
  }
  if (entries.length > 0) {
    let entryCount = 0;
    (entries[0].type === "auto" ? autoHistoryStore : manualHistoryStore).update((existing) => {
      const existingIDs = new Set(existing.map(({ id }) => id));
      const newEntries = entries.filter(({ id }) => !existingIDs.has(id));
      entryCount = newEntries.length;
      const combined = [...existing, ...newEntries];
      combined.sort((a, b) => b.time - a.time);
      return combined;
    });
    alert(
      `${entryCount} entries restored. ${invalidEntryCount} invalid, ${entries.length - entryCount} duplicates.`
    );
    logEvent("history", {
      duplicates: entries.length - entryCount
    });
  } else {
    alert("No valid entries found.");
  }
};
const validateEntry = (entry) => {
  return entry.type && entry.state && entry.time && true;
};
persist(
  writable({ version: -1 }),
  localStorage$1(),
  "migrations"
);
const getDomain = (url) => {
  if (!url) return "";
  const domain = new URL(url).hostname;
  return domain;
};
navigator.platform.toUpperCase().includes("MAC");
const MCBaseURL = "https://example.com";
let count = 0;
const errorDebug = (limit = 1e3) => {
  count += 1;
  if (count > limit) {
    console.log(count, limit);
    debugger;
  }
};
const formatJSON = (data) => JSON.stringify(data, void 0, 2);
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    fallbackCopyToClipboard(text);
  }
};
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.append(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (error) {
    console.error("Failed to copy:", error);
    throw error;
  } finally {
    textArea.remove();
  }
}
const getUTMSource = () => {
  if (typeof window !== "undefined" && window.location.host.includes("mermaid.ai")) {
    return C.aiLiveEditor;
  }
  return C.utmSource;
};
const defaultState = {
  code: `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `,
  grid: true,
  mermaid: formatJSON({
    theme: "default"
  }),
  panZoom: true,
  rough: false,
  updateDiagram: true
};
const inputStateStore = persist(writable(defaultState), localStorage$1(), "codeStore");
const currentState = (() => {
  const state = get(inputStateStore);
  return {
    ...state,
    editorMode: state.editorMode ?? "code",
    error: void 0,
    errorMarkers: [],
    serialized: serializeState(state)
  };
})();
let lastDiagramType = "";
const processState = async (state) => {
  const processed = {
    ...state,
    editorMode: state.editorMode ?? "code",
    error: void 0,
    errorMarkers: [],
    serialized: ""
  };
  try {
    processed.serialized = serializeState(state);
    const { diagramType } = await parse(state.code);
    processed.diagramType = diagramType;
    if (lastDiagramType === "zenuml" && diagramType !== lastDiagramType) {
      setTimeout(() => window.location.reload(), 500);
    }
    lastDiagramType = diagramType;
    JSON.parse(state.mermaid);
  } catch (error) {
    processed.error = error;
    errorDebug();
    console.error(error);
    if ("hash" in error) {
      try {
        let errorString = processed.error.toString();
        const errorLineText = extractErrorLineText(errorString);
        const realLineNumber = findMostRelevantLineNumber(errorLineText, state.code);
        let first_line, last_line, first_column, last_column;
        try {
          ({ first_line, last_line, first_column, last_column } = error.hash.loc);
        } catch {
          const lineNo = findMostRelevantLineNumber(errorString, state.code);
          first_line = lineNo;
          last_line = lineNo + 1;
          first_column = 0;
          last_column = 0;
        }
        if (realLineNumber !== -1) {
          errorString = replaceLineNumberInErrorMessage(errorString, realLineNumber);
        }
        processed.error = new Error(errorString);
        const marker = {
          endColumn: last_column + (first_column === last_column ? 0 : 5),
          endLineNumber: last_line + (realLineNumber - first_line),
          message: errorString || "Syntax error",
          severity: 8,
          // Error
          startColumn: first_column,
          startLineNumber: realLineNumber
        };
        processed.errorMarkers = [marker];
      } catch (error2) {
        console.error("Error without line helper", error2);
      }
    }
  }
  return processed;
};
const stateStore = derived(
  [inputStateStore],
  ([state], set) => {
    void processState(state).then(set);
  },
  currentState
);
const urlsStore = derived([stateStore], ([{ code, serialized }]) => {
  const png = "";
  return {
    kroki: "",
    mdCode: "",
    mermaidChart: ({
      medium
    }) => {
      const utmSource = getUTMSource();
      const params = new URLSearchParams({
        utm_source: utmSource,
        utm_medium: medium
      }).toString();
      return {
        save: `${MCBaseURL}/app/plugin/save?state=${serialized}&${params}`,
        playground: `${MCBaseURL}/play?${params}#${serialized}`,
        plugins: `${MCBaseURL}/plugins?${params}`,
        home: `${MCBaseURL}/?${params}`
      };
    },
    new: `${window.location.protocol}//${window.location.host}${window.location.pathname}#${serializeState(defaultState)}`,
    png,
    svg: "",
    view: `/view#${serialized}`
  };
});
let renderCount = 0;
const updateCodeStore = (newState) => {
  inputStateStore.update((state) => {
    renderCount++;
    return { ...state, ...newState, renderCount };
  });
};
const updateCode = (code, {
  updateDiagram = false,
  resetPanZoom = false
} = {}) => {
  errorDebug();
  inputStateStore.update((state) => {
    if (resetPanZoom) {
      state.pan = void 0;
      state.zoom = void 0;
    }
    return { ...state, code, updateDiagram };
  });
};
const getStateString = () => {
  return JSON.stringify(get(inputStateStore));
};
export {
  updateCodeStore as A,
  userPrefersMode as B,
  C,
  MCBaseURL as M,
  TID as T,
  darkClassNames as a,
  themeStorageKey as b,
  derivedMode as c,
  disableTransitions as d,
  copyToClipboard as e,
  standardizeDiagramType as f,
  getDomain as g,
  loaderHistoryStore as h,
  inputStateStore as i,
  historyModeStore as j,
  historyStore as k,
  lightClassNames as l,
  modeStorageKey as m,
  clearHistoryData as n,
  getStateString as o,
  getPreviousState as p,
  addHistoryEntry as q,
  restoreHistory as r,
  stateStore as s,
  themeColors as t,
  urlsStore as u,
  persist as v,
  localStorage$1 as w,
  getSampleDiagrams as x,
  updateCode as y,
  defaultState as z
};
