/**
 * Minified by jsDelivr using Terser v5.14.1.
 * Original file: /npm/prismjs@1.29.0/prism.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const _self = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self : {}; const Prism = (function (e) { const t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i; let a = 0; const n = {}; var r = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e (t) { return t instanceof s ? new s(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' '); }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1); }, objId: function (e) { return e.__id || Object.defineProperty(e, '__id', { value: ++a }), e.__id; }, clone: function e (t, a) { let n, s; switch (a = a || {}, r.util.type(t)) { case 'Object':if (s = r.util.objId(t), a[s]) return a[s]; for (const i in n = {}, a[s] = n, t)t.hasOwnProperty(i) && (n[i] = e(t[i], a)); return n; case 'Array':return s = r.util.objId(t), a[s] ? a[s] : (n = [], a[s] = n, t.forEach(function (t, r) { n[r] = e(t, a); }), n); default:return t; } }, getLanguage: function (e) { for (;e;) { const a = t.exec(e.className); if (a) return a[1].toLowerCase(); e = e.parentElement; } return 'none'; }, setLanguage: function (e, a) { e.className = e.className.replace(RegExp(t, 'gi'), ''), e.classList.add('language-' + a); }, currentScript: function () { if (typeof document === 'undefined') return null; if ('currentScript' in document) return document.currentScript; try { throw new Error(); } catch (n) { const e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack) || [])[1]; if (e) { const t = document.getElementsByTagName('script'); for (const a in t) if (t[a].src == e) return t[a]; } return null; } }, isActive: function (e, t, a) { for (let n = 'no-' + t; e;) { const r = e.classList; if (r.contains(t)) return !0; if (r.contains(n)) return !1; e = e.parentElement; } return !!a; } }, languages: { plain: n, plaintext: n, text: n, txt: n, extend: function (e, t) { const a = r.util.clone(r.languages[e]); for (const n in t)a[n] = t[n]; return a; }, insertBefore: function (e, t, a, n) { const s = (n = n || r.languages)[e]; const i = {}; for (const o in s) if (s.hasOwnProperty(o)) { if (o == t) for (const l in a)a.hasOwnProperty(l) && (i[l] = a[l]); a.hasOwnProperty(o) || (i[o] = s[o]); } const u = n[e]; return n[e] = i, r.languages.DFS(r.languages, function (t, a) { a === u && t != e && (this[t] = i); }), i; }, DFS: function e (t, a, n, s) { s = s || {}; const i = r.util.objId; for (const o in t) if (t.hasOwnProperty(o)) { a.call(t, o, t[o], n || o); const l = t[o]; const u = r.util.type(l); u !== 'Object' || s[i(l)] ? u !== 'Array' || s[i(l)] || (s[i(l)] = !0, e(l, a, o, s)) : (s[i(l)] = !0, e(l, a, null, s)); } } }, plugins: {}, highlightAll: function (e, t) { r.highlightAllUnder(document, e, t); }, highlightAllUnder: function (e, t, a) { const n = { callback: a, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; r.hooks.run('before-highlightall', n), n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)), r.hooks.run('before-all-elements-highlight', n); for (var s, i = 0; s = n.elements[i++];)r.highlightElement(s, !0 === t, n.callback); }, highlightElement: function (t, a, n) { const s = r.util.getLanguage(t); const i = r.languages[s]; r.util.setLanguage(t, s); let o = t.parentElement; o && o.nodeName.toLowerCase() === 'pre' && r.util.setLanguage(o, s); const l = { element: t, language: s, grammar: i, code: t.textContent }; function u (e) { l.highlightedCode = e, r.hooks.run('before-insert', l), l.element.innerHTML = l.highlightedCode, r.hooks.run('after-highlight', l), r.hooks.run('complete', l), n && n.call(l.element); } if (r.hooks.run('before-sanity-check', l), (o = l.element.parentElement) && o.nodeName.toLowerCase() === 'pre' && !o.hasAttribute('tabindex') && o.setAttribute('tabindex', '0'), !l.code) return r.hooks.run('complete', l), void (n && n.call(l.element)); if (r.hooks.run('before-highlight', l), l.grammar) if (a && e.Worker) { const g = new Worker(r.filename); g.onmessage = function (e) { u(e.data); }, g.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })); } else u(r.highlight(l.code, l.grammar, l.language)); else u(r.util.encode(l.code)); }, highlight: function (e, t, a) { const n = { code: e, grammar: t, language: a }; if (r.hooks.run('before-tokenize', n), !n.grammar) throw new Error('The language "' + n.language + '" has no grammar.'); return n.tokens = r.tokenize(n.code, n.grammar), r.hooks.run('after-tokenize', n), s.stringify(r.util.encode(n.tokens), n.language); }, tokenize: function (e, t) { const a = t.rest; if (a) { for (const n in a)t[n] = a[n]; delete t.rest; } const r = new l(); return u(r, r.head, e), o(e, r, t, r.head, 0), (function (e) { const t = []; let a = e.head.next; for (;a !== e.tail;)t.push(a.value), a = a.next; return t; }(r)); }, hooks: { all: {}, add: function (e, t) { const a = r.hooks.all; a[e] = a[e] || [], a[e].push(t); }, run: function (e, t) { const a = r.hooks.all[e]; if (a && a.length) for (var n, s = 0; n = a[s++];)n(t); } }, Token: s }; function s (e, t, a, n) { this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || '').length; } function i (e, t, a, n) { e.lastIndex = t; const r = e.exec(a); if (r && n && r[1]) { const s = r[1].length; r.index += s, r[0] = r[0].slice(s); } return r; } function o (e, t, a, n, l, c) { for (const d in a) if (a.hasOwnProperty(d) && a[d]) { let p = a[d]; p = Array.isArray(p) ? p : [p]; for (let m = 0; m < p.length; ++m) { if (c && c.cause == d + ',' + m) return; const h = p[m]; const f = h.inside; const v = !!h.lookbehind; const b = !!h.greedy; const y = h.alias; if (b && !h.pattern.global) { const F = h.pattern.toString().match(/[imsuy]*$/)[0]; h.pattern = RegExp(h.pattern.source, F + 'g'); } for (let x = h.pattern || h, k = n.next, w = l; k !== t.tail && !(c && w >= c.reach); w += k.value.length, k = k.next) { let A = k.value; if (t.length > e.length) return; if (!(A instanceof s)) { var P; let $ = 1; if (b) { if (!(P = i(x, w, e, v)) || P.index >= e.length) break; var S = P.index; const E = P.index + P[0].length; let _ = w; for (_ += k.value.length; S >= _;)_ += (k = k.next).value.length; if (w = _ -= k.value.length, k.value instanceof s) continue; for (let j = k; j !== t.tail && (_ < E || typeof j.value === 'string'); j = j.next)$++, _ += j.value.length; $--, A = e.slice(w, _), P.index -= w; } else if (!(P = i(x, 0, A, v))) continue; S = P.index; const C = P[0]; const L = A.slice(0, S); const z = A.slice(S + C.length); const O = w + A.length; c && O > c.reach && (c.reach = O); let T = k.prev; if (L && (T = u(t, T, L), w += L.length), g(t, T, $), k = u(t, T, new s(d, f ? r.tokenize(C, f) : C, y, C)), z && u(t, k, z), $ > 1) { const M = { cause: d + ',' + m, reach: O }; o(e, t, a, k.prev, w, M), c && M.reach > c.reach && (c.reach = M.reach); } } } } } } function l () { const e = { value: null, prev: null, next: null }; const t = { value: null, prev: e, next: null }; e.next = t, this.head = e, this.tail = t, this.length = 0; } function u (e, t, a) { const n = t.next; const r = { value: a, prev: t, next: n }; return t.next = r, n.prev = r, e.length++, r; } function g (e, t, a) { for (var n = t.next, r = 0; r < a && n !== e.tail; r++)n = n.next; t.next = n, n.prev = t, e.length -= r; } if (e.Prism = r, s.stringify = function e (t, a) { if (typeof t === 'string') return t; if (Array.isArray(t)) { let n = ''; return t.forEach(function (t) { n += e(t, a); }), n; } const s = { type: t.type, content: e(t.content, a), tag: 'span', classes: ['token', t.type], attributes: {}, language: a }; const i = t.alias; i && (Array.isArray(i) ? Array.prototype.push.apply(s.classes, i) : s.classes.push(i)), r.hooks.run('wrap', s); let o = ''; for (const l in s.attributes)o += ' ' + l + '="' + (s.attributes[l] || '').replace(/"/g, '&quot;') + '"'; return '<' + s.tag + ' class="' + s.classes.join(' ') + '"' + o + '>' + s.content + '</' + s.tag + '>'; }, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener('message', function (t) { const a = JSON.parse(t.data); const n = a.language; const s = a.code; const i = a.immediateClose; e.postMessage(r.highlight(s, r.languages[n], n)), i && e.close(); }, !1), r) : r; const c = r.util.currentScript(); function d () { r.manual || r.highlightAll(); } if (c && (r.filename = c.src, c.hasAttribute('data-manual') && (r.manual = !0)), !r.manual) { const p = document.readyState; p === 'loading' || p === 'interactive' && c && c.defer ? document.addEventListener('DOMContentLoaded', d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16); } return r; }(_self));
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */typeof module !== 'undefined' && module.exports && (module.exports = Prism), typeof global !== 'undefined' && (global.Prism = Prism), Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { 'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, 'doctype-tag': /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, 'special-attr': [], 'attr-value': { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, 'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside['internal-subset'].inside = Prism.languages.markup, Prism.hooks.add('wrap', function (e) { e.type === 'entity' && (e.attributes.title = e.content.replace(/&amp;/, '&')); }), Object.defineProperty(Prism.languages.markup.tag, 'addInlined', { value: function (e, t) { const a = {}; a['language-' + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[t] }, a.cdata = /^<!\[CDATA\[|\]\]>$/i; const n = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a } }; n['language-' + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] }; const r = {}; r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return e; }), 'i'), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore('markup', 'cdata', r); } }), Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', { value: function (e, t) { Prism.languages.markup.tag.inside['special-attr'].push({ pattern: RegExp(/(^|["'\s])/.source + '(?:' + e + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'), lookbehind: !0, inside: { 'attr-name': /^[^\s=]+/, 'attr-value': { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, 'language-' + t], inside: Prism.languages[t] }, punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] } } } }); } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend('markup', {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, (function (e) { const t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/; e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + t.source + ')*?' + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, 'selector-function-argument': { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: 'selector' }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp('\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' } } }, selector: { pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ')*(?=\\s*\\{)'), lookbehind: !0 }, string: { pattern: t, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css; const a = e.languages.markup; a && (a.tag.addInlined('style', 'css'), a.tag.addAttribute('style', 'css')); }(Prism)), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend('clike', { 'class-name': [Prism.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + '(?:' + /NaN|Infinity/.source + '|' + /0[bB][01]+(?:_[01]+)*n?/.source + '|' + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + /\d+(?:_\d+)*n/.source + '|' + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ')' + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore('javascript', 'keyword', { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { 'regex-source': { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: 'language-regex', inside: Prism.languages.regex }, 'regex-delimiter': /^\/|\/$/, 'regex-flags': /^[a-z]+$/ } }, 'function-variable': { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: 'function' }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore('javascript', 'string', { hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' }, 'template-string': { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { 'template-punctuation': { pattern: /^`|`$/, alias: 'string' }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { 'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, 'string-property': { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: 'property' } }), Prism.languages.insertBefore('javascript', 'operator', { 'literal-property': { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: 'property' } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined('script', 'javascript'), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')), Prism.languages.js = Prism.languages.javascript, (function () { if (void 0 !== Prism && typeof document !== 'undefined') { Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector); const e = { js: 'javascript', py: 'python', rb: 'ruby', ps1: 'powershell', psm1: 'powershell', sh: 'bash', bat: 'batch', h: 'c', tex: 'latex' }; const t = 'data-src-status'; const a = 'loading'; const n = 'loaded'; const r = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])'; Prism.hooks.add('before-highlightall', function (e) { e.selector += ', ' + r; }), Prism.hooks.add('before-sanity-check', function (s) { const i = s.element; if (i.matches(r)) { s.code = '', i.setAttribute(t, a); const o = i.appendChild(document.createElement('CODE')); o.textContent = 'Loading…'; const l = i.getAttribute('data-src'); let u = s.language; if (u === 'none') { const g = (/\.(\w+)$/.exec(l) || [, 'none'])[1]; u = e[g] || g; }Prism.util.setLanguage(o, u), Prism.util.setLanguage(i, u); const c = Prism.plugins.autoloader; c && c.loadLanguages(u), (function (e, t, a) { const n = new XMLHttpRequest(); n.open('GET', e, !0), n.onreadystatechange = function () { n.readyState == 4 && (n.status < 400 && n.responseText ? t(n.responseText) : n.status >= 400 ? a('✖ Error ' + n.status + ' while fetching file: ' + n.statusText) : a('✖ Error: File does not exist or is empty')); }, n.send(null); }(l, function (e) { i.setAttribute(t, n); const a = (function (e) { const t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || ''); if (t) { const a = Number(t[1]); const n = t[2]; const r = t[3]; return n ? r ? [a, Number(r)] : [a, void 0] : [a, a]; } }(i.getAttribute('data-range'))); if (a) { const r = e.split(/\r\n?|\n/g); let s = a[0]; let l = a[1] == null ? r.length : a[1]; s < 0 && (s += r.length), s = Math.max(0, Math.min(s - 1, r.length)), l < 0 && (l += r.length), l = Math.max(0, Math.min(l, r.length)), e = r.slice(s, l).join('\n'), i.hasAttribute('data-start') || i.setAttribute('data-start', String(s + 1)); }o.textContent = e, Prism.highlightElement(o); }, function (e) { i.setAttribute(t, 'failed'), o.textContent = e; })); } }), Prism.plugins.fileHighlight = { highlight: function (e) { for (var t, a = (e || document).querySelectorAll(r), n = 0; t = a[n++];)Prism.highlightElement(t); } }; let s = !1; Prism.fileHighlight = function () { s || (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'), s = !0), Prism.plugins.fileHighlight.highlight.apply(this, arguments); }; } }());
// # sourceMappingURL=/sm/c25592b52a89af112ba4181a68e6426a5270f90ea672d07ae003392286455396.map

Prism.highlightAll();
