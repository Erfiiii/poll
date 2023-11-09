function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wu = { exports: {} }, nl = {}, Qu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt = Symbol.for("react.element"), uc = Symbol.for("react.portal"), sc = Symbol.for("react.fragment"), ac = Symbol.for("react.strict_mode"), cc = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), pc = Symbol.for("react.forward_ref"), mc = Symbol.for("react.suspense"), hc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), Ii = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object" ? null : (e = Ii && e[Ii] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ku = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yu = Object.assign, Xu = {};
function ot(e, n, t) {
  this.props = e, this.context = n, this.refs = Xu, this.updater = t || Ku;
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gu() {
}
Gu.prototype = ot.prototype;
function Ao(e, n, t) {
  this.props = e, this.context = n, this.refs = Xu, this.updater = t || Ku;
}
var Vo = Ao.prototype = new Gu();
Vo.constructor = Ao;
Yu(Vo, ot.prototype);
Vo.isPureReactComponent = !0;
var ji = Array.isArray, Zu = Object.prototype.hasOwnProperty, Bo = { current: null }, Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null)
    for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n)
      Zu.call(n, r) && !Ju.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Xt, type: e, key: o, ref: i, props: l, _owner: Bo.current };
}
function gc(e, n) {
  return { $$typeof: Xt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Fi = /\/+/g;
function Sl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : n.toString(36);
}
function wr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xt:
          case uc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Sl(i, 0) : r, ji(l) ? (t = "", e != null && (t = e.replace(Fi, "$&/") + "/"), wr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Ho(l) && (l = gc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Fi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ji(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Sl(o, u);
      i += wr(o, n, t, s, l);
    }
  else if (s = yc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Sl(o, u++), i += wr(o, n, t, s, l);
  else if (o === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function nr(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return wr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Sc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ie = { current: null }, Sr = { transition: null }, kc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Bo };
T.Children = { map: nr, forEach: function(e, n, t) {
  nr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return nr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return nr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Ho(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = ot;
T.Fragment = sc;
T.Profiler = cc;
T.PureComponent = Ao;
T.StrictMode = ac;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Bo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in n)
      Zu.call(n, s) && !Ju.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fc, _context: e }, e.Consumer = e;
};
T.createElement = qu;
T.createFactory = function(e) {
  var n = qu.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: pc, render: e };
};
T.isValidElement = Ho;
T.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: Sc };
};
T.memo = function(e, n) {
  return { $$typeof: hc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
T.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function(e, n) {
  return ie.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ie.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ie.current.useEffect(e, n);
};
T.useId = function() {
  return ie.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ie.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ie.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ie.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ie.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ie.current.useRef(e);
};
T.useState = function(e) {
  return ie.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ie.current.useTransition();
};
T.version = "18.2.0";
Qu.exports = T;
var Re = Qu.exports;
const Ec = /* @__PURE__ */ ic(Re);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc = Re, Cc = Symbol.for("react.element"), _c = Symbol.for("react.fragment"), Pc = Object.prototype.hasOwnProperty, Nc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n)
    Pc.call(n, r) && !zc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Cc, type: e, key: o, ref: i, props: l, _owner: Nc.current };
}
nl.Fragment = _c;
nl.jsx = bu;
nl.jsxs = bu;
Wu.exports = nl;
var ke = Wu.exports, Kl = {}, es = { exports: {} }, ye = {}, ns = { exports: {} }, ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(x, N) {
    var z = x.length;
    x.push(N);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, X = x[H];
        if (0 < l(X, N))
          x[H] = N, x[z] = X, z = H;
        else
          break e;
      }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0)
      return null;
    var N = x[0], z = x.pop();
    if (z !== N) {
      x[0] = z;
      e:
        for (var H = 0, X = x.length, bt = X >>> 1; H < bt; ) {
          var yn = 2 * (H + 1) - 1, wl = x[yn], gn = yn + 1, er = x[gn];
          if (0 > l(wl, z))
            gn < X && 0 > l(er, wl) ? (x[H] = er, x[gn] = z, H = gn) : (x[H] = wl, x[yn] = z, H = yn);
          else if (gn < X && 0 > l(er, z))
            x[H] = er, x[gn] = z, H = gn;
          else
            break e;
        }
    }
    return N;
  }
  function l(x, N) {
    var z = x.sortIndex - N.sortIndex;
    return z !== 0 ? z : x.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, S = !1, j = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= x)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(x) {
    if (S = !1, d(x), !w)
      if (t(s) !== null)
        w = !0, yl(E);
      else {
        var N = t(c);
        N !== null && gl(v, N.startTime - x);
      }
  }
  function E(x, N) {
    w = !1, S && (S = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || x && !Pe()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = H(m.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? m.callback = X : m === t(s) && r(s), d(N);
        } else
          r(s);
        m = t(s);
      }
      if (m !== null)
        var bt = !0;
      else {
        var yn = t(c);
        yn !== null && gl(v, yn.startTime - N), bt = !1;
      }
      return bt;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var C = !1, _ = null, P = -1, B = 5, L = -1;
  function Pe() {
    return !(e.unstable_now() - L < B);
  }
  function st() {
    if (_ !== null) {
      var x = e.unstable_now();
      L = x;
      var N = !0;
      try {
        N = _(!0, x);
      } finally {
        N ? at() : (C = !1, _ = null);
      }
    } else
      C = !1;
  }
  var at;
  if (typeof a == "function")
    at = function() {
      a(st);
    };
  else if (typeof MessageChannel < "u") {
    var Di = new MessageChannel(), oc = Di.port2;
    Di.port1.onmessage = st, at = function() {
      oc.postMessage(null);
    };
  } else
    at = function() {
      j(st, 0);
    };
  function yl(x) {
    _ = x, C || (C = !0, at());
  }
  function gl(x, N) {
    P = j(function() {
      x(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, yl(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return x();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, N) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var z = p;
    p = x;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(x, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, x) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = z + X, x = { id: h++, callback: N, priorityLevel: x, startTime: z, expirationTime: X, sortIndex: -1 }, z > H ? (x.sortIndex = z, n(c, x), t(s) === null && x === t(c) && (S ? (f(P), P = -1) : S = !0, gl(v, z - H))) : (x.sortIndex = X, n(s, x), w || g || (w = !0, yl(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return x.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ts);
ns.exports = ts;
var Tc = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs = Re, ve = Tc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ls = /* @__PURE__ */ new Set(), Rt = {};
function Rn(e, n) {
  qn(e, n), qn(e + "Capture", n);
}
function qn(e, n) {
  for (Rt[e] = n, e = 0; e < n.length; e++)
    ls.add(n[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yl = Object.prototype.hasOwnProperty, Lc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ui = {}, $i = {};
function Rc(e) {
  return Yl.call($i, e) ? !0 : Yl.call(Ui, e) ? !1 : Lc.test(e) ? $i[e] = !0 : (Ui[e] = !0, !1);
}
function Oc(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, n, t, r) {
  if (n === null || typeof n > "u" || Oc(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ue(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new ue(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Wo,
    Qo
  );
  b[n] = new ue(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Wo, Qo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Wo, Qo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ko(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Mc(n, t, l, r) && (t = null), r || l === null ? Rc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = rs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tr = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), Yo = Symbol.for("react.strict_mode"), Xl = Symbol.for("react.profiler"), os = Symbol.for("react.provider"), is = Symbol.for("react.context"), Xo = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Go = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), us = Symbol.for("react.offscreen"), Ai = Symbol.iterator;
function ct(e) {
  return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, kl;
function gt(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      kl = n && n[1] || "";
    }
  return `
` + kl + e;
}
var El = !1;
function xl(e, n) {
  if (!e || El)
    return "";
  El = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    El = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? gt(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt("Lazy");
    case 13:
      return gt("Suspense");
    case 19:
      return gt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case In:
      return "Fragment";
    case Dn:
      return "Portal";
    case Xl:
      return "Profiler";
    case Yo:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case is:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Xo:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Go:
        return n = e.displayName || null, n !== null ? n : Jl(e.type) || "Memo";
      case Je:
        n = e._payload, e = e._init;
        try {
          return Jl(e(n));
        } catch {
        }
    }
  return null;
}
function Ic(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(n);
    case 8:
      return n === Yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ss(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function jc(e) {
  var n = ss(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = jc(e));
}
function as(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = ss(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Rr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, n) {
  var t = n.checked;
  return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Vi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = dn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function cs(e, n) {
  n = n.checked, n != null && Ko(e, "checked", n, !1);
}
function bl(e, n) {
  cs(e, n);
  var t = dn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? eo(e, n.type, t) : n.hasOwnProperty("defaultValue") && eo(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Bi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function eo(e, n, t) {
  (n !== "number" || Rr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wt = Array.isArray;
function Kn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function no(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (wt(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: dn(t) };
}
function fs(e, n) {
  var t = dn(n.value), r = dn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Wi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var lr, ps = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = lr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function(e) {
  Fc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Et[n] = Et[e];
  });
});
function ms(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + n).trim() : n + "px";
}
function hs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = ms(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var Uc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ro(e, n) {
  if (n) {
    if (Uc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function lo(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oo = null;
function Zo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var io = null, Yn = null, Xn = null;
function Qi(e) {
  if (e = Jt(e)) {
    if (typeof io != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = il(n), io(e.stateNode, e.type, n));
  }
}
function vs(e) {
  Yn ? Xn ? Xn.push(e) : Xn = [e] : Yn = e;
}
function ys() {
  if (Yn) {
    var e = Yn, n = Xn;
    if (Xn = Yn = null, Qi(e), n)
      for (e = 0; e < n.length; e++)
        Qi(n[e]);
  }
}
function gs(e, n) {
  return e(n);
}
function ws() {
}
var Cl = !1;
function Ss(e, n, t) {
  if (Cl)
    return e(n, t);
  Cl = !0;
  try {
    return gs(e, n, t);
  } finally {
    Cl = !1, (Yn !== null || Xn !== null) && (ws(), ys());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = il(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var uo = !1;
if (Qe)
  try {
    var ft = {};
    Object.defineProperty(ft, "passive", { get: function() {
      uo = !0;
    } }), window.addEventListener("test", ft, ft), window.removeEventListener("test", ft, ft);
  } catch {
    uo = !1;
  }
function $c(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var xt = !1, Or = null, Mr = !1, so = null, Ac = { onError: function(e) {
  xt = !0, Or = e;
} };
function Vc(e, n, t, r, l, o, i, u, s) {
  xt = !1, Or = null, $c.apply(Ac, arguments);
}
function Bc(e, n, t, r, l, o, i, u, s) {
  if (Vc.apply(this, arguments), xt) {
    if (xt) {
      var c = Or;
      xt = !1, Or = null;
    } else
      throw Error(y(198));
    Mr || (Mr = !0, so = c);
  }
}
function On(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ks(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function Ki(e) {
  if (On(e) !== e)
    throw Error(y(188));
}
function Hc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = On(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t)
          return Ki(l), e;
        if (o === r)
          return Ki(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Es(e) {
  return e = Hc(e), e !== null ? xs(e) : null;
}
function xs(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = xs(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var Cs = ve.unstable_scheduleCallback, Yi = ve.unstable_cancelCallback, Wc = ve.unstable_shouldYield, Qc = ve.unstable_requestPaint, W = ve.unstable_now, Kc = ve.unstable_getCurrentPriorityLevel, Jo = ve.unstable_ImmediatePriority, _s = ve.unstable_UserBlockingPriority, Dr = ve.unstable_NormalPriority, Yc = ve.unstable_LowPriority, Ps = ve.unstable_IdlePriority, tl = null, Ue = null;
function Xc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Oe = Math.clz32 ? Math.clz32 : Jc, Gc = Math.log, Zc = Math.LN2;
function Jc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gc(e) / Zc | 0) | 0;
}
var or = 64, ir = 4194304;
function St(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = St(u) : (o &= i, o !== 0 && (r = St(o)));
  } else
    i = t & ~l, i !== 0 ? r = St(i) : o !== 0 && (r = St(o));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
    return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Oe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function qc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Oe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = qc(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function ao(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ns() {
  var e = or;
  return or <<= 1, !(or & 4194240) && (or = 64), e;
}
function _l(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function Gt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Oe(n), e[n] = t;
}
function ef(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function qo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function zs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ts, bo, Ls, Rs, Os, co = !1, ur = [], rn = null, ln = null, on = null, Dt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), be = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = Jt(n), n !== null && bo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function tf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return rn = dt(rn, e, n, t, r, l), !0;
    case "dragenter":
      return ln = dt(ln, e, n, t, r, l), !0;
    case "mouseover":
      return on = dt(on, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dt.set(o, dt(Dt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, It.set(o, dt(It.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ms(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = On(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = ks(t), n !== null) {
          e.blockedOn = n, Os(e.priority, function() {
            Ls(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = fo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      oo = r, t.target.dispatchEvent(r), oo = null;
    } else
      return n = Jt(t), n !== null && bo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Gi(e, n, t) {
  kr(e) && t.delete(n);
}
function rf() {
  co = !1, rn !== null && kr(rn) && (rn = null), ln !== null && kr(ln) && (ln = null), on !== null && kr(on) && (on = null), Dt.forEach(Gi), It.forEach(Gi);
}
function pt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, co || (co = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, rf)));
}
function jt(e) {
  function n(l) {
    return pt(l, e);
  }
  if (0 < ur.length) {
    pt(ur[0], e);
    for (var t = 1; t < ur.length; t++) {
      var r = ur[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && pt(rn, e), ln !== null && pt(ln, e), on !== null && pt(on, e), Dt.forEach(n), It.forEach(n), t = 0; t < be.length; t++)
    r = be[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (t = be[0], t.blockedOn === null); )
    Ms(t), t.blockedOn === null && be.shift();
}
var Gn = Ge.ReactCurrentBatchConfig, jr = !0;
function lf(e, n, t, r) {
  var l = O, o = Gn.transition;
  Gn.transition = null;
  try {
    O = 1, ei(e, n, t, r);
  } finally {
    O = l, Gn.transition = o;
  }
}
function of(e, n, t, r) {
  var l = O, o = Gn.transition;
  Gn.transition = null;
  try {
    O = 4, ei(e, n, t, r);
  } finally {
    O = l, Gn.transition = o;
  }
}
function ei(e, n, t, r) {
  if (jr) {
    var l = fo(e, n, t, r);
    if (l === null)
      Il(e, n, r, Fr, t), Xi(e, r);
    else if (tf(l, e, n, t, r))
      r.stopPropagation();
    else if (Xi(e, r), n & 4 && -1 < nf.indexOf(e)) {
      for (; l !== null; ) {
        var o = Jt(l);
        if (o !== null && Ts(o), o = fo(e, n, t, r), o === null && Il(e, n, r, Fr, t), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Il(e, n, r, null, t);
  }
}
var Fr = null;
function fo(e, n, t, r) {
  if (Fr = null, e = Zo(r), e = kn(e), e !== null)
    if (n = On(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = ks(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return Fr = e, null;
}
function Ds(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case Jo:
          return 1;
        case _s:
          return 4;
        case Dr:
        case Yc:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, ni = null, Er = null;
function Is() {
  if (Er)
    return Er;
  var e, n = ni, t = n.length, r, l = "value" in nn ? nn.value : nn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++)
    ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function xr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sr() {
  return !0;
}
function Zi() {
  return !1;
}
function ge(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? sr : Zi, this.isPropagationStopped = Zi, this;
  }
  return A(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = sr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = sr);
  }, persist: function() {
  }, isPersistent: sr }), n;
}
var it = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ti = ge(it), Zt = A({}, it, { view: 0, detail: 0 }), uf = ge(Zt), Pl, Nl, mt, rl = A({}, Zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ri, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mt && (mt && e.type === "mousemove" ? (Pl = e.screenX - mt.screenX, Nl = e.screenY - mt.screenY) : Nl = Pl = 0, mt = e), Pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Nl;
} }), Ji = ge(rl), sf = A({}, rl, { dataTransfer: 0 }), af = ge(sf), cf = A({}, Zt, { relatedTarget: 0 }), zl = ge(cf), ff = A({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), df = ge(ff), pf = A({}, it, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mf = ge(pf), hf = A({}, it, { data: 0 }), qi = ge(hf), vf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, yf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, gf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = gf[e]) ? !!n[e] : !1;
}
function ri() {
  return wf;
}
var Sf = A({}, Zt, { key: function(e) {
  if (e.key) {
    var n = vf[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ri, charCode: function(e) {
  return e.type === "keypress" ? xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kf = ge(Sf), Ef = A({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bi = ge(Ef), xf = A({}, Zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ri }), Cf = ge(xf), _f = A({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = ge(_f), Nf = A({}, rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zf = ge(Nf), Tf = [9, 13, 27, 32], li = Qe && "CompositionEvent" in window, Ct = null;
Qe && "documentMode" in document && (Ct = document.documentMode);
var Lf = Qe && "TextEvent" in window && !Ct, js = Qe && (!li || Ct && 8 < Ct && 11 >= Ct), eu = String.fromCharCode(32), nu = !1;
function Fs(e, n) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Rf(e, n) {
  switch (e) {
    case "compositionend":
      return Us(n);
    case "keypress":
      return n.which !== 32 ? null : (nu = !0, eu);
    case "textInput":
      return e = n.data, e === eu && nu ? null : e;
    default:
      return null;
  }
}
function Of(e, n) {
  if (jn)
    return e === "compositionend" || !li && Fs(e, n) ? (e = Is(), Er = ni = nn = null, jn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return js && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Mf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function tu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Mf[e.type] : n === "textarea";
}
function $s(e, n, t, r) {
  vs(r), n = Ur(n, "onChange"), 0 < n.length && (t = new ti("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var _t = null, Ft = null;
function Df(e) {
  Zs(e, 0);
}
function ll(e) {
  var n = $n(e);
  if (as(n))
    return e;
}
function If(e, n) {
  if (e === "change")
    return n;
}
var As = !1;
if (Qe) {
  var Tl;
  if (Qe) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var ru = document.createElement("div");
      ru.setAttribute("oninput", "return;"), Ll = typeof ru.oninput == "function";
    }
    Tl = Ll;
  } else
    Tl = !1;
  As = Tl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  _t && (_t.detachEvent("onpropertychange", Vs), Ft = _t = null);
}
function Vs(e) {
  if (e.propertyName === "value" && ll(Ft)) {
    var n = [];
    $s(n, Ft, e, Zo(e)), Ss(Df, n);
  }
}
function jf(e, n, t) {
  e === "focusin" ? (lu(), _t = n, Ft = t, _t.attachEvent("onpropertychange", Vs)) : e === "focusout" && lu();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Ft);
}
function Uf(e, n) {
  if (e === "click")
    return ll(n);
}
function $f(e, n) {
  if (e === "input" || e === "change")
    return ll(n);
}
function Af(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var De = typeof Object.is == "function" ? Object.is : Af;
function Ut(e, n) {
  if (De(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Yl.call(n, l) || !De(e[l], n[l]))
      return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function iu(e, n) {
  var t = ou(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ou(t);
  }
}
function Bs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Hs() {
  for (var e = window, n = Rr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = Rr(e.document);
  }
  return n;
}
function oi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Vf(e) {
  var n = Hs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Bs(t.ownerDocument.documentElement, t)) {
    if (r !== null && oi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = iu(t, o);
        var i = iu(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Bf = Qe && "documentMode" in document && 11 >= document.documentMode, Fn = null, po = null, Pt = null, mo = !1;
function uu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  mo || Fn == null || Fn !== Rr(r) || (r = Fn, "selectionStart" in r && oi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pt && Ut(Pt, r) || (Pt = r, r = Ur(po, "onSelect"), 0 < r.length && (n = new ti("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Fn)));
}
function ar(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Un = { animationend: ar("Animation", "AnimationEnd"), animationiteration: ar("Animation", "AnimationIteration"), animationstart: ar("Animation", "AnimationStart"), transitionend: ar("Transition", "TransitionEnd") }, Rl = {}, Ws = {};
Qe && (Ws = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
function ol(e) {
  if (Rl[e])
    return Rl[e];
  if (!Un[e])
    return e;
  var n = Un[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in Ws)
      return Rl[e] = n[t];
  return e;
}
var Qs = ol("animationend"), Ks = ol("animationiteration"), Ys = ol("animationstart"), Xs = ol("transitionend"), Gs = /* @__PURE__ */ new Map(), su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, n) {
  Gs.set(e, n), Rn(n, [e]);
}
for (var Ol = 0; Ol < su.length; Ol++) {
  var Ml = su[Ol], Hf = Ml.toLowerCase(), Wf = Ml[0].toUpperCase() + Ml.slice(1);
  mn(Hf, "on" + Wf);
}
mn(Qs, "onAnimationEnd");
mn(Ks, "onAnimationIteration");
mn(Ys, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Xs, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function au(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Bc(r, n, void 0, e), e.currentTarget = null;
}
function Zs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          au(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          au(l, u, c), o = s;
        }
    }
  }
  if (Mr)
    throw e = so, Mr = !1, so = null, e;
}
function D(e, n) {
  var t = n[wo];
  t === void 0 && (t = n[wo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (Js(n, e, 2, !1), t.add(r));
}
function Dl(e, n, t) {
  var r = 0;
  n && (r |= 4), Js(t, e, r, n);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function $t(e) {
  if (!e[cr]) {
    e[cr] = !0, ls.forEach(function(t) {
      t !== "selectionchange" && (Qf.has(t) || Dl(t, !1, e), Dl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[cr] || (n[cr] = !0, Dl("selectionchange", !1, n));
  }
}
function Js(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = ei;
  }
  t = l.bind(null, n, t, e), l = void 0, !uo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = kn(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Ss(function() {
    var c = o, h = Zo(t), m = [];
    e: {
      var p = Gs.get(e);
      if (p !== void 0) {
        var g = ti, w = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = kf;
            break;
          case "focusin":
            w = "focus", g = zl;
            break;
          case "focusout":
            w = "blur", g = zl;
            break;
          case "beforeblur":
          case "afterblur":
            g = zl;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cf;
            break;
          case Qs:
          case Ks:
          case Ys:
            g = df;
            break;
          case Xs:
            g = Pf;
            break;
          case "scroll":
            g = uf;
            break;
          case "wheel":
            g = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bi;
        }
        var S = (n & 4) !== 0, j = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Mt(a, f), v != null && S.push(At(a, v, d)))), j)
            break;
          a = a.return;
        }
        0 < S.length && (p = new g(p, w, null, t, h), m.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== oo && (w = t.relatedTarget || t.fromElement) && (kn(w) || w[Ke]))
          break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? kn(w) : null, w !== null && (j = On(w), w !== j || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (S = Ji, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = bi, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), j = g == null ? p : $n(g), d = w == null ? p : $n(w), p = new S(v, a + "leave", g, t, h), p.target = j, p.relatedTarget = d, v = null, kn(h) === c && (S = new S(f, a + "enter", w, t, h), S.target = d, S.relatedTarget = j, v = S), j = v, g && w)
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = Mn(d))
                a++;
              for (d = 0, v = f; v; v = Mn(v))
                d++;
              for (; 0 < a - d; )
                S = Mn(S), a--;
              for (; 0 < d - a; )
                f = Mn(f), d--;
              for (; a--; ) {
                if (S === f || f !== null && S === f.alternate)
                  break n;
                S = Mn(S), f = Mn(f);
              }
              S = null;
            }
          else
            S = null;
          g !== null && cu(m, p, g, S, !1), w !== null && j !== null && cu(m, j, w, S, !0);
        }
      }
      e: {
        if (p = c ? $n(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = If;
        else if (tu(p))
          if (As)
            E = $f;
          else {
            E = Ff;
            var C = jf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Uf);
        if (E && (E = E(e, c))) {
          $s(m, E, t, h);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && eo(p, "number", p.value);
      }
      switch (C = c ? $n(c) : window, e) {
        case "focusin":
          (tu(C) || C.contentEditable === "true") && (Fn = C, po = c, Pt = null);
          break;
        case "focusout":
          Pt = po = Fn = null;
          break;
        case "mousedown":
          mo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mo = !1, uu(m, t, h);
          break;
        case "selectionchange":
          if (Bf)
            break;
        case "keydown":
        case "keyup":
          uu(m, t, h);
      }
      var _;
      if (li)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        jn ? Fs(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (js && t.locale !== "ko" && (jn || P !== "onCompositionStart" ? P === "onCompositionEnd" && jn && (_ = Is()) : (nn = h, ni = "value" in nn ? nn.value : nn.textContent, jn = !0)), C = Ur(c, P), 0 < C.length && (P = new qi(P, e, null, t, h), m.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = Us(t), _ !== null && (P.data = _)))), (_ = Lf ? Rf(e, t) : Of(e, t)) && (c = Ur(c, "onBeforeInput"), 0 < c.length && (h = new qi("onBeforeInput", "beforeinput", null, t, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    Zs(m, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Mt(e, t), o != null && r.unshift(At(e, o, l)), o = Mt(e, n), o != null && r.push(At(e, o, l))), e = e.return;
  }
  return r;
}
function Mn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Mt(t, o), s != null && i.unshift(At(t, s, u))) : l || (s = Mt(t, o), s != null && i.push(At(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Kf = /\r\n?/g, Yf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Kf, `
`).replace(Yf, "");
}
function fr(e, n, t) {
  if (n = fu(n), fu(e) !== n && t)
    throw Error(y(425));
}
function $r() {
}
var ho = null, vo = null;
function yo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var go = typeof setTimeout == "function" ? setTimeout : void 0, Xf = typeof clearTimeout == "function" ? clearTimeout : void 0, du = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
  return du.resolve(null).then(e).catch(Zf);
} : go;
function Zf(e) {
  setTimeout(function() {
    throw e;
  });
}
function jl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), jt(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  jt(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ut = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + ut, Vt = "__reactProps$" + ut, Ke = "__reactContainer$" + ut, wo = "__reactEvents$" + ut, Jf = "__reactListeners$" + ut, qf = "__reactHandles$" + ut;
function kn(e) {
  var n = e[Fe];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Ke] || t[Fe]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = pu(e); e !== null; ) {
          if (t = e[Fe])
            return t;
          e = pu(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function Jt(e) {
  return e = e[Fe] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Vt] || null;
}
var So = [], An = -1;
function hn(e) {
  return { current: e };
}
function I(e) {
  0 > An || (e.current = So[An], So[An] = null, An--);
}
function M(e, n) {
  An++, So[An] = e.current, e.current = n;
}
var pn = {}, re = hn(pn), ce = hn(!1), Pn = pn;
function bn(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t)
    l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function fe(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  I(ce), I(re);
}
function mu(e, n, t) {
  if (re.current !== pn)
    throw Error(y(168));
  M(re, n), M(ce, t);
}
function qs(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, Ic(e) || "Unknown", l));
  return A({}, t, r);
}
function Vr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Pn = re.current, M(re, e), M(ce, ce.current), !0;
}
function hu(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = qs(e, n, Pn), r.__reactInternalMemoizedMergedChildContext = e, I(ce), I(re), M(re, e)) : I(ce), M(ce, t);
}
var Ve = null, ul = !1, Fl = !1;
function bs(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
function bf(e) {
  ul = !0, bs(e);
}
function vn() {
  if (!Fl && Ve !== null) {
    Fl = !0;
    var e = 0, n = O;
    try {
      var t = Ve;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ve = null, ul = !1;
    } catch (l) {
      throw Ve !== null && (Ve = Ve.slice(e + 1)), Cs(Jo, vn), l;
    } finally {
      O = n, Fl = !1;
    }
  }
  return null;
}
var Vn = [], Bn = 0, Br = null, Hr = 0, we = [], Se = 0, Nn = null, Be = 1, He = "";
function wn(e, n) {
  Vn[Bn++] = Hr, Vn[Bn++] = Br, Br = e, Hr = n;
}
function ea(e, n, t) {
  we[Se++] = Be, we[Se++] = He, we[Se++] = Nn, Nn = e;
  var r = Be;
  e = He;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Oe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Be = 1 << 32 - Oe(n) + l | t << l | r, He = o + e;
  } else
    Be = 1 << o | t << l | r, He = e;
}
function ii(e) {
  e.return !== null && (wn(e, 1), ea(e, 1, 0));
}
function ui(e) {
  for (; e === Br; )
    Br = Vn[--Bn], Vn[Bn] = null, Hr = Vn[--Bn], Vn[Bn] = null;
  for (; e === Nn; )
    Nn = we[--Se], we[Se] = null, He = we[--Se], we[Se] = null, Be = we[--Se], we[Se] = null;
}
var he = null, me = null, F = !1, Le = null;
function na(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function vu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, he = e, me = un(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, he = e, me = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Nn !== null ? { id: Be, overflow: He } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, he = e, me = null, !0) : !1;
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (F) {
    var n = me;
    if (n) {
      var t = n;
      if (!vu(e, n)) {
        if (ko(e))
          throw Error(y(418));
        n = un(t.nextSibling);
        var r = he;
        n && vu(e, n) ? na(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, he = e);
      }
    } else {
      if (ko(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, F = !1, he = e;
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  he = e;
}
function dr(e) {
  if (e !== he)
    return !1;
  if (!F)
    return yu(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps)), n && (n = me)) {
    if (ko(e))
      throw ta(), Error(y(418));
    for (; n; )
      na(e, n), n = un(n.nextSibling);
  }
  if (yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = un(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else
    me = he ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function ta() {
  for (var e = me; e; )
    e = un(e.nextSibling);
}
function et() {
  me = he = null, F = !1;
}
function si(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var ed = Ge.ReactCurrentBatchConfig;
function ze(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Wr = hn(null), Qr = null, Hn = null, ai = null;
function ci() {
  ai = Hn = Qr = null;
}
function fi(e) {
  var n = Wr.current;
  I(Wr), e._currentValue = n;
}
function xo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Zn(e, n) {
  Qr = e, ai = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ae = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (ai !== e)
    if (e = { context: e, memoizedValue: n, next: null }, Hn === null) {
      if (Qr === null)
        throw Error(y(308));
      Hn = e, Qr.dependencies = { lanes: 0, firstContext: e };
    } else
      Hn = Hn.next = e;
  return n;
}
var En = null;
function di(e) {
  En === null ? En = [e] : En.push(e);
}
function ra(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, di(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ye(e, r);
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function pi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function la(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ye(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, di(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ye(e, t);
}
function Cr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
function gu(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else
      l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, S = u;
          switch (p = n, g = t, S.tag) {
            case 1:
              if (w = S.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = S.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null)
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else
      o === null && (l.shared.lanes = 0);
    Tn |= i, e.lanes = i, e.memoizedState = m;
  }
}
function wu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var oa = new rs.Component().refs;
function Co(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = cn(e), o = We(r, l);
  o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = cn(e), o = We(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = cn(e), l = We(t, r);
  l.tag = 2, n != null && (l.callback = n), n = sn(e, l, r), n !== null && (Me(n, e, r, t), Cr(n, e, r));
} };
function Su(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Ut(t, r) || !Ut(l, o) : !0;
}
function ia(e, n, t) {
  var r = !1, l = pn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (l = fe(n) ? Pn : re.current, r = n.contextTypes, o = (r = r != null) ? bn(e, l) : pn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function ku(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function _o(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = oa, pi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ce(o) : (o = fe(n) ? Pn : re.current, l.context = bn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Co(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), Kr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        u === oa && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function pr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Eu(e) {
  var n = e._init;
  return n(e._payload);
}
function ua(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = fn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Wl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === In ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Eu(E) === a.type) ? (v = l(a, d.props), v.ref = ht(f, a, d), v.return = f, v) : (v = Lr(d.type, d.key, d.props, null, f.mode, v), v.ref = ht(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = _n(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Wl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case tr:
          return d = Lr(a.type, a.key, a.props, null, f.mode, d), d.ref = ht(f, null, a), d.return = f, d;
        case Dn:
          return a = Ql(a, f.mode, d), a.return = f, a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (wt(a) || ct(a))
        return a = _n(a, f.mode, d, null), a.return = f, a;
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dn:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (wt(d) || ct(d))
        return E !== null ? null : h(f, a, d, v, null);
      pr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case tr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Dn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Je:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (wt(v) || ct(v))
        return f = f.get(d) || null, h(a, f, v, E, null);
      pr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, C = null, _ = a, P = a = 0, B = null; _ !== null && P < d.length; P++) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var L = p(f, _, d[P], v);
      if (L === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && L.alternate === null && n(f, _), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L, _ = B;
    }
    if (P === d.length)
      return t(f, _), F && wn(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        _ = m(f, d[P], v), _ !== null && (a = o(_, a, P), C === null ? E = _ : C.sibling = _, C = _);
      return F && wn(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      B = g(_, f, P, d[P], v), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? P : B.key), a = o(B, a, P), C === null ? E = B : C.sibling = B, C = B);
    return e && _.forEach(function(Pe) {
      return n(f, Pe);
    }), F && wn(f, P), E;
  }
  function S(f, a, d, v) {
    var E = ct(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var C = E = null, _ = a, P = a = 0, B = null, L = d.next(); _ !== null && !L.done; P++, L = d.next()) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var Pe = p(f, _, L.value, v);
      if (Pe === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && Pe.alternate === null && n(f, _), a = o(Pe, a, P), C === null ? E = Pe : C.sibling = Pe, C = Pe, _ = B;
    }
    if (L.done)
      return t(
        f,
        _
      ), F && wn(f, P), E;
    if (_ === null) {
      for (; !L.done; P++, L = d.next())
        L = m(f, L.value, v), L !== null && (a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
      return F && wn(f, P), E;
    }
    for (_ = r(f, _); !L.done; P++, L = d.next())
      L = g(_, f, P, L.value, v), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? P : L.key), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
    return e && _.forEach(function(st) {
      return n(f, st);
    }), F && wn(f, P), E;
  }
  function j(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === In && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === In) {
                  if (C.tag === 7) {
                    t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Eu(E) === C.type) {
                  t(f, C.sibling), a = l(C, d.props), a.ref = ht(f, C, d), a.return = f, f = a;
                  break e;
                }
                t(f, C);
                break;
              } else
                n(f, C);
              C = C.sibling;
            }
            d.type === In ? (a = _n(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Lr(d.type, d.key, d.props, null, f.mode, v), v.ref = ht(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Dn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = Ql(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case Je:
          return C = d._init, j(f, a, C(d._payload), v);
      }
      if (wt(d))
        return w(f, a, d, v);
      if (ct(d))
        return S(f, a, d, v);
      pr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Wl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return j;
}
var nt = ua(!0), sa = ua(!1), qt = {}, $e = hn(qt), Bt = hn(qt), Ht = hn(qt);
function xn(e) {
  if (e === qt)
    throw Error(y(174));
  return e;
}
function mi(e, n) {
  switch (M(Ht, n), M(Bt, e), M($e, qt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : to(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = to(n, e);
  }
  I($e), M($e, n);
}
function tt() {
  I($e), I(Bt), I(Ht);
}
function aa(e) {
  xn(Ht.current);
  var n = xn($e.current), t = to(n, e.type);
  n !== t && (M(Bt, e), M($e, t));
}
function hi(e) {
  Bt.current === e && (I($e), I(Bt));
}
var U = hn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Ul = [];
function vi() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var _r = Ge.ReactCurrentDispatcher, $l = Ge.ReactCurrentBatchConfig, zn = 0, $ = null, K = null, G = null, Xr = !1, Nt = !1, Wt = 0, nd = 0;
function ee() {
  throw Error(y(321));
}
function yi(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!De(e[t], n[t]))
      return !1;
  return !0;
}
function gi(e, n, t, r, l, o) {
  if (zn = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _r.current = e === null || e.memoizedState === null ? od : id, e = t(r, l), Nt) {
    o = 0;
    do {
      if (Nt = !1, Wt = 0, 25 <= o)
        throw Error(y(301));
      o += 1, G = K = null, n.updateQueue = null, _r.current = ud, e = t(r, l);
    } while (Nt);
  }
  if (_r.current = Gr, n = K !== null && K.next !== null, zn = 0, G = K = $ = null, Xr = !1, n)
    throw Error(y(300));
  return e;
}
function wi() {
  var e = Wt !== 0;
  return Wt = 0, e;
}
function je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? $.memoizedState = G = e : G = G.next = e, G;
}
function _e() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var n = G === null ? $.memoizedState : G.next;
  if (n !== null)
    G = n, K = e;
  else {
    if (e === null)
      throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? $.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function Qt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Al(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((zn & h) === h)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, $.lanes |= h, Tn |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, De(r, n.memoizedState) || (ae = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, $.lanes |= o, Tn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    De(o, n.memoizedState) || (ae = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ca() {
}
function fa(e, n) {
  var t = $, r = _e(), l = n(), o = !De(r.memoizedState, l);
  if (o && (r.memoizedState = l, ae = !0), r = r.queue, Si(ma.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || G !== null && G.memoizedState.tag & 1) {
    if (t.flags |= 2048, Kt(9, pa.bind(null, t, r, l, n), void 0, null), Z === null)
      throw Error(y(349));
    zn & 30 || da(t, n, l);
  }
  return l;
}
function da(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function pa(e, n, t, r) {
  n.value = t, n.getSnapshot = r, ha(n) && va(e);
}
function ma(e, n, t) {
  return t(function() {
    ha(n) && va(e);
  });
}
function ha(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !De(e, t);
  } catch {
    return !0;
  }
}
function va(e) {
  var n = Ye(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function xu(e) {
  var n = je();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qt, lastRenderedState: e }, n.queue = e, e = e.dispatch = ld.bind(null, $, e), [n.memoizedState, e];
}
function Kt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ya() {
  return _e().memoizedState;
}
function Pr(e, n, t, r) {
  var l = je();
  $.flags |= e, l.memoizedState = Kt(1 | n, t, void 0, r === void 0 ? null : r);
}
function al(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (o = i.destroy, r !== null && yi(r, i.deps)) {
      l.memoizedState = Kt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Kt(1 | n, t, o, r);
}
function Cu(e, n) {
  return Pr(8390656, 8, e, n);
}
function Si(e, n) {
  return al(2048, 8, e, n);
}
function ga(e, n) {
  return al(4, 2, e, n);
}
function wa(e, n) {
  return al(4, 4, e, n);
}
function Sa(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function ka(e, n, t) {
  return t = t != null ? t.concat([e]) : null, al(4, 4, Sa.bind(null, n, e), t);
}
function ki() {
}
function Ea(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function xa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ca(e, n, t) {
  return zn & 21 ? (De(t, n) || (t = Ns(), $.lanes |= t, Tn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ae = !0), e.memoizedState = t);
}
function td(e, n) {
  var t = O;
  O = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    O = t, $l.transition = r;
  }
}
function _a() {
  return _e().memoizedState;
}
function rd(e, n, t) {
  var r = cn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Pa(e))
    Na(n, t);
  else if (t = ra(e, n, t, r), t !== null) {
    var l = oe();
    Me(t, e, r, l), za(t, n, r);
  }
}
function ld(e, n, t) {
  var r = cn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e))
    Na(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
      try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, di(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ra(e, n, l, r), t !== null && (l = oe(), Me(t, e, r, l), za(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function Na(e, n) {
  Nt = Xr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function za(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
var Gr = { readContext: Ce, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, od = { readContext: Ce, useCallback: function(e, n) {
  return je().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Cu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Pr(
    4194308,
    4,
    Sa.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Pr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Pr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = je();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = je();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = rd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = je();
  return e = { current: e }, n.memoizedState = e;
}, useState: xu, useDebugValue: ki, useDeferredValue: function(e) {
  return je().memoizedState = e;
}, useTransition: function() {
  var e = xu(!1), n = e[0];
  return e = td.bind(null, e[1]), je().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = je();
  if (F) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), Z === null)
      throw Error(y(349));
    zn & 30 || da(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Cu(ma.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Kt(9, pa.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = je(), n = Z.identifierPrefix;
  if (F) {
    var t = He, r = Be;
    t = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Wt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = nd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, id = {
  readContext: Ce,
  useCallback: Ea,
  useContext: Ce,
  useEffect: Si,
  useImperativeHandle: ka,
  useInsertionEffect: ga,
  useLayoutEffect: wa,
  useMemo: xa,
  useReducer: Al,
  useRef: ya,
  useState: function() {
    return Al(Qt);
  },
  useDebugValue: ki,
  useDeferredValue: function(e) {
    var n = _e();
    return Ca(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Al(Qt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: ca,
  useSyncExternalStore: fa,
  useId: _a,
  unstable_isNewReconciler: !1
}, ud = { readContext: Ce, useCallback: Ea, useContext: Ce, useEffect: Si, useImperativeHandle: ka, useInsertionEffect: ga, useLayoutEffect: wa, useMemo: xa, useReducer: Vl, useRef: ya, useState: function() {
  return Vl(Qt);
}, useDebugValue: ki, useDeferredValue: function(e) {
  var n = _e();
  return K === null ? n.memoizedState = e : Ca(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Vl(Qt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: ca, useSyncExternalStore: fa, useId: _a, unstable_isNewReconciler: !1 };
function rt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Dc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Po(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, n, t) {
  t = We(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    Jr || (Jr = !0, jo = r), Po(e, n);
  }, t;
}
function La(e, n, t) {
  t = We(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Po(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Po(e, n), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function _u(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Ed.bind(null, e, n, t), n.then(e, e));
}
function Pu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = We(-1, 1), n.tag = 2, sn(t, n, 1))), t.lanes |= 1), e);
}
var ad = Ge.ReactCurrentOwner, ae = !1;
function le(e, n, t, r) {
  n.child = e === null ? sa(n, null, t, r) : nt(n, e.child, t, r);
}
function zu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Zn(n, l), r = gi(e, n, t, r, o, l), t = wi(), e !== null && !ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && t && ii(n), n.flags |= 1, le(e, n, r, l), n.child);
}
function Tu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ti(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ra(e, n, o, r, l)) : (e = Lr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Ut, t(i, r) && e.ref === n.ref)
      return Xe(e, n, l);
  }
  return n.flags |= 1, e = fn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ut(o, r) && e.ref === n.ref)
      if (ae = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (ae = !0);
      else
        return n.lanes = e.lanes, Xe(e, n, l);
  }
  return No(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Qn, pe), pe |= t;
    else {
      if (!(t & 1073741824))
        return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, M(Qn, pe), pe |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, M(Qn, pe), pe |= r;
    }
  else
    o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, M(Qn, pe), pe |= r;
  return le(e, n, l, t), n.child;
}
function Ma(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function No(e, n, t, r, l) {
  var o = fe(t) ? Pn : re.current;
  return o = bn(n, o), Zn(n, l), t = gi(e, n, t, r, o, l), r = wi(), e !== null && !ae ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && r && ii(n), n.flags |= 1, le(e, n, t, l), n.child);
}
function Lu(e, n, t, r, l) {
  if (fe(t)) {
    var o = !0;
    Vr(n);
  } else
    o = !1;
  if (Zn(n, l), n.stateNode === null)
    Nr(e, n), ia(n, t, r), _o(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = fe(t) ? Pn : re.current, c = bn(n, c));
    var h = t.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && ku(n, i, r, c), qe = !1;
    var p = n.memoizedState;
    i.state = p, Kr(n, r, i, l), s = n.memoizedState, u !== r || p !== s || ce.current || qe ? (typeof h == "function" && (Co(n, t, h, r), s = n.memoizedState), (u = qe || Su(n, t, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, la(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : ze(n.type, u), i.props = c, m = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = fe(t) ? Pn : re.current, s = bn(n, s));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && ku(n, i, r, s), qe = !1, p = n.memoizedState, i.state = p, Kr(n, r, i, l);
    var w = n.memoizedState;
    u !== m || p !== w || ce.current || qe ? (typeof g == "function" && (Co(n, t, g, r), w = n.memoizedState), (c = qe || Su(n, t, c, r, p, w, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return zo(e, n, t, r, o, l);
}
function zo(e, n, t, r, l, o) {
  Ma(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i)
    return l && hu(n, t, !1), Xe(e, n, o);
  r = n.stateNode, ad.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = nt(n, e.child, null, o), n.child = nt(n, null, u, o)) : le(e, n, u, o), n.memoizedState = r.state, l && hu(n, t, !0), n.child;
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext ? mu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mu(e, n.context, !1), mi(e, n.containerInfo);
}
function Ru(e, n, t, r, l) {
  return et(), si(l), n.flags |= 256, le(e, n, t, r), n.child;
}
var To = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, l & 1), e === null)
    return Eo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = dl(i, r, 0, null), e = _n(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Lo(t), n.memoizedState = To, e) : Ei(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return cd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = fn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = fn(u, o) : (o = _n(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Lo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = To, r;
  }
  return o = e.child, e = o.sibling, r = fn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ei(e, n) {
  return n = dl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function mr(e, n, t, r) {
  return r !== null && si(r), nt(n, e.child, null, t), e = Ei(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function cd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Bl(Error(y(422))), mr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = dl({ mode: "visible", children: r.children }, l, 0, null), o = _n(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && nt(n, e.child, null, i), n.child.memoizedState = Lo(i), n.memoizedState = To, o);
  if (!(n.mode & 1))
    return mr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = Bl(o, r, void 0), mr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ae || u) {
    if (r = Z, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ye(e, l), Me(r, e, l, -1));
    }
    return zi(), r = Bl(Error(y(421))), mr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = xd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, me = un(l.nextSibling), he = n, F = !0, Le = null, e !== null && (we[Se++] = Be, we[Se++] = He, we[Se++] = Nn, Be = e.id, He = e.overflow, Nn = n), n = Ei(n, r.children), n.flags |= 4096, n);
}
function Ou(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xo(e.return, n, t);
}
function Hl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function ja(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (le(e, n, r.children, t), r = U.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ou(e, t, n);
          else if (e.tag === 19)
            Ou(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(U, r), !(n.mode & 1))
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && Yr(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Hl(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Yr(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Hl(n, !0, t, null, o);
        break;
      case "together":
        Hl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Xe(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Tn |= n.lanes, !(t & n.childLanes))
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = fn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function fd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), et();
      break;
    case 5:
      aa(n);
      break;
    case 1:
      fe(n.type) && Vr(n);
      break;
    case 4:
      mi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      M(Wr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Ia(e, n, t) : (M(U, U.current & 1), e = Xe(e, n, t), e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r)
          return ja(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Oa(e, n, t);
  }
  return Xe(e, n, t);
}
var Fa, Ro, Ua, $a;
Fa = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Ro = function() {
};
Ua = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, xn($e.current);
    var o = null;
    switch (t) {
      case "input":
        l = ql(e, l), r = ql(e, r), o = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = no(e, l), r = no(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
    }
    ro(t, r);
    var i;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Rt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
          } else
            t || (o || (o = []), o.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Rt.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
$a = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vt(e, n) {
  if (!F)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function dd(e, n, t) {
  var r = n.pendingProps;
  switch (ui(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(n), null;
    case 1:
      return fe(n.type) && Ar(), ne(n), null;
    case 3:
      return r = n.stateNode, tt(), I(ce), I(re), vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Le !== null && ($o(Le), Le = null))), Ro(e, n), ne(n), null;
    case 5:
      hi(n);
      var l = xn(Ht.current);
      if (t = n.type, e !== null && n.stateNode != null)
        Ua(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return ne(n), null;
        }
        if (e = xn($e.current), dr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Fe] = n, r[Vt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kt.length; l++)
                D(kt[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Vi(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              Hi(r, o), D("invalid", r);
          }
          ro(t, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && fr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Rt.hasOwnProperty(i) && u != null && i === "onScroll" && D("scroll", r);
            }
          switch (t) {
            case "input":
              rr(r), Bi(r, o, !0);
              break;
            case "textarea":
              rr(r), Wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ds(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Fe] = n, e[Vt] = r, Fa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = lo(t, r), t) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kt.length; l++)
                  D(kt[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Vi(e, r), l = ql(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Hi(e, r), l = no(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            ro(t, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? hs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ps(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ot(e, s) : typeof s == "number" && Ot(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Rt.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Ko(e, o, s, i));
              }
            switch (t) {
              case "input":
                rr(e), Bi(e, r, !1);
                break;
              case "textarea":
                rr(e), Wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Kn(e, !!r.multiple, o, !1) : r.defaultValue != null && Kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null)
        $a(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = xn(Ht.current), xn($e.current), dr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Fe] = n, (o = r.nodeValue !== t) && (e = he, e !== null))
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Fe] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (I(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && me !== null && n.mode & 1 && !(n.flags & 128))
          ta(), et(), n.flags |= 98560, o = !1;
        else if (o = dr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Fe] = n;
          } else
            et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ne(n), o = !1;
        } else
          Le !== null && ($o(Le), Le = null), o = !0;
        if (!o)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : zi())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return tt(), Ro(e, n), e === null && $t(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return fi(n.type._context), ne(n), null;
    case 17:
      return fe(n.type) && Ar(), ne(n), null;
    case 19:
      if (I(U), o = n.memoizedState, o === null)
        return ne(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          vt(o, !1);
        else {
          if (Y !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (i = Yr(e), i !== null) {
                for (n.flags |= 128, vt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return M(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null && W() > lt && (n.flags |= 128, r = !0, vt(o, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Yr(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), vt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !F)
              return ne(n), null;
          } else
            2 * W() - o.renderingStartTime > lt && t !== 1073741824 && (n.flags |= 128, r = !0, vt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = W(), n.sibling = null, t = U.current, M(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return Ni(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? pe & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function pd(e, n) {
  switch (ui(n), n.tag) {
    case 1:
      return fe(n.type) && Ar(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return tt(), I(ce), I(re), vi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return hi(n), null;
    case 13:
      if (I(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        et();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return I(U), null;
    case 4:
      return tt(), null;
    case 10:
      return fi(n.type._context), null;
    case 22:
    case 23:
      return Ni(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1, te = !1, md = typeof WeakSet == "function" ? WeakSet : Set, k = null;
function Wn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else
      t.current = null;
}
function Oo(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Mu = !1;
function hd(e, n) {
  if (ho = jr, e = Hs(), oi(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
          n:
            for (; ; ) {
              for (var g; m !== t || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
                p = m, m = g;
              for (; ; ) {
                if (m === e)
                  break n;
                if (p === t && ++c === l && (u = i), p === o && ++h === r && (s = i), (g = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = g;
            }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (vo = { focusedElem: e, selectionRange: t }, jr = !1, k = n; k !== null; )
    if (n = k, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, k = e;
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps, j = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? S : ze(n.type, S), j);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, k = e;
          break;
        }
        k = n.return;
      }
  return w = Mu, Mu = !1, w;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Oo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Mo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Aa(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Aa(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Fe], delete n[Vt], delete n[wo], delete n[Jf], delete n[qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Va(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Do(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Do(e, n, t), e = e.sibling; e !== null; )
      Do(e, n, t), e = e.sibling;
}
function Io(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Io(e, n, t), e = e.sibling; e !== null; )
      Io(e, n, t), e = e.sibling;
}
var J = null, Te = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; )
    Ba(e, n, t), t = t.sibling;
}
function Ba(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(tl, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      te || Wn(t, n);
    case 6:
      var r = J, l = Te;
      J = null, Ze(e, n, t), J = r, Te = l, J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? jl(e.parentNode, t) : e.nodeType === 1 && jl(e, t), jt(e)) : jl(J, t.stateNode));
      break;
    case 4:
      r = J, l = Te, J = t.stateNode.containerInfo, Te = !0, Ze(e, n, t), J = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Oo(t, n, i), l = l.next;
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (!te && (Wn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Ze(e, n, t), te = r) : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Iu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new md()), n.forEach(function(r) {
      var l = Cd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, i = n, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                J = u.stateNode, Te = !1;
                break e;
              case 3:
                J = u.stateNode.containerInfo, Te = !0;
                break e;
              case 4:
                J = u.stateNode.containerInfo, Te = !0;
                break e;
            }
            u = u.return;
          }
        if (J === null)
          throw Error(y(160));
        Ba(o, i, l), J = null, Te = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      Ha(n, e), n = n.sibling;
}
function Ha(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), Ie(e), r & 4) {
        try {
          zt(3, e, e.return), cl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Ne(n, e), Ie(e), r & 512 && t !== null && Wn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), Ie(e), r & 512 && t !== null && Wn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && cs(l, o), lo(u, i);
            var c = lo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? hs(l, m) : h === "dangerouslySetInnerHTML" ? ps(l, m) : h === "children" ? Ot(l, m) : Ko(l, h, m, c);
            }
            switch (u) {
              case "input":
                bl(l, o);
                break;
              case "textarea":
                fs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Kn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Kn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Kn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Vt] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if (Ne(n, e), Ie(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ne(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          jt(n.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      Ne(n, e), Ie(e);
      break;
    case 13:
      Ne(n, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (_i = W())), r & 4 && Iu(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || h, Ne(n, e), te = c) : Ne(n, e), Ie(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1)
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (p = k, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (S) {
                      V(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fu(m);
                    continue;
                  }
              }
              g !== null ? (g.return = p, k = g) : Fu(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ms("display", i));
                } catch (S) {
                  V(e, e.return, S);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (S) {
                  V(e, e.return, S);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Ne(n, e), Ie(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), Ie(e);
  }
}
function Ie(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Va(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), r.flags &= -33);
          var o = Du(e);
          Io(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Du(e);
          Do(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
  k = e, Wa(e);
}
function Wa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || hr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || te;
        u = hr;
        var c = te;
        if (hr = i, (te = s) && !c)
          for (k = l; k !== null; )
            i = k, s = i.child, i.tag === 22 && i.memoizedState !== null ? Uu(l) : s !== null ? (s.return = i, k = s) : Uu(l);
        for (; o !== null; )
          k = o, Wa(o), o = o.sibling;
        k = l, hr = u, te = c;
      }
      ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, k = o) : ju(e);
  }
}
function ju(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              te || cl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !te)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = n.updateQueue;
              o !== null && wu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                wu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && jt(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        te || n.flags & 512 && Mo(n);
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Fu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            cl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, k = u;
      break;
    }
    k = n.return;
  }
}
var yd = Math.ceil, Zr = Ge.ReactCurrentDispatcher, xi = Ge.ReactCurrentOwner, xe = Ge.ReactCurrentBatchConfig, R = 0, Z = null, Q = null, q = 0, pe = 0, Qn = hn(0), Y = 0, Yt = null, Tn = 0, fl = 0, Ci = 0, Tt = null, se = null, _i = 0, lt = 1 / 0, Ae = null, Jr = !1, jo = null, an = null, vr = !1, tn = null, qr = 0, Lt = 0, Fo = null, zr = -1, Tr = 0;
function oe() {
  return R & 6 ? W() : zr !== -1 ? zr : zr = W();
}
function cn(e) {
  return e.mode & 1 ? R & 2 && q !== 0 ? q & -q : ed.transition !== null ? (Tr === 0 && (Tr = Ns()), Tr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ds(e.type)), e) : 1;
}
function Me(e, n, t, r) {
  if (50 < Lt)
    throw Lt = 0, Fo = null, Error(y(185));
  Gt(e, t, r), (!(R & 2) || e !== Z) && (e === Z && (!(R & 2) && (fl |= t), Y === 4 && en(e, q)), de(e, r), t === 1 && R === 0 && !(n.mode & 1) && (lt = W() + 500, ul && vn()));
}
function de(e, n) {
  var t = e.callbackNode;
  bc(e, n);
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    t !== null && Yi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Yi(t), n === 1)
      e.tag === 0 ? bf($u.bind(null, e)) : bs($u.bind(null, e)), Gf(function() {
        !(R & 6) && vn();
      }), t = null;
    else {
      switch (zs(r)) {
        case 1:
          t = Jo;
          break;
        case 4:
          t = _s;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = Dr;
      }
      t = qa(t, Qa.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Qa(e, n) {
  if (zr = -1, Tr = 0, R & 6)
    throw Error(y(327));
  var t = e.callbackNode;
  if (Jn() && e.callbackNode !== t)
    return null;
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = br(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = Ya();
    (Z !== e || q !== n) && (Ae = null, lt = W() + 500, Cn(e, n));
    do
      try {
        Sd();
        break;
      } catch (u) {
        Ka(e, u);
      }
    while (1);
    ci(), Zr.current = o, R = l, Q !== null ? n = 0 : (Z = null, q = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = ao(e), l !== 0 && (r = l, n = Uo(e, l))), n === 1)
      throw t = Yt, Cn(e, 0), en(e, r), de(e, W()), t;
    if (n === 6)
      en(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !gd(l) && (n = br(e, r), n === 2 && (o = ao(e), o !== 0 && (r = o, n = Uo(e, o))), n === 1))
        throw t = Yt, Cn(e, 0), en(e, r), de(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, se, Ae);
          break;
        case 3:
          if (en(e, r), (r & 130023424) === r && (n = _i + 500 - W(), 10 < n)) {
            if (Ir(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = go(Sn.bind(null, e, se, Ae), n);
            break;
          }
          Sn(e, se, Ae);
          break;
        case 4:
          if (en(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = go(Sn.bind(null, e, se, Ae), r);
            break;
          }
          Sn(e, se, Ae);
          break;
        case 5:
          Sn(e, se, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return de(e, W()), e.callbackNode === t ? Qa.bind(null, e) : null;
}
function Uo(e, n) {
  var t = Tt;
  return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = br(e, n), e !== 2 && (n = se, se = t, n !== null && $o(n)), e;
}
function $o(e) {
  se === null ? se = e : se.push.apply(se, e);
}
function gd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function en(e, n) {
  for (n &= ~Ci, n &= ~fl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Oe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function $u(e) {
  if (R & 6)
    throw Error(y(327));
  Jn();
  var n = Ir(e, 0);
  if (!(n & 1))
    return de(e, W()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ao(e);
    r !== 0 && (n = r, t = Uo(e, r));
  }
  if (t === 1)
    throw t = Yt, Cn(e, 0), en(e, n), de(e, W()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Sn(e, se, Ae), de(e, W()), null;
}
function Pi(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (lt = W() + 500, ul && vn());
  }
}
function Ln(e) {
  tn !== null && tn.tag === 0 && !(R & 6) && Jn();
  var n = R;
  R |= 1;
  var t = xe.transition, r = O;
  try {
    if (xe.transition = null, O = 1, e)
      return e();
  } finally {
    O = r, xe.transition = t, R = n, !(R & 6) && vn();
  }
}
function Ni() {
  pe = Qn.current, I(Qn);
}
function Cn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Xf(t)), Q !== null)
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch (ui(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ar();
          break;
        case 3:
          tt(), I(ce), I(re), vi();
          break;
        case 5:
          hi(r);
          break;
        case 4:
          tt();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          fi(r.type._context);
          break;
        case 22:
        case 23:
          Ni();
      }
      t = t.return;
    }
  if (Z = e, Q = e = fn(e.current, null), q = pe = n, Y = 0, Yt = null, Ci = fl = Tn = 0, se = Tt = null, En !== null) {
    for (n = 0; n < En.length; n++)
      if (t = En[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        t.pending = r;
      }
    En = null;
  }
  return e;
}
function Ka(e, n) {
  do {
    var t = Q;
    try {
      if (ci(), _r.current = Gr, Xr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Xr = !1;
      }
      if (zn = 0, G = K = $ = null, Nt = !1, Wt = 0, xi.current = null, t === null || t.return === null) {
        Y = 1, Yt = n, Q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = q, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Pu(i);
          if (g !== null) {
            g.flags &= -257, Nu(g, i, u, o, n), g.mode & 1 && _u(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), n.updateQueue = S;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              _u(o, c, n), zi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && u.mode & 1) {
          var j = Pu(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Nu(j, i, u, o, n), si(rt(s, u));
            break e;
          }
        }
        o = s = rt(s, u), Y !== 4 && (Y = 2), Tt === null ? Tt = [o] : Tt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ta(o, s, n);
              gu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (an === null || !an.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = La(o, u, n);
                gu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ga(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Ya() {
  var e = Zr.current;
  return Zr.current = Gr, e === null ? Gr : e;
}
function zi() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Tn & 268435455) && !(fl & 268435455) || en(Z, q);
}
function br(e, n) {
  var t = R;
  R |= 2;
  var r = Ya();
  (Z !== e || q !== n) && (Ae = null, Cn(e, n));
  do
    try {
      wd();
      break;
    } catch (l) {
      Ka(e, l);
    }
  while (1);
  if (ci(), R = t, Zr.current = r, Q !== null)
    throw Error(y(261));
  return Z = null, q = 0, Y;
}
function wd() {
  for (; Q !== null; )
    Xa(Q);
}
function Sd() {
  for (; Q !== null && !Wc(); )
    Xa(Q);
}
function Xa(e) {
  var n = Ja(e.alternate, e, pe);
  e.memoizedProps = e.pendingProps, n === null ? Ga(e) : Q = n, xi.current = null;
}
function Ga(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = pd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = dd(t, n, pe), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function Sn(e, n, t) {
  var r = O, l = xe.transition;
  try {
    xe.transition = null, O = 1, kd(e, n, t, r);
  } finally {
    xe.transition = l, O = r;
  }
  return null;
}
function kd(e, n, t, r) {
  do
    Jn();
  while (tn !== null);
  if (R & 6)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (ef(e, o), e === Z && (Q = Z = null, q = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vr || (vr = !0, qa(Dr, function() {
    return Jn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = xe.transition, xe.transition = null;
    var i = O;
    O = 1;
    var u = R;
    R |= 4, xi.current = null, hd(e, t), Ha(t, e), Vf(vo), jr = !!ho, vo = ho = null, e.current = t, vd(t), Qc(), R = u, O = i, xe.transition = o;
  } else
    e.current = t;
  if (vr && (vr = !1, tn = e, qr = l), o = e.pendingLanes, o === 0 && (an = null), Xc(t.stateNode), de(e, W()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr)
    throw Jr = !1, e = jo, jo = null, e;
  return qr & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === Fo ? Lt++ : (Lt = 0, Fo = e) : Lt = 0, vn(), null;
}
function Jn() {
  if (tn !== null) {
    var e = zs(qr), n = xe.transition, t = O;
    try {
      if (xe.transition = null, O = 16 > e ? 16 : e, tn === null)
        var r = !1;
      else {
        if (e = tn, tn = null, qr = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k, i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, k = m;
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling, g = h.return;
                      if (Aa(h), h === c) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, k = p;
                        break;
                      }
                      k = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var j = S.sibling;
                    S.sibling = null, S = j;
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, k = i;
          else
            e:
              for (; k !== null; ) {
                if (o = k, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, k = f;
                  break e;
                }
                k = o.return;
              }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, k = d;
          else
            e:
              for (i = a; k !== null; ) {
                if (u = k, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cl(9, u);
                    }
                  } catch (E) {
                    V(u, u.return, E);
                  }
                if (u === i) {
                  k = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, k = v;
                  break e;
                }
                k = u.return;
              }
        }
        if (R = l, vn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(tl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      O = t, xe.transition = n;
    }
  }
  return !1;
}
function Au(e, n, t) {
  n = rt(t, n), n = Ta(e, n, 1), e = sn(e, n, 1), n = oe(), e !== null && (Gt(e, 1, n), de(e, n));
}
function V(e, n, t) {
  if (e.tag === 3)
    Au(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Au(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
          e = rt(t, e), e = La(n, e, 1), n = sn(n, e, 1), e = oe(), n !== null && (Gt(n, 1, e), de(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Ed(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, Z === e && (q & t) === t && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > W() - _i ? Cn(e, 0) : Ci |= t), de(e, n);
}
function Za(e, n) {
  n === 0 && (e.mode & 1 ? (n = ir, ir <<= 1, !(ir & 130023424) && (ir = 4194304)) : n = 1);
  var t = oe();
  e = Ye(e, n), e !== null && (Gt(e, n, t), de(e, t));
}
function xd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Za(e, t);
}
function Cd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Za(e, t);
}
var Ja;
Ja = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ce.current)
      ae = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128))
        return ae = !1, fd(e, n, t);
      ae = !!(e.flags & 131072);
    }
  else
    ae = !1, F && n.flags & 1048576 && ea(n, Hr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Nr(e, n), e = n.pendingProps;
      var l = bn(n, re.current);
      Zn(n, t), l = gi(null, n, r, e, l, t);
      var o = wi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, fe(r) ? (o = !0, Vr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, _o(n, r, e, t), n = zo(null, n, r, !0, o, t)) : (n.tag = 0, F && o && ii(n), le(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Nr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Pd(r), e = ze(r, e), l) {
          case 0:
            n = No(null, n, r, e, t);
            break e;
          case 1:
            n = Lu(null, n, r, e, t);
            break e;
          case 11:
            n = zu(null, n, r, e, t);
            break e;
          case 14:
            n = Tu(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), No(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Lu(e, n, r, l, t);
    case 3:
      e: {
        if (Da(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, la(e, n), Kr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = rt(Error(y(423)), n), n = Ru(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = rt(Error(y(424)), n), n = Ru(e, n, r, t, l);
            break e;
          } else
            for (me = un(n.stateNode.containerInfo.firstChild), he = n, F = !0, Le = null, t = sa(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (et(), r === l) {
            n = Xe(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return aa(n), e === null && Eo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, yo(r, l) ? i = null : o !== null && yo(r, o) && (n.flags |= 32), Ma(e, n), le(e, n, i, t), n.child;
    case 6:
      return e === null && Eo(n), null;
    case 13:
      return Ia(e, n, t);
    case 4:
      return mi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = nt(n, null, r, t) : le(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zu(e, n, r, l, t);
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, M(Wr, r._currentValue), r._currentValue = i, o !== null)
          if (De(o.value, i)) {
            if (o.children === l.children && !ce.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = We(-1, t & -t), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), xo(
                      o.return,
                      t,
                      n
                    ), u.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(y(341));
                i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), xo(i, t, n), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        le(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Zn(n, t), l = Ce(l), r = r(l), n.flags |= 1, le(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Tu(e, n, r, l, t);
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Nr(e, n), n.tag = 1, fe(r) ? (e = !0, Vr(n)) : e = !1, Zn(n, t), ia(n, r, l), _o(n, r, l, t), zo(null, n, r, !0, e, t);
    case 19:
      return ja(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function qa(e, n) {
  return Cs(e, n);
}
function _d(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new _d(e, n, t, r);
}
function Ti(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == "function")
    return Ti(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xo)
      return 11;
    if (e === Go)
      return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Lr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ti(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case In:
          return _n(t.children, l, o, n);
        case Yo:
          i = 8, l |= 8;
          break;
        case Xl:
          return e = Ee(12, t, n, l | 2), e.elementType = Xl, e.lanes = o, e;
        case Gl:
          return e = Ee(13, t, n, l), e.elementType = Gl, e.lanes = o, e;
        case Zl:
          return e = Ee(19, t, n, l), e.elementType = Zl, e.lanes = o, e;
        case us:
          return dl(t, l, o, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case os:
                i = 10;
                break e;
              case is:
                i = 9;
                break e;
              case Xo:
                i = 11;
                break e;
              case Go:
                i = 14;
                break e;
              case Je:
                i = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Ee(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function _n(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function dl(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = us, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Wl(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function Ql(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Nd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Li(e, n, t, r, l, o, i, u, s) {
  return e = new Nd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pi(o), e;
}
function zd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function ba(e) {
  if (!e)
    return pn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (fe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (fe(t))
      return qs(e, t, n);
  }
  return n;
}
function ec(e, n, t, r, l, o, i, u, s) {
  return e = Li(t, r, !0, e, l, o, i, u, s), e.context = ba(null), t = e.current, r = oe(), l = cn(t), o = We(r, l), o.callback = n ?? null, sn(t, o, l), e.current.lanes = l, Gt(e, l, r), de(e, r), e;
}
function pl(e, n, t, r) {
  var l = n.current, o = oe(), i = cn(l);
  return t = ba(t), n.context === null ? n.context = t : n.pendingContext = t, n = We(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = sn(l, n, i), e !== null && (Me(e, l, i, o), Cr(e, l, i)), i;
}
function el(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ri(e, n) {
  Vu(e, n), (e = e.alternate) && Vu(e, n);
}
function Td() {
  return null;
}
var nc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oi(e) {
  this._internalRoot = e;
}
ml.prototype.render = Oi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  pl(e, n, null, null);
};
ml.prototype.unmount = Oi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function() {
      pl(null, e, null, null);
    }), n[Ke] = null;
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++)
      ;
    be.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function hl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Bu() {
}
function Ld(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = el(i);
        o.call(c);
      };
    }
    var i = ec(n, r, e, 0, null, !1, !1, "", Bu);
    return e._reactRootContainer = i, e[Ke] = i.current, $t(e.nodeType === 8 ? e.parentNode : e), Ln(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Li(e, 0, !1, null, null, !1, !1, "", Bu);
  return e._reactRootContainer = s, e[Ke] = s.current, $t(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    pl(n, s, t, r);
  }), s;
}
function vl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = el(i);
        u.call(s);
      };
    }
    pl(n, i, e, l);
  } else
    i = Ld(t, n, e, l, r);
  return el(i);
}
Ts = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 && (qo(n, t | 1), de(n, W()), !(R & 6) && (lt = W() + 500, vn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Me(r, e, 1, l);
        }
      }), Ri(e, 1);
  }
};
bo = function(e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = oe();
      Me(n, e, 134217728, t);
    }
    Ri(e, 134217728);
  }
};
Ls = function(e) {
  if (e.tag === 13) {
    var n = cn(e), t = Ye(e, n);
    if (t !== null) {
      var r = oe();
      Me(t, e, n, r);
    }
    Ri(e, n);
  }
};
Rs = function() {
  return O;
};
Os = function(e, n) {
  var t = O;
  try {
    return O = e, n();
  } finally {
    O = t;
  }
};
io = function(e, n, t) {
  switch (n) {
    case "input":
      if (bl(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l)
              throw Error(y(90));
            as(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, t);
      break;
    case "select":
      n = t.value, n != null && Kn(e, !!t.multiple, n, !1);
  }
};
gs = Pi;
ws = Ln;
var Rd = { usingClientEntryPoint: !1, Events: [Jt, $n, il, vs, ys, Pi] }, yt = { findFiberByHostInstance: kn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Od = { bundleType: yt.bundleType, version: yt.version, rendererPackageName: yt.rendererPackageName, rendererConfig: yt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Es(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yt.findFiberByHostInstance || Td, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      tl = yr.inject(Od), Ue = yr;
    } catch {
    }
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ye.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(n))
    throw Error(y(200));
  return zd(e, n, null, t);
};
ye.createRoot = function(e, n) {
  if (!Mi(e))
    throw Error(y(299));
  var t = !1, r = "", l = nc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Li(e, 1, !1, null, null, t, !1, r, l), e[Ke] = n.current, $t(e.nodeType === 8 ? e.parentNode : e), new Oi(n);
};
ye.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Es(n), e = e === null ? null : e.stateNode, e;
};
ye.flushSync = function(e) {
  return Ln(e);
};
ye.hydrate = function(e, n, t) {
  if (!hl(n))
    throw Error(y(200));
  return vl(null, e, n, !0, t);
};
ye.hydrateRoot = function(e, n, t) {
  if (!Mi(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = nc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ec(n, null, e, 1, t ?? null, l, !1, o, i), e[Ke] = n.current, $t(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new ml(n);
};
ye.render = function(e, n, t) {
  if (!hl(n))
    throw Error(y(200));
  return vl(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function(e) {
  if (!hl(e))
    throw Error(y(40));
  return e._reactRootContainer ? (Ln(function() {
    vl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
ye.unstable_batchedUpdates = Pi;
ye.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!hl(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return vl(e, n, t, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function tc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), es.exports = ye;
var Md = es.exports, Hu = Md;
Kl.createRoot = Hu.createRoot, Kl.hydrateRoot = Hu.hydrateRoot;
const Dd = (e) => {
  var n;
  return (n = e.answers) == null ? void 0 : n.reduce((t, r) => t + r.count, 0);
};
function Id(e) {
  const n = Re.useMemo(
    () => e.totalCount ? Math.round(e.option.count / e.totalCount * 100) : 0,
    [e.totalCount, e.option.count]
  ), t = Re.useCallback(() => {
    e.disabled || e.onSelectOption(e.option);
  }, [e]);
  return /* @__PURE__ */ ke.jsxs(
    "div",
    {
      onClick: t,
      className: `answer ${e.isSelected ? "selected" : ""} ${e.disabled ? "disabled" : ""}`,
      children: [
        e.option.value,
        /* @__PURE__ */ ke.jsx(
          "span",
          {
            className: "percentage-bar",
            style: { width: `${n}%` }
          }
        ),
        /* @__PURE__ */ ke.jsxs("span", { className: "percentage-value", children: [
          n,
          "%"
        ] })
      ]
    }
  );
}
const rc = Re.createContext(null), jd = () => {
  const e = Re.useContext(rc);
  if (e === null)
    throw new Error(
      "ClientContextProvider must be used inside the <ClientContextProvider/>"
    );
  return e;
};
function Fd(e) {
  return /* @__PURE__ */ ke.jsx(rc.Provider, { value: e.value, children: e.children });
}
function Ud(e) {
  const [n, t] = Re.useState(void 0), [r, l] = Re.useState(null), { load: o, addAnswer: i } = jd();
  Re.useEffect(() => {
    o(e.config).then((c) => {
      t(c);
    });
  }, []);
  const u = Re.useCallback(
    async (c) => {
      l(c.value), await i(c, e.config);
      const h = await o(e.config);
      t(h);
    },
    [e.config, o, i]
  );
  if (!n)
    return null;
  const s = Dd(n);
  return /* @__PURE__ */ ke.jsxs("div", { className: "poll", children: [
    /* @__PURE__ */ ke.jsx("div", { className: "question", children: n == null ? void 0 : n.question }),
    /* @__PURE__ */ ke.jsx("div", { className: "answers", children: n.answers.map((c) => /* @__PURE__ */ ke.jsx(
      Id,
      {
        option: c,
        onSelectOption: u,
        totalCount: s ?? 0,
        isSelected: c.value === r,
        disabled: !!r
      },
      c.value
    )) })
  ] });
}
const $d = async (e, n) => {
  var r;
  const t = await lc(n);
  (r = t.answers) == null || r.forEach((l) => {
    l.value === e.value && (l.count += 1);
  }), Ad(t);
}, Ad = (e) => {
  const n = localStorage.getItem("poll-data");
  if (!n) {
    localStorage.setItem("poll-data", JSON.stringify([e]));
    return;
  }
  const t = JSON.parse(n), r = t.find((l) => l.question === e.question);
  r ? r.answers = e.answers : t.push(e), localStorage.setItem("poll-data", JSON.stringify(t));
}, lc = async (e) => {
  var o;
  const n = localStorage.getItem("poll-data"), t = {
    question: e.question,
    answers: (o = e.options) == null ? void 0 : o.map((i) => ({ count: 0, value: i }))
  };
  if (!n)
    return t;
  const l = JSON.parse(n).find((i) => i.question === e.question);
  return l || t;
}, Vd = {
  load: lc,
  addAnswer: $d
};
function Bd(e) {
  return /* @__PURE__ */ ke.jsx(Fd, { value: Vd, children: /* @__PURE__ */ ke.jsx(Ud, { config: e.config }) });
}
const Hd = `*{margin:0;padding:0;box-sizing:border-box;font-family:Roboto,sans-serif}:root{line-height:1.5;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.poll{position:absolute;bottom:10px;right:10px;width:100%;max-width:400px;background-color:#fff;border-radius:10px;box-shadow:0 0 20px 5px #231e801a;animation:Opacity 1s forwards ease-in}@media screen and (max-width: 600px){.poll{bottom:10px;right:0;max-width:100%}}@keyframes Opacity{0%{opacity:0}to{opacity:1}}.question{padding:20px;color:#111;font-size:18px;border-bottom:1px solid #eee}.answers{padding:20px 20px 10px}.submit-btn{border-radius:4px;border:none;background-color:#506ce5;color:#fff;width:100%;height:40px;text-decoration:none;cursor:pointer}.answer{position:relative;width:100%;height:40px;padding:0 10px;line-height:40px;color:#111;margin-bottom:10px;border:1px solid #d4d4d4;border-radius:10px;cursor:pointer;overflow:hidden}.answer.selected{border:2px solid #8f9fe8;font-weight:600}.answer.disabled{pointer-events:none}.percentage-value{position:absolute;top:50%;right:0;width:40px;transform:translateY(-50%);color:#111;font-size:15px}.percentage-bar{position:absolute;opacity:.4;top:0;left:0;width:50%;height:100%;background:#ccd8f1;transition:width .3s ease-in-out}
`;
let gr = [];
class Wd extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var u;
    const n = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(n);
    const t = document.createElement("style");
    t.innerHTML = Hd, (u = this.shadowRoot) == null || u.appendChild(t);
    const r = this.getAttribute("question") ?? "", l = this.querySelectorAll("x-option"), o = [];
    l.forEach((s) => {
      s.getAttribute("option") && o.push(s.getAttribute("option"));
    });
    const i = {
      question: r,
      options: o
    };
    if (gr) {
      if (gr.find((s) => s.question === r))
        return;
      gr.push(i);
    } else
      gr = [i];
    Kl.createRoot(n).render(
      /* @__PURE__ */ ke.jsx(Ec.StrictMode, { children: /* @__PURE__ */ ke.jsx(Bd, { config: i }) })
    );
  }
}
window.customElements.define("x-poll", Wd);
