/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [705], { 2360: (e, t, n) => { var i = { "./btnDeleteX2.js": 8547 };

            function a(e) { var t = r(e); return n(t) }

            function r(e) { if (!n.o(i, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return i[e] }
            a.keys = function() { return Object.keys(i) }, a.resolve = r, e.exports = a, a.id = 2360 }, 931: (e, t, n) => { var i = { "./flatpickr.js": 117 };

            function a(e) { var t = r(e); return n(t) }

            function r(e) { if (!n.o(i, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return i[e] }
            a.keys = function() { return Object.keys(i) }, a.resolve = r, e.exports = a, a.id = 931 }, 9669: (e, t, n) => { e.exports = n(1609) }, 5448: (e, t, n) => { "use strict"; var i = n(4867),
                a = n(6026),
                r = n(4372),
                o = n(5327),
                s = n(4097),
                l = n(4109),
                c = n(7985),
                u = n(5061);
            e.exports = function(e) { return new Promise((function(t, n) { var d = e.data,
                        p = e.headers;
                    i.isFormData(d) && delete p["Content-Type"]; var h = new XMLHttpRequest; if (e.auth) { var f = e.auth.username || "",
                            m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        p.Authorization = "Basic " + btoa(f + ":" + m) } var g = s(e.baseURL, e.url); if (h.open(e.method.toUpperCase(), o(g, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function() { if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) { var i = "getAllResponseHeaders" in h ? l(h.getAllResponseHeaders()) : null,
                                    r = { data: e.responseType && "text" !== e.responseType ? h.response : h.responseText, status: h.status, statusText: h.statusText, headers: i, config: e, request: h };
                                a(t, n, r), h = null } }, h.onabort = function() { h && (n(u("Request aborted", e, "ECONNABORTED", h)), h = null) }, h.onerror = function() { n(u("Network Error", e, null, h)), h = null }, h.ontimeout = function() { var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(u(t, e, "ECONNABORTED", h)), h = null }, i.isStandardBrowserEnv()) { var v = (e.withCredentials || c(g)) && e.xsrfCookieName ? r.read(e.xsrfCookieName) : void 0;
                        v && (p[e.xsrfHeaderName] = v) } if ("setRequestHeader" in h && i.forEach(p, (function(e, t) { void 0 === d && "content-type" === t.toLowerCase() ? delete p[t] : h.setRequestHeader(t, e) })), i.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) try { h.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                    "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { h && (h.abort(), n(e), h = null) })), d || (d = null), h.send(d) })) } }, 1609: (e, t, n) => { "use strict"; var i = n(4867),
                a = n(1849),
                r = n(321),
                o = n(7185);

            function s(e) { var t = new r(e),
                    n = a(r.prototype.request, t); return i.extend(n, r.prototype, t), i.extend(n, t), n } var l = s(n(5655));
            l.Axios = r, l.create = function(e) { return s(o(l.defaults, e)) }, l.Cancel = n(5263), l.CancelToken = n(4972), l.isCancel = n(6502), l.all = function(e) { return Promise.all(e) }, l.spread = n(8713), l.isAxiosError = n(6268), e.exports = l, e.exports.default = l }, 5263: e => { "use strict";

            function t(e) { this.message = e }
            t.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, t.prototype.__CANCEL__ = !0, e.exports = t }, 4972: (e, t, n) => { "use strict"; var i = n(5263);

            function a(e) { if ("function" != typeof e) throw new TypeError("executor must be a function."); var t;
                this.promise = new Promise((function(e) { t = e })); var n = this;
                e((function(e) { n.reason || (n.reason = new i(e), t(n.reason)) })) }
            a.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, a.source = function() { var e; return { token: new a((function(t) { e = t })), cancel: e } }, e.exports = a }, 6502: e => { "use strict";
            e.exports = function(e) { return !(!e || !e.__CANCEL__) } }, 321: (e, t, n) => { "use strict"; var i = n(4867),
                a = n(5327),
                r = n(782),
                o = n(3572),
                s = n(7185);

            function l(e) { this.defaults = e, this.interceptors = { request: new r, response: new r } }
            l.prototype.request = function(e) { "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get"; var t = [o, void 0],
                    n = Promise.resolve(e); for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift()); return n }, l.prototype.getUri = function(e) { return e = s(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, i.forEach(["delete", "get", "head", "options"], (function(e) { l.prototype[e] = function(t, n) { return this.request(s(n || {}, { method: e, url: t, data: (n || {}).data })) } })), i.forEach(["post", "put", "patch"], (function(e) { l.prototype[e] = function(t, n, i) { return this.request(s(i || {}, { method: e, url: t, data: n })) } })), e.exports = l }, 782: (e, t, n) => { "use strict"; var i = n(4867);

            function a() { this.handlers = [] }
            a.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, a.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, a.prototype.forEach = function(e) { i.forEach(this.handlers, (function(t) { null !== t && e(t) })) }, e.exports = a }, 4097: (e, t, n) => { "use strict"; var i = n(1793),
                a = n(7303);
            e.exports = function(e, t) { return e && !i(t) ? a(e, t) : t } }, 5061: (e, t, n) => { "use strict"; var i = n(481);
            e.exports = function(e, t, n, a, r) { var o = new Error(e); return i(o, t, n, a, r) } }, 3572: (e, t, n) => { "use strict"; var i = n(4867),
                a = n(6205),
                r = n(6502),
                o = n(5655);

            function s(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
            e.exports = function(e) { return s(e), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || o.adapter)(e).then((function(t) { return s(e), t.data = a(t.data, t.headers, e.transformResponse), t }), (function(t) { return r(t) || (s(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) } }, 481: e => { "use strict";
            e.exports = function(e, t, n, i, a) { return e.config = t, n && (e.code = n), e.request = i, e.response = a, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e } }, 7185: (e, t, n) => { "use strict"; var i = n(4867);
            e.exports = function(e, t) { t = t || {}; var n = {},
                    a = ["url", "method", "data"],
                    r = ["headers", "auth", "proxy", "params"],
                    o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    s = ["validateStatus"];

                function l(e, t) { return i.isPlainObject(e) && i.isPlainObject(t) ? i.merge(e, t) : i.isPlainObject(t) ? i.merge({}, t) : i.isArray(t) ? t.slice() : t }

                function c(a) { i.isUndefined(t[a]) ? i.isUndefined(e[a]) || (n[a] = l(void 0, e[a])) : n[a] = l(e[a], t[a]) }
                i.forEach(a, (function(e) { i.isUndefined(t[e]) || (n[e] = l(void 0, t[e])) })), i.forEach(r, c), i.forEach(o, (function(a) { i.isUndefined(t[a]) ? i.isUndefined(e[a]) || (n[a] = l(void 0, e[a])) : n[a] = l(void 0, t[a]) })), i.forEach(s, (function(i) { i in t ? n[i] = l(e[i], t[i]) : i in e && (n[i] = l(void 0, e[i])) })); var u = a.concat(r).concat(o).concat(s),
                    d = Object.keys(e).concat(Object.keys(t)).filter((function(e) { return -1 === u.indexOf(e) })); return i.forEach(d, c), n } }, 6026: (e, t, n) => { "use strict"; var i = n(5061);
            e.exports = function(e, t, n) { var a = n.config.validateStatus;
                n.status && a && !a(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n) } }, 6205: (e, t, n) => { "use strict"; var i = n(4867);
            e.exports = function(e, t, n) { return i.forEach(n, (function(n) { e = n(e, t) })), e } }, 5655: (e, t, n) => { "use strict"; var i = n(4155),
                a = n(4867),
                r = n(6016),
                o = { "Content-Type": "application/x-www-form-urlencoded" };

            function s(e, t) {!a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var l, c = { adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== i && "[object process]" === Object.prototype.toString.call(i)) && (l = n(5448)), l), transformRequest: [function(e, t) { return r(t, "Accept"), r(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                    return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 } };
            c.headers = { common: { Accept: "application/json, text/plain, */*" } }, a.forEach(["delete", "get", "head"], (function(e) { c.headers[e] = {} })), a.forEach(["post", "put", "patch"], (function(e) { c.headers[e] = a.merge(o) })), e.exports = c }, 1849: e => { "use strict";
            e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i]; return e.apply(t, n) } } }, 5327: (e, t, n) => { "use strict"; var i = n(4867);

            function a(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
            e.exports = function(e, t, n) { if (!t) return e; var r; if (n) r = n(t);
                else if (i.isURLSearchParams(t)) r = t.toString();
                else { var o = [];
                    i.forEach(t, (function(e, t) { null != e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, (function(e) { i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), o.push(a(t) + "=" + a(e)) }))) })), r = o.join("&") } if (r) { var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + r } return e } }, 7303: e => { "use strict";
            e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e } }, 4372: (e, t, n) => { "use strict"; var i = n(4867);
            e.exports = i.isStandardBrowserEnv() ? { write: function(e, t, n, a, r, o) { var s = [];
                    s.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), i.isString(a) && s.push("path=" + a), i.isString(r) && s.push("domain=" + r), !0 === o && s.push("secure"), document.cookie = s.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} } }, 1793: e => { "use strict";
            e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) } }, 6268: e => { "use strict";
            e.exports = function(e) { return "object" == typeof e && !0 === e.isAxiosError } }, 7985: (e, t, n) => { "use strict"; var i = n(4867);
            e.exports = i.isStandardBrowserEnv() ? function() { var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function a(e) { var i = e; return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return e = a(window.location.href),
                    function(t) { var n = i.isString(t) ? a(t) : t; return n.protocol === e.protocol && n.host === e.host } }() : function() { return !0 } }, 6016: (e, t, n) => { "use strict"; var i = n(4867);
            e.exports = function(e, t) { i.forEach(e, (function(n, i) { i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i]) })) } }, 4109: (e, t, n) => { "use strict"; var i = n(4867),
                a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) { var t, n, r, o = {}; return e ? (i.forEach(e.split("\n"), (function(e) { if (r = e.indexOf(":"), t = i.trim(e.substr(0, r)).toLowerCase(), n = i.trim(e.substr(r + 1)), t) { if (o[t] && a.indexOf(t) >= 0) return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n } })), o) : o } }, 8713: e => { "use strict";
            e.exports = function(e) { return function(t) { return e.apply(null, t) } } }, 4867: (e, t, n) => { "use strict"; var i = n(1849),
                a = Object.prototype.toString;

            function r(e) { return "[object Array]" === a.call(e) }

            function o(e) { return void 0 === e }

            function s(e) { return null !== e && "object" == typeof e }

            function l(e) { if ("[object Object]" !== a.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

            function c(e) { return "[object Function]" === a.call(e) }

            function u(e, t) { if (null != e)
                    if ("object" != typeof e && (e = [e]), r(e))
                        for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                    else
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e) }
            e.exports = { isArray: r, isArrayBuffer: function(e) { return "[object ArrayBuffer]" === a.call(e) }, isBuffer: function(e) { return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }, isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData }, isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }, isString: function(e) { return "string" == typeof e }, isNumber: function(e) { return "number" == typeof e }, isObject: s, isPlainObject: l, isUndefined: o, isDate: function(e) { return "[object Date]" === a.call(e) }, isFile: function(e) { return "[object File]" === a.call(e) }, isBlob: function(e) { return "[object Blob]" === a.call(e) }, isFunction: c, isStream: function(e) { return s(e) && c(e.pipe) }, isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }, forEach: u, merge: function e() { var t = {};

                    function n(n, i) { l(t[i]) && l(n) ? t[i] = e(t[i], n) : l(n) ? t[i] = e({}, n) : r(n) ? t[i] = n.slice() : t[i] = n } for (var i = 0, a = arguments.length; i < a; i++) u(arguments[i], n); return t }, extend: function(e, t, n) { return u(t, (function(t, a) { e[a] = n && "function" == typeof t ? i(t, n) : t })), e }, trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }, stripBOM: function(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e } } }, 1459: (e, t, n) => { n(5050);
            n(2360)("./btnDeleteX2.js"), n(931)("./flatpickr.js") }, 5050: (e, t, n) => { n(9755); var i = n(9755);
            window._ = n(6486); try { window.Popper = n(8981).default, window.$ = n(9755), n(3734), n(300), window.objectFitImages = n(6797), n(1812), n(7729), n(5660);
                window.Swiper = n(4612);
                n(9365), window.Dropzone = n(2025), window.SmoothScroll = n(3002);
                window.Swal = n(6455), window.flatpickr = i.flatpickr = n(8527), n(9088).default.it;
                n(1752), n(686) } catch (e) { console.log(e) }
            window.axios = n(9669), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; var a = document.head.querySelector('meta[name="csrf-token"]');
            a ? window.axios.defaults.headers.common["X-CSRF-TOKEN"] = a.content : console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token") }, 8547: (e, t, n) => { var i = n(9755),
                a = n(6455);
            ({ linkSelector: ".btn-confirm-delete", modalTitle: "Are you sure?", modalMessage: "You will not be able to recover this entry?", modalConfirmButtonText: "Yes, delete it!", laravelToken: null, url: "/", init: function() { i(this.linkSelector).on("click", { self: this }, this.handleClick) }, handleClick: function(e) { e.preventDefault(); var t = e.data.self,
                        n = i(this);
                    t.modalTitle = n.data("title") || t.modalTitle, t.modalMessage = n.data("message") || t.modalMessage, t.modalMessage = t.modalMessage + "[" + n.data("id") + "]", t.modalConfirmButtonText = n.data("button-text") || t.modalConfirmButtonText, t.url = n.data("href"), t.laravelToken = i("meta[name=csrf-token]").attr("content"), t.confirmDelete() }, confirmDelete: function() { a.fire({ title: this.modalTitle, text: this.modalMessage, type: "warning", showCancelButton: !0, confirmButtonColor: "#DD6B55", confirmButtonText: this.modalConfirmButtonText }).then(function(e) { e.value && this.makeDeleteRequest() }.bind(this)) }, makeDeleteRequest: function() { i.ajax({ url: this.url, type: "DELETE", data: { _method: "delete", _token: this.laravelToken }, success: function(e) { console.log(e), a.fire("Deleted!", "Your imaginary file has been deleted.", "success") }, error: function(e, t, n) { console.log("url : " + this.url), console.log("XMLHttpRequest"), console.log(e), i("#div_debug").html(e.responseText), console.log("textStatus"), console.log(t), console.log("errorThrown"), console.log(n), alert("Status: " + t), alert("Error: " + n) } }) }, makeDeleteRequest1: function() { var e = i("<form>", { method: "POST", action: this.url }),
                        t = i("<input>", { type: "hidden", name: "_token", value: this.laravelToken }),
                        n = i("<input>", { name: "_method", type: "hidden", value: "DELETE" }); return e.append(t, n).appendTo("body").submit() } }).init() }, 117: (e, t, n) => { var i = n(9755);
            i(".datetime_flatpickr").flatpickr({ wrap: !0, locale: "it", dateFormat: "d/m/Y H:i", enableTime: !0, time_24hr: !0 }), i(".date_flatpickr").flatpickr({ wrap: !0, locale: "it", dateFormat: "d/m/Y", time_24hr: !0 }), i(".time_flatpickr").flatpickr({ wrap: !0, locale: "it", dateFormat: "H:i", noCalendar: !0, enableTime: !0, time_24hr: !0 }) }, 300: function(e, t, n) { var i, a;
            void 0 === this && void 0 !== window && window, i = [n(9755)], void 0 === (a = function(e) {! function(e) { "use strict"; var t = ["sanitize", "whiteList", "sanitizeFn"],
                        n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        i = { "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
                        a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        r = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

                    function o(t, i) { var o = t.nodeName.toLowerCase(); if (-1 !== e.inArray(o, i)) return -1 === e.inArray(o, n) || Boolean(t.nodeValue.match(a) || t.nodeValue.match(r)); for (var s = e(i).filter((function(e, t) { return t instanceof RegExp })), l = 0, c = s.length; l < c; l++)
                            if (o.match(s[l])) return !0;
                        return !1 }

                    function s(e, t, n) { if (n && "function" == typeof n) return n(e); for (var i = Object.keys(t), a = 0, r = e.length; a < r; a++)
                            for (var s = e[a].querySelectorAll("*"), l = 0, c = s.length; l < c; l++) { var u = s[l],
                                    d = u.nodeName.toLowerCase(); if (-1 !== i.indexOf(d))
                                    for (var p = [].slice.call(u.attributes), h = [].concat(t["*"] || [], t[d] || []), f = 0, m = p.length; f < m; f++) { var g = p[f];
                                        o(g, h) || u.removeAttribute(g.nodeName) } else u.parentNode.removeChild(u) } } "classList" in document.createElement("_") || function(t) { if ("Element" in t) { var n = "classList",
                                i = "prototype",
                                a = t.Element[i],
                                r = Object,
                                o = function() { var t = e(this); return { add: function(e) { return e = Array.prototype.slice.call(arguments).join(" "), t.addClass(e) }, remove: function(e) { return e = Array.prototype.slice.call(arguments).join(" "), t.removeClass(e) }, toggle: function(e, n) { return t.toggleClass(e, n) }, contains: function(e) { return t.hasClass(e) } } }; if (r.defineProperty) { var s = { get: o, enumerable: !0, configurable: !0 }; try { r.defineProperty(a, n, s) } catch (e) { void 0 !== e.number && -2146823252 !== e.number || (s.enumerable = !1, r.defineProperty(a, n, s)) } } else r[i].__defineGetter__ && a.__defineGetter__(n, o) } }(window); var l, c, u, d = document.createElement("_"); if (d.classList.add("c1", "c2"), !d.classList.contains("c2")) { var p = DOMTokenList.prototype.add,
                            h = DOMTokenList.prototype.remove;
                        DOMTokenList.prototype.add = function() { Array.prototype.forEach.call(arguments, p.bind(this)) }, DOMTokenList.prototype.remove = function() { Array.prototype.forEach.call(arguments, h.bind(this)) } } if (d.classList.toggle("c3", !1), d.classList.contains("c3")) { var f = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function(e, t) { return 1 in arguments && !this.contains(e) == !t ? t : f.call(this, e) } }

                    function m(e, t) { return e.length === t.length && e.every((function(e, n) { return e === t[n] })) }

                    function g(e, t) { var n, i = e.selectedOptions,
                            a = []; if (t) { for (var r = 0, o = i.length; r < o; r++)(n = i[r]).disabled || "OPTGROUP" === n.parentNode.tagName && n.parentNode.disabled || a.push(n); return a } return i }

                    function v(e, t) { for (var n, i = [], a = t || e.selectedOptions, r = 0, o = a.length; r < o; r++)(n = a[r]).disabled || "OPTGROUP" === n.parentNode.tagName && n.parentNode.disabled || i.push(n.value); return e.multiple ? i : i.length ? i[0] : null }
                    d = null, String.prototype.startsWith || (l = function() { try { var e = {},
                                t = Object.defineProperty,
                                n = t(e, e, e) && t } catch (e) {} return n }(), c = {}.toString, u = function(e) { if (null == this) throw new TypeError; var t = String(this); if (e && "[object RegExp]" == c.call(e)) throw new TypeError; var n = t.length,
                            i = String(e),
                            a = i.length,
                            r = arguments.length > 1 ? arguments[1] : void 0,
                            o = r ? Number(r) : 0;
                        o != o && (o = 0); var s = Math.min(Math.max(o, 0), n); if (a + s > n) return !1; for (var l = -1; ++l < a;)
                            if (t.charCodeAt(s + l) != i.charCodeAt(l)) return !1;
                        return !0 }, l ? l(String.prototype, "startsWith", { value: u, configurable: !0, writable: !0 }) : String.prototype.startsWith = u), Object.keys || (Object.keys = function(e, t, n) { for (t in n = [], e) n.hasOwnProperty.call(e, t) && n.push(t); return n }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", { get: function() { return this.querySelectorAll(":checked") } }); var w = { useDefault: !1, _set: e.valHooks.select.set };
                    e.valHooks.select.set = function(t, n) { return n && !w.useDefault && e(t).data("selected", !0), w._set.apply(this, arguments) }; var y = null,
                        b = function() { try { return new Event("change"), !0 } catch (e) { return !1 } }();

                    function x(e, t, n, i) { for (var a = ["display", "subtext", "tokens"], r = !1, o = 0; o < a.length; o++) { var s = a[o],
                                l = e[s]; if (l && (l = l.toString(), "display" === s && (l = l.replace(/<[^>]+>/g, "")), i && (l = M(l)), l = l.toUpperCase(), r = "contains" === n ? l.indexOf(t) >= 0 : l.startsWith(t))) break } return r }

                    function C(e) { return parseInt(e, 10) || 0 }
                    e.fn.triggerNative = function(e) { var t, n = this[0];
                        n.dispatchEvent ? (b ? t = new Event(e, { bubbles: !0 }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), n.dispatchEvent(t)) : n.fireEvent ? ((t = document.createEventObject()).eventType = e, n.fireEvent("on" + e, t)) : this.trigger(e) }; var E = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" },
                        k = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        S = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

                    function T(e) { return E[e] }

                    function M(e) { return (e = e.toString()) && e.replace(k, T).replace(S, "") } var A, D, I, O, P, $ = (A = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, D = function(e) { return A[e] }, I = "(?:" + Object.keys(A).join("|") + ")", O = RegExp(I), P = RegExp(I, "g"), function(e) { return e = null == e ? "" : "" + e, O.test(e) ? e.replace(P, D) : e }),
                        L = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" },
                        z = { ESCAPE: 27, ENTER: 13, SPACE: 32, TAB: 9, ARROW_UP: 38, ARROW_DOWN: 40 },
                        _ = { success: !1, major: "3" }; try { _.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), _.major = _.full[0], _.success = !0 } catch (e) {} var N = 0,
                        F = ".bs.select",
                        H = { DISABLED: "disabled", DIVIDER: "divider", SHOW: "open", DROPUP: "dropup", MENU: "dropdown-menu", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", BUTTONCLASS: "btn-default", POPOVERHEADER: "popover-title", ICONBASE: "glyphicon", TICKICON: "glyphicon-ok" },
                        j = { MENU: "." + H.MENU },
                        R = { div: document.createElement("div"), span: document.createElement("span"), i: document.createElement("i"), subtext: document.createElement("small"), a: document.createElement("a"), li: document.createElement("li"), whitespace: document.createTextNode(" "), fragment: document.createDocumentFragment() };
                    R.noResults = R.li.cloneNode(!1), R.noResults.className = "no-results", R.a.setAttribute("role", "option"), R.a.className = "dropdown-item", R.subtext.className = "text-muted", R.text = R.span.cloneNode(!1), R.text.className = "text", R.checkMark = R.span.cloneNode(!1); var B = new RegExp(z.ARROW_UP + "|" + z.ARROW_DOWN),
                        U = new RegExp("^" + z.TAB + "$|" + z.ESCAPE),
                        q = { li: function(e, t, n) { var i = R.li.cloneNode(!1); return e && (1 === e.nodeType || 11 === e.nodeType ? i.appendChild(e) : i.innerHTML = e), void 0 !== t && "" !== t && (i.className = t), null != n && i.classList.add("optgroup-" + n), i }, a: function(e, t, n) { var i = R.a.cloneNode(!0); return e && (11 === e.nodeType ? i.appendChild(e) : i.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && i.classList.add.apply(i.classList, t.split(/\s+/)), n && i.setAttribute("style", n), i }, text: function(e, t) { var n, i, a = R.text.cloneNode(!1); if (e.content) a.innerHTML = e.content;
                                else { if (a.textContent = e.text, e.icon) { var r = R.whitespace.cloneNode(!1);
                                        (i = (!0 === t ? R.i : R.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, R.fragment.appendChild(i), R.fragment.appendChild(r) }
                                    e.subtext && ((n = R.subtext.cloneNode(!1)).textContent = e.subtext, a.appendChild(n)) } if (!0 === t)
                                    for (; a.childNodes.length > 0;) R.fragment.appendChild(a.childNodes[0]);
                                else R.fragment.appendChild(a); return R.fragment }, label: function(e) { var t, n, i = R.text.cloneNode(!1); if (i.innerHTML = e.display, e.icon) { var a = R.whitespace.cloneNode(!1);
                                    (n = R.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, R.fragment.appendChild(n), R.fragment.appendChild(a) } return e.subtext && ((t = R.subtext.cloneNode(!1)).textContent = e.subtext, i.appendChild(t)), R.fragment.appendChild(i), R.fragment } };

                    function W(e, t) { e.length || (R.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + $(t) + '"'), this.$menuInner[0].firstChild.appendChild(R.noResults)) } var Y = function(t, n) { var i = this;
                        w.useDefault || (e.valHooks.select.set = w._set, w.useDefault = !0), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.options = n, this.selectpicker = { main: {}, search: {}, current: {}, view: {}, isSearching: !1, keydown: { keyHistory: "", resetKeyHistory: { start: function() { return setTimeout((function() { i.selectpicker.keydown.keyHistory = "" }), 800) } } } }, this.sizeInfo = {}, null === this.options.title && (this.options.title = this.$element.attr("title")); var a = this.options.windowPadding; "number" == typeof a && (this.options.windowPadding = [a, a, a, a]), this.val = Y.prototype.val, this.render = Y.prototype.render, this.refresh = Y.prototype.refresh, this.setStyle = Y.prototype.setStyle, this.selectAll = Y.prototype.selectAll, this.deselectAll = Y.prototype.deselectAll, this.destroy = Y.prototype.destroy, this.remove = Y.prototype.remove, this.show = Y.prototype.show, this.hide = Y.prototype.hide, this.init() };

                    function V(n) { var i, a = arguments,
                            r = n; if ([].shift.apply(a), !_.success) { try { _.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".") } catch (e) { Y.BootstrapVersion ? _.full = Y.BootstrapVersion.split(" ")[0].split(".") : (_.full = [_.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)) }
                            _.major = _.full[0], _.success = !0 } if ("4" === _.major) { var o = [];
                            Y.DEFAULTS.style === H.BUTTONCLASS && o.push({ name: "style", className: "BUTTONCLASS" }), Y.DEFAULTS.iconBase === H.ICONBASE && o.push({ name: "iconBase", className: "ICONBASE" }), Y.DEFAULTS.tickIcon === H.TICKICON && o.push({ name: "tickIcon", className: "TICKICON" }), H.DIVIDER = "dropdown-divider", H.SHOW = "show", H.BUTTONCLASS = "btn-light", H.POPOVERHEADER = "popover-header", H.ICONBASE = "", H.TICKICON = "bs-ok-default"; for (var s = 0; s < o.length; s++) n = o[s], Y.DEFAULTS[n.name] = H[n.className] } var l = this.each((function() { var n = e(this); if (n.is("select")) { var o = n.data("selectpicker"),
                                    s = "object" == typeof r && r; if (o) { if (s)
                                        for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (o.options[l] = s[l]) } else { var c = n.data(); for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && -1 !== e.inArray(u, t) && delete c[u]; var d = e.extend({}, Y.DEFAULTS, e.fn.selectpicker.defaults || {}, c, s);
                                    d.template = e.extend({}, Y.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, c.template, s.template), n.data("selectpicker", o = new Y(this, d)) } "string" == typeof r && (i = o[r] instanceof Function ? o[r].apply(o, a) : o.options[r]) } })); return void 0 !== i ? i : l }
                    Y.VERSION = "1.13.18", Y.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function(e, t) { return 1 == e ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function(e, t) { return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: H.BUTTONCLASS, size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: H.ICONBASE, tickIcon: H.TICKICON, showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0, virtualScroll: 600, display: !1, sanitize: !0, sanitizeFn: null, whiteList: i }, Y.prototype = { constructor: Y, init: function() { var e = this,
                                t = this.$element.attr("id"),
                                n = this.$element[0],
                                i = n.form;
                            N++, this.selectId = "bs-select-" + N, n.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), n.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.buildData(), this.$element.after(this.$newElement).prependTo(this.$newElement), i && null === n.form && (i.id || (i.id = "form-" + this.selectId), n.setAttribute("form", i.id)), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(j.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), n.classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(H.MENURIGHT), void 0 !== t && this.$button.attr("data-id", t), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + F, (function() { if (e.isVirtual()) { var t = e.$menuInner[0],
                                        n = t.firstChild.cloneNode(!1);
                                    t.replaceChild(n, t.firstChild), t.scrollTop = 0 } })), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function(t) { e.$element.trigger("hide" + F, t) }, "hidden.bs.dropdown": function(t) { e.$element.trigger("hidden" + F, t) }, "show.bs.dropdown": function(t) { e.$element.trigger("show" + F, t) }, "shown.bs.dropdown": function(t) { e.$element.trigger("shown" + F, t) } }), n.hasAttribute("required") && this.$element.on("invalid" + F, (function() { e.$button[0].classList.add("bs-invalid"), e.$element.on("shown" + F + ".invalid", (function() { e.$element.val(e.$element.val()).off("shown" + F + ".invalid") })).on("rendered" + F, (function() { this.validity.valid && e.$button[0].classList.remove("bs-invalid"), e.$element.off("rendered" + F) })), e.$button.on("blur" + F, (function() { e.$element.trigger("focus").trigger("blur"), e.$button.off("blur" + F) })) })), setTimeout((function() { e.buildList(), e.$element.trigger("loaded" + F) })) }, createDropdown: function() { var t = this.multiple || this.options.showTick ? " show-tick" : "",
                                n = this.multiple ? ' aria-multiselectable="true"' : "",
                                i = "",
                                a = this.autofocus ? " autofocus" : "";
                            _.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn"); var r, o = "",
                                s = "",
                                l = "",
                                c = ""; return this.options.header && (o = '<div class="' + H.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (s = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + $(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + H.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + H.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (c = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + H.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), r = '<div class="dropdown bootstrap-select' + t + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + a + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === _.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + H.MENU + " " + ("4" === _.major ? "" : H.SHOW) + '">' + o + s + l + '<div class="inner ' + H.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + n + '><ul class="' + H.MENU + " inner " + ("4" === _.major ? H.SHOW : "") + '" role="presentation"></ul></div>' + c + "</div></div>", e(r) }, setPositionData: function() { this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1; for (var e = 0; e < this.selectpicker.current.data.length; e++) { var t = this.selectpicker.current.data[e],
                                    n = !0; "divider" === t.type ? (n = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (n = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (n = !1), this.selectpicker.view.canHighlight.push(n), n && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height } }, isVirtual: function() { return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll }, createView: function(t, n, i) { var a, r, o = this,
                                l = 0,
                                c = []; if (this.selectpicker.isSearching = t, this.selectpicker.current = t ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), n)
                                if (i) l = this.$menuInner[0].scrollTop;
                                else if (!o.multiple) { var u = o.$element[0],
                                    d = (u.options[u.selectedIndex] || {}).liIndex; if ("number" == typeof d && !1 !== o.options.size) { var p = o.selectpicker.main.data[d],
                                        h = p && p.position;
                                    h && (l = h - (o.sizeInfo.menuInnerHeight + o.sizeInfo.liHeight) / 2) } }

                            function f(e, n) { var i, l, u, d, p, h, f, g, v = o.selectpicker.current.elements.length,
                                    w = [],
                                    y = !0,
                                    b = o.isVirtual();
                                o.selectpicker.view.scrollTop = e, i = Math.ceil(o.sizeInfo.menuInnerHeight / o.sizeInfo.liHeight * 1.5), l = Math.round(v / i) || 1; for (var x = 0; x < l; x++) { var C = (x + 1) * i; if (x === l - 1 && (C = v), w[x] = [x * i + (x ? 1 : 0), C], !v) break;
                                    void 0 === p && e - 1 <= o.selectpicker.current.data[C - 1].position - o.sizeInfo.menuInnerHeight && (p = x) } if (void 0 === p && (p = 0), h = [o.selectpicker.view.position0, o.selectpicker.view.position1], u = Math.max(0, p - 1), d = Math.min(l - 1, p + 1), o.selectpicker.view.position0 = !1 === b ? 0 : Math.max(0, w[u][0]) || 0, o.selectpicker.view.position1 = !1 === b ? v : Math.min(v, w[d][1]) || 0, f = h[0] !== o.selectpicker.view.position0 || h[1] !== o.selectpicker.view.position1, void 0 !== o.activeIndex && (r = o.selectpicker.main.elements[o.prevActiveIndex], c = o.selectpicker.main.elements[o.activeIndex], a = o.selectpicker.main.elements[o.selectedIndex], n && (o.activeIndex !== o.selectedIndex && o.defocusItem(c), o.activeIndex = void 0), o.activeIndex && o.activeIndex !== o.selectedIndex && o.defocusItem(a)), void 0 !== o.prevActiveIndex && o.prevActiveIndex !== o.activeIndex && o.prevActiveIndex !== o.selectedIndex && o.defocusItem(r), (n || f) && (g = o.selectpicker.view.visibleElements ? o.selectpicker.view.visibleElements.slice() : [], o.selectpicker.view.visibleElements = !1 === b ? o.selectpicker.current.elements : o.selectpicker.current.elements.slice(o.selectpicker.view.position0, o.selectpicker.view.position1), o.setOptionStatus(), (t || !1 === b && n) && (y = !m(g, o.selectpicker.view.visibleElements)), (n || !0 === b) && y)) { var E, k, S = o.$menuInner[0],
                                        T = document.createDocumentFragment(),
                                        M = S.firstChild.cloneNode(!1),
                                        A = o.selectpicker.view.visibleElements,
                                        D = [];
                                    S.replaceChild(M, S.firstChild), x = 0; for (var I = A.length; x < I; x++) { var O, P, $ = A[x];
                                        o.options.sanitize && (O = $.lastChild) && (P = o.selectpicker.current.data[x + o.selectpicker.view.position0]) && P.content && !P.sanitized && (D.push(O), P.sanitized = !0), T.appendChild($) } if (o.options.sanitize && D.length && s(D, o.options.whiteList, o.options.sanitizeFn), !0 === b ? (E = 0 === o.selectpicker.view.position0 ? 0 : o.selectpicker.current.data[o.selectpicker.view.position0 - 1].position, k = o.selectpicker.view.position1 > v - 1 ? 0 : o.selectpicker.current.data[v - 1].position - o.selectpicker.current.data[o.selectpicker.view.position1 - 1].position, S.firstChild.style.marginTop = E + "px", S.firstChild.style.marginBottom = k + "px") : (S.firstChild.style.marginTop = 0, S.firstChild.style.marginBottom = 0), S.firstChild.appendChild(T), !0 === b && o.sizeInfo.hasScrollBar) { var L = S.firstChild.offsetWidth; if (n && L < o.sizeInfo.menuInnerInnerWidth && o.sizeInfo.totalMenuWidth > o.sizeInfo.selectWidth) S.firstChild.style.minWidth = o.sizeInfo.menuInnerInnerWidth + "px";
                                        else if (L > o.sizeInfo.menuInnerInnerWidth) { o.$menu[0].style.minWidth = 0; var z = S.firstChild.offsetWidth;
                                            z > o.sizeInfo.menuInnerInnerWidth && (o.sizeInfo.menuInnerInnerWidth = z, S.firstChild.style.minWidth = o.sizeInfo.menuInnerInnerWidth + "px"), o.$menu[0].style.minWidth = "" } } } if (o.prevActiveIndex = o.activeIndex, o.options.liveSearch) { if (t && n) { var _, N = 0;
                                        o.selectpicker.view.canHighlight[N] || (N = 1 + o.selectpicker.view.canHighlight.slice(1).indexOf(!0)), _ = o.selectpicker.view.visibleElements[N], o.defocusItem(o.selectpicker.view.currentActive), o.activeIndex = (o.selectpicker.current.data[N] || {}).index, o.focusItem(_) } } else o.$menuInner.trigger("focus") }
                            f(l, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", (function(e, t) { o.noScroll || f(this.scrollTop, t), o.noScroll = !1 })), e(window).off("resize" + F + "." + this.selectId + ".createView").on("resize" + F + "." + this.selectId + ".createView", (function() { o.$newElement.hasClass(H.SHOW) && f(o.$menuInner[0].scrollTop) })) }, focusItem: function(e, t, n) { if (e) { t = t || this.selectpicker.main.data[this.activeIndex]; var i = e.firstChild;
                                i && (i.setAttribute("aria-setsize", this.selectpicker.view.size), i.setAttribute("aria-posinset", t.posinset), !0 !== n && (this.focusedParent.setAttribute("aria-activedescendant", i.id), e.classList.add("active"), i.classList.add("active"))) } }, defocusItem: function(e) { e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active")) }, setPlaceholder: function() { var e = this,
                                t = !1; if (this.options.title && !this.multiple) { this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = !0; var n = this.$element[0],
                                    i = !1,
                                    a = !this.selectpicker.view.titleOption.parentNode,
                                    r = n.selectedIndex,
                                    o = n.options[r],
                                    s = window.performance && window.performance.getEntriesByType("navigation"),
                                    l = s && s.length ? "back_forward" !== s[0].type : 2 !== window.performance.navigation.type;
                                a && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = !o || 0 === r && !1 === o.defaultSelected && void 0 === this.$element.data("selected")), (a || 0 !== this.selectpicker.view.titleOption.index) && n.insertBefore(this.selectpicker.view.titleOption, n.firstChild), i && l ? n.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", (function() { e.selectpicker.view.displayedValue !== n.value && e.render() })) } return t }, buildData: function() { var e = ':not([hidden]):not([data-hidden="true"])',
                                t = [],
                                n = 0,
                                i = this.setPlaceholder() ? 1 : 0;
                            this.options.hideDisabled && (e += ":not(:disabled)"); var a = this.$element[0].querySelectorAll("select > *" + e);

                            function r(e) { var n = t[t.length - 1];
                                n && "divider" === n.type && (n.optID || e.optID) || ((e = e || {}).type = "divider", t.push(e)) }

                            function o(e, n) { if ((n = n || {}).divider = "true" === e.getAttribute("data-divider"), n.divider) r({ optID: n.optID });
                                else { var i = t.length,
                                        a = e.style.cssText,
                                        o = a ? $(a) : "",
                                        s = (e.className || "") + (n.optgroupClass || "");
                                    n.optID && (s = "opt " + s), n.optionClass = s.trim(), n.inlineStyle = o, n.text = e.textContent, n.content = e.getAttribute("data-content"), n.tokens = e.getAttribute("data-tokens"), n.subtext = e.getAttribute("data-subtext"), n.icon = e.getAttribute("data-icon"), e.liIndex = i, n.display = n.content || n.text, n.type = "option", n.index = i, n.option = e, n.selected = !!e.selected, n.disabled = n.disabled || !!e.disabled, t.push(n) } }

                            function s(a, s) { var l = s[a],
                                    c = !(a - 1 < i) && s[a - 1],
                                    u = s[a + 1],
                                    d = l.querySelectorAll("option" + e); if (d.length) { var p, h, f = { display: $(l.label), subtext: l.getAttribute("data-subtext"), icon: l.getAttribute("data-icon"), type: "optgroup-label", optgroupClass: " " + (l.className || "") };
                                    n++, c && r({ optID: n }), f.optID = n, t.push(f); for (var m = 0, g = d.length; m < g; m++) { var v = d[m];
                                        0 === m && (h = (p = t.length - 1) + g), o(v, { headerIndex: p, lastIndex: h, optID: f.optID, optgroupClass: f.optgroupClass, disabled: l.disabled }) }
                                    u && r({ optID: n }) } } for (var l = a.length, c = i; c < l; c++) { var u = a[c]; "OPTGROUP" !== u.tagName ? o(u, {}) : s(c, a) }
                            this.selectpicker.main.data = this.selectpicker.current.data = t }, buildList: function() { var e = this,
                                t = this.selectpicker.main.data,
                                n = [],
                                i = 0;

                            function a(t) { var a, r = 0; switch (t.type) {
                                    case "divider":
                                        a = q.li(!1, H.DIVIDER, t.optID ? t.optID + "div" : void 0); break;
                                    case "option":
                                        (a = q.li(q.a(q.text.call(e, t), t.optionClass, t.inlineStyle), "", t.optID)).firstChild && (a.firstChild.id = e.selectId + "-" + t.index); break;
                                    case "optgroup-label":
                                        a = q.li(q.label.call(e, t), "dropdown-header" + t.optgroupClass, t.optID) }
                                t.element = a, n.push(a), t.display && (r += t.display.length), t.subtext && (r += t.subtext.length), t.icon && (r += 1), r > i && (i = r, e.selectpicker.view.widestOption = n[n.length - 1]) }!e.options.showTick && !e.multiple || R.checkMark.parentNode || (R.checkMark.className = this.options.iconBase + " " + e.options.tickIcon + " check-mark", R.a.appendChild(R.checkMark)); for (var r = t.length, o = 0; o < r; o++) a(t[o]);
                            this.selectpicker.main.elements = this.selectpicker.current.elements = n }, findLis: function() { return this.$menuInner.find(".inner > li") }, render: function() { var e, t, n = this,
                                i = this.$element[0],
                                a = this.setPlaceholder() && 0 === i.selectedIndex,
                                r = g(i, this.options.hideDisabled),
                                o = r.length,
                                l = this.$button[0],
                                c = l.querySelector(".filter-option-inner-inner"),
                                u = document.createTextNode(this.options.multipleSeparator),
                                d = R.fragment.cloneNode(!1),
                                p = !1; if (l.classList.toggle("bs-placeholder", n.multiple ? !o : !v(i, r)), n.multiple || 1 !== r.length || (n.selectpicker.view.displayedValue = v(i, r)), "static" === this.options.selectedTextFormat) d = q.text.call(this, { text: this.options.title }, !0);
                            else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && o > 1) && (e = (t = this.options.selectedTextFormat.split(">")).length > 1 && o > t[1] || 1 === t.length && o >= 2), !1 === e) { if (!a) { for (var h = 0; h < o && h < 50; h++) { var f = r[h],
                                            m = this.selectpicker.main.data[f.liIndex],
                                            w = {};
                                        this.multiple && h > 0 && d.appendChild(u.cloneNode(!1)), f.title ? w.text = f.title : m && (m.content && n.options.showContent ? (w.content = m.content.toString(), p = !0) : (n.options.showIcon && (w.icon = m.icon), n.options.showSubtext && !n.multiple && m.subtext && (w.subtext = " " + m.subtext), w.text = f.textContent.trim())), d.appendChild(q.text.call(this, w, !0)) }
                                    o > 49 && d.appendChild(document.createTextNode("...")) } } else { var y = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                                this.options.hideDisabled && (y += ":not(:disabled)"); var b = this.$element[0].querySelectorAll("select > option" + y + ", optgroup" + y + " option" + y).length,
                                    x = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, b) : this.options.countSelectedText;
                                d = q.text.call(this, { text: x.replace("{0}", o.toString()).replace("{1}", b.toString()) }, !0) } if (null == this.options.title && (this.options.title = this.$element.attr("title")), d.childNodes.length || (d = q.text.call(this, { text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText }, !0)), l.title = d.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && p && s([d], n.options.whiteList, n.options.sanitizeFn), c.innerHTML = "", c.appendChild(d), _.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) { var C = l.querySelector(".filter-expand"),
                                    E = c.cloneNode(!0);
                                E.className = "filter-expand", C ? l.replaceChild(E, C) : l.appendChild(E) }
                            this.$element.trigger("rendered" + F) }, setStyle: function(e, t) { var n, i = this.$button[0],
                                a = this.$newElement[0],
                                r = this.options.style.trim();
                            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), _.major < 4 && (a.classList.add("bs3"), a.parentNode.classList && a.parentNode.classList.contains("input-group") && (a.previousElementSibling || a.nextElementSibling) && (a.previousElementSibling || a.nextElementSibling).classList.contains("input-group-addon") && a.classList.add("bs3-has-addon")), n = e ? e.trim() : r, "add" == t ? n && i.classList.add.apply(i.classList, n.split(" ")) : "remove" == t ? n && i.classList.remove.apply(i.classList, n.split(" ")) : (r && i.classList.remove.apply(i.classList, r.split(" ")), n && i.classList.add.apply(i.classList, n.split(" "))) }, liHeight: function(t) { if (t || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) { var n, i = R.div.cloneNode(!1),
                                    a = R.div.cloneNode(!1),
                                    r = R.div.cloneNode(!1),
                                    o = document.createElement("ul"),
                                    s = R.li.cloneNode(!1),
                                    l = R.li.cloneNode(!1),
                                    c = R.a.cloneNode(!1),
                                    u = R.span.cloneNode(!1),
                                    d = this.options.header && this.$menu.find("." + H.POPOVERHEADER).length > 0 ? this.$menu.find("." + H.POPOVERHEADER)[0].cloneNode(!0) : null,
                                    p = this.options.liveSearch ? R.div.cloneNode(!1) : null,
                                    h = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                                    f = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                                    m = this.$element.find("option")[0]; if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, u.className = "text", c.className = "dropdown-item " + (m ? m.className : ""), i.className = this.$menu[0].parentNode.className + " " + H.SHOW, i.style.width = 0, "auto" === this.options.width && (a.style.minWidth = 0), a.className = H.MENU + " " + H.SHOW, r.className = "inner " + H.SHOW, o.className = H.MENU + " inner " + ("4" === _.major ? H.SHOW : ""), s.className = H.DIVIDER, l.className = "dropdown-header", u.appendChild(document.createTextNode("​")), this.selectpicker.current.data.length)
                                    for (var g = 0; g < this.selectpicker.current.data.length; g++) { var v = this.selectpicker.current.data[g]; if ("option" === v.type) { n = v.element; break } } else n = R.li.cloneNode(!1), c.appendChild(u), n.appendChild(c); if (l.appendChild(u.cloneNode(!0)), this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), o.appendChild(n), o.appendChild(s), o.appendChild(l), d && a.appendChild(d), p) { var w = document.createElement("input");
                                    p.className = "bs-searchbox", w.className = "form-control", p.appendChild(w), a.appendChild(p) }
                                h && a.appendChild(h), r.appendChild(o), a.appendChild(r), f && a.appendChild(f), i.appendChild(a), document.body.appendChild(i); var y, b = n.offsetHeight,
                                    x = l ? l.offsetHeight : 0,
                                    E = d ? d.offsetHeight : 0,
                                    k = p ? p.offsetHeight : 0,
                                    S = h ? h.offsetHeight : 0,
                                    T = f ? f.offsetHeight : 0,
                                    M = e(s).outerHeight(!0),
                                    A = !!window.getComputedStyle && window.getComputedStyle(a),
                                    D = a.offsetWidth,
                                    I = A ? null : e(a),
                                    O = { vert: C(A ? A.paddingTop : I.css("paddingTop")) + C(A ? A.paddingBottom : I.css("paddingBottom")) + C(A ? A.borderTopWidth : I.css("borderTopWidth")) + C(A ? A.borderBottomWidth : I.css("borderBottomWidth")), horiz: C(A ? A.paddingLeft : I.css("paddingLeft")) + C(A ? A.paddingRight : I.css("paddingRight")) + C(A ? A.borderLeftWidth : I.css("borderLeftWidth")) + C(A ? A.borderRightWidth : I.css("borderRightWidth")) },
                                    P = { vert: O.vert + C(A ? A.marginTop : I.css("marginTop")) + C(A ? A.marginBottom : I.css("marginBottom")) + 2, horiz: O.horiz + C(A ? A.marginLeft : I.css("marginLeft")) + C(A ? A.marginRight : I.css("marginRight")) + 2 };
                                r.style.overflowY = "scroll", y = a.offsetWidth - D, document.body.removeChild(i), this.sizeInfo.liHeight = b, this.sizeInfo.dropdownHeaderHeight = x, this.sizeInfo.headerHeight = E, this.sizeInfo.searchHeight = k, this.sizeInfo.actionsHeight = S, this.sizeInfo.doneButtonHeight = T, this.sizeInfo.dividerHeight = M, this.sizeInfo.menuPadding = O, this.sizeInfo.menuExtras = P, this.sizeInfo.menuWidth = D, this.sizeInfo.menuInnerInnerWidth = D - O.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = y, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData() } }, getSelectPosition: function() { var t, n = this,
                                i = e(window),
                                a = n.$newElement.offset(),
                                r = e(n.options.container);
                            n.options.container && r.length && !r.is("body") ? ((t = r.offset()).top += parseInt(r.css("borderTopWidth")), t.left += parseInt(r.css("borderLeftWidth"))) : t = { top: 0, left: 0 }; var o = n.options.windowPadding;
                            this.sizeInfo.selectOffsetTop = a.top - t.top - i.scrollTop(), this.sizeInfo.selectOffsetBot = i.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - o[2], this.sizeInfo.selectOffsetLeft = a.left - t.left - i.scrollLeft(), this.sizeInfo.selectOffsetRight = i.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - o[1], this.sizeInfo.selectOffsetTop -= o[0], this.sizeInfo.selectOffsetLeft -= o[3] }, setMenuSize: function(e) { this.getSelectPosition(); var t, n, i, a, r, o, s, l, c = this.sizeInfo.selectWidth,
                                u = this.sizeInfo.liHeight,
                                d = this.sizeInfo.headerHeight,
                                p = this.sizeInfo.searchHeight,
                                h = this.sizeInfo.actionsHeight,
                                f = this.sizeInfo.doneButtonHeight,
                                m = this.sizeInfo.dividerHeight,
                                g = this.sizeInfo.menuPadding,
                                v = 0; if (this.options.dropupAuto && (s = u * this.selectpicker.current.elements.length + g.vert, l = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && s + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (l = this.selectpicker.dropup), this.$newElement.toggleClass(H.DROPUP, l), this.selectpicker.dropup = l), "auto" === this.options.size) a = this.selectpicker.current.elements.length > 3 ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, n = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, i = a + d + p + h + f, o = Math.max(a - g.vert, 0), this.$newElement.hasClass(H.DROPUP) && (n = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), r = n, t = n - d - p - h - f - g.vert;
                            else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) { for (var w = 0; w < this.options.size; w++) "divider" === this.selectpicker.current.data[w].type && v++;
                                t = (n = u * this.options.size + v * m + g.vert) - g.vert, r = n + d + p + h + f, i = o = "" }
                            this.$menu.css({ "max-height": r + "px", overflow: "hidden", "min-height": i + "px" }), this.$menuInner.css({ "max-height": t + "px", "overflow-y": "auto", "min-height": o + "px" }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(H.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - c), this.dropdown && this.dropdown._popper && this.dropdown._popper.update() }, setSize: function(t) { if (this.liHeight(t), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) { var n = this,
                                    i = e(window);
                                this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", (function() { return n.setMenuSize() })), "auto" === this.options.size ? i.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize").on("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize", (function() { return n.setMenuSize() })) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize") }
                            this.createView(!1, !0, t) }, setWidth: function() { var e = this; "auto" === this.options.width ? requestAnimationFrame((function() { e.$menu.css("min-width", "0"), e.$element.on("loaded" + F, (function() { e.liHeight(), e.setMenuSize(); var t = e.$newElement.clone().appendTo("body"),
                                        n = t.css("width", "auto").children("button").outerWidth();
                                    t.remove(), e.sizeInfo.selectWidth = Math.max(e.sizeInfo.totalMenuWidth, n), e.$newElement.css("width", e.sizeInfo.selectWidth + "px") })) })) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width") }, selectPosition: function() { this.$bsContainer = e('<div class="bs-container" />'); var t, n, i, a = this,
                                r = e(this.options.container),
                                o = function(o) { var s = {},
                                        l = a.options.display || !!e.fn.dropdown.Constructor.Default && e.fn.dropdown.Constructor.Default.display;
                                    a.$bsContainer.addClass(o.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(H.DROPUP, o.hasClass(H.DROPUP)), t = o.offset(), r.is("body") ? n = { top: 0, left: 0 } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), i = o.hasClass(H.DROPUP) ? 0 : o[0].offsetHeight, (_.major < 4 || "static" === l) && (s.top = t.top - n.top + i, s.left = t.left - n.left), s.width = o[0].offsetWidth, a.$bsContainer.css(s) };
                            this.$button.on("click.bs.dropdown.data-api", (function() { a.isDisabled() || (o(a.$newElement), a.$bsContainer.appendTo(a.options.container).toggleClass(H.SHOW, !a.$button.hasClass(H.SHOW)).append(a.$menu)) })), e(window).off("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId).on("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId, (function() { a.$newElement.hasClass(H.SHOW) && o(a.$newElement) })), this.$element.on("hide" + F, (function() { a.$menu.data("height", a.$menu.height()), a.$bsContainer.detach() })) }, setOptionStatus: function(e) { var t = this; if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length)
                                for (var n = 0; n < t.selectpicker.view.visibleElements.length; n++) { var i = t.selectpicker.current.data[n + t.selectpicker.view.position0],
                                        a = i.option;
                                    a && (!0 !== e && t.setDisabled(i.index, i.disabled), t.setSelected(i.index, a.selected)) } }, setSelected: function(e, t) { var n, i, a = this.selectpicker.main.elements[e],
                                r = this.selectpicker.main.data[e],
                                o = void 0 !== this.activeIndex,
                                s = this.activeIndex === e || t && !this.multiple && !o;
                            r.selected = t, i = a.firstChild, t && (this.selectedIndex = e), a.classList.toggle("selected", t), s ? (this.focusItem(a, r), this.selectpicker.view.currentActive = a, this.activeIndex = e) : this.defocusItem(a), i && (i.classList.toggle("selected", t), t ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")), s || o || !t || void 0 === this.prevActiveIndex || (n = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(n)) }, setDisabled: function(e, t) { var n, i = this.selectpicker.main.elements[e];
                            this.selectpicker.main.data[e].disabled = t, n = i.firstChild, i.classList.toggle(H.DISABLED, t), n && ("4" === _.major && n.classList.toggle(H.DISABLED, t), t ? (n.setAttribute("aria-disabled", t), n.setAttribute("tabindex", -1)) : (n.removeAttribute("aria-disabled"), n.setAttribute("tabindex", 0))) }, isDisabled: function() { return this.$element[0].disabled }, checkDisabled: function() { this.isDisabled() ? (this.$newElement[0].classList.add(H.DISABLED), this.$button.addClass(H.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(H.DISABLED) && (this.$newElement[0].classList.remove(H.DISABLED), this.$button.removeClass(H.DISABLED).attr("aria-disabled", !1)) }, clickListener: function() { var t = this,
                                n = e(document);

                            function i() { t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$menuInner.trigger("focus") }

                            function a() { t.dropdown && t.dropdown._popper && t.dropdown._popper.state.isCreated ? i() : requestAnimationFrame(a) }
                            n.data("spaceSelect", !1), this.$button.on("keyup", (function(e) { /(32)/.test(e.keyCode.toString(10)) && n.data("spaceSelect") && (e.preventDefault(), n.data("spaceSelect", !1)) })), this.$newElement.on("show.bs.dropdown", (function() { _.major > 3 && !t.dropdown && (t.dropdown = t.$button.data("bs.dropdown"), t.dropdown._menu = t.$menu[0]) })), this.$button.on("click.bs.dropdown.data-api", (function() { t.$newElement.hasClass(H.SHOW) || t.setSize() })), this.$element.on("shown" + F, (function() { t.$menuInner[0].scrollTop !== t.selectpicker.view.scrollTop && (t.$menuInner[0].scrollTop = t.selectpicker.view.scrollTop), _.major > 3 ? requestAnimationFrame(a) : i() })), this.$menuInner.on("mouseenter", "li a", (function(e) { var n = this.parentElement,
                                    i = t.isVirtual() ? t.selectpicker.view.position0 : 0,
                                    a = Array.prototype.indexOf.call(n.parentElement.children, n),
                                    r = t.selectpicker.current.data[a + i];
                                t.focusItem(n, r, !0) })), this.$menuInner.on("click", "li a", (function(n, i) { var a = e(this),
                                    r = t.$element[0],
                                    o = t.isVirtual() ? t.selectpicker.view.position0 : 0,
                                    s = t.selectpicker.current.data[a.parent().index() + o],
                                    l = s.index,
                                    c = v(r),
                                    u = r.selectedIndex,
                                    d = r.options[u],
                                    p = !0; if (t.multiple && 1 !== t.options.maxOptions && n.stopPropagation(), n.preventDefault(), !t.isDisabled() && !a.parent().hasClass(H.DISABLED)) { var h = s.option,
                                        f = e(h),
                                        m = h.selected,
                                        w = f.parent("optgroup"),
                                        b = w.find("option"),
                                        x = t.options.maxOptions,
                                        C = w.data("maxOptions") || !1; if (l === t.activeIndex && (i = !0), i || (t.prevActiveIndex = t.activeIndex, t.activeIndex = void 0), t.multiple) { if (h.selected = !m, t.setSelected(l, !m), t.focusedParent.focus(), !1 !== x || !1 !== C) { var E = x < g(r).length,
                                                k = C < w.find("option:selected").length; if (x && E || C && k)
                                                if (x && 1 == x) r.selectedIndex = -1, h.selected = !0, t.setOptionStatus(!0);
                                                else if (C && 1 == C) { for (var S = 0; S < b.length; S++) { var T = b[S];
                                                    T.selected = !1, t.setSelected(T.liIndex, !1) }
                                                h.selected = !0, t.setSelected(l, !0) } else { var M = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
                                                    A = "function" == typeof M ? M(x, C) : M,
                                                    D = A[0].replace("{n}", x),
                                                    I = A[1].replace("{n}", C),
                                                    O = e('<div class="notify"></div>');
                                                A[2] && (D = D.replace("{var}", A[2][x > 1 ? 0 : 1]), I = I.replace("{var}", A[2][C > 1 ? 0 : 1])), h.selected = !1, t.$menu.append(O), x && E && (O.append(e("<div>" + D + "</div>")), p = !1, t.$element.trigger("maxReached" + F)), C && k && (O.append(e("<div>" + I + "</div>")), p = !1, t.$element.trigger("maxReachedGrp" + F)), setTimeout((function() { t.setSelected(l, !1) }), 10), O[0].classList.add("fadeOut"), setTimeout((function() { O.remove() }), 1050) } } } else d && (d.selected = !1), h.selected = !0, t.setSelected(l, !0);!t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.trigger("focus") : t.options.liveSearch && t.$searchbox.trigger("focus"), p && (t.multiple || u !== r.selectedIndex) && (y = [h.index, f.prop("selected"), c], t.$element.triggerNative("change")) } })), this.$menu.on("click", "li." + H.DISABLED + " a, ." + H.POPOVERHEADER + ", ." + H.POPOVERHEADER + " :not(.close)", (function(n) { n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.trigger("focus") : t.$button.trigger("focus")) })), this.$menuInner.on("click", ".divider, .dropdown-header", (function(e) { e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus") })), this.$menu.on("click", "." + H.POPOVERHEADER + " .close", (function() { t.$button.trigger("click") })), this.$searchbox.on("click", (function(e) { e.stopPropagation() })), this.$menu.on("click", ".actions-btn", (function(n) { t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"), n.preventDefault(), n.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll() })), this.$button.on("focus" + F, (function(e) { var n = t.$element[0].getAttribute("tabindex");
                                void 0 !== n && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", n), t.$element[0].setAttribute("tabindex", -1), t.selectpicker.view.tabindex = n) })).on("blur" + F, (function(e) { void 0 !== t.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (t.$element[0].setAttribute("tabindex", t.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), t.selectpicker.view.tabindex = void 0) })), this.$element.on("change" + F, (function() { t.render(), t.$element.trigger("changed" + F, y), y = null })).on("focus" + F, (function() { t.options.mobile || t.$button[0].focus() })) }, liveSearchListener: function() { var e = this;
                            this.$button.on("click.bs.dropdown.data-api", (function() { e.$searchbox.val() && (e.$searchbox.val(""), e.selectpicker.search.previousValue = void 0) })), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", (function(e) { e.stopPropagation() })), this.$searchbox.on("input propertychange", (function() { var t = e.$searchbox[0].value; if (e.selectpicker.search.elements = [], e.selectpicker.search.data = [], t) { var n = [],
                                        i = t.toUpperCase(),
                                        a = {},
                                        r = [],
                                        o = e._searchStyle(),
                                        s = e.options.liveSearchNormalize;
                                    s && (i = M(i)); for (var l = 0; l < e.selectpicker.main.data.length; l++) { var c = e.selectpicker.main.data[l];
                                        a[l] || (a[l] = x(c, i, o, s)), a[l] && void 0 !== c.headerIndex && -1 === r.indexOf(c.headerIndex) && (c.headerIndex > 0 && (a[c.headerIndex - 1] = !0, r.push(c.headerIndex - 1)), a[c.headerIndex] = !0, r.push(c.headerIndex), a[c.lastIndex + 1] = !0), a[l] && "optgroup-label" !== c.type && r.push(l) }
                                    l = 0; for (var u = r.length; l < u; l++) { var d = r[l],
                                            p = r[l - 1],
                                            h = (c = e.selectpicker.main.data[d], e.selectpicker.main.data[p]);
                                        ("divider" !== c.type || "divider" === c.type && h && "divider" !== h.type && u - 1 !== l) && (e.selectpicker.search.data.push(c), n.push(e.selectpicker.main.elements[d])) }
                                    e.activeIndex = void 0, e.noScroll = !0, e.$menuInner.scrollTop(0), e.selectpicker.search.elements = n, e.createView(!0), W.call(e, n, t) } else e.selectpicker.search.previousValue && (e.$menuInner.scrollTop(0), e.createView(!1));
                                e.selectpicker.search.previousValue = t })) }, _searchStyle: function() { return this.options.liveSearchStyle || "contains" }, val: function(e) { var t = this.$element[0]; if (void 0 !== e) { var n = v(t); if (y = [null, null, n], this.$element.val(e).trigger("changed" + F, y), this.$newElement.hasClass(H.SHOW))
                                    if (this.multiple) this.setOptionStatus(!0);
                                    else { var i = (t.options[t.selectedIndex] || {}).liIndex; "number" == typeof i && (this.setSelected(this.selectedIndex, !1), this.setSelected(i, !0)) }
                                return this.render(), y = null, this.$element } return this.$element.val() }, changeAll: function(e) { if (this.multiple) { void 0 === e && (e = !0); var t = this.$element[0],
                                    n = 0,
                                    i = 0,
                                    a = v(t);
                                t.classList.add("bs-select-hidden"); for (var r = 0, o = this.selectpicker.current.data, s = o.length; r < s; r++) { var l = o[r],
                                        c = l.option;
                                    c && !l.disabled && "divider" !== l.type && (l.selected && n++, c.selected = e, !0 === e && i++) }
                                t.classList.remove("bs-select-hidden"), n !== i && (this.setOptionStatus(), y = [null, null, a], this.$element.triggerNative("change")) } }, selectAll: function() { return this.changeAll(!0) }, deselectAll: function() { return this.changeAll(!1) }, toggle: function(e) {
                            (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api") }, keydown: function(t) { var n, i, a, r, o, s = e(this),
                                l = s.hasClass("dropdown-toggle"),
                                c = (l ? s.closest(".dropdown") : s.closest(j.MENU)).data("this"),
                                u = c.findLis(),
                                d = !1,
                                p = t.which === z.TAB && !l && !c.options.selectOnTab,
                                h = B.test(t.which) || p,
                                f = c.$menuInner[0].scrollTop,
                                m = !0 === c.isVirtual() ? c.selectpicker.view.position0 : 0; if (!(t.which >= 112 && t.which <= 123))
                                if (!(i = c.$newElement.hasClass(H.SHOW)) && (h || t.which >= 48 && t.which <= 57 || t.which >= 96 && t.which <= 105 || t.which >= 65 && t.which <= 90) && (c.$button.trigger("click.bs.dropdown.data-api"), c.options.liveSearch)) c.$searchbox.trigger("focus");
                                else { if (t.which === z.ESCAPE && i && (t.preventDefault(), c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), h) { if (!u.length) return; - 1 !== (n = (a = c.selectpicker.main.elements[c.activeIndex]) ? Array.prototype.indexOf.call(a.parentElement.children, a) : -1) && c.defocusItem(a), t.which === z.ARROW_UP ? (-1 !== n && n--, n + m < 0 && (n += u.length), c.selectpicker.view.canHighlight[n + m] || -1 == (n = c.selectpicker.view.canHighlight.slice(0, n + m).lastIndexOf(!0) - m) && (n = u.length - 1)) : (t.which === z.ARROW_DOWN || p) && (++n + m >= c.selectpicker.view.canHighlight.length && (n = c.selectpicker.view.firstHighlightIndex), c.selectpicker.view.canHighlight[n + m] || (n = n + 1 + c.selectpicker.view.canHighlight.slice(n + m + 1).indexOf(!0))), t.preventDefault(); var g = m + n;
                                        t.which === z.ARROW_UP ? 0 === m && n === u.length - 1 ? (c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight, g = c.selectpicker.current.elements.length - 1) : d = (o = (r = c.selectpicker.current.data[g]).position - r.height) < f : (t.which === z.ARROW_DOWN || p) && (n === c.selectpicker.view.firstHighlightIndex ? (c.$menuInner[0].scrollTop = 0, g = c.selectpicker.view.firstHighlightIndex) : d = (o = (r = c.selectpicker.current.data[g]).position - c.sizeInfo.menuInnerHeight) > f), a = c.selectpicker.current.elements[g], c.activeIndex = c.selectpicker.current.data[g].index, c.focusItem(a), c.selectpicker.view.currentActive = a, d && (c.$menuInner[0].scrollTop = o), c.options.liveSearch ? c.$searchbox.trigger("focus") : s.trigger("focus") } else if (!s.is("input") && !U.test(t.which) || t.which === z.SPACE && c.selectpicker.keydown.keyHistory) { var v, w, y = [];
                                        t.preventDefault(), c.selectpicker.keydown.keyHistory += L[t.which], c.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel), c.selectpicker.keydown.resetKeyHistory.cancel = c.selectpicker.keydown.resetKeyHistory.start(), w = c.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(w) && (w = w.charAt(0)); for (var b = 0; b < c.selectpicker.current.data.length; b++) { var C = c.selectpicker.current.data[b];
                                            x(C, w, "startsWith", !0) && c.selectpicker.view.canHighlight[b] && y.push(C.index) } if (y.length) { var E = 0;
                                            u.removeClass("active").find("a").removeClass("active"), 1 === w.length && (-1 === (E = y.indexOf(c.activeIndex)) || E === y.length - 1 ? E = 0 : E++), v = y[E], f - (r = c.selectpicker.main.data[v]).position > 0 ? (o = r.position - r.height, d = !0) : (o = r.position - c.sizeInfo.menuInnerHeight, d = r.position > f + c.sizeInfo.menuInnerHeight), a = c.selectpicker.main.elements[v], c.activeIndex = y[E], c.focusItem(a), a && a.firstChild.focus(), d && (c.$menuInner[0].scrollTop = o), s.trigger("focus") } }
                                    i && (t.which === z.SPACE && !c.selectpicker.keydown.keyHistory || t.which === z.ENTER || t.which === z.TAB && c.options.selectOnTab) && (t.which !== z.SPACE && t.preventDefault(), c.options.liveSearch && t.which === z.SPACE || (c.$menuInner.find(".active a").trigger("click", !0), s.trigger("focus"), c.options.liveSearch || (t.preventDefault(), e(document).data("spaceSelect", !0)))) } }, mobile: function() { this.options.mobile = !0, this.$element[0].classList.add("mobile-device") }, refresh: function() { var t = e.extend({}, this.options, this.$element.data());
                            this.options = t, this.checkDisabled(), this.buildData(), this.setStyle(), this.render(), this.buildList(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + F) }, hide: function() { this.$newElement.hide() }, show: function() { this.$newElement.show() }, remove: function() { this.$newElement.remove(), this.$element.remove() }, destroy: function() { this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(F).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), e(window).off(F + "." + this.selectId) } }; var G = e.fn.selectpicker;

                    function X() { if (e.fn.dropdown) return (e.fn.dropdown.Constructor._dataApiKeydownHandler || e.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments) }
                    e.fn.selectpicker = V, e.fn.selectpicker.Constructor = Y, e.fn.selectpicker.noConflict = function() { return e.fn.selectpicker = G, this }, e(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', X).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", X).on("keydown" + F, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Y.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', (function(e) { e.stopPropagation() })), e(window).on("load" + F + ".data-api", (function() { e(".selectpicker").each((function() { var t = e(this);
                            V.call(t, t.data()) })) })) }(e) }.apply(t, i)) || (e.exports = a) }, 2025: (e, t, n) => { "use strict";
            e = n.nmd(e); var i = n(9755);

            function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function r(e, t) { return (r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function o(e) { var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }(); return function() { var n, i = c(e); if (t) { var a = c(this).constructor;
                        n = Reflect.construct(i, arguments, a) } else n = i.apply(this, arguments); return s(this, n) } }

            function s(e, t) { return !t || "object" !== a(t) && "function" != typeof t ? l(e) : t }

            function l(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function u(e, t) { var n; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return d(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t) }(e)) || t && e && "number" == typeof e.length) { n && (e = n); var i = 0,
                            a = function() {}; return { s: a, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: a } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var r, o = !0,
                    s = !1; return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return o = e.done, e }, e: function(e) { s = !0, r = e }, f: function() { try { o || null == n.return || n.return() } finally { if (s) throw r } } } }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]; return i }

            function p(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function h(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

            function f(e, t, n) { return t && h(e.prototype, t), n && h(e, n), e } var m = function() {
                    function e() { p(this, e) } return f(e, [{ key: "on", value: function(e, t) { return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this } }, { key: "emit", value: function(e) { this._callbacks = this._callbacks || {}; var t = this._callbacks[e]; if (t) { for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a]; var r, o = u(t); try { for (o.s(); !(r = o.n()).done;) { var s = r.value;
                                        s.apply(this, i) } } catch (e) { o.e(e) } finally { o.f() } } return this } }, { key: "off", value: function(e, t) { if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this; var n = this._callbacks[e]; if (!n) return this; if (1 === arguments.length) return delete this._callbacks[e], this; for (var i = 0; i < n.length; i++) { var a = n[i]; if (a === t) { n.splice(i, 1); break } } return this } }]), e }(),
                g = function(e) {! function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && r(e, t) }(n, e); var t = o(n);

                    function n(e, i) { var a, r, o; if (p(this, n), (a = t.call(this)).element = e, a.version = n.version, a.defaultOptions.previewTemplate = a.defaultOptions.previewTemplate.replace(/\n*/g, ""), a.clickableElements = [], a.listeners = [], a.files = [], "string" == typeof a.element && (a.element = document.querySelector(a.element)), !a.element || null == a.element.nodeType) throw new Error("Invalid dropzone element."); if (a.element.dropzone) throw new Error("Dropzone already attached.");
                        n.instances.push(l(a)), a.element.dropzone = l(a); var c = null != (o = n.optionsForElement(a.element)) ? o : {}; if (a.options = n.extend({}, a.defaultOptions, c, null != i ? i : {}), a.options.forceFallback || !n.isBrowserSupported()) return s(a, a.options.fallback.call(l(a))); if (null == a.options.url && (a.options.url = a.element.getAttribute("action")), !a.options.url) throw new Error("No URL provided."); if (a.options.acceptedFiles && a.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."); if (a.options.uploadMultiple && a.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking."); return a.options.acceptedMimeTypes && (a.options.acceptedFiles = a.options.acceptedMimeTypes, delete a.options.acceptedMimeTypes), null != a.options.renameFilename && (a.options.renameFile = function(e) { return a.options.renameFilename.call(l(a), e.name, e) }), "string" == typeof a.options.method && (a.options.method = a.options.method.toUpperCase()), (r = a.getExistingFallback()) && r.parentNode && r.parentNode.removeChild(r), !1 !== a.options.previewsContainer && (a.options.previewsContainer ? a.previewsContainer = n.getElement(a.options.previewsContainer, "previewsContainer") : a.previewsContainer = a.element), a.options.clickable && (!0 === a.options.clickable ? a.clickableElements = [a.element] : a.clickableElements = n.getElements(a.options.clickable, "clickable")), a.init(), a } return f(n, null, [{ key: "initClass", value: function() { this.prototype.Emitter = m, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = { url: null, method: "post", withCredentials: !1, timeout: 3e4, parallelUploads: 2, uploadMultiple: !1, chunking: !1, forceChunking: !1, chunkSize: 2e6, parallelChunkUploads: !1, retryChunks: !1, retryChunksLimit: 3, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 120, thumbnailHeight: 120, thumbnailMethod: "crop", resizeWidth: null, resizeHeight: null, resizeMimeType: null, resizeQuality: .8, resizeMethod: "contain", filesizeBase: 1e3, maxFiles: null, headers: null, clickable: !0, ignoreHiddenFiles: !0, acceptedFiles: null, acceptedMimeTypes: null, autoProcessQueue: !0, autoQueue: !0, addRemoveLinks: !1, previewsContainer: null, hiddenInputContainer: "body", capture: null, renameFilename: null, renameFile: null, forceFallback: !1, dictDefaultMessage: "Drop files here to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", dictCancelUpload: "Cancel upload", dictUploadCanceled: "Upload canceled.", dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?", dictRemoveFile: "Remove file", dictRemoveFileConfirmation: null, dictMaxFilesExceeded: "You can not upload any more files.", dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" }, init: function() {}, params: function(e, t, n) { if (n) return { dzuuid: n.file.upload.uuid, dzchunkindex: n.index, dztotalfilesize: n.file.size, dzchunksize: this.options.chunkSize, dztotalchunkcount: n.file.upload.totalChunkCount, dzchunkbyteoffset: n.index * this.options.chunkSize } }, accept: function(e, t) { return t() }, chunksUploaded: function(e, t) { t() }, fallback: function() { var e;
                                    this.element.className = "".concat(this.element.className, " dz-browser-not-supported"); var t, i = u(this.element.getElementsByTagName("div")); try { for (i.s(); !(t = i.n()).done;) { var a = t.value; if (/(^| )dz-message($| )/.test(a.className)) { e = a, a.className = "dz-message"; break } } } catch (e) { i.e(e) } finally { i.f() }
                                    e || (e = n.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e)); var r = e.getElementsByTagName("span")[0]; return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm()) }, resize: function(e, t, n, i) { var a = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height },
                                        r = e.width / e.height;
                                    null == t && null == n ? (t = a.srcWidth, n = a.srcHeight) : null == t ? t = n * r : null == n && (n = t / r); var o = (t = Math.min(t, a.srcWidth)) / (n = Math.min(n, a.srcHeight)); if (a.srcWidth > t || a.srcHeight > n)
                                        if ("crop" === i) r > o ? (a.srcHeight = e.height, a.srcWidth = a.srcHeight * o) : (a.srcWidth = e.width, a.srcHeight = a.srcWidth / o);
                                        else { if ("contain" !== i) throw new Error("Unknown resizeMethod '".concat(i, "'"));
                                            r > o ? n = t / r : t = n * r }
                                    return a.srcX = (e.width - a.srcWidth) / 2, a.srcY = (e.height - a.srcHeight) / 2, a.trgWidth = t, a.trgHeight = n, a }, transformFile: function(e, t) { return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e) }, previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>', drop: function(e) { return this.element.classList.remove("dz-drag-hover") }, dragstart: function(e) {}, dragend: function(e) { return this.element.classList.remove("dz-drag-hover") }, dragenter: function(e) { return this.element.classList.add("dz-drag-hover") }, dragover: function(e) { return this.element.classList.add("dz-drag-hover") }, dragleave: function(e) { return this.element.classList.remove("dz-drag-hover") }, paste: function(e) {}, reset: function() { return this.element.classList.remove("dz-started") }, addedfile: function(e) { var t = this; if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) { e.previewElement = n.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement); var i, a = u(e.previewElement.querySelectorAll("[data-dz-name]")); try { for (a.s(); !(i = a.n()).done;) { var r = i.value;
                                                r.textContent = e.name } } catch (e) { a.e(e) } finally { a.f() } var o, s = u(e.previewElement.querySelectorAll("[data-dz-size]")); try { for (s.s(); !(o = s.n()).done;)(r = o.value).innerHTML = this.filesize(e.size) } catch (e) { s.e(e) } finally { s.f() }
                                        this.options.addRemoveLinks && (e._removeLink = n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), e.previewElement.appendChild(e._removeLink)); var l, c = function(i) { return i.preventDefault(), i.stopPropagation(), e.status === n.UPLOADING ? n.confirm(t.options.dictCancelUploadConfirmation, (function() { return t.removeFile(e) })) : t.options.dictRemoveFileConfirmation ? n.confirm(t.options.dictRemoveFileConfirmation, (function() { return t.removeFile(e) })) : t.removeFile(e) },
                                            d = u(e.previewElement.querySelectorAll("[data-dz-remove]")); try { for (d.s(); !(l = d.n()).done;) { l.value.addEventListener("click", c) } } catch (e) { d.e(e) } finally { d.f() } } }, removedfile: function(e) { return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass() }, thumbnail: function(e, t) { if (e.previewElement) { e.previewElement.classList.remove("dz-file-preview"); var n, i = u(e.previewElement.querySelectorAll("[data-dz-thumbnail]")); try { for (i.s(); !(n = i.n()).done;) { var a = n.value;
                                                a.alt = e.name, a.src = t } } catch (e) { i.e(e) } finally { i.f() } return setTimeout((function() { return e.previewElement.classList.add("dz-image-preview") }), 1) } }, error: function(e, t) { if (e.previewElement) { e.previewElement.classList.add("dz-error"), "string" != typeof t && t.error && (t = t.error); var n, i = u(e.previewElement.querySelectorAll("[data-dz-errormessage]")); try { for (i.s(); !(n = i.n()).done;) { n.value.textContent = t } } catch (e) { i.e(e) } finally { i.f() } } }, errormultiple: function() {}, processing: function(e) { if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload }, processingmultiple: function() {}, uploadprogress: function(e, t, n) { if (e.previewElement) { var i, a = u(e.previewElement.querySelectorAll("[data-dz-uploadprogress]")); try { for (a.s(); !(i = a.n()).done;) { var r = i.value; "PROGRESS" === r.nodeName ? r.value = t : r.style.width = "".concat(t, "%") } } catch (e) { a.e(e) } finally { a.f() } } }, totaluploadprogress: function() {}, sending: function() {}, sendingmultiple: function() {}, success: function(e) { if (e.previewElement) return e.previewElement.classList.add("dz-success") }, successmultiple: function() {}, canceled: function(e) { return this.emit("error", e, this.options.dictUploadCanceled) }, canceledmultiple: function() {}, complete: function(e) { if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete") }, completemultiple: function() {}, maxfilesexceeded: function() {}, maxfilesreached: function() {}, queuecomplete: function() {}, addedfiles: function() {} }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1 } }, { key: "extend", value: function(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; for (var a = 0, r = n; a < r.length; a++) { var o = r[a]; for (var s in o) { var l = o[s];
                                    e[s] = l } } return e } }]), f(n, [{ key: "getAcceptedFiles", value: function() { return this.files.filter((function(e) { return e.accepted })).map((function(e) { return e })) } }, { key: "getRejectedFiles", value: function() { return this.files.filter((function(e) { return !e.accepted })).map((function(e) { return e })) } }, { key: "getFilesWithStatus", value: function(e) { return this.files.filter((function(t) { return t.status === e })).map((function(e) { return e })) } }, { key: "getQueuedFiles", value: function() { return this.getFilesWithStatus(n.QUEUED) } }, { key: "getUploadingFiles", value: function() { return this.getFilesWithStatus(n.UPLOADING) } }, { key: "getAddedFiles", value: function() { return this.getFilesWithStatus(n.ADDED) } }, { key: "getActiveFiles", value: function() { return this.files.filter((function(e) { return e.status === n.UPLOADING || e.status === n.QUEUED })).map((function(e) { return e })) } }, { key: "init", value: function() { var e = this; if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(n.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length) {! function t() { return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", n.getElement(e.options.hiddenInputContainer, "hiddenInputContainer").appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", (function() { var n = e.hiddenFileInput.files; if (n.length) { var i, a = u(n); try { for (a.s(); !(i = a.n()).done;) { var r = i.value;
                                                    e.addFile(r) } } catch (e) { a.e(e) } finally { a.f() } } return e.emit("addedfiles", n), t() })) }() }
                            this.URL = null !== window.URL ? window.URL : window.webkitURL; var t, i = u(this.events); try { for (i.s(); !(t = i.n()).done;) { var a = t.value;
                                    this.on(a, this.options[a]) } } catch (e) { i.e(e) } finally { i.f() }
                            this.on("uploadprogress", (function() { return e.updateTotalUploadProgress() })), this.on("removedfile", (function() { return e.updateTotalUploadProgress() })), this.on("canceled", (function(t) { return e.emit("complete", t) })), this.on("complete", (function(t) { if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout((function() { return e.emit("queuecomplete") }), 0) })); var r = function(e) { if (function(e) { if (e.dataTransfer.types)
                                            for (var t = 0; t < e.dataTransfer.types.length; t++)
                                                if ("Files" === e.dataTransfer.types[t]) return !0;
                                        return !1 }(e)) return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1 }; return this.listeners = [{ element: this.element, events: { dragstart: function(t) { return e.emit("dragstart", t) }, dragenter: function(t) { return r(t), e.emit("dragenter", t) }, dragover: function(t) { var n; try { n = t.dataTransfer.effectAllowed } catch (e) {} return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", r(t), e.emit("dragover", t) }, dragleave: function(t) { return e.emit("dragleave", t) }, drop: function(t) { return r(t), e.drop(t) }, dragend: function(t) { return e.emit("dragend", t) } } }], this.clickableElements.forEach((function(t) { return e.listeners.push({ element: t, events: { click: function(i) { return (t !== e.element || i.target === e.element || n.elementInside(i.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0 } } }) })), this.enable(), this.options.init.call(this) } }, { key: "destroy", value: function() { return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, n.instances.splice(n.instances.indexOf(this), 1) } }, { key: "updateTotalUploadProgress", value: function() { var e, t = 0,
                                n = 0; if (this.getActiveFiles().length) { var i, a = u(this.getActiveFiles()); try { for (a.s(); !(i = a.n()).done;) { var r = i.value;
                                        t += r.upload.bytesSent, n += r.upload.total } } catch (e) { a.e(e) } finally { a.f() }
                                e = 100 * t / n } else e = 100; return this.emit("totaluploadprogress", e, n, t) } }, { key: "_getParamName", value: function(e) { return "function" == typeof this.options.paramName ? this.options.paramName(e) : "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(e, "]") : "") } }, { key: "_renameFile", value: function(e) { return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e) } }, { key: "getFallbackForm", value: function() { var e, t; if (e = this.getExistingFallback()) return e; var i = '<div class="dz-fallback">';
                            this.options.dictFallbackText && (i += "<p>".concat(this.options.dictFallbackText, "</p>")), i += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>'); var a = n.createElement(i); return "FORM" !== this.element.tagName ? (t = n.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'))).appendChild(a) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : a } }, { key: "getExistingFallback", value: function() { for (var e = function(e) { var t, n = u(e); try { for (n.s(); !(t = n.n()).done;) { var i = t.value; if (/(^| )fallback($| )/.test(i.className)) return i } } catch (e) { n.e(e) } finally { n.f() } }, t = 0, n = ["div", "form"]; t < n.length; t++) { var i, a = n[t]; if (i = e(this.element.getElementsByTagName(a))) return i } } }, { key: "setupEventListeners", value: function() { return this.listeners.map((function(e) { return function() { var t = []; for (var n in e.events) { var i = e.events[n];
                                        t.push(e.element.addEventListener(n, i, !1)) } return t }() })) } }, { key: "removeEventListeners", value: function() { return this.listeners.map((function(e) { return function() { var t = []; for (var n in e.events) { var i = e.events[n];
                                        t.push(e.element.removeEventListener(n, i, !1)) } return t }() })) } }, { key: "disable", value: function() { var e = this; return this.clickableElements.forEach((function(e) { return e.classList.remove("dz-clickable") })), this.removeEventListeners(), this.disabled = !0, this.files.map((function(t) { return e.cancelUpload(t) })) } }, { key: "enable", value: function() { return delete this.disabled, this.clickableElements.forEach((function(e) { return e.classList.add("dz-clickable") })), this.setupEventListeners() } }, { key: "filesize", value: function(e) { var t = 0,
                                n = "b"; if (e > 0) { for (var i = ["tb", "gb", "mb", "kb", "b"], a = 0; a < i.length; a++) { var r = i[a]; if (e >= Math.pow(this.options.filesizeBase, 4 - a) / 10) { t = e / Math.pow(this.options.filesizeBase, 4 - a), n = r; break } }
                                t = Math.round(10 * t) / 10 } return "<strong>".concat(t, "</strong> ").concat(this.options.dictFileSizeUnits[n]) } }, { key: "_updateMaxFilesReachedClass", value: function() { return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached") } }, { key: "drop", value: function(e) { if (e.dataTransfer) { this.emit("drop", e); for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n]; if (t.length) { var i = e.dataTransfer.items;
                                    i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t) }
                                this.emit("addedfiles", t) } } }, { key: "paste", value: function(e) { if (null != (t = null != e ? e.clipboardData : void 0, n = function(e) { return e.items }, null != t ? n(t) : void 0)) { var t, n;
                                this.emit("paste", e); var i = e.clipboardData.items; return i.length ? this._addFilesFromItems(i) : void 0 } } }, { key: "handleFiles", value: function(e) { var t, n = u(e); try { for (n.s(); !(t = n.n()).done;) { var i = t.value;
                                    this.addFile(i) } } catch (e) { n.e(e) } finally { n.f() } } }, { key: "_addFilesFromItems", value: function(e) { var t = this; return function() { var n, i = [],
                                    a = u(e); try { for (a.s(); !(n = a.n()).done;) { var r, o = n.value;
                                        null != o.webkitGetAsEntry && (r = o.webkitGetAsEntry()) ? r.isFile ? i.push(t.addFile(o.getAsFile())) : r.isDirectory ? i.push(t._addFilesFromDirectory(r, r.name)) : i.push(void 0) : null != o.getAsFile && (null == o.kind || "file" === o.kind) ? i.push(t.addFile(o.getAsFile())) : i.push(void 0) } } catch (e) { a.e(e) } finally { a.f() } return i }() } }, { key: "_addFilesFromDirectory", value: function(e, t) { var n = this,
                                i = e.createReader(),
                                a = function(e) { return t = console, n = "log", i = function(t) { return t.log(e) }, null != t && "function" == typeof t[n] ? i(t, n) : void 0; var t, n, i }; return function e() { return i.readEntries((function(i) { if (i.length > 0) { var a, r = u(i); try { for (r.s(); !(a = r.n()).done;) { var o = a.value;
                                                o.isFile ? o.file((function(e) { if (!n.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = "".concat(t, "/").concat(e.name), n.addFile(e) })) : o.isDirectory && n._addFilesFromDirectory(o, "".concat(t, "/").concat(o.name)) } } catch (e) { r.e(e) } finally { r.f() }
                                        e() } return null }), a) }() } }, { key: "accept", value: function(e, t) { this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : n.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType) } }, { key: "addFile", value: function(e) { var t = this;
                            e.upload = { uuid: n.uuidv4(), progress: 0, total: e.size, bytesSent: 0, filename: this._renameFile(e) }, this.files.push(e), e.status = n.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, (function(n) { n ? (e.accepted = !1, t._errorProcessing([e], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass() })) } }, { key: "enqueueFiles", value: function(e) { var t, n = u(e); try { for (n.s(); !(t = n.n()).done;) { var i = t.value;
                                    this.enqueueFile(i) } } catch (e) { n.e(e) } finally { n.f() } return null } }, { key: "enqueueFile", value: function(e) { var t = this; if (e.status !== n.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected."); if (e.status = n.QUEUED, this.options.autoProcessQueue) return setTimeout((function() { return t.processQueue() }), 0) } }, { key: "_enqueueThumbnail", value: function(e) { var t = this; if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout((function() { return t._processThumbnailQueue() }), 0) } }, { key: "_processThumbnailQueue", value: function() { var e = this; if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) { this._processingThumbnail = !0; var t = this._thumbnailQueue.shift(); return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (function(n) { return e.emit("thumbnail", t, n), e._processingThumbnail = !1, e._processThumbnailQueue() })) } } }, { key: "removeFile", value: function(e) { if (e.status === n.UPLOADING && this.cancelUpload(e), this.files = v(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset") } }, { key: "removeAllFiles", value: function(e) { null == e && (e = !1); var t, i = u(this.files.slice()); try { for (i.s(); !(t = i.n()).done;) { var a = t.value;
                                    (a.status !== n.UPLOADING || e) && this.removeFile(a) } } catch (e) { i.e(e) } finally { i.f() } return null } }, { key: "resizeImage", value: function(e, t, i, a, r) { var o = this; return this.createThumbnail(e, t, i, a, !0, (function(t, i) { if (null == i) return r(e); var a = o.options.resizeMimeType;
                                null == a && (a = e.type); var s = i.toDataURL(a, o.options.resizeQuality); return "image/jpeg" !== a && "image/jpg" !== a || (s = b.restore(e.dataURL, s)), r(n.dataURItoBlob(s)) })) } }, { key: "createThumbnail", value: function(e, t, n, i, a, r) { var o = this,
                                s = new FileReader;
                            s.onload = function() { e.dataURL = s.result, "image/svg+xml" !== e.type ? o.createThumbnailFromUrl(e, t, n, i, a, r) : null != r && r(s.result) }, s.readAsDataURL(e) } }, { key: "displayExistingFile", value: function(e, t, n, i) { var a = this,
                                r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]; if (this.emit("addedfile", e), this.emit("complete", e), r) { var o = function(t) { a.emit("thumbnail", e, t), n && n() };
                                e.dataURL = t, this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, o, i) } else this.emit("thumbnail", e, t), n && n() } }, { key: "createThumbnailFromUrl", value: function(e, t, n, i, a, r, o) { var s = this,
                                l = document.createElement("img"); return o && (l.crossOrigin = o), a = "from-image" != getComputedStyle(document.body).imageOrientation && a, l.onload = function() { var o = function(e) { return e(1) }; return "undefined" != typeof EXIF && null !== EXIF && a && (o = function(e) { return EXIF.getData(l, (function() { return e(EXIF.getTag(this, "Orientation")) })) }), o((function(a) { e.width = l.width, e.height = l.height; var o = s.options.resize.call(s, e, t, n, i),
                                        c = document.createElement("canvas"),
                                        u = c.getContext("2d"); switch (c.width = o.trgWidth, c.height = o.trgHeight, a > 4 && (c.width = o.trgHeight, c.height = o.trgWidth), a) {
                                        case 2:
                                            u.translate(c.width, 0), u.scale(-1, 1); break;
                                        case 3:
                                            u.translate(c.width, c.height), u.rotate(Math.PI); break;
                                        case 4:
                                            u.translate(0, c.height), u.scale(1, -1); break;
                                        case 5:
                                            u.rotate(.5 * Math.PI), u.scale(1, -1); break;
                                        case 6:
                                            u.rotate(.5 * Math.PI), u.translate(0, -c.width); break;
                                        case 7:
                                            u.rotate(.5 * Math.PI), u.translate(c.height, -c.width), u.scale(-1, 1); break;
                                        case 8:
                                            u.rotate(-.5 * Math.PI), u.translate(-c.height, 0) }
                                    y(u, l, null != o.srcX ? o.srcX : 0, null != o.srcY ? o.srcY : 0, o.srcWidth, o.srcHeight, null != o.trgX ? o.trgX : 0, null != o.trgY ? o.trgY : 0, o.trgWidth, o.trgHeight); var d = c.toDataURL("image/png"); if (null != r) return r(d, c) })) }, null != r && (l.onerror = r), l.src = e.dataURL } }, { key: "processQueue", value: function() { var e = this.options.parallelUploads,
                                t = this.getUploadingFiles().length,
                                n = t; if (!(t >= e)) { var i = this.getQueuedFiles(); if (i.length > 0) { if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - t)); for (; n < e;) { if (!i.length) return;
                                        this.processFile(i.shift()), n++ } } } } }, { key: "processFile", value: function(e) { return this.processFiles([e]) } }, { key: "processFiles", value: function(e) { var t, i = u(e); try { for (i.s(); !(t = i.n()).done;) { var a = t.value;
                                    a.processing = !0, a.status = n.UPLOADING, this.emit("processing", a) } } catch (e) { i.e(e) } finally { i.f() } return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e) } }, { key: "_getFilesWithXhr", value: function(e) { return this.files.filter((function(t) { return t.xhr === e })).map((function(e) { return e })) } }, { key: "cancelUpload", value: function(e) { if (e.status === n.UPLOADING) { var t, i = this._getFilesWithXhr(e.xhr),
                                    a = u(i); try { for (a.s(); !(t = a.n()).done;) { t.value.status = n.CANCELED } } catch (e) { a.e(e) } finally { a.f() }
                                void 0 !== e.xhr && e.xhr.abort(); var r, o = u(i); try { for (o.s(); !(r = o.n()).done;) { var s = r.value;
                                        this.emit("canceled", s) } } catch (e) { o.e(e) } finally { o.f() }
                                this.options.uploadMultiple && this.emit("canceledmultiple", i) } else e.status !== n.ADDED && e.status !== n.QUEUED || (e.status = n.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e])); if (this.options.autoProcessQueue) return this.processQueue() } }, { key: "resolveOption", value: function(e) { if ("function" == typeof e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; return e.apply(this, n) } return e } }, { key: "uploadFile", value: function(e) { return this.uploadFiles([e]) } }, { key: "uploadFiles", value: function(e) { var t = this;
                            this._transformFiles(e, (function(i) { if (t.options.chunking) { var a = i[0];
                                    e[0].upload.chunked = t.options.chunking && (t.options.forceChunking || a.size > t.options.chunkSize), e[0].upload.totalChunkCount = Math.ceil(a.size / t.options.chunkSize) } if (e[0].upload.chunked) { var r = e[0],
                                        o = i[0];
                                    r.upload.chunks = []; var s = function() { for (var i = 0; void 0 !== r.upload.chunks[i];) i++; if (!(i >= r.upload.totalChunkCount)) { 0; var a = i * t.options.chunkSize,
                                                s = Math.min(a + t.options.chunkSize, o.size),
                                                l = { name: t._getParamName(0), data: o.webkitSlice ? o.webkitSlice(a, s) : o.slice(a, s), filename: r.upload.filename, chunkIndex: i };
                                            r.upload.chunks[i] = { file: r, index: i, dataBlock: l, status: n.UPLOADING, progress: 0, retries: 0 }, t._uploadData(e, [l]) } }; if (r.upload.finishedChunkUpload = function(i) { var a = !0;
                                            i.status = n.SUCCESS, i.dataBlock = null, i.xhr = null; for (var o = 0; o < r.upload.totalChunkCount; o++) { if (void 0 === r.upload.chunks[o]) return s();
                                                r.upload.chunks[o].status !== n.SUCCESS && (a = !1) }
                                            a && t.options.chunksUploaded(r, (function() { t._finished(e, "", null) })) }, t.options.parallelChunkUploads)
                                        for (var l = 0; l < r.upload.totalChunkCount; l++) s();
                                    else s() } else { for (var c = [], u = 0; u < e.length; u++) c[u] = { name: t._getParamName(u), data: i[u], filename: e[u].upload.filename };
                                    t._uploadData(e, c) } })) } }, { key: "_getChunk", value: function(e, t) { for (var n = 0; n < e.upload.totalChunkCount; n++)
                                if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n] } }, { key: "_uploadData", value: function(e, t) { var i, a = this,
                                r = new XMLHttpRequest,
                                o = u(e); try { for (o.s(); !(i = o.n()).done;) { i.value.xhr = r } } catch (e) { o.e(e) } finally { o.f() }
                            e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = r); var s = this.resolveOption(this.options.method, e),
                                l = this.resolveOption(this.options.url, e);
                            r.open(s, l, !0), r.timeout = this.resolveOption(this.options.timeout, e), r.withCredentials = !!this.options.withCredentials, r.onload = function(t) { a._finishedUploading(e, r, t) }, r.ontimeout = function() { a._handleUploadError(e, r, "Request timedout after ".concat(a.options.timeout / 1e3, " seconds")) }, r.onerror = function() { a._handleUploadError(e, r) }, (null != r.upload ? r.upload : r).onprogress = function(t) { return a._updateFilesUploadProgress(e, r, t) }; var c = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }; for (var d in this.options.headers && n.extend(c, this.options.headers), c) { var p = c[d];
                                p && r.setRequestHeader(d, p) } var h = new FormData; if (this.options.params) { var f = this.options.params; for (var m in "function" == typeof f && (f = f.call(this, e, r, e[0].upload.chunked ? this._getChunk(e[0], r) : null)), f) { var g = f[m]; if (Array.isArray(g))
                                        for (var v = 0; v < g.length; v++) h.append(m, g[v]);
                                    else h.append(m, g) } } var w, y = u(e); try { for (y.s(); !(w = y.n()).done;) { var b = w.value;
                                    this.emit("sending", b, r, h) } } catch (e) { y.e(e) } finally { y.f() }
                            this.options.uploadMultiple && this.emit("sendingmultiple", e, r, h), this._addFormElementData(h); for (var x = 0; x < t.length; x++) { var C = t[x];
                                h.append(C.name, C.data, C.filename) }
                            this.submitRequest(r, h, e) } }, { key: "_transformFiles", value: function(e, t) { for (var n = this, i = [], a = 0, r = function(r) { n.options.transformFile.call(n, e[r], (function(n) { i[r] = n, ++a === e.length && t(i) })) }, o = 0; o < e.length; o++) r(o) } }, { key: "_addFormElementData", value: function(e) { if ("FORM" === this.element.tagName) { var t, n = u(this.element.querySelectorAll("input, textarea, select, button")); try { for (n.s(); !(t = n.n()).done;) { var i = t.value,
                                            a = i.getAttribute("name"),
                                            r = i.getAttribute("type"); if (r && (r = r.toLowerCase()), null != a)
                                            if ("SELECT" === i.tagName && i.hasAttribute("multiple")) { var o, s = u(i.options); try { for (s.s(); !(o = s.n()).done;) { var l = o.value;
                                                        l.selected && e.append(a, l.value) } } catch (e) { s.e(e) } finally { s.f() } } else(!r || "checkbox" !== r && "radio" !== r || i.checked) && e.append(a, i.value) } } catch (e) { n.e(e) } finally { n.f() } } } }, { key: "_updateFilesUploadProgress", value: function(e, t, n) { var i; if (void 0 !== n) { if (i = 100 * n.loaded / n.total, e[0].upload.chunked) { var a = e[0],
                                        r = this._getChunk(a, t);
                                    r.progress = i, r.total = n.total, r.bytesSent = n.loaded;
                                    a.upload.progress = 0, a.upload.total = 0, a.upload.bytesSent = 0; for (var o = 0; o < a.upload.totalChunkCount; o++) void 0 !== a.upload.chunks[o] && void 0 !== a.upload.chunks[o].progress && (a.upload.progress += a.upload.chunks[o].progress, a.upload.total += a.upload.chunks[o].total, a.upload.bytesSent += a.upload.chunks[o].bytesSent);
                                    a.upload.progress = a.upload.progress / a.upload.totalChunkCount } else { var s, l = u(e); try { for (l.s(); !(s = l.n()).done;) { var c = s.value;
                                            c.upload.progress = i, c.upload.total = n.total, c.upload.bytesSent = n.loaded } } catch (e) { l.e(e) } finally { l.f() } } var d, p = u(e); try { for (p.s(); !(d = p.n()).done;) { var h = d.value;
                                        this.emit("uploadprogress", h, h.upload.progress, h.upload.bytesSent) } } catch (e) { p.e(e) } finally { p.f() } } else { var f = !0;
                                i = 100; var m, g = u(e); try { for (g.s(); !(m = g.n()).done;) { var v = m.value;
                                        100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (f = !1), v.upload.progress = i, v.upload.bytesSent = v.upload.total } } catch (e) { g.e(e) } finally { g.f() } if (f) return; var w, y = u(e); try { for (y.s(); !(w = y.n()).done;) { var b = w.value;
                                        this.emit("uploadprogress", b, i, b.upload.bytesSent) } } catch (e) { y.e(e) } finally { y.f() } } } }, { key: "_finishedUploading", value: function(e, t, i) { var a; if (e[0].status !== n.CANCELED && 4 === t.readyState) { if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (a = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try { a = JSON.parse(a) } catch (e) { i = e, a = "Invalid JSON response from server." }
                                this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, a, i) : this._handleUploadError(e, t, a) } } }, { key: "_handleUploadError", value: function(e, t, i) { if (e[0].status !== n.CANCELED) { if (e[0].upload.chunked && this.options.retryChunks) { var a = this._getChunk(e[0], t); if (a.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [a.dataBlock]);
                                    console.warn("Retried this chunk too often. Giving up.") }
                                this._errorProcessing(e, i || this.options.dictResponseError.replace("{{statusCode}}", t.status), t) } } }, { key: "submitRequest", value: function(e, t, n) { e.send(t) } }, { key: "_finished", value: function(e, t, i) { var a, r = u(e); try { for (r.s(); !(a = r.n()).done;) { var o = a.value;
                                    o.status = n.SUCCESS, this.emit("success", o, t, i), this.emit("complete", o) } } catch (e) { r.e(e) } finally { r.f() } if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue() } }, { key: "_errorProcessing", value: function(e, t, i) { var a, r = u(e); try { for (r.s(); !(a = r.n()).done;) { var o = a.value;
                                    o.status = n.ERROR, this.emit("error", o, t, i), this.emit("complete", o) } } catch (e) { r.e(e) } finally { r.f() } if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue() } }], [{ key: "uuidv4", value: function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) })) } }]), n }(m);
            g.initClass(), g.version = "5.7.2", g.options = {}, g.optionsForElement = function(e) { return e.getAttribute("id") ? g.options[w(e.getAttribute("id"))] : void 0 }, g.instances = [], g.forElement = function(e) { if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."); return e.dropzone }, g.autoDiscover = !0, g.discover = function() { var e; if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
                else { e = []; var t = function(t) { return function() { var n, i = [],
                                a = u(t); try { for (a.s(); !(n = a.n()).done;) { var r = n.value; /(^| )dropzone($| )/.test(r.className) ? i.push(e.push(r)) : i.push(void 0) } } catch (e) { a.e(e) } finally { a.f() } return i }() };
                    t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form")) } return function() { var t, n = [],
                        i = u(e); try { for (i.s(); !(t = i.n()).done;) { var a = t.value;!1 !== g.optionsForElement(a) ? n.push(new g(a)) : n.push(void 0) } } catch (e) { i.e(e) } finally { i.f() } return n }() }, g.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], g.isBrowserSupported = function() { var e = !0; if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a")) { var t, n = u(g.blacklistedBrowsers); try { for (n.s(); !(t = n.n()).done;) { t.value.test(navigator.userAgent) && (e = !1) } } catch (e) { n.e(e) } finally { n.f() } } else e = !1;
                else e = !1; return e }, g.dataURItoBlob = function(e) { for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), a = new Uint8Array(i), r = 0, o = t.length, s = 0 <= o; s ? r <= o : r >= o; s ? r++ : r--) a[r] = t.charCodeAt(r); return new Blob([i], { type: n }) }; var v = function(e, t) { return e.filter((function(e) { return e !== t })).map((function(e) { return e })) },
                w = function(e) { return e.replace(/[\-_](\w)/g, (function(e) { return e.charAt(1).toUpperCase() })) };
            g.createElement = function(e) { var t = document.createElement("div"); return t.innerHTML = e, t.childNodes[0] }, g.elementInside = function(e, t) { if (e === t) return !0; for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1 }, g.getElement = function(e, t) { var n; if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector or a plain HTML element.")); return n }, g.getElements = function(e, t) { var n, i; if (e instanceof Array) { i = []; try { var a, r = u(e); try { for (r.s(); !(a = r.n()).done;) n = a.value, i.push(this.getElement(n, t)) } catch (e) { r.e(e) } finally { r.f() } } catch (e) { i = null } } else if ("string" == typeof e) { i = []; var o, s = u(document.querySelectorAll(e)); try { for (s.s(); !(o = s.n()).done;) n = o.value, i.push(n) } catch (e) { s.e(e) } finally { s.f() } } else null != e.nodeType && (i = [e]); if (null == i || !i.length) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.")); return i }, g.confirm = function(e, t, n) { return window.confirm(e) ? t() : null != n ? n() : void 0 }, g.isValidFile = function(e, t) { if (!t) return !0;
                t = t.split(","); var n, i = e.type,
                    a = i.replace(/\/.*$/, ""),
                    r = u(t); try { for (r.s(); !(n = r.n()).done;) { var o = n.value; if ("." === (o = o.trim()).charAt(0)) { if (-1 !== e.name.toLowerCase().indexOf(o.toLowerCase(), e.name.length - o.length)) return !0 } else if (/\/\*$/.test(o)) { if (a === o.replace(/\/.*$/, "")) return !0 } else if (i === o) return !0 } } catch (e) { r.e(e) } finally { r.f() } return !1 }, null != i && (i.fn.dropzone = function(e) { return this.each((function() { return new g(this, e) })) }), null !== e ? e.exports = g : window.Dropzone = g, g.ADDED = "added", g.QUEUED = "queued", g.ACCEPTED = g.QUEUED, g.UPLOADING = "uploading", g.PROCESSING = g.UPLOADING, g.CANCELED = "canceled", g.ERROR = "error", g.SUCCESS = "success"; var y = function(e, t, n, i, a, r, o, s, l, c) { var u = function(e) { e.naturalWidth; var t = e.naturalHeight,
                            n = document.createElement("canvas");
                        n.width = 1, n.height = t; var i = n.getContext("2d");
                        i.drawImage(e, 0, 0); for (var a = i.getImageData(1, 0, 1, t).data, r = 0, o = t, s = t; s > r;) 0 === a[4 * (s - 1) + 3] ? o = s : r = s, s = o + r >> 1; var l = s / t; return 0 === l ? 1 : l }(t); return e.drawImage(t, n, i, a, r, o, s, l, c / u) },
                b = function() {
                    function e() { p(this, e) } return f(e, null, [{ key: "initClass", value: function() { this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }, { key: "encode64", value: function(e) { for (var t = "", n = void 0, i = void 0, a = "", r = void 0, o = void 0, s = void 0, l = "", c = 0; r = (n = e[c++]) >> 2, o = (3 & n) << 4 | (i = e[c++]) >> 4, s = (15 & i) << 2 | (a = e[c++]) >> 6, l = 63 & a, isNaN(i) ? s = l = 64 : isNaN(a) && (l = 64), t = t + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(l), n = i = a = "", r = o = s = l = "", c < e.length;); return t } }, { key: "restore", value: function(e, t) { if (!e.match("data:image/jpeg;base64,")) return t; var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                                i = this.slice2Segments(n),
                                a = this.exifManipulation(t, i); return "data:image/jpeg;base64,".concat(this.encode64(a)) } }, { key: "exifManipulation", value: function(e, t) { var n = this.getExifArray(t),
                                i = this.insertExif(e, n); return new Uint8Array(i) } }, { key: "getExifArray", value: function(e) { for (var t = void 0, n = 0; n < e.length;) { if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                                n++ } return [] } }, { key: "insertExif", value: function(e, t) { var n = e.replace("data:image/jpeg;base64,", ""),
                                i = this.decode64(n),
                                a = i.indexOf(255, 3),
                                r = i.slice(0, a),
                                o = i.slice(a),
                                s = r; return s = (s = s.concat(t)).concat(o) } }, { key: "slice2Segments", value: function(e) { for (var t = 0, n = [];;) { if (255 === e[t] & 218 === e[t + 1]) break; if (255 === e[t] & 216 === e[t + 1]) t += 2;
                                else { var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                        a = e.slice(t, i);
                                    n.push(a), t = i } if (t > e.length) break } return n } }, { key: "decode64", value: function(e) { var t = void 0,
                                n = void 0,
                                i = "",
                                a = void 0,
                                r = void 0,
                                o = "",
                                s = 0,
                                l = []; for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (a = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, n = (15 & a) << 4 | (r = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, i = (3 & r) << 6 | (o = this.KEY_STR.indexOf(e.charAt(s++))), l.push(t), 64 !== r && l.push(n), 64 !== o && l.push(i), t = n = i = "", a = r = o = "", s < e.length;); return l } }]), e }();
            b.initClass();
            g._autoDiscoverFunction = function() { if (g.autoDiscover) return g.discover() },
                function(e, t) { var n = !1,
                        i = !0,
                        a = e.document,
                        r = a.documentElement,
                        o = a.addEventListener ? "addEventListener" : "attachEvent",
                        s = a.addEventListener ? "removeEventListener" : "detachEvent",
                        l = a.addEventListener ? "" : "on",
                        c = function i(r) { if ("readystatechange" !== r.type || "complete" === a.readyState) return ("load" === r.type ? e : a)[s](l + r.type, i, !1), !n && (n = !0) ? t.call(e, r.type || r) : void 0 }; if ("complete" !== a.readyState) { if (a.createEventObject && r.doScroll) { try { i = !e.frameElement } catch (e) {}
                            i && function e() { try { r.doScroll("left") } catch (t) { return void setTimeout(e, 50) } return c("poll") }() }
                        a[o](l + "DOMContentLoaded", c, !1), a[o](l + "readystatechange", c, !1), e[o](l + "load", c, !1) } }(window, g._autoDiscoverFunction) }, 8527: (e, t, n) => { "use strict";
            n.r(t), n.d(t, { default: () => O }); const i = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
                a = { _disable: [], allowInput: !1, allowInvalidPreload: !1, altFormat: "F j, Y", altInput: !1, altInputClass: "form-control input", animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"), ariaDateFormat: "F j, Y", autoFillDefaultTime: !0, clickOpens: !0, closeOnSelect: !0, conjunction: ", ", dateFormat: "Y-m-d", defaultHour: 12, defaultMinute: 0, defaultSeconds: 0, disable: [], disableMobile: !1, enableSeconds: !1, enableTime: !1, errorHandler: e => "undefined" != typeof console && console.warn(e), getWeek: e => { const t = new Date(e.getTime());
                        t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7); var n = new Date(t.getFullYear(), 0, 4); return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7) }, hourIncrement: 1, ignoredFocusElements: [], inline: !1, locale: "default", minuteIncrement: 5, mode: "single", monthSelectorType: "dropdown", nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>", noCalendar: !1, now: new Date, onChange: [], onClose: [], onDayCreate: [], onDestroy: [], onKeyDown: [], onMonthChange: [], onOpen: [], onParseConfig: [], onReady: [], onValueUpdate: [], onYearChange: [], onPreCalendarPosition: [], plugins: [], position: "auto", positionElement: void 0, prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>", shorthandCurrentMonth: !1, showMonths: 1, static: !1, time_24hr: !1, weekNumbers: !1, wrap: !1 },
                r = { weekdays: { shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, months: { shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], firstDayOfWeek: 0, ordinal: e => { const t = e % 100; if (t > 3 && t < 21) return "th"; switch (t % 10) {
                            case 1:
                                return "st";
                            case 2:
                                return "nd";
                            case 3:
                                return "rd";
                            default:
                                return "th" } }, rangeSeparator: " to ", weekAbbreviation: "Wk", scrollTitle: "Scroll to increment", toggleTitle: "Click to toggle", amPM: ["AM", "PM"], yearAriaLabel: "Year", monthAriaLabel: "Month", hourAriaLabel: "Hour", minuteAriaLabel: "Minute", time_24hr: !1 },
                o = r,
                s = (e, t = 2) => `000${e}`.slice(-1 * t),
                l = e => !0 === e ? 1 : 0;

            function c(e, t) { let n; return function() { clearTimeout(n), n = setTimeout((() => e.apply(this, arguments)), t) } } const u = e => e instanceof Array ? e : [e];

            function d(e, t, n) { if (!0 === n) return e.classList.add(t);
                e.classList.remove(t) }

            function p(e, t, n) { const i = window.document.createElement(e); return t = t || "", n = n || "", i.className = t, void 0 !== n && (i.textContent = n), i }

            function h(e) { for (; e.firstChild;) e.removeChild(e.firstChild) }

            function f(e, t) { return t(e) ? e : e.parentNode ? f(e.parentNode, t) : void 0 }

            function m(e, t) { const n = p("div", "numInputWrapper"),
                    i = p("input", "numInput " + e),
                    a = p("span", "arrowUp"),
                    r = p("span", "arrowDown"); if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), void 0 !== t)
                    for (const e in t) i.setAttribute(e, t[e]); return n.appendChild(i), n.appendChild(a), n.appendChild(r), n }

            function g(e) { try { if ("function" == typeof e.composedPath) { return e.composedPath()[0] } return e.target } catch (t) { return e.target } } const v = () => {},
                w = (e, t, n) => n.months[t ? "shorthand" : "longhand"][e],
                y = { D: v, F: function(e, t, n) { e.setMonth(n.months.longhand.indexOf(t)) }, G: (e, t) => { e.setHours(parseFloat(t)) }, H: (e, t) => { e.setHours(parseFloat(t)) }, J: (e, t) => { e.setDate(parseFloat(t)) }, K: (e, t, n) => { e.setHours(e.getHours() % 12 + 12 * l(new RegExp(n.amPM[1], "i").test(t))) }, M: function(e, t, n) { e.setMonth(n.months.shorthand.indexOf(t)) }, S: (e, t) => { e.setSeconds(parseFloat(t)) }, U: (e, t) => new Date(1e3 * parseFloat(t)), W: function(e, t, n) { const i = parseInt(t),
                            a = new Date(e.getFullYear(), 0, 2 + 7 * (i - 1), 0, 0, 0, 0); return a.setDate(a.getDate() - a.getDay() + n.firstDayOfWeek), a }, Y: (e, t) => { e.setFullYear(parseFloat(t)) }, Z: (e, t) => new Date(t), d: (e, t) => { e.setDate(parseFloat(t)) }, h: (e, t) => { e.setHours(parseFloat(t)) }, i: (e, t) => { e.setMinutes(parseFloat(t)) }, j: (e, t) => { e.setDate(parseFloat(t)) }, l: v, m: (e, t) => { e.setMonth(parseFloat(t) - 1) }, n: (e, t) => { e.setMonth(parseFloat(t) - 1) }, s: (e, t) => { e.setSeconds(parseFloat(t)) }, u: (e, t) => new Date(parseFloat(t)), w: v, y: (e, t) => { e.setFullYear(2e3 + parseFloat(t)) } },
                b = { D: "(\\w+)", F: "(\\w+)", G: "(\\d\\d|\\d)", H: "(\\d\\d|\\d)", J: "(\\d\\d|\\d)\\w+", K: "", M: "(\\w+)", S: "(\\d\\d|\\d)", U: "(.+)", W: "(\\d\\d|\\d)", Y: "(\\d{4})", Z: "(.+)", d: "(\\d\\d|\\d)", h: "(\\d\\d|\\d)", i: "(\\d\\d|\\d)", j: "(\\d\\d|\\d)", l: "(\\w+)", m: "(\\d\\d|\\d)", n: "(\\d\\d|\\d)", s: "(\\d\\d|\\d)", u: "(.+)", w: "(\\d\\d|\\d)", y: "(\\d{2})" },
                x = { Z: e => e.toISOString(), D: function(e, t, n) { return t.weekdays.shorthand[x.w(e, t, n)] }, F: function(e, t, n) { return w(x.n(e, t, n) - 1, !1, t) }, G: function(e, t, n) { return s(x.h(e, t, n)) }, H: e => s(e.getHours()), J: function(e, t) { return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate() }, K: (e, t) => t.amPM[l(e.getHours() > 11)], M: function(e, t) { return w(e.getMonth(), !0, t) }, S: e => s(e.getSeconds()), U: e => e.getTime() / 1e3, W: function(e, t, n) { return n.getWeek(e) }, Y: e => s(e.getFullYear(), 4), d: e => s(e.getDate()), h: e => e.getHours() % 12 ? e.getHours() % 12 : 12, i: e => s(e.getMinutes()), j: e => e.getDate(), l: function(e, t) { return t.weekdays.longhand[e.getDay()] }, m: e => s(e.getMonth() + 1), n: e => e.getMonth() + 1, s: e => e.getSeconds(), u: e => e.getTime(), w: e => e.getDay(), y: e => String(e.getFullYear()).substring(2) },
                C = ({ config: e = a, l10n: t = r, isMobile: n = !1 }) => (i, a, r) => { const o = r || t; return void 0 === e.formatDate || n ? a.split("").map(((t, n, a) => x[t] && "\\" !== a[n - 1] ? x[t](i, o, e) : "\\" !== t ? t : "")).join("") : e.formatDate(i, a, o) },
                E = ({ config: e = a, l10n: t = r }) => (n, i, r, o) => { if (0 !== n && !n) return; const s = o || t; let l; const c = n; if (n instanceof Date) l = new Date(n.getTime());
                    else if ("string" != typeof n && void 0 !== n.toFixed) l = new Date(n);
                    else if ("string" == typeof n) { const t = i || (e || a).dateFormat,
                            o = String(n).trim(); if ("today" === o) l = new Date, r = !0;
                        else if (/Z$/.test(o) || /GMT$/.test(o)) l = new Date(n);
                        else if (e && e.parseDate) l = e.parseDate(n, t);
                        else { l = e && e.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0); let i, a = []; for (let e = 0, r = 0, o = ""; e < t.length; e++) { const c = t[e],
                                    u = "\\" === c,
                                    d = "\\" === t[e - 1] || u; if (b[c] && !d) { o += b[c]; const e = new RegExp(o).exec(n);
                                    e && (i = !0) && a["Y" !== c ? "push" : "unshift"]({ fn: y[c], val: e[++r] }) } else u || (o += ".");
                                a.forEach((({ fn: e, val: t }) => l = e(l, t, s) || l)) }
                            l = i ? l : void 0 } } if (l instanceof Date && !isNaN(l.getTime())) return !0 === r && l.setHours(0, 0, 0, 0), l;
                    e.errorHandler(new Error(`Invalid date provided: ${c}`)) };

            function k(e, t, n = !0) { return !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime() } const S = 864e5;

            function T(e) { let t = e.defaultHour,
                    n = e.defaultMinute,
                    i = e.defaultSeconds; if (void 0 !== e.minDate) { const a = e.minDate.getHours(),
                        r = e.minDate.getMinutes(),
                        o = e.minDate.getSeconds();
                    t < a && (t = a), t === a && n < r && (n = r), t === a && n === r && i < o && (i = e.minDate.getSeconds()) } if (void 0 !== e.maxDate) { const a = e.maxDate.getHours(),
                        r = e.maxDate.getMinutes();
                    t = Math.min(t, a), t === a && (n = Math.min(r, n)), t === a && n === r && (i = e.maxDate.getSeconds()) } return { hours: t, minutes: n, seconds: i } }
            n(1895); var M = n(9755);

            function A(e, t) { const n = { config: Object.assign(Object.assign({}, a), I.defaultConfig), l10n: o };

                function r(e) { return e.bind(n) }

                function v() { const e = n.config;!1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() { if (void 0 !== n.calendarContainer && (n.calendarContainer.style.visibility = "hidden", n.calendarContainer.style.display = "block"), void 0 !== n.daysContainer) { const t = (n.days.offsetWidth + 1) * e.showMonths;
                            n.daysContainer.style.width = t + "px", n.calendarContainer.style.width = t + (void 0 !== n.weekWrapper ? n.weekWrapper.offsetWidth : 0) + "px", n.calendarContainer.style.removeProperty("visibility"), n.calendarContainer.style.removeProperty("display") } })) }

                function y(e) { if (0 === n.selectedDates.length) { const e = void 0 === n.config.minDate || k(new Date, n.config.minDate) >= 0 ? new Date : new Date(n.config.minDate.getTime()),
                            t = T(n.config);
                        e.setHours(t.hours, t.minutes, t.seconds, e.getMilliseconds()), n.selectedDates = [e], n.latestSelectedDateObj = e }
                    void 0 !== e && "blur" !== e.type && function(e) { e.preventDefault(); const t = "keydown" === e.type,
                            i = g(e),
                            a = i;
                        void 0 !== n.amPM && i === n.amPM && (n.amPM.textContent = n.l10n.amPM[l(n.amPM.textContent === n.l10n.amPM[0])]); const r = parseFloat(a.getAttribute("min")),
                            o = parseFloat(a.getAttribute("max")),
                            c = parseFloat(a.getAttribute("step")),
                            u = parseInt(a.value, 10),
                            d = e.delta || (t ? 38 === e.which ? 1 : -1 : 0); let p = u + c * d; if (void 0 !== a.value && 2 === a.value.length) { const e = a === n.hourElement,
                                t = a === n.minuteElement;
                            p < r ? (p = o + p + l(!e) + (l(e) && l(!n.amPM)), t && z(void 0, -1, n.hourElement)) : p > o && (p = a === n.hourElement ? p - o - l(!n.amPM) : r, t && z(void 0, 1, n.hourElement)), n.amPM && e && (1 === c ? p + u === 23 : Math.abs(p - u) > c) && (n.amPM.textContent = n.l10n.amPM[l(n.amPM.textContent === n.l10n.amPM[0])]), a.value = s(p) } }(e); const t = n._input.value;
                    x(), we(), n._input.value !== t && n._debouncedChange() }

                function x() { if (void 0 === n.hourElement || void 0 === n.minuteElement) return; let e = (parseInt(n.hourElement.value.slice(-2), 10) || 0) % 24,
                        t = (parseInt(n.minuteElement.value, 10) || 0) % 60,
                        i = void 0 !== n.secondElement ? (parseInt(n.secondElement.value, 10) || 0) % 60 : 0; var a, r;
                    void 0 !== n.amPM && (a = e, r = n.amPM.textContent, e = a % 12 + 12 * l(r === n.l10n.amPM[1])); const o = void 0 !== n.config.minTime || n.config.minDate && n.minDateHasTime && n.latestSelectedDateObj && 0 === k(n.latestSelectedDateObj, n.config.minDate, !0); if (void 0 !== n.config.maxTime || n.config.maxDate && n.maxDateHasTime && n.latestSelectedDateObj && 0 === k(n.latestSelectedDateObj, n.config.maxDate, !0)) { const a = void 0 !== n.config.maxTime ? n.config.maxTime : n.config.maxDate;
                        e = Math.min(e, a.getHours()), e === a.getHours() && (t = Math.min(t, a.getMinutes())), t === a.getMinutes() && (i = Math.min(i, a.getSeconds())) } if (o) { const a = void 0 !== n.config.minTime ? n.config.minTime : n.config.minDate;
                        e = Math.max(e, a.getHours()), e === a.getHours() && t < a.getMinutes() && (t = a.getMinutes()), t === a.getMinutes() && (i = Math.max(i, a.getSeconds())) }
                    A(e, t, i) }

                function M(e) { const t = e || n.latestSelectedDateObj;
                    t && A(t.getHours(), t.getMinutes(), t.getSeconds()) }

                function A(e, t, i) { void 0 !== n.latestSelectedDateObj && n.latestSelectedDateObj.setHours(e % 24, t, i || 0, 0), n.hourElement && n.minuteElement && !n.isMobile && (n.hourElement.value = s(n.config.time_24hr ? e : (12 + e) % 12 + 12 * l(e % 12 == 0)), n.minuteElement.value = s(t), void 0 !== n.amPM && (n.amPM.textContent = n.l10n.amPM[l(e >= 12)]), void 0 !== n.secondElement && (n.secondElement.value = s(i))) }

                function D(e) { const t = g(e),
                        n = parseInt(t.value) + (e.delta || 0);
                    (n / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(n.toString())) && Q(n) }

                function O(e, t, i, a) { return t instanceof Array ? t.forEach((t => O(e, t, i, a))) : e instanceof Array ? e.forEach((e => O(e, t, i, a))) : (e.addEventListener(t, i, a), void n._handlers.push({ remove: () => e.removeEventListener(t, i) })) }

                function P() { he("onChange") }

                function $(e, t) { const i = void 0 !== e ? n.parseDate(e) : n.latestSelectedDateObj || (n.config.minDate && n.config.minDate > n.now ? n.config.minDate : n.config.maxDate && n.config.maxDate < n.now ? n.config.maxDate : n.now),
                        a = n.currentYear,
                        r = n.currentMonth; try { void 0 !== i && (n.currentYear = i.getFullYear(), n.currentMonth = i.getMonth()) } catch (e) { e.message = "Invalid date supplied: " + i, n.config.errorHandler(e) }
                    t && n.currentYear !== a && (he("onYearChange"), B()), !t || n.currentYear === a && n.currentMonth === r || he("onMonthChange"), n.redraw() }

                function L(e) { const t = g(e);~t.className.indexOf("arrow") && z(e, t.classList.contains("arrowUp") ? 1 : -1) }

                function z(e, t, n) { const i = e && g(e),
                        a = n || i && i.parentNode && i.parentNode.firstChild,
                        r = fe("increment");
                    r.delta = t, a && a.dispatchEvent(r) }

                function _(e, t, i, a) { const r = K(t, !0),
                        o = p("span", "flatpickr-day " + e, t.getDate().toString()); return o.dateObj = t, o.$i = a, o.setAttribute("aria-label", n.formatDate(t, n.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === k(t, n.now) && (n.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), r ? (o.tabIndex = -1, me(t) && (o.classList.add("selected"), n.selectedDateElem = o, "range" === n.config.mode && (d(o, "startRange", n.selectedDates[0] && 0 === k(t, n.selectedDates[0], !0)), d(o, "endRange", n.selectedDates[1] && 0 === k(t, n.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), "range" === n.config.mode && function(e) { return !("range" !== n.config.mode || n.selectedDates.length < 2) && (k(e, n.selectedDates[0]) >= 0 && k(e, n.selectedDates[1]) <= 0) }(t) && !me(t) && o.classList.add("inRange"), n.weekNumbers && 1 === n.config.showMonths && "prevMonthDay" !== e && i % 7 == 1 && n.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + n.config.getWeek(t) + "</span>"), he("onDayCreate", o), o }

                function N(e) { e.focus(), "range" === n.config.mode && te(e) }

                function F(e) { const t = e > 0 ? 0 : n.config.showMonths - 1,
                        i = e > 0 ? n.config.showMonths : -1; for (let a = t; a != i; a += e) { const t = n.daysContainer.children[a],
                            i = e > 0 ? 0 : t.children.length - 1,
                            r = e > 0 ? t.children.length : -1; for (let n = i; n != r; n += e) { const e = t.children[n]; if (-1 === e.className.indexOf("hidden") && K(e.dateObj)) return e } } }

                function H(e, t) { const i = Z(document.activeElement || document.body),
                        a = void 0 !== e ? e : i ? document.activeElement : void 0 !== n.selectedDateElem && Z(n.selectedDateElem) ? n.selectedDateElem : void 0 !== n.todayDateElem && Z(n.todayDateElem) ? n.todayDateElem : F(t > 0 ? 1 : -1);
                    void 0 === a ? n._input.focus() : i ? function(e, t) { const i = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : n.currentMonth,
                            a = t > 0 ? n.config.showMonths : -1,
                            r = t > 0 ? 1 : -1; for (let o = i - n.currentMonth; o != a; o += r) { const a = n.daysContainer.children[o],
                                s = i - n.currentMonth === o ? e.$i + t : t < 0 ? a.children.length - 1 : 0,
                                l = a.children.length; for (let n = s; n >= 0 && n < l && n != (t > 0 ? l : -1); n += r) { const i = a.children[n]; if (-1 === i.className.indexOf("hidden") && K(i.dateObj) && Math.abs(e.$i - n) >= Math.abs(t)) return N(i) } }
                        n.changeMonth(r), H(F(r), 0) }(a, t) : N(a) }

                function j(e, t) { const i = (new Date(e, t, 1).getDay() - n.l10n.firstDayOfWeek + 7) % 7,
                        a = n.utils.getDaysInMonth((t - 1 + 12) % 12, e),
                        r = n.utils.getDaysInMonth(t, e),
                        o = window.document.createDocumentFragment(),
                        s = n.config.showMonths > 1,
                        l = s ? "prevMonthDay hidden" : "prevMonthDay",
                        c = s ? "nextMonthDay hidden" : "nextMonthDay"; let u = a + 1 - i,
                        d = 0; for (; u <= a; u++, d++) o.appendChild(_(l, new Date(e, t - 1, u), u, d)); for (u = 1; u <= r; u++, d++) o.appendChild(_("", new Date(e, t, u), u, d)); for (let a = r + 1; a <= 42 - i && (1 === n.config.showMonths || d % 7 != 0); a++, d++) o.appendChild(_(c, new Date(e, t + 1, a % r), a, d)); const h = p("div", "dayContainer"); return h.appendChild(o), h }

                function R() { if (void 0 === n.daysContainer) return;
                    h(n.daysContainer), n.weekNumbers && h(n.weekNumbers); const e = document.createDocumentFragment(); for (let t = 0; t < n.config.showMonths; t++) { const i = new Date(n.currentYear, n.currentMonth, 1);
                        i.setMonth(n.currentMonth + t), e.appendChild(j(i.getFullYear(), i.getMonth())) }
                    n.daysContainer.appendChild(e), n.days = n.daysContainer.firstChild, "range" === n.config.mode && 1 === n.selectedDates.length && te() }

                function B() { if (n.config.showMonths > 1 || "dropdown" !== n.config.monthSelectorType) return; const e = function(e) { return !(void 0 !== n.config.minDate && n.currentYear === n.config.minDate.getFullYear() && e < n.config.minDate.getMonth()) && !(void 0 !== n.config.maxDate && n.currentYear === n.config.maxDate.getFullYear() && e > n.config.maxDate.getMonth()) };
                    n.monthsDropdownContainer.tabIndex = -1, n.monthsDropdownContainer.innerHTML = ""; for (let t = 0; t < 12; t++) { if (!e(t)) continue; const i = p("option", "flatpickr-monthDropdown-month");
                        i.value = new Date(n.currentYear, t).getMonth().toString(), i.textContent = w(t, n.config.shorthandCurrentMonth, n.l10n), i.tabIndex = -1, n.currentMonth === t && (i.selected = !0), n.monthsDropdownContainer.appendChild(i) } }

                function U() { const e = p("div", "flatpickr-month"),
                        t = window.document.createDocumentFragment(); let i;
                    n.config.showMonths > 1 || "static" === n.config.monthSelectorType ? i = p("span", "cur-month") : (n.monthsDropdownContainer = p("select", "flatpickr-monthDropdown-months"), n.monthsDropdownContainer.setAttribute("aria-label", n.l10n.monthAriaLabel), O(n.monthsDropdownContainer, "change", (e => { const t = g(e),
                            i = parseInt(t.value, 10);
                        n.changeMonth(i - n.currentMonth), he("onMonthChange") })), B(), i = n.monthsDropdownContainer); const a = m("cur-year", { tabindex: "-1" }),
                        r = a.getElementsByTagName("input")[0];
                    r.setAttribute("aria-label", n.l10n.yearAriaLabel), n.config.minDate && r.setAttribute("min", n.config.minDate.getFullYear().toString()), n.config.maxDate && (r.setAttribute("max", n.config.maxDate.getFullYear().toString()), r.disabled = !!n.config.minDate && n.config.minDate.getFullYear() === n.config.maxDate.getFullYear()); const o = p("div", "flatpickr-current-month"); return o.appendChild(i), o.appendChild(a), t.appendChild(o), e.appendChild(t), { container: e, yearElement: r, monthElement: i } }

                function q() { h(n.monthNav), n.monthNav.appendChild(n.prevMonthNav), n.config.showMonths && (n.yearElements = [], n.monthElements = []); for (let e = n.config.showMonths; e--;) { const e = U();
                        n.yearElements.push(e.yearElement), n.monthElements.push(e.monthElement), n.monthNav.appendChild(e.container) }
                    n.monthNav.appendChild(n.nextMonthNav) }

                function W() { n.weekdayContainer ? h(n.weekdayContainer) : n.weekdayContainer = p("div", "flatpickr-weekdays"); for (let e = n.config.showMonths; e--;) { const e = p("div", "flatpickr-weekdaycontainer");
                        n.weekdayContainer.appendChild(e) } return Y(), n.weekdayContainer }

                function Y() { if (!n.weekdayContainer) return; const e = n.l10n.firstDayOfWeek; let t = [...n.l10n.weekdays.shorthand];
                    e > 0 && e < t.length && (t = [...t.splice(e, t.length), ...t.splice(0, e)]); for (let e = n.config.showMonths; e--;) n.weekdayContainer.children[e].innerHTML = `\n      <span class='flatpickr-weekday'>\n        ${t.join("</span><span class='flatpickr-weekday'>")}\n      </span>\n      ` }

                function V(e, t = !0) { const i = t ? e : e - n.currentMonth;
                    i < 0 && !0 === n._hidePrevMonthArrow || i > 0 && !0 === n._hideNextMonthArrow || (n.currentMonth += i, (n.currentMonth < 0 || n.currentMonth > 11) && (n.currentYear += n.currentMonth > 11 ? 1 : -1, n.currentMonth = (n.currentMonth + 12) % 12, he("onYearChange"), B()), R(), he("onMonthChange"), ge()) }

                function G(e) { return !(!n.config.appendTo || !n.config.appendTo.contains(e)) || n.calendarContainer.contains(e) }

                function X(e) { if (n.isOpen && !n.config.inline) { const t = g(e),
                            i = G(t),
                            a = t === n.input || t === n.altInput || n.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(n.input) || ~e.path.indexOf(n.altInput)),
                            r = "blur" === e.type ? a && e.relatedTarget && !G(e.relatedTarget) : !a && !i && !G(e.relatedTarget),
                            o = !n.config.ignoredFocusElements.some((e => e.contains(t)));
                        r && o && (void 0 !== n.timeContainer && void 0 !== n.minuteElement && void 0 !== n.hourElement && "" !== n.input.value && void 0 !== n.input.value && y(), n.close(), n.config && "range" === n.config.mode && 1 === n.selectedDates.length && (n.clear(!1), n.redraw())) } }

                function Q(e) { if (!e || n.config.minDate && e < n.config.minDate.getFullYear() || n.config.maxDate && e > n.config.maxDate.getFullYear()) return; const t = e,
                        i = n.currentYear !== t;
                    n.currentYear = t || n.currentYear, n.config.maxDate && n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth = Math.min(n.config.maxDate.getMonth(), n.currentMonth) : n.config.minDate && n.currentYear === n.config.minDate.getFullYear() && (n.currentMonth = Math.max(n.config.minDate.getMonth(), n.currentMonth)), i && (n.redraw(), he("onYearChange"), B()) }

                function K(e, t = !0) { var i; const a = n.parseDate(e, void 0, t); if (n.config.minDate && a && k(a, n.config.minDate, void 0 !== t ? t : !n.minDateHasTime) < 0 || n.config.maxDate && a && k(a, n.config.maxDate, void 0 !== t ? t : !n.maxDateHasTime) > 0) return !1; if (!n.config.enable && 0 === n.config.disable.length) return !0; if (void 0 === a) return !1; const r = !!n.config.enable,
                        o = null !== (i = n.config.enable) && void 0 !== i ? i : n.config.disable; for (let e, t = 0; t < o.length; t++) { if (e = o[t], "function" == typeof e && e(a)) return r; if (e instanceof Date && void 0 !== a && e.getTime() === a.getTime()) return r; if ("string" == typeof e) { const t = n.parseDate(e, void 0, !0); return t && t.getTime() === a.getTime() ? r : !r } if ("object" == typeof e && void 0 !== a && e.from && e.to && a.getTime() >= e.from.getTime() && a.getTime() <= e.to.getTime()) return r } return !r }

                function Z(e) { return void 0 !== n.daysContainer && (-1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && n.daysContainer.contains(e)) }

                function J(e) {!(e.target === n._input) || !(n.selectedDates.length > 0 || n._input.value.length > 0) || e.relatedTarget && G(e.relatedTarget) || n.setDate(n._input.value, !0, e.target === n.altInput ? n.config.altFormat : n.config.dateFormat) }

                function ee(t) { const i = g(t),
                        a = n.config.wrap ? e.contains(i) : i === n._input,
                        r = n.config.allowInput,
                        o = n.isOpen && (!r || !a),
                        s = n.config.inline && a && !r; if (13 === t.keyCode && a) { if (r) return n.setDate(n._input.value, !0, i === n.altInput ? n.config.altFormat : n.config.dateFormat), i.blur();
                        n.open() } else if (G(i) || o || s) { const e = !!n.timeContainer && n.timeContainer.contains(i); switch (t.keyCode) {
                            case 13:
                                e ? (t.preventDefault(), y(), le()) : ce(t); break;
                            case 27:
                                t.preventDefault(), le(); break;
                            case 8:
                            case 46:
                                a && !n.config.allowInput && (t.preventDefault(), n.clear()); break;
                            case 37:
                            case 39:
                                if (e || a) n.hourElement && n.hourElement.focus();
                                else if (t.preventDefault(), void 0 !== n.daysContainer && (!1 === r || document.activeElement && Z(document.activeElement))) { const e = 39 === t.keyCode ? 1 : -1;
                                    t.ctrlKey ? (t.stopPropagation(), V(e), H(F(1), 0)) : H(void 0, e) } break;
                            case 38:
                            case 40:
                                t.preventDefault(); const o = 40 === t.keyCode ? 1 : -1;
                                n.daysContainer && void 0 !== i.$i || i === n.input || i === n.altInput ? t.ctrlKey ? (t.stopPropagation(), Q(n.currentYear - o), H(F(1), 0)) : e || H(void 0, 7 * o) : i === n.currentYearElement ? Q(n.currentYear - o) : n.config.enableTime && (!e && n.hourElement && n.hourElement.focus(), y(t), n._debouncedChange()); break;
                            case 9:
                                if (e) { const e = [n.hourElement, n.minuteElement, n.secondElement, n.amPM].concat(n.pluginElements).filter((e => e)),
                                        a = e.indexOf(i); if (-1 !== a) { const i = e[a + (t.shiftKey ? -1 : 1)];
                                        t.preventDefault(), (i || n._input).focus() } } else !n.config.noCalendar && n.daysContainer && n.daysContainer.contains(i) && t.shiftKey && (t.preventDefault(), n._input.focus()) } } if (void 0 !== n.amPM && i === n.amPM) switch (t.key) {
                        case n.l10n.amPM[0].charAt(0):
                        case n.l10n.amPM[0].charAt(0).toLowerCase():
                            n.amPM.textContent = n.l10n.amPM[0], x(), we(); break;
                        case n.l10n.amPM[1].charAt(0):
                        case n.l10n.amPM[1].charAt(0).toLowerCase():
                            n.amPM.textContent = n.l10n.amPM[1], x(), we() }(a || G(i)) && he("onKeyDown", t) }

                function te(e) { if (1 !== n.selectedDates.length || e && (!e.classList.contains("flatpickr-day") || e.classList.contains("flatpickr-disabled"))) return; const t = e ? e.dateObj.getTime() : n.days.firstElementChild.dateObj.getTime(),
                        i = n.parseDate(n.selectedDates[0], void 0, !0).getTime(),
                        a = Math.min(t, n.selectedDates[0].getTime()),
                        r = Math.max(t, n.selectedDates[0].getTime()); let o = !1,
                        s = 0,
                        l = 0; for (let e = a; e < r; e += S) K(new Date(e), !0) || (o = o || e > a && e < r, e < i && (!s || e > s) ? s = e : e > i && (!l || e < l) && (l = e)); for (let a = 0; a < n.config.showMonths; a++) { const r = n.daysContainer.children[a]; for (let a = 0, p = r.children.length; a < p; a++) { const p = r.children[a],
                                h = p.dateObj.getTime(),
                                f = s > 0 && h < s || l > 0 && h > l;
                            f ? (p.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach((e => { p.classList.remove(e) }))) : o && !f || (["startRange", "inRange", "endRange", "notAllowed"].forEach((e => { p.classList.remove(e) })), void 0 !== e && (e.classList.add(t <= n.selectedDates[0].getTime() ? "startRange" : "endRange"), i < t && h === i ? p.classList.add("startRange") : i > t && h === i && p.classList.add("endRange"), h >= s && (0 === l || h <= l) && (u = i, d = t, (c = h) > Math.min(u, d) && c < Math.max(u, d)) && p.classList.add("inRange"))) } } var c, u, d }

                function ne() {!n.isOpen || n.config.static || n.config.inline || oe() }

                function ie(e) { return t => { const i = n.config[`_${e}Date`] = n.parseDate(t, n.config.dateFormat),
                            a = n.config[`_${"min"===e?"max":"min"}Date`];
                        void 0 !== i && (n["min" === e ? "minDateHasTime" : "maxDateHasTime"] = i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0), n.selectedDates && (n.selectedDates = n.selectedDates.filter((e => K(e))), n.selectedDates.length || "min" !== e || M(i), we()), n.daysContainer && (se(), void 0 !== i ? n.currentYearElement[e] = i.getFullYear().toString() : n.currentYearElement.removeAttribute(e), n.currentYearElement.disabled = !!a && void 0 !== i && a.getFullYear() === i.getFullYear()) } }

                function ae() { return n.config.wrap ? e.querySelector("[data-input]") : e }

                function re() { "object" != typeof n.config.locale && void 0 === I.l10ns[n.config.locale] && n.config.errorHandler(new Error(`flatpickr: invalid locale ${n.config.locale}`)), n.l10n = Object.assign(Object.assign({}, I.l10ns.default), "object" == typeof n.config.locale ? n.config.locale : "default" !== n.config.locale ? I.l10ns[n.config.locale] : void 0), b.K = `(${n.l10n.amPM[0]}|${n.l10n.amPM[1]}|${n.l10n.amPM[0].toLowerCase()}|${n.l10n.amPM[1].toLowerCase()})`;
                    void 0 === Object.assign(Object.assign({}, t), JSON.parse(JSON.stringify(e.dataset || {}))).time_24hr && void 0 === I.defaultConfig.time_24hr && (n.config.time_24hr = n.l10n.time_24hr), n.formatDate = C(n), n.parseDate = E({ config: n.config, l10n: n.l10n }) }

                function oe(e) { if ("function" == typeof n.config.position) return void n.config.position(n, e); if (void 0 === n.calendarContainer) return;
                    he("onPreCalendarPosition"); const t = e || n._positionElement,
                        i = Array.prototype.reduce.call(n.calendarContainer.children, ((e, t) => e + t.offsetHeight), 0),
                        a = n.calendarContainer.offsetWidth,
                        r = n.config.position.split(" "),
                        o = r[0],
                        s = r.length > 1 ? r[1] : null,
                        l = t.getBoundingClientRect(),
                        c = window.innerHeight - l.bottom,
                        u = "above" === o || "below" !== o && c < i && l.top > i,
                        p = window.pageYOffset + l.top + (u ? -i - 2 : t.offsetHeight + 2); if (d(n.calendarContainer, "arrowTop", !u), d(n.calendarContainer, "arrowBottom", u), n.config.inline) return; let h = window.pageXOffset + l.left,
                        f = !1,
                        m = !1; "center" === s ? (h -= (a - l.width) / 2, f = !0) : "right" === s && (h -= a - l.width, m = !0), d(n.calendarContainer, "arrowLeft", !f && !m), d(n.calendarContainer, "arrowCenter", f), d(n.calendarContainer, "arrowRight", m); const g = window.document.body.offsetWidth - (window.pageXOffset + l.right),
                        v = h + a > window.document.body.offsetWidth,
                        w = g + a > window.document.body.offsetWidth; if (d(n.calendarContainer, "rightMost", v), !n.config.static)
                        if (n.calendarContainer.style.top = `${p}px`, v)
                            if (w) { const e = function() { let e = null; for (let t = 0; t < document.styleSheets.length; t++) { const n = document.styleSheets[t]; try { n.cssRules } catch (e) { continue }
                                        e = n; break } return null != e ? e : function() { const e = document.createElement("style"); return document.head.appendChild(e), e.sheet }() }(); if (void 0 === e) return; const t = window.document.body.offsetWidth,
                                    i = Math.max(0, t / 2 - a / 2),
                                    r = ".flatpickr-calendar.centerMost:before",
                                    o = ".flatpickr-calendar.centerMost:after",
                                    s = e.cssRules.length,
                                    c = `{left:${l.left}px;right:auto;}`;
                                d(n.calendarContainer, "rightMost", !1), d(n.calendarContainer, "centerMost", !0), e.insertRule(`${r},${o}${c}`, s), n.calendarContainer.style.left = `${i}px`, n.calendarContainer.style.right = "auto" } else n.calendarContainer.style.left = "auto", n.calendarContainer.style.right = `${g}px`;
                    else n.calendarContainer.style.left = `${h}px`, n.calendarContainer.style.right = "auto" }

                function se() { n.config.noCalendar || n.isMobile || (B(), ge(), R()) }

                function le() { n._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(n.close, 0) : n.close() }

                function ce(e) { e.preventDefault(), e.stopPropagation(); const t = f(g(e), (e => e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed"))); if (void 0 === t) return; const i = t,
                        a = n.latestSelectedDateObj = new Date(i.dateObj.getTime()),
                        r = (a.getMonth() < n.currentMonth || a.getMonth() > n.currentMonth + n.config.showMonths - 1) && "range" !== n.config.mode; if (n.selectedDateElem = i, "single" === n.config.mode) n.selectedDates = [a];
                    else if ("multiple" === n.config.mode) { const e = me(a);
                        e ? n.selectedDates.splice(parseInt(e), 1) : n.selectedDates.push(a) } else "range" === n.config.mode && (2 === n.selectedDates.length && n.clear(!1, !1), n.latestSelectedDateObj = a, n.selectedDates.push(a), 0 !== k(a, n.selectedDates[0], !0) && n.selectedDates.sort(((e, t) => e.getTime() - t.getTime()))); if (x(), r) { const e = n.currentYear !== a.getFullYear();
                        n.currentYear = a.getFullYear(), n.currentMonth = a.getMonth(), e && (he("onYearChange"), B()), he("onMonthChange") } if (ge(), R(), we(), r || "range" === n.config.mode || 1 !== n.config.showMonths ? void 0 !== n.selectedDateElem && void 0 === n.hourElement && n.selectedDateElem && n.selectedDateElem.focus() : N(i), void 0 !== n.hourElement && void 0 !== n.hourElement && n.hourElement.focus(), n.config.closeOnSelect) { const e = "single" === n.config.mode && !n.config.enableTime,
                            t = "range" === n.config.mode && 2 === n.selectedDates.length && !n.config.enableTime;
                        (e || t) && le() }
                    P() }
                n.parseDate = E({ config: n.config, l10n: n.l10n }), n._handlers = [], n.pluginElements = [], n.loadedPlugins = [], n._bind = O, n._setHoursFromDate = M, n._positionCalendar = oe, n.changeMonth = V, n.changeYear = Q, n.clear = function(e = !0, t = !0) { n.input.value = "", void 0 !== n.altInput && (n.altInput.value = "");
                    void 0 !== n.mobileInput && (n.mobileInput.value = "");
                    n.selectedDates = [], n.latestSelectedDateObj = void 0, !0 === t && (n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth()); if (!0 === n.config.enableTime) { const { hours: e, minutes: t, seconds: i } = T(n.config);
                        A(e, t, i) }
                    n.redraw(), e && he("onChange") }, n.close = function() { n.isOpen = !1, n.isMobile || (void 0 !== n.calendarContainer && n.calendarContainer.classList.remove("open"), void 0 !== n._input && n._input.classList.remove("active"));
                    he("onClose") }, n._createElement = p, n.destroy = function() { void 0 !== n.config && he("onDestroy"); for (let e = n._handlers.length; e--;) n._handlers[e].remove(); if (n._handlers = [], n.mobileInput) n.mobileInput.parentNode && n.mobileInput.parentNode.removeChild(n.mobileInput), n.mobileInput = void 0;
                    else if (n.calendarContainer && n.calendarContainer.parentNode)
                        if (n.config.static && n.calendarContainer.parentNode) { const e = n.calendarContainer.parentNode; if (e.lastChild && e.removeChild(e.lastChild), e.parentNode) { for (; e.firstChild;) e.parentNode.insertBefore(e.firstChild, e);
                                e.parentNode.removeChild(e) } } else n.calendarContainer.parentNode.removeChild(n.calendarContainer);
                    n.altInput && (n.input.type = "text", n.altInput.parentNode && n.altInput.parentNode.removeChild(n.altInput), delete n.altInput);
                    n.input && (n.input.type = n.input._type, n.input.classList.remove("flatpickr-input"), n.input.removeAttribute("readonly"));
                    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((e => { try { delete n[e] } catch (e) {} })) }, n.isEnabled = K, n.jumpToDate = $, n.open = function(e, t = n._positionElement) { if (!0 === n.isMobile) { if (e) { e.preventDefault(); const t = g(e);
                            t && t.blur() } return void 0 !== n.mobileInput && (n.mobileInput.focus(), n.mobileInput.click()), void he("onOpen") } if (n._input.disabled || n.config.inline) return; const i = n.isOpen;
                    n.isOpen = !0, i || (n.calendarContainer.classList.add("open"), n._input.classList.add("active"), he("onOpen"), oe(t));!0 === n.config.enableTime && !0 === n.config.noCalendar && (!1 !== n.config.allowInput || void 0 !== e && n.timeContainer.contains(e.relatedTarget) || setTimeout((() => n.hourElement.select()), 50)) }, n.redraw = se, n.set = function(e, t) { if (null !== e && "object" == typeof e) { Object.assign(n.config, e); for (const t in e) void 0 !== ue[t] && ue[t].forEach((e => e())) } else n.config[e] = t, void 0 !== ue[e] ? ue[e].forEach((e => e())) : i.indexOf(e) > -1 && (n.config[e] = u(t));
                    n.redraw(), we(!0) }, n.setDate = function(e, t = !1, i = n.config.dateFormat) { if (0 !== e && !e || e instanceof Array && 0 === e.length) return n.clear(t);
                    de(e, i), n.latestSelectedDateObj = n.selectedDates[n.selectedDates.length - 1], n.redraw(), $(void 0, t), M(), 0 === n.selectedDates.length && n.clear(!1);
                    we(t), t && he("onChange") }, n.toggle = function(e) { if (!0 === n.isOpen) return n.close();
                    n.open(e) }; const ue = { locale: [re, Y], showMonths: [q, v, W], minDate: [$], maxDate: [$], clickOpens: [() => {!0 === n.config.clickOpens ? (O(n._input, "focus", n.open), O(n._input, "click", n.open)) : (n._input.removeEventListener("focus", n.open), n._input.removeEventListener("click", n.open)) }] };

                function de(e, t) { let i = []; if (e instanceof Array) i = e.map((e => n.parseDate(e, t)));
                    else if (e instanceof Date || "number" == typeof e) i = [n.parseDate(e, t)];
                    else if ("string" == typeof e) switch (n.config.mode) {
                        case "single":
                        case "time":
                            i = [n.parseDate(e, t)]; break;
                        case "multiple":
                            i = e.split(n.config.conjunction).map((e => n.parseDate(e, t))); break;
                        case "range":
                            i = e.split(n.l10n.rangeSeparator).map((e => n.parseDate(e, t))) } else n.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(e)}`));
                    n.selectedDates = n.config.allowInvalidPreload ? i : i.filter((e => e instanceof Date && K(e, !1))), "range" === n.config.mode && n.selectedDates.sort(((e, t) => e.getTime() - t.getTime())) }

                function pe(e) { return e.slice().map((e => "string" == typeof e || "number" == typeof e || e instanceof Date ? n.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? { from: n.parseDate(e.from, void 0), to: n.parseDate(e.to, void 0) } : e)).filter((e => e)) }

                function he(e, t) { if (void 0 === n.config) return; const i = n.config[e]; if (void 0 !== i && i.length > 0)
                        for (let e = 0; i[e] && e < i.length; e++) i[e](n.selectedDates, n.input.value, n, t); "onChange" === e && (n.input.dispatchEvent(fe("change")), n.input.dispatchEvent(fe("input"))) }

                function fe(e) { const t = document.createEvent("Event"); return t.initEvent(e, !0, !0), t }

                function me(e) { for (let t = 0; t < n.selectedDates.length; t++)
                        if (0 === k(n.selectedDates[t], e)) return "" + t;
                    return !1 }

                function ge() { n.config.noCalendar || n.isMobile || !n.monthNav || (n.yearElements.forEach(((e, t) => { const i = new Date(n.currentYear, n.currentMonth, 1);
                        i.setMonth(n.currentMonth + t), n.config.showMonths > 1 || "static" === n.config.monthSelectorType ? n.monthElements[t].textContent = w(i.getMonth(), n.config.shorthandCurrentMonth, n.l10n) + " " : n.monthsDropdownContainer.value = i.getMonth().toString(), e.value = i.getFullYear().toString() })), n._hidePrevMonthArrow = void 0 !== n.config.minDate && (n.currentYear === n.config.minDate.getFullYear() ? n.currentMonth <= n.config.minDate.getMonth() : n.currentYear < n.config.minDate.getFullYear()), n._hideNextMonthArrow = void 0 !== n.config.maxDate && (n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth + 1 > n.config.maxDate.getMonth() : n.currentYear > n.config.maxDate.getFullYear())) }

                function ve(e) { return n.selectedDates.map((t => n.formatDate(t, e))).filter(((e, t, i) => "range" !== n.config.mode || n.config.enableTime || i.indexOf(e) === t)).join("range" !== n.config.mode ? n.config.conjunction : n.l10n.rangeSeparator) }

                function we(e = !0) { void 0 !== n.mobileInput && n.mobileFormatStr && (n.mobileInput.value = void 0 !== n.latestSelectedDateObj ? n.formatDate(n.latestSelectedDateObj, n.mobileFormatStr) : ""), n.input.value = ve(n.config.dateFormat), void 0 !== n.altInput && (n.altInput.value = ve(n.config.altFormat)), !1 !== e && he("onValueUpdate") }

                function ye(e) { const t = g(e),
                        i = n.prevMonthNav.contains(t),
                        a = n.nextMonthNav.contains(t);
                    i || a ? V(i ? -1 : 1) : n.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? n.changeYear(n.currentYear + 1) : t.classList.contains("arrowDown") && n.changeYear(n.currentYear - 1) } return function() { n.element = n.input = e, n.isOpen = !1,
                        function() { const o = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                                s = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(e.dataset || {}))), t),
                                l = {};
                            n.config.parseDate = s.parseDate, n.config.formatDate = s.formatDate, Object.defineProperty(n.config, "enable", { get: () => n.config._enable, set: e => { n.config._enable = pe(e) } }), Object.defineProperty(n.config, "disable", { get: () => n.config._disable, set: e => { n.config._disable = pe(e) } }); const c = "time" === s.mode; if (!s.dateFormat && (s.enableTime || c)) { const e = I.defaultConfig.dateFormat || a.dateFormat;
                                l.dateFormat = s.noCalendar || c ? "H:i" + (s.enableSeconds ? ":S" : "") : e + " H:i" + (s.enableSeconds ? ":S" : "") } if (s.altInput && (s.enableTime || c) && !s.altFormat) { const e = I.defaultConfig.altFormat || a.altFormat;
                                l.altFormat = s.noCalendar || c ? "h:i" + (s.enableSeconds ? ":S K" : " K") : e + ` h:i${s.enableSeconds?":S":""} K` }
                            Object.defineProperty(n.config, "minDate", { get: () => n.config._minDate, set: ie("min") }), Object.defineProperty(n.config, "maxDate", { get: () => n.config._maxDate, set: ie("max") }); const d = e => t => { n.config["min" === e ? "_minTime" : "_maxTime"] = n.parseDate(t, "H:i:S") };
                            Object.defineProperty(n.config, "minTime", { get: () => n.config._minTime, set: d("min") }), Object.defineProperty(n.config, "maxTime", { get: () => n.config._maxTime, set: d("max") }), "time" === s.mode && (n.config.noCalendar = !0, n.config.enableTime = !0);
                            Object.assign(n.config, l, s); for (let e = 0; e < o.length; e++) n.config[o[e]] = !0 === n.config[o[e]] || "true" === n.config[o[e]];
                            i.filter((e => void 0 !== n.config[e])).forEach((e => { n.config[e] = u(n.config[e] || []).map(r) })), n.isMobile = !n.config.disableMobile && !n.config.inline && "single" === n.config.mode && !n.config.disable.length && !n.config.enable && !n.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); for (let e = 0; e < n.config.plugins.length; e++) { const t = n.config.plugins[e](n) || {}; for (const e in t) i.indexOf(e) > -1 ? n.config[e] = u(t[e]).map(r).concat(n.config[e]) : void 0 === s[e] && (n.config[e] = t[e]) }
                            s.altInputClass || (n.config.altInputClass = ae().className + " " + n.config.altInputClass);
                            he("onParseConfig") }(), re(),
                        function() { if (n.input = ae(), !n.input) return void n.config.errorHandler(new Error("Invalid input element specified"));
                            n.input._type = n.input.type, n.input.type = "text", n.input.classList.add("flatpickr-input"), n._input = n.input, n.config.altInput && (n.altInput = p(n.input.nodeName, n.config.altInputClass), n._input = n.altInput, n.altInput.placeholder = n.input.placeholder, n.altInput.disabled = n.input.disabled, n.altInput.required = n.input.required, n.altInput.tabIndex = n.input.tabIndex, n.altInput.type = "text", n.input.setAttribute("type", "hidden"), !n.config.static && n.input.parentNode && n.input.parentNode.insertBefore(n.altInput, n.input.nextSibling));
                            n.config.allowInput || n._input.setAttribute("readonly", "readonly");
                            n._positionElement = n.config.positionElement || n._input }(),
                        function() { n.selectedDates = [], n.now = n.parseDate(n.config.now) || new Date; const e = n.config.defaultDate || ("INPUT" !== n.input.nodeName && "TEXTAREA" !== n.input.nodeName || !n.input.placeholder || n.input.value !== n.input.placeholder ? n.input.value : null);
                            e && de(e, n.config.dateFormat);
                            n._initialDate = n.selectedDates.length > 0 ? n.selectedDates[0] : n.config.minDate && n.config.minDate.getTime() > n.now.getTime() ? n.config.minDate : n.config.maxDate && n.config.maxDate.getTime() < n.now.getTime() ? n.config.maxDate : n.now, n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth(), n.selectedDates.length > 0 && (n.latestSelectedDateObj = n.selectedDates[0]);
                            void 0 !== n.config.minTime && (n.config.minTime = n.parseDate(n.config.minTime, "H:i"));
                            void 0 !== n.config.maxTime && (n.config.maxTime = n.parseDate(n.config.maxTime, "H:i"));
                            n.minDateHasTime = !!n.config.minDate && (n.config.minDate.getHours() > 0 || n.config.minDate.getMinutes() > 0 || n.config.minDate.getSeconds() > 0), n.maxDateHasTime = !!n.config.maxDate && (n.config.maxDate.getHours() > 0 || n.config.maxDate.getMinutes() > 0 || n.config.maxDate.getSeconds() > 0) }(), n.utils = { getDaysInMonth: (e = n.currentMonth, t = n.currentYear) => 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : n.l10n.daysInMonth[e] }, n.isMobile || function() { const e = window.document.createDocumentFragment(); if (n.calendarContainer = p("div", "flatpickr-calendar"), n.calendarContainer.tabIndex = -1, !n.config.noCalendar) { if (e.appendChild((n.monthNav = p("div", "flatpickr-months"), n.yearElements = [], n.monthElements = [], n.prevMonthNav = p("span", "flatpickr-prev-month"), n.prevMonthNav.innerHTML = n.config.prevArrow, n.nextMonthNav = p("span", "flatpickr-next-month"), n.nextMonthNav.innerHTML = n.config.nextArrow, q(), Object.defineProperty(n, "_hidePrevMonthArrow", { get: () => n.__hidePrevMonthArrow, set(e) { n.__hidePrevMonthArrow !== e && (d(n.prevMonthNav, "flatpickr-disabled", e), n.__hidePrevMonthArrow = e) } }), Object.defineProperty(n, "_hideNextMonthArrow", { get: () => n.__hideNextMonthArrow, set(e) { n.__hideNextMonthArrow !== e && (d(n.nextMonthNav, "flatpickr-disabled", e), n.__hideNextMonthArrow = e) } }), n.currentYearElement = n.yearElements[0], ge(), n.monthNav)), n.innerContainer = p("div", "flatpickr-innerContainer"), n.config.weekNumbers) { const { weekWrapper: e, weekNumbers: t } = function() { n.calendarContainer.classList.add("hasWeeks"); const e = p("div", "flatpickr-weekwrapper");
                                        e.appendChild(p("span", "flatpickr-weekday", n.l10n.weekAbbreviation)); const t = p("div", "flatpickr-weeks"); return e.appendChild(t), { weekWrapper: e, weekNumbers: t } }();
                                    n.innerContainer.appendChild(e), n.weekNumbers = t, n.weekWrapper = e }
                                n.rContainer = p("div", "flatpickr-rContainer"), n.rContainer.appendChild(W()), n.daysContainer || (n.daysContainer = p("div", "flatpickr-days"), n.daysContainer.tabIndex = -1), R(), n.rContainer.appendChild(n.daysContainer), n.innerContainer.appendChild(n.rContainer), e.appendChild(n.innerContainer) }
                            n.config.enableTime && e.appendChild(function() { n.calendarContainer.classList.add("hasTime"), n.config.noCalendar && n.calendarContainer.classList.add("noCalendar"); const e = T(n.config);
                                n.timeContainer = p("div", "flatpickr-time"), n.timeContainer.tabIndex = -1; const t = p("span", "flatpickr-time-separator", ":"),
                                    i = m("flatpickr-hour", { "aria-label": n.l10n.hourAriaLabel });
                                n.hourElement = i.getElementsByTagName("input")[0]; const a = m("flatpickr-minute", { "aria-label": n.l10n.minuteAriaLabel });
                                n.minuteElement = a.getElementsByTagName("input")[0], n.hourElement.tabIndex = n.minuteElement.tabIndex = -1, n.hourElement.value = s(n.latestSelectedDateObj ? n.latestSelectedDateObj.getHours() : n.config.time_24hr ? e.hours : function(e) { switch (e % 24) {
                                        case 0:
                                        case 12:
                                            return 12;
                                        default:
                                            return e % 12 } }(e.hours)), n.minuteElement.value = s(n.latestSelectedDateObj ? n.latestSelectedDateObj.getMinutes() : e.minutes), n.hourElement.setAttribute("step", n.config.hourIncrement.toString()), n.minuteElement.setAttribute("step", n.config.minuteIncrement.toString()), n.hourElement.setAttribute("min", n.config.time_24hr ? "0" : "1"), n.hourElement.setAttribute("max", n.config.time_24hr ? "23" : "12"), n.hourElement.setAttribute("maxlength", "2"), n.minuteElement.setAttribute("min", "0"), n.minuteElement.setAttribute("max", "59"), n.minuteElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(i), n.timeContainer.appendChild(t), n.timeContainer.appendChild(a), n.config.time_24hr && n.timeContainer.classList.add("time24hr"); if (n.config.enableSeconds) { n.timeContainer.classList.add("hasSeconds"); const t = m("flatpickr-second");
                                    n.secondElement = t.getElementsByTagName("input")[0], n.secondElement.value = s(n.latestSelectedDateObj ? n.latestSelectedDateObj.getSeconds() : e.seconds), n.secondElement.setAttribute("step", n.minuteElement.getAttribute("step")), n.secondElement.setAttribute("min", "0"), n.secondElement.setAttribute("max", "59"), n.secondElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(p("span", "flatpickr-time-separator", ":")), n.timeContainer.appendChild(t) }
                                n.config.time_24hr || (n.amPM = p("span", "flatpickr-am-pm", n.l10n.amPM[l((n.latestSelectedDateObj ? n.hourElement.value : n.config.defaultHour) > 11)]), n.amPM.title = n.l10n.toggleTitle, n.amPM.tabIndex = -1, n.timeContainer.appendChild(n.amPM)); return n.timeContainer }());
                            d(n.calendarContainer, "rangeMode", "range" === n.config.mode), d(n.calendarContainer, "animate", !0 === n.config.animate), d(n.calendarContainer, "multiMonth", n.config.showMonths > 1), n.calendarContainer.appendChild(e); const t = void 0 !== n.config.appendTo && void 0 !== n.config.appendTo.nodeType; if ((n.config.inline || n.config.static) && (n.calendarContainer.classList.add(n.config.inline ? "inline" : "static"), n.config.inline && (!t && n.element.parentNode ? n.element.parentNode.insertBefore(n.calendarContainer, n._input.nextSibling) : void 0 !== n.config.appendTo && n.config.appendTo.appendChild(n.calendarContainer)), n.config.static)) { const e = p("div", "flatpickr-wrapper");
                                n.element.parentNode && n.element.parentNode.insertBefore(e, n.element), e.appendChild(n.element), n.altInput && e.appendChild(n.altInput), e.appendChild(n.calendarContainer) }
                            n.config.static || n.config.inline || (void 0 !== n.config.appendTo ? n.config.appendTo : window.document.body).appendChild(n.calendarContainer) }(),
                        function() { n.config.wrap && ["open", "close", "toggle", "clear"].forEach((e => { Array.prototype.forEach.call(n.element.querySelectorAll(`[data-${e}]`), (t => O(t, "click", n[e]))) })); if (n.isMobile) return void
                            function() { const e = n.config.enableTime ? n.config.noCalendar ? "time" : "datetime-local" : "date";
                                n.mobileInput = p("input", n.input.className + " flatpickr-mobile"), n.mobileInput.tabIndex = 1, n.mobileInput.type = e, n.mobileInput.disabled = n.input.disabled, n.mobileInput.required = n.input.required, n.mobileInput.placeholder = n.input.placeholder, n.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", n.selectedDates.length > 0 && (n.mobileInput.defaultValue = n.mobileInput.value = n.formatDate(n.selectedDates[0], n.mobileFormatStr));
                                n.config.minDate && (n.mobileInput.min = n.formatDate(n.config.minDate, "Y-m-d"));
                                n.config.maxDate && (n.mobileInput.max = n.formatDate(n.config.maxDate, "Y-m-d"));
                                n.input.getAttribute("step") && (n.mobileInput.step = String(n.input.getAttribute("step")));
                                n.input.type = "hidden", void 0 !== n.altInput && (n.altInput.type = "hidden"); try { n.input.parentNode && n.input.parentNode.insertBefore(n.mobileInput, n.input.nextSibling) } catch (e) {}
                                O(n.mobileInput, "change", (e => { n.setDate(g(e).value, !1, n.mobileFormatStr), he("onChange"), he("onClose") })) }(); const e = c(ne, 50);
                            n._debouncedChange = c(P, 300), n.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && O(n.daysContainer, "mouseover", (e => { "range" === n.config.mode && te(g(e)) }));
                            O(window.document.body, "keydown", ee), n.config.inline || n.config.static || O(window, "resize", e);
                            void 0 !== window.ontouchstart ? O(window.document, "touchstart", X) : O(window.document, "mousedown", X);
                            O(window.document, "focus", X, { capture: !0 }), !0 === n.config.clickOpens && (O(n._input, "focus", n.open), O(n._input, "click", n.open));
                            void 0 !== n.daysContainer && (O(n.monthNav, "click", ye), O(n.monthNav, ["keyup", "increment"], D), O(n.daysContainer, "click", ce)); if (void 0 !== n.timeContainer && void 0 !== n.minuteElement && void 0 !== n.hourElement) { const e = e => g(e).select();
                                O(n.timeContainer, ["increment"], y), O(n.timeContainer, "blur", y, { capture: !0 }), O(n.timeContainer, "click", L), O([n.hourElement, n.minuteElement], ["focus", "click"], e), void 0 !== n.secondElement && O(n.secondElement, "focus", (() => n.secondElement && n.secondElement.select())), void 0 !== n.amPM && O(n.amPM, "click", (e => { y(e), P() })) }
                            n.config.allowInput && O(n._input, "blur", J) }(), (n.selectedDates.length || n.config.noCalendar) && (n.config.enableTime && M(n.config.noCalendar ? n.latestSelectedDateObj : void 0), we(!1)), v(); const o = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);!n.isMobile && o && oe(), he("onReady") }(), n }

            function D(e, t) { const n = Array.prototype.slice.call(e).filter((e => e instanceof HTMLElement)),
                    i = []; for (let e = 0; e < n.length; e++) { const a = n[e]; try { if (null !== a.getAttribute("data-fp-omit")) continue;
                        void 0 !== a._flatpickr && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = A(a, t || {}), i.push(a._flatpickr) } catch (e) { console.error(e) } } return 1 === i.length ? i[0] : i } "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) { return D(this, e) }, HTMLElement.prototype.flatpickr = function(e) { return D([this], e) }); var I = function(e, t) { return "string" == typeof e ? D(window.document.querySelectorAll(e), t) : e instanceof Node ? D([e], t) : D(e, t) };
            I.defaultConfig = {}, I.l10ns = { en: Object.assign({}, o), default: Object.assign({}, o) }, I.localize = e => { I.l10ns.default = Object.assign(Object.assign({}, I.l10ns.default), e) }, I.setDefaults = e => { I.defaultConfig = Object.assign(Object.assign({}, I.defaultConfig), e) }, I.parseDate = E({}), I.formatDate = C({}), I.compareDates = k, void 0 !== M && void 0 !== M.fn && (M.fn.flatpickr = function(e) { return D(this, e) }), Date.prototype.fp_incr = function(e) { return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)) }, "undefined" != typeof window && (window.flatpickr = I); const O = I }, 1895: () => { "use strict"; "function" != typeof Object.assign && (Object.assign = function(e, ...t) { if (!e) throw TypeError("Cannot convert undefined or null to object"); for (const n of t) n && Object.keys(n).forEach((t => e[t] = n[t])); return e }) }, 9088: function(e, t) {! function(e) { "use strict"; var t = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : { l10ns: {} },
                    n = { weekdays: { shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], longhand: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] }, months: { shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], longhand: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"] }, firstDayOfWeek: 1, ordinal: function() { return "°" }, rangeSeparator: " al ", weekAbbreviation: "Se", scrollTitle: "Scrolla per aumentare", toggleTitle: "Clicca per cambiare", time_24hr: !0 };
                t.l10ns.it = n; var i = t.l10ns;
                e.Italian = n, e.default = i, Object.defineProperty(e, "__esModule", { value: !0 }) }(t) }, 1752: (e, t, n) => { var i, a;! function(r) { "use strict";
                i = [n(9755)], void 0 === (a = function(e) { return function(e, t) {
                        function n(e, t) { var n, i = /^(\d+)\.(\d+)\.(\d+)/,
                                a = i.exec(e) || [],
                                r = i.exec(t) || []; for (n = 1; n <= 3; n++) { if (+a[n] > +r[n]) return 1; if (+a[n] < +r[n]) return -1 } return 0 }

                        function i(t) { return n(e.fn.jquery, t) >= 0 }
                        e.migrateVersion = "3.3.2", t.console && t.console.log && (e && i("3.0.0") || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion)); var a = {};
                        e.migrateDeduplicateWarnings = !0, e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0);

                        function r(n) { var i = t.console;
                            e.migrateDeduplicateWarnings && a[n] || (a[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn("JQMIGRATE: " + n), e.migrateTrace && i.trace && i.trace())) }

                        function o(e, t, n, i) { Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function() { return r(i), n }, set: function(e) { r(i), n = e } }) }

                        function s(e, t, n, i) { e[t] = function() { return r(i), n.apply(this, arguments) } }
                        e.migrateReset = function() { a = {}, e.migrateWarnings.length = 0 }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode"); var l, c = {},
                            u = e.fn.init,
                            d = e.find,
                            p = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
                            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
                            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; for (l in e.fn.init = function(e) { var t = Array.prototype.slice.call(arguments); return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), u.apply(this, t) }, e.fn.init.prototype = e.fn, e.find = function(e) { var n = Array.prototype.slice.call(arguments); if ("string" == typeof e && p.test(e)) try { t.document.querySelector(e) } catch (i) { e = e.replace(h, (function(e, t, n, i) { return "[" + t + n + '"' + i + '"]' })); try { t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), n[0] = e } catch (e) { r("Attribute selector with '#' was not fixed: " + n[0]) } }
                                return d.apply(this, n) }, d) Object.prototype.hasOwnProperty.call(d, l) && (e.find[l] = d[l]);
                        s(e.fn, "size", (function() { return this.length }), "jQuery.fn.size() is deprecated and removed; use the .length property"), s(e, "parseJSON", (function() { return JSON.parse.apply(null, arguments) }), "jQuery.parseJSON is deprecated; use JSON.parse"), s(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), s(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), o(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), o(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), i("3.1.1") && s(e, "trim", (function(e) { return null == e ? "" : (e + "").replace(f, "") }), "jQuery.trim is deprecated; use String.prototype.trim");
                        i("3.2.0") && (s(e, "nodeName", (function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }), "jQuery.nodeName is deprecated"), s(e, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray"));
                        i("3.3.0") && (s(e, "isNumeric", (function(e) { var t = typeof e; return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }), "jQuery.isNumeric() is deprecated"), e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) { c["[object " + t + "]"] = t.toLowerCase() })), s(e, "type", (function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[Object.prototype.toString.call(e)] || "object" : typeof e }), "jQuery.type is deprecated"), s(e, "isFunction", (function(e) { return "function" == typeof e }), "jQuery.isFunction() is deprecated"), s(e, "isWindow", (function(e) { return null != e && e === e.window }), "jQuery.isWindow() is deprecated")); if (e.ajax) { var m = e.ajax,
                                g = /(=)\?(?=&|$)|\?\?/;
                            e.ajax = function() { var e = m.apply(this, arguments); return e.promise && (s(e, "success", e.done, "jQXHR.success is deprecated and removed"), s(e, "error", e.fail, "jQXHR.error is deprecated and removed"), s(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e }, i("4.0.0") || e.ajaxPrefilter("+json", (function(e) {!1 !== e.jsonp && (g.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && g.test(e.data)) && r("JSON-to-JSONP auto-promotion is deprecated") })) } var v = e.fn.removeAttr,
                            w = e.fn.toggleClass,
                            y = /\S+/g;

                        function b(e) { return e.replace(/-([a-z])/g, (function(e, t) { return t.toUpperCase() })) }
                        e.fn.removeAttr = function(t) { var n = this; return e.each(t.match(y), (function(t, i) { e.expr.match.bool.test(i) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + i), n.prop(i, !1)) })), v.apply(this, arguments) }, e.fn.toggleClass = function(t) { return void 0 !== t && "boolean" != typeof t ? w.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each((function() { var n = this.getAttribute && this.getAttribute("class") || "";
                                n && e.data(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === t ? "" : e.data(this, "__className__") || "") }))) }; var x, C = !1,
                            E = /^[a-z]/,
                            k = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
                        e.swap && e.each(["height", "width", "reliableMarginRight"], (function(t, n) { var i = e.cssHooks[n] && e.cssHooks[n].get;
                            i && (e.cssHooks[n].get = function() { var e; return C = !0, e = i.apply(this, arguments), C = !1, e }) }));
                        e.swap = function(e, t, n, i) { var a, o, s = {}; for (o in C || r("jQuery.swap() is undocumented and deprecated"), t) s[o] = e.style[o], e.style[o] = t[o]; for (o in a = n.apply(e, i || []), t) e.style[o] = s[o]; return a }, i("3.4.0") && "undefined" != typeof Proxy && (e.cssProps = new Proxy(e.cssProps || {}, { set: function() { return r("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments) } }));
                        e.cssNumber || (e.cssNumber = {});

                        function S(e) { return E.test(e) && k.test(e[0].toUpperCase() + e.slice(1)) }
                        x = e.fn.css, e.fn.css = function(t, n) { var i, a = this; return t && "object" == typeof t && !Array.isArray(t) ? (e.each(t, (function(t, n) { e.fn.css.call(a, t, n) })), this) : ("number" == typeof n && (S(i = b(t)) || e.cssNumber[i] || r('Number-typed values are deprecated for jQuery.fn.css( "' + t + '", value )')), x.apply(this, arguments)) }; var T = e.data; if (e.data = function(t, n, i) { var a, o, s; if (n && "object" == typeof n && 2 === arguments.length) { for (s in a = e.hasData(t) && T.call(this, t), o = {}, n) s !== b(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), a[s] = n[s]) : o[s] = n[s]; return T.call(this, t, o), n } return n && "string" == typeof n && n !== b(n) && (a = e.hasData(t) && T.call(this, t)) && n in a ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (a[n] = i), a[n]) : T.apply(this, arguments) }, e.fx) { var M, A, D = e.Tween.prototype.run,
                                I = function(e) { return e };
                            e.Tween.prototype.run = function() { e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), e.easing[this.easing] = I), D.apply(this, arguments) }, M = e.fx.interval || 13, A = "jQuery.fx.interval is deprecated", t.requestAnimationFrame && Object.defineProperty(e.fx, "interval", { configurable: !0, enumerable: !0, get: function() { return t.document.hidden || r(A), M }, set: function(e) { r(A), M = e } }) } var O = e.fn.load,
                            P = e.event.add,
                            $ = e.event.fix;
                        e.event.props = [], e.event.fixHooks = {}, o(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), e.event.fix = function(t) { var n, i = t.type,
                                a = this.fixHooks[i],
                                o = e.event.props; if (o.length)
                                for (r("jQuery.event.props are deprecated and removed: " + o.join()); o.length;) e.event.addProp(o.pop()); if (a && !a._migrated_ && (a._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + i), (o = a.props) && o.length))
                                for (; o.length;) e.event.addProp(o.pop()); return n = $.call(this, t), a && a.filter ? a.filter(n, t) : n }, e.event.add = function(e, n) { return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), P.apply(this, arguments) }, e.each(["load", "unload", "error"], (function(t, n) { e.fn[n] = function() { var e = Array.prototype.slice.call(arguments, 0); return "load" === n && "string" == typeof e[0] ? O.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this)) } })), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, n) { e.fn[n] = function(e, t) { return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n) } })), e((function() { e(t.document).triggerHandler("ready") })), e.event.special.ready = { setup: function() { this === t.document && r("'ready' event is deprecated") } }, e.fn.extend({ bind: function(e, t, n) { return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n) }, unbind: function(e, t) { return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t) }, delegate: function(e, t, n, i) { return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, i) }, undelegate: function(e, t, n) { return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e) } }); var L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                            z = e.htmlPrefilter,
                            _ = function(e) { var n = t.document.implementation.createHTMLDocument(""); return n.body.innerHTML = e, n.body && n.body.innerHTML },
                            N = function(e) { var t = e.replace(L, "<$1></$2>");
                                t !== e && _(e) !== _(t) && r("HTML tags must be properly nested and closed: " + e) };
                        e.UNSAFE_restoreLegacyHtmlPrefilter = function() { e.htmlPrefilter = function(e) { return N(e), e.replace(L, "<$1></$2>") } }, e.htmlPrefilter = function(e) { return N(e), z(e) }; var F = e.fn.offset; if (e.fn.offset = function() { var e = this[0]; return !e || e.nodeType && e.getBoundingClientRect ? F.apply(this, arguments) : (r("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0) }, e.ajax) { var H = e.param;
                            e.param = function(t, n) { var i = e.ajaxSettings && e.ajaxSettings.traditional; return void 0 === n && i && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = i), H.call(this, t, n) } } var j = e.fn.andSelf || e.fn.addBack; if (e.fn.andSelf = function() { return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), j.apply(this, arguments) }, e.Deferred) { var R = e.Deferred,
                                B = [
                                    ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                                    ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                                    ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
                                ];
                            e.Deferred = function(t) { var n = R(),
                                    i = n.promise(); return n.pipe = i.pipe = function() { var t = arguments; return r("deferred.pipe() is deprecated"), e.Deferred((function(a) { e.each(B, (function(e, r) { var o = "function" == typeof t[e] && t[e];
                                            n[r[1]]((function() { var e = o && o.apply(this, arguments);
                                                e && "function" == typeof e.promise ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[r[0] + "With"](this === i ? a.promise() : this, o ? [e] : arguments) })) })), t = null })).promise() }, t && t.call(n, n), n }, e.Deferred.exceptionHook = R.exceptionHook } return e }(e, window) }.apply(t, i)) || (e.exports = a) }() }, 1812: (e, t, n) => { var i, a, r;
            a = [n(9755)], void 0 === (r = "function" == typeof(i = function(e) { var t = /\+/g;

                function n(e) { return s.raw ? e : encodeURIComponent(e) }

                function i(e) { return s.raw ? e : decodeURIComponent(e) }

                function a(e) { return n(s.json ? JSON.stringify(e) : String(e)) }

                function r(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(t, " ")), s.json ? JSON.parse(e) : e } catch (e) {} }

                function o(t, n) { var i = s.raw ? t : r(t); return e.isFunction(n) ? n(i) : i } var s = e.cookie = function(t, r, l) { if (void 0 !== r && !e.isFunction(r)) { if ("number" == typeof(l = e.extend({}, s.defaults, l)).expires) { var c = l.expires,
                                u = l.expires = new Date;
                            u.setTime(+u + 864e5 * c) } return document.cookie = [n(t), "=", a(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("") } for (var d = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], h = 0, f = p.length; h < f; h++) { var m = p[h].split("="),
                            g = i(m.shift()),
                            v = m.join("="); if (t && t === g) { d = o(v, r); break }
                        t || void 0 === (v = o(v)) || (d[g] = v) } return d };
                s.defaults = {}, e.removeCookie = function(t, n) { return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) } }) ? i.apply(t, a) : i) || (e.exports = r) }, 7729: (e, t, n) => { var i, a, r, o = n(9755);
            a = [n(9755)], void 0 === (r = "function" == typeof(i = function(e) { var t, n, i, a, r, s, l = "Close",
                    c = "BeforeClose",
                    u = "AfterClose",
                    d = "BeforeAppend",
                    p = "MarkupParse",
                    h = "Open",
                    f = "Change",
                    m = "mfp",
                    g = "." + m,
                    v = "mfp-ready",
                    w = "mfp-removing",
                    y = "mfp-prevent-close",
                    b = function() {},
                    x = !!o,
                    C = e(window),
                    E = function(e, n) { t.ev.on(m + e + g, n) },
                    k = function(t, n, i, a) { var r = document.createElement("div"); return r.className = "mfp-" + t, i && (r.innerHTML = i), a ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r },
                    S = function(n, i) { t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])) },
                    T = function(n) { return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn },
                    M = function() { e.magnificPopup.instance || ((t = new b).init(), e.magnificPopup.instance = t) },
                    A = function() { var e = document.createElement("p").style,
                            t = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== e.transition) return !0; for (; t.length;)
                            if (t.pop() + "Transition" in e) return !0;
                        return !1 };
                b.prototype = { constructor: b, init: function() { var n = navigator.appVersion;
                        t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = A(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {} }, open: function(n) { var a; if (!1 === n.isObj) { t.items = n.items.toArray(), t.index = 0; var o, s = n.items; for (a = 0; a < s.length; a++)
                                if ((o = s[a]).parsed && (o = o.el[0]), o === n.el[0]) { t.index = a; break } } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (!t.isOpen) { t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + g, (function() { t.close() })), t.wrap = k("wrap").attr("tabindex", -1).on("click" + g, (function(e) { t._checkIfClose(e.target) && t.close() })), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading)); var l = e.magnificPopup.modules; for (a = 0; a < l.length; a++) { var c = l[a];
                                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t) }
                            S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (E(p, (function(e, t, n, i) { n.close_replaceWith = T(i.type) })), r += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: C.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup" + g, (function(e) { 27 === e.keyCode && t.close() })), C.on("resize" + g, (function() { t.updateSize() })), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r); var u = t.wH = C.height(),
                                d = {}; if (t.fixedContentPos && t._hasScrollBar(u)) { var f = t._getScrollbarSize();
                                f && (d.marginRight = f) }
                            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : d.overflow = "hidden"); var m = t.st.mainClass; return t.isIE7 && (m += " mfp-ie7"), m && t._addClassToMFP(m), t.updateItemHTML(), S("BuildControls"), e("html").css(d), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout((function() { t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), i.on("focusin" + g, t._onFocusIn) }), 16), t.isOpen = !0, t.updateSize(u), S(h), n }
                        t.updateItemHTML() }, close: function() { t.isOpen && (S(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(w), setTimeout((function() { t._close() }), t.st.removalDelay)) : t._close()) }, _close: function() { S(l); var n = w + " " + v + " "; if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) { var a = { marginRight: "" };
                            t.isIE7 ? e("body, html").css("overflow", "") : a.overflow = "", e("html").css(a) }
                        i.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(u) }, updateSize: function(e) { if (t.isIOS) { var n = document.documentElement.clientWidth / window.innerWidth,
                                i = window.innerHeight * n;
                            t.wrap.css("height", i), t.wH = i } else t.wH = e || C.height();
                        t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize") }, updateItemHTML: function() { var n = t.items[t.index];
                        t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index)); var i = n.type; if (S("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) { var r = !!t.st[i] && t.st[i].markup;
                            S("FirstMarkupParse", r), t.currTemplate[i] = !r || e(r) }
                        a && a !== n.type && t.container.removeClass("mfp-" + a + "-holder"); var o = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
                        t.appendContent(o, i), n.preloaded = !0, S(f, n), a = n.type, t.container.prepend(t.contentContainer), S("AfterChange") }, appendContent: function(e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", S(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content) }, parseEl: function(n) { var i, a = t.items[n]; if (a.tagName ? a = { el: e(a) } : (i = a.type, a = { data: a, src: a.src }), a.el) { for (var r = t.types, o = 0; o < r.length; o++)
                                if (a.el.hasClass("mfp-" + r[o])) { i = r[o]; break }
                            a.src = a.el.attr("data-mfp-src"), a.src || (a.src = a.el.attr("href")) } return a.type = i || t.st.type || "inline", a.index = n, a.parsed = !0, t.items[n] = a, S("ElementParse", a), t.items[n] }, addGroup: function(e, n) { var i = function(i) { i.mfpEl = this, t._openClick(i, e, n) };
                        n || (n = {}); var a = "click.magnificPopup";
                        n.mainEl = e, n.items ? (n.isObj = !0, e.off(a).on(a, i)) : (n.isObj = !1, n.delegate ? e.off(a).on(a, n.delegate, i) : (n.items = e, e.off(a).on(a, i))) }, _openClick: function(n, i, a) { if ((void 0 !== a.midClick ? a.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) { var r = void 0 !== a.disableOn ? a.disableOn : e.magnificPopup.defaults.disableOn; if (r)
                                if (e.isFunction(r)) { if (!r.call(t)) return !0 } else if (C.width() < r) return !0;
                            n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), a.el = e(n.mfpEl), a.delegate && (a.items = i.find(a.delegate)), t.open(a) } }, updateStatus: function(e, i) { if (t.preloader) { n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading); var a = { status: e, text: i };
                            S("UpdateStatus", a), e = a.status, i = a.text, t.preloader.html(i), t.preloader.find("a").on("click", (function(e) { e.stopImmediatePropagation() })), t.container.addClass("mfp-s-" + e), n = e } }, _checkIfClose: function(n) { if (!e(n).hasClass(y)) { var i = t.st.closeOnContentClick,
                                a = t.st.closeOnBgClick; if (i && a) return !0; if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0; if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0 } else if (a && e.contains(document, n)) return !0; return !1 } }, _addClassToMFP: function(e) { t.bgOverlay.addClass(e), t.wrap.addClass(e) }, _removeClassFromMFP: function(e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e) }, _hasScrollBar: function(e) { return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || C.height()) }, _setFocus: function() {
                        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus() }, _onFocusIn: function(n) { if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1 }, _parseMarkup: function(t, n, i) { var a;
                        i.data && (n = e.extend(i.data, n)), S(p, [t, n, i]), e.each(n, (function(n, i) { if (void 0 === i || !1 === i) return !0; if ((a = n.split("_")).length > 1) { var r = t.find(g + "-" + a[0]); if (r.length > 0) { var o = a[1]; "replaceWith" === o ? r[0] !== i[0] && r.replaceWith(i) : "img" === o ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(a[1], i) } } else t.find(g + "-" + n).html(i) })) }, _getScrollbarSize: function() { if (void 0 === t.scrollbarSize) { var e = document.createElement("div");
                            e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e) } return t.scrollbarSize } }, e.magnificPopup = { instance: null, proto: b.prototype, modules: [], open: function(t, n) { return M(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = n || 0, this.instance.open(t) }, close: function() { return e.magnificPopup.instance && e.magnificPopup.instance.close() }, registerModule: function(t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function(n) { M(); var i = e(this); if ("string" == typeof n)
                        if ("open" === n) { var a, r = x ? i.data("magnificPopup") : i[0].magnificPopup,
                                o = parseInt(arguments[1], 10) || 0;
                            r.items ? a = r.items[o] : (a = i, r.delegate && (a = a.find(r.delegate)), a = a.eq(o)), t._openClick({ mfpEl: a }, i, r) } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
                    else n = e.extend(!0, {}, n), x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n); return i }; var D, I, O, P = "inline",
                    $ = function() { O && (I.after(O.addClass(D)).detach(), O = null) };
                e.magnificPopup.registerModule(P, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { t.types.push(P), E(l + "." + P, (function() { $() })) }, getInline: function(n, i) { if ($(), n.src) { var a = t.st.inline,
                                    r = e(n.src); if (r.length) { var o = r[0].parentNode;
                                    o && o.tagName && (I || (D = a.hiddenClass, I = k(D), D = "mfp-" + D), O = r.after(I).detach().removeClass(D)), t.updateStatus("ready") } else t.updateStatus("error", a.tNotFound), r = e("<div>"); return n.inlineElement = r, r } return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i } } }); var L, z = "ajax",
                    _ = function() { L && e(document.body).removeClass(L) },
                    N = function() { _(), t.req && t.req.abort() };
                e.magnificPopup.registerModule(z, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { t.types.push(z), L = t.st.ajax.cursor, E(l + "." + z, N), E("BeforeChange." + z, N) }, getAjax: function(n) { L && e(document.body).addClass(L), t.updateStatus("loading"); var i = e.extend({ url: n.src, success: function(i, a, r) { var o = { data: i, xhr: r };
                                    S("ParseAjax", o), t.appendContent(e(o.data), z), n.finished = !0, _(), t._setFocus(), setTimeout((function() { t.wrap.addClass(v) }), 16), t.updateStatus("ready"), S("AjaxContentAdded") }, error: function() { _(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src)) } }, t.st.ajax.settings); return t.req = e.ajax(i), "" } } }); var F, H = function(n) { if (n.data && void 0 !== n.data.title) return n.data.title; var i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || "" } return "" };
                e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var n = t.st.image,
                                i = ".image";
                            t.types.push("image"), E(h + i, (function() { "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor) })), E(l + i, (function() { n.cursor && e(document.body).removeClass(n.cursor), C.off("resize" + g) })), E("Resize" + i, t.resizeImage), t.isLowIE && E("AfterChange", t.resizeImage) }, resizeImage: function() { var e = t.currItem; if (e && e.img && t.st.image.verticalFit) { var n = 0;
                                t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n) } }, _onImageHasSize: function(e) { e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1)) }, findImageSize: function(e) { var n = 0,
                                i = e.img[0],
                                a = function(r) { F && clearInterval(F), F = setInterval((function() { i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(F), 3 == ++n ? a(10) : 40 === n ? a(50) : 100 === n && a(500)) }), r) };
                            a(1) }, getImage: function(n, i) { var a = 0,
                                r = function() { n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : ++a < 200 ? setTimeout(r, 100) : o()) },
                                o = function() { n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0) },
                                s = t.st.image,
                                l = i.find(".mfp-img"); if (l.length) { var c = document.createElement("img");
                                c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", o), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1) } return t._parseMarkup(i, { title: H(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (F && clearInterval(F), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i) } } }); var j, R = function() { return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j };
                e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) { return e.is("img") ? e : e.find("img") } }, proto: { initZoom: function() { var e, n = t.st.zoom,
                                i = ".zoom"; if (n.enabled && t.supportsTransition) { var a, r, o = n.duration,
                                    s = function(e) { var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                            i = "all " + n.duration / 1e3 + "s " + n.easing,
                                            a = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                            r = "transition"; return a["-webkit-" + r] = a["-moz-" + r] = a["-o-" + r] = a[r] = i, t.css(a), t },
                                    u = function() { t.content.css("visibility", "visible") };
                                E("BuildControls" + i, (function() { if (t._allowZoom()) { if (clearTimeout(a), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void u();
                                        (r = s(e)).css(t._getOffset()), t.wrap.append(r), a = setTimeout((function() { r.css(t._getOffset(!0)), a = setTimeout((function() { u(), setTimeout((function() { r.remove(), e = r = null, S("ZoomAnimationEnded") }), 16) }), o) }), 16) } })), E(c + i, (function() { if (t._allowZoom()) { if (clearTimeout(a), t.st.removalDelay = o, !e) { if (!(e = t._getItemToZoom())) return;
                                            r = s(e) }
                                        r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout((function() { r.css(t._getOffset()) }), 16) } })), E(l + i, (function() { t._allowZoom() && (u(), r && r.remove(), e = null) })) } }, _allowZoom: function() { return "image" === t.currItem.type }, _getItemToZoom: function() { return !!t.currItem.hasSize && t.currItem.img }, _getOffset: function(n) { var i, a = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                                r = parseInt(i.css("padding-top"), 10),
                                o = parseInt(i.css("padding-bottom"), 10);
                            a.top -= e(window).scrollTop() - r; var s = { width: i.width(), height: (x ? i.innerHeight() : i[0].offsetHeight) - o - r }; return R() ? s["-moz-transform"] = s.transform = "translate(" + a.left + "px," + a.top + "px)" : (s.left = a.left, s.top = a.top), s } } }); var B = "iframe",
                    U = "//about:blank",
                    q = function(e) { if (t.currTemplate[B]) { var n = t.currTemplate[B].find("iframe");
                            n.length && (e || (n[0].src = U), t.isIE8 && n.css("display", e ? "block" : "none")) } };
                e.magnificPopup.registerModule(B, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { t.types.push(B), E("BeforeChange", (function(e, t, n) { t !== n && (t === B ? q() : n === B && q(!0)) })), E(l + "." + B, (function() { q() })) }, getIframe: function(n, i) { var a = n.src,
                                r = t.st.iframe;
                            e.each(r.patterns, (function() { if (a.indexOf(this.index) > -1) return this.id && (a = "string" == typeof this.id ? a.substr(a.lastIndexOf(this.id) + this.id.length, a.length) : this.id.call(this, a)), a = this.src.replace("%id%", a), !1 })); var o = {}; return r.srcAction && (o[r.srcAction] = a), t._parseMarkup(i, o, n), t.updateStatus("ready"), i } } }); var W = function(e) { var n = t.items.length; return e > n - 1 ? e - n : e < 0 ? n + e : e },
                    Y = function(e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n) };
                e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var n = t.st.gallery,
                                a = ".mfp-gallery"; if (t.direction = !0, !n || !n.enabled) return !1;
                            r += " mfp-gallery", E(h + a, (function() { n.navigateByImgClick && t.wrap.on("click" + a, ".mfp-img", (function() { if (t.items.length > 1) return t.next(), !1 })), i.on("keydown" + a, (function(e) { 37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next() })) })), E("UpdateStatus" + a, (function(e, n) { n.text && (n.text = Y(n.text, t.currItem.index, t.items.length)) })), E(p + a, (function(e, i, a, r) { var o = t.items.length;
                                a.counter = o > 1 ? Y(n.tCounter, r.index, o) : "" })), E("BuildControls" + a, (function() { if (t.items.length > 1 && n.arrows && !t.arrowLeft) { var i = n.arrowMarkup,
                                        a = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                        r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                                    a.click((function() { t.prev() })), r.click((function() { t.next() })), t.container.append(a.add(r)) } })), E(f + a, (function() { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout((function() { t.preloadNearbyImages(), t._preloadTimeout = null }), 16) })), E(l + a, (function() { i.off(a), t.wrap.off("click" + a), t.arrowRight = t.arrowLeft = null })) }, next: function() { t.direction = !0, t.index = W(t.index + 1), t.updateItemHTML() }, prev: function() { t.direction = !1, t.index = W(t.index - 1), t.updateItemHTML() }, goTo: function(e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML() }, preloadNearbyImages: function() { var e, n = t.st.gallery.preload,
                                i = Math.min(n[0], t.items.length),
                                a = Math.min(n[1], t.items.length); for (e = 1; e <= (t.direction ? a : i); e++) t._preloadItem(t.index + e); for (e = 1; e <= (t.direction ? i : a); e++) t._preloadItem(t.index - e) }, _preloadItem: function(n) { if (n = W(n), !t.items[n].preloaded) { var i = t.items[n];
                                i.parsed || (i = t.parseEl(n)), S("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", (function() { i.hasSize = !0 })).on("error.mfploader", (function() { i.hasSize = !0, i.loadError = !0, S("LazyLoadError", i) })).attr("src", i.src)), i.preloaded = !0 } } } }); var V = "retina";
                e.magnificPopup.registerModule(V, { options: { replaceSrc: function(e) { return e.src.replace(/\.\w+$/, (function(e) { return "@2x" + e })) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var e = t.st.retina,
                                    n = e.ratio;
                                (n = isNaN(n) ? n() : n) > 1 && (E("ImageHasSize." + V, (function(e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" }) })), E("ElementParse." + V, (function(t, i) { i.src = e.replaceSrc(i, n) }))) } } } }), M() }) ? i.apply(t, a) : i) || (e.exports = r) }, 8068: () => {}, 9365: (e, t) => { var n, i, a;
            i = [], void 0 === (a = "function" == typeof(n = function() { "use strict"; var e = "14.6.3";

                function t(e) { return "object" == typeof e && "function" == typeof e.to && "function" == typeof e.from }

                function n(e) { e.parentElement.removeChild(e) }

                function i(e) { return null != e }

                function a(e) { e.preventDefault() }

                function r(e) { return e.filter((function(e) { return !this[e] && (this[e] = !0) }), {}) }

                function o(e, t) { return Math.round(e / t) * t }

                function s(e, t) { var n = e.getBoundingClientRect(),
                        i = e.ownerDocument,
                        a = i.documentElement,
                        r = g(i); return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0), t ? n.top + r.y - a.clientTop : n.left + r.x - a.clientLeft }

                function l(e) { return "number" == typeof e && !isNaN(e) && isFinite(e) }

                function c(e, t, n) { n > 0 && (h(e, t), setTimeout((function() { f(e, t) }), n)) }

                function u(e) { return Math.max(Math.min(e, 100), 0) }

                function d(e) { return Array.isArray(e) ? e : [e] }

                function p(e) { var t = (e = String(e)).split("."); return t.length > 1 ? t[1].length : 0 }

                function h(e, t) { e.classList && !/\s/.test(t) ? e.classList.add(t) : e.className += " " + t }

                function f(e, t) { e.classList && !/\s/.test(t) ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

                function m(e, t) { return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className) }

                function g(e) { var t = void 0 !== window.pageXOffset,
                        n = "CSS1Compat" === (e.compatMode || ""); return { x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft, y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop } }

                function v() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } }

                function w() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        window.addEventListener("test", null, t) } catch (e) {} return e }

                function y() { return window.CSS && CSS.supports && CSS.supports("touch-action", "none") }

                function b(e, t) { return 100 / (t - e) }

                function x(e, t, n) { return 100 * t / (e[n + 1] - e[n]) }

                function C(e, t) { return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0) }

                function E(e, t) { return t * (e[1] - e[0]) / 100 + e[0] }

                function k(e, t) { for (var n = 1; e >= t[n];) n += 1; return n }

                function S(e, t, n) { if (n >= e.slice(-1)[0]) return 100; var i = k(n, e),
                        a = e[i - 1],
                        r = e[i],
                        o = t[i - 1],
                        s = t[i]; return o + C([a, r], n) / b(o, s) }

                function T(e, t, n) { if (n >= 100) return e.slice(-1)[0]; var i = k(n, t),
                        a = e[i - 1],
                        r = e[i],
                        o = t[i - 1]; return E([a, r], (n - o) * b(o, t[i])) }

                function M(e, t, n, i) { if (100 === i) return i; var a = k(i, e),
                        r = e[a - 1],
                        s = e[a]; return n ? i - r > (s - r) / 2 ? s : r : t[a - 1] ? e[a - 1] + o(i - e[a - 1], t[a - 1]) : i }

                function A(t, n, i) { var a; if ("number" == typeof n && (n = [n]), !Array.isArray(n)) throw new Error("noUiSlider (" + e + "): 'range' contains invalid value."); if (!l(a = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !l(n[0])) throw new Error("noUiSlider (" + e + "): 'range' value isn't numeric.");
                    i.xPct.push(a), i.xVal.push(n[0]), a ? i.xSteps.push(!isNaN(n[1]) && n[1]) : isNaN(n[1]) || (i.xSteps[0] = n[1]), i.xHighestCompleteStep.push(0) }

                function D(e, t, n) { if (t)
                        if (n.xVal[e] !== n.xVal[e + 1]) { n.xSteps[e] = x([n.xVal[e], n.xVal[e + 1]], t, 0) / b(n.xPct[e], n.xPct[e + 1]); var i = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e],
                                a = Math.ceil(Number(i.toFixed(3)) - 1),
                                r = n.xVal[e] + n.xNumSteps[e] * a;
                            n.xHighestCompleteStep[e] = r } else n.xSteps[e] = n.xHighestCompleteStep[e] = n.xVal[e] }

                function I(e, t, n) { var i;
                    this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = t; var a = []; for (i in e) e.hasOwnProperty(i) && a.push([e[i], i]); for (a.length && "object" == typeof a[0][0] ? a.sort((function(e, t) { return e[0][0] - t[0][0] })) : a.sort((function(e, t) { return e[0] - t[0] })), i = 0; i < a.length; i++) A(a[i][1], a[i][0], this); for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) D(i, this.xNumSteps[i], this) }
                I.prototype.getDistance = function(t) { var n, i = []; for (n = 0; n < this.xNumSteps.length - 1; n++) { var a = this.xNumSteps[n]; if (a && t / a % 1 != 0) throw new Error("noUiSlider (" + e + "): 'limit', 'margin' and 'padding' of " + this.xPct[n] + "% range must be divisible by step.");
                        i[n] = x(this.xVal, t, n) } return i }, I.prototype.getAbsoluteDistance = function(e, t, n) { var i, a = 0; if (e < this.xPct[this.xPct.length - 1])
                        for (; e > this.xPct[a + 1];) a++;
                    else e === this.xPct[this.xPct.length - 1] && (a = this.xPct.length - 2);
                    n || e !== this.xPct[a + 1] || a++; var r = 1,
                        o = t[a],
                        s = 0,
                        l = 0,
                        c = 0,
                        u = 0; for (i = n ? (e - this.xPct[a]) / (this.xPct[a + 1] - this.xPct[a]) : (this.xPct[a + 1] - e) / (this.xPct[a + 1] - this.xPct[a]); o > 0;) s = this.xPct[a + 1 + u] - this.xPct[a + u], t[a + u] * r + 100 - 100 * i > 100 ? (l = s * i, r = (o - 100 * i) / t[a + u], i = 1) : (l = t[a + u] * s / 100 * r, r = 0), n ? (c -= l, this.xPct.length + u >= 1 && u--) : (c += l, this.xPct.length - u >= 1 && u++), o = t[a + u] * r; return e + c }, I.prototype.toStepping = function(e) { return e = S(this.xVal, this.xPct, e) }, I.prototype.fromStepping = function(e) { return T(this.xVal, this.xPct, e) }, I.prototype.getStep = function(e) { return e = M(this.xPct, this.xSteps, this.snap, e) }, I.prototype.getDefaultStep = function(e, t, n) { var i = k(e, this.xPct); return (100 === e || t && e === this.xPct[i - 1]) && (i = Math.max(i - 1, 1)), (this.xVal[i] - this.xVal[i - 1]) / n }, I.prototype.getNearbySteps = function(e) { var t = k(e, this.xPct); return { stepBefore: { startValue: this.xVal[t - 2], step: this.xNumSteps[t - 2], highestStep: this.xHighestCompleteStep[t - 2] }, thisStep: { startValue: this.xVal[t - 1], step: this.xNumSteps[t - 1], highestStep: this.xHighestCompleteStep[t - 1] }, stepAfter: { startValue: this.xVal[t], step: this.xNumSteps[t], highestStep: this.xHighestCompleteStep[t] } } }, I.prototype.countStepDecimals = function() { var e = this.xNumSteps.map(p); return Math.max.apply(null, e) }, I.prototype.convert = function(e) { return this.getStep(this.toStepping(e)) }; var O = { to: function(e) { return void 0 !== e && e.toFixed(2) }, from: Number },
                    P = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" },
                    $ = { tooltips: ".__tooltips", aria: ".__aria" };

                function L(n) { if (t(n)) return !0; throw new Error("noUiSlider (" + e + "): 'format' requires 'to' and 'from' methods.") }

                function z(t, n) { if (!l(n)) throw new Error("noUiSlider (" + e + "): 'step' is not numeric.");
                    t.singleStep = n }

                function _(t, n) { if (!l(n)) throw new Error("noUiSlider (" + e + "): 'keyboardPageMultiplier' is not numeric.");
                    t.keyboardPageMultiplier = n }

                function N(t, n) { if (!l(n)) throw new Error("noUiSlider (" + e + "): 'keyboardDefaultStep' is not numeric.");
                    t.keyboardDefaultStep = n }

                function F(t, n) { if ("object" != typeof n || Array.isArray(n)) throw new Error("noUiSlider (" + e + "): 'range' is not an object."); if (void 0 === n.min || void 0 === n.max) throw new Error("noUiSlider (" + e + "): Missing 'min' or 'max' in 'range'."); if (n.min === n.max) throw new Error("noUiSlider (" + e + "): 'range' 'min' and 'max' cannot be equal.");
                    t.spectrum = new I(n, t.snap, t.singleStep) }

                function H(t, n) { if (n = d(n), !Array.isArray(n) || !n.length) throw new Error("noUiSlider (" + e + "): 'start' option is incorrect.");
                    t.handles = n.length, t.start = n }

                function j(t, n) { if (t.snap = n, "boolean" != typeof n) throw new Error("noUiSlider (" + e + "): 'snap' option must be a boolean.") }

                function R(t, n) { if (t.animate = n, "boolean" != typeof n) throw new Error("noUiSlider (" + e + "): 'animate' option must be a boolean.") }

                function B(t, n) { if (t.animationDuration = n, "number" != typeof n) throw new Error("noUiSlider (" + e + "): 'animationDuration' option must be a number.") }

                function U(t, n) { var i, a = [!1]; if ("lower" === n ? n = [!0, !1] : "upper" === n && (n = [!1, !0]), !0 === n || !1 === n) { for (i = 1; i < t.handles; i++) a.push(n);
                        a.push(!1) } else { if (!Array.isArray(n) || !n.length || n.length !== t.handles + 1) throw new Error("noUiSlider (" + e + "): 'connect' option doesn't match handle count.");
                        a = n }
                    t.connect = a }

                function q(t, n) { switch (n) {
                        case "horizontal":
                            t.ort = 0; break;
                        case "vertical":
                            t.ort = 1; break;
                        default:
                            throw new Error("noUiSlider (" + e + "): 'orientation' option is invalid.") } }

                function W(t, n) { if (!l(n)) throw new Error("noUiSlider (" + e + "): 'margin' option must be numeric.");
                    0 !== n && (t.margin = t.spectrum.getDistance(n)) }

                function Y(t, n) { if (!l(n)) throw new Error("noUiSlider (" + e + "): 'limit' option must be numeric."); if (t.limit = t.spectrum.getDistance(n), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + e + "): 'limit' option is only supported on linear sliders with 2 or more handles.") }

                function V(t, n) { var i; if (!l(n) && !Array.isArray(n)) throw new Error("noUiSlider (" + e + "): 'padding' option must be numeric or array of exactly 2 numbers."); if (Array.isArray(n) && 2 !== n.length && !l(n[0]) && !l(n[1])) throw new Error("noUiSlider (" + e + "): 'padding' option must be numeric or array of exactly 2 numbers."); if (0 !== n) { for (Array.isArray(n) || (n = [n, n]), t.padding = [t.spectrum.getDistance(n[0]), t.spectrum.getDistance(n[1])], i = 0; i < t.spectrum.xNumSteps.length - 1; i++)
                            if (t.padding[0][i] < 0 || t.padding[1][i] < 0) throw new Error("noUiSlider (" + e + "): 'padding' option must be a positive number(s).");
                        var a = n[0] + n[1],
                            r = t.spectrum.xVal[0]; if (a / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - r) > 1) throw new Error("noUiSlider (" + e + "): 'padding' option must not exceed 100% of the range.") } }

                function G(t, n) { switch (n) {
                        case "ltr":
                            t.dir = 0; break;
                        case "rtl":
                            t.dir = 1; break;
                        default:
                            throw new Error("noUiSlider (" + e + "): 'direction' option was not recognized.") } }

                function X(t, n) { if ("string" != typeof n) throw new Error("noUiSlider (" + e + "): 'behaviour' must be a string containing options."); var i = n.indexOf("tap") >= 0,
                        a = n.indexOf("drag") >= 0,
                        r = n.indexOf("fixed") >= 0,
                        o = n.indexOf("snap") >= 0,
                        s = n.indexOf("hover") >= 0,
                        l = n.indexOf("unconstrained") >= 0; if (r) { if (2 !== t.handles) throw new Error("noUiSlider (" + e + "): 'fixed' behaviour must be used with 2 handles");
                        W(t, t.start[1] - t.start[0]) } if (l && (t.margin || t.limit)) throw new Error("noUiSlider (" + e + "): 'unconstrained' behaviour cannot be used with margin or limit");
                    t.events = { tap: i || o, drag: a, fixed: r, snap: o, hover: s, unconstrained: l } }

                function Q(t, n) { if (!1 !== n)
                        if (!0 === n) { t.tooltips = []; for (var i = 0; i < t.handles; i++) t.tooltips.push(!0) } else { if (t.tooltips = d(n), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + e + "): must pass a formatter for all handles.");
                            t.tooltips.forEach((function(t) { if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + e + "): 'tooltips' must be passed a formatter or 'false'.") })) } }

                function K(e, t) { e.ariaFormat = t, L(t) }

                function Z(e, t) { e.format = t, L(t) }

                function J(t, n) { if (t.keyboardSupport = n, "boolean" != typeof n) throw new Error("noUiSlider (" + e + "): 'keyboardSupport' option must be a boolean.") }

                function ee(e, t) { e.documentElement = t }

                function te(t, n) { if ("string" != typeof n && !1 !== n) throw new Error("noUiSlider (" + e + "): 'cssPrefix' must be a string or `false`.");
                    t.cssPrefix = n }

                function ne(t, n) { if ("object" != typeof n) throw new Error("noUiSlider (" + e + "): 'cssClasses' must be an object."); if ("string" == typeof t.cssPrefix)
                        for (var i in t.cssClasses = {}, n) n.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + n[i]);
                    else t.cssClasses = n }

                function ie(t) { var n = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: O, format: O },
                        a = { step: { r: !1, t: z }, keyboardPageMultiplier: { r: !1, t: _ }, keyboardDefaultStep: { r: !1, t: N }, start: { r: !0, t: H }, connect: { r: !0, t: U }, direction: { r: !0, t: G }, snap: { r: !1, t: j }, animate: { r: !1, t: R }, animationDuration: { r: !1, t: B }, range: { r: !0, t: F }, orientation: { r: !1, t: q }, margin: { r: !1, t: W }, limit: { r: !1, t: Y }, padding: { r: !1, t: V }, behaviour: { r: !0, t: X }, ariaFormat: { r: !1, t: K }, format: { r: !1, t: Z }, tooltips: { r: !1, t: Q }, keyboardSupport: { r: !0, t: J }, documentElement: { r: !1, t: ee }, cssPrefix: { r: !0, t: te }, cssClasses: { r: !0, t: ne } },
                        r = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: P, keyboardPageMultiplier: 5, keyboardDefaultStep: 10 };
                    t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(a).forEach((function(o) { if (!i(t[o]) && void 0 === r[o]) { if (a[o].r) throw new Error("noUiSlider (" + e + "): '" + o + "' is required."); return !0 }
                        a[o].t(n, i(t[o]) ? t[o] : r[o]) })), n.pips = t.pips; var o = document.createElement("div"),
                        s = void 0 !== o.style.msTransform,
                        l = void 0 !== o.style.transform;
                    n.transformRule = l ? "transform" : s ? "msTransform" : "webkitTransform"; var c = [
                        ["left", "top"],
                        ["right", "bottom"]
                    ]; return n.style = c[n.dir][n.ort], n }

                function ae(t, i, o) { var l, p, b, x, C, E, k = v(),
                        S = y() && w(),
                        T = t,
                        M = i.spectrum,
                        A = [],
                        D = [],
                        I = [],
                        O = 0,
                        P = {},
                        L = t.ownerDocument,
                        z = i.documentElement || L.documentElement,
                        _ = L.body,
                        N = -1,
                        F = 0,
                        H = 1,
                        j = 2,
                        R = "rtl" === L.dir || 1 === i.ort ? 0 : 100;

                    function B(e, t) { var n = L.createElement("div"); return t && h(n, t), e.appendChild(n), n }

                    function U(e, t) { var n = B(e, i.cssClasses.origin),
                            a = B(n, i.cssClasses.handle); return B(a, i.cssClasses.touchArea), a.setAttribute("data-handle", t), i.keyboardSupport && (a.setAttribute("tabindex", "0"), a.addEventListener("keydown", (function(e) { return ge(e, t) }))), a.setAttribute("role", "slider"), a.setAttribute("aria-orientation", i.ort ? "vertical" : "horizontal"), 0 === t ? h(a, i.cssClasses.handleLower) : t === i.handles - 1 && h(a, i.cssClasses.handleUpper), n }

                    function q(e, t) { return !!t && B(e, i.cssClasses.connect) }

                    function W(e, t) { var n = B(t, i.cssClasses.connects);
                        p = [], (b = []).push(q(n, e[0])); for (var a = 0; a < i.handles; a++) p.push(U(t, a)), I[a] = a, b.push(q(n, e[a + 1])) }

                    function Y(e) { return h(e, i.cssClasses.target), 0 === i.dir ? h(e, i.cssClasses.ltr) : h(e, i.cssClasses.rtl), 0 === i.ort ? h(e, i.cssClasses.horizontal) : h(e, i.cssClasses.vertical), h(e, "rtl" === getComputedStyle(e).direction ? i.cssClasses.textDirectionRtl : i.cssClasses.textDirectionLtr), B(e, i.cssClasses.base) }

                    function V(e, t) { return !!i.tooltips[t] && B(e.firstChild, i.cssClasses.tooltip) }

                    function G() { return T.hasAttribute("disabled") }

                    function X(e) { return p[e].hasAttribute("disabled") }

                    function Q() { C && (be("update" + $.tooltips), C.forEach((function(e) { e && n(e) })), C = null) }

                    function K() { Q(), C = p.map(V), we("update" + $.tooltips, (function(e, t, n) { if (C[t]) { var a = e[t];!0 !== i.tooltips[t] && (a = i.tooltips[t].to(n[t])), C[t].innerHTML = a } })) }

                    function Z() { be("update" + $.aria), we("update" + $.aria, (function(e, t, n, a, r) { I.forEach((function(e) { var t = p[e],
                                    a = Ce(D, e, 0, !0, !0, !0),
                                    o = Ce(D, e, 100, !0, !0, !0),
                                    s = r[e],
                                    l = i.ariaFormat.to(n[e]);
                                a = M.fromStepping(a).toFixed(1), o = M.fromStepping(o).toFixed(1), s = M.fromStepping(s).toFixed(1), t.children[0].setAttribute("aria-valuemin", a), t.children[0].setAttribute("aria-valuemax", o), t.children[0].setAttribute("aria-valuenow", s), t.children[0].setAttribute("aria-valuetext", l) })) })) }

                    function J(t, n, i) { if ("range" === t || "steps" === t) return M.xVal; if ("count" === t) { if (n < 2) throw new Error("noUiSlider (" + e + "): 'values' (>= 2) required for mode 'count'."); var a = n - 1,
                                r = 100 / a; for (n = []; a--;) n[a] = a * r;
                            n.push(100), t = "positions" } return "positions" === t ? n.map((function(e) { return M.fromStepping(i ? M.getStep(e) : e) })) : "values" === t ? i ? n.map((function(e) { return M.fromStepping(M.getStep(M.toStepping(e))) })) : n : void 0 }

                    function ee(e, t, n) {
                        function i(e, t) { return (e + t).toFixed(7) / 1 } var a = {},
                            o = M.xVal[0],
                            s = M.xVal[M.xVal.length - 1],
                            l = !1,
                            c = !1,
                            u = 0; return (n = r(n.slice().sort((function(e, t) { return e - t }))))[0] !== o && (n.unshift(o), l = !0), n[n.length - 1] !== s && (n.push(s), c = !0), n.forEach((function(r, o) { var s, d, p, h, f, m, g, v, w, y, b = r,
                                x = n[o + 1],
                                C = "steps" === t; if (C && (s = M.xNumSteps[o]), s || (s = x - b), !1 !== b)
                                for (void 0 === x && (x = b), s = Math.max(s, 1e-7), d = b; d <= x; d = i(d, s)) { for (v = (f = (h = M.toStepping(d)) - u) / e, y = f / (w = Math.round(v)), p = 1; p <= w; p += 1) a[(m = u + p * y).toFixed(5)] = [M.fromStepping(m), 0];
                                    g = n.indexOf(d) > -1 ? H : C ? j : F, !o && l && d !== x && (g = 0), d === x && c || (a[h.toFixed(5)] = [d, g]), u = h } })), a }

                    function te(e, t, n) { var a = L.createElement("div"),
                            r = [];
                        r[F] = i.cssClasses.valueNormal, r[H] = i.cssClasses.valueLarge, r[j] = i.cssClasses.valueSub; var o = [];
                        o[F] = i.cssClasses.markerNormal, o[H] = i.cssClasses.markerLarge, o[j] = i.cssClasses.markerSub; var s = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
                            l = [i.cssClasses.markerHorizontal, i.cssClasses.markerVertical];

                        function c(e, t) { var n = t === i.cssClasses.value,
                                a = n ? r : o; return t + " " + (n ? s : l)[i.ort] + " " + a[e] }

                        function u(e, r, o) { if ((o = t ? t(r, o) : o) !== N) { var s = B(a, !1);
                                s.className = c(o, i.cssClasses.marker), s.style[i.style] = e + "%", o > F && ((s = B(a, !1)).className = c(o, i.cssClasses.value), s.setAttribute("data-value", r), s.style[i.style] = e + "%", s.innerHTML = n.to(r)) } } return h(a, i.cssClasses.pips), h(a, 0 === i.ort ? i.cssClasses.pipsHorizontal : i.cssClasses.pipsVertical), Object.keys(e).forEach((function(t) { u(t, e[t][0], e[t][1]) })), a }

                    function ne() { x && (n(x), x = null) }

                    function ae(e) { ne(); var t = e.mode,
                            n = e.density || 1,
                            i = e.filter || !1,
                            a = ee(n, t, J(t, e.values || !1, e.stepped || !1)),
                            r = e.format || { to: Math.round }; return x = T.appendChild(te(a, i, r)) }

                    function re() { var e = l.getBoundingClientRect(),
                            t = "offset" + ["Width", "Height"][i.ort]; return 0 === i.ort ? e.width || l[t] : e.height || l[t] }

                    function oe(e, t, n, a) { var r = function(r) { return !!(r = se(r, a.pageOffset, a.target || t)) && !(G() && !a.doNotReject) && !(m(T, i.cssClasses.tap) && !a.doNotReject) && !(e === k.start && void 0 !== r.buttons && r.buttons > 1) && (!a.hover || !r.buttons) && (S || r.preventDefault(), r.calcPoint = r.points[i.ort], void n(r, a)) },
                            o = []; return e.split(" ").forEach((function(e) { t.addEventListener(e, r, !!S && { passive: !0 }), o.push([e, r]) })), o }

                    function se(e, t, n) { var i, a, r = 0 === e.type.indexOf("touch"),
                            o = 0 === e.type.indexOf("mouse"),
                            s = 0 === e.type.indexOf("pointer"); if (0 === e.type.indexOf("MSPointer") && (s = !0), "mousedown" === e.type && !e.buttons && !e.touches) return !1; if (r) { var l = function(e) { return e.target === n || n.contains(e.target) || e.target.shadowRoot && e.target.shadowRoot.contains(n) }; if ("touchstart" === e.type) { var c = Array.prototype.filter.call(e.touches, l); if (c.length > 1) return !1;
                                i = c[0].pageX, a = c[0].pageY } else { var u = Array.prototype.find.call(e.changedTouches, l); if (!u) return !1;
                                i = u.pageX, a = u.pageY } } return t = t || g(L), (o || s) && (i = e.clientX + t.x, a = e.clientY + t.y), e.pageOffset = t, e.points = [i, a], e.cursor = o || s, e }

                    function le(e) { var t = 100 * (e - s(l, i.ort)) / re(); return t = u(t), i.dir ? 100 - t : t }

                    function ce(e) { var t = 100,
                            n = !1; return p.forEach((function(i, a) { if (!X(a)) { var r = D[a],
                                    o = Math.abs(r - e);
                                (o < t || o <= t && e > r || 100 === o && 100 === t) && (n = a, t = o) } })), n }

                    function ue(e, t) { "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && pe(e, t) }

                    function de(e, t) { if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return pe(e, t); var n = (i.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                        ke(n > 0, 100 * n / t.baseSize, t.locations, t.handleNumbers) }

                    function pe(e, t) { t.handle && (f(t.handle, i.cssClasses.active), O -= 1), t.listeners.forEach((function(e) { z.removeEventListener(e[0], e[1]) })), 0 === O && (f(T, i.cssClasses.drag), Me(), e.cursor && (_.style.cursor = "", _.removeEventListener("selectstart", a))), t.handleNumbers.forEach((function(e) { xe("change", e), xe("set", e), xe("end", e) })) }

                    function he(e, t) { if (t.handleNumbers.some(X)) return !1; var n;
                        1 === t.handleNumbers.length && (n = p[t.handleNumbers[0]].children[0], O += 1, h(n, i.cssClasses.active)), e.stopPropagation(); var r = [],
                            o = oe(k.move, z, de, { target: e.target, handle: n, listeners: r, startCalcPoint: e.calcPoint, baseSize: re(), pageOffset: e.pageOffset, handleNumbers: t.handleNumbers, buttonsProperty: e.buttons, locations: D.slice() }),
                            s = oe(k.end, z, pe, { target: e.target, handle: n, listeners: r, doNotReject: !0, handleNumbers: t.handleNumbers }),
                            l = oe("mouseout", z, ue, { target: e.target, handle: n, listeners: r, doNotReject: !0, handleNumbers: t.handleNumbers });
                        r.push.apply(r, o.concat(s, l)), e.cursor && (_.style.cursor = getComputedStyle(e.target).cursor, p.length > 1 && h(T, i.cssClasses.drag), _.addEventListener("selectstart", a, !1)), t.handleNumbers.forEach((function(e) { xe("start", e) })) }

                    function fe(e) { e.stopPropagation(); var t = le(e.calcPoint),
                            n = ce(t); if (!1 === n) return !1;
                        i.events.snap || c(T, i.cssClasses.tap, i.animationDuration), Ae(n, t, !0, !0), Me(), xe("slide", n, !0), xe("update", n, !0), xe("change", n, !0), xe("set", n, !0), i.events.snap && he(e, { handleNumbers: [n] }) }

                    function me(e) { var t = le(e.calcPoint),
                            n = M.getStep(t),
                            i = M.fromStepping(n);
                        Object.keys(P).forEach((function(e) { "hover" === e.split(".")[0] && P[e].forEach((function(e) { e.call(E, i) })) })) }

                    function ge(e, t) { if (G() || X(t)) return !1; var n = ["Left", "Right"],
                            a = ["Down", "Up"],
                            r = ["PageDown", "PageUp"],
                            o = ["Home", "End"];
                        i.dir && !i.ort ? n.reverse() : i.ort && !i.dir && (a.reverse(), r.reverse()); var s, l = e.key.replace("Arrow", ""),
                            c = l === r[0],
                            u = l === r[1],
                            d = l === a[0] || l === n[0] || c,
                            p = l === a[1] || l === n[1] || u,
                            h = l === o[0],
                            f = l === o[1]; if (!(d || p || h || f)) return !0; if (e.preventDefault(), p || d) { var m = i.keyboardPageMultiplier,
                                g = d ? 0 : 1,
                                v = _e(t)[g]; if (null === v) return !1;!1 === v && (v = M.getDefaultStep(D[t], d, i.keyboardDefaultStep)), (u || c) && (v *= m), v = Math.max(v, 1e-7), v *= d ? -1 : 1, s = A[t] + v } else s = f ? i.spectrum.xVal[i.spectrum.xVal.length - 1] : i.spectrum.xVal[0]; return Ae(t, M.toStepping(s), !0, !0), xe("slide", t), xe("update", t), xe("change", t), xe("set", t), !1 }

                    function ve(e) { e.fixed || p.forEach((function(e, t) { oe(k.start, e.children[0], he, { handleNumbers: [t] }) })), e.tap && oe(k.start, l, fe, {}), e.hover && oe(k.move, l, me, { hover: !0 }), e.drag && b.forEach((function(t, n) { if (!1 !== t && 0 !== n && n !== b.length - 1) { var a = p[n - 1],
                                    r = p[n],
                                    o = [t];
                                h(t, i.cssClasses.draggable), e.fixed && (o.push(a.children[0]), o.push(r.children[0])), o.forEach((function(e) { oe(k.start, e, he, { handles: [a, r], handleNumbers: [n - 1, n] }) })) } })) }

                    function we(e, t) { P[e] = P[e] || [], P[e].push(t), "update" === e.split(".")[0] && p.forEach((function(e, t) { xe("update", t) })) }

                    function ye(e) { return e === $.aria || e === $.tooltips }

                    function be(e) { var t = e && e.split(".")[0],
                            n = t ? e.substring(t.length) : e;
                        Object.keys(P).forEach((function(e) { var i = e.split(".")[0],
                                a = e.substring(i.length);
                            t && t !== i || n && n !== a || ye(a) && n !== a || delete P[e] })) }

                    function xe(e, t, n) { Object.keys(P).forEach((function(a) { var r = a.split(".")[0];
                            e === r && P[a].forEach((function(e) { e.call(E, A.map(i.format.to), t, A.slice(), n || !1, D.slice(), E) })) })) }

                    function Ce(e, t, n, a, r, o) { var s; return p.length > 1 && !i.events.unconstrained && (a && t > 0 && (s = M.getAbsoluteDistance(e[t - 1], i.margin, 0), n = Math.max(n, s)), r && t < p.length - 1 && (s = M.getAbsoluteDistance(e[t + 1], i.margin, 1), n = Math.min(n, s))), p.length > 1 && i.limit && (a && t > 0 && (s = M.getAbsoluteDistance(e[t - 1], i.limit, 0), n = Math.min(n, s)), r && t < p.length - 1 && (s = M.getAbsoluteDistance(e[t + 1], i.limit, 1), n = Math.max(n, s))), i.padding && (0 === t && (s = M.getAbsoluteDistance(0, i.padding[0], 0), n = Math.max(n, s)), t === p.length - 1 && (s = M.getAbsoluteDistance(100, i.padding[1], 1), n = Math.min(n, s))), !((n = u(n = M.getStep(n))) === e[t] && !o) && n }

                    function Ee(e, t) { var n = i.ort; return (n ? t : e) + ", " + (n ? e : t) }

                    function ke(e, t, n, i) { var a = n.slice(),
                            r = [!e, e],
                            o = [e, !e];
                        i = i.slice(), e && i.reverse(), i.length > 1 ? i.forEach((function(e, n) { var i = Ce(a, e, a[e] + t, r[n], o[n], !1);!1 === i ? t = 0 : (t = i - a[e], a[e] = i) })) : r = o = [!0]; var s = !1;
                        i.forEach((function(e, i) { s = Ae(e, n[e] + t, r[i], o[i]) || s })), s && i.forEach((function(e) { xe("update", e), xe("slide", e) })) }

                    function Se(e, t) { return i.dir ? 100 - e - t : e }

                    function Te(e, t) { D[e] = t, A[e] = M.fromStepping(t); var n = "translate(" + Ee(10 * (Se(t, 0) - R) + "%", "0") + ")";
                        p[e].style[i.transformRule] = n, De(e), De(e + 1) }

                    function Me() { I.forEach((function(e) { var t = D[e] > 50 ? -1 : 1,
                                n = 3 + (p.length + t * e);
                            p[e].style.zIndex = n })) }

                    function Ae(e, t, n, i, a) { return a || (t = Ce(D, e, t, n, i, !1)), !1 !== t && (Te(e, t), !0) }

                    function De(e) { if (b[e]) { var t = 0,
                                n = 100;
                            0 !== e && (t = D[e - 1]), e !== b.length - 1 && (n = D[e]); var a = n - t,
                                r = "translate(" + Ee(Se(t, a) + "%", "0") + ")",
                                o = "scale(" + Ee(a / 100, "1") + ")";
                            b[e].style[i.transformRule] = r + " " + o } }

                    function Ie(e, t) { return null === e || !1 === e || void 0 === e ? D[t] : ("number" == typeof e && (e = String(e)), e = i.format.from(e), !1 === (e = M.toStepping(e)) || isNaN(e) ? D[t] : e) }

                    function Oe(e, t, n) { var a = d(e),
                            r = void 0 === D[0];
                        t = void 0 === t || !!t, i.animate && !r && c(T, i.cssClasses.tap, i.animationDuration), I.forEach((function(e) { Ae(e, Ie(a[e], e), !0, !1, n) })); for (var o = 1 === I.length ? 0 : 1; o < I.length; ++o) I.forEach((function(e) { Ae(e, D[e], !0, !0, n) }));
                        Me(), I.forEach((function(e) { xe("update", e), null !== a[e] && t && xe("set", e) })) }

                    function Pe(e) { Oe(i.start, e) }

                    function $e(t, n, i, a) { if (!((t = Number(t)) >= 0 && t < I.length)) throw new Error("noUiSlider (" + e + "): invalid handle number, got: " + t);
                        Ae(t, Ie(n, t), !0, !0, a), xe("update", t), i && xe("set", t) }

                    function Le() { var e = A.map(i.format.to); return 1 === e.length ? e[0] : e }

                    function ze() { for (var e in be($.aria), be($.tooltips), i.cssClasses) i.cssClasses.hasOwnProperty(e) && f(T, i.cssClasses[e]); for (; T.firstChild;) T.removeChild(T.firstChild);
                        delete T.noUiSlider }

                    function _e(e) { var t = D[e],
                            n = M.getNearbySteps(t),
                            a = A[e],
                            r = n.thisStep.step,
                            o = null; if (i.snap) return [a - n.stepBefore.startValue || null, n.stepAfter.startValue - a || null];!1 !== r && a + r > n.stepAfter.startValue && (r = n.stepAfter.startValue - a), o = a > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && a - n.stepBefore.highestStep, 100 === t ? r = null : 0 === t && (o = null); var s = M.countStepDecimals(); return null !== r && !1 !== r && (r = Number(r.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, r] }

                    function Ne() { return I.map(_e) }

                    function Fe(e, t) { var n = Le(),
                            a = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                        a.forEach((function(t) { void 0 !== e[t] && (o[t] = e[t]) })); var r = ie(o);
                        a.forEach((function(t) { void 0 !== e[t] && (i[t] = r[t]) })), M = r.spectrum, i.margin = r.margin, i.limit = r.limit, i.padding = r.padding, i.pips ? ae(i.pips) : ne(), i.tooltips ? K() : Q(), D = [], Oe(e.start || n, t) }

                    function He() { l = Y(T), W(i.connect, l), ve(i.events), Oe(i.start), i.pips && ae(i.pips), i.tooltips && K(), Z() } return He(), E = { destroy: ze, steps: Ne, on: we, off: be, get: Le, set: Oe, setHandle: $e, reset: Pe, __moveHandles: function(e, t, n) { ke(e, t, D, n) }, options: o, updateOptions: Fe, target: T, removePips: ne, removeTooltips: Q, getTooltips: function() { return C }, getOrigins: function() { return p }, pips: ae } }

                function re(t, n) { if (!t || !t.nodeName) throw new Error("noUiSlider (" + e + "): create requires a single element, got: " + t); if (t.noUiSlider) throw new Error("noUiSlider (" + e + "): Slider was already initialized."); var i = ae(t, ie(n, t), n); return t.noUiSlider = i, i } return { __spectrum: I, version: e, cssClasses: P, create: re } }) ? n.apply(t, i) : n) || (e.exports = a) }, 6797: e => { "use strict"; var t = "bfred-it:object-fit-images",
                n = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
                i = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image,
                a = "object-fit" in i.style,
                r = "object-position" in i.style,
                o = "background-size" in i.style,
                s = "string" == typeof i.currentSrc,
                l = i.getAttribute,
                c = i.setAttribute,
                u = !1;

            function d(e, t, n) { var i = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
                l.call(e, "src") !== i && c.call(e, "src", i) }

            function p(e, t) { e.naturalWidth ? t(e) : setTimeout(p, 100, e, t) }

            function h(e) { var i = function(e) { for (var t, i = getComputedStyle(e).fontFamily, a = {}; null !== (t = n.exec(i));) a[t[1]] = t[2]; return a }(e),
                    r = e[t]; if (i["object-fit"] = i["object-fit"] || "fill", !r.img) { if ("fill" === i["object-fit"]) return; if (!r.skipTest && a && !i["object-position"]) return } if (!r.img) { r.img = new Image(e.width, e.height), r.img.srcset = l.call(e, "data-ofi-srcset") || e.srcset, r.img.src = l.call(e, "data-ofi-src") || e.src, c.call(e, "data-ofi-src", e.src), e.srcset && c.call(e, "data-ofi-srcset", e.srcset), d(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = ""); try {! function(e) { var n = { get: function(n) { return e[t].img[n || "src"] }, set: function(n, i) { return e[t].img[i || "src"] = n, c.call(e, "data-ofi-" + i, n), h(e), n } };
                            Object.defineProperty(e, "src", n), Object.defineProperty(e, "currentSrc", { get: function() { return n.get("currentSrc") } }), Object.defineProperty(e, "srcset", { get: function() { return n.get("srcset") }, set: function(e) { return n.set(e, "srcset") } }) }(e) } catch (e) { window.console && console.warn("https://bit.ly/ofi-old-browser") } }! function(e) { if (e.srcset && !s && window.picturefill) { var t = window.picturefill._;
                        e[t.ns] && e[t.ns].evaled || t.fillImg(e, { reselect: !0 }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, { reselect: !0 })), e.currentSrc = e[t.ns].curSrc || e.src } }(r.img), e.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = i["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(i["object-fit"]) ? p(r.img, (function() { r.img.naturalWidth > e.width || r.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto" })) : e.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), p(r.img, (function(t) { d(e, t.naturalWidth, t.naturalHeight) })) }

            function f(e, n) { var i = !u && !e; if (n = n || {}, e = e || "img", r && !n.skipTest || !o) return !1; "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]); for (var a = 0; a < e.length; a++) e[a][t] = e[a][t] || { skipTest: n.skipTest }, h(e[a]);
                i && (document.body.addEventListener("load", (function(e) { "IMG" === e.target.tagName && f(e.target, { skipTest: n.skipTest }) }), !0), u = !0, e = "img"), n.watchMQ && window.addEventListener("resize", f.bind(null, e, { skipTest: n.skipTest })) }
            f.supportsObjectFit = a, f.supportsObjectPosition = r,
                function() {
                    function e(e, n) { return e[t] && e[t].img && ("src" === n || "srcset" === n) ? e[t].img : e }
                    r || (HTMLImageElement.prototype.getAttribute = function(t) { return l.call(e(this, t), t) }, HTMLImageElement.prototype.setAttribute = function(t, n) { return c.call(e(this, t), t, String(n)) }) }(), e.exports = f }, 5660: (e, t, n) => { var i = function(e) { var t = /\blang(?:uage)?-([\w-]+)\b/i,
                    n = 0,
                    i = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e(t) { return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function(e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function(e) { return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id }, clone: function e(t, n) { var a, r; switch (n = n || {}, i.util.type(t)) {
                                    case "Object":
                                        if (r = i.util.objId(t), n[r]) return n[r]; for (var o in a = {}, n[r] = a, t) t.hasOwnProperty(o) && (a[o] = e(t[o], n)); return a;
                                    case "Array":
                                        return r = i.util.objId(t), n[r] ? n[r] : (a = [], n[r] = a, t.forEach((function(t, i) { a[i] = e(t, n) })), a);
                                    default:
                                        return t } }, getLanguage: function(e) { for (; e && !t.test(e.className);) e = e.parentElement; return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function() { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (i) { var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack) || [])[1]; if (e) { var t = document.getElementsByTagName("script"); for (var n in t)
                                            if (t[n].src == e) return t[n] } return null } }, isActive: function(e, t, n) { for (var i = "no-" + t; e;) { var a = e.classList; if (a.contains(t)) return !0; if (a.contains(i)) return !1;
                                    e = e.parentElement } return !!n } }, languages: { extend: function(e, t) { var n = i.util.clone(i.languages[e]); for (var a in t) n[a] = t[a]; return n }, insertBefore: function(e, t, n, a) { var r = (a = a || i.languages)[e],
                                    o = {}; for (var s in r)
                                    if (r.hasOwnProperty(s)) { if (s == t)
                                            for (var l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
                                        n.hasOwnProperty(s) || (o[s] = r[s]) }
                                var c = a[e]; return a[e] = o, i.languages.DFS(i.languages, (function(t, n) { n === c && t != e && (this[t] = o) })), o }, DFS: function e(t, n, a, r) { r = r || {}; var o = i.util.objId; for (var s in t)
                                    if (t.hasOwnProperty(s)) { n.call(t, s, t[s], a || s); var l = t[s],
                                            c = i.util.type(l); "Object" !== c || r[o(l)] ? "Array" !== c || r[o(l)] || (r[o(l)] = !0, e(l, n, s, r)) : (r[o(l)] = !0, e(l, n, null, r)) } } }, plugins: {}, highlightAll: function(e, t) { i.highlightAllUnder(document, e, t) }, highlightAllUnder: function(e, t, n) { var a = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                            i.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), i.hooks.run("before-all-elements-highlight", a); for (var r, o = 0; r = a.elements[o++];) i.highlightElement(r, !0 === t, a.callback) }, highlightElement: function(n, a, r) { var o = i.util.getLanguage(n),
                                s = i.languages[o];
                            n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o; var l = n.parentElement;
                            l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o); var c = { element: n, language: o, grammar: s, code: n.textContent };

                            function u(e) { c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, i.hooks.run("after-highlight", c), i.hooks.run("complete", c), r && r.call(c.element) } if (i.hooks.run("before-sanity-check", c), !c.code) return i.hooks.run("complete", c), void(r && r.call(c.element)); if (i.hooks.run("before-highlight", c), c.grammar)
                                if (a && e.Worker) { var d = new Worker(i.filename);
                                    d.onmessage = function(e) { u(e.data) }, d.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 })) } else u(i.highlight(c.code, c.grammar, c.language));
                            else u(i.util.encode(c.code)) }, highlight: function(e, t, n) { var r = { code: e, grammar: t, language: n }; return i.hooks.run("before-tokenize", r), r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), a.stringify(i.util.encode(r.tokens), r.language) }, tokenize: function(e, t) { var n = t.rest; if (n) { for (var i in n) t[i] = n[i];
                                delete t.rest } var a = new s; return l(a, a.head, e), o(e, a, t, a.head, 0),
                                function(e) { var t = [],
                                        n = e.head.next; for (; n !== e.tail;) t.push(n.value), n = n.next; return t }(a) }, hooks: { all: {}, add: function(e, t) { var n = i.hooks.all;
                                n[e] = n[e] || [], n[e].push(t) }, run: function(e, t) { var n = i.hooks.all[e]; if (n && n.length)
                                    for (var a, r = 0; a = n[r++];) a(t) } }, Token: a };

                function a(e, t, n, i) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length }

                function r(e, t, n, i) { e.lastIndex = t; var a = e.exec(n); if (a && i && a[1]) { var r = a[1].length;
                        a.index += r, a[0] = a[0].slice(r) } return a }

                function o(e, t, n, s, u, d) { for (var p in n)
                        if (n.hasOwnProperty(p) && n[p]) { var h = n[p];
                            h = Array.isArray(h) ? h : [h]; for (var f = 0; f < h.length; ++f) { if (d && d.cause == p + "," + f) return; var m = h[f],
                                    g = m.inside,
                                    v = !!m.lookbehind,
                                    w = !!m.greedy,
                                    y = m.alias; if (w && !m.pattern.global) { var b = m.pattern.toString().match(/[imsuy]*$/)[0];
                                    m.pattern = RegExp(m.pattern.source, b + "g") } for (var x = m.pattern || m, C = s.next, E = u; C !== t.tail && !(d && E >= d.reach); E += C.value.length, C = C.next) { var k = C.value; if (t.length > e.length) return; if (!(k instanceof a)) { var S, T = 1; if (w) { if (!(S = r(x, E, e, v))) break; var M = S.index,
                                                A = S.index + S[0].length,
                                                D = E; for (D += C.value.length; M >= D;) D += (C = C.next).value.length; if (E = D -= C.value.length, C.value instanceof a) continue; for (var I = C; I !== t.tail && (D < A || "string" == typeof I.value); I = I.next) T++, D += I.value.length;
                                            T--, k = e.slice(E, D), S.index -= E } else if (!(S = r(x, 0, k, v))) continue;
                                        M = S.index; var O = S[0],
                                            P = k.slice(0, M),
                                            $ = k.slice(M + O.length),
                                            L = E + k.length;
                                        d && L > d.reach && (d.reach = L); var z = C.prev;
                                        P && (z = l(t, z, P), E += P.length), c(t, z, T), C = l(t, z, new a(p, g ? i.tokenize(O, g) : O, y, O)), $ && l(t, C, $), T > 1 && o(e, t, n, C.prev, E, { cause: p + "," + f, reach: L }) } } } } }

                function s() { var e = { value: null, prev: null, next: null },
                        t = { value: null, prev: e, next: null };
                    e.next = t, this.head = e, this.tail = t, this.length = 0 }

                function l(e, t, n) { var i = t.next,
                        a = { value: n, prev: t, next: i }; return t.next = a, i.prev = a, e.length++, a }

                function c(e, t, n) { for (var i = t.next, a = 0; a < n && i !== e.tail; a++) i = i.next;
                    t.next = i, i.prev = t, e.length -= a } if (e.Prism = i, a.stringify = function e(t, n) { if ("string" == typeof t) return t; if (Array.isArray(t)) { var a = ""; return t.forEach((function(t) { a += e(t, n) })), a } var r = { type: t.type, content: e(t.content, n), tag: "span", classes: ["token", t.type], attributes: {}, language: n },
                            o = t.alias;
                        o && (Array.isArray(o) ? Array.prototype.push.apply(r.classes, o) : r.classes.push(o)), i.hooks.run("wrap", r); var s = ""; for (var l in r.attributes) s += " " + l + '="' + (r.attributes[l] || "").replace(/"/g, "&quot;") + '"'; return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + s + ">" + r.content + "</" + r.tag + ">" }, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", (function(t) { var n = JSON.parse(t.data),
                        a = n.language,
                        r = n.code,
                        o = n.immediateClose;
                    e.postMessage(i.highlight(r, i.languages[a], a)), o && e.close() }), !1), i) : i; var u = i.util.currentScript();

                function d() { i.manual || i.highlightAll() } if (u && (i.filename = u.src, u.hasAttribute("data-manual") && (i.manual = !0)), !i.manual) { var p = document.readyState; "loading" === p || "interactive" === p && u && u.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16) } return i }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = i), void 0 !== n.g && (n.g.Prism = i), i.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, i.languages.markup.tag.inside["attr-value"].inside.entity = i.languages.markup.entity, i.languages.markup.doctype.inside["internal-subset"].inside = i.languages.markup, i.hooks.add("wrap", (function(e) { "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&")) })), Object.defineProperty(i.languages.markup.tag, "addInlined", { value: function(e, t) { var n = {};
                        n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: i.languages[t] }, n.cdata = /^<!\[CDATA\[|\]\]>$/i; var a = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
                        a["language-" + t] = { pattern: /[\s\S]+/, inside: i.languages[t] }; var r = {};
                        r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() { return e })), "i"), lookbehind: !0, greedy: !0, inside: a }, i.languages.insertBefore("markup", "cdata", r) } }), i.languages.html = i.languages.markup, i.languages.mathml = i.languages.markup, i.languages.svg = i.languages.markup, i.languages.xml = i.languages.extend("markup", {}), i.languages.ssml = i.languages.xml, i.languages.atom = i.languages.xml, i.languages.rss = i.languages.xml,
                function(e) { var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                    e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css; var n = e.languages.markup;
                    n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i, lookbehind: !0, inside: { "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { style: { pattern: /(["'])[\s\S]+(?=["']$)/, lookbehind: !0, alias: "language-css", inside: e.languages.css }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, "attr-name": /^style/i } } }, n.tag)) }(i), i.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, i.languages.javascript = i.languages.extend("clike", { "class-name": [i.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), i.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, i.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: i.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: i.languages.javascript }, { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, inside: i.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: i.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: i.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), i.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: i.languages.javascript } }, string: /[\s\S]+/ } } }), i.languages.markup && i.languages.markup.tag.addInlined("script", "javascript"), i.languages.js = i.languages.javascript,
                function() { if ("undefined" != typeof self && self.Prism && self.document) { Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector); var e = window.Prism,
                            t = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" },
                            n = "data-src-status",
                            i = "loading",
                            a = "loaded",
                            r = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                            o = /\blang(?:uage)?-([\w-]+)\b/i;
                        e.hooks.add("before-highlightall", (function(e) { e.selector += ", " + r })), e.hooks.add("before-sanity-check", (function(o) { var s = o.element; if (s.matches(r)) { o.code = "", s.setAttribute(n, i); var c = s.appendChild(document.createElement("CODE"));
                                c.textContent = "Loading…"; var u = s.getAttribute("data-src"),
                                    d = o.language; if ("none" === d) { var p = (/\.(\w+)$/.exec(u) || [, "none"])[1];
                                    d = t[p] || p }
                                l(c, d), l(s, d); var h = e.plugins.autoloader;
                                h && h.loadLanguages(d); var f = new XMLHttpRequest;
                                f.open("GET", u, !0), f.onreadystatechange = function() { var t, i;
                                    4 == f.readyState && (f.status < 400 && f.responseText ? (s.setAttribute(n, a), c.textContent = f.responseText, e.highlightElement(c)) : (s.setAttribute(n, "failed"), f.status >= 400 ? c.textContent = (t = f.status, i = f.statusText, "✖ Error " + t + " while fetching file: " + i) : c.textContent = "✖ Error: File does not exist or is empty")) }, f.send(null) } })), e.plugins.fileHighlight = { highlight: function(t) { for (var n, i = (t || document).querySelectorAll(r), a = 0; n = i[a++];) e.highlightElement(n) } }; var s = !1;
                        e.fileHighlight = function() { s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), e.plugins.fileHighlight.highlight.apply(this, arguments) } }

                    function l(e, t) { var n = e.className;
                        n = n.replace(o, " ") + " language-" + t, e.className = n.replace(/\s+/g, " ").trim() } }() }, 4155: e => { var t, n, i = e.exports = {};

            function a() { throw new Error("setTimeout has not been defined") }

            function r() { throw new Error("clearTimeout has not been defined") }

            function o(e) { if (t === setTimeout) return setTimeout(e, 0); if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0); try { return t(e, 0) } catch (n) { try { return t.call(null, e, 0) } catch (n) { return t.call(this, e, 0) } } }! function() { try { t = "function" == typeof setTimeout ? setTimeout : a } catch (e) { t = a } try { n = "function" == typeof clearTimeout ? clearTimeout : r } catch (e) { n = r } }(); var s, l = [],
                c = !1,
                u = -1;

            function d() { c && s && (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && p()) }

            function p() { if (!c) { var e = o(d);
                    c = !0; for (var t = l.length; t;) { for (s = l, l = []; ++u < t;) s && s[u].run();
                        u = -1, t = l.length }
                    s = null, c = !1,
                        function(e) { if (n === clearTimeout) return clearTimeout(e); if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e); try { n(e) } catch (t) { try { return n.call(null, e) } catch (t) { return n.call(this, e) } } }(e) } }

            function h(e, t) { this.fun = e, this.array = t }

            function f() {}
            i.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new h(e, t)), 1 !== l.length || c || o(p) }, h.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 } }, 686: (e, t, n) => { var i, a, r, o = n(9755);
            a = [n(9755)], void 0 === (r = "function" == typeof(i = function(e) { var t = function() { if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd; var n, i, a; return t && t.requirejs || (t ? i = t : t = {}, function(e) { var t, r, o, s, l = {},
                                c = {},
                                u = {},
                                d = {},
                                p = Object.prototype.hasOwnProperty,
                                h = [].slice,
                                f = /\.js$/;

                            function m(e, t) { return p.call(e, t) }

                            function g(e, t) { var n, i, a, r, o, s, l, c, d, p, h, m = t && t.split("/"),
                                    g = u.map,
                                    v = g && g["*"] || {}; if (e) { for (o = (e = e.split("/")).length - 1, u.nodeIdCompat && f.test(e[o]) && (e[o] = e[o].replace(f, "")), "." === e[0].charAt(0) && m && (e = m.slice(0, m.length - 1).concat(e)), d = 0; d < e.length; d++)
                                        if ("." === (h = e[d])) e.splice(d, 1), d -= 1;
                                        else if (".." === h) { if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                                        d > 0 && (e.splice(d - 1, 2), d -= 2) }
                                    e = e.join("/") } if ((m || v) && g) { for (d = (n = e.split("/")).length; d > 0; d -= 1) { if (i = n.slice(0, d).join("/"), m)
                                            for (p = m.length; p > 0; p -= 1)
                                                if ((a = g[m.slice(0, p).join("/")]) && (a = a[i])) { r = a, s = d; break }
                                        if (r) break;!l && v && v[i] && (l = v[i], c = d) }!r && l && (r = l, s = c), r && (n.splice(0, s, r), e = n.join("/")) } return e }

                            function v(t, n) { return function() { var i = h.call(arguments, 0); return "string" != typeof i[0] && 1 === i.length && i.push(null), r.apply(e, i.concat([t, n])) } }

                            function w(e) { return function(t) { return g(t, e) } }

                            function y(e) { return function(t) { l[e] = t } }

                            function b(n) { if (m(c, n)) { var i = c[n];
                                    delete c[n], d[n] = !0, t.apply(e, i) } if (!m(l, n) && !m(d, n)) throw new Error("No " + n); return l[n] }

                            function x(e) { var t, n = e ? e.indexOf("!") : -1; return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e] }

                            function C(e) { return e ? x(e) : [] }

                            function E(e) { return function() { return u && u.config && u.config[e] || {} } }
                            o = function(e, t) { var n, i = x(e),
                                    a = i[0],
                                    r = t[1]; return e = i[1], a && (n = b(a = g(a, r))), a ? e = n && n.normalize ? n.normalize(e, w(r)) : g(e, r) : (a = (i = x(e = g(e, r)))[0], e = i[1], a && (n = b(a))), { f: a ? a + "!" + e : e, n: e, pr: a, p: n } }, s = { require: function(e) { return v(e) }, exports: function(e) { var t = l[e]; return void 0 !== t ? t : l[e] = {} }, module: function(e) { return { id: e, uri: "", exports: l[e], config: E(e) } } }, t = function(t, n, i, a) { var r, u, p, h, f, g, w, x = [],
                                    E = typeof i; if (g = C(a = a || t), "undefined" === E || "function" === E) { for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                        if ("require" === (u = (h = o(n[f], g)).f)) x[f] = s.require(t);
                                        else if ("exports" === u) x[f] = s.exports(t), w = !0;
                                    else if ("module" === u) r = x[f] = s.module(t);
                                    else if (m(l, u) || m(c, u) || m(d, u)) x[f] = b(u);
                                    else { if (!h.p) throw new Error(t + " missing " + u);
                                        h.p.load(h.n, v(a, !0), y(u), {}), x[f] = l[u] }
                                    p = i ? i.apply(l[t], x) : void 0, t && (r && r.exports !== e && r.exports !== l[t] ? l[t] = r.exports : p === e && w || (l[t] = p)) } else t && (l[t] = i) }, n = i = r = function(n, i, a, l, c) { if ("string" == typeof n) return s[n] ? s[n](i) : b(o(n, C(i)).f); if (!n.splice) { if ((u = n).deps && r(u.deps, u.callback), !i) return;
                                    i.splice ? (n = i, i = a, a = null) : n = e } return i = i || function() {}, "function" == typeof a && (a = l, l = c), l ? t(e, n, i, a) : setTimeout((function() { t(e, n, i, a) }), 4), r }, r.config = function(e) { return r(e) }, n._defined = l, (a = function(e, t, n) { if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), m(l, e) || m(c, e) || (c[e] = [e, t, n]) }).amd = { jQuery: !0 } }(), t.requirejs = n, t.require = i, t.define = a), t.define("almond", (function() {})), t.define("jquery", [], (function() { var t = e || o; return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t })), t.define("select2/utils", ["jquery"], (function(e) { var t = {};

                            function n(e) { var t = e.prototype,
                                    n = []; for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i); return n }
                            t.Extend = function(e, t) { var n = {}.hasOwnProperty;

                                function i() { this.constructor = e } for (var a in t) n.call(t, a) && (e[a] = t[a]); return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e }, t.Decorate = function(e, t) { var i = n(t),
                                    a = n(e);

                                function r() { var n = Array.prototype.unshift,
                                        i = t.prototype.constructor.length,
                                        a = e.prototype.constructor;
                                    i > 0 && (n.call(arguments, e.prototype.constructor), a = t.prototype.constructor), a.apply(this, arguments) }

                                function o() { this.constructor = r }
                                t.displayName = e.displayName, r.prototype = new o; for (var s = 0; s < a.length; s++) { var l = a[s];
                                    r.prototype[l] = e.prototype[l] } for (var c = function(e) { var n = function() {};
                                        e in r.prototype && (n = r.prototype[e]); var i = t.prototype[e]; return function() { return Array.prototype.unshift.call(arguments, n), i.apply(this, arguments) } }, u = 0; u < i.length; u++) { var d = i[u];
                                    r.prototype[d] = c(d) } return r }; var i = function() { this.listeners = {} };
                            i.prototype.on = function(e, t) { this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t] }, i.prototype.trigger = function(e) { var t = Array.prototype.slice,
                                    n = t.call(arguments, 1);
                                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, i.prototype.invoke = function(e, t) { for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t) }, t.Observable = i, t.generateChars = function(e) { for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36); return t }, t.bind = function(e, t) { return function() { e.apply(t, arguments) } }, t._convertData = function(e) { for (var t in e) { var n = t.split("-"),
                                        i = e; if (1 !== n.length) { for (var a = 0; a < n.length; a++) { var r = n[a];
                                            (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), a == n.length - 1 && (i[r] = e[t]), i = i[r] }
                                        delete e[t] } } return e }, t.hasScroll = function(t, n) { var i = e(n),
                                    a = n.style.overflowX,
                                    r = n.style.overflowY; return (a !== r || "hidden" !== r && "visible" !== r) && ("scroll" === a || "scroll" === r || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth) }, t.escapeMarkup = function(e) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) { return t[e] })) }, t.appendMany = function(t, n) { if ("1.7" === e.fn.jquery.substr(0, 3)) { var i = e();
                                    e.map(n, (function(e) { i = i.add(e) })), n = i }
                                t.append(n) }, t.__cache = {}; var a = 0; return t.GetUniqueElementId = function(e) { var t = e.getAttribute("data-select2-id"); return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++a), t = a.toString())), t }, t.StoreData = function(e, n, i) { var a = t.GetUniqueElementId(e);
                                t.__cache[a] || (t.__cache[a] = {}), t.__cache[a][n] = i }, t.GetData = function(n, i) { var a = t.GetUniqueElementId(n); return i ? t.__cache[a] && null != t.__cache[a][i] ? t.__cache[a][i] : e(n).data(i) : t.__cache[a] }, t.RemoveData = function(e) { var n = t.GetUniqueElementId(e);
                                null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id") }, t })), t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                            function n(e, t, i) { this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this) } return t.Extend(n, t.Observable), n.prototype.render = function() { var t = e('<ul class="select2-results__options" role="listbox"></ul>'); return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t }, n.prototype.clear = function() { this.$results.empty() }, n.prototype.displayMessage = function(t) { var n = this.options.get("escapeMarkup");
                                this.clear(), this.hideLoading(); var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                                    a = this.options.get("translations").get(t.message);
                                i.append(n(a(t.args))), i[0].className += " select2-results__message", this.$results.append(i) }, n.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, n.prototype.append = function(e) { this.hideLoading(); var t = []; if (null != e.results && 0 !== e.results.length) { e.results = this.sort(e.results); for (var n = 0; n < e.results.length; n++) { var i = e.results[n],
                                            a = this.option(i);
                                        t.push(a) }
                                    this.$results.append(t) } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }) }, n.prototype.position = function(e, t) { t.find(".select2-results").append(e) }, n.prototype.sort = function(e) { return this.options.get("sorter")(e) }, n.prototype.highlightFirstItem = function() { var e = this.$results.find(".select2-results__option[aria-selected]"),
                                    t = e.filter("[aria-selected=true]");
                                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible() }, n.prototype.setClasses = function() { var n = this;
                                this.data.current((function(i) { var a = e.map(i, (function(e) { return e.id.toString() }));
                                    n.$results.find(".select2-results__option[aria-selected]").each((function() { var n = e(this),
                                            i = t.GetData(this, "data"),
                                            r = "" + i.id;
                                        null != i.element && i.element.selected || null == i.element && e.inArray(r, a) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false") })) })) }, n.prototype.showLoading = function(e) { this.hideLoading(); var t = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) },
                                    n = this.option(t);
                                n.className += " loading-results", this.$results.prepend(n) }, n.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, n.prototype.option = function(n) { var i = document.createElement("li");
                                i.className = "select2-results__option"; var a = { role: "option", "aria-selected": "false" },
                                    r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector; for (var o in (null != n.element && r.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete a["aria-selected"], a["aria-disabled"] = "true"), null == n.id && delete a["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (a.role = "group", a["aria-label"] = n.text, delete a["aria-selected"]), a) { var s = a[o];
                                    i.setAttribute(o, s) } if (n.children) { var l = e(i),
                                        c = document.createElement("strong");
                                    c.className = "select2-results__group", e(c), this.template(n, c); for (var u = [], d = 0; d < n.children.length; d++) { var p = n.children[d],
                                            h = this.option(p);
                                        u.push(h) } var f = e("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                                    f.append(u), l.append(c), l.append(f) } else this.template(n, i); return t.StoreData(i, "data", n), i }, n.prototype.bind = function(n, i) { var a = this,
                                    r = n.id + "-results";
                                this.$results.attr("id", r), n.on("results:all", (function(e) { a.clear(), a.append(e.data), n.isOpen() && (a.setClasses(), a.highlightFirstItem()) })), n.on("results:append", (function(e) { a.append(e.data), n.isOpen() && a.setClasses() })), n.on("query", (function(e) { a.hideMessages(), a.showLoading(e) })), n.on("select", (function() { n.isOpen() && (a.setClasses(), a.options.get("scrollAfterSelect") && a.highlightFirstItem()) })), n.on("unselect", (function() { n.isOpen() && (a.setClasses(), a.options.get("scrollAfterSelect") && a.highlightFirstItem()) })), n.on("open", (function() { a.$results.attr("aria-expanded", "true"), a.$results.attr("aria-hidden", "false"), a.setClasses(), a.ensureHighlightVisible() })), n.on("close", (function() { a.$results.attr("aria-expanded", "false"), a.$results.attr("aria-hidden", "true"), a.$results.removeAttr("aria-activedescendant") })), n.on("results:toggle", (function() { var e = a.getHighlightedResults();
                                    0 !== e.length && e.trigger("mouseup") })), n.on("results:select", (function() { var e = a.getHighlightedResults(); if (0 !== e.length) { var n = t.GetData(e[0], "data"); "true" == e.attr("aria-selected") ? a.trigger("close", {}) : a.trigger("select", { data: n }) } })), n.on("results:previous", (function() { var e = a.getHighlightedResults(),
                                        t = a.$results.find("[aria-selected]"),
                                        n = t.index(e); if (!(n <= 0)) { var i = n - 1;
                                        0 === e.length && (i = 0); var r = t.eq(i);
                                        r.trigger("mouseenter"); var o = a.$results.offset().top,
                                            s = r.offset().top,
                                            l = a.$results.scrollTop() + (s - o);
                                        0 === i ? a.$results.scrollTop(0) : s - o < 0 && a.$results.scrollTop(l) } })), n.on("results:next", (function() { var e = a.getHighlightedResults(),
                                        t = a.$results.find("[aria-selected]"),
                                        n = t.index(e) + 1; if (!(n >= t.length)) { var i = t.eq(n);
                                        i.trigger("mouseenter"); var r = a.$results.offset().top + a.$results.outerHeight(!1),
                                            o = i.offset().top + i.outerHeight(!1),
                                            s = a.$results.scrollTop() + o - r;
                                        0 === n ? a.$results.scrollTop(0) : o > r && a.$results.scrollTop(s) } })), n.on("results:focus", (function(e) { e.element.addClass("select2-results__option--highlighted") })), n.on("results:message", (function(e) { a.displayMessage(e) })), e.fn.mousewheel && this.$results.on("mousewheel", (function(e) { var t = a.$results.scrollTop(),
                                        n = a.$results.get(0).scrollHeight - t + e.deltaY,
                                        i = e.deltaY > 0 && t - e.deltaY <= 0,
                                        r = e.deltaY < 0 && n <= a.$results.height();
                                    i ? (a.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (a.$results.scrollTop(a.$results.get(0).scrollHeight - a.$results.height()), e.preventDefault(), e.stopPropagation()) })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) { var i = e(this),
                                        r = t.GetData(this, "data"); "true" !== i.attr("aria-selected") ? a.trigger("select", { originalEvent: n, data: r }) : a.options.get("multiple") ? a.trigger("unselect", { originalEvent: n, data: r }) : a.trigger("close", {}) })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) { var i = t.GetData(this, "data");
                                    a.getHighlightedResults().removeClass("select2-results__option--highlighted"), a.trigger("results:focus", { data: i, element: e(this) }) })) }, n.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, n.prototype.destroy = function() { this.$results.remove() }, n.prototype.ensureHighlightVisible = function() { var e = this.getHighlightedResults(); if (0 !== e.length) { var t = this.$results.find("[aria-selected]").index(e),
                                        n = this.$results.offset().top,
                                        i = e.offset().top,
                                        a = this.$results.scrollTop() + (i - n),
                                        r = i - n;
                                    a -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(a) } }, n.prototype.template = function(t, n) { var i = this.options.get("templateResult"),
                                    a = this.options.get("escapeMarkup"),
                                    r = i(t, n);
                                null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = a(r) : e(n).append(r) }, n })), t.define("select2/keys", [], (function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                            function i(e, t) { this.$element = e, this.options = t, i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n }, i.prototype.bind = function(e, t) { var i = this,
                                    a = e.id + "-results";
                                this.container = e, this.$selection.on("focus", (function(e) { i.trigger("focus", e) })), this.$selection.on("blur", (function(e) { i._handleBlur(e) })), this.$selection.on("keydown", (function(e) { i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault() })), e.on("results:focus", (function(e) { i.$selection.attr("aria-activedescendant", e.data._resultId) })), e.on("selection:update", (function(e) { i.update(e.data) })), e.on("open", (function() { i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", a), i._attachCloseHandler(e) })), e.on("close", (function() { i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e) })), e.on("enable", (function() { i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false") })), e.on("disable", (function() { i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true") })) }, i.prototype._handleBlur = function(t) { var n = this;
                                window.setTimeout((function() { document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t) }), 1) }, i.prototype._attachCloseHandler = function(n) { e(document.body).on("mousedown.select2." + n.id, (function(n) { var i = e(n.target).closest(".select2");
                                    e(".select2.select2-container--open").each((function() { this != i[0] && t.GetData(this, "element").select2("close") })) })) }, i.prototype._detachCloseHandler = function(t) { e(document.body).off("mousedown.select2." + t.id) }, i.prototype.position = function(e, t) { t.find(".selection").append(e) }, i.prototype.destroy = function() { this._detachCloseHandler(this.container) }, i.prototype.update = function(e) { throw new Error("The `update` method must be defined in child classes.") }, i.prototype.isEnabled = function() { return !this.isDisabled() }, i.prototype.isDisabled = function() { return this.options.get("disabled") }, i })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, i) {
                            function a() { a.__super__.constructor.apply(this, arguments) } return n.Extend(a, t), a.prototype.render = function() { var e = a.__super__.render.call(this); return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e }, a.prototype.bind = function(e, t) { var n = this;
                                a.__super__.bind.apply(this, arguments); var i = e.id + "-container";
                                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", (function(e) { 1 === e.which && n.trigger("toggle", { originalEvent: e }) })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), e.on("focus", (function(t) { e.isOpen() || n.$selection.trigger("focus") })) }, a.prototype.clear = function() { var e = this.$selection.find(".select2-selection__rendered");
                                e.empty(), e.removeAttr("title") }, a.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, a.prototype.selectionContainer = function() { return e("<span></span>") }, a.prototype.update = function(e) { if (0 !== e.length) { var t = e[0],
                                        n = this.$selection.find(".select2-selection__rendered"),
                                        i = this.display(t, n);
                                    n.empty().append(i); var a = t.title || t.text;
                                    a ? n.attr("title", a) : n.removeAttr("title") } else this.clear() }, a })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                            function i(e, t) { i.__super__.constructor.apply(this, arguments) } return n.Extend(i, t), i.prototype.render = function() { var e = i.__super__.render.call(this); return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e }, i.prototype.bind = function(t, a) { var r = this;
                                i.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(e) { r.trigger("toggle", { originalEvent: e }) })), this.$selection.on("click", ".select2-selection__choice__remove", (function(t) { if (!r.isDisabled()) { var i = e(this).parent(),
                                            a = n.GetData(i[0], "data");
                                        r.trigger("unselect", { originalEvent: t, data: a }) } })) }, i.prototype.clear = function() { var e = this.$selection.find(".select2-selection__rendered");
                                e.empty(), e.removeAttr("title") }, i.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, i.prototype.selectionContainer = function() { return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, i.prototype.update = function(e) { if (this.clear(), 0 !== e.length) { for (var t = [], i = 0; i < e.length; i++) { var a = e[i],
                                            r = this.selectionContainer(),
                                            o = this.display(a, r);
                                        r.append(o); var s = a.title || a.text;
                                        s && r.attr("title", s), n.StoreData(r[0], "data", a), t.push(r) } var l = this.$selection.find(".select2-selection__rendered");
                                    n.appendMany(l, t) } }, i })), t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                            function t(e, t, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n) } return t.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, t.prototype.createPlaceholder = function(e, t) { var n = this.selectionContainer(); return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n }, t.prototype.update = function(e, t) { var n = 1 == t.length && t[0].id != this.placeholder.id; if (t.length > 1 || n) return e.call(this, t);
                                this.clear(); var i = this.createPlaceholder(this.placeholder);
                                this.$selection.find(".select2-selection__rendered").append(i) }, t })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                            function i() {} return i.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(e) { i._handleClear(e) })), t.on("keypress", (function(e) { i._handleKeyboardClear(e, t) })) }, i.prototype._handleClear = function(e, t) { if (!this.isDisabled()) { var i = this.$selection.find(".select2-selection__clear"); if (0 !== i.length) { t.stopPropagation(); var a = n.GetData(i[0], "data"),
                                            r = this.$element.val();
                                        this.$element.val(this.placeholder.id); var o = { data: a }; if (this.trigger("clear", o), o.prevented) this.$element.val(r);
                                        else { for (var s = 0; s < a.length; s++)
                                                if (o = { data: a[s] }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                                            this.$element.trigger("input").trigger("change"), this.trigger("toggle", {}) } } } }, i.prototype._handleKeyboardClear = function(e, n, i) { i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n) }, i.prototype.update = function(t, i) { if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) { var a = this.options.get("translations").get("removeAllItems"),
                                        r = e('<span class="select2-selection__clear" title="' + a() + '">&times;</span>');
                                    n.StoreData(r[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(r) } }, i })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                            function i(e, t, n) { e.call(this, t, n) } return i.prototype.render = function(t) { var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                                this.$searchContainer = n, this.$search = n.find("input"); var i = t.call(this); return this._transferTabIndex(), i }, i.prototype.bind = function(e, i, a) { var r = this,
                                    o = i.id + "-results";
                                e.call(this, i, a), i.on("open", (function() { r.$search.attr("aria-controls", o), r.$search.trigger("focus") })), i.on("close", (function() { r.$search.val(""), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus") })), i.on("enable", (function() { r.$search.prop("disabled", !1), r._transferTabIndex() })), i.on("disable", (function() { r.$search.prop("disabled", !0) })), i.on("focus", (function(e) { r.$search.trigger("focus") })), i.on("results:focus", (function(e) { e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant") })), this.$selection.on("focusin", ".select2-search--inline", (function(e) { r.trigger("focus", e) })), this.$selection.on("focusout", ".select2-search--inline", (function(e) { r._handleBlur(e) })), this.$selection.on("keydown", ".select2-search--inline", (function(e) { if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) { var i = r.$searchContainer.prev(".select2-selection__choice"); if (i.length > 0) { var a = t.GetData(i[0], "data");
                                            r.searchRemoveChoice(a), e.preventDefault() } } })), this.$selection.on("click", ".select2-search--inline", (function(e) { r.$search.val() && e.stopPropagation() })); var s = document.documentMode,
                                    l = s && s <= 11;
                                this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) { l ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search") })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) { if (l && "input" === e.type) r.$selection.off("input.search input.searchcheck");
                                    else { var t = e.which;
                                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e) } })) }, i.prototype._transferTabIndex = function(e) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, i.prototype.createPlaceholder = function(e, t) { this.$search.attr("placeholder", t.text) }, i.prototype.update = function(e, t) { var n = this.$search[0] == document.activeElement;
                                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus") }, i.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var e = this.$search.val();
                                    this.trigger("query", { term: e }) }
                                this._keyUpPrevented = !1 }, i.prototype.searchRemoveChoice = function(e, t) { this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch() }, i.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var e = "";
                                e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e) }, i })), t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                            function t() {} return t.prototype.bind = function(t, n, i) { var a = this,
                                    r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                    o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                t.call(this, n, i), n.on("*", (function(t, n) { if (-1 !== e.inArray(t, r)) { n = n || {}; var i = e.Event("select2:" + t, { params: n });
                                        a.$element.trigger(i), -1 !== e.inArray(t, o) && (n.prevented = i.isDefaultPrevented()) } })) }, t })), t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                            function n(e) { this.dict = e || {} } return n.prototype.all = function() { return this.dict }, n.prototype.get = function(e) { return this.dict[e] }, n.prototype.extend = function(t) { this.dict = e.extend({}, t.all(), this.dict) }, n._cache = {}, n.loadPath = function(e) { if (!(e in n._cache)) { var i = t(e);
                                    n._cache[e] = i } return new n(n._cache[e]) }, n })), t.define("select2/diacritics", [], (function() { return { "Ⓐ": "A", Ａ: "A", À: "A", Á: "A", Â: "A", Ầ: "A", Ấ: "A", Ẫ: "A", Ẩ: "A", Ã: "A", Ā: "A", Ă: "A", Ằ: "A", Ắ: "A", Ẵ: "A", Ẳ: "A", Ȧ: "A", Ǡ: "A", Ä: "A", Ǟ: "A", Ả: "A", Å: "A", Ǻ: "A", Ǎ: "A", Ȁ: "A", Ȃ: "A", Ạ: "A", Ậ: "A", Ặ: "A", Ḁ: "A", Ą: "A", Ⱥ: "A", Ɐ: "A", Ꜳ: "AA", Æ: "AE", Ǽ: "AE", Ǣ: "AE", Ꜵ: "AO", Ꜷ: "AU", Ꜹ: "AV", Ꜻ: "AV", Ꜽ: "AY", "Ⓑ": "B", Ｂ: "B", Ḃ: "B", Ḅ: "B", Ḇ: "B", Ƀ: "B", Ƃ: "B", Ɓ: "B", "Ⓒ": "C", Ｃ: "C", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", Ç: "C", Ḉ: "C", Ƈ: "C", Ȼ: "C", Ꜿ: "C", "Ⓓ": "D", Ｄ: "D", Ḋ: "D", Ď: "D", Ḍ: "D", Ḑ: "D", Ḓ: "D", Ḏ: "D", Đ: "D", Ƌ: "D", Ɗ: "D", Ɖ: "D", Ꝺ: "D", Ǳ: "DZ", Ǆ: "DZ", ǲ: "Dz", ǅ: "Dz", "Ⓔ": "E", Ｅ: "E", È: "E", É: "E", Ê: "E", Ề: "E", Ế: "E", Ễ: "E", Ể: "E", Ẽ: "E", Ē: "E", Ḕ: "E", Ḗ: "E", Ĕ: "E", Ė: "E", Ë: "E", Ẻ: "E", Ě: "E", Ȅ: "E", Ȇ: "E", Ẹ: "E", Ệ: "E", Ȩ: "E", Ḝ: "E", Ę: "E", Ḙ: "E", Ḛ: "E", Ɛ: "E", Ǝ: "E", "Ⓕ": "F", Ｆ: "F", Ḟ: "F", Ƒ: "F", Ꝼ: "F", "Ⓖ": "G", Ｇ: "G", Ǵ: "G", Ĝ: "G", Ḡ: "G", Ğ: "G", Ġ: "G", Ǧ: "G", Ģ: "G", Ǥ: "G", Ɠ: "G", Ꞡ: "G", Ᵹ: "G", Ꝿ: "G", "Ⓗ": "H", Ｈ: "H", Ĥ: "H", Ḣ: "H", Ḧ: "H", Ȟ: "H", Ḥ: "H", Ḩ: "H", Ḫ: "H", Ħ: "H", Ⱨ: "H", Ⱶ: "H", Ɥ: "H", "Ⓘ": "I", Ｉ: "I", Ì: "I", Í: "I", Î: "I", Ĩ: "I", Ī: "I", Ĭ: "I", İ: "I", Ï: "I", Ḯ: "I", Ỉ: "I", Ǐ: "I", Ȉ: "I", Ȋ: "I", Ị: "I", Į: "I", Ḭ: "I", Ɨ: "I", "Ⓙ": "J", Ｊ: "J", Ĵ: "J", Ɉ: "J", "Ⓚ": "K", Ｋ: "K", Ḱ: "K", Ǩ: "K", Ḳ: "K", Ķ: "K", Ḵ: "K", Ƙ: "K", Ⱪ: "K", Ꝁ: "K", Ꝃ: "K", Ꝅ: "K", Ꞣ: "K", "Ⓛ": "L", Ｌ: "L", Ŀ: "L", Ĺ: "L", Ľ: "L", Ḷ: "L", Ḹ: "L", Ļ: "L", Ḽ: "L", Ḻ: "L", Ł: "L", Ƚ: "L", Ɫ: "L", Ⱡ: "L", Ꝉ: "L", Ꝇ: "L", Ꞁ: "L", Ǉ: "LJ", ǈ: "Lj", "Ⓜ": "M", Ｍ: "M", Ḿ: "M", Ṁ: "M", Ṃ: "M", Ɱ: "M", Ɯ: "M", "Ⓝ": "N", Ｎ: "N", Ǹ: "N", Ń: "N", Ñ: "N", Ṅ: "N", Ň: "N", Ṇ: "N", Ņ: "N", Ṋ: "N", Ṉ: "N", Ƞ: "N", Ɲ: "N", Ꞑ: "N", Ꞥ: "N", Ǌ: "NJ", ǋ: "Nj", "Ⓞ": "O", Ｏ: "O", Ò: "O", Ó: "O", Ô: "O", Ồ: "O", Ố: "O", Ỗ: "O", Ổ: "O", Õ: "O", Ṍ: "O", Ȭ: "O", Ṏ: "O", Ō: "O", Ṑ: "O", Ṓ: "O", Ŏ: "O", Ȯ: "O", Ȱ: "O", Ö: "O", Ȫ: "O", Ỏ: "O", Ő: "O", Ǒ: "O", Ȍ: "O", Ȏ: "O", Ơ: "O", Ờ: "O", Ớ: "O", Ỡ: "O", Ở: "O", Ợ: "O", Ọ: "O", Ộ: "O", Ǫ: "O", Ǭ: "O", Ø: "O", Ǿ: "O", Ɔ: "O", Ɵ: "O", Ꝋ: "O", Ꝍ: "O", Œ: "OE", Ƣ: "OI", Ꝏ: "OO", Ȣ: "OU", "Ⓟ": "P", Ｐ: "P", Ṕ: "P", Ṗ: "P", Ƥ: "P", Ᵽ: "P", Ꝑ: "P", Ꝓ: "P", Ꝕ: "P", "Ⓠ": "Q", Ｑ: "Q", Ꝗ: "Q", Ꝙ: "Q", Ɋ: "Q", "Ⓡ": "R", Ｒ: "R", Ŕ: "R", Ṙ: "R", Ř: "R", Ȑ: "R", Ȓ: "R", Ṛ: "R", Ṝ: "R", Ŗ: "R", Ṟ: "R", Ɍ: "R", Ɽ: "R", Ꝛ: "R", Ꞧ: "R", Ꞃ: "R", "Ⓢ": "S", Ｓ: "S", ẞ: "S", Ś: "S", Ṥ: "S", Ŝ: "S", Ṡ: "S", Š: "S", Ṧ: "S", Ṣ: "S", Ṩ: "S", Ș: "S", Ş: "S", Ȿ: "S", Ꞩ: "S", Ꞅ: "S", "Ⓣ": "T", Ｔ: "T", Ṫ: "T", Ť: "T", Ṭ: "T", Ț: "T", Ţ: "T", Ṱ: "T", Ṯ: "T", Ŧ: "T", Ƭ: "T", Ʈ: "T", Ⱦ: "T", Ꞇ: "T", Ꜩ: "TZ", "Ⓤ": "U", Ｕ: "U", Ù: "U", Ú: "U", Û: "U", Ũ: "U", Ṹ: "U", Ū: "U", Ṻ: "U", Ŭ: "U", Ü: "U", Ǜ: "U", Ǘ: "U", Ǖ: "U", Ǚ: "U", Ủ: "U", Ů: "U", Ű: "U", Ǔ: "U", Ȕ: "U", Ȗ: "U", Ư: "U", Ừ: "U", Ứ: "U", Ữ: "U", Ử: "U", Ự: "U", Ụ: "U", Ṳ: "U", Ų: "U", Ṷ: "U", Ṵ: "U", Ʉ: "U", "Ⓥ": "V", Ｖ: "V", Ṽ: "V", Ṿ: "V", Ʋ: "V", Ꝟ: "V", Ʌ: "V", Ꝡ: "VY", "Ⓦ": "W", Ｗ: "W", Ẁ: "W", Ẃ: "W", Ŵ: "W", Ẇ: "W", Ẅ: "W", Ẉ: "W", Ⱳ: "W", "Ⓧ": "X", Ｘ: "X", Ẋ: "X", Ẍ: "X", "Ⓨ": "Y", Ｙ: "Y", Ỳ: "Y", Ý: "Y", Ŷ: "Y", Ỹ: "Y", Ȳ: "Y", Ẏ: "Y", Ÿ: "Y", Ỷ: "Y", Ỵ: "Y", Ƴ: "Y", Ɏ: "Y", Ỿ: "Y", "Ⓩ": "Z", Ｚ: "Z", Ź: "Z", Ẑ: "Z", Ż: "Z", Ž: "Z", Ẓ: "Z", Ẕ: "Z", Ƶ: "Z", Ȥ: "Z", Ɀ: "Z", Ⱬ: "Z", Ꝣ: "Z", "ⓐ": "a", ａ: "a", ẚ: "a", à: "a", á: "a", â: "a", ầ: "a", ấ: "a", ẫ: "a", ẩ: "a", ã: "a", ā: "a", ă: "a", ằ: "a", ắ: "a", ẵ: "a", ẳ: "a", ȧ: "a", ǡ: "a", ä: "a", ǟ: "a", ả: "a", å: "a", ǻ: "a", ǎ: "a", ȁ: "a", ȃ: "a", ạ: "a", ậ: "a", ặ: "a", ḁ: "a", ą: "a", ⱥ: "a", ɐ: "a", ꜳ: "aa", æ: "ae", ǽ: "ae", ǣ: "ae", ꜵ: "ao", ꜷ: "au", ꜹ: "av", ꜻ: "av", ꜽ: "ay", "ⓑ": "b", ｂ: "b", ḃ: "b", ḅ: "b", ḇ: "b", ƀ: "b", ƃ: "b", ɓ: "b", "ⓒ": "c", ｃ: "c", ć: "c", ĉ: "c", ċ: "c", č: "c", ç: "c", ḉ: "c", ƈ: "c", ȼ: "c", ꜿ: "c", ↄ: "c", "ⓓ": "d", ｄ: "d", ḋ: "d", ď: "d", ḍ: "d", ḑ: "d", ḓ: "d", ḏ: "d", đ: "d", ƌ: "d", ɖ: "d", ɗ: "d", ꝺ: "d", ǳ: "dz", ǆ: "dz", "ⓔ": "e", ｅ: "e", è: "e", é: "e", ê: "e", ề: "e", ế: "e", ễ: "e", ể: "e", ẽ: "e", ē: "e", ḕ: "e", ḗ: "e", ĕ: "e", ė: "e", ë: "e", ẻ: "e", ě: "e", ȅ: "e", ȇ: "e", ẹ: "e", ệ: "e", ȩ: "e", ḝ: "e", ę: "e", ḙ: "e", ḛ: "e", ɇ: "e", ɛ: "e", ǝ: "e", "ⓕ": "f", ｆ: "f", ḟ: "f", ƒ: "f", ꝼ: "f", "ⓖ": "g", ｇ: "g", ǵ: "g", ĝ: "g", ḡ: "g", ğ: "g", ġ: "g", ǧ: "g", ģ: "g", ǥ: "g", ɠ: "g", ꞡ: "g", ᵹ: "g", ꝿ: "g", "ⓗ": "h", ｈ: "h", ĥ: "h", ḣ: "h", ḧ: "h", ȟ: "h", ḥ: "h", ḩ: "h", ḫ: "h", ẖ: "h", ħ: "h", ⱨ: "h", ⱶ: "h", ɥ: "h", ƕ: "hv", "ⓘ": "i", ｉ: "i", ì: "i", í: "i", î: "i", ĩ: "i", ī: "i", ĭ: "i", ï: "i", ḯ: "i", ỉ: "i", ǐ: "i", ȉ: "i", ȋ: "i", ị: "i", į: "i", ḭ: "i", ɨ: "i", ı: "i", "ⓙ": "j", ｊ: "j", ĵ: "j", ǰ: "j", ɉ: "j", "ⓚ": "k", ｋ: "k", ḱ: "k", ǩ: "k", ḳ: "k", ķ: "k", ḵ: "k", ƙ: "k", ⱪ: "k", ꝁ: "k", ꝃ: "k", ꝅ: "k", ꞣ: "k", "ⓛ": "l", ｌ: "l", ŀ: "l", ĺ: "l", ľ: "l", ḷ: "l", ḹ: "l", ļ: "l", ḽ: "l", ḻ: "l", ſ: "l", ł: "l", ƚ: "l", ɫ: "l", ⱡ: "l", ꝉ: "l", ꞁ: "l", ꝇ: "l", ǉ: "lj", "ⓜ": "m", ｍ: "m", ḿ: "m", ṁ: "m", ṃ: "m", ɱ: "m", ɯ: "m", "ⓝ": "n", ｎ: "n", ǹ: "n", ń: "n", ñ: "n", ṅ: "n", ň: "n", ṇ: "n", ņ: "n", ṋ: "n", ṉ: "n", ƞ: "n", ɲ: "n", ŉ: "n", ꞑ: "n", ꞥ: "n", ǌ: "nj", "ⓞ": "o", ｏ: "o", ò: "o", ó: "o", ô: "o", ồ: "o", ố: "o", ỗ: "o", ổ: "o", õ: "o", ṍ: "o", ȭ: "o", ṏ: "o", ō: "o", ṑ: "o", ṓ: "o", ŏ: "o", ȯ: "o", ȱ: "o", ö: "o", ȫ: "o", ỏ: "o", ő: "o", ǒ: "o", ȍ: "o", ȏ: "o", ơ: "o", ờ: "o", ớ: "o", ỡ: "o", ở: "o", ợ: "o", ọ: "o", ộ: "o", ǫ: "o", ǭ: "o", ø: "o", ǿ: "o", ɔ: "o", ꝋ: "o", ꝍ: "o", ɵ: "o", œ: "oe", ƣ: "oi", ȣ: "ou", ꝏ: "oo", "ⓟ": "p", ｐ: "p", ṕ: "p", ṗ: "p", ƥ: "p", ᵽ: "p", ꝑ: "p", ꝓ: "p", ꝕ: "p", "ⓠ": "q", ｑ: "q", ɋ: "q", ꝗ: "q", ꝙ: "q", "ⓡ": "r", ｒ: "r", ŕ: "r", ṙ: "r", ř: "r", ȑ: "r", ȓ: "r", ṛ: "r", ṝ: "r", ŗ: "r", ṟ: "r", ɍ: "r", ɽ: "r", ꝛ: "r", ꞧ: "r", ꞃ: "r", "ⓢ": "s", ｓ: "s", ß: "s", ś: "s", ṥ: "s", ŝ: "s", ṡ: "s", š: "s", ṧ: "s", ṣ: "s", ṩ: "s", ș: "s", ş: "s", ȿ: "s", ꞩ: "s", ꞅ: "s", ẛ: "s", "ⓣ": "t", ｔ: "t", ṫ: "t", ẗ: "t", ť: "t", ṭ: "t", ț: "t", ţ: "t", ṱ: "t", ṯ: "t", ŧ: "t", ƭ: "t", ʈ: "t", ⱦ: "t", ꞇ: "t", ꜩ: "tz", "ⓤ": "u", ｕ: "u", ù: "u", ú: "u", û: "u", ũ: "u", ṹ: "u", ū: "u", ṻ: "u", ŭ: "u", ü: "u", ǜ: "u", ǘ: "u", ǖ: "u", ǚ: "u", ủ: "u", ů: "u", ű: "u", ǔ: "u", ȕ: "u", ȗ: "u", ư: "u", ừ: "u", ứ: "u", ữ: "u", ử: "u", ự: "u", ụ: "u", ṳ: "u", ų: "u", ṷ: "u", ṵ: "u", ʉ: "u", "ⓥ": "v", ｖ: "v", ṽ: "v", ṿ: "v", ʋ: "v", ꝟ: "v", ʌ: "v", ꝡ: "vy", "ⓦ": "w", ｗ: "w", ẁ: "w", ẃ: "w", ŵ: "w", ẇ: "w", ẅ: "w", ẘ: "w", ẉ: "w", ⱳ: "w", "ⓧ": "x", ｘ: "x", ẋ: "x", ẍ: "x", "ⓨ": "y", ｙ: "y", ỳ: "y", ý: "y", ŷ: "y", ỹ: "y", ȳ: "y", ẏ: "y", ÿ: "y", ỷ: "y", ẙ: "y", ỵ: "y", ƴ: "y", ɏ: "y", ỿ: "y", "ⓩ": "z", ｚ: "z", ź: "z", ẑ: "z", ż: "z", ž: "z", ẓ: "z", ẕ: "z", ƶ: "z", ȥ: "z", ɀ: "z", ⱬ: "z", ꝣ: "z", Ά: "Α", Έ: "Ε", Ή: "Η", Ί: "Ι", Ϊ: "Ι", Ό: "Ο", Ύ: "Υ", Ϋ: "Υ", Ώ: "Ω", ά: "α", έ: "ε", ή: "η", ί: "ι", ϊ: "ι", ΐ: "ι", ό: "ο", ύ: "υ", ϋ: "υ", ΰ: "υ", ώ: "ω", ς: "σ", "’": "'" } })), t.define("select2/data/base", ["../utils"], (function(e) {
                            function t(e, n) { t.__super__.constructor.call(this) } return e.Extend(t, e.Observable), t.prototype.current = function(e) { throw new Error("The `current` method must be defined in child classes.") }, t.prototype.query = function(e, t) { throw new Error("The `query` method must be defined in child classes.") }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) { var i = t.id + "-result-"; return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i }, t })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                            function i(e, t) { this.$element = e, this.options = t, i.__super__.constructor.call(this) } return t.Extend(i, e), i.prototype.current = function(e) { var t = [],
                                    i = this;
                                this.$element.find(":selected").each((function() { var e = n(this),
                                        a = i.item(e);
                                    t.push(a) })), e(t) }, i.prototype.select = function(e) { var t = this; if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change"); if (this.$element.prop("multiple")) this.current((function(i) { var a = [];
                                    (e = [e]).push.apply(e, i); for (var r = 0; r < e.length; r++) { var o = e[r].id; - 1 === n.inArray(o, a) && a.push(o) }
                                    t.$element.val(a), t.$element.trigger("input").trigger("change") }));
                                else { var i = e.id;
                                    this.$element.val(i), this.$element.trigger("input").trigger("change") } }, i.prototype.unselect = function(e) { var t = this; if (this.$element.prop("multiple")) { if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
                                    this.current((function(i) { for (var a = [], r = 0; r < i.length; r++) { var o = i[r].id;
                                            o !== e.id && -1 === n.inArray(o, a) && a.push(o) }
                                        t.$element.val(a), t.$element.trigger("input").trigger("change") })) } }, i.prototype.bind = function(e, t) { var n = this;
                                this.container = e, e.on("select", (function(e) { n.select(e.data) })), e.on("unselect", (function(e) { n.unselect(e.data) })) }, i.prototype.destroy = function() { this.$element.find("*").each((function() { t.RemoveData(this) })) }, i.prototype.query = function(e, t) { var i = [],
                                    a = this;
                                this.$element.children().each((function() { var t = n(this); if (t.is("option") || t.is("optgroup")) { var r = a.item(t),
                                            o = a.matches(e, r);
                                        null !== o && i.push(o) } })), t({ results: i }) }, i.prototype.addOptions = function(e) { t.appendMany(this.$element, e) }, i.prototype.option = function(e) { var i;
                                e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title); var a = n(i),
                                    r = this._normalizeItem(e); return r.element = i, t.StoreData(i, "data", r), a }, i.prototype.item = function(e) { var i = {}; if (null != (i = t.GetData(e[0], "data"))) return i; if (e.is("option")) i = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                                else if (e.is("optgroup")) { i = { text: e.prop("label"), children: [], title: e.prop("title") }; for (var a = e.children("option"), r = [], o = 0; o < a.length; o++) { var s = n(a[o]),
                                            l = this.item(s);
                                        r.push(l) }
                                    i.children = r } return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i }, i.prototype._normalizeItem = function(e) { e !== Object(e) && (e = { id: e, text: e }); var t = { selected: !1, disabled: !1 }; return null != (e = n.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e) }, i.prototype.matches = function(e, t) { return this.options.get("matcher")(e, t) }, i })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                            function i(e, t) { this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t) } return t.Extend(i, e), i.prototype.bind = function(e, t) { i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert)) }, i.prototype.select = function(e) { var t = this.$element.find("option").filter((function(t, n) { return n.value == e.id.toString() }));
                                0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e) }, i.prototype.convertToOptions = function(e) { var i = this,
                                    a = this.$element.find("option"),
                                    r = a.map((function() { return i.item(n(this)).id })).get(),
                                    o = [];

                                function s(e) { return function() { return n(this).val() == e.id } } for (var l = 0; l < e.length; l++) { var c = this._normalizeItem(e[l]); if (n.inArray(c.id, r) >= 0) { var u = a.filter(s(c)),
                                            d = this.item(u),
                                            p = n.extend(!0, {}, c, d),
                                            h = this.option(p);
                                        u.replaceWith(h) } else { var f = this.option(c); if (c.children) { var m = this.convertToOptions(c.children);
                                            t.appendMany(f, m) }
                                        o.push(f) } } return o }, i })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                            function i(e, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t) } return t.Extend(i, e), i.prototype._applyDefaults = function(e) { var t = { data: function(e) { return n.extend({}, e, { q: e.term }) }, transport: function(e, t, i) { var a = n.ajax(e); return a.then(t), a.fail(i), a } }; return n.extend({}, t, e, !0) }, i.prototype.processResults = function(e) { return e }, i.prototype.query = function(e, t) { var i = this;
                                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null); var a = n.extend({ type: "GET" }, this.ajaxOptions);

                                function r() { var r = a.transport(a, (function(a) { var r = i.processResults(a, e);
                                        i.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(r) }), (function() {
                                        (!("status" in r) || 0 !== r.status && "0" !== r.status) && i.trigger("results:message", { message: "errorLoading" }) }));
                                    i._request = r } "function" == typeof a.url && (a.url = a.url.call(this.$element, e)), "function" == typeof a.data && (a.data = a.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r() }, i })), t.define("select2/data/tags", ["jquery"], (function(e) {
                            function t(t, n, i) { var a = i.get("tags"),
                                    r = i.get("createTag");
                                void 0 !== r && (this.createTag = r); var o = i.get("insertTag"); if (void 0 !== o && (this.insertTag = o), t.call(this, n, i), e.isArray(a))
                                    for (var s = 0; s < a.length; s++) { var l = a[s],
                                            c = this._normalizeItem(l),
                                            u = this.option(c);
                                        this.$element.append(u) } } return t.prototype.query = function(e, t, n) { var i = this;

                                function a(e, r) { for (var o = e.results, s = 0; s < o.length; s++) { var l = o[s],
                                            c = null != l.children && !a({ results: l.children }, !0); if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !r && (e.data = o, void n(e)) } if (r) return !0; var u = i.createTag(t); if (null != u) { var d = i.option(u);
                                        d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(o, u) }
                                    e.results = o, n(e) }
                                this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, a) : e.call(this, t, n) }, t.prototype.createTag = function(t, n) { var i = e.trim(n.term); return "" === i ? null : { id: i, text: i } }, t.prototype.insertTag = function(e, t, n) { t.unshift(n) }, t.prototype._removeOldTags = function(t) { this.$element.find("option[data-select2-tag]").each((function() { this.selected || e(this).remove() })) }, t })), t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                            function t(e, t, n) { var i = n.get("tokenizer");
                                void 0 !== i && (this.tokenizer = i), e.call(this, t, n) } return t.prototype.bind = function(e, t, n) { e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field") }, t.prototype.query = function(t, n, i) { var a = this;

                                function r(t) { var n = a._normalizeItem(t); if (!a.$element.find("option").filter((function() { return e(this).val() === n.id })).length) { var i = a.option(n);
                                        i.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([i]) }
                                    o(n) }

                                function o(e) { a.trigger("select", { data: e }) }
                                n.term = n.term || ""; var s = this.tokenizer(n, this.options, r);
                                s.term !== n.term && (this.$search.length && (this.$search.val(s.term), this.$search.trigger("focus")), n.term = s.term), t.call(this, n, i) }, t.prototype.tokenizer = function(t, n, i, a) { for (var r = i.get("tokenSeparators") || [], o = n.term, s = 0, l = this.createTag || function(e) { return { id: e.term, text: e.term } }; s < o.length;) { var c = o[s]; if (-1 !== e.inArray(c, r)) { var u = o.substr(0, s),
                                            d = l(e.extend({}, n, { term: u }));
                                        null != d ? (a(d), o = o.substr(s + 1) || "", s = 0) : s++ } else s++ } return { term: o } }, t })), t.define("select2/data/minimumInputLength", [], (function() {
                            function e(e, t, n) { this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n) } return e.prototype.query = function(e, t, n) { t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e })), t.define("select2/data/maximumInputLength", [], (function() {
                            function e(e, t, n) { this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n) } return e.prototype.query = function(e, t, n) { t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e })), t.define("select2/data/maximumSelectionLength", [], (function() {
                            function e(e, t, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n) } return e.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), t.on("select", (function() { i._checkIfMaximumSelected() })) }, e.prototype.query = function(e, t, n) { var i = this;
                                this._checkIfMaximumSelected((function() { e.call(i, t, n) })) }, e.prototype._checkIfMaximumSelected = function(e, t) { var n = this;
                                this.current((function(e) { var i = null != e ? e.length : 0;
                                    n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", { message: "maximumSelected", args: { maximum: n.maximumSelectionLength } }) : t && t() })) }, e })), t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                            function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) } return t.Extend(n, t.Observable), n.prototype.render = function() { var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() { this.$dropdown.remove() }, n })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                            function n() {} return n.prototype.render = function(t) { var n = t.call(this),
                                    i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'); return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n }, n.prototype.bind = function(t, n, i) { var a = this,
                                    r = n.id + "-results";
                                t.call(this, n, i), this.$search.on("keydown", (function(e) { a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented() })), this.$search.on("input", (function(t) { e(this).off("keyup") })), this.$search.on("keyup input", (function(e) { a.handleSearch(e) })), n.on("open", (function() { a.$search.attr("tabindex", 0), a.$search.attr("aria-controls", r), a.$search.trigger("focus"), window.setTimeout((function() { a.$search.trigger("focus") }), 0) })), n.on("close", (function() { a.$search.attr("tabindex", -1), a.$search.removeAttr("aria-controls"), a.$search.removeAttr("aria-activedescendant"), a.$search.val(""), a.$search.trigger("blur") })), n.on("focus", (function() { n.isOpen() || a.$search.trigger("focus") })), n.on("results:all", (function(e) { null != e.query.term && "" !== e.query.term || (a.showSearch(e) ? a.$searchContainer.removeClass("select2-search--hide") : a.$searchContainer.addClass("select2-search--hide")) })), n.on("results:focus", (function(e) { e.data._resultId ? a.$search.attr("aria-activedescendant", e.data._resultId) : a.$search.removeAttr("aria-activedescendant") })) }, n.prototype.handleSearch = function(e) { if (!this._keyUpPrevented) { var t = this.$search.val();
                                    this.trigger("query", { term: t }) }
                                this._keyUpPrevented = !1 }, n.prototype.showSearch = function(e, t) { return !0 }, n })), t.define("select2/dropdown/hidePlaceholder", [], (function() {
                            function e(e, t, n, i) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i) } return e.prototype.append = function(e, t) { t.results = this.removePlaceholder(t.results), e.call(this, t) }, e.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, e.prototype.removePlaceholder = function(e, t) { for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) { var a = t[i];
                                    this.placeholder.id === a.id && n.splice(i, 1) } return n }, e })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                            function t(e, t, n, i) { this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return t.prototype.append = function(e, t) { this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded()) }, t.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), t.on("query", (function(e) { i.lastParams = e, i.loading = !0 })), t.on("query:append", (function(e) { i.lastParams = e, i.loading = !0 })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this)) }, t.prototype.loadMoreIfNeeded = function() { var t = e.contains(document.documentElement, this.$loadingMore[0]);!this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore() }, t.prototype.loadMore = function() { this.loading = !0; var t = e.extend({}, { page: 1 }, this.lastParams);
                                t.page++, this.trigger("query:append", t) }, t.prototype.showLoadingMore = function(e, t) { return t.pagination && t.pagination.more }, t.prototype.createLoadingMore = function() { var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                                    n = this.options.get("translations").get("loadingMore"); return t.html(n(this.lastParams)), t }, t })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                            function n(t, n, i) { this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i) } return n.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), t.on("open", (function() { i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t) })), t.on("close", (function() { i._hideDropdown(), i._detachPositioningHandler(t) })), this.$dropdownContainer.on("mousedown", (function(e) { e.stopPropagation() })) }, n.prototype.destroy = function(e) { e.call(this), this.$dropdownContainer.remove() }, n.prototype.position = function(e, t, n) { t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), this.$container = n }, n.prototype.render = function(t) { var n = e("<span></span>"),
                                    i = t.call(this); return n.append(i), this.$dropdownContainer = n, n }, n.prototype._hideDropdown = function(e) { this.$dropdownContainer.detach() }, n.prototype._bindContainerResultHandlers = function(e, t) { if (!this._containerResultsHandlersBound) { var n = this;
                                    t.on("results:all", (function() { n._positionDropdown(), n._resizeDropdown() })), t.on("results:append", (function() { n._positionDropdown(), n._resizeDropdown() })), t.on("results:message", (function() { n._positionDropdown(), n._resizeDropdown() })), t.on("select", (function() { n._positionDropdown(), n._resizeDropdown() })), t.on("unselect", (function() { n._positionDropdown(), n._resizeDropdown() })), this._containerResultsHandlersBound = !0 } }, n.prototype._attachPositioningHandler = function(n, i) { var a = this,
                                    r = "scroll.select2." + i.id,
                                    o = "resize.select2." + i.id,
                                    s = "orientationchange.select2." + i.id,
                                    l = this.$container.parents().filter(t.hasScroll);
                                l.each((function() { t.StoreData(this, "select2-scroll-position", { x: e(this).scrollLeft(), y: e(this).scrollTop() }) })), l.on(r, (function(n) { var i = t.GetData(this, "select2-scroll-position");
                                    e(this).scrollTop(i.y) })), e(window).on(r + " " + o + " " + s, (function(e) { a._positionDropdown(), a._resizeDropdown() })) }, n.prototype._detachPositioningHandler = function(n, i) { var a = "scroll.select2." + i.id,
                                    r = "resize.select2." + i.id,
                                    o = "orientationchange.select2." + i.id;
                                this.$container.parents().filter(t.hasScroll).off(a), e(window).off(a + " " + r + " " + o) }, n.prototype._positionDropdown = function() { var t = e(window),
                                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                                    i = this.$dropdown.hasClass("select2-dropdown--below"),
                                    a = null,
                                    r = this.$container.offset();
                                r.bottom = r.top + this.$container.outerHeight(!1); var o = { height: this.$container.outerHeight(!1) };
                                o.top = r.top, o.bottom = r.top + o.height; var s = { height: this.$dropdown.outerHeight(!1) },
                                    l = { top: t.scrollTop(), bottom: t.scrollTop() + t.height() },
                                    c = l.top < r.top - s.height,
                                    u = l.bottom > r.bottom + s.height,
                                    d = { left: r.left, top: o.bottom },
                                    p = this.$dropdownParent; "static" === p.css("position") && (p = p.offsetParent()); var h = { top: 0, left: 0 };
                                (e.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, n || i || (a = "below"), u || !c || n ? !c && u && n && (a = "below") : a = "above", ("above" == a || n && "below" !== a) && (d.top = o.top - h.top - s.height), null != a && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + a), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + a)), this.$dropdownContainer.css(d) }, n.prototype._resizeDropdown = function() { var e = { width: this.$container.outerWidth(!1) + "px" };
                                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e) }, n.prototype._showDropdown = function(e) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, n })), t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                            function e(t) { for (var n = 0, i = 0; i < t.length; i++) { var a = t[i];
                                    a.children ? n += e(a.children) : n++ } return n }

                            function t(e, t, n, i) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i) } return t.prototype.showSearch = function(t, n) { return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n) }, t })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                            function t() {} return t.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), t.on("close", (function(e) { i._handleSelectOnClose(e) })) }, t.prototype._handleSelectOnClose = function(t, n) { if (n && null != n.originalSelect2Event) { var i = n.originalSelect2Event; if ("select" === i._type || "unselect" === i._type) return } var a = this.getHighlightedResults(); if (!(a.length < 1)) { var r = e.GetData(a[0], "data");
                                    null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", { data: r }) } }, t })), t.define("select2/dropdown/closeOnSelect", [], (function() {
                            function e() {} return e.prototype.bind = function(e, t, n) { var i = this;
                                e.call(this, t, n), t.on("select", (function(e) { i._selectTriggered(e) })), t.on("unselect", (function(e) { i._selectTriggered(e) })) }, e.prototype._selectTriggered = function(e, t) { var n = t.originalEvent;
                                n && (n.ctrlKey || n.metaKey) || this.trigger("close", { originalEvent: n, originalSelect2Event: t }) }, e })), t.define("select2/i18n/en", [], (function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(e) { var t = e.input.length - e.maximum,
                                        n = "Please delete " + t + " character"; return 1 != t && (n += "s"), n }, inputTooShort: function(e) { return "Please enter " + (e.minimum - e.input.length) + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(e) { var t = "You can only select " + e.maximum + " item"; return 1 != e.maximum && (t += "s"), t }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" }, removeAllItems: function() { return "Remove all items" } } })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, i, a, r, o, s, l, c, u, d, p, h, f, m, g, v, w, y, b, x, C, E, k, S, T, M, A) {
                            function D() { this.reset() } return D.prototype.apply = function(u) { if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) { if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = h : u.dataAdapter = p, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, w)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null != u.query) { var d = t(u.amdBase + "compat/query");
                                        u.dataAdapter = c.Decorate(u.dataAdapter, d) } if (null != u.initSelection) { var A = t(u.amdBase + "compat/initSelection");
                                        u.dataAdapter = c.Decorate(u.dataAdapter, A) } } if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, E)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T))), null == u.dropdownAdapter) { if (u.multiple) u.dropdownAdapter = b;
                                    else { var D = c.Decorate(b, x);
                                        u.dropdownAdapter = D } if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, M)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) { var I = t(u.amdBase + "compat/dropdownCss");
                                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, I) }
                                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k) } if (null == u.selectionAdapter) { if (u.multiple ? u.selectionAdapter = a : u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) { var O = t(u.amdBase + "compat/containerCss");
                                        u.selectionAdapter = c.Decorate(u.selectionAdapter, O) }
                                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l) }
                                u.language = this._resolveLanguage(u.language), u.language.push("en"); for (var P = [], $ = 0; $ < u.language.length; $++) { var L = u.language[$]; - 1 === P.indexOf(L) && P.push(L) } return u.language = P, u.translations = this._processTranslations(u.language, u.debug), u }, D.prototype.reset = function() {
                                function t(e) {
                                    function t(e) { return d[e] || e } return e.replace(/[^\u0000-\u007E]/g, t) }

                                function n(i, a) { if ("" === e.trim(i.term)) return a; if (a.children && a.children.length > 0) { for (var r = e.extend(!0, {}, a), o = a.children.length - 1; o >= 0; o--) null == n(i, a.children[o]) && r.children.splice(o, 1); return r.children.length > 0 ? r : n(i, r) } var s = t(a.text).toUpperCase(),
                                        l = t(i.term).toUpperCase(); return s.indexOf(l) > -1 ? a : null }
                                this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: c.escapeMarkup, language: {}, matcher: n, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, scrollAfterSelect: !1, sorter: function(e) { return e }, templateResult: function(e) { return e.text }, templateSelection: function(e) { return e.text }, theme: "default", width: "resolve" } }, D.prototype.applyFromElement = function(e, t) { var n = e.language,
                                    i = this.defaults.language,
                                    a = t.prop("lang"),
                                    r = t.closest("[lang]").prop("lang"),
                                    o = Array.prototype.concat.call(this._resolveLanguage(a), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(r)); return e.language = o, e }, D.prototype._resolveLanguage = function(t) { if (!t) return []; if (e.isEmptyObject(t)) return []; if (e.isPlainObject(t)) return [t]; var n;
                                n = e.isArray(t) ? t : [t]; for (var i = [], a = 0; a < n.length; a++)
                                    if (i.push(n[a]), "string" == typeof n[a] && n[a].indexOf("-") > 0) { var r = n[a].split("-")[0];
                                        i.push(r) }
                                return i }, D.prototype._processTranslations = function(t, n) { for (var i = new u, a = 0; a < t.length; a++) { var r = new u,
                                        o = t[a]; if ("string" == typeof o) try { r = u.loadPath(o) } catch (e) { try { o = this.defaults.amdLanguageBase + o, r = u.loadPath(o) } catch (e) { n && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.') } } else r = e.isPlainObject(o) ? new u(o) : o;
                                    i.extend(r) } return i }, D.prototype.set = function(t, n) { var i = {};
                                i[e.camelCase(t)] = n; var a = c._convertData(i);
                                e.extend(!0, this.defaults, a) }, new D })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, i) {
                            function a(t, a) { if (this.options = t, null != a && this.fromElement(a), null != a && (this.options = n.applyFromElement(this.options, a)), this.options = n.apply(this.options), a && a.is("input")) { var r = e(this.get("amdBase") + "compat/inputData");
                                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r) } } return a.prototype.fromElement = function(e) { var n = ["select2"];
                                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl"))); var a = {};

                                function r(e, t) { return t.toUpperCase() } for (var o = 0; o < e[0].attributes.length; o++) { var s = e[0].attributes[o].name,
                                        l = "data-"; if (s.substr(0, l.length) == l) { var c = s.substring(l.length),
                                            u = i.GetData(e[0], c);
                                        a[c.replace(/-([a-z])/g, r)] = u } }
                                t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (a = t.extend(!0, {}, e[0].dataset, a)); var d = t.extend(!0, {}, i.GetData(e[0]), a); for (var p in d = i._convertData(d)) t.inArray(p, n) > -1 || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], d[p]) : this.options[p] = d[p]); return this }, a.prototype.get = function(e) { return this.options[e] }, a.prototype.set = function(e, t) { this.options[e] = t }, a })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) { var a = function(e, i) { null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), a.__super__.constructor.call(this); var r = e.attr("tabindex") || 0;
                                n.StoreData(e[0], "old-tabindex", r), e.attr("tabindex", "-1"); var o = this.options.get("dataAdapter");
                                this.dataAdapter = new o(e, this.options); var s = this.render();
                                this._placeContainer(s); var l = this.options.get("selectionAdapter");
                                this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s); var c = this.options.get("dropdownAdapter");
                                this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s); var u = this.options.get("resultsAdapter");
                                this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var d = this;
                                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(e) { d.trigger("selection:update", { data: e }) })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this) }; return n.Extend(a, n.Observable), a.prototype._generateId = function(e) { return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, a.prototype._placeContainer = function(e) { e.insertAfter(this.$element); var t = this._resolveWidth(this.$element, this.options.get("width"));
                                null != t && e.css("width", t) }, a.prototype._resolveWidth = function(e, t) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == t) { var i = this._resolveWidth(e, "style"); return null != i ? i : this._resolveWidth(e, "element") } if ("element" == t) { var a = e.outerWidth(!1); return a <= 0 ? "auto" : a + "px" } if ("style" == t) { var r = e.attr("style"); if ("string" != typeof r) return null; for (var o = r.split(";"), s = 0, l = o.length; s < l; s += 1) { var c = o[s].replace(/\s/g, "").match(n); if (null !== c && c.length >= 1) return c[1] } return null } return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t }, a.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, a.prototype._registerDomEvents = function() { var e = this;
                                this.$element.on("change.select2", (function() { e.dataAdapter.current((function(t) { e.trigger("selection:update", { data: t }) })) })), this.$element.on("focus.select2", (function(t) { e.trigger("focus", t) })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                null != t ? (this._observer = new t((function(t) { e._syncA(), e._syncS(null, t) })), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1)) }, a.prototype._registerDataEvents = function() { var e = this;
                                this.dataAdapter.on("*", (function(t, n) { e.trigger(t, n) })) }, a.prototype._registerSelectionEvents = function() { var t = this,
                                    n = ["toggle", "focus"];
                                this.selection.on("toggle", (function() { t.toggleDropdown() })), this.selection.on("focus", (function(e) { t.focus(e) })), this.selection.on("*", (function(i, a) {-1 === e.inArray(i, n) && t.trigger(i, a) })) }, a.prototype._registerDropdownEvents = function() { var e = this;
                                this.dropdown.on("*", (function(t, n) { e.trigger(t, n) })) }, a.prototype._registerResultsEvents = function() { var e = this;
                                this.results.on("*", (function(t, n) { e.trigger(t, n) })) }, a.prototype._registerEvents = function() { var e = this;
                                this.on("open", (function() { e.$container.addClass("select2-container--open") })), this.on("close", (function() { e.$container.removeClass("select2-container--open") })), this.on("enable", (function() { e.$container.removeClass("select2-container--disabled") })), this.on("disable", (function() { e.$container.addClass("select2-container--disabled") })), this.on("blur", (function() { e.$container.removeClass("select2-container--focus") })), this.on("query", (function(t) { e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function(n) { e.trigger("results:all", { data: n, query: t }) })) })), this.on("query:append", (function(t) { this.dataAdapter.query(t, (function(n) { e.trigger("results:append", { data: n, query: t }) })) })), this.on("keypress", (function(t) { var n = t.which;
                                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault()) })) }, a.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, a.prototype._isChangeMutation = function(t, n) { var i = !1,
                                    a = this; if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) { if (n)
                                        if (n.addedNodes && n.addedNodes.length > 0)
                                            for (var r = 0; r < n.addedNodes.length; r++) n.addedNodes[r].selected && (i = !0);
                                        else n.removedNodes && n.removedNodes.length > 0 ? i = !0 : e.isArray(n) && e.each(n, (function(e, t) { if (a._isChangeMutation(e, t)) return i = !0, !1 }));
                                    else i = !0; return i } }, a.prototype._syncSubtree = function(e, t) { var n = this._isChangeMutation(e, t),
                                    i = this;
                                n && this.dataAdapter.current((function(e) { i.trigger("selection:update", { data: e }) })) }, a.prototype.trigger = function(e, t) { var n = a.__super__.trigger,
                                    i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" }; if (void 0 === t && (t = {}), e in i) { var r = i[e],
                                        o = { prevented: !1, name: e, args: t }; if (n.call(this, r, o), o.prevented) return void(t.prevented = !0) }
                                n.call(this, e, t) }, a.prototype.toggleDropdown = function() { this.isDisabled() || (this.isOpen() ? this.close() : this.open()) }, a.prototype.open = function() { this.isOpen() || this.isDisabled() || this.trigger("query", {}) }, a.prototype.close = function(e) { this.isOpen() && this.trigger("close", { originalEvent: e }) }, a.prototype.isEnabled = function() { return !this.isDisabled() }, a.prototype.isDisabled = function() { return this.options.get("disabled") }, a.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, a.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, a.prototype.focus = function(e) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, a.prototype.enable = function(e) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]); var t = !e[0];
                                this.$element.prop("disabled", t) }, a.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var e = []; return this.dataAdapter.current((function(t) { e = t })), e }, a.prototype.val = function(t) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val(); var n = t[0];
                                e.isArray(n) && (n = e.map(n, (function(e) { return e.toString() }))), this.$element.val(n).trigger("input").trigger("change") }, a.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, a.prototype.render = function() { var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t }, a })), t.define("jquery-mousewheel", ["jquery"], (function(e) { return e })), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, a) { if (null == e.fn.select2) { var r = ["open", "close", "destroy"];
                                e.fn.select2 = function(t) { if ("object" == typeof(t = t || {})) return this.each((function() { var i = e.extend(!0, {}, t);
                                        new n(e(this), i) })), this; if ("string" == typeof t) { var i, o = Array.prototype.slice.call(arguments, 1); return this.each((function() { var e = a.GetData(this, "select2");
                                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, o) })), e.inArray(t, r) > -1 ? this : i } throw new Error("Invalid arguments for Select2: " + t) } } return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n })), { define: t.define, require: t.require } }(),
                    n = t.require("jquery.select2"); return e.fn.select2.amd = t, n }) ? i.apply(t, a) : i) || (e.exports = r) }, 3002: function(e, t, n) { var i, a;
            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) { var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                        i = this;
                    do { for (t = n.length; 0 <= --t && n.item(t) !== i;); } while (t < 0 && (i = i.parentElement)); return i }),
                function() {
                    function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e) }(),
                function() { for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) { var i = (new Date).getTime(),
                            a = Math.max(0, 16 - (i - e)),
                            r = window.setTimeout((function() { t(i + a) }), a); return e = i + a, r }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) }) }(), a = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this, void 0 === (i = function() { return function(e) { "use strict"; var t = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 },
                            n = function() { var e = {}; return Array.prototype.forEach.call(arguments, (function(t) { for (var n in t) { if (!t.hasOwnProperty(n)) return;
                                        e[n] = t[n] } })), e },
                            i = function(e) { "#" === e.charAt(0) && (e = e.substr(1)); for (var t, n = String(e), i = n.length, a = -1, r = "", o = n.charCodeAt(0); ++a < i;) { if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                    r += 1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === o ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a) } return "#" + r },
                            a = function() { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
                            r = function(t) { return t ? (n = t, parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0; var n },
                            o = function(t, n, i) { 0 === t && document.body.focus(), i || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n)) },
                            s = function(t, n, i, a) { if (n.emitEvents && "function" == typeof e.CustomEvent) { var r = new CustomEvent(t, { bubbles: !0, detail: { anchor: i, toggle: a } });
                                    document.dispatchEvent(r) } }; return function(l, c) { var u, d, p, h, f = { cancelScroll: function(e) { cancelAnimationFrame(h), h = null, e || s("scrollCancel", u) }, animateScroll: function(i, l, c) { f.cancelScroll(); var d = n(u || t, c || {}),
                                            m = "[object Number]" === Object.prototype.toString.call(i),
                                            g = m || !i.tagName ? null : i; if (m || g) { var v = e.pageYOffset;
                                            d.header && !p && (p = document.querySelector(d.header)); var w, y, b, x, C, E, k, S, T = r(p),
                                                M = m ? i : function(t, n, i, r) { var o = 0; if (t.offsetParent)
                                                        for (; o += t.offsetTop, t = t.offsetParent;); return o = Math.max(o - n - i, 0), r && (o = Math.min(o, a() - e.innerHeight)), o }(g, T, parseInt("function" == typeof d.offset ? d.offset(i, l) : d.offset, 10), d.clip),
                                                A = M - v,
                                                D = a(),
                                                I = 0,
                                                O = (w = A, b = (y = d).speedAsDuration ? y.speed : Math.abs(w / 1e3 * y.speed), y.durationMax && b > y.durationMax ? y.durationMax : y.durationMin && b < y.durationMin ? y.durationMin : parseInt(b, 10)),
                                                P = function(t) { var n, a, r;
                                                    x || (x = t), I += t - x, E = v + A * (a = C = 1 < (C = 0 === O ? 0 : I / O) ? 1 : C, "easeInQuad" === (n = d).easing && (r = a * a), "easeOutQuad" === n.easing && (r = a * (2 - a)), "easeInOutQuad" === n.easing && (r = a < .5 ? 2 * a * a : (4 - 2 * a) * a - 1), "easeInCubic" === n.easing && (r = a * a * a), "easeOutCubic" === n.easing && (r = --a * a * a + 1), "easeInOutCubic" === n.easing && (r = a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1), "easeInQuart" === n.easing && (r = a * a * a * a), "easeOutQuart" === n.easing && (r = 1 - --a * a * a * a), "easeInOutQuart" === n.easing && (r = a < .5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a), "easeInQuint" === n.easing && (r = a * a * a * a * a), "easeOutQuint" === n.easing && (r = 1 + --a * a * a * a * a), "easeInOutQuint" === n.easing && (r = a < .5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a), n.customEasing && (r = n.customEasing(a)), r || a), e.scrollTo(0, Math.floor(E)),
                                                        function(t, n) { var a = e.pageYOffset; if (t == n || a == n || (v < n && e.innerHeight + a) >= D) return f.cancelScroll(!0), o(i, n, m), s("scrollStop", d, i, l), !(h = x = null) }(E, M) || (h = e.requestAnimationFrame(P), x = t) };
                                            0 === e.pageYOffset && e.scrollTo(0, 0), k = i, S = d, m || history.pushState && S.updateURL && history.pushState({ smoothScroll: JSON.stringify(S), anchor: k.id }, document.title, k === document.documentElement ? "#top" : "#" + k.id), "matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches ? o(i, Math.floor(M), !1) : (s("scrollStart", d, i, l), f.cancelScroll(!0), e.requestAnimationFrame(P)) } } },
                                m = function(t) { if (!t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (d = t.target.closest(l)) && "a" === d.tagName.toLowerCase() && !t.target.closest(u.ignore) && d.hostname === e.location.hostname && d.pathname === e.location.pathname && /#/.test(d.href)) { var n, a; try { n = i(decodeURIComponent(d.hash)) } catch (t) { n = i(d.hash) } if ("#" === n) { if (!u.topOnEmptyHash) return;
                                            a = document.documentElement } else a = document.querySelector(n);
                                        (a = a || "#top" !== n ? a : document.documentElement) && (t.preventDefault(), function(t) { if (history.replaceState && t.updateURL && !history.state) { var n = e.location.hash;
                                                n = n || "", history.replaceState({ smoothScroll: JSON.stringify(t), anchor: n || e.pageYOffset }, document.title, n || e.location.href) } }(u), f.animateScroll(a, d)) } },
                                g = function(e) { if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(u)) { var t = history.state.anchor; "string" == typeof t && t && !(t = document.querySelector(i(history.state.anchor))) || f.animateScroll(t, null, { updateURL: !1 }) } }; return f.destroy = function() { u && (document.removeEventListener("click", m, !1), e.removeEventListener("popstate", g, !1), f.cancelScroll(), h = p = d = u = null) },
                                function() { if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                    f.destroy(), u = n(t, c || {}), p = u.header ? document.querySelector(u.header) : null, document.addEventListener("click", m, !1), u.updateURL && u.popstate && e.addEventListener("popstate", g, !1) }(), f } }(a) }.apply(t, [])) || (e.exports = i) }, 6455: function(e) { e.exports = function() { "use strict";

                function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(t) }

                function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                function n(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                function i(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e }

                function a() { return (a = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e }).apply(this, arguments) }

                function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && s(e, t) }

                function o(e) { return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function s(e, t) { return (s = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function l() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }

                function c(e, t, n) { return (c = l() ? Reflect.construct : function(e, t, n) { var i = [null];
                        i.push.apply(i, t); var a = new(Function.bind.apply(e, i)); return n && s(a, n.prototype), a }).apply(null, arguments) }

                function u(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function d(e, t) { return !t || "object" != typeof t && "function" != typeof t ? u(e) : t }

                function p(e) { var t = l(); return function() { var n, i = o(e); if (t) { var a = o(this).constructor;
                            n = Reflect.construct(i, arguments, a) } else n = i.apply(this, arguments); return d(this, n) } }

                function h(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e));); return e }

                function f(e, t, n) { return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var i = h(e, t); if (i) { var a = Object.getOwnPropertyDescriptor(i, t); return a.get ? a.get.call(n) : a.value } })(e, t, n || e) } var m = "SweetAlert2:",
                    g = function(e) { for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t },
                    v = function(e) { return e.charAt(0).toUpperCase() + e.slice(1) },
                    w = function(e) { return Object.keys(e).map((function(t) { return e[t] })) },
                    y = function(e) { return Array.prototype.slice.call(e) },
                    b = function(e) { console.warn("".concat(m, " ").concat(e)) },
                    x = function(e) { console.error("".concat(m, " ").concat(e)) },
                    C = [],
                    E = function(e) {-1 === C.indexOf(e) && (C.push(e), b(e)) },
                    k = function(e, t) { E('"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.')) },
                    S = function(e) { return "function" == typeof e ? e() : e },
                    T = function(e) { return e && "function" == typeof e.toPromise },
                    M = function(e) { return T(e) ? e.toPromise() : Promise.resolve(e) },
                    A = function(e) { return e && Promise.resolve(e) === e },
                    D = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
                    I = function(t) { return "object" === e(t) && t.jquery },
                    O = function(e) { return e instanceof Element || I(e) },
                    P = function(t) { var n = {}; return "object" !== e(t[0]) || O(t[0]) ? ["title", "html", "icon"].forEach((function(i, a) { var r = t[a]; "string" == typeof r || O(r) ? n[i] = r : void 0 !== r && x("Unexpected type of ".concat(i, '! Expected "string" or "Element", got ').concat(e(r))) })) : a(n, t[0]), n },
                    $ = "swal2-",
                    L = function(e) { var t = {}; for (var n in e) t[e[n]] = $ + e[n]; return t },
                    z = L(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
                    _ = L(["success", "warning", "info", "question", "error"]),
                    N = function() { return document.body.querySelector(".".concat(z.container)) },
                    F = function(e) { var t = N(); return t ? t.querySelector(e) : null },
                    H = function(e) { return F(".".concat(e)) },
                    j = function() { return H(z.popup) },
                    R = function() { var e = j(); return y(e.querySelectorAll(".".concat(z.icon))) },
                    B = function() { var e = R().filter((function(e) { return Ee(e) })); return e.length ? e[0] : null },
                    U = function() { return H(z.title) },
                    q = function() { return H(z.content) },
                    W = function() { return H(z["html-container"]) },
                    Y = function() { return H(z.image) },
                    V = function() { return H(z["progress-steps"]) },
                    G = function() { return H(z["validation-message"]) },
                    X = function() { return F(".".concat(z.actions, " .").concat(z.confirm)) },
                    Q = function() { return F(".".concat(z.actions, " .").concat(z.cancel)) },
                    K = function() { return H(z.actions) },
                    Z = function() { return H(z.header) },
                    J = function() { return H(z.footer) },
                    ee = function() { return H(z["timer-progress-bar"]) },
                    te = function() { return H(z.close) },
                    ne = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                    ie = function() { var e = y(j().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((function(e, t) { return (e = parseInt(e.getAttribute("tabindex"))) > (t = parseInt(t.getAttribute("tabindex"))) ? 1 : e < t ? -1 : 0 })),
                            t = y(j().querySelectorAll(ne)).filter((function(e) { return "-1" !== e.getAttribute("tabindex") })); return g(e.concat(t)).filter((function(e) { return Ee(e) })) },
                    ae = function() { return !re() && !document.body.classList.contains(z["no-backdrop"]) },
                    re = function() { return document.body.classList.contains(z["toast-shown"]) },
                    oe = function() { return j().hasAttribute("data-loading") },
                    se = { previousBodyPadding: null },
                    le = function(e, t) { if (e.textContent = "", t) { var n = (new DOMParser).parseFromString(t, "text/html");
                            y(n.querySelector("head").childNodes).forEach((function(t) { e.appendChild(t) })), y(n.querySelector("body").childNodes).forEach((function(t) { e.appendChild(t) })) } },
                    ce = function(e, t) { if (!t) return !1; for (var n = t.split(/\s+/), i = 0; i < n.length; i++)
                            if (!e.classList.contains(n[i])) return !1;
                        return !0 },
                    ue = function(e, t) { y(e.classList).forEach((function(n) {-1 === w(z).indexOf(n) && -1 === w(_).indexOf(n) && -1 === w(t.showClass).indexOf(n) && e.classList.remove(n) })) },
                    de = function(t, n, i) { if (ue(t, n), n.customClass && n.customClass[i]) { if ("string" != typeof n.customClass[i] && !n.customClass[i].forEach) return b("Invalid type of customClass.".concat(i, '! Expected string or iterable object, got "').concat(e(n.customClass[i]), '"'));
                            ge(t, n.customClass[i]) } };

                function pe(e, t) { if (!t) return null; switch (t) {
                        case "select":
                        case "textarea":
                        case "file":
                            return we(e, z[t]);
                        case "checkbox":
                            return e.querySelector(".".concat(z.checkbox, " input"));
                        case "radio":
                            return e.querySelector(".".concat(z.radio, " input:checked")) || e.querySelector(".".concat(z.radio, " input:first-child"));
                        case "range":
                            return e.querySelector(".".concat(z.range, " input"));
                        default:
                            return we(e, z.input) } } var he, fe = function(e) { if (e.focus(), "file" !== e.type) { var t = e.value;
                            e.value = "", e.value = t } },
                    me = function(e, t, n) { e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach((function(t) { e.forEach ? e.forEach((function(e) { n ? e.classList.add(t) : e.classList.remove(t) })) : n ? e.classList.add(t) : e.classList.remove(t) }))) },
                    ge = function(e, t) { me(e, t, !0) },
                    ve = function(e, t) { me(e, t, !1) },
                    we = function(e, t) { for (var n = 0; n < e.childNodes.length; n++)
                            if (ce(e.childNodes[n], t)) return e.childNodes[n] },
                    ye = function(e, t, n) { n || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t) },
                    be = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
                        e.style.opacity = "", e.style.display = t },
                    xe = function(e) { e.style.opacity = "", e.style.display = "none" },
                    Ce = function(e, t, n) { t ? be(e, n) : xe(e) },
                    Ee = function(e) { return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)) },
                    ke = function(e) { return !!(e.scrollHeight > e.clientHeight) },
                    Se = function(e) { var t = window.getComputedStyle(e),
                            n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                            i = parseFloat(t.getPropertyValue("transition-duration") || "0"); return n > 0 || i > 0 },
                    Te = function(e, t) { if ("function" == typeof e.contains) return e.contains(t) },
                    Me = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = ee();
                        Ee(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout((function() { n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%" }), 10)) },
                    Ae = function() { var e = ee(),
                            t = parseInt(window.getComputedStyle(e).width);
                        e.style.removeProperty("transition"), e.style.width = "100%"; var n = parseInt(window.getComputedStyle(e).width),
                            i = parseInt(t / n * 100);
                        e.style.removeProperty("transition"), e.style.width = "".concat(i, "%") },
                    De = function() { return "undefined" == typeof window || "undefined" == typeof document },
                    Ie = '\n <div aria-labelledby="'.concat(z.title, '" aria-describedby="').concat(z.content, '" class="').concat(z.popup, '" tabindex="-1">\n   <div class="').concat(z.header, '">\n     <ul class="').concat(z["progress-steps"], '"></ul>\n     <div class="').concat(z.icon, " ").concat(_.error, '"></div>\n     <div class="').concat(z.icon, " ").concat(_.question, '"></div>\n     <div class="').concat(z.icon, " ").concat(_.warning, '"></div>\n     <div class="').concat(z.icon, " ").concat(_.info, '"></div>\n     <div class="').concat(z.icon, " ").concat(_.success, '"></div>\n     <img class="').concat(z.image, '" />\n     <h2 class="').concat(z.title, '" id="').concat(z.title, '"></h2>\n     <button type="button" class="').concat(z.close, '"></button>\n   </div>\n   <div class="').concat(z.content, '">\n     <div id="').concat(z.content, '" class="').concat(z["html-container"], '"></div>\n     <input class="').concat(z.input, '" />\n     <input type="file" class="').concat(z.file, '" />\n     <div class="').concat(z.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(z.select, '"></select>\n     <div class="').concat(z.radio, '"></div>\n     <label for="').concat(z.checkbox, '" class="').concat(z.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(z.label, '"></span>\n     </label>\n     <textarea class="').concat(z.textarea, '"></textarea>\n     <div class="').concat(z["validation-message"], '" id="').concat(z["validation-message"], '"></div>\n   </div>\n   <div class="').concat(z.actions, '">\n     <button type="button" class="').concat(z.confirm, '">OK</button>\n     <button type="button" class="').concat(z.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(z.footer, '"></div>\n   <div class="').concat(z["timer-progress-bar-container"], '">\n     <div class="').concat(z["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
                    Oe = function() { var e = N(); return !!e && (e.parentNode.removeChild(e), ve([document.documentElement, document.body], [z["no-backdrop"], z["toast-shown"], z["has-column"]]), !0) },
                    Pe = function(e) { $i.isVisible() && he !== e.target.value && $i.resetValidationMessage(), he = e.target.value },
                    $e = function() { var e = q(),
                            t = we(e, z.input),
                            n = we(e, z.file),
                            i = e.querySelector(".".concat(z.range, " input")),
                            a = e.querySelector(".".concat(z.range, " output")),
                            r = we(e, z.select),
                            o = e.querySelector(".".concat(z.checkbox, " input")),
                            s = we(e, z.textarea);
                        t.oninput = Pe, n.onchange = Pe, r.onchange = Pe, o.onchange = Pe, s.oninput = Pe, i.oninput = function(e) { Pe(e), a.value = i.value }, i.onchange = function(e) { Pe(e), i.nextSibling.value = i.value } },
                    Le = function(e) { return "string" == typeof e ? document.querySelector(e) : e },
                    ze = function(e) { var t = j();
                        t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true") },
                    _e = function(e) { "rtl" === window.getComputedStyle(e).direction && ge(N(), z.rtl) },
                    Ne = function(e) { var t = Oe(); if (De()) x("SweetAlert2 requires document to initialize");
                        else { var n = document.createElement("div");
                            n.className = z.container, t && ge(n, z["no-transition"]), le(n, Ie); var i = Le(e.target);
                            i.appendChild(n), ze(e), _e(i), $e() } },
                    Fe = function(t, n) { t instanceof HTMLElement ? n.appendChild(t) : "object" === e(t) ? He(t, n) : t && le(n, t) },
                    He = function(e, t) { e.jquery ? je(t, e) : le(t, e.toString()) },
                    je = function(e, t) { if (e.textContent = "", 0 in t)
                            for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
                        else e.appendChild(t.cloneNode(!0)) },
                    Re = function() { if (De()) return !1; var e = document.createElement("div"),
                            t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" }; for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n]) return t[n];
                        return !1 }(),
                    Be = function() { var e = document.createElement("div");
                        e.className = z["scrollbar-measure"], document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t },
                    Ue = function(e, t) { var n = K(),
                            i = X(),
                            a = Q();
                        t.showConfirmButton || t.showCancelButton || xe(n), de(n, t, "actions"), We(i, "confirm", t), We(a, "cancel", t), t.buttonsStyling ? qe(i, a, t) : (ve([i, a], z.styled), i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = "", a.style.backgroundColor = a.style.borderLeftColor = a.style.borderRightColor = ""), t.reverseButtons && i.parentNode.insertBefore(a, i) };

                function qe(e, t, n) { if (ge([e, t], z.styled), n.confirmButtonColor && (e.style.backgroundColor = n.confirmButtonColor), n.cancelButtonColor && (t.style.backgroundColor = n.cancelButtonColor), !oe()) { var i = window.getComputedStyle(e).getPropertyValue("background-color");
                        e.style.borderLeftColor = i, e.style.borderRightColor = i } }

                function We(e, t, n) { Ce(e, n["show".concat(v(t), "Button")], "inline-block"), le(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = z[t], de(e, n, "".concat(t, "Button")), ge(e, n["".concat(t, "ButtonClass")]) }

                function Ye(e, t) { "string" == typeof t ? e.style.background = t : t || ge([document.documentElement, document.body], z["no-backdrop"]) }

                function Ve(e, t) { t in z ? ge(e, z[t]) : (b('The "position" parameter is not valid, defaulting to "center"'), ge(e, z.center)) }

                function Ge(e, t) { if (t && "string" == typeof t) { var n = "grow-".concat(t);
                        n in z && ge(e, z[n]) } } var Xe = function(e, t) { var n = N(); if (n) { Ye(n, t.backdrop), !t.backdrop && t.allowOutsideClick && b('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), Ve(n, t.position), Ge(n, t.grow), de(n, t, "container"); var i = document.body.getAttribute("data-swal2-queue-step");
                            i && (n.setAttribute("data-queue-step", i), document.body.removeAttribute("data-swal2-queue-step")) } },
                    Qe = { promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap },
                    Ke = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
                    Ze = function(e, t) { var n = q(),
                            i = Qe.innerParams.get(e),
                            a = !i || t.input !== i.input;
                        Ke.forEach((function(e) { var i = z[e],
                                r = we(n, i);
                            tt(e, t.inputAttributes), r.className = i, a && xe(r) })), t.input && (a && Je(t), nt(t)) },
                    Je = function(e) { if (!rt[e.input]) return x('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"')); var t = at(e.input),
                            n = rt[e.input](t, e);
                        be(n), setTimeout((function() { fe(n) })) },
                    et = function(e) { for (var t = 0; t < e.attributes.length; t++) { var n = e.attributes[t].name; - 1 === ["type", "value", "style"].indexOf(n) && e.removeAttribute(n) } },
                    tt = function(e, t) { var n = pe(q(), e); if (n)
                            for (var i in et(n), t) "range" === e && "placeholder" === i || n.setAttribute(i, t[i]) },
                    nt = function(e) { var t = at(e.input);
                        e.customClass && ge(t, e.customClass.input) },
                    it = function(e, t) { e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder) },
                    at = function(e) { var t = z[e] ? z[e] : z.input; return we(q(), t) },
                    rt = {};
                rt.text = rt.email = rt.password = rt.number = rt.tel = rt.url = function(t, n) { return "string" == typeof n.inputValue || "number" == typeof n.inputValue ? t.value = n.inputValue : A(n.inputValue) || b('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(e(n.inputValue), '"')), it(t, n), t.type = n.input, t }, rt.file = function(e, t) { return it(e, t), e }, rt.range = function(e, t) { var n = e.querySelector("input"),
                        i = e.querySelector("output"); return n.value = t.inputValue, n.type = t.input, i.value = t.inputValue, e }, rt.select = function(e, t) { if (e.textContent = "", t.inputPlaceholder) { var n = document.createElement("option");
                        le(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n) } return e }, rt.radio = function(e) { return e.textContent = "", e }, rt.checkbox = function(e, t) { var n = pe(q(), "checkbox");
                    n.value = 1, n.id = z.checkbox, n.checked = Boolean(t.inputValue); var i = e.querySelector("span"); return le(i, t.inputPlaceholder), e }, rt.textarea = function(e, t) { if (e.value = t.inputValue, it(e, t), "MutationObserver" in window) { var n = parseInt(window.getComputedStyle(j()).width),
                            i = parseInt(window.getComputedStyle(j()).paddingLeft) + parseInt(window.getComputedStyle(j()).paddingRight);
                        new MutationObserver((function() { var t = e.offsetWidth + i;
                            j().style.width = t > n ? "".concat(t, "px") : null })).observe(e, { attributes: !0, attributeFilter: ["style"] }) } return e }; var ot = function(e, t) { var n = q().querySelector("#".concat(z.content));
                        t.html ? (Fe(t.html, n), be(n, "block")) : t.text ? (n.textContent = t.text, be(n, "block")) : xe(n), Ze(e, t), de(q(), t, "content") },
                    st = function(e, t) { var n = J();
                        Ce(n, t.footer), t.footer && Fe(t.footer, n), de(n, t, "footer") },
                    lt = function(e, t) { var n = te();
                        le(n, t.closeButtonHtml), de(n, t, "closeButton"), Ce(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel) },
                    ct = function(e, t) { var n = Qe.innerParams.get(e); if (n && t.icon === n.icon && B()) de(B(), t, "icon");
                        else if (ut(), t.icon)
                            if (-1 !== Object.keys(_).indexOf(t.icon)) { var i = F(".".concat(z.icon, ".").concat(_[t.icon]));
                                be(i), pt(i, t), dt(), de(i, t, "icon"), ge(i, t.showClass.icon) } else x('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')) },
                    ut = function() { for (var e = R(), t = 0; t < e.length; t++) xe(e[t]) },
                    dt = function() { for (var e = j(), t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), i = 0; i < n.length; i++) n[i].style.backgroundColor = t },
                    pt = function(e, t) { e.textContent = "", t.iconHtml ? le(e, ht(t.iconHtml)) : "success" === t.icon ? le(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? le(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : le(e, ht({ question: "?", warning: "!", info: "i" }[t.icon])) },
                    ht = function(e) { return '<div class="'.concat(z["icon-content"], '">').concat(e, "</div>") },
                    ft = function(e, t) { var n = Y(); if (!t.imageUrl) return xe(n);
                        be(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), ye(n, "width", t.imageWidth), ye(n, "height", t.imageHeight), n.className = z.image, de(n, t, "image") },
                    mt = [],
                    gt = function(e) { var t = this;
                        mt = e; var n = function(e, t) { mt = [], e(t) },
                            i = []; return new Promise((function(e) {! function a(r, o) { r < mt.length ? (document.body.setAttribute("data-swal2-queue-step", r), t.fire(mt[r]).then((function(t) { void 0 !== t.value ? (i.push(t.value), a(r + 1, o)) : n(e, { dismiss: t.dismiss }) }))) : n(e, { value: i }) }(0) })) },
                    vt = function() { return N() && N().getAttribute("data-queue-step") },
                    wt = function(e, t) { return t && t < mt.length ? mt.splice(t, 0, e) : mt.push(e) },
                    yt = function(e) { void 0 !== mt[e] && mt.splice(e, 1) },
                    bt = function(e) { var t = document.createElement("li"); return ge(t, z["progress-step"]), le(t, e), t },
                    xt = function(e) { var t = document.createElement("li"); return ge(t, z["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t },
                    Ct = function(e, t) { var n = V(); if (!t.progressSteps || 0 === t.progressSteps.length) return xe(n);
                        be(n), n.textContent = ""; var i = parseInt(void 0 === t.currentProgressStep ? vt() : t.currentProgressStep);
                        i >= t.progressSteps.length && b("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach((function(e, a) { var r = bt(e); if (n.appendChild(r), a === i && ge(r, z["active-progress-step"]), a !== t.progressSteps.length - 1) { var o = xt(t);
                                n.appendChild(o) } })) },
                    Et = function(e, t) { var n = U();
                        Ce(n, t.title || t.titleText), t.title && Fe(t.title, n), t.titleText && (n.innerText = t.titleText), de(n, t, "title") },
                    kt = function(e, t) { var n = Z();
                        de(n, t, "header"), Ct(e, t), ct(e, t), ft(e, t), Et(e, t), lt(e, t) },
                    St = function(e, t) { var n = j();
                        ye(n, "width", t.width), ye(n, "padding", t.padding), t.background && (n.style.background = t.background), Tt(n, t) },
                    Tt = function(e, t) { e.className = "".concat(z.popup, " ").concat(Ee(e) ? t.showClass.popup : ""), t.toast ? (ge([document.documentElement, document.body], z["toast-shown"]), ge(e, z.toast)) : ge(e, z.modal), de(e, t, "popup"), "string" == typeof t.customClass && ge(e, t.customClass), t.icon && ge(e, z["icon-".concat(t.icon)]) },
                    Mt = function(e, t) { St(e, t), Xe(e, t), kt(e, t), ot(e, t), Ue(e, t), st(e, t), "function" == typeof t.onRender && t.onRender(j()) },
                    At = function() { return Ee(j()) },
                    Dt = function() { return X() && X().click() },
                    It = function() { return Q() && Q().click() };

                function Ot() { for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]; return c(e, n) }

                function Pt(e) { return function(n) { r(l, n); var s = p(l);

                        function l() { return t(this, l), s.apply(this, arguments) } return i(l, [{ key: "_main", value: function(t) { return f(o(l.prototype), "_main", this).call(this, a({}, e, t)) } }]), l }(this) } var $t = function() { var e = j();
                        e || $i.fire(), e = j(); var t = K(),
                            n = X();
                        be(t), be(n, "inline-block"), ge([e, t], z.loading), n.disabled = !0, e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus() },
                    Lt = 100,
                    zt = {},
                    _t = function() { zt.previousActiveElement && zt.previousActiveElement.focus ? (zt.previousActiveElement.focus(), zt.previousActiveElement = null) : document.body && document.body.focus() },
                    Nt = function() { return new Promise((function(e) { var t = window.scrollX,
                                n = window.scrollY;
                            zt.restoreFocusTimeout = setTimeout((function() { _t(), e() }), Lt), void 0 !== t && void 0 !== n && window.scrollTo(t, n) })) },
                    Ft = function() { return zt.timeout && zt.timeout.getTimerLeft() },
                    Ht = function() { if (zt.timeout) return Ae(), zt.timeout.stop() },
                    jt = function() { if (zt.timeout) { var e = zt.timeout.start(); return Me(e), e } },
                    Rt = function() { var e = zt.timeout; return e && (e.running ? Ht() : jt()) },
                    Bt = function(e) { if (zt.timeout) { var t = zt.timeout.increase(e); return Me(t, !0), t } },
                    Ut = function() { return zt.timeout && zt.timeout.isRunning() },
                    qt = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconHtml: void 0, toast: !1, animation: !0, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: void 0, target: "body", backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showCancelButton: !1, preConfirm: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, onBeforeOpen: void 0, onOpen: void 0, onRender: void 0, onClose: void 0, onAfterClose: void 0, onDestroy: void 0, scrollbarPadding: !0 },
                    Wt = ["allowEscapeKey", "allowOutsideClick", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "footer", "hideClass", "html", "icon", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "text", "title", "titleText"],
                    Yt = { animation: 'showClass" and "hideClass' },
                    Vt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
                    Gt = function(e) { return Object.prototype.hasOwnProperty.call(qt, e) },
                    Xt = function(e) { return -1 !== Wt.indexOf(e) },
                    Qt = function(e) { return Yt[e] },
                    Kt = function(e) { Gt(e) || b('Unknown parameter "'.concat(e, '"')) },
                    Zt = function(e) {-1 !== Vt.indexOf(e) && b('The parameter "'.concat(e, '" is incompatible with toasts')) },
                    Jt = function(e) { Qt(e) && k(e, Qt(e)) },
                    en = function(e) { for (var t in e) Kt(t), e.toast && Zt(t), Jt(t) },
                    tn = Object.freeze({ isValidParameter: Gt, isUpdatableParameter: Xt, isDeprecatedParameter: Qt, argsToParams: P, isVisible: At, clickConfirm: Dt, clickCancel: It, getContainer: N, getPopup: j, getTitle: U, getContent: q, getHtmlContainer: W, getImage: Y, getIcon: B, getIcons: R, getCloseButton: te, getActions: K, getConfirmButton: X, getCancelButton: Q, getHeader: Z, getFooter: J, getTimerProgressBar: ee, getFocusableElements: ie, getValidationMessage: G, isLoading: oe, fire: Ot, mixin: Pt, queue: gt, getQueueStep: vt, insertQueueStep: wt, deleteQueueStep: yt, showLoading: $t, enableLoading: $t, getTimerLeft: Ft, stopTimer: Ht, resumeTimer: jt, toggleTimer: Rt, increaseTimer: Bt, isTimerRunning: Ut });

                function nn() { var e = Qe.innerParams.get(this); if (e) { var t = Qe.domCache.get(this);
                        e.showConfirmButton || (xe(t.confirmButton), e.showCancelButton || xe(t.actions)), ve([t.popup, t.actions], z.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1 } }

                function an(e) { var t = Qe.innerParams.get(e || this),
                        n = Qe.domCache.get(e || this); return n ? pe(n.content, t.input) : null } var rn = function() { null === se.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (se.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(se.previousBodyPadding + Be(), "px")) },
                    on = function() { null !== se.previousBodyPadding && (document.body.style.paddingRight = "".concat(se.previousBodyPadding, "px"), se.previousBodyPadding = null) },
                    sn = function() { if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !ce(document.body, z.iosfix)) { var e = document.body.scrollTop;
                            document.body.style.top = "".concat(-1 * e, "px"), ge(document.body, z.iosfix), cn(), ln() } },
                    ln = function() { if (!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)) { var e = 44;
                            j().scrollHeight > window.innerHeight - e && (N().style.paddingBottom = "".concat(e, "px")) } },
                    cn = function() { var e, t = N();
                        t.ontouchstart = function(t) { e = un(t.target) }, t.ontouchmove = function(t) { e && (t.preventDefault(), t.stopPropagation()) } },
                    un = function(e) { var t = N(); return e === t || !(ke(t) || "INPUT" === e.tagName || ke(q()) && q().contains(e)) },
                    dn = function() { if (ce(document.body, z.iosfix)) { var e = parseInt(document.body.style.top, 10);
                            ve(document.body, z.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e } },
                    pn = function() { return !!window.MSInputMethodContext && !!document.documentMode },
                    hn = function() { var e = N(),
                            t = j();
                        e.style.removeProperty("align-items"), t.offsetTop < 0 && (e.style.alignItems = "flex-start") },
                    fn = function() { "undefined" != typeof window && pn() && (hn(), window.addEventListener("resize", hn)) },
                    mn = function() { "undefined" != typeof window && pn() && window.removeEventListener("resize", hn) },
                    gn = function() { y(document.body.children).forEach((function(e) { e === N() || Te(e, N()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true")) })) },
                    vn = function() { y(document.body.children).forEach((function(e) { e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden") })) },
                    wn = { swalPromiseResolve: new WeakMap };

                function yn(e, t, n, i) { n ? kn(e, i) : (Nt().then((function() { return kn(e, i) })), zt.keydownTarget.removeEventListener("keydown", zt.keydownHandler, { capture: zt.keydownListenerCapture }), zt.keydownHandlerAdded = !1), t.parentNode && !document.body.getAttribute("data-swal2-queue-step") && t.parentNode.removeChild(t), ae() && (on(), dn(), mn(), vn()), bn() }

                function bn() { ve([document.documentElement, document.body], [z.shown, z["height-auto"], z["no-backdrop"], z["toast-shown"], z["toast-column"]]) }

                function xn(e) { var t = j(); if (t) { var n = Qe.innerParams.get(this); if (n && !ce(t, n.hideClass.popup)) { var i = wn.swalPromiseResolve.get(this);
                            ve(t, n.showClass.popup), ge(t, n.hideClass.popup); var a = N();
                            ve(a, n.showClass.backdrop), ge(a, n.hideClass.backdrop), Cn(this, t, n), void 0 !== e ? (e.isDismissed = void 0 !== e.dismiss, e.isConfirmed = void 0 === e.dismiss) : e = { isDismissed: !0, isConfirmed: !1 }, i(e || {}) } } } var Cn = function(e, t, n) { var i = N(),
                            a = Re && Se(t),
                            r = n.onClose,
                            o = n.onAfterClose;
                        null !== r && "function" == typeof r && r(t), a ? En(e, t, i, o) : yn(e, i, re(), o) },
                    En = function(e, t, n, i) { zt.swalCloseEventFinishedCallback = yn.bind(null, e, n, re(), i), t.addEventListener(Re, (function(e) { e.target === t && (zt.swalCloseEventFinishedCallback(), delete zt.swalCloseEventFinishedCallback) })) },
                    kn = function(e, t) { setTimeout((function() { "function" == typeof t && t(), e._destroy() })) };

                function Sn(e, t, n) { var i = Qe.domCache.get(e);
                    t.forEach((function(e) { i[e].disabled = n })) }

                function Tn(e, t) { if (!e) return !1; if ("radio" === e.type)
                        for (var n = e.parentNode.parentNode.querySelectorAll("input"), i = 0; i < n.length; i++) n[i].disabled = t;
                    else e.disabled = t }

                function Mn() { Sn(this, ["confirmButton", "cancelButton"], !1) }

                function An() { Sn(this, ["confirmButton", "cancelButton"], !0) }

                function Dn() { return Tn(this.getInput(), !1) }

                function In() { return Tn(this.getInput(), !0) }

                function On(e) { var t = Qe.domCache.get(this);
                    le(t.validationMessage, e); var n = window.getComputedStyle(t.popup);
                    t.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), t.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), be(t.validationMessage); var i = this.getInput();
                    i && (i.setAttribute("aria-invalid", !0), i.setAttribute("aria-describedBy", z["validation-message"]), fe(i), ge(i, z.inputerror)) }

                function Pn() { var e = Qe.domCache.get(this);
                    e.validationMessage && xe(e.validationMessage); var t = this.getInput();
                    t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), ve(t, z.inputerror)) }

                function $n() { return Qe.domCache.get(this).progressSteps } var Ln = function() {
                        function e(n, i) { t(this, e), this.callback = n, this.remaining = i, this.running = !1, this.start() } return i(e, [{ key: "start", value: function() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining } }, { key: "stop", value: function() { return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining } }, { key: "increase", value: function(e) { var t = this.running; return t && this.stop(), this.remaining += e, t && this.start(), this.remaining } }, { key: "getTimerLeft", value: function() { return this.running && (this.stop(), this.start()), this.remaining } }, { key: "isRunning", value: function() { return this.running } }]), e }(),
                    zn = { email: function(e, t) { return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address") }, url: function(e, t) { return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL") } };

                function _n(e) { e.inputValidator || Object.keys(zn).forEach((function(t) { e.input === t && (e.inputValidator = zn[t]) })) }

                function Nn(e) {
                    (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (b('Target parameter is not valid, defaulting to "body"'), e.target = "body") }

                function Fn(e) { _n(e), e.showLoaderOnConfirm && !e.preConfirm && b("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), e.animation = S(e.animation), Nn(e), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), Ne(e) } var Hn = function(e) { var t = N(),
                        n = j(); "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n); var i = window.getComputedStyle(document.body).overflowY;
                    Un(t, n, e), Rn(t, n), ae() && (Bn(t, e.scrollbarPadding, i), gn()), re() || zt.previousActiveElement || (zt.previousActiveElement = document.activeElement), "function" == typeof e.onOpen && setTimeout((function() { return e.onOpen(n) })), ve(t, z["no-transition"]) };

                function jn(e) { var t = j(); if (e.target === t) { var n = N();
                        t.removeEventListener(Re, jn), n.style.overflowY = "auto" } } var Rn = function(e, t) { Re && Se(t) ? (e.style.overflowY = "hidden", t.addEventListener(Re, jn)) : e.style.overflowY = "auto" },
                    Bn = function(e, t, n) { sn(), fn(), t && "hidden" !== n && rn(), setTimeout((function() { e.scrollTop = 0 })) },
                    Un = function(e, t, n) { ge(e, n.showClass.backdrop), be(t), ge(t, n.showClass.popup), ge([document.documentElement, document.body], z.shown), n.heightAuto && n.backdrop && !n.toast && ge([document.documentElement, document.body], z["height-auto"]) },
                    qn = function(e, t) { "select" === t.input || "radio" === t.input ? Xn(e, t) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && (T(t.inputValue) || A(t.inputValue)) && Qn(e, t) },
                    Wn = function(e, t) { var n = e.getInput(); if (!n) return null; switch (t.input) {
                            case "checkbox":
                                return Yn(n);
                            case "radio":
                                return Vn(n);
                            case "file":
                                return Gn(n);
                            default:
                                return t.inputAutoTrim ? n.value.trim() : n.value } },
                    Yn = function(e) { return e.checked ? 1 : 0 },
                    Vn = function(e) { return e.checked ? e.value : null },
                    Gn = function(e) { return e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null },
                    Xn = function(t, n) { var i = q(),
                            a = function(e) { return Kn[n.input](i, Zn(e), n) };
                        T(n.inputOptions) || A(n.inputOptions) ? ($t(), M(n.inputOptions).then((function(e) { t.hideLoading(), a(e) }))) : "object" === e(n.inputOptions) ? a(n.inputOptions) : x("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(e(n.inputOptions))) },
                    Qn = function(e, t) { var n = e.getInput();
                        xe(n), M(t.inputValue).then((function(i) { n.value = "number" === t.input ? parseFloat(i) || 0 : "".concat(i), be(n), n.focus(), e.hideLoading() })).catch((function(t) { x("Error in inputValue promise: ".concat(t)), n.value = "", be(n), n.focus(), e.hideLoading() })) },
                    Kn = { select: function(e, t, n) { var i = we(e, z.select),
                                a = function(e, t, i) { var a = document.createElement("option");
                                    a.value = i, le(a, t), n.inputValue.toString() === i.toString() && (a.selected = !0), e.appendChild(a) };
                            t.forEach((function(e) { var t = e[0],
                                    n = e[1]; if (Array.isArray(n)) { var r = document.createElement("optgroup");
                                    r.label = t, r.disabled = !1, i.appendChild(r), n.forEach((function(e) { return a(r, e[1], e[0]) })) } else a(i, n, t) })), i.focus() }, radio: function(e, t, n) { var i = we(e, z.radio);
                            t.forEach((function(e) { var t = e[0],
                                    a = e[1],
                                    r = document.createElement("input"),
                                    o = document.createElement("label");
                                r.type = "radio", r.name = z.radio, r.value = t, n.inputValue.toString() === t.toString() && (r.checked = !0); var s = document.createElement("span");
                                le(s, a), s.className = z.label, o.appendChild(r), o.appendChild(s), i.appendChild(o) })); var a = i.querySelectorAll("input");
                            a.length && a[0].focus() } },
                    Zn = function t(n) { var i = []; return "undefined" != typeof Map && n instanceof Map ? n.forEach((function(n, a) { var r = n; "object" === e(r) && (r = t(r)), i.push([a, r]) })) : Object.keys(n).forEach((function(a) { var r = n[a]; "object" === e(r) && (r = t(r)), i.push([a, r]) })), i },
                    Jn = function(e, t) { e.disableButtons(), t.input ? ti(e, t) : ii(e, t, !0) },
                    ei = function(e, t) { e.disableButtons(), t(D.cancel) },
                    ti = function(e, t) { var n = Wn(e, t);
                        t.inputValidator ? (e.disableInput(), Promise.resolve().then((function() { return M(t.inputValidator(n, t.validationMessage)) })).then((function(i) { e.enableButtons(), e.enableInput(), i ? e.showValidationMessage(i) : ii(e, t, n) }))) : e.getInput().checkValidity() ? ii(e, t, n) : (e.enableButtons(), e.showValidationMessage(t.validationMessage)) },
                    ni = function(e, t) { e.closePopup({ value: t }) },
                    ii = function(e, t, n) { t.showLoaderOnConfirm && $t(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then((function() { return M(t.preConfirm(n, t.validationMessage)) })).then((function(t) { Ee(G()) || !1 === t ? e.hideLoading() : ni(e, void 0 === t ? n : t) }))) : ni(e, n) },
                    ai = function(e, t, n, i) { t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function(t) { return li(e, t, i) }, t.keydownTarget = n.keydownListenerCapture ? window : j(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), t.keydownHandlerAdded = !0) },
                    ri = function(e, t, n) { for (var i = ie(), a = 0; a < i.length; a++) return (t += n) === i.length ? t = 0 : -1 === t && (t = i.length - 1), i[t].focus();
                        j().focus() },
                    oi = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
                    si = ["Escape", "Esc"],
                    li = function(e, t, n) { var i = Qe.innerParams.get(e);
                        i.stopKeydownPropagation && t.stopPropagation(), "Enter" === t.key ? ci(e, t, i) : "Tab" === t.key ? ui(t, i) : -1 !== oi.indexOf(t.key) ? di() : -1 !== si.indexOf(t.key) && pi(t, i, n) },
                    ci = function(e, t, n) { if (!t.isComposing && t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML) { if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
                            Dt(), t.preventDefault() } },
                    ui = function(e, t) { for (var n = e.target, i = ie(), a = -1, r = 0; r < i.length; r++)
                            if (n === i[r]) { a = r; break }
                        e.shiftKey ? ri(t, a, -1) : ri(t, a, 1), e.stopPropagation(), e.preventDefault() },
                    di = function() { var e = X(),
                            t = Q();
                        document.activeElement === e && Ee(t) ? t.focus() : document.activeElement === t && Ee(e) && e.focus() },
                    pi = function(e, t, n) { S(t.allowEscapeKey) && (e.preventDefault(), n(D.esc)) },
                    hi = function(e, t, n) { Qe.innerParams.get(e).toast ? fi(e, t, n) : (gi(t), vi(t), wi(e, t, n)) },
                    fi = function(e, t, n) { t.popup.onclick = function() { var t = Qe.innerParams.get(e);
                            t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(D.close) } },
                    mi = !1,
                    gi = function(e) { e.popup.onmousedown = function() { e.container.onmouseup = function(t) { e.container.onmouseup = void 0, t.target === e.container && (mi = !0) } } },
                    vi = function(e) { e.container.onmousedown = function() { e.popup.onmouseup = function(t) { e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (mi = !0) } } },
                    wi = function(e, t, n) { t.container.onclick = function(i) { var a = Qe.innerParams.get(e);
                            mi ? mi = !1 : i.target === t.container && S(a.allowOutsideClick) && n(D.backdrop) } };

                function yi(e) { en(e), zt.currentInstance && zt.currentInstance._destroy(), zt.currentInstance = this; var t = bi(e);
                    Fn(t), Object.freeze(t), zt.timeout && (zt.timeout.stop(), delete zt.timeout), clearTimeout(zt.restoreFocusTimeout); var n = Ci(this); return Mt(this, t), Qe.innerParams.set(this, t), xi(this, n, t) } var bi = function(e) { var t = a({}, qt.showClass, e.showClass),
                            n = a({}, qt.hideClass, e.hideClass),
                            i = a({}, qt, e); return i.showClass = t, i.hideClass = n, !1 === e.animation && (i.showClass = { popup: "swal2-noanimation", backdrop: "swal2-noanimation" }, i.hideClass = {}), i },
                    xi = function(e, t, n) { return new Promise((function(i) { var a = function(t) { e.closePopup({ dismiss: t }) };
                            wn.swalPromiseResolve.set(e, i), t.confirmButton.onclick = function() { return Jn(e, n) }, t.cancelButton.onclick = function() { return ei(e, a) }, t.closeButton.onclick = function() { return a(D.close) }, hi(e, t, a), ai(e, zt, n, a), n.toast && (n.input || n.footer || n.showCloseButton) ? ge(document.body, z["toast-column"]) : ve(document.body, z["toast-column"]), qn(e, n), Hn(n), Ei(zt, n, a), ki(t, n), setTimeout((function() { t.container.scrollTop = 0 })) })) },
                    Ci = function(e) { var t = { popup: j(), container: N(), content: q(), actions: K(), confirmButton: X(), cancelButton: Q(), closeButton: te(), validationMessage: G(), progressSteps: V() }; return Qe.domCache.set(e, t), t },
                    Ei = function(e, t, n) { var i = ee();
                        xe(i), t.timer && (e.timeout = new Ln((function() { n("timer"), delete e.timeout }), t.timer), t.timerProgressBar && (be(i), setTimeout((function() { e.timeout.running && Me(t.timer) })))) },
                    ki = function(e, t) { if (!t.toast) return S(t.allowEnterKey) ? t.focusCancel && Ee(e.cancelButton) ? e.cancelButton.focus() : t.focusConfirm && Ee(e.confirmButton) ? e.confirmButton.focus() : void ri(t, -1, 1) : Si() },
                    Si = function() { document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur() };

                function Ti(e) { var t = j(),
                        n = Qe.innerParams.get(this); if (!t || ce(t, n.hideClass.popup)) return b("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."); var i = {};
                    Object.keys(e).forEach((function(t) { $i.isUpdatableParameter(t) ? i[t] = e[t] : b('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js')) })); var r = a({}, n, i);
                    Mt(this, r), Qe.innerParams.set(this, r), Object.defineProperties(this, { params: { value: a({}, this.params, e), writable: !1, enumerable: !0 } }) }

                function Mi() { var e = Qe.domCache.get(this),
                        t = Qe.innerParams.get(this);
                    t && (e.popup && zt.swalCloseEventFinishedCallback && (zt.swalCloseEventFinishedCallback(), delete zt.swalCloseEventFinishedCallback), zt.deferDisposalTimer && (clearTimeout(zt.deferDisposalTimer), delete zt.deferDisposalTimer), "function" == typeof t.onDestroy && t.onDestroy(), Di(this)) } var Ai, Di = function(e) { delete e.params, delete zt.keydownHandler, delete zt.keydownTarget, Ii(Qe), Ii(wn) },
                    Ii = function(e) { for (var t in e) e[t] = new WeakMap },
                    Oi = Object.freeze({ hideLoading: nn, disableLoading: nn, getInput: an, close: xn, closePopup: xn, closeModal: xn, closeToast: xn, enableButtons: Mn, disableButtons: An, enableInput: Dn, disableInput: In, showValidationMessage: On, resetValidationMessage: Pn, getProgressSteps: $n, _main: yi, update: Ti, _destroy: Mi }),
                    Pi = function() {
                        function e() { if (t(this, e), "undefined" != typeof window) { "undefined" == typeof Promise && x("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Ai = this; for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]; var r = Object.freeze(this.constructor.argsToParams(i));
                                Object.defineProperties(this, { params: { value: r, writable: !1, enumerable: !0, configurable: !0 } }); var o = this._main(this.params);
                                Qe.promise.set(this, o) } } return i(e, [{ key: "then", value: function(e) { return Qe.promise.get(this).then(e) } }, { key: "finally", value: function(e) { return Qe.promise.get(this).finally(e) } }]), e }();
                a(Pi.prototype, Oi), a(Pi, tn), Object.keys(Oi).forEach((function(e) { Pi[e] = function() { var t; if (Ai) return (t = Ai)[e].apply(t, arguments) } })), Pi.DismissReason = D, Pi.version = "9.17.2"; var $i = Pi; return $i.default = $i, $i }(), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function(e, t) { var n = e.createElement("style"); if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
                else try { n.innerHTML = t } catch (e) { n.innerText = t } }(document, '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}') }, 4612: function(e) { e.exports = function() { "use strict";

                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                function t(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }

                function n() { return (n = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e }).apply(this, arguments) }

                function i(e) { return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object }

                function a(e, t) { void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(n) { void 0 === e[n] ? e[n] = t[n] : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && a(e[n], t[n]) })) } var r = { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, createElementNS: function() { return {} }, importNode: function() { return null }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };

                function o() { var e = "undefined" != typeof document ? document : {}; return a(e, r), e } var s = { document: r, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState: function() {}, pushState: function() {}, go: function() {}, back: function() {} }, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {}, matchMedia: function() { return {} }, requestAnimationFrame: function(e) { return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0) }, cancelAnimationFrame: function(e) { "undefined" != typeof setTimeout && clearTimeout(e) } };

                function l() { var e = "undefined" != typeof window ? window : {}; return a(e, s), e }

                function c(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                function u(e) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function d(e, t) { return (d = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }

                function h(e, t, n) { return (h = p() ? Reflect.construct : function(e, t, n) { var i = [null];
                        i.push.apply(i, t); var a = new(Function.bind.apply(e, i)); return n && d(a, n.prototype), a }).apply(null, arguments) }

                function f(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") }

                function m(e) { var t = "function" == typeof Map ? new Map : void 0; return (m = function(e) { if (null === e || !f(e)) return e; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) { if (t.has(e)) return t.get(e);
                            t.set(e, n) }

                        function n() { return h(e, arguments, u(this).constructor) } return n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), d(n, e) })(e) }

                function g(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function v(e) { var t = e.__proto__;
                    Object.defineProperty(e, "__proto__", { get: function() { return t }, set: function(e) { t.__proto__ = e } }) } var w = function(e) {
                    function t(t) { var n; return v(g(n = e.call.apply(e, [this].concat(t)) || this)), n } return c(t, e), t }(m(Array));

                function y(e) { void 0 === e && (e = []); var t = []; return e.forEach((function(e) { Array.isArray(e) ? t.push.apply(t, y(e)) : t.push(e) })), t }

                function b(e, t) { return Array.prototype.filter.call(e, t) }

                function x(e) { for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }

                function C(e, t) { if ("string" != typeof e) return [e]; for (var n = [], i = t.querySelectorAll(e), a = 0; a < i.length; a += 1) n.push(i[a]); return n }

                function E(e, t) { var n = l(),
                        i = o(),
                        a = []; if (!t && e instanceof w) return e; if (!e) return new w(a); if ("string" == typeof e) { var r = e.trim(); if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) { var s = "div";
                            0 === r.indexOf("<li") && (s = "ul"), 0 === r.indexOf("<tr") && (s = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (s = "tr"), 0 === r.indexOf("<tbody") && (s = "table"), 0 === r.indexOf("<option") && (s = "select"); var c = i.createElement(s);
                            c.innerHTML = r; for (var u = 0; u < c.childNodes.length; u += 1) a.push(c.childNodes[u]) } else a = C(e.trim(), t || i) } else if (e.nodeType || e === n || e === i) a.push(e);
                    else if (Array.isArray(e)) { if (e instanceof w) return e;
                        a = e } return new w(x(a)) }

                function k() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = y(t.map((function(e) { return e.split(" ") }))); return this.forEach((function(e) { var t;
                        (t = e.classList).add.apply(t, i) })), this }

                function S() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = y(t.map((function(e) { return e.split(" ") }))); return this.forEach((function(e) { var t;
                        (t = e.classList).remove.apply(t, i) })), this }

                function T() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = y(t.map((function(e) { return e.split(" ") })));
                    this.forEach((function(e) { i.forEach((function(t) { e.classList.toggle(t) })) })) }

                function M() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = y(t.map((function(e) { return e.split(" ") }))); return b(this, (function(e) { return i.filter((function(t) { return e.classList.contains(t) })).length > 0 })).length > 0 }

                function A(e, t) { if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (var n = 0; n < this.length; n += 1)
                        if (2 === arguments.length) this[n].setAttribute(e, t);
                        else
                            for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
                    return this }

                function D(e) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this }

                function I(e) { for (var t = 0; t < this.length; t += 1) this[t].style.transform = e; return this }

                function O(e) { for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e; return this }

                function P() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = t[0],
                        a = t[1],
                        r = t[2],
                        o = t[3];

                    function s(e) { var t = e.target; if (t) { var n = e.target.dom7EventData || []; if (n.indexOf(e) < 0 && n.unshift(e), E(t).is(a)) r.apply(t, n);
                            else
                                for (var i = E(t).parents(), o = 0; o < i.length; o += 1) E(i[o]).is(a) && r.apply(i[o], n) } }

                    function l(e) { var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t) } "function" == typeof t[1] && (i = t[0], r = t[1], o = t[2], a = void 0), o || (o = !1); for (var c, u = i.split(" "), d = 0; d < this.length; d += 1) { var p = this[d]; if (a)
                            for (c = 0; c < u.length; c += 1) { var h = u[c];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({ listener: r, proxyListener: s }), p.addEventListener(h, s, o) } else
                                for (c = 0; c < u.length; c += 1) { var f = u[c];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({ listener: r, proxyListener: l }), p.addEventListener(f, l, o) } } return this }

                function $() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = t[0],
                        a = t[1],
                        r = t[2],
                        o = t[3]; "function" == typeof t[1] && (i = t[0], r = t[1], o = t[2], a = void 0), o || (o = !1); for (var s = i.split(" "), l = 0; l < s.length; l += 1)
                        for (var c = s[l], u = 0; u < this.length; u += 1) { var d = this[u],
                                p = void 0; if (!a && d.dom7Listeners ? p = d.dom7Listeners[c] : a && d.dom7LiveListeners && (p = d.dom7LiveListeners[c]), p && p.length)
                                for (var h = p.length - 1; h >= 0; h -= 1) { var f = p[h];
                                    r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (d.removeEventListener(c, f.proxyListener, o), p.splice(h, 1)) : r || (d.removeEventListener(c, f.proxyListener, o), p.splice(h, 1)) } }
                    return this }

                function L() { for (var e = l(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]; for (var a = n[0].split(" "), r = n[1], o = 0; o < a.length; o += 1)
                        for (var s = a[o], c = 0; c < this.length; c += 1) { var u = this[c]; if (e.CustomEvent) { var d = new e.CustomEvent(s, { detail: r, bubbles: !0, cancelable: !0 });
                                u.dom7EventData = n.filter((function(e, t) { return t > 0 })), u.dispatchEvent(d), u.dom7EventData = [], delete u.dom7EventData } }
                    return this }

                function z(e) { var t = this;

                    function n(i) { i.target === this && (e.call(this, i), t.off("transitionend", n)) } return e && t.on("transitionend", n), this }

                function _(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }

                function N(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }

                function F() { if (this.length > 0) { var e = l(),
                            t = o(),
                            n = this[0],
                            i = n.getBoundingClientRect(),
                            a = t.body,
                            r = n.clientTop || a.clientTop || 0,
                            s = n.clientLeft || a.clientLeft || 0,
                            c = n === e ? e.scrollY : n.scrollTop,
                            u = n === e ? e.scrollX : n.scrollLeft; return { top: i.top + c - r, left: i.left + u - s } } return null }

                function H() { var e = l(); return this[0] ? e.getComputedStyle(this[0], null) : {} }

                function j(e, t) { var n, i = l(); if (1 === arguments.length) { if ("string" != typeof e) { for (n = 0; n < this.length; n += 1)
                                for (var a in e) this[n].style[a] = e[a]; return this } if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (n = 0; n < this.length; n += 1) this[n].style[e] = t; return this } return this }

                function R(e) { return e ? (this.forEach((function(t, n) { e.apply(t, [t, n]) })), this) : this }

                function B(e) { return E(b(this, e)) }

                function U(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : null; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this }

                function q(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = e; return this }

                function W(e) { var t, n, i = l(),
                        a = o(),
                        r = this[0]; if (!r || void 0 === e) return !1; if ("string" == typeof e) { if (r.matches) return r.matches(e); if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e); if (r.msMatchesSelector) return r.msMatchesSelector(e); for (t = E(e), n = 0; n < t.length; n += 1)
                            if (t[n] === r) return !0;
                        return !1 } if (e === a) return r === a; if (e === i) return r === i; if (e.nodeType || e instanceof w) { for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                            if (t[n] === r) return !0;
                        return !1 } return !1 }

                function Y() { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } }

                function V(e) { if (void 0 === e) return this; var t = this.length; if (e > t - 1) return E([]); if (e < 0) { var n = t + e; return E(n < 0 ? [] : [this[n]]) } return E([this[e]]) }

                function G() { for (var e, t = o(), n = 0; n < arguments.length; n += 1) { e = n < 0 || arguments.length <= n ? void 0 : arguments[n]; for (var i = 0; i < this.length; i += 1)
                            if ("string" == typeof e) { var a = t.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[i].appendChild(a.firstChild) } else if (e instanceof w)
                            for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
                        else this[i].appendChild(e) } return this }

                function X(e) { var t, n, i = o(); for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) { var a = i.createElement("div"); for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]) } else if (e instanceof w)
                        for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]); return this }

                function Q(e) { return this.length > 0 ? e ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e) ? E([this[0].nextElementSibling]) : E([]) : this[0].nextElementSibling ? E([this[0].nextElementSibling]) : E([]) : E([]) }

                function K(e) { var t = [],
                        n = this[0]; if (!n) return E([]); for (; n.nextElementSibling;) { var i = n.nextElementSibling;
                        e ? E(i).is(e) && t.push(i) : t.push(i), n = i } return E(t) }

                function Z(e) { if (this.length > 0) { var t = this[0]; return e ? t.previousElementSibling && E(t.previousElementSibling).is(e) ? E([t.previousElementSibling]) : E([]) : t.previousElementSibling ? E([t.previousElementSibling]) : E([]) } return E([]) }

                function J(e) { var t = [],
                        n = this[0]; if (!n) return E([]); for (; n.previousElementSibling;) { var i = n.previousElementSibling;
                        e ? E(i).is(e) && t.push(i) : t.push(i), n = i } return E(t) }

                function ee(e) { for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? E(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode)); return E(t) }

                function te(e) { for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].parentNode; i;) e ? E(i).is(e) && t.push(i) : t.push(i), i = i.parentNode; return E(t) }

                function ne(e) { var t = this; return void 0 === e ? E([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }

                function ie(e) { for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].querySelectorAll(e), a = 0; a < i.length; a += 1) t.push(i[a]); return E(t) }

                function ae(e) { for (var t = [], n = 0; n < this.length; n += 1)
                        for (var i = this[n].children, a = 0; a < i.length; a += 1) e && !E(i[a]).is(e) || t.push(i[a]); return E(t) }

                function re() { for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }
                E.fn = w.prototype; var oe, se, le, ce = { addClass: k, removeClass: S, hasClass: M, toggleClass: T, attr: A, removeAttr: D, transform: I, transition: O, on: P, off: $, trigger: L, transitionEnd: z, outerWidth: _, outerHeight: N, styles: H, offset: F, css: j, each: R, html: U, text: q, is: W, index: Y, eq: V, append: G, prepend: X, next: Q, nextAll: K, prev: Z, prevAll: J, parent: ee, parents: te, closest: ne, find: ie, children: ae, filter: B, remove: re };

                function ue(e) { var t = e;
                    Object.keys(t).forEach((function(e) { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} })) }

                function de(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }

                function pe() { return Date.now() }

                function he(e, t) { void 0 === t && (t = "x"); var n, i, a, r = l(),
                        o = r.getComputedStyle(e, null); return r.WebKitCSSMatrix ? ((i = o.transform || o.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) { return e.replace(",", ".") })).join(", ")), a = new r.WebKitCSSMatrix("none" === i ? "" : i)) : n = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0 }

                function fe(e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object }

                function me() { for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) { var n = t < 0 || arguments.length <= t ? void 0 : arguments[t]; if (null != n)
                            for (var i = Object.keys(Object(n)), a = 0, r = i.length; a < r; a += 1) { var o = i[a],
                                    s = Object.getOwnPropertyDescriptor(n, o);
                                void 0 !== s && s.enumerable && (fe(e[o]) && fe(n[o]) ? me(e[o], n[o]) : !fe(e[o]) && fe(n[o]) ? (e[o] = {}, me(e[o], n[o])) : e[o] = n[o]) } } return e }

                function ge(e, t) { Object.keys(t).forEach((function(n) { fe(t[n]) && Object.keys(t[n]).forEach((function(i) { "function" == typeof t[n][i] && (t[n][i] = t[n][i].bind(e)) })), e[n] = t[n] })) }

                function ve() { var e = l(),
                        t = o(); return { touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch), pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0, observer: "MutationObserver" in e || "WebkitMutationObserver" in e, passiveListener: function() { var t = !1; try { var n = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                                e.addEventListener("testPassiveListener", null, n) } catch (e) {} return t }(), gestures: "ongesturestart" in e } }

                function we() { return oe || (oe = ve()), oe }

                function ye(e) { var t = (void 0 === e ? {} : e).userAgent,
                        n = we(),
                        i = l(),
                        a = i.navigator.platform,
                        r = t || i.navigator.userAgent,
                        o = { ios: !1, android: !1 },
                        s = i.screen.width,
                        c = i.screen.height,
                        u = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                        d = r.match(/(iPad).*OS\s([\d_]+)/),
                        p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === a,
                        m = "MacIntel" === a,
                        g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"]; return !d && m && n.touch && g.indexOf(s + "x" + c) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), m = !1), u && !f && (o.os = "android", o.android = !0), (d || h || p) && (o.os = "ios", o.ios = !0), o }

                function be(e) { return void 0 === e && (e = {}), se || (se = ye(e)), se }

                function xe() { var e = l();

                    function t() { var t = e.navigator.userAgent.toLowerCase(); return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 } return { isEdge: !!e.navigator.userAgent.match(/Edge/g), isSafari: t(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) } }

                function Ce() { return le || (le = xe()), le }
                Object.keys(ce).forEach((function(e) { E.fn[e] = ce[e] })); var Ee = { name: "resize", create: function() { var e = this;
                            me(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function(e) { var t = l();
                                t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler) }, destroy: function(e) { var t = l();
                                t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler) } } },
                    ke = { attach: function(e, t) { void 0 === t && (t = {}); var n = l(),
                                i = this,
                                a = new(n.MutationObserver || n.WebkitMutationObserver)((function(e) { if (1 !== e.length) { var t = function() { i.emit("observerUpdate", e[0]) };
                                        n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0) } else i.emit("observerUpdate", e[0]) }));
                            a.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(a) }, init: function() { var e = this; if (e.support.observer && e.params.observer) { if (e.params.observeParents)
                                    for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                                e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 }) } }, destroy: function() { var e = this;
                            e.observer.observers.forEach((function(e) { e.disconnect() })), e.observer.observers = [] } },
                    Se = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function() { ge(this, { observer: n({}, ke, { observers: [] }) }) }, on: { init: function(e) { e.observer.init() }, destroy: function(e) { e.observer.destroy() } } };

                function Te() { var e, t, n = this,
                        i = n.$el;
                    e = void 0 !== n.params.width && null !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height && null !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), me(n, { width: e, height: t, size: n.isHorizontal() ? e : t })) }

                function Me() { var e = this,
                        t = l(),
                        n = e.params,
                        i = e.$wrapperEl,
                        a = e.size,
                        r = e.rtlTranslate,
                        o = e.wrongRTL,
                        s = e.virtual && n.virtual.enabled,
                        c = s ? e.virtual.slides.length : e.slides.length,
                        u = i.children("." + e.params.slideClass),
                        d = s ? e.virtual.slides.length : u.length,
                        p = [],
                        h = [],
                        f = [];

                    function m(e, t) { return !n.cssMode || t !== u.length - 1 } var g = n.slidesOffsetBefore; "function" == typeof g && (g = n.slidesOffsetBefore.call(e)); var v = n.slidesOffsetAfter; "function" == typeof v && (v = n.slidesOffsetAfter.call(e)); var w = e.snapGrid.length,
                        y = e.slidesGrid.length,
                        b = n.spaceBetween,
                        x = -g,
                        C = 0,
                        E = 0; if (void 0 !== a) { var k, S; "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, r ? u.css({ marginLeft: "", marginTop: "" }) : u.css({ marginRight: "", marginBottom: "" }), n.slidesPerColumn > 1 && (k = Math.floor(d / n.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / n.slidesPerColumn) * n.slidesPerColumn, "auto" !== n.slidesPerView && "row" === n.slidesPerColumnFill && (k = Math.max(k, n.slidesPerView * n.slidesPerColumn))); for (var T, M = n.slidesPerColumn, A = k / M, D = Math.floor(d / n.slidesPerColumn), I = 0; I < d; I += 1) { S = 0; var O = u.eq(I); if (n.slidesPerColumn > 1) { var P = void 0,
                                    $ = void 0,
                                    L = void 0; if ("row" === n.slidesPerColumnFill && n.slidesPerGroup > 1) { var z = Math.floor(I / (n.slidesPerGroup * n.slidesPerColumn)),
                                        _ = I - n.slidesPerColumn * n.slidesPerGroup * z,
                                        N = 0 === z ? n.slidesPerGroup : Math.min(Math.ceil((d - z * M * n.slidesPerGroup) / M), n.slidesPerGroup);
                                    P = ($ = _ - (L = Math.floor(_ / N)) * N + z * n.slidesPerGroup) + L * k / M, O.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P }) } else "column" === n.slidesPerColumnFill ? (L = I - ($ = Math.floor(I / M)) * M, ($ > D || $ === D && L === M - 1) && (L += 1) >= M && (L = 0, $ += 1)) : $ = I - (L = Math.floor(I / A)) * A;
                                O.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && n.spaceBetween && n.spaceBetween + "px") } if ("none" !== O.css("display")) { if ("auto" === n.slidesPerView) { var F = t.getComputedStyle(O[0], null),
                                        H = O[0].style.transform,
                                        j = O[0].style.webkitTransform; if (H && (O[0].style.transform = "none"), j && (O[0].style.webkitTransform = "none"), n.roundLengths) S = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                    else if (e.isHorizontal()) { var R = parseFloat(F.getPropertyValue("width") || 0),
                                            B = parseFloat(F.getPropertyValue("padding-left") || 0),
                                            U = parseFloat(F.getPropertyValue("padding-right") || 0),
                                            q = parseFloat(F.getPropertyValue("margin-left") || 0),
                                            W = parseFloat(F.getPropertyValue("margin-right") || 0),
                                            Y = F.getPropertyValue("box-sizing"); if (Y && "border-box" === Y) S = R + q + W;
                                        else { var V = O[0],
                                                G = V.clientWidth;
                                            S = R + B + U + q + W + (V.offsetWidth - G) } } else { var X = parseFloat(F.getPropertyValue("height") || 0),
                                            Q = parseFloat(F.getPropertyValue("padding-top") || 0),
                                            K = parseFloat(F.getPropertyValue("padding-bottom") || 0),
                                            Z = parseFloat(F.getPropertyValue("margin-top") || 0),
                                            J = parseFloat(F.getPropertyValue("margin-bottom") || 0),
                                            ee = F.getPropertyValue("box-sizing"); if (ee && "border-box" === ee) S = X + Z + J;
                                        else { var te = O[0],
                                                ne = te.clientHeight;
                                            S = X + Q + K + Z + J + (te.offsetHeight - ne) } }
                                    H && (O[0].style.transform = H), j && (O[0].style.webkitTransform = j), n.roundLengths && (S = Math.floor(S)) } else S = (a - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (S = Math.floor(S)), u[I] && (e.isHorizontal() ? u[I].style.width = S + "px" : u[I].style.height = S + "px");
                                u[I] && (u[I].swiperSlideSize = S), f.push(S), n.centeredSlides ? (x = x + S / 2 + C / 2 + b, 0 === C && 0 !== I && (x = x - a / 2 - b), 0 === I && (x = x - a / 2 - b), Math.abs(x) < .001 && (x = 0), n.roundLengths && (x = Math.floor(x)), E % n.slidesPerGroup == 0 && p.push(x), h.push(x)) : (n.roundLengths && (x = Math.floor(x)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(x), h.push(x), x = x + S + b), e.virtualSize += S + b, C = S, E += 1 } } if (e.virtualSize = Math.max(e.virtualSize, a) + v, r && o && ("slide" === n.effect || "coverflow" === n.effect) && i.css({ width: e.virtualSize + n.spaceBetween + "px" }), n.setWrapperSize && (e.isHorizontal() ? i.css({ width: e.virtualSize + n.spaceBetween + "px" }) : i.css({ height: e.virtualSize + n.spaceBetween + "px" })), n.slidesPerColumn > 1 && (e.virtualSize = (S + n.spaceBetween) * k, e.virtualSize = Math.ceil(e.virtualSize / n.slidesPerColumn) - n.spaceBetween, e.isHorizontal() ? i.css({ width: e.virtualSize + n.spaceBetween + "px" }) : i.css({ height: e.virtualSize + n.spaceBetween + "px" }), n.centeredSlides)) { T = []; for (var ie = 0; ie < p.length; ie += 1) { var ae = p[ie];
                                n.roundLengths && (ae = Math.floor(ae)), p[ie] < e.virtualSize + p[0] && T.push(ae) }
                            p = T } if (!n.centeredSlides) { T = []; for (var re = 0; re < p.length; re += 1) { var oe = p[re];
                                n.roundLengths && (oe = Math.floor(oe)), p[re] <= e.virtualSize - a && T.push(oe) }
                            p = T, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a) } if (0 === p.length && (p = [0]), 0 !== n.spaceBetween && (e.isHorizontal() ? r ? u.filter(m).css({ marginLeft: b + "px" }) : u.filter(m).css({ marginRight: b + "px" }) : u.filter(m).css({ marginBottom: b + "px" })), n.centeredSlides && n.centeredSlidesBounds) { var se = 0;
                            f.forEach((function(e) { se += e + (n.spaceBetween ? n.spaceBetween : 0) })); var le = (se -= n.spaceBetween) - a;
                            p = p.map((function(e) { return e < 0 ? -g : e > le ? le + v : e })) } if (n.centerInsufficientSlides) { var ce = 0; if (f.forEach((function(e) { ce += e + (n.spaceBetween ? n.spaceBetween : 0) })), (ce -= n.spaceBetween) < a) { var ue = (a - ce) / 2;
                                p.forEach((function(e, t) { p[t] = e - ue })), h.forEach((function(e, t) { h[t] = e + ue })) } }
                        me(e, { slides: u, snapGrid: p, slidesGrid: h, slidesSizesGrid: f }), d !== c && e.emit("slidesLengthChange"), p.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), (n.watchSlidesProgress || n.watchSlidesVisibility) && e.updateSlidesOffset() } }

                function Ae(e) { var t, n = this,
                        i = [],
                        a = 0; if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
                        if (n.params.centeredSlides) n.visibleSlides.each((function(e) { i.push(e) }));
                        else
                            for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) { var r = n.activeIndex + t; if (r > n.slides.length) break;
                                i.push(n.slides.eq(r)[0]) } else i.push(n.slides.eq(n.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) { var o = i[t].offsetHeight;
                            a = o > a ? o : a }
                    a && n.$wrapperEl.css("height", a + "px") }

                function De() { for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop }

                function Ie(e) { void 0 === e && (e = this && this.translate || 0); var t = this,
                        n = t.params,
                        i = t.slides,
                        a = t.rtlTranslate; if (0 !== i.length) { void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset(); var r = -e;
                        a && (r = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = []; for (var o = 0; o < i.length; o += 1) { var s = i[o],
                                l = (r + (n.centeredSlides ? t.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + n.spaceBetween); if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) { var c = -(r - s.swiperSlideOffset),
                                    u = c + t.slidesSizesGrid[o];
                                (c >= 0 && c < t.size - 1 || u > 1 && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(s), t.visibleSlidesIndexes.push(o), i.eq(o).addClass(n.slideVisibleClass)) }
                            s.progress = a ? -l : l }
                        t.visibleSlides = E(t.visibleSlides) } }

                function Oe(e) { var t = this; if (void 0 === e) { var n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0 } var i = t.params,
                        a = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        o = t.isBeginning,
                        s = t.isEnd,
                        l = o,
                        c = s;
                    0 === a ? (r = 0, o = !0, s = !0) : (o = (r = (e - t.minTranslate()) / a) <= 0, s = r >= 1), me(t, { progress: r, isBeginning: o, isEnd: s }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), o && !l && t.emit("reachBeginning toEdge"), s && !c && t.emit("reachEnd toEdge"), (l && !o || c && !s) && t.emit("fromEdge"), t.emit("progress", r) }

                function Pe() { var e, t = this,
                        n = t.slides,
                        i = t.params,
                        a = t.$wrapperEl,
                        r = t.activeIndex,
                        o = t.realIndex,
                        s = t.virtual && i.virtual.enabled;
                    n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = s ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : n.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass)); var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass); var c = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === c.length && (c = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses() }

                function $e(e) { var t, n = this,
                        i = n.rtlTranslate ? n.translate : -n.translate,
                        a = n.slidesGrid,
                        r = n.snapGrid,
                        o = n.params,
                        s = n.activeIndex,
                        l = n.realIndex,
                        c = n.snapIndex,
                        u = e; if (void 0 === u) { for (var d = 0; d < a.length; d += 1) void 0 !== a[d + 1] ? i >= a[d] && i < a[d + 1] - (a[d + 1] - a[d]) / 2 ? u = d : i >= a[d] && i < a[d + 1] && (u = d + 1) : i >= a[d] && (u = d);
                        o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0) } if (r.indexOf(i) >= 0) t = r.indexOf(i);
                    else { var p = Math.min(o.slidesPerGroupSkip, u);
                        t = p + Math.floor((u - p) / o.slidesPerGroup) } if (t >= r.length && (t = r.length - 1), u !== s) { var h = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                        me(n, { snapIndex: t, realIndex: h, previousIndex: s, activeIndex: u }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== h && n.emit("realIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange") } else t !== c && (n.snapIndex = t, n.emit("snapIndexChange")) }

                function Le(e) { var t = this,
                        n = t.params,
                        i = E(e.target).closest("." + n.slideClass)[0],
                        a = !1; if (i)
                        for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (a = !0); if (!i || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(E(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = E(i).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide() }

                function ze(e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this,
                        n = t.params,
                        i = t.rtlTranslate,
                        a = t.translate,
                        r = t.$wrapperEl; if (n.virtualTranslate) return i ? -a : a; if (n.cssMode) return a; var o = he(r[0], e); return i && (o = -o), o || 0 }

                function _e(e, t) { var n = this,
                        i = n.rtlTranslate,
                        a = n.params,
                        r = n.$wrapperEl,
                        o = n.wrapperEl,
                        s = n.progress,
                        l = 0,
                        c = 0,
                        u = 0;
                    n.isHorizontal() ? l = i ? -e : e : c = e, a.roundLengths && (l = Math.floor(l), c = Math.floor(c)), a.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : a.virtualTranslate || r.transform("translate3d(" + l + "px, " + c + "px, " + u + "px)"), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c; var d = n.maxTranslate() - n.minTranslate();
                    (0 === d ? 0 : (e - n.minTranslate()) / d) !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t) }

                function Ne() { return -this.snapGrid[0] }

                function Fe() { return -this.snapGrid[this.snapGrid.length - 1] }

                function He(e, t, n, i, a) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0); var r = this,
                        o = r.params,
                        s = r.wrapperEl; if (r.animating && o.preventInteractionOnTransition) return !1; var l, c = r.minTranslate(),
                        u = r.maxTranslate(); if (l = i && e > c ? c : i && e < u ? u : e, r.updateProgress(l), o.cssMode) { var d, p = r.isHorizontal(); return 0 === t ? s[p ? "scrollLeft" : "scrollTop"] = -l : s.scrollTo ? s.scrollTo(((d = {})[p ? "left" : "top"] = -l, d.behavior = "smooth", d)) : s[p ? "scrollLeft" : "scrollTop"] = -l, !0 } return 0 === t ? (r.setTransition(0), r.setTranslate(l), n && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), n && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd")) }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0 }

                function je(e, t) { var n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t) }

                function Re(e, t) { void 0 === e && (e = !0); var n = this,
                        i = n.activeIndex,
                        a = n.params,
                        r = n.previousIndex; if (!a.cssMode) { a.autoHeight && n.updateAutoHeight(); var o = t; if (o || (o = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionStart"), e && i !== r) { if ("reset" === o) return void n.emit("slideResetTransitionStart");
                            n.emit("slideChangeTransitionStart"), "next" === o ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart") } } }

                function Be(e, t) { void 0 === e && (e = !0); var n = this,
                        i = n.activeIndex,
                        a = n.previousIndex,
                        r = n.params; if (n.animating = !1, !r.cssMode) { n.setTransition(0); var o = t; if (o || (o = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== a) { if ("reset" === o) return void n.emit("slideResetTransitionEnd");
                            n.emit("slideChangeTransitionEnd"), "next" === o ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd") } } }

                function Ue(e, t, n, i) { if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given."); if ("string" == typeof e) { var a = parseInt(e, 10); if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = a } var r = this,
                        o = e;
                    o < 0 && (o = 0); var s = r.params,
                        l = r.snapGrid,
                        c = r.slidesGrid,
                        u = r.previousIndex,
                        d = r.activeIndex,
                        p = r.rtlTranslate,
                        h = r.wrapperEl; if (r.animating && s.preventInteractionOnTransition) return !1; var f = Math.min(r.params.slidesPerGroupSkip, o),
                        m = f + Math.floor((o - f) / r.params.slidesPerGroup);
                    m >= l.length && (m = l.length - 1), (d || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart"); var g, v = -l[m]; if (r.updateProgress(v), s.normalizeSlideIndex)
                        for (var w = 0; w < c.length; w += 1) { var y = -Math.floor(100 * v),
                                b = Math.floor(100 * c[w]),
                                x = Math.floor(100 * c[w + 1]);
                            void 0 !== c[w + 1] ? y >= b && y < x - (x - b) / 2 ? o = w : y >= b && y < x && (o = w + 1) : y >= b && (o = w) }
                    if (r.initialized && o !== d) { if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1; if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (d || 0) !== o) return !1 } if (g = o > d ? "next" : o < d ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(o), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(v), "reset" !== g && (r.transitionStart(n, g), r.transitionEnd(n, g)), !1; if (s.cssMode) { var C, E = r.isHorizontal(),
                            k = -v; return p && (k = h.scrollWidth - h.offsetWidth - k), 0 === t ? h[E ? "scrollLeft" : "scrollTop"] = k : h.scrollTo ? h.scrollTo(((C = {})[E ? "left" : "top"] = k, C.behavior = "smooth", C)) : h[E ? "scrollLeft" : "scrollTop"] = k, !0 } return 0 === t ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, g), r.transitionEnd(n, g)) : (r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, g), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, g)) }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0 }

                function qe(e, t, n, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0); var a = this,
                        r = e; return a.params.loop && (r += a.loopedSlides), a.slideTo(r, t, n, i) }

                function We(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this,
                        a = i.params,
                        r = i.animating,
                        o = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup; if (a.loop) { if (r && a.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft } return i.slideTo(i.activeIndex + o, e, t, n) }

                function Ye(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this,
                        a = i.params,
                        r = i.animating,
                        o = i.snapGrid,
                        s = i.slidesGrid,
                        l = i.rtlTranslate; if (a.loop) { if (r && a.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft }

                    function c(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } var u, d = c(l ? i.translate : -i.translate),
                        p = o.map((function(e) { return c(e) })),
                        h = (o[p.indexOf(d)], o[p.indexOf(d) - 1]); return void 0 === h && a.cssMode && o.forEach((function(e) {!h && d >= e && (h = e) })), void 0 !== h && (u = s.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n) }

                function Ve(e, t, n) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var i = this; return i.slideTo(i.activeIndex, e, t, n) }

                function Ge(e, t, n, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5); var a = this,
                        r = a.activeIndex,
                        o = Math.min(a.params.slidesPerGroupSkip, r),
                        s = o + Math.floor((r - o) / a.params.slidesPerGroup),
                        l = a.rtlTranslate ? a.translate : -a.translate; if (l >= a.snapGrid[s]) { var c = a.snapGrid[s];
                        l - c > (a.snapGrid[s + 1] - c) * i && (r += a.params.slidesPerGroup) } else { var u = a.snapGrid[s - 1];
                        l - u <= (a.snapGrid[s] - u) * i && (r -= a.params.slidesPerGroup) } return r = Math.max(r, 0), r = Math.min(r, a.slidesGrid.length - 1), a.slideTo(r, e, t, n) }

                function Xe() { var e, t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        a = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                        r = t.clickedIndex; if (n.loop) { if (t.animating) return;
                        e = parseInt(E(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), de((function() { t.slideTo(r) }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), de((function() { t.slideTo(r) }))) : t.slideTo(r) } else t.slideTo(r) }

                function Qe() { var e = this,
                        t = o(),
                        n = e.params,
                        i = e.$wrapperEl;
                    i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(); var a = i.children("." + n.slideClass); if (n.loopFillGroupWithBlank) { var r = n.slidesPerGroup - a.length % n.slidesPerGroup; if (r !== n.slidesPerGroup) { for (var s = 0; s < r; s += 1) { var l = E(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                i.append(l) }
                            a = i.children("." + n.slideClass) } } "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length); var c = [],
                        u = [];
                    a.each((function(t, n) { var i = E(t);
                        n < e.loopedSlides && u.push(t), n < a.length && n >= a.length - e.loopedSlides && c.push(t), i.attr("data-swiper-slide-index", n) })); for (var d = 0; d < u.length; d += 1) i.append(E(u[d].cloneNode(!0)).addClass(n.slideDuplicateClass)); for (var p = c.length - 1; p >= 0; p -= 1) i.prepend(E(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass)) }

                function Ke() { var e = this;
                    e.emit("beforeLoopFix"); var t, n = e.activeIndex,
                        i = e.slides,
                        a = e.loopedSlides,
                        r = e.allowSlidePrev,
                        o = e.allowSlideNext,
                        s = e.snapGrid,
                        l = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0; var c = -s[n] - e.getTranslate();
                    n < a ? (t = i.length - 3 * a + n, t += a, e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)) : n >= i.length - a && (t = -i.length + n + a, t += a, e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)), e.allowSlidePrev = r, e.allowSlideNext = o, e.emit("loopFix") }

                function Ze() { var e = this,
                        t = e.$wrapperEl,
                        n = e.params,
                        i = e.slides;
                    t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index") }

                function Je(e) { var t = this; if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) { var n = t.el;
                        n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab" } }

                function et() { var e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "") }

                function tt(e) { var t = this,
                        n = t.$wrapperEl,
                        i = t.params; if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var a = 0; a < e.length; a += 1) e[a] && n.append(e[a]);
                    else n.append(e);
                    i.loop && t.loopCreate(), i.observer && t.support.observer || t.update() }

                function nt(e) { var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        a = t.activeIndex;
                    n.loop && t.loopDestroy(); var r = a + 1; if ("object" == typeof e && "length" in e) { for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
                        r = a + e.length } else i.prepend(e);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1) }

                function it(e, t) { var n = this,
                        i = n.$wrapperEl,
                        a = n.params,
                        r = n.activeIndex;
                    a.loop && (r -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + a.slideClass)); var o = n.slides.length; if (e <= 0) n.prependSlide(t);
                    else if (e >= o) n.appendSlide(t);
                    else { for (var s = r > e ? r + 1 : r, l = [], c = o - 1; c >= e; c -= 1) { var u = n.slides.eq(c);
                            u.remove(), l.unshift(u) } if ("object" == typeof t && "length" in t) { for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
                            s = r > e ? r + t.length : r } else i.append(t); for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        a.loop && n.loopCreate(), a.observer && n.support.observer || n.update(), a.loop ? n.slideTo(s + n.loopedSlides, 0, !1) : n.slideTo(s, 0, !1) } }

                function at(e) { var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        a = t.activeIndex;
                    n.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass)); var r, o = a; if ("object" == typeof e && "length" in e) { for (var s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                        o = Math.max(o, 0) } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1) }

                function rt() { for (var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
                    e.removeSlide(t) }

                function ot(e) { var t = this,
                        n = o(),
                        i = l(),
                        a = t.touchEventsData,
                        r = t.params,
                        s = t.touches; if (!t.animating || !r.preventInteractionOnTransition) { var c = e;
                        c.originalEvent && (c = c.originalEvent); var u = E(c.target); if (("wrapper" !== r.touchEventsTarget || u.closest(t.wrapperEl).length) && (a.isTouchEvent = "touchstart" === c.type, (a.isTouchEvent || !("which" in c) || 3 !== c.which) && !(!a.isTouchEvent && "button" in c && c.button > 0 || a.isTouched && a.isMoved)))
                            if (!!r.noSwipingClass && "" !== r.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (u = E(e.path[0])), r.noSwiping && u.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) t.allowClick = !0;
                            else if (!r.swipeHandler || u.closest(r.swipeHandler)[0]) { s.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, s.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY; var d = s.currentX,
                                p = s.currentY,
                                h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                f = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold; if (h && (d <= f || d >= i.innerWidth - f)) { if ("prevent" !== h) return;
                                e.preventDefault() } if (me(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = d, s.startY = p, a.touchStartTime = pe(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== c.type) { var m = !0;
                                u.is(a.formElements) && (m = !1), n.activeElement && E(n.activeElement).is(a.formElements) && n.activeElement !== u[0] && n.activeElement.blur(); var g = m && t.allowTouchMove && r.touchStartPreventDefault;!r.touchStartForcePreventDefault && !g || u[0].isContentEditable || c.preventDefault() }
                            t.emit("touchStart", c) } } }

                function st(e) { var t = o(),
                        n = this,
                        i = n.touchEventsData,
                        a = n.params,
                        r = n.touches,
                        s = n.rtlTranslate,
                        l = e; if (l.originalEvent && (l = l.originalEvent), i.isTouched) { if (!i.isTouchEvent || "touchmove" === l.type) { var c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                u = "touchmove" === l.type ? c.pageX : l.pageX,
                                d = "touchmove" === l.type ? c.pageY : l.pageY; if (l.preventedByNestedSwiper) return r.startX = u, void(r.startY = d); if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (me(r, { startX: u, startY: d, currentX: u, currentY: d }), i.touchStartTime = pe())); if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                if (n.isVertical()) { if (d < r.startY && n.translate <= n.maxTranslate() || d > r.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1) } else if (u < r.startX && n.translate <= n.maxTranslate() || u > r.startX && n.translate >= n.minTranslate()) return; if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && E(l.target).is(i.formElements)) return i.isMoved = !0, void(n.allowClick = !1); if (i.allowTouchCallbacks && n.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) { r.currentX = u, r.currentY = d; var p, h = r.currentX - r.startX,
                                    f = r.currentY - r.startY; if (!(n.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < n.params.threshold))
                                    if (void 0 === i.isScrolling && (n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (p = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                    else if (i.startMoving) { n.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0; var m = n.isHorizontal() ? h : f;
                                    r.diff = m, m *= a.touchRatio, s && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate; var g = !0,
                                        v = a.resistanceRatio; if (a.touchReleaseOnEdges && (v = 0), m > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, a.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + m, v))) : m < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, a.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) { if (!(Math.abs(m) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY) }
                                    a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({ position: r[n.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: r[n.isHorizontal() ? "currentX" : "currentY"], time: pe() })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate)) } } } } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l) }

                function lt(e) { var t = this,
                        n = t.touchEventsData,
                        i = t.params,
                        a = t.touches,
                        r = t.rtlTranslate,
                        o = t.$wrapperEl,
                        s = t.slidesGrid,
                        l = t.snapGrid,
                        c = e; if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                    i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var u, d = pe(),
                        p = d - n.touchStartTime; if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), n.lastClickTime = pe(), de((function() { t.destroyed || (t.allowClick = !0) })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1); if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode)
                        if (i.freeMode) { if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if (i.freeModeMomentum) { if (n.velocities.length > 1) { var h = n.velocities.pop(),
                                        f = n.velocities.pop(),
                                        m = h.position - f.position,
                                        g = h.time - f.time;
                                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || pe() - h.time > 300) && (t.velocity = 0) } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0; var v = 1e3 * i.freeModeMomentumRatio,
                                    w = t.velocity * v,
                                    y = t.translate + w;
                                r && (y = -y); var b, x, C = !1,
                                    E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio; if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), b = t.maxTranslate(), C = !0, n.allowMomentumBounce = !0) : y = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), b = t.minTranslate(), C = !0, n.allowMomentumBounce = !0) : y = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (i.freeModeSticky) { for (var k, S = 0; S < l.length; S += 1)
                                        if (l[S] > -y) { k = S; break }
                                    y = -(y = Math.abs(l[k] - y) < Math.abs(l[k - 1] - y) || "next" === t.swipeDirection ? l[k] : l[k - 1]) } if (x && t.once("transitionEnd", (function() { t.loopFix() })), 0 !== t.velocity) { if (v = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), i.freeModeSticky) { var T = Math.abs((r ? -y : y) - t.translate),
                                            M = t.slidesSizesGrid[t.activeIndex];
                                        v = T < M ? i.speed : T < 2 * M ? 1.5 * i.speed : 2.5 * i.speed } } else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(v), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function() { t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout((function() { t.setTranslate(b), o.transitionEnd((function() { t && !t.destroyed && t.transitionEnd() })) }), 0)) }))) : t.velocity ? (t.updateProgress(y), t.setTransition(v), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function() { t && !t.destroyed && t.transitionEnd() })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses() } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } else { for (var A = 0, D = t.slidesSizesGrid[0], I = 0; I < s.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) { var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                void 0 !== s[I + O] ? u >= s[I] && u < s[I + O] && (A = I, D = s[I + O] - s[I]) : u >= s[I] && (A = I, D = s[s.length - 1] - s[s.length - 2]) } var P = (u - s[A]) / D,
                                $ = A < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup; if (p > i.longSwipesMs) { if (!i.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(A + $) : t.slideTo(A)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(A + $) : t.slideTo(A)) } else { if (!i.shortSwipes) return void t.slideTo(t.activeIndex);!t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(A + $), "prev" === t.swipeDirection && t.slideTo(A)) : c.target === t.navigation.nextEl ? t.slideTo(A + $) : t.slideTo(A) } } }

                function ct() { var e = this,
                        t = e.params,
                        n = e.el; if (!n || 0 !== n.offsetWidth) { t.breakpoints && e.setBreakpoint(); var i = e.allowSlideNext,
                            a = e.allowSlidePrev,
                            r = e.snapGrid;
                        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow() } }

                function ut(e) { var t = this;
                    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }

                function dt() { var e = this,
                        t = e.wrapperEl,
                        n = e.rtlTranslate;
                    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(); var i = e.maxTranslate() - e.minTranslate();
                    (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1) } var pt = !1;

                function ht() {}

                function ft() { var e = this,
                        t = o(),
                        n = e.params,
                        i = e.touchEvents,
                        a = e.el,
                        r = e.wrapperEl,
                        s = e.device,
                        l = e.support;
                    e.onTouchStart = ot.bind(e), e.onTouchMove = st.bind(e), e.onTouchEnd = lt.bind(e), n.cssMode && (e.onScroll = dt.bind(e)), e.onClick = ut.bind(e); var c = !!n.nested; if (!l.touch && l.pointerEvents) a.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, c), t.addEventListener(i.end, e.onTouchEnd, !1);
                    else { if (l.touch) { var u = !("touchstart" !== i.start || !l.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                            a.addEventListener(i.start, e.onTouchStart, u), a.addEventListener(i.move, e.onTouchMove, l.passiveListener ? { passive: !1, capture: c } : c), a.addEventListener(i.end, e.onTouchEnd, u), i.cancel && a.addEventListener(i.cancel, e.onTouchEnd, u), pt || (t.addEventListener("touchstart", ht), pt = !0) }(n.simulateTouch && !s.ios && !s.android || n.simulateTouch && !l.touch && s.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, c), t.addEventListener("mouseup", e.onTouchEnd, !1)) }(n.preventClicks || n.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), n.cssMode && r.addEventListener("scroll", e.onScroll), n.updateOnWindowResize ? e.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ct, !0) : e.on("observerUpdate", ct, !0) }

                function mt() { var e = this,
                        t = o(),
                        n = e.params,
                        i = e.touchEvents,
                        a = e.el,
                        r = e.wrapperEl,
                        s = e.device,
                        l = e.support,
                        c = !!n.nested; if (!l.touch && l.pointerEvents) a.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, c), t.removeEventListener(i.end, e.onTouchEnd, !1);
                    else { if (l.touch) { var u = !("onTouchStart" !== i.start || !l.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                            a.removeEventListener(i.start, e.onTouchStart, u), a.removeEventListener(i.move, e.onTouchMove, c), a.removeEventListener(i.end, e.onTouchEnd, u), i.cancel && a.removeEventListener(i.cancel, e.onTouchEnd, u) }(n.simulateTouch && !s.ios && !s.android || n.simulateTouch && !l.touch && s.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, c), t.removeEventListener("mouseup", e.onTouchEnd, !1)) }(n.preventClicks || n.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), n.cssMode && r.removeEventListener("scroll", e.onScroll), e.off(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ct) }

                function gt() { var e = this,
                        t = e.activeIndex,
                        n = e.initialized,
                        i = e.loopedSlides,
                        a = void 0 === i ? 0 : i,
                        r = e.params,
                        o = e.$el,
                        s = r.breakpoints; if (s && (!s || 0 !== Object.keys(s).length)) { var l = e.getBreakpoint(s); if (l && e.currentBreakpoint !== l) { var c = l in s ? s[l] : void 0;
                            c && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) { var t = c[e];
                                void 0 !== t && (c[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto") })); var u = c || e.originalParams,
                                d = r.slidesPerColumn > 1,
                                p = u.slidesPerColumn > 1;
                            d && !p ? (o.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !d && p && (o.addClass(r.containerModifierClass + "multirow"), "column" === u.slidesPerColumnFill && o.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses()); var h = u.direction && u.direction !== r.direction,
                                f = r.loop && (u.slidesPerView !== r.slidesPerView || h);
                            h && n && e.changeDirection(), me(e.params, u), me(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", u), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", u) } } }

                function vt(e) { var t = l(); if (e) { var n = !1,
                            i = Object.keys(e).map((function(e) { if ("string" == typeof e && 0 === e.indexOf("@")) { var n = parseFloat(e.substr(1)); return { value: t.innerHeight * n, point: e } } return { value: e, point: e } }));
                        i.sort((function(e, t) { return parseInt(e.value, 10) - parseInt(t.value, 10) })); for (var a = 0; a < i.length; a += 1) { var r = i[a],
                                o = r.point;
                            r.value <= t.innerWidth && (n = o) } return n || "max" } }

                function wt() { var e = this,
                        t = e.classNames,
                        n = e.params,
                        i = e.rtl,
                        a = e.$el,
                        r = e.device,
                        o = [];
                    o.push("initialized"), o.push(n.direction), n.freeMode && o.push("free-mode"), n.autoHeight && o.push("autoheight"), i && o.push("rtl"), n.slidesPerColumn > 1 && (o.push("multirow"), "column" === n.slidesPerColumnFill && o.push("multirow-column")), r.android && o.push("android"), r.ios && o.push("ios"), n.cssMode && o.push("css-mode"), o.forEach((function(e) { t.push(n.containerModifierClass + e) })), a.addClass(t.join(" ")), e.emitContainerClasses() }

                function yt() { var e = this,
                        t = e.$el,
                        n = e.classNames;
                    t.removeClass(n.join(" ")), e.emitContainerClasses() }

                function bt(e, t, n, i, a, r) { var o, s = l();

                    function c() { r && r() }
                    E(e).parent("picture")[0] || e.complete && a ? c() : t ? ((o = new s.Image).onload = c, o.onerror = c, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : c() }

                function xt() { var e = this;

                    function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) }
                    e.imagesToLoad = e.$el.find("img"); for (var n = 0; n < e.imagesToLoad.length; n += 1) { var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t) } }

                function Ct() { var e = this,
                        t = e.params,
                        n = e.isLocked,
                        i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update()) } var Et = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, nested: !1, width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, slidesPerGroupSkip: 0, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, loopPreventsSlide: !0, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0, _emitClasses: !1 },
                    kt = { modular: { useParams: function(e) { var t = this;
                                t.modules && Object.keys(t.modules).forEach((function(n) { var i = t.modules[n];
                                    i.params && me(e, i.params) })) }, useModules: function(e) { void 0 === e && (e = {}); var t = this;
                                t.modules && Object.keys(t.modules).forEach((function(n) { var i = t.modules[n],
                                        a = e[n] || {};
                                    i.on && t.on && Object.keys(i.on).forEach((function(e) { t.on(e, i.on[e]) })), i.create && i.create.bind(t)(a) })) } }, eventsEmitter: { on: function(e, t, n) { var i = this; if ("function" != typeof t) return i; var a = n ? "unshift" : "push"; return e.split(" ").forEach((function(e) { i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t) })), i }, once: function(e, t, n) { var i = this; if ("function" != typeof t) return i;

                                function a() { i.off(e, a), a.__emitterProxy && delete a.__emitterProxy; for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                    t.apply(i, r) } return a.__emitterProxy = t, i.on(e, a, n) }, onAny: function(e, t) { var n = this; if ("function" != typeof e) return n; var i = t ? "unshift" : "push"; return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n }, offAny: function(e) { var t = this; if (!t.eventsAnyListeners) return t; var n = t.eventsAnyListeners.indexOf(e); return n >= 0 && t.eventsAnyListeners.splice(n, 1), t }, off: function(e, t) { var n = this; return n.eventsListeners ? (e.split(" ").forEach((function(e) { void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((function(i, a) {
                                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(a, 1) })) })), n) : n }, emit: function() { var e, t, n, i = this; if (!i.eventsListeners) return i; for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]; return "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), n = i) : (e = r[0].events, t = r[0].data, n = r[0].context || i), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((function(e) { i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((function(i) { i.apply(n, [e].concat(t)) })), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach((function(e) { e.apply(n, t) })) })), i } }, update: { updateSize: Te, updateSlides: Me, updateAutoHeight: Ae, updateSlidesOffset: De, updateSlidesProgress: Ie, updateProgress: Oe, updateSlidesClasses: Pe, updateActiveIndex: $e, updateClickedSlide: Le }, translate: { getTranslate: ze, setTranslate: _e, minTranslate: Ne, maxTranslate: Fe, translateTo: He }, transition: { setTransition: je, transitionStart: Re, transitionEnd: Be }, slide: { slideTo: Ue, slideToLoop: qe, slideNext: We, slidePrev: Ye, slideReset: Ve, slideToClosest: Ge, slideToClickedSlide: Xe }, loop: { loopCreate: Qe, loopFix: Ke, loopDestroy: Ze }, grabCursor: { setGrabCursor: Je, unsetGrabCursor: et }, manipulation: { appendSlide: tt, prependSlide: nt, addSlide: it, removeSlide: at, removeAllSlides: rt }, events: { attachEvents: ft, detachEvents: mt }, breakpoints: { setBreakpoint: gt, getBreakpoint: vt }, checkOverflow: { checkOverflow: Ct }, classes: { addClasses: wt, removeClasses: yt }, images: { loadImage: bt, preloadImages: xt } },
                    St = {},
                    Tt = function() {
                        function e() { for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                            1 === a.length && a[0].constructor && a[0].constructor === Object ? n = a[0] : (t = a[0], n = a[1]), n || (n = {}), n = me({}, n), t && !n.el && (n.el = t); var o = this;
                            o.support = we(), o.device = be({ userAgent: n.userAgent }), o.browser = Ce(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function(e) { var t = o.modules[e]; if (t.params) { var i = Object.keys(t.params)[0],
                                        a = t.params[i]; if ("object" != typeof a || null === a) return; if (!(i in n) || !("enabled" in a)) return;!0 === n[i] && (n[i] = { enabled: !0 }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = { enabled: !1 }) } })); var s = me({}, Et);
                            o.useParams(s), o.params = me({}, s, St, n), o.originalParams = me({}, o.params), o.passedParams = me({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((function(e) { o.on(e, o.params.on[e]) })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = E; var l = E(o.params.el); if (t = l[0]) { if (l.length > 1) { var c = []; return l.each((function(t) { var i = me({}, n, { el: t });
                                        c.push(new e(i)) })), c } var u, d, p; return t.swiper = o, t && t.shadowRoot && t.shadowRoot.querySelector ? (u = E(t.shadowRoot.querySelector("." + o.params.wrapperClass))).children = function(e) { return l.children(e) } : u = l.children("." + o.params.wrapperClass), me(o, { $el: l, el: t, $wrapperEl: u, wrapperEl: u[0], classNames: [], slides: E(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === o.params.direction }, isVertical: function() { return "vertical" === o.params.direction }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"), rtlTranslate: "horizontal" === o.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")), wrongRTL: "-webkit-box" === u.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: o.params.allowSlideNext, allowSlidePrev: o.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend", "touchcancel"], p = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (p = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = { start: d[0], move: d[1], end: d[2], cancel: d[3] }, o.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video, label", lastClickTime: pe(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: o.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o } } var n = e.prototype; return n.emitContainerClasses = function() { var e = this; if (e.params._emitClasses && e.el) { var t = e.el.className.split(" ").filter((function(t) { return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass) }));
                                e.emit("_containerClasses", t.join(" ")) } }, n.getSlideClasses = function(e) { var t = this; return e.className.split(" ").filter((function(e) { return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass) })).join(" ") }, n.emitSlidesClasses = function() { var e = this;
                            e.params._emitClasses && e.el && e.slides.each((function(t) { var n = e.getSlideClasses(t);
                                e.emit("_slideClass", t, n) })) }, n.slidesPerViewDynamic = function() { var e = this,
                                t = e.params,
                                n = e.slides,
                                i = e.slidesGrid,
                                a = e.size,
                                r = e.activeIndex,
                                o = 1; if (t.centeredSlides) { for (var s, l = n[r].swiperSlideSize, c = r + 1; c < n.length; c += 1) n[c] && !s && (o += 1, (l += n[c].swiperSlideSize) > a && (s = !0)); for (var u = r - 1; u >= 0; u -= 1) n[u] && !s && (o += 1, (l += n[u].swiperSlideSize) > a && (s = !0)) } else
                                for (var d = r + 1; d < n.length; d += 1) i[d] - i[r] < a && (o += 1); return o }, n.update = function() { var e = this; if (e && !e.destroyed) { var t = e.snapGrid,
                                    n = e.params;
                                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update") }

                            function i() { var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses() } }, n.changeDirection = function(e, t) { void 0 === t && (t = !0); var n = this,
                                i = n.params.direction; return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + e), n.emitContainerClasses(), n.params.direction = e, n.slides.each((function(t) { "vertical" === e ? t.style.width = "" : t.style.height = "" })), n.emit("changeDirection"), t && n.update()), n }, n.init = function() { var e = this;
                            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"), e.emit("afterInit")) }, n.destroy = function(e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var n = this,
                                i = n.params,
                                a = n.$el,
                                r = n.$wrapperEl,
                                o = n.slides; return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((function(e) { n.off(e) })), !1 !== e && (n.$el[0].swiper = null, ue(n)), n.destroyed = !0), null }, e.extendDefaults = function(e) { me(St, e) }, e.installModule = function(t) { e.prototype.modules || (e.prototype.modules = {}); var n = t.name || Object.keys(e.prototype.modules).length + "_" + pe();
                            e.prototype.modules[n] = t }, e.use = function(t) { return Array.isArray(t) ? (t.forEach((function(t) { return e.installModule(t) })), e) : (e.installModule(t), e) }, t(e, null, [{ key: "extendedDefaults", get: function() { return St } }, { key: "defaults", get: function() { return Et } }]), e }();
                Object.keys(kt).forEach((function(e) { Object.keys(kt[e]).forEach((function(t) { Tt.prototype[t] = kt[e][t] })) })), Tt.use([Ee, Se]); var Mt = { update: function(e) { var t = this,
                                n = t.params,
                                i = n.slidesPerView,
                                a = n.slidesPerGroup,
                                r = n.centeredSlides,
                                o = t.params.virtual,
                                s = o.addSlidesBefore,
                                l = o.addSlidesAfter,
                                c = t.virtual,
                                u = c.from,
                                d = c.to,
                                p = c.slides,
                                h = c.slidesGrid,
                                f = c.renderSlide,
                                m = c.offset;
                            t.updateActiveIndex(); var g, v, w, y = t.activeIndex || 0;
                            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(i / 2) + a + l, w = Math.floor(i / 2) + a + s) : (v = i + (a - 1) + l, w = a + s); var b = Math.max((y || 0) - w, 0),
                                x = Math.min((y || 0) + v, p.length - 1),
                                C = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                            function E() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() } if (me(t.virtual, { from: b, to: x, offset: C, slidesGrid: t.slidesGrid }), u === b && d === x && !e) return t.slidesGrid !== h && C !== m && t.slides.css(g, C + "px"), void t.updateProgress(); if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: C, from: b, to: x, slides: function() { for (var e = [], t = b; t <= x; t += 1) e.push(p[t]); return e }() }), void(t.params.virtual.renderExternalUpdate && E()); var k = [],
                                S = []; if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                            else
                                for (var T = u; T <= d; T += 1)(T < b || T > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove(); for (var M = 0; M < p.length; M += 1) M >= b && M <= x && (void 0 === d || e ? S.push(M) : (M > d && S.push(M), M < u && k.push(M)));
                            S.forEach((function(e) { t.$wrapperEl.append(f(p[e], e)) })), k.sort((function(e, t) { return t - e })).forEach((function(e) { t.$wrapperEl.prepend(f(p[e], e)) })), t.$wrapperEl.children(".swiper-slide").css(g, C + "px"), E() }, renderSlide: function(e, t) { var n = this,
                                i = n.params.virtual; if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t]; var a = i.renderSlide ? E(i.renderSlide.call(n, e, t)) : E('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = a), a }, appendSlide: function(e) { var t = this; if ("object" == typeof e && "length" in e)
                                for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
                            else t.virtual.slides.push(e);
                            t.virtual.update(!0) }, prependSlide: function(e) { var t = this,
                                n = t.activeIndex,
                                i = n + 1,
                                a = 1; if (Array.isArray(e)) { for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                                i = n + e.length, a = e.length } else t.virtual.slides.unshift(e); if (t.params.virtual.cache) { var o = t.virtual.cache,
                                    s = {};
                                Object.keys(o).forEach((function(e) { var t = o[e],
                                        n = t.attr("data-swiper-slide-index");
                                    n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), s[parseInt(e, 10) + a] = t })), t.virtual.cache = s }
                            t.virtual.update(!0), t.slideTo(i, 0) }, removeSlide: function(e) { var t = this; if (null != e) { var n = t.activeIndex; if (Array.isArray(e))
                                    for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
                                else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                                t.virtual.update(!0), t.slideTo(n, 0) } }, removeAllSlides: function() { var e = this;
                            e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0) } },
                    At = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function() { var e = this;
                            ge(e, { virtual: n({}, Mt, { slides: e.params.virtual.slides, cache: {} }) }) }, on: { beforeInit: function(e) { if (e.params.virtual.enabled) { e.classNames.push(e.params.containerModifierClass + "virtual"); var t = { watchSlidesProgress: !0 };
                                    me(e.params, t), me(e.originalParams, t), e.params.initialSlide || e.virtual.update() } }, setTranslate: function(e) { e.params.virtual.enabled && e.virtual.update() } } },
                    Dt = { handle: function(e) { var t = this,
                                n = l(),
                                i = o(),
                                a = t.rtlTranslate,
                                r = e;
                            r.originalEvent && (r = r.originalEvent); var s = r.keyCode || r.charCode,
                                c = t.params.keyboard.pageUpDown,
                                u = c && 33 === s,
                                d = c && 34 === s,
                                p = 37 === s,
                                h = 39 === s,
                                f = 38 === s,
                                m = 40 === s; if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && m || d)) return !1; if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && f || u)) return !1; if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) { if (t.params.keyboard.onlyInViewport && (u || d || p || h || f || m)) { var g = !1; if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return; var v = n.innerWidth,
                                        w = n.innerHeight,
                                        y = t.$el.offset();
                                    a && (y.left -= t.$el[0].scrollLeft); for (var b = [
                                            [y.left, y.top],
                                            [y.left + t.width, y.top],
                                            [y.left, y.top + t.height],
                                            [y.left + t.width, y.top + t.height]
                                        ], x = 0; x < b.length; x += 1) { var C = b[x]; if (C[0] >= 0 && C[0] <= v && C[1] >= 0 && C[1] <= w) { if (0 === C[0] && 0 === C[1]) continue;
                                            g = !0 } } if (!g) return }
                                t.isHorizontal() ? ((u || d || p || h) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((d || h) && !a || (u || p) && a) && t.slideNext(), ((u || p) && !a || (d || h) && a) && t.slidePrev()) : ((u || d || f || m) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (d || m) && t.slideNext(), (u || f) && t.slidePrev()), t.emit("keyPress", s) } }, enable: function() { var e = this,
                                t = o();
                            e.keyboard.enabled || (E(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0) }, disable: function() { var e = this,
                                t = o();
                            e.keyboard.enabled && (E(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1) } },
                    It = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }, create: function() { ge(this, { keyboard: n({ enabled: !1 }, Dt) }) }, on: { init: function(e) { e.params.keyboard.enabled && e.keyboard.enable() }, destroy: function(e) { e.keyboard.enabled && e.keyboard.disable() } } };

                function Ot() { var e = o(),
                        t = "onwheel",
                        n = t in e; if (!n) { var i = e.createElement("div");
                        i.setAttribute(t, "return;"), n = "function" == typeof i[t] } return !n && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (n = e.implementation.hasFeature("Events.wheel", "3.0")), n } var Pt = { lastScrollTime: pe(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function() { return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : Ot() ? "wheel" : "mousewheel" }, normalize: function(e) { var t = 10,
                                n = 40,
                                i = 800,
                                a = 0,
                                r = 0,
                                o = 0,
                                s = 0; return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = r, r = 0), o = a * t, s = r * t, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (o = e.deltaX), e.shiftKey && !o && (o = s, s = 0), (o || s) && e.deltaMode && (1 === e.deltaMode ? (o *= n, s *= n) : (o *= i, s *= i)), o && !a && (a = o < 1 ? -1 : 1), s && !r && (r = s < 1 ? -1 : 1), { spinX: a, spinY: r, pixelX: o, pixelY: s } }, handleMouseEnter: function() { this.mouseEntered = !0 }, handleMouseLeave: function() { this.mouseEntered = !1 }, handle: function(e) { var t = e,
                                n = this,
                                i = n.params.mousewheel;
                            n.params.cssMode && t.preventDefault(); var a = n.$el; if ("container" !== n.params.mousewheel.eventsTarget && (a = E(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !a[0].contains(t.target) && !i.releaseOnEdges) return !0;
                            t.originalEvent && (t = t.originalEvent); var r = 0,
                                o = n.rtlTranslate ? -1 : 1,
                                s = Pt.normalize(t); if (i.forceToAxis)
                                if (n.isHorizontal()) { if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                                    r = -s.pixelX * o } else { if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                                    r = -s.pixelY }
                            else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * o : -s.pixelY; if (0 === r) return !0;
                            i.invert && (r = -r); var l = n.getTranslate() + r * i.sensitivity; if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), (!!n.params.loop || !(l === n.minTranslate() || l === n.maxTranslate())) && n.params.nested && t.stopPropagation(), n.params.freeMode) { var c = { time: pe(), delta: Math.abs(r), direction: Math.sign(r) },
                                    u = n.mousewheel.lastEventBeforeSnap,
                                    d = u && c.time < u.time + 500 && c.delta <= u.delta && c.direction === u.direction; if (!d) { n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix(); var p = n.getTranslate() + r * i.sensitivity,
                                        h = n.isBeginning,
                                        f = n.isEnd; if (p >= n.minTranslate() && (p = n.minTranslate()), p <= n.maxTranslate() && (p = n.maxTranslate()), n.setTransition(0), n.setTranslate(p), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!h && n.isBeginning || !f && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) { clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0; var m = n.mousewheel.recentWheelEvents;
                                        m.length >= 15 && m.shift(); var g = m.length ? m[m.length - 1] : void 0,
                                            v = m[0]; if (m.push(c), g && (c.delta > g.delta || c.direction !== g.direction)) m.splice(0);
                                        else if (m.length >= 15 && c.time - v.time < 500 && v.delta - c.delta >= 1 && c.delta <= 6) { var w = r > 0 ? .8 : .2;
                                            n.mousewheel.lastEventBeforeSnap = c, m.splice(0), n.mousewheel.timeout = de((function() { n.slideToClosest(n.params.speed, !0, void 0, w) }), 0) }
                                        n.mousewheel.timeout || (n.mousewheel.timeout = de((function() { var e = .5;
                                            n.mousewheel.lastEventBeforeSnap = c, m.splice(0), n.slideToClosest(n.params.speed, !0, void 0, e) }), 500)) } if (d || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), p === n.minTranslate() || p === n.maxTranslate()) return !0 } } else { var y = { time: pe(), delta: Math.abs(r), direction: Math.sign(r), raw: e },
                                    b = n.mousewheel.recentWheelEvents;
                                b.length >= 2 && b.shift(); var x = b.length ? b[b.length - 1] : void 0; if (b.push(y), x ? (y.direction !== x.direction || y.delta > x.delta || y.time > x.time + 150) && n.mousewheel.animateSlider(y) : n.mousewheel.animateSlider(y), n.mousewheel.releaseScroll(y)) return !0 } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 }, animateSlider: function(e) { var t = this,
                                n = l(); return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && pe() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(e.delta >= 6 && pe() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new n.Date).getTime(), 1)) }, releaseScroll: function(e) { var t = this,
                                n = t.params.mousewheel; if (e.direction < 0) { if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0 } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0; return !1 }, enable: function() { var e = this,
                                t = Pt.event(); if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0; if (!t) return !1; if (e.mousewheel.enabled) return !1; var n = e.$el; return "container" !== e.params.mousewheel.eventsTarget && (n = E(e.params.mousewheel.eventsTarget)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0 }, disable: function() { var e = this,
                                t = Pt.event(); if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0; if (!t) return !1; if (!e.mousewheel.enabled) return !1; var n = e.$el; return "container" !== e.params.mousewheel.eventsTarget && (n = E(e.params.mousewheel.eventsTarget)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0 } },
                    $t = { update: function() { var e = this,
                                t = e.params.navigation; if (!e.params.loop) { var n = e.navigation,
                                    i = n.$nextEl,
                                    a = n.$prevEl;
                                a && a.length > 0 && (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)) } }, onPrevClick: function(e) { var t = this;
                            e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev() }, onNextClick: function(e) { var t = this;
                            e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext() }, init: function() { var e, t, n = this,
                                i = n.params.navigation;
                            (i.nextEl || i.prevEl) && (i.nextEl && (e = E(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = E(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", n.navigation.onNextClick), t && t.length > 0 && t.on("click", n.navigation.onPrevClick), me(n.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] })) }, destroy: function() { var e = this,
                                t = e.navigation,
                                n = t.$nextEl,
                                i = t.$prevEl;
                            n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass)) } },
                    Lt = { update: function() { var e = this,
                                t = e.rtl,
                                n = e.params.pagination; if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var i, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                    r = e.pagination.$el,
                                    o = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length; if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (i -= a - 2 * e.loopedSlides), i > o - 1 && (i -= o), i < 0 && "bullets" !== e.params.paginationType && (i = o + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) { var s, l, c, u = e.pagination.bullets; if (n.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), s = i - e.pagination.dynamicBulletIndex, c = ((l = s + (Math.min(u.length, n.dynamicMainBullets) - 1)) + s) / 2), u.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), r.length > 1) u.each((function(e) { var t = E(e),
                                            a = t.index();
                                        a === i && t.addClass(n.bulletActiveClass), n.dynamicBullets && (a >= s && a <= l && t.addClass(n.bulletActiveClass + "-main"), a === s && t.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), a === l && t.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")) }));
                                    else { var d = u.eq(i),
                                            p = d.index(); if (d.addClass(n.bulletActiveClass), n.dynamicBullets) { for (var h = u.eq(s), f = u.eq(l), m = s; m <= l; m += 1) u.eq(m).addClass(n.bulletActiveClass + "-main"); if (e.params.loop)
                                                if (p >= u.length - n.dynamicMainBullets) { for (var g = n.dynamicMainBullets; g >= 0; g -= 1) u.eq(u.length - g).addClass(n.bulletActiveClass + "-main");
                                                    u.eq(u.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev") } else h.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), f.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                                            else h.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), f.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next") } } if (n.dynamicBullets) { var v = Math.min(u.length, n.dynamicMainBullets + 4),
                                            w = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                                            y = t ? "right" : "left";
                                        u.css(e.isHorizontal() ? y : "top", w + "px") } } if ("fraction" === n.type && (r.find("." + n.currentClass).text(n.formatFractionCurrent(i + 1)), r.find("." + n.totalClass).text(n.formatFractionTotal(o))), "progressbar" === n.type) { var b;
                                    b = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical"; var x = (i + 1) / o,
                                        C = 1,
                                        k = 1; "horizontal" === b ? C = x : k = x, r.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + C + ") scaleY(" + k + ")").transition(e.params.speed) } "custom" === n.type && n.renderCustom ? (r.html(n.renderCustom(e, i + 1, o)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass) } }, render: function() { var e = this,
                                t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                    i = e.pagination.$el,
                                    a = ""; if ("bullets" === t.type) { for (var r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < r; o += 1) t.renderBullet ? a += t.renderBullet.call(e, o, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                                    i.html(a), e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, ".")) } "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]) } }, init: function() { var e = this,
                                t = e.params.pagination; if (t.el) { var n = E(t.el);
                                0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", "." + t.bulletClass.replace(/ /g, "."), (function(t) { t.preventDefault(); var n = E(this).index() * e.params.slidesPerGroup;
                                    e.params.loop && (n += e.loopedSlides), e.slideTo(n) })), me(e.pagination, { $el: n, el: n[0] })) } }, destroy: function() { var e = this,
                                t = e.params.pagination; if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) { var n = e.pagination.$el;
                                n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass.replace(/ /g, ".")) } } },
                    zt = { setTranslate: function() { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar,
                                    n = e.rtlTranslate,
                                    i = e.progress,
                                    a = t.dragSize,
                                    r = t.trackSize,
                                    o = t.$dragEl,
                                    s = t.$el,
                                    l = e.params.scrollbar,
                                    c = a,
                                    u = (r - a) * i;
                                n ? (u = -u) > 0 ? (c = a - u, u = 0) : -u + a > r && (c = r + u) : u < 0 ? (c = a + u, u = 0) : u + a > r && (c = r - u), e.isHorizontal() ? (o.transform("translate3d(" + u + "px, 0, 0)"), o[0].style.width = c + "px") : (o.transform("translate3d(0px, " + u + "px, 0)"), o[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), s[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function() { s[0].style.opacity = 0, s.transition(400) }), 1e3)) } }, setTransition: function(e) { var t = this;
                            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e) }, updateSize: function() { var e = this; if (e.params.scrollbar.el && e.scrollbar.el) { var t = e.scrollbar,
                                    n = t.$dragEl,
                                    i = t.$el;
                                n[0].style.width = "", n[0].style.height = ""; var a, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                                    o = e.size / e.virtualSize,
                                    s = o * (r / e.size);
                                a = "auto" === e.params.scrollbar.dragSize ? r * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = a + "px" : n[0].style.height = a + "px", i[0].style.display = o >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), me(t, { trackSize: r, divider: o, moveDivider: s, dragSize: a }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass) } }, getPointerPosition: function(e) { return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY }, setDragPosition: function(e) { var t, n = this,
                                i = n.scrollbar,
                                a = n.rtlTranslate,
                                r = i.$el,
                                o = i.dragSize,
                                s = i.trackSize,
                                l = i.dragStartPos;
                            t = (i.getPointerPosition(e) - r.offset()[n.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (s - o), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t); var c = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                            n.updateProgress(c), n.setTranslate(c), n.updateActiveIndex(), n.updateSlidesClasses() }, onDragStart: function(e) { var t = this,
                                n = t.params.scrollbar,
                                i = t.scrollbar,
                                a = t.$wrapperEl,
                                r = i.$el,
                                o = i.$dragEl;
                            t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === o[0] || e.target === o ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), o.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), n.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e) }, onDragMove: function(e) { var t = this,
                                n = t.scrollbar,
                                i = t.$wrapperEl,
                                a = n.$el,
                                r = n.$dragEl;
                            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), a.transition(0), r.transition(0), t.emit("scrollbarDragMove", e)) }, onDragEnd: function(e) { var t = this,
                                n = t.params.scrollbar,
                                i = t.scrollbar,
                                a = t.$wrapperEl,
                                r = i.$el;
                            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = de((function() { r.css("opacity", 0), r.transition(400) }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest()) }, enableDraggable: function() { var e = this; if (e.params.scrollbar.el) { var t = o(),
                                    n = e.scrollbar,
                                    i = e.touchEventsTouch,
                                    a = e.touchEventsDesktop,
                                    r = e.params,
                                    s = e.support,
                                    l = n.$el[0],
                                    c = !(!s.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                                    u = !(!s.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                                s.touch ? (l.addEventListener(i.start, e.scrollbar.onDragStart, c), l.addEventListener(i.move, e.scrollbar.onDragMove, c), l.addEventListener(i.end, e.scrollbar.onDragEnd, u)) : (l.addEventListener(a.start, e.scrollbar.onDragStart, c), t.addEventListener(a.move, e.scrollbar.onDragMove, c), t.addEventListener(a.end, e.scrollbar.onDragEnd, u)) } }, disableDraggable: function() { var e = this; if (e.params.scrollbar.el) { var t = o(),
                                    n = e.scrollbar,
                                    i = e.touchEventsTouch,
                                    a = e.touchEventsDesktop,
                                    r = e.params,
                                    s = e.support,
                                    l = n.$el[0],
                                    c = !(!s.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                                    u = !(!s.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                                s.touch ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, c), l.removeEventListener(i.move, e.scrollbar.onDragMove, c), l.removeEventListener(i.end, e.scrollbar.onDragEnd, u)) : (l.removeEventListener(a.start, e.scrollbar.onDragStart, c), t.removeEventListener(a.move, e.scrollbar.onDragMove, c), t.removeEventListener(a.end, e.scrollbar.onDragEnd, u)) } }, init: function() { var e = this; if (e.params.scrollbar.el) { var t = e.scrollbar,
                                    n = e.$el,
                                    i = e.params.scrollbar,
                                    a = E(i.el);
                                e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === n.find(i.el).length && (a = n.find(i.el)); var r = a.find("." + e.params.scrollbar.dragClass);
                                0 === r.length && (r = E('<div class="' + e.params.scrollbar.dragClass + '"></div>'), a.append(r)), me(t, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable() } }, destroy: function() { this.scrollbar.disableDraggable() } },
                    _t = { setTransform: function(e, t) { var n = this,
                                i = n.rtl,
                                a = E(e),
                                r = i ? -1 : 1,
                                o = a.attr("data-swiper-parallax") || "0",
                                s = a.attr("data-swiper-parallax-x"),
                                l = a.attr("data-swiper-parallax-y"),
                                c = a.attr("data-swiper-parallax-scale"),
                                u = a.attr("data-swiper-parallax-opacity"); if (s || l ? (s = s || "0", l = l || "0") : n.isHorizontal() ? (s = o, l = "0") : (l = o, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != u) { var d = u - (u - 1) * (1 - Math.abs(t));
                                a[0].style.opacity = d } if (null == c) a.transform("translate3d(" + s + ", " + l + ", 0px)");
                            else { var p = c - (c - 1) * (1 - Math.abs(t));
                                a.transform("translate3d(" + s + ", " + l + ", 0px) scale(" + p + ")") } }, setTranslate: function() { var e = this,
                                t = e.$el,
                                n = e.slides,
                                i = e.progress,
                                a = e.snapGrid;
                            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) { e.parallax.setTransform(t, i) })), n.each((function(t, n) { var r = t.progress;
                                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(n / 2) - i * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), E(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) { e.parallax.setTransform(t, r) })) })) }, setTransition: function(e) { void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) { var n = E(t),
                                    i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                                0 === e && (i = 0), n.transition(i) })) } },
                    Nt = { getDistanceBetweenTouches: function(e) { if (e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX,
                                n = e.targetTouches[0].pageY,
                                i = e.targetTouches[1].pageX,
                                a = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2)) }, onGestureStart: function(e) { var t = this,
                                n = t.support,
                                i = t.params.zoom,
                                a = t.zoom,
                                r = a.gesture; if (a.fakeGestureTouched = !1, a.fakeGestureMoved = !1, !n.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                                a.fakeGestureTouched = !0, r.scaleStart = Nt.getDistanceBetweenTouches(e) }
                            r.$slideEl && r.$slideEl.length || (r.$slideEl = E(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0 }, onGestureChange: function(e) { var t = this,
                                n = t.support,
                                i = t.params.zoom,
                                a = t.zoom,
                                r = a.gesture; if (!n.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                a.fakeGestureMoved = !0, r.scaleMove = Nt.getDistanceBetweenTouches(e) }
                            r.$imageEl && 0 !== r.$imageEl.length ? (n.gestures ? a.scale = e.scale * a.currentScale : a.scale = r.scaleMove / r.scaleStart * a.currentScale, a.scale > r.maxRatio && (a.scale = r.maxRatio - 1 + Math.pow(a.scale - r.maxRatio + 1, .5)), a.scale < i.minRatio && (a.scale = i.minRatio + 1 - Math.pow(i.minRatio - a.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")")) : "gesturechange" === e.type && a.onGestureStart(e) }, onGestureEnd: function(e) { var t = this,
                                n = t.device,
                                i = t.support,
                                a = t.params.zoom,
                                r = t.zoom,
                                o = r.gesture; if (!i.gestures) { if (!r.fakeGestureTouched || !r.fakeGestureMoved) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
                                r.fakeGestureTouched = !1, r.fakeGestureMoved = !1 }
                            o.$imageEl && 0 !== o.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, o.maxRatio), a.minRatio), o.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (o.$slideEl = void 0)) }, onTouchStart: function(e) { var t = this,
                                n = t.device,
                                i = t.zoom,
                                a = i.gesture,
                                r = i.image;
                            a.$imageEl && 0 !== a.$imageEl.length && (r.isTouched || (n.android && e.cancelable && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function(e) { var t = this,
                                n = t.zoom,
                                i = n.gesture,
                                a = n.image,
                                r = n.velocity; if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, a.isTouched && i.$slideEl)) { a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, a.startX = he(i.$imageWrapEl[0], "x") || 0, a.startY = he(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY)); var o = a.width * n.scale,
                                    s = a.height * n.scale; if (!(o < i.slideWidth && s < i.slideHeight)) { if (a.minX = Math.min(i.slideWidth / 2 - o / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - s / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !n.isScaling) { if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void(a.isTouched = !1); if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void(a.isTouched = !1) }
                                    e.cancelable && e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)), a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = a.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = a.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (a.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (a.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(a.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(a.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = a.touchesCurrent.x, r.prevPositionY = a.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)") } } }, onTouchEnd: function() { var e = this.zoom,
                                t = e.gesture,
                                n = e.image,
                                i = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) { if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                                n.isTouched = !1, n.isMoved = !1; var a = 300,
                                    r = 300,
                                    o = i.x * a,
                                    s = n.currentX + o,
                                    l = i.y * r,
                                    c = n.currentY + l;
                                0 !== i.x && (a = Math.abs((s - n.currentX) / i.x)), 0 !== i.y && (r = Math.abs((c - n.currentY) / i.y)); var u = Math.max(a, r);
                                n.currentX = s, n.currentY = c; var d = n.width * e.scale,
                                    p = n.height * e.scale;
                                n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)") } }, onTransitionEnd: function() { var e = this,
                                t = e.zoom,
                                n = t.gesture;
                            n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0) }, toggle: function(e) { var t = this.zoom;
                            t.scale && 1 !== t.scale ? t.out() : t.in(e) }, in: function(e) { var t, n, i, a, r, o, s, l, c, u, d, p, h, f, m, g, v = this,
                                w = v.zoom,
                                y = v.params.zoom,
                                b = w.gesture,
                                x = w.image;
                            b.$slideEl || (v.params.virtual && v.params.virtual.enabled && v.virtual ? b.$slideEl = v.$wrapperEl.children("." + v.params.slideActiveClass) : b.$slideEl = v.slides.eq(v.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, n = x.touchesStart.y), w.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, w.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, i = b.$slideEl.offset().left + m / 2 - t, a = b.$slideEl.offset().top + g / 2 - n, s = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, c = s * w.scale, u = l * w.scale, h = -(d = Math.min(m / 2 - c / 2, 0)), f = -(p = Math.min(g / 2 - u / 2, 0)), (r = i * w.scale) < d && (r = d), r > h && (r = h), (o = a * w.scale) < p && (o = p), o > f && (o = f)) : (r = 0, o = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + o + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")")) }, out: function() { var e = this,
                                t = e.zoom,
                                n = e.params.zoom,
                                i = t.gesture;
                            i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0) }, toggleGestures: function(e) { var t = this,
                                n = t.zoom,
                                i = n.slideSelector,
                                a = n.passiveListener;
                            t.$wrapperEl[e]("gesturestart", i, n.onGestureStart, a), t.$wrapperEl[e]("gesturechange", i, n.onGestureChange, a), t.$wrapperEl[e]("gestureend", i, n.onGestureEnd, a) }, enableGestures: function() { this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on")) }, disableGestures: function() { this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off")) }, enable: function() { var e = this,
                                t = e.support,
                                n = e.zoom; if (!n.enabled) { n.enabled = !0; var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
                                    a = !t.passiveListener || { passive: !1, capture: !0 },
                                    r = "." + e.params.slideClass;
                                e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, n.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, n.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, r, n.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, n.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, n.onTouchMove, a) } }, disable: function() { var e = this,
                                t = e.zoom; if (t.enabled) { var n = e.support;
                                e.zoom.enabled = !1; var i = !("touchstart" !== e.touchEvents.start || !n.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 },
                                    a = !n.passiveListener || { passive: !1, capture: !0 },
                                    r = "." + e.params.slideClass;
                                n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, a) } } },
                    Ft = { loadInSlide: function(e, t) { void 0 === t && (t = !0); var n = this,
                                i = n.params.lazy; if (void 0 !== e && 0 !== n.slides.length) { var a = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                                    r = a.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");!a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || r.push(a[0]), 0 !== r.length && r.each((function(e) { var r = E(e);
                                    r.addClass(i.loadingClass); var o = r.attr("data-background"),
                                        s = r.attr("data-src"),
                                        l = r.attr("data-srcset"),
                                        c = r.attr("data-sizes"),
                                        u = r.parent("picture");
                                    n.loadImage(r[0], s || o, l, c, !1, (function() { if (null != n && n && (!n || n.params) && !n.destroyed) { if (o ? (r.css("background-image", 'url("' + o + '")'), r.removeAttr("data-background")) : (l && (r.attr("srcset", l), r.removeAttr("data-srcset")), c && (r.attr("sizes", c), r.removeAttr("data-sizes")), u.length && u.children("source").each((function(e) { var t = E(e);
                                                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset")) })), s && (r.attr("src", s), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), a.find("." + i.preloaderClass).remove(), n.params.loop && t) { var e = a.attr("data-swiper-slide-index"); if (a.hasClass(n.params.slideDuplicateClass)) { var d = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                                    n.lazy.loadInSlide(d.index(), !1) } else { var p = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    n.lazy.loadInSlide(p.index(), !1) } }
                                            n.emit("lazyImageReady", a[0], r[0]), n.params.autoHeight && n.updateAutoHeight() } })), n.emit("lazyImageLoad", a[0], r[0]) })) } }, load: function() { var e = this,
                                t = e.$wrapperEl,
                                n = e.params,
                                i = e.slides,
                                a = e.activeIndex,
                                r = e.virtual && n.virtual.enabled,
                                o = n.lazy,
                                s = n.slidesPerView;

                            function l(e) { if (r) { if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (i[e]) return !0; return !1 }

                            function c(e) { return r ? E(e).attr("data-swiper-slide-index") : E(e).index() } if ("auto" === s && (s = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each((function(t) { var n = r ? E(t).attr("data-swiper-slide-index") : E(t).index();
                                e.lazy.loadInSlide(n) }));
                            else if (s > 1)
                                for (var u = a; u < a + s; u += 1) l(u) && e.lazy.loadInSlide(u);
                            else e.lazy.loadInSlide(a); if (o.loadPrevNext)
                                if (s > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) { for (var d = o.loadPrevNextAmount, p = s, h = Math.min(a + p + Math.max(d, p), i.length), f = Math.max(a - Math.max(p, d), 0), m = a + s; m < h; m += 1) l(m) && e.lazy.loadInSlide(m); for (var g = f; g < a; g += 1) l(g) && e.lazy.loadInSlide(g) } else { var v = t.children("." + n.slideNextClass);
                                    v.length > 0 && e.lazy.loadInSlide(c(v)); var w = t.children("." + n.slidePrevClass);
                                    w.length > 0 && e.lazy.loadInSlide(c(w)) } }, checkInViewOnLoad: function() { var e = l(),
                                t = this; if (t && !t.destroyed) { var n = t.params.lazy.scrollingElement ? E(t.params.lazy.scrollingElement) : E(e),
                                    i = n[0] === e,
                                    a = i ? e.innerWidth : n[0].offsetWidth,
                                    r = i ? e.innerHeight : n[0].offsetHeight,
                                    o = t.$el.offset(),
                                    s = !1;
                                t.rtlTranslate && (o.left -= t.$el[0].scrollLeft); for (var c = [
                                        [o.left, o.top],
                                        [o.left + t.width, o.top],
                                        [o.left, o.top + t.height],
                                        [o.left + t.width, o.top + t.height]
                                    ], u = 0; u < c.length; u += 1) { var d = c[u]; if (d[0] >= 0 && d[0] <= a && d[1] >= 0 && d[1] <= r) { if (0 === d[0] && 0 === d[1]) continue;
                                        s = !0 } }
                                s ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, n.on("scroll", t.lazy.checkInViewOnLoad)) } } },
                    Ht = { LinearSpline: function(e, t) { var n, i, a, r, o, s = function(e, t) { for (i = -1, n = e.length; n - i > 1;) e[a = n + i >> 1] <= t ? i = a : n = a; return n }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) { return e ? (o = s(this.x, e), r = o - 1, (e - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0 }, this }, getInterpolateFunction: function(e) { var t = this;
                            t.controller.spline || (t.controller.spline = t.params.loop ? new Ht.LinearSpline(t.slidesGrid, e.slidesGrid) : new Ht.LinearSpline(t.snapGrid, e.snapGrid)) }, setTranslate: function(e, t) { var n, i, a = this,
                                r = a.controller.control,
                                o = a.constructor;

                            function s(e) { var t = a.rtlTranslate ? -a.translate : a.translate; "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), i = -a.controller.spline.interpolate(-t)), i && "container" !== a.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), i = (t - a.minTranslate()) * n + e.minTranslate()), a.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, a), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(r))
                                for (var l = 0; l < r.length; l += 1) r[l] !== t && r[l] instanceof o && s(r[l]);
                            else r instanceof o && t !== r && s(r) }, setTransition: function(e, t) { var n, i = this,
                                a = i.constructor,
                                r = i.controller.control;

                            function o(t) { t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && de((function() { t.updateAutoHeight() })), t.$wrapperEl.transitionEnd((function() { r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd()) }))) } if (Array.isArray(r))
                                for (n = 0; n < r.length; n += 1) r[n] !== t && r[n] instanceof a && o(r[n]);
                            else r instanceof a && t !== r && o(r) } },
                    jt = { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { var e = this;
                            ge(e, { controller: n({ control: e.params.controller.control }, Ht) }) }, on: { update: function(e) { e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, resize: function(e) { e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, observerUpdate: function(e) { e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline) }, setTranslate: function(e, t, n) { e.controller.control && e.controller.setTranslate(t, n) }, setTransition: function(e, t, n) { e.controller.control && e.controller.setTransition(t, n) } } },
                    Rt = { getRandomNumber: function(e) { void 0 === e && (e = 16); var t = function() { return Math.round(16 * Math.random()).toString(16) }; return "x".repeat(e).replace(/x/g, t) }, makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e }, makeElNotFocusable: function(e) { return e.attr("tabIndex", "-1"), e }, addElRole: function(e, t) { return e.attr("role", t), e }, addElRoleDescription: function(e, t) { return e.attr("aria-role-description", t), e }, addElControls: function(e, t) { return e.attr("aria-controls", t), e }, addElLabel: function(e, t) { return e.attr("aria-label", t), e }, addElId: function(e, t) { return e.attr("id", t), e }, addElLive: function(e, t) { return e.attr("aria-live", t), e }, disableEl: function(e) { return e.attr("aria-disabled", !0), e }, enableEl: function(e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function(e) { var t = this,
                                n = t.params.a11y; if (13 === e.keyCode) { var i = E(e.target);
                                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click() } }, notify: function(e) { var t = this.a11y.liveRegion;
                            0 !== t.length && (t.html(""), t.html(e)) }, updateNavigation: function() { var e = this; if (!e.params.loop && e.navigation) { var t = e.navigation,
                                    n = t.$nextEl,
                                    i = t.$prevEl;
                                i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), n && n.length > 0 && (e.isEnd ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n))) } }, updatePagination: function() { var e = this,
                                t = e.params.a11y;
                            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(n) { var i = E(n);
                                e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1))) })) }, init: function() { var e = this,
                                t = e.params.a11y;
                            e.$el.append(e.a11y.liveRegion); var n = e.$el;
                            t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(n, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(n, t.containerMessage); var i, a, r, o = e.$wrapperEl,
                                s = o.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
                            e.a11y.addElId(o, s), i = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(o, i), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(E(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(E(e.slides), "group"), e.slides.each((function(t) { var n = E(t);
                                e.a11y.addElLabel(n, n.index() + 1 + " / " + e.slides.length) })), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, s)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, s)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterKey) }, destroy: function() { var e, t, n = this;
                            n.a11y.liveRegion && n.a11y.liveRegion.length > 0 && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass.replace(/ /g, "."), n.a11y.onEnterKey) } },
                    Bt = { init: function() { var e = this,
                                t = l(); if (e.params.history) { if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0); var n = e.history;
                                n.initialized = !0, n.paths = Bt.getPathValues(e.params.url), (n.paths.key || n.paths.value) && (n.scrollToSlide(0, n.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState)) } }, destroy: function() { var e = this,
                                t = l();
                            e.params.history.replaceState || t.removeEventListener("popstate", e.history.setHistoryPopState) }, setHistoryPopState: function() { var e = this;
                            e.history.paths = Bt.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1) }, getPathValues: function(e) { var t = l(),
                                n = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function(e) { return "" !== e })),
                                i = n.length; return { key: n[i - 2], value: n[i - 1] } }, setHistory: function(e, t) { var n = this,
                                i = l(); if (n.history.initialized && n.params.history.enabled) { var a;
                                a = n.params.url ? new URL(n.params.url) : i.location; var r = n.slides.eq(t),
                                    o = Bt.slugify(r.attr("data-history"));
                                a.pathname.includes(e) || (o = e + "/" + o); var s = i.history.state;
                                s && s.value === o || (n.params.history.replaceState ? i.history.replaceState({ value: o }, null, o) : i.history.pushState({ value: o }, null, o)) } }, slugify: function(e) { return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function(e, t, n) { var i = this; if (t)
                                for (var a = 0, r = i.slides.length; a < r; a += 1) { var o = i.slides.eq(a); if (Bt.slugify(o.attr("data-history")) === t && !o.hasClass(i.params.slideDuplicateClass)) { var s = o.index();
                                        i.slideTo(s, e, n) } } else i.slideTo(0, e, n) } },
                    Ut = { onHashCange: function() { var e = this,
                                t = o();
                            e.emit("hashChange"); var n = t.location.hash.replace("#", ""); if (n !== e.slides.eq(e.activeIndex).attr("data-hash")) { var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index(); if (void 0 === i) return;
                                e.slideTo(i) } }, setHash: function() { var e = this,
                                t = l(),
                                n = o(); if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                                if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || 0), e.emit("hashSet");
                                else { var i = e.slides.eq(e.activeIndex),
                                        a = i.attr("data-hash") || i.attr("data-history");
                                    n.location.hash = a || "", e.emit("hashSet") } }, init: function() { var e = this,
                                t = o(),
                                n = l(); if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) { e.hashNavigation.initialized = !0; var i = t.location.hash.replace("#", ""); if (i)
                                    for (var a = 0, r = 0, s = e.slides.length; r < s; r += 1) { var c = e.slides.eq(r); if ((c.attr("data-hash") || c.attr("data-history")) === i && !c.hasClass(e.params.slideDuplicateClass)) { var u = c.index();
                                            e.slideTo(u, a, e.params.runCallbacksOnInit, !0) } }
                                e.params.hashNavigation.watchState && E(n).on("hashchange", e.hashNavigation.onHashCange) } }, destroy: function() { var e = this,
                                t = l();
                            e.params.hashNavigation.watchState && E(t).off("hashchange", e.hashNavigation.onHashCange) } },
                    qt = { run: function() { var e = this,
                                t = e.slides.eq(e.activeIndex),
                                n = e.params.autoplay.delay;
                            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = de((function() { var t;
                                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run() }), n) }, start: function() { var e = this; return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0) }, stop: function() { var e = this; return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0) }, pause: function(e) { var t = this;
                            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run()))) }, onVisibilityChange: function() { var e = this,
                                t = o(); "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1) }, onTransitionEnd: function(e) { var t = this;
                            t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } },
                    Wt = { setTranslate: function() { for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) { var i = e.slides.eq(n),
                                    a = -i[0].swiperSlideOffset;
                                e.params.virtualTranslate || (a -= e.translate); var r = 0;
                                e.isHorizontal() || (r = a, a = 0); var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                                i.css({ opacity: o }).transform("translate3d(" + a + "px, " + r + "px, 0px)") } }, setTransition: function(e) { var t = this,
                                n = t.slides,
                                i = t.$wrapperEl; if (n.transition(e), t.params.virtualTranslate && 0 !== e) { var a = !1;
                                n.transitionEnd((function() { if (!a && t && !t.destroyed) { a = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n]) } })) } } },
                    Yt = { setTranslate: function() { var e, t = this,
                                n = t.$el,
                                i = t.$wrapperEl,
                                a = t.slides,
                                r = t.width,
                                o = t.height,
                                s = t.rtlTranslate,
                                l = t.size,
                                c = t.browser,
                                u = t.params.cubeEffect,
                                d = t.isHorizontal(),
                                p = t.virtual && t.params.virtual.enabled,
                                h = 0;
                            u.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = E('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = E('<div class="swiper-cube-shadow"></div>'), n.append(e))); for (var f = 0; f < a.length; f += 1) { var m = a.eq(f),
                                    g = f;
                                p && (g = parseInt(m.attr("data-swiper-slide-index"), 10)); var v = 90 * g,
                                    w = Math.floor(v / 360);
                                s && (v = -v, w = Math.floor(-v / 360)); var y = Math.max(Math.min(m[0].progress, 1), -1),
                                    b = 0,
                                    x = 0,
                                    C = 0;
                                g % 4 == 0 ? (b = 4 * -w * l, C = 0) : (g - 1) % 4 == 0 ? (b = 0, C = 4 * -w * l) : (g - 2) % 4 == 0 ? (b = l + 4 * w * l, C = l) : (g - 3) % 4 == 0 && (b = -l, C = 3 * l + 4 * l * w), s && (b = -b), d || (x = b, b = 0); var k = "rotateX(" + (d ? 0 : -v) + "deg) rotateY(" + (d ? v : 0) + "deg) translate3d(" + b + "px, " + x + "px, " + C + "px)"; if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, s && (h = 90 * -g - 90 * y)), m.transform(k), u.slideShadows) { var S = d ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                        T = d ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                                    0 === S.length && (S = E('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), m.append(S)), 0 === T.length && (T = E('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), m.append(T)), S.length && (S[0].style.opacity = Math.max(-y, 0)), T.length && (T[0].style.opacity = Math.max(y, 0)) } } if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), u.shadow)
                                if (d) e.transform("translate3d(0px, " + (r / 2 + u.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                                else { var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                        A = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                                        D = u.shadowScale,
                                        I = u.shadowScale / A,
                                        O = u.shadowOffset;
                                    e.transform("scale3d(" + D + ", 1, " + I + ") translate3d(0px, " + (o / 2 + O) + "px, " + -o / 2 / I + "px) rotateX(-90deg)") }
                            var P = c.isSafari || c.isWebView ? -l / 2 : 0;
                            i.transform("translate3d(0px,0," + P + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)") }, setTransition: function(e) { var t = this,
                                n = t.$el;
                            t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e) } },
                    Vt = { setTranslate: function() { for (var e = this, t = e.slides, n = e.rtlTranslate, i = 0; i < t.length; i += 1) { var a = t.eq(i),
                                    r = a[0].progress;
                                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1)); var o = -180 * r,
                                    s = 0,
                                    l = -a[0].swiperSlideOffset,
                                    c = 0; if (e.isHorizontal() ? n && (o = -o) : (c = l, l = 0, s = -o, o = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) { var u = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                        d = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                    0 === u.length && (u = E('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), a.append(u)), 0 === d.length && (d = E('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(d)), u.length && (u[0].style.opacity = Math.max(-r, 0)), d.length && (d[0].style.opacity = Math.max(r, 0)) }
                                a.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)") } }, setTransition: function(e) { var t = this,
                                n = t.slides,
                                i = t.activeIndex,
                                a = t.$wrapperEl; if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) { var r = !1;
                                n.eq(i).transitionEnd((function() { if (!r && t && !t.destroyed) { r = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) a.trigger(e[n]) } })) } } },
                    Gt = { setTranslate: function() { for (var e = this, t = e.width, n = e.height, i = e.slides, a = e.slidesSizesGrid, r = e.params.coverflowEffect, o = e.isHorizontal(), s = e.translate, l = o ? t / 2 - s : n / 2 - s, c = o ? r.rotate : -r.rotate, u = r.depth, d = 0, p = i.length; d < p; d += 1) { var h = i.eq(d),
                                    f = a[d],
                                    m = (l - h[0].swiperSlideOffset - f / 2) / f * r.modifier,
                                    g = o ? c * m : 0,
                                    v = o ? 0 : c * m,
                                    w = -u * Math.abs(m),
                                    y = r.stretch; "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * f); var b = o ? 0 : y * m,
                                    x = o ? y * m : 0,
                                    C = 1 - (1 - r.scale) * Math.abs(m);
                                Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0), Math.abs(C) < .001 && (C = 0); var k = "translate3d(" + x + "px," + b + "px," + w + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg) scale(" + C + ")"; if (h.transform(k), h[0].style.zIndex = 1 - Math.abs(Math.round(m)), r.slideShadows) { var S = o ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                        T = o ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                    0 === S.length && (S = E('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), h.append(S)), 0 === T.length && (T = E('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), h.append(T)), S.length && (S[0].style.opacity = m > 0 ? m : 0), T.length && (T[0].style.opacity = -m > 0 ? -m : 0) } } }, setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } },
                    Xt = { init: function() { var e = this,
                                t = e.params.thumbs; if (e.thumbs.initialized) return !1;
                            e.thumbs.initialized = !0; var n = e.constructor; return t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, me(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), me(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : fe(t.swiper) && (e.thumbs.swiper = new n(me({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0 }, onThumbClick: function() { var e = this,
                                t = e.thumbs.swiper; if (t) { var n = t.clickedIndex,
                                    i = t.clickedSlide; if (!(i && E(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) { var a; if (a = t.params.loop ? parseInt(E(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) { var r = e.activeIndex;
                                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex); var o = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                            s = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                                        a = void 0 === o ? s : void 0 === s ? o : s - r < r - o ? s : o }
                                    e.slideTo(a) } } }, update: function(e) { var t = this,
                                n = t.thumbs.swiper; if (n) { var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                                    a = t.params.thumbs.autoScrollOffset,
                                    r = a && !n.params.loop; if (t.realIndex !== n.realIndex || r) { var o, s, l = n.activeIndex; if (n.params.loop) { n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex); var c = n.slides.eq(l).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                            u = n.slides.eq(l).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                        o = void 0 === c ? u : void 0 === u ? c : u - l == l - c ? l : u - l < l - c ? u : c, s = t.activeIndex > t.previousIndex ? "next" : "prev" } else s = (o = t.realIndex) > t.previousIndex ? "next" : "prev";
                                    r && (o += "next" === s ? a : -1 * a), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(o) < 0 && (n.params.centeredSlides ? o = o > l ? o - Math.floor(i / 2) + 1 : o + Math.floor(i / 2) - 1 : o > l && (o = o - i + 1), n.slideTo(o, e ? 0 : void 0)) } var d = 1,
                                    p = t.params.thumbs.slideThumbActiveClass; if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (d = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), n.slides.removeClass(p), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                                    for (var h = 0; h < d; h += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(p);
                                else
                                    for (var f = 0; f < d; f += 1) n.slides.eq(t.realIndex + f).addClass(p) } } },
                    Qt = [At, It, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }, create: function() { ge(this, { mousewheel: { enabled: !1, lastScrollTime: pe(), lastEventBeforeSnap: void 0, recentWheelEvents: [], enable: Pt.enable, disable: Pt.disable, handle: Pt.handle, handleMouseEnter: Pt.handleMouseEnter, handleMouseLeave: Pt.handleMouseLeave, animateSlider: Pt.animateSlider, releaseScroll: Pt.releaseScroll } }) }, on: { init: function(e) {!e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable() }, destroy: function(e) { e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable() } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function() { ge(this, { navigation: n({}, $t) }) }, on: { init: function(e) { e.navigation.init(), e.navigation.update() }, toEdge: function(e) { e.navigation.update() }, fromEdge: function(e) { e.navigation.update() }, destroy: function(e) { e.navigation.destroy() }, click: function(e, t) { var n, i = e.navigation,
                                    a = i.$nextEl,
                                    r = i.$prevEl;!e.params.navigation.hideOnClick || E(t.target).is(r) || E(t.target).is(a) || (a ? n = a.hasClass(e.params.navigation.hiddenClass) : r && (n = r.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)) } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(e) { return e }, formatFractionTotal: function(e) { return e }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { ge(this, { pagination: n({ dynamicBulletIndex: 0 }, Lt) }) }, on: { init: function(e) { e.pagination.init(), e.pagination.render(), e.pagination.update() }, activeIndexChange: function(e) {
                                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update() }, snapIndexChange: function(e) { e.params.loop || e.pagination.update() }, slidesLengthChange: function(e) { e.params.loop && (e.pagination.render(), e.pagination.update()) }, snapGridLengthChange: function(e) { e.params.loop || (e.pagination.render(), e.pagination.update()) }, destroy: function(e) { e.pagination.destroy() }, click: function(e, t) { e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !E(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { ge(this, { scrollbar: n({ isTouched: !1, timeout: null, dragTimeout: null }, zt) }) }, on: { init: function(e) { e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate() }, update: function(e) { e.scrollbar.updateSize() }, resize: function(e) { e.scrollbar.updateSize() }, observerUpdate: function(e) { e.scrollbar.updateSize() }, setTranslate: function(e) { e.scrollbar.setTranslate() }, setTransition: function(e, t) { e.scrollbar.setTransition(t) }, destroy: function(e) { e.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { ge(this, { parallax: n({}, _t) }) }, on: { beforeInit: function(e) { e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0) }, init: function(e) { e.params.parallax.enabled && e.parallax.setTranslate() }, setTranslate: function(e) { e.params.parallax.enabled && e.parallax.setTranslate() }, setTransition: function(e, t) { e.params.parallax.enabled && e.parallax.setTransition(t) } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function() { var e = this;
                            ge(e, { zoom: n({ enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }, Nt) }); var t = 1;
                            Object.defineProperty(e.zoom, "scale", { get: function() { return t }, set: function(n) { if (t !== n) { var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                            a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                        e.emit("zoomChange", n, i, a) }
                                    t = n } }) }, on: { init: function(e) { e.params.zoom.enabled && e.zoom.enable() }, destroy: function(e) { e.zoom.disable() }, touchStart: function(e, t) { e.zoom.enabled && e.zoom.onTouchStart(t) }, touchEnd: function(e, t) { e.zoom.enabled && e.zoom.onTouchEnd(t) }, doubleTap: function(e, t) { e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t) }, transitionEnd: function(e) { e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd() }, slideChange: function(e) { e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd() } } }, { name: "lazy", params: { lazy: { checkInView: !1, enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { ge(this, { lazy: n({ initialImageLoaded: !1 }, Ft) }) }, on: { beforeInit: function(e) { e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1) }, init: function(e) { e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load()) }, scroll: function(e) { e.params.freeMode && !e.params.freeModeSticky && e.lazy.load() }, resize: function(e) { e.params.lazy.enabled && e.lazy.load() }, scrollbarDragMove: function(e) { e.params.lazy.enabled && e.lazy.load() }, transitionStart: function(e) { e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load() }, transitionEnd: function(e) { e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load() }, slideChange: function(e) { e.params.lazy.enabled && e.params.cssMode && e.lazy.load() } } }, jt, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null } }, create: function() { var e = this;
                            ge(e, { a11y: n({}, Rt, { liveRegion: E('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) }) }, on: { afterInit: function(e) { e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation()) }, toEdge: function(e) { e.params.a11y.enabled && e.a11y.updateNavigation() }, fromEdge: function(e) { e.params.a11y.enabled && e.a11y.updateNavigation() }, paginationUpdate: function(e) { e.params.a11y.enabled && e.a11y.updatePagination() }, destroy: function(e) { e.params.a11y.enabled && e.a11y.destroy() } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { ge(this, { history: n({}, Bt) }) }, on: { init: function(e) { e.params.history.enabled && e.history.init() }, destroy: function(e) { e.params.history.enabled && e.history.destroy() }, transitionEnd: function(e) { e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex) }, slideChange: function(e) { e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { ge(this, { hashNavigation: n({ initialized: !1 }, Ut) }) }, on: { init: function(e) { e.params.hashNavigation.enabled && e.hashNavigation.init() }, destroy: function(e) { e.params.hashNavigation.enabled && e.hashNavigation.destroy() }, transitionEnd: function(e) { e.hashNavigation.initialized && e.hashNavigation.setHash() }, slideChange: function(e) { e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash() } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function() { ge(this, { autoplay: n({}, qt, { running: !1, paused: !1 }) }) }, on: { init: function(e) { e.params.autoplay.enabled && (e.autoplay.start(), o().addEventListener("visibilitychange", e.autoplay.onVisibilityChange)) }, beforeTransitionStart: function(e, t, n) { e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop()) }, sliderFirstMove: function(e) { e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause()) }, touchEnd: function(e) { e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run() }, destroy: function(e) { e.autoplay.running && e.autoplay.stop(), o().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange) } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function() { ge(this, { fadeEffect: n({}, Wt) }) }, on: { beforeInit: function(e) { if ("fade" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "fade"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                    me(e.params, t), me(e.originalParams, t) } }, setTranslate: function(e) { "fade" === e.params.effect && e.fadeEffect.setTranslate() }, setTransition: function(e, t) { "fade" === e.params.effect && e.fadeEffect.setTransition(t) } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function() { ge(this, { cubeEffect: n({}, Yt) }) }, on: { beforeInit: function(e) { if ("cube" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                                    me(e.params, t), me(e.originalParams, t) } }, setTranslate: function(e) { "cube" === e.params.effect && e.cubeEffect.setTranslate() }, setTransition: function(e, t) { "cube" === e.params.effect && e.cubeEffect.setTransition(t) } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function() { ge(this, { flipEffect: n({}, Vt) }) }, on: { beforeInit: function(e) { if ("flip" === e.params.effect) { e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d"); var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                    me(e.params, t), me(e.originalParams, t) } }, setTranslate: function(e) { "flip" === e.params.effect && e.flipEffect.setTranslate() }, setTransition: function(e, t) { "flip" === e.params.effect && e.flipEffect.setTransition(t) } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } }, create: function() { ge(this, { coverflowEffect: n({}, Gt) }) }, on: { beforeInit: function(e) { "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0) }, setTranslate: function(e) { "coverflow" === e.params.effect && e.coverflowEffect.setTranslate() }, setTransition: function(e, t) { "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t) } } }, { name: "thumbs", params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function() { ge(this, { thumbs: n({ swiper: null, initialized: !1 }, Xt) }) }, on: { beforeInit: function(e) { var t = e.params.thumbs;
                                t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0)) }, slideChange: function(e) { e.thumbs.swiper && e.thumbs.update() }, update: function(e) { e.thumbs.swiper && e.thumbs.update() }, resize: function(e) { e.thumbs.swiper && e.thumbs.update() }, observerUpdate: function(e) { e.thumbs.swiper && e.thumbs.update() }, setTransition: function(e, t) { var n = e.thumbs.swiper;
                                n && n.setTransition(t) }, beforeDestroy: function(e) { var t = e.thumbs.swiper;
                                t && e.thumbs.swiperCreated && t && t.destroy() } } }]; return Tt.use(Qt), Tt }() } },
    0, [
        [1459, 576, 902],
        [8068, 576, 902]
    ]
]);