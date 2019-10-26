(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs/operators'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ng-select/ng-select', ['exports', '@angular/core', '@angular/forms', 'rxjs/operators', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-select'] = global['ng-select'] || {}, global['ng-select']['ng-select'] = {}), global.ng.core, global.ng.forms, global.rxjs.operators, global.rxjs, global.ng.common));
}(this, (function (exports, core, forms, operators, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var unescapedHTMLExp = /[&<>"']/g;
    /** @type {?} */
    var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
    /** @type {?} */
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
    };
    /**
     * @param {?} string
     * @return {?}
     */
    function escapeHTML(string) {
        return (string && hasUnescapedHTMLExp.test(string)) ?
            string.replace(unescapedHTMLExp, (/**
             * @param {?} chr
             * @return {?}
             */
            function (chr) { return htmlEscapes[chr]; })) :
            string;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isObject(value) {
        return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isPromise(value) {
        return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFunction(value) {
        return value instanceof Function;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgItemLabelDirective = /** @class */ (function () {
        function NgItemLabelDirective(element) {
            this.element = element;
            this.escape = true;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgItemLabelDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.element.nativeElement.innerHTML = this.escape ?
                escapeHTML(this.ngItemLabel) :
                this.ngItemLabel;
        };
        NgItemLabelDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ngItemLabel]' },] }
        ];
        /** @nocollapse */
        NgItemLabelDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        NgItemLabelDirective.propDecorators = {
            ngItemLabel: [{ type: core.Input }],
            escape: [{ type: core.Input }]
        };
        return NgItemLabelDirective;
    }());
    if (false) {
        /** @type {?} */
        NgItemLabelDirective.prototype.ngItemLabel;
        /** @type {?} */
        NgItemLabelDirective.prototype.escape;
        /**
         * @type {?}
         * @private
         */
        NgItemLabelDirective.prototype.element;
    }
    var NgOptionTemplateDirective = /** @class */ (function () {
        function NgOptionTemplateDirective(template) {
            this.template = template;
        }
        NgOptionTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-option-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptionTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgOptionTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgOptionTemplateDirective.prototype.template;
    }
    var NgOptgroupTemplateDirective = /** @class */ (function () {
        function NgOptgroupTemplateDirective(template) {
            this.template = template;
        }
        NgOptgroupTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptgroupTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgOptgroupTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgOptgroupTemplateDirective.prototype.template;
    }
    var NgLabelTemplateDirective = /** @class */ (function () {
        function NgLabelTemplateDirective(template) {
            this.template = template;
        }
        NgLabelTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgLabelTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgLabelTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgLabelTemplateDirective.prototype.template;
    }
    var NgMultiLabelTemplateDirective = /** @class */ (function () {
        function NgMultiLabelTemplateDirective(template) {
            this.template = template;
        }
        NgMultiLabelTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgMultiLabelTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgMultiLabelTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgMultiLabelTemplateDirective.prototype.template;
    }
    var NgHeaderTemplateDirective = /** @class */ (function () {
        function NgHeaderTemplateDirective(template) {
            this.template = template;
        }
        NgHeaderTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-header-tmp]' },] }
        ];
        /** @nocollapse */
        NgHeaderTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgHeaderTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgHeaderTemplateDirective.prototype.template;
    }
    var NgFooterTemplateDirective = /** @class */ (function () {
        function NgFooterTemplateDirective(template) {
            this.template = template;
        }
        NgFooterTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-footer-tmp]' },] }
        ];
        /** @nocollapse */
        NgFooterTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgFooterTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgFooterTemplateDirective.prototype.template;
    }
    var NgNotFoundTemplateDirective = /** @class */ (function () {
        function NgNotFoundTemplateDirective(template) {
            this.template = template;
        }
        NgNotFoundTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
        ];
        /** @nocollapse */
        NgNotFoundTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgNotFoundTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgNotFoundTemplateDirective.prototype.template;
    }
    var NgTypeToSearchTemplateDirective = /** @class */ (function () {
        function NgTypeToSearchTemplateDirective(template) {
            this.template = template;
        }
        NgTypeToSearchTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
        ];
        /** @nocollapse */
        NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgTypeToSearchTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgTypeToSearchTemplateDirective.prototype.template;
    }
    var NgLoadingTextTemplateDirective = /** @class */ (function () {
        function NgLoadingTextTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingTextTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingTextTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgLoadingTextTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgLoadingTextTemplateDirective.prototype.template;
    }
    var NgTagTemplateDirective = /** @class */ (function () {
        function NgTagTemplateDirective(template) {
            this.template = template;
        }
        NgTagTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-tag-tmp]' },] }
        ];
        /** @nocollapse */
        NgTagTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgTagTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgTagTemplateDirective.prototype.template;
    }
    var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
        function NgLoadingSpinnerTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingSpinnerTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ng-loadingspinner-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NgLoadingSpinnerTemplateDirective;
    }());
    if (false) {
        /** @type {?} */
        NgLoadingSpinnerTemplateDirective.prototype.template;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsoleService = /** @class */ (function () {
        function ConsoleService() {
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleService.prototype.warn = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            console.warn(message);
        };
        ConsoleService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConsoleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
        return ConsoleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g, (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            // tslint:disable-next-line:no-bitwise
            /** @type {?} */
            var val = Math.random() * 16 | 0;
            return val.toString(16);
        }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var diacritics = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    /**
     * @param {?} text
     * @return {?}
     */
    function stripSpecialChars(text) {
        /** @type {?} */
        var match = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            return diacritics[a] || a;
        });
        return text.replace(/[^\u0000-\u007E]/g, match);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ItemsList = /** @class */ (function () {
        function ItemsList(_ngSelect, _selectionModel) {
            this._ngSelect = _ngSelect;
            this._selectionModel = _selectionModel;
            this._items = [];
            this._filteredItems = [];
            this._markedIndex = -1;
        }
        Object.defineProperty(ItemsList.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "filteredItems", {
            get: /**
             * @return {?}
             */
            function () {
                return this._filteredItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._markedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectionModel.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedItem", {
            get: /**
             * @return {?}
             */
            function () {
                return this._filteredItems[this._markedIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
            get: /**
             * @return {?}
             */
            function () {
                return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
            get: /**
             * @return {?}
             */
            function () {
                return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var i = this.selectedItems.length - 1;
                for (; i >= 0; i--) {
                    /** @type {?} */
                    var item = this.selectedItems[i];
                    if (!item.disabled) {
                        return item;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} items
         * @return {?}
         */
        ItemsList.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            var _this = this;
            this._items = items.map((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) { return _this.mapItem(item, index); }));
            if (this._ngSelect.groupBy) {
                this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
                this._items = this._flatten(this._groups);
            }
            else {
                this._groups = new Map();
                this._groups.set(undefined, this._items);
            }
            this._filteredItems = __spread(this._items);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.selected || this.maxItemsSelected) {
                return;
            }
            /** @type {?} */
            var multiple = this._ngSelect.multiple;
            if (!multiple) {
                this.clearSelected();
            }
            this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
            if (this._ngSelect.hideSelected) {
                this._hideSelected(item);
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item.selected) {
                return;
            }
            this._selectionModel.unselect(item, this._ngSelect.multiple);
            if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
                this._showSelected(item);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        ItemsList.prototype.findItem = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            /** @type {?} */
            var findBy;
            if (this._ngSelect.compareWith) {
                findBy = (/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this._ngSelect.compareWith(item.value, value); });
            }
            else if (this._ngSelect.bindValue) {
                findBy = (/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; });
            }
            else {
                findBy = (/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.value === value ||
                    !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); });
            }
            return this._items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return findBy(item); }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.addItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var option = this.mapItem(item, this._items.length);
            this._items.push(option);
            this._filteredItems.push(option);
            return option;
        };
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */
        ItemsList.prototype.clearSelected = /**
         * @param {?=} keepDisabled
         * @return {?}
         */
        function (keepDisabled) {
            if (keepDisabled === void 0) { keepDisabled = false; }
            this._selectionModel.clear(keepDisabled);
            this._items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.selected = keepDisabled && item.selected && item.disabled;
                item.marked = false;
            }));
            if (this._ngSelect.hideSelected) {
                this.resetFilteredItems();
            }
        };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.findByLabel = /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            term = stripSpecialChars(term).toLocaleLowerCase();
            return this.filteredItems.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var label = stripSpecialChars(item.label).toLocaleLowerCase();
                return label.substr(0, term.length) === term;
            }));
        };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            var e_1, _a;
            if (!term) {
                this.resetFilteredItems();
                return;
            }
            this._filteredItems = [];
            term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
            /** @type {?} */
            var match = this._ngSelect.searchFn || this._defaultSearchFn;
            /** @type {?} */
            var hideSelected = this._ngSelect.hideSelected;
            var _loop_1 = function (key) {
                var e_2, _a, _b;
                /** @type {?} */
                var matchedItems = [];
                try {
                    for (var _c = __values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                            continue;
                        }
                        /** @type {?} */
                        var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                        if (match(term, searchItem)) {
                            matchedItems.push(item);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (matchedItems.length > 0) {
                    var _e = __read(matchedItems.slice(-1), 1), last_1 = _e[0];
                    if (last_1.parent) {
                        /** @type {?} */
                        var head = this_1._items.find((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x === last_1.parent; }));
                        this_1._filteredItems.push(head);
                    }
                    (_b = this_1._filteredItems).push.apply(_b, __spread(matchedItems));
                }
            };
            var this_1 = this;
            try {
                for (var _b = __values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _loop_1(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @return {?}
         */
        ItemsList.prototype.resetFilteredItems = /**
         * @return {?}
         */
        function () {
            if (this._filteredItems.length === this._items.length) {
                return;
            }
            if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
                this._filteredItems = this._items.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return !x.selected; }));
            }
            else {
                this._filteredItems = this._items;
            }
        };
        /**
         * @return {?}
         */
        ItemsList.prototype.unmarkItem = /**
         * @return {?}
         */
        function () {
            this._markedIndex = -1;
        };
        /**
         * @return {?}
         */
        ItemsList.prototype.markNextItem = /**
         * @return {?}
         */
        function () {
            this._stepToItem(+1);
        };
        /**
         * @return {?}
         */
        ItemsList.prototype.markPreviousItem = /**
         * @return {?}
         */
        function () {
            this._stepToItem(-1);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.markItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._markedIndex = this._filteredItems.indexOf(item);
        };
        /**
         * @param {?=} markDefault
         * @return {?}
         */
        ItemsList.prototype.markSelectedOrDefault = /**
         * @param {?=} markDefault
         * @return {?}
         */
        function (markDefault) {
            if (this._filteredItems.length === 0) {
                return;
            }
            /** @type {?} */
            var lastMarkedIndex = this._getLastMarkedIndex();
            if (lastMarkedIndex > -1) {
                this._markedIndex = lastMarkedIndex;
            }
            else {
                this._markedIndex = markDefault ? this.filteredItems.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return !x.disabled; })) : -1;
            }
        };
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
        ItemsList.prototype.resolveNested = /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
        function (option, key) {
            if (!isObject(option)) {
                return option;
            }
            if (key.indexOf('.') === -1) {
                return option[key];
            }
            else {
                /** @type {?} */
                var keys = key.split('.');
                /** @type {?} */
                var value = option;
                for (var i = 0, len = keys.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[keys[i]];
                }
                return value;
            }
        };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        ItemsList.prototype.mapItem = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            /** @type {?} */
            var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
            /** @type {?} */
            var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
            return {
                index: index,
                label: isDefined(label) ? label.toString() : '',
                value: value,
                disabled: item.disabled,
                htmlId: this._ngSelect.dropdownId + "-" + index,
            };
        };
        /**
         * @return {?}
         */
        ItemsList.prototype.mapSelectedItems = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var e_3, _a;
            /** @type {?} */
            var multiple = this._ngSelect.multiple;
            try {
                for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var selected = _c.value;
                    /** @type {?} */
                    var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                    /** @type {?} */
                    var item = isDefined(value) ? this.findItem(value) : null;
                    this._selectionModel.unselect(selected, multiple);
                    this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (this._ngSelect.hideSelected) {
                this._filteredItems = this.filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.selectedItems.indexOf(x) === -1; }));
            }
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._showSelected = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var e_4, _a;
            this._filteredItems.push(item);
            if (item.parent) {
                /** @type {?} */
                var parent_1 = item.parent;
                /** @type {?} */
                var parentExists = this._filteredItems.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x === parent_1; }));
                if (!parentExists) {
                    this._filteredItems.push(parent_1);
                }
            }
            else if (item.children) {
                try {
                    for (var _b = __values(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        child.selected = false;
                        this._filteredItems.push(child);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            this._filteredItems = __spread(this._filteredItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a.index - b.index); })));
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._hideSelected = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._filteredItems = this._filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x !== item; }));
            if (item.parent) {
                /** @type {?} */
                var children = item.parent.children;
                if (children.every((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.selected; }))) {
                    this._filteredItems = this._filteredItems.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x !== item.parent; }));
                }
            }
            else if (item.children) {
                this._filteredItems = this.filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.parent !== item; }));
            }
        };
        /**
         * @private
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
        ItemsList.prototype._defaultSearchFn = /**
         * @private
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
        function (search, opt) {
            /** @type {?} */
            var label = stripSpecialChars(opt.label).toLocaleLowerCase();
            return label.indexOf(search) > -1;
        };
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._getNextItemIndex = /**
         * @private
         * @param {?} steps
         * @return {?}
         */
        function (steps) {
            if (steps > 0) {
                return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
            }
            return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
        };
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._stepToItem = /**
         * @private
         * @param {?} steps
         * @return {?}
         */
        function (steps) {
            if (this._filteredItems.length === 0 || this._filteredItems.every((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.disabled; }))) {
                return;
            }
            this._markedIndex = this._getNextItemIndex(steps);
            if (this.markedItem.disabled) {
                this._stepToItem(steps);
            }
        };
        /**
         * @private
         * @return {?}
         */
        ItemsList.prototype._getLastMarkedIndex = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._ngSelect.hideSelected) {
                return -1;
            }
            if (this._markedIndex > -1 && this.markedItem === undefined) {
                return -1;
            }
            /** @type {?} */
            var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
            if (this.lastSelectedItem && selectedIndex < 0) {
                return -1;
            }
            return Math.max(this.markedIndex, selectedIndex);
        };
        /**
         * @private
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
        ItemsList.prototype._groupBy = /**
         * @private
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
        function (items, prop) {
            var _this = this;
            var e_5, _a, e_6, _b;
            /** @type {?} */
            var groups = new Map();
            if (items.length === 0) {
                return groups;
            }
            // Check if items are already grouped by given key.
            if (Array.isArray(items[0].value[(/** @type {?} */ (prop))])) {
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        /** @type {?} */
                        var children = (item.value[(/** @type {?} */ (prop))] || []).map((/**
                         * @param {?} x
                         * @param {?} index
                         * @return {?}
                         */
                        function (x, index) { return _this.mapItem(x, index); }));
                        groups.set(item, children);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return groups;
            }
            /** @type {?} */
            var isFnKey = isFunction(this._ngSelect.groupBy);
            /** @type {?} */
            var keyFn = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var key = isFnKey ? ((/** @type {?} */ (prop)))(item.value) : item.value[(/** @type {?} */ (prop))];
                return isDefined(key) ? key : undefined;
            });
            try {
                // Group items by key.
                for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                    var item = items_2_1.value;
                    /** @type {?} */
                    var key = keyFn(item);
                    /** @type {?} */
                    var group = groups.get(key);
                    if (group) {
                        group.push(item);
                    }
                    else {
                        groups.set(key, [item]);
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return groups;
        };
        /**
         * @private
         * @param {?} groups
         * @return {?}
         */
        ItemsList.prototype._flatten = /**
         * @private
         * @param {?} groups
         * @return {?}
         */
        function (groups) {
            var e_7, _a;
            /** @type {?} */
            var isGroupByFn = isFunction(this._ngSelect.groupBy);
            /** @type {?} */
            var items = [];
            var _loop_2 = function (key) {
                /** @type {?} */
                var i = items.length;
                if (key === undefined) {
                    /** @type {?} */
                    var withoutGroup = groups.get(undefined) || [];
                    items.push.apply(items, __spread(withoutGroup.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return (__assign({}, x, { index: i++ })); }))));
                    return "continue";
                }
                /** @type {?} */
                var isObjectKey = isObject(key);
                /** @type {?} */
                var parent_2 = {
                    label: isObjectKey ? '' : String(key),
                    children: undefined,
                    parent: null,
                    index: i++,
                    disabled: !this_2._ngSelect.selectableGroup,
                    htmlId: newId(),
                };
                /** @type {?} */
                var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : (/** @type {?} */ (this_2._ngSelect.groupBy));
                /** @type {?} */
                var groupValue = this_2._ngSelect.groupValue || ((/**
                 * @return {?}
                 */
                function () {
                    var _a;
                    if (isObjectKey) {
                        return ((/** @type {?} */ (key))).value;
                    }
                    return _a = {}, _a[groupKey] = key, _a;
                }));
                /** @type {?} */
                var children = groups.get(key).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    x.parent = parent_2;
                    x.children = undefined;
                    x.index = i++;
                    return x;
                }));
                parent_2.children = children;
                parent_2.value = groupValue(key, children.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.value; })));
                items.push(parent_2);
                items.push.apply(items, __spread(children));
            };
            var this_2 = this;
            try {
                for (var _b = __values(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _loop_2(key);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return items;
        };
        return ItemsList;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._groups;
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._items;
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._filteredItems;
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._markedIndex;
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._ngSelect;
        /**
         * @type {?}
         * @private
         */
        ItemsList.prototype._selectionModel;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgOption() { }
    if (false) {
        /** @type {?|undefined} */
        NgOption.prototype.index;
        /** @type {?|undefined} */
        NgOption.prototype.htmlId;
        /** @type {?|undefined} */
        NgOption.prototype.selected;
        /** @type {?|undefined} */
        NgOption.prototype.disabled;
        /** @type {?|undefined} */
        NgOption.prototype.marked;
        /** @type {?|undefined} */
        NgOption.prototype.label;
        /** @type {?|undefined} */
        NgOption.prototype.value;
        /** @type {?|undefined} */
        NgOption.prototype.parent;
        /** @type {?|undefined} */
        NgOption.prototype.children;
        /* Skipping unhandled member: [name: string]: any;*/
    }
    /** @enum {number} */
    var KeyCode = {
        Tab: 9,
        Enter: 13,
        Esc: 27,
        Space: 32,
        ArrowUp: 38,
        ArrowDown: 40,
        Backspace: 8,
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ItemsRangeResult() { }
    if (false) {
        /** @type {?} */
        ItemsRangeResult.prototype.scrollHeight;
        /** @type {?} */
        ItemsRangeResult.prototype.topPadding;
        /** @type {?} */
        ItemsRangeResult.prototype.start;
        /** @type {?} */
        ItemsRangeResult.prototype.end;
    }
    /**
     * @record
     */
    function PanelDimensions() { }
    if (false) {
        /** @type {?} */
        PanelDimensions.prototype.itemHeight;
        /** @type {?} */
        PanelDimensions.prototype.panelHeight;
        /** @type {?} */
        PanelDimensions.prototype.itemsPerViewport;
    }
    var NgDropdownPanelService = /** @class */ (function () {
        function NgDropdownPanelService() {
            this._dimensions = {
                itemHeight: 0,
                panelHeight: 0,
                itemsPerViewport: 0
            };
        }
        Object.defineProperty(NgDropdownPanelService.prototype, "dimensions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dimensions;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} scrollPos
         * @param {?} itemsLength
         * @param {?} buffer
         * @return {?}
         */
        NgDropdownPanelService.prototype.calculateItems = /**
         * @param {?} scrollPos
         * @param {?} itemsLength
         * @param {?} buffer
         * @return {?}
         */
        function (scrollPos, itemsLength, buffer) {
            /** @type {?} */
            var d = this._dimensions;
            /** @type {?} */
            var scrollHeight = d.itemHeight * itemsLength;
            /** @type {?} */
            var scrollTop = Math.max(0, scrollPos);
            /** @type {?} */
            var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
            /** @type {?} */
            var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
            /** @type {?} */
            var maxStartEnd = end;
            /** @type {?} */
            var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
            /** @type {?} */
            var start = Math.min(maxStart, Math.floor(indexByScrollTop));
            /** @type {?} */
            var topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
            topPadding = !isNaN(topPadding) ? topPadding : 0;
            start = !isNaN(start) ? start : -1;
            end = !isNaN(end) ? end : -1;
            start -= buffer;
            start = Math.max(0, start);
            end += buffer;
            end = Math.min(itemsLength, end);
            return {
                topPadding: topPadding,
                scrollHeight: scrollHeight,
                start: start,
                end: end
            };
        };
        /**
         * @param {?} itemHeight
         * @param {?} panelHeight
         * @return {?}
         */
        NgDropdownPanelService.prototype.setDimensions = /**
         * @param {?} itemHeight
         * @param {?} panelHeight
         * @return {?}
         */
        function (itemHeight, panelHeight) {
            /** @type {?} */
            var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
            this._dimensions = {
                itemHeight: itemHeight,
                panelHeight: panelHeight,
                itemsPerViewport: itemsPerViewport
            };
        };
        /**
         * @param {?} itemTop
         * @param {?} itemHeight
         * @param {?} lastScroll
         * @return {?}
         */
        NgDropdownPanelService.prototype.getScrollTo = /**
         * @param {?} itemTop
         * @param {?} itemHeight
         * @param {?} lastScroll
         * @return {?}
         */
        function (itemTop, itemHeight, lastScroll) {
            var panelHeight = this.dimensions.panelHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var top = lastScroll;
            /** @type {?} */
            var bottom = top + panelHeight;
            if (panelHeight >= itemBottom && lastScroll === itemTop) {
                return null;
            }
            if (itemBottom > bottom) {
                return top + itemBottom - bottom;
            }
            else if (itemTop <= top) {
                return itemTop;
            }
            return null;
        };
        return NgDropdownPanelService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelService.prototype._dimensions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */
    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    /** @type {?} */
    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs.animationFrameScheduler : rxjs.asapScheduler;
    var NgDropdownPanelComponent = /** @class */ (function () {
        function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
            this._renderer = _renderer;
            this._zone = _zone;
            this._panelService = _panelService;
            this._document = _document;
            this.items = [];
            this.position = 'auto';
            this.virtualScroll = false;
            this.filterValue = null;
            this.update = new core.EventEmitter();
            this.scroll = new core.EventEmitter();
            this.scrollToEnd = new core.EventEmitter();
            this.outsideClick = new core.EventEmitter();
            this._destroy$ = new rxjs.Subject();
            this._scrollToEndFired = false;
            this._updateScrollHeight = false;
            this._lastScrollPosition = 0;
            this._dropdown = _elementRef.nativeElement;
        }
        Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._currentPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgDropdownPanelComponent.prototype, "itemsLength", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this._itemsLength;
            },
            set: /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value !== this._itemsLength) {
                    this._itemsLength = value;
                    this._onItemsLengthChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgDropdownPanelComponent.prototype, "_startOffset", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                if (this.markedItem) {
                    var _a = this._panelService.dimensions, itemHeight = _a.itemHeight, panelHeight = _a.panelHeight;
                    /** @type {?} */
                    var offset = this.markedItem.index * itemHeight;
                    return panelHeight > offset ? 0 : offset;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var target = (/** @type {?} */ ($event.target));
            if (target.tagName === 'INPUT') {
                return;
            }
            $event.preventDefault();
        };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._select = this._dropdown.parentElement;
            this._virtualPadding = this.paddingElementRef.nativeElement;
            this._scrollablePanel = this.scrollElementRef.nativeElement;
            this._contentPanel = this.contentElementRef.nativeElement;
            this._handleScroll();
            this._handleOutsideClick();
            this._appendDropdown();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.items) {
                /** @type {?} */
                var change = changes.items;
                this._onItemsChange(change.currentValue, change.firstChange);
            }
        };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroy$.next();
            this._destroy$.complete();
            this._destroy$.unsubscribe();
            if (this.appendTo) {
                this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
            }
        };
        /**
         * @param {?} option
         * @param {?=} startFromOption
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollTo = /**
         * @param {?} option
         * @param {?=} startFromOption
         * @return {?}
         */
        function (option, startFromOption) {
            if (startFromOption === void 0) { startFromOption = false; }
            if (!option) {
                return;
            }
            /** @type {?} */
            var index = this.items.indexOf(option);
            if (index < 0 || index >= this.itemsLength) {
                return;
            }
            /** @type {?} */
            var scrollTo;
            if (this.virtualScroll) {
                /** @type {?} */
                var itemHeight = this._panelService.dimensions.itemHeight;
                scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
            }
            else {
                /** @type {?} */
                var item = this._dropdown.querySelector("#" + option.htmlId);
                /** @type {?} */
                var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
                scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
            }
            if (isDefined(scrollTo)) {
                this._scrollablePanel.scrollTop = scrollTo;
            }
        };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollToTag = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var panel = this._scrollablePanel;
            panel.scrollTop = panel.scrollHeight - panel.clientHeight;
        };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.adjustPosition = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = this._parent.getBoundingClientRect();
            /** @type {?} */
            var select = this._select.getBoundingClientRect();
            this._setOffset(parent, select);
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleDropdownPosition = /**
         * @private
         * @return {?}
         */
        function () {
            this._currentPosition = this._calculateCurrentPosition(this._dropdown);
            if (this._currentPosition === 'top') {
                this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
                this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
                this._renderer.addClass(this._select, TOP_CSS_CLASS);
                this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
            }
            else {
                this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
                this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
                this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
                this._renderer.removeClass(this._select, TOP_CSS_CLASS);
            }
            if (this.appendTo) {
                this._updatePosition();
            }
            this._dropdown.style.opacity = '1';
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleScroll = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                rxjs.fromEvent(_this.scrollElementRef.nativeElement, 'scroll')
                    .pipe(operators.takeUntil(_this._destroy$), operators.auditTime(0, SCROLL_SCHEDULER))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this._onContentScrolled(e.target.scrollTop); }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleOutsideClick = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._document) {
                return;
            }
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                rxjs.merge(rxjs.fromEvent(_this._document, 'touchstart', { capture: true }), rxjs.fromEvent(_this._document, 'mousedown', { capture: true })).pipe(operators.takeUntil(_this._destroy$))
                    .subscribe((/**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) { return _this._checkToClose($event); }));
            }));
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._checkToClose = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
                return;
            }
            /** @type {?} */
            var path = $event.path || ($event.composedPath && $event.composedPath());
            if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
                return;
            }
            this._zone.run((/**
             * @return {?}
             */
            function () { return _this.outsideClick.emit(); }));
        };
        /**
         * @private
         * @param {?} items
         * @param {?} firstChange
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._onItemsChange = /**
         * @private
         * @param {?} items
         * @param {?} firstChange
         * @return {?}
         */
        function (items, firstChange) {
            this.items = items || [];
            this._scrollToEndFired = false;
            this.itemsLength = items.length;
            if (this.virtualScroll) {
                this._updateItemsRange(firstChange);
            }
            else {
                this._updateItems(firstChange);
            }
        };
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateItems = /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */
        function (firstChange) {
            var _this = this;
            this.update.emit(this.items);
            if (firstChange === false) {
                return;
            }
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var panelHeight = _this._scrollablePanel.clientHeight;
                    _this._panelService.setDimensions(0, panelHeight);
                    _this._handleDropdownPosition();
                    _this.scrollTo(_this.markedItem, firstChange);
                }));
            }));
        };
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateItemsRange = /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */
        function (firstChange) {
            var _this = this;
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._measureDimensions().then((/**
                 * @return {?}
                 */
                function () {
                    if (firstChange) {
                        _this._renderItemsRange(_this._startOffset);
                        _this._handleDropdownPosition();
                    }
                    else {
                        _this._renderItemsRange();
                    }
                }));
            }));
        };
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._onContentScrolled = /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */
        function (scrollTop) {
            if (this.virtualScroll) {
                this._renderItemsRange(scrollTop);
            }
            this._lastScrollPosition = scrollTop;
            this._fireScrollToEnd(scrollTop);
        };
        /**
         * @private
         * @param {?} height
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateVirtualHeight = /**
         * @private
         * @param {?} height
         * @return {?}
         */
        function (height) {
            if (this._updateScrollHeight) {
                this._virtualPadding.style.height = height + "px";
                this._updateScrollHeight = false;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._onItemsLengthChanged = /**
         * @private
         * @return {?}
         */
        function () {
            this._updateScrollHeight = true;
        };
        /**
         * @private
         * @param {?=} scrollTop
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._renderItemsRange = /**
         * @private
         * @param {?=} scrollTop
         * @return {?}
         */
        function (scrollTop) {
            var _this = this;
            if (scrollTop === void 0) { scrollTop = null; }
            if (scrollTop && this._lastScrollPosition === scrollTop) {
                return;
            }
            scrollTop = scrollTop || this._scrollablePanel.scrollTop;
            /** @type {?} */
            var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
            this._updateVirtualHeight(range.scrollHeight);
            this._contentPanel.style.transform = "translateY(" + range.topPadding + "px)";
            this._zone.run((/**
             * @return {?}
             */
            function () {
                _this.update.emit(_this.items.slice(range.start, range.end));
                _this.scroll.emit({ start: range.start, end: range.end });
            }));
            if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
                this._scrollablePanel.scrollTop = scrollTop;
                this._lastScrollPosition = scrollTop;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._measureDimensions = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
                return Promise.resolve(this._panelService.dimensions);
            }
            var _a = __read(this.items, 1), first = _a[0];
            this.update.emit([first]);
            return Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var option = _this._dropdown.querySelector("#" + first.htmlId);
                /** @type {?} */
                var optionHeight = option.clientHeight;
                _this._virtualPadding.style.height = optionHeight * _this.itemsLength + "px";
                /** @type {?} */
                var panelHeight = _this._scrollablePanel.clientHeight;
                _this._panelService.setDimensions(optionHeight, panelHeight);
                return _this._panelService.dimensions;
            }));
        };
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */
        function (scrollTop) {
            var _this = this;
            if (this._scrollToEndFired || scrollTop === 0) {
                return;
            }
            /** @type {?} */
            var padding = this.virtualScroll ?
                this._virtualPadding :
                this._contentPanel;
            if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
                this._zone.run((/**
                 * @return {?}
                 */
                function () { return _this.scrollToEnd.emit(); }));
                this._scrollToEndFired = true;
            }
        };
        /**
         * @private
         * @param {?} dropdownEl
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
         * @private
         * @param {?} dropdownEl
         * @return {?}
         */
        function (dropdownEl) {
            if (this.position !== 'auto') {
                return this.position;
            }
            /** @type {?} */
            var selectRect = this._select.getBoundingClientRect();
            /** @type {?} */
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            /** @type {?} */
            var offsetTop = selectRect.top + window.pageYOffset;
            /** @type {?} */
            var height = selectRect.height;
            /** @type {?} */
            var dropdownHeight = dropdownEl.getBoundingClientRect().height;
            if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
                return 'top';
            }
            else {
                return 'bottom';
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._appendDropdown = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.appendTo) {
                return;
            }
            this._parent = document.querySelector(this.appendTo);
            if (!parent) {
                throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
            }
            this._parent.appendChild(this._dropdown);
        };
        /**
         * @private
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updatePosition = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var select = this._select.getBoundingClientRect();
            /** @type {?} */
            var parent = this._parent.getBoundingClientRect();
            /** @type {?} */
            var offsetLeft = select.left - parent.left;
            this._setOffset(parent, select);
            this._dropdown.style.left = offsetLeft + 'px';
            this._dropdown.style.width = select.width + 'px';
            this._dropdown.style.minWidth = select.width + 'px';
        };
        /**
         * @private
         * @param {?} parent
         * @param {?} select
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._setOffset = /**
         * @private
         * @param {?} parent
         * @param {?} select
         * @return {?}
         */
        function (parent, select) {
            /** @type {?} */
            var delta = select.height;
            if (this._currentPosition === 'top') {
                /** @type {?} */
                var offsetBottom = parent.bottom - select.bottom;
                this._dropdown.style.bottom = offsetBottom + delta + 'px';
                this._dropdown.style.top = 'auto';
            }
            else if (this._currentPosition === 'bottom') {
                /** @type {?} */
                var offsetTop = select.top - parent.top;
                this._dropdown.style.top = offsetTop + delta + 'px';
                this._dropdown.style.bottom = 'auto';
            }
        };
        NgDropdownPanelComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'ng-dropdown-panel',
                        template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                    }] }
        ];
        /** @nocollapse */
        NgDropdownPanelComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: NgDropdownPanelService },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        NgDropdownPanelComponent.propDecorators = {
            items: [{ type: core.Input }],
            markedItem: [{ type: core.Input }],
            position: [{ type: core.Input }],
            appendTo: [{ type: core.Input }],
            bufferAmount: [{ type: core.Input }],
            virtualScroll: [{ type: core.Input }],
            headerTemplate: [{ type: core.Input }],
            footerTemplate: [{ type: core.Input }],
            filterValue: [{ type: core.Input }],
            update: [{ type: core.Output }],
            scroll: [{ type: core.Output }],
            scrollToEnd: [{ type: core.Output }],
            outsideClick: [{ type: core.Output }],
            contentElementRef: [{ type: core.ViewChild, args: ['content', { read: core.ElementRef, static: true },] }],
            scrollElementRef: [{ type: core.ViewChild, args: ['scroll', { read: core.ElementRef, static: true },] }],
            paddingElementRef: [{ type: core.ViewChild, args: ['padding', { read: core.ElementRef, static: true },] }],
            handleMousedown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }]
        };
        return NgDropdownPanelComponent;
    }());
    if (false) {
        /** @type {?} */
        NgDropdownPanelComponent.prototype.items;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.markedItem;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.position;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.appendTo;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.bufferAmount;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.virtualScroll;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.headerTemplate;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.footerTemplate;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.filterValue;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.update;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.scroll;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.scrollToEnd;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.outsideClick;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.contentElementRef;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.scrollElementRef;
        /** @type {?} */
        NgDropdownPanelComponent.prototype.paddingElementRef;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._destroy$;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._dropdown;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._virtualPadding;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._scrollablePanel;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._contentPanel;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._select;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._parent;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._scrollToEndFired;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._updateScrollHeight;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._lastScrollPosition;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._currentPosition;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._itemsLength;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._zone;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._panelService;
        /**
         * @type {?}
         * @private
         */
        NgDropdownPanelComponent.prototype._document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgOptionComponent = /** @class */ (function () {
        function NgOptionComponent(elementRef) {
            this.elementRef = elementRef;
            this.stateChange$ = new rxjs.Subject();
            this._disabled = false;
        }
        Object.defineProperty(NgOptionComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._disabled = this._isDisabled(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgOptionComponent.prototype, "label", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.elementRef.nativeElement.textContent || '').trim();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgOptionComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.disabled) {
                this.stateChange$.next({
                    value: this.value,
                    disabled: this._disabled
                });
            }
        };
        /**
         * @return {?}
         */
        NgOptionComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            if (this.label !== this._previousLabel) {
                this._previousLabel = this.label;
                this.stateChange$.next({
                    value: this.value,
                    disabled: this._disabled,
                    label: this.elementRef.nativeElement.innerHTML
                });
            }
        };
        /**
         * @return {?}
         */
        NgOptionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.stateChange$.complete();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NgOptionComponent.prototype._isDisabled = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value != null && "" + value !== 'false';
        };
        NgOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-option',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NgOptionComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        NgOptionComponent.propDecorators = {
            value: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return NgOptionComponent;
    }());
    if (false) {
        /** @type {?} */
        NgOptionComponent.prototype.value;
        /** @type {?} */
        NgOptionComponent.prototype.stateChange$;
        /**
         * @type {?}
         * @private
         */
        NgOptionComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        NgOptionComponent.prototype._previousLabel;
        /** @type {?} */
        NgOptionComponent.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSelectConfig = /** @class */ (function () {
        function NgSelectConfig() {
            this.notFoundText = 'No items found';
            this.typeToSearchText = 'Type to search';
            this.addTagText = 'Add item';
            this.loadingText = 'Loading...';
            this.clearAllText = 'Clear all';
            this.disableVirtualScroll = true;
            this.openOnEnter = true;
        }
        NgSelectConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgSelectConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
        return NgSelectConfig;
    }());
    if (false) {
        /** @type {?} */
        NgSelectConfig.prototype.placeholder;
        /** @type {?} */
        NgSelectConfig.prototype.notFoundText;
        /** @type {?} */
        NgSelectConfig.prototype.typeToSearchText;
        /** @type {?} */
        NgSelectConfig.prototype.addTagText;
        /** @type {?} */
        NgSelectConfig.prototype.loadingText;
        /** @type {?} */
        NgSelectConfig.prototype.clearAllText;
        /** @type {?} */
        NgSelectConfig.prototype.disableVirtualScroll;
        /** @type {?} */
        NgSelectConfig.prototype.openOnEnter;
        /** @type {?} */
        NgSelectConfig.prototype.appendTo;
        /** @type {?} */
        NgSelectConfig.prototype.bindValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SELECTION_MODEL_FACTORY = new core.InjectionToken('ng-select-selection-model');
    var NgSelectComponent = /** @class */ (function () {
        function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
            var _this = this;
            this.classes = classes;
            this.autoFocus = autoFocus;
            this._cd = _cd;
            this._console = _console;
            this.markFirst = true;
            this.dropdownPosition = 'auto';
            this.loading = false;
            this.closeOnSelect = true;
            this.hideSelected = false;
            this.selectOnTab = false;
            this.bufferAmount = 4;
            this.selectableGroup = false;
            this.selectableGroupAsModel = true;
            this.searchFn = null;
            this.trackByFn = null;
            this.clearOnBackspace = true;
            this.labelForId = null;
            this.inputAttrs = {};
            this.readonly = false;
            this.keyDownFn = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return true; });
            this.multiple = false;
            this.addTag = false;
            this.searchable = true;
            this.clearable = true;
            this.isOpen = false;
            // output events
            this.blurEvent = new core.EventEmitter();
            this.focusEvent = new core.EventEmitter();
            this.changeEvent = new core.EventEmitter();
            this.openEvent = new core.EventEmitter();
            this.closeEvent = new core.EventEmitter();
            this.searchEvent = new core.EventEmitter();
            this.clearEvent = new core.EventEmitter();
            this.addEvent = new core.EventEmitter();
            this.removeEvent = new core.EventEmitter();
            this.scroll = new core.EventEmitter();
            this.scrollToEnd = new core.EventEmitter();
            this.viewPortItems = [];
            this.searchTerm = null;
            this.dropdownId = newId();
            this.escapeHTML = true;
            this._items = [];
            this._defaultLabel = 'label';
            this._pressedKeys = [];
            this._destroy$ = new rxjs.Subject();
            this._keyPress$ = new rxjs.Subject();
            this._onChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this._onTouched = (/**
             * @return {?}
             */
            function () { });
            this._isComposing = false;
            this.clearItem = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var option = _this.selectedItems.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.value === item; }));
                _this.unselect(option);
            });
            this.trackByOption = (/**
             * @param {?} _
             * @param {?} item
             * @return {?}
             */
            function (_, item) {
                if (_this.trackByFn) {
                    return _this.trackByFn(item.value);
                }
                return item;
            });
            this._mergeGlobalConfig(config);
            this.itemsList = new ItemsList(this, newSelectionModel());
            this.element = _elementRef.nativeElement;
        }
        Object.defineProperty(NgSelectComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () { return this._items; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._itemsAreUsed = true;
                this._items = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
            get: /**
             * @return {?}
             */
            function () { return this._compareWith; },
            set: /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                if (!isFunction(fn)) {
                    throw Error('`compareWith` must be a function.');
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
            get: /**
             * @return {?}
             */
            function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._clearSearchOnAdd = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(NgSelectComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () { return this.readonly || this._disabled; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(NgSelectComponent.prototype, "filtered", {
            get: /**
             * @return {?}
             */
            function () { return (!!this.searchTerm && this.searchable || this._isComposing); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */
            function () {
                return this.itemsList.selectedItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
            get: /**
             * @return {?}
             */
            function () {
                return this.selectedItems.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.value; }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
            get: /**
             * @return {?}
             */
            function () {
                return this.selectedItems.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "currentPanelPosition", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.dropdownPanel) {
                    return this.dropdownPanel.currentPosition;
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._handleKeyPresses();
            this._setInputAttributes();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.multiple) {
                this.itemsList.clearSelected();
            }
            if (changes.items) {
                this._setItems(changes.items.currentValue || []);
            }
            if (changes.isOpen) {
                this._manualOpen = isDefined(changes.isOpen.currentValue);
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (!this._itemsAreUsed) {
                this.escapeHTML = false;
                this._setItemsFromNgOptions();
            }
            if (isDefined(this.autoFocus)) {
                this.focus();
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroy$.next();
            this._destroy$.complete();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleKeyDown = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var keyCode = KeyCode[$event.which];
            if (keyCode) {
                if (this.keyDownFn($event) === false) {
                    return;
                }
                this.handleKeyCode($event);
            }
            else if ($event.key && $event.key.length === 1) {
                this._keyPress$.next($event.key.toLocaleLowerCase());
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleKeyCode = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    $event.preventDefault();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            /** @type {?} */
            var target = (/** @type {?} */ ($event.target));
            if (target.tagName !== 'INPUT') {
                $event.preventDefault();
            }
            if (target.classList.contains('ng-clear-wrapper')) {
                this.handleClearClick();
                return;
            }
            if (target.classList.contains('ng-arrow-wrapper')) {
                this.handleArrowClick();
                return;
            }
            if (target.classList.contains('ng-value-icon')) {
                return;
            }
            if (!this.focused) {
                this.focus();
            }
            if (this.searchable) {
                this.open();
            }
            else {
                this.toggle();
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleArrowClick = /**
         * @return {?}
         */
        function () {
            if (this.isOpen) {
                this.close();
            }
            else {
                this.open();
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleClearClick = /**
         * @return {?}
         */
        function () {
            if (this.hasValue) {
                this.itemsList.clearSelected(true);
                this._updateNgModel();
            }
            this._clearSearch();
            this.focus();
            this.clearEvent.emit();
            this._onSelectionChanged();
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.clearModel = /**
         * @return {?}
         */
        function () {
            if (!this.clearable) {
                return;
            }
            this.itemsList.clearSelected();
            this._updateNgModel();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.itemsList.clearSelected();
            this._handleWriteValue(value);
            this._cd.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onTouched = fn;
        };
        /**
         * @param {?} state
         * @return {?}
         */
        NgSelectComponent.prototype.setDisabledState = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this._disabled = state;
            this._cd.markForCheck();
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.toggle = /**
         * @return {?}
         */
        function () {
            if (!this.isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.open = /**
         * @return {?}
         */
        function () {
            if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
                return;
            }
            if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
                return;
            }
            this.isOpen = true;
            this.itemsList.markSelectedOrDefault(this.markFirst);
            this.openEvent.emit();
            if (!this.searchTerm) {
                this.focus();
            }
            this.detectChanges();
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            if (!this.isOpen || this._manualOpen) {
                return;
            }
            this.isOpen = false;
            this._clearSearch();
            this.itemsList.unmarkItem();
            this._onTouched();
            this.closeEvent.emit();
            this._cd.markForCheck();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.toggleItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item || item.disabled || this.disabled) {
                return;
            }
            if (this.multiple && item.selected) {
                this.unselect(item);
            }
            else {
                this.select(item);
            }
            this._onSelectionChanged();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item.selected) {
                this.itemsList.select(item);
                if (this.clearSearchOnAdd) {
                    this._clearSearch();
                }
                this._updateNgModel();
                if (this.multiple) {
                    this.addEvent.emit(item.value);
                }
            }
            if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
                this.close();
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.searchInput.nativeElement.focus();
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            this.searchInput.nativeElement.blur();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item) {
                return;
            }
            this.itemsList.unselect(item);
            this.focus();
            this._updateNgModel();
            this.removeEvent.emit(item);
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.selectTag = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var _a;
            /** @type {?} */
            var tag;
            if (isFunction(this.addTag)) {
                tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
            }
            else {
                tag = this._primitive ? this.searchTerm : (_a = {}, _a[this.bindLabel] = this.searchTerm, _a);
            }
            /** @type {?} */
            var handleTag = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); });
            if (isPromise(tag)) {
                tag.then((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.select(handleTag(item)); })).catch((/**
                 * @return {?}
                 */
                function () { }));
            }
            else if (tag) {
                this.select(handleTag(tag));
            }
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showClear = /**
         * @return {?}
         */
        function () {
            return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
        };
        Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var term = this.searchTerm && this.searchTerm.trim();
                if (!term) {
                    return false;
                }
                term = term.toLowerCase();
                return this.addTag &&
                    (!this.itemsList.filteredItems.some((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.label.toLowerCase() === term; })) &&
                        (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.label.toLowerCase() === term; })))) &&
                    !this.loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showNoItemsFound = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var empty = this.itemsList.filteredItems.length === 0;
            return ((empty && !this._isTypeahead && !this.loading) ||
                (empty && this._isTypeahead && this.searchTerm && !this.loading)) &&
                !this.showAddTag;
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showTypeToSearch = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var empty = this.itemsList.filteredItems.length === 0;
            return empty && this._isTypeahead && !this.searchTerm && !this.loading;
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.onCompositionStart = /**
         * @return {?}
         */
        function () {
            this._isComposing = true;
        };
        /**
         * @param {?} term
         * @return {?}
         */
        NgSelectComponent.prototype.onCompositionEnd = /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            this._isComposing = false;
            this.filter(term);
        };
        /**
         * @param {?} term
         * @return {?}
         */
        NgSelectComponent.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            if (this._isComposing) {
                return;
            }
            this._changeSearch(term);
            if (!this._isTypeahead) {
                this.itemsList.filter(this.searchTerm);
                if (this.isOpen) {
                    this.itemsList.markSelectedOrDefault(this.markFirst);
                }
            }
            this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.value; })) });
            this.open();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputFocus = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.focused) {
                return;
            }
            this.element.classList.add('ng-select-focused');
            this.focusEvent.emit($event);
            this.focused = true;
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputBlur = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.element.classList.remove('ng-select-focused');
            this.blurEvent.emit($event);
            if (!this.isOpen && !this.disabled) {
                this._onTouched();
            }
            this.focused = false;
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.onItemHover = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.disabled) {
                return;
            }
            this.itemsList.markItem(item);
        };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            if (!((/** @type {?} */ (this._cd))).destroyed) {
                this._cd.detectChanges();
            }
        };
        /**
         * @private
         * @param {?} items
         * @return {?}
         */
        NgSelectComponent.prototype._setItems = /**
         * @private
         * @param {?} items
         * @return {?}
         */
        function (items) {
            /** @type {?} */
            var firstItem = items[0];
            this.bindLabel = this.bindLabel || this._defaultLabel;
            this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
            this.itemsList.setItems(items);
            if (items.length > 0 && this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
                this.itemsList.filter(this.searchTerm);
            }
            if (this._isTypeahead || this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._setItemsFromNgOptions = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var mapNgOptions = (/**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                _this.items = options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return ({
                    $ngOptionValue: option.value,
                    $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                    disabled: option.disabled
                }); }));
                _this.itemsList.setItems(_this.items);
                if (_this.hasValue) {
                    _this.itemsList.mapSelectedItems();
                }
                _this.detectChanges();
            });
            /** @type {?} */
            var handleOptionChange = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var changedOrDestroyed = rxjs.merge(_this.ngOptions.changes, _this._destroy$);
                rxjs.merge.apply(void 0, __spread(_this.ngOptions.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.stateChange$; })))).pipe(operators.takeUntil(changedOrDestroyed))
                    .subscribe((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    /** @type {?} */
                    var item = _this.itemsList.findItem(option.value);
                    item.disabled = option.disabled;
                    item.label = option.label || item.label;
                    _this._cd.detectChanges();
                }));
            });
            this.ngOptions.changes
                .pipe(operators.startWith(this.ngOptions), operators.takeUntil(this._destroy$))
                .subscribe((/**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                _this.bindLabel = _this._defaultLabel;
                mapNgOptions(options);
                handleOptionChange();
            }));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype._isValidWriteValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
                return false;
            }
            /** @type {?} */
            var validateBinding = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                    _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                    return false;
                }
                return true;
            });
            if (this.multiple) {
                if (!Array.isArray(value)) {
                    this._console.warn('Multiple select ngModel should be array.');
                    return false;
                }
                return value.every((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return validateBinding(item); }));
            }
            else {
                return validateBinding(value);
            }
        };
        /**
         * @private
         * @param {?} ngModel
         * @return {?}
         */
        NgSelectComponent.prototype._handleWriteValue = /**
         * @private
         * @param {?} ngModel
         * @return {?}
         */
        function (ngModel) {
            var _this = this;
            if (!this._isValidWriteValue(ngModel)) {
                return;
            }
            /** @type {?} */
            var select = (/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _a;
                /** @type {?} */
                var item = _this.itemsList.findItem(val);
                if (item) {
                    _this.itemsList.select(item);
                }
                else {
                    /** @type {?} */
                    var isValObject = isObject(val);
                    /** @type {?} */
                    var isPrimitive = !isValObject && !_this.bindValue;
                    if ((isValObject || isPrimitive)) {
                        _this.itemsList.select(_this.itemsList.mapItem(val, null));
                    }
                    else if (_this.bindValue) {
                        item = (_a = {},
                            _a[_this.bindLabel] = null,
                            _a[_this.bindValue] = val,
                            _a);
                        _this.itemsList.select(_this.itemsList.mapItem(item, null));
                    }
                }
            });
            if (this.multiple) {
                ((/** @type {?} */ (ngModel))).forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return select(item); }));
            }
            else {
                select(ngModel);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._handleKeyPresses = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.searchable) {
                return;
            }
            this._keyPress$
                .pipe(operators.takeUntil(this._destroy$), operators.tap((/**
             * @param {?} letter
             * @return {?}
             */
            function (letter) { return _this._pressedKeys.push(letter); })), operators.debounceTime(200), operators.filter((/**
             * @return {?}
             */
            function () { return _this._pressedKeys.length > 0; })), operators.map((/**
             * @return {?}
             */
            function () { return _this._pressedKeys.join(''); })))
                .subscribe((/**
             * @param {?} term
             * @return {?}
             */
            function (term) {
                /** @type {?} */
                var item = _this.itemsList.findByLabel(term);
                if (item) {
                    if (_this.isOpen) {
                        _this.itemsList.markItem(item);
                        _this._cd.markForCheck();
                    }
                    else {
                        _this.select(item);
                    }
                }
                _this._pressedKeys = [];
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._setInputAttributes = /**
         * @private
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var input = this.searchInput.nativeElement;
            /** @type {?} */
            var attributes = __assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
            try {
                for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    input.setAttribute(key, attributes[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._updateNgModel = /**
         * @private
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var model = [];
            try {
                for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (this.bindValue) {
                        /** @type {?} */
                        var value = null;
                        if (item.children) {
                            /** @type {?} */
                            var groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                            value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                        }
                        else {
                            value = this.itemsList.resolveNested(item.value, this.bindValue);
                        }
                        model.push(value);
                    }
                    else {
                        model.push(item.value);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            /** @type {?} */
            var selected = this.selectedItems.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; }));
            if (this.multiple) {
                this._onChange(model);
                this.changeEvent.emit(selected);
            }
            else {
                this._onChange(isDefined(model[0]) ? model[0] : null);
                this.changeEvent.emit(selected[0]);
            }
            this._cd.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._clearSearch = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.searchTerm) {
                return;
            }
            this._changeSearch(null);
            this.itemsList.resetFilteredItems();
        };
        /**
         * @private
         * @param {?} searchTerm
         * @return {?}
         */
        NgSelectComponent.prototype._changeSearch = /**
         * @private
         * @param {?} searchTerm
         * @return {?}
         */
        function (searchTerm) {
            this.searchTerm = searchTerm;
            if (this._isTypeahead) {
                this.typeahead.next(searchTerm);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToMarked = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.isOpen || !this.dropdownPanel) {
                return;
            }
            this.dropdownPanel.scrollTo(this.itemsList.markedItem);
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToTag = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.isOpen || !this.dropdownPanel) {
                return;
            }
            this.dropdownPanel.scrollToTag();
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._onSelectionChanged = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.isOpen && this.multiple && this.appendTo) {
                // Make sure items are rendered.
                this._cd.detectChanges();
                this.dropdownPanel.adjustPosition();
            }
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleTab = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.isOpen === false && !this.addTag) {
                return;
            }
            if (this.selectOnTab) {
                if (this.itemsList.markedItem) {
                    this.toggleItem(this.itemsList.markedItem);
                    $event.preventDefault();
                }
                else if (this.showAddTag) {
                    this.selectTag();
                    $event.preventDefault();
                }
                else {
                    this.close();
                }
            }
            else {
                this.close();
            }
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleEnter = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.isOpen || this._manualOpen) {
                if (this.itemsList.markedItem) {
                    this.toggleItem(this.itemsList.markedItem);
                }
                else if (this.showAddTag) {
                    this.selectTag();
                }
            }
            else if (this.openOnEnter) {
                this.open();
            }
            else {
                return;
            }
            $event.preventDefault();
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleSpace = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this.isOpen || this._manualOpen) {
                return;
            }
            this.open();
            $event.preventDefault();
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowDown = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (this._nextItemIsTag(+1)) {
                this.itemsList.unmarkItem();
                this._scrollToTag();
            }
            else {
                this.itemsList.markNextItem();
                this._scrollToMarked();
            }
            this.open();
            $event.preventDefault();
        };
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowUp = /**
         * @private
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            if (!this.isOpen) {
                return;
            }
            if (this._nextItemIsTag(-1)) {
                this.itemsList.unmarkItem();
                this._scrollToTag();
            }
            else {
                this.itemsList.markPreviousItem();
                this._scrollToMarked();
            }
            $event.preventDefault();
        };
        /**
         * @private
         * @param {?} nextStep
         * @return {?}
         */
        NgSelectComponent.prototype._nextItemIsTag = /**
         * @private
         * @param {?} nextStep
         * @return {?}
         */
        function (nextStep) {
            /** @type {?} */
            var nextIndex = this.itemsList.markedIndex + nextStep;
            return this.addTag && this.searchTerm
                && this.itemsList.markedItem
                && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
        };
        /**
         * @private
         * @return {?}
         */
        NgSelectComponent.prototype._handleBackspace = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
                return;
            }
            if (this.multiple) {
                this.unselect(this.itemsList.lastSelectedItem);
            }
            else {
                this.clearModel();
            }
        };
        Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                if (this.typeahead && this.typeahead.observers) {
                    return this.typeahead.observers.length > 0;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        NgSelectComponent.prototype._mergeGlobalConfig = /**
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.placeholder = this.placeholder || config.placeholder;
            this.notFoundText = this.notFoundText || config.notFoundText;
            this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
            this.addTagText = this.addTagText || config.addTagText;
            this.loadingText = this.loadingText || config.loadingText;
            this.clearAllText = this.clearAllText || config.clearAllText;
            this.virtualScroll = isDefined(this.virtualScroll)
                ? this.virtualScroll
                : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
            this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            this.appendTo = this.appendTo || config.appendTo;
            this.bindValue = this.bindValue || config.bindValue;
        };
        NgSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-select',
                        template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NgSelectComponent; })),
                                multi: true
                            }, NgDropdownPanelService],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'listbox',
                            'class': 'ng-select',
                            '[class.ng-select-single]': '!multiple',
                        },
                        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                    }] }
        ];
        /** @nocollapse */
        NgSelectComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['class',] }] },
            { type: undefined, decorators: [{ type: core.Attribute, args: ['autofocus',] }] },
            { type: NgSelectConfig },
            { type: undefined, decorators: [{ type: core.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: ConsoleService }
        ]; };
        NgSelectComponent.propDecorators = {
            bindLabel: [{ type: core.Input }],
            bindValue: [{ type: core.Input }],
            markFirst: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            notFoundText: [{ type: core.Input }],
            typeToSearchText: [{ type: core.Input }],
            addTagText: [{ type: core.Input }],
            loadingText: [{ type: core.Input }],
            clearAllText: [{ type: core.Input }],
            dropdownPosition: [{ type: core.Input }],
            appendTo: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            closeOnSelect: [{ type: core.Input }],
            hideSelected: [{ type: core.Input }],
            selectOnTab: [{ type: core.Input }],
            openOnEnter: [{ type: core.Input }],
            maxSelectedItems: [{ type: core.Input }],
            groupBy: [{ type: core.Input }],
            groupValue: [{ type: core.Input }],
            bufferAmount: [{ type: core.Input }],
            virtualScroll: [{ type: core.Input }],
            selectableGroup: [{ type: core.Input }],
            selectableGroupAsModel: [{ type: core.Input }],
            searchFn: [{ type: core.Input }],
            trackByFn: [{ type: core.Input }],
            clearOnBackspace: [{ type: core.Input }],
            labelForId: [{ type: core.Input }],
            inputAttrs: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            keyDownFn: [{ type: core.Input }],
            typeahead: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-typeahead',] }],
            multiple: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-multiple',] }],
            addTag: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-taggable',] }],
            searchable: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-searchable',] }],
            clearable: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-clearable',] }],
            isOpen: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ng-select-opened',] }],
            items: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            clearSearchOnAdd: [{ type: core.Input }],
            blurEvent: [{ type: core.Output, args: ['blur',] }],
            focusEvent: [{ type: core.Output, args: ['focus',] }],
            changeEvent: [{ type: core.Output, args: ['change',] }],
            openEvent: [{ type: core.Output, args: ['open',] }],
            closeEvent: [{ type: core.Output, args: ['close',] }],
            searchEvent: [{ type: core.Output, args: ['search',] }],
            clearEvent: [{ type: core.Output, args: ['clear',] }],
            addEvent: [{ type: core.Output, args: ['add',] }],
            removeEvent: [{ type: core.Output, args: ['remove',] }],
            scroll: [{ type: core.Output, args: ['scroll',] }],
            scrollToEnd: [{ type: core.Output, args: ['scrollToEnd',] }],
            optionTemplate: [{ type: core.ContentChild, args: [NgOptionTemplateDirective, { read: core.TemplateRef, static: false },] }],
            optgroupTemplate: [{ type: core.ContentChild, args: [NgOptgroupTemplateDirective, { read: core.TemplateRef, static: false },] }],
            labelTemplate: [{ type: core.ContentChild, args: [NgLabelTemplateDirective, { read: core.TemplateRef, static: false },] }],
            multiLabelTemplate: [{ type: core.ContentChild, args: [NgMultiLabelTemplateDirective, { read: core.TemplateRef, static: false },] }],
            headerTemplate: [{ type: core.ContentChild, args: [NgHeaderTemplateDirective, { read: core.TemplateRef, static: false },] }],
            footerTemplate: [{ type: core.ContentChild, args: [NgFooterTemplateDirective, { read: core.TemplateRef, static: false },] }],
            notFoundTemplate: [{ type: core.ContentChild, args: [NgNotFoundTemplateDirective, { read: core.TemplateRef, static: false },] }],
            typeToSearchTemplate: [{ type: core.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: core.TemplateRef, static: false },] }],
            loadingTextTemplate: [{ type: core.ContentChild, args: [NgLoadingTextTemplateDirective, { read: core.TemplateRef, static: false },] }],
            tagTemplate: [{ type: core.ContentChild, args: [NgTagTemplateDirective, { read: core.TemplateRef, static: false },] }],
            loadingSpinnerTemplate: [{ type: core.ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: core.TemplateRef, static: false },] }],
            dropdownPanel: [{ type: core.ViewChild, args: [core.forwardRef((/**
                         * @return {?}
                         */
                        function () { return NgDropdownPanelComponent; })), { static: false },] }],
            searchInput: [{ type: core.ViewChild, args: ['searchInput', { static: true },] }],
            ngOptions: [{ type: core.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
            disabled: [{ type: core.HostBinding, args: ['class.ng-select-disabled',] }],
            filtered: [{ type: core.HostBinding, args: ['class.ng-select-filtered',] }],
            handleKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return NgSelectComponent;
    }());
    if (false) {
        /** @type {?} */
        NgSelectComponent.prototype.bindLabel;
        /** @type {?} */
        NgSelectComponent.prototype.bindValue;
        /** @type {?} */
        NgSelectComponent.prototype.markFirst;
        /** @type {?} */
        NgSelectComponent.prototype.placeholder;
        /** @type {?} */
        NgSelectComponent.prototype.notFoundText;
        /** @type {?} */
        NgSelectComponent.prototype.typeToSearchText;
        /** @type {?} */
        NgSelectComponent.prototype.addTagText;
        /** @type {?} */
        NgSelectComponent.prototype.loadingText;
        /** @type {?} */
        NgSelectComponent.prototype.clearAllText;
        /** @type {?} */
        NgSelectComponent.prototype.dropdownPosition;
        /** @type {?} */
        NgSelectComponent.prototype.appendTo;
        /** @type {?} */
        NgSelectComponent.prototype.loading;
        /** @type {?} */
        NgSelectComponent.prototype.closeOnSelect;
        /** @type {?} */
        NgSelectComponent.prototype.hideSelected;
        /** @type {?} */
        NgSelectComponent.prototype.selectOnTab;
        /** @type {?} */
        NgSelectComponent.prototype.openOnEnter;
        /** @type {?} */
        NgSelectComponent.prototype.maxSelectedItems;
        /** @type {?} */
        NgSelectComponent.prototype.groupBy;
        /** @type {?} */
        NgSelectComponent.prototype.groupValue;
        /** @type {?} */
        NgSelectComponent.prototype.bufferAmount;
        /** @type {?} */
        NgSelectComponent.prototype.virtualScroll;
        /** @type {?} */
        NgSelectComponent.prototype.selectableGroup;
        /** @type {?} */
        NgSelectComponent.prototype.selectableGroupAsModel;
        /** @type {?} */
        NgSelectComponent.prototype.searchFn;
        /** @type {?} */
        NgSelectComponent.prototype.trackByFn;
        /** @type {?} */
        NgSelectComponent.prototype.clearOnBackspace;
        /** @type {?} */
        NgSelectComponent.prototype.labelForId;
        /** @type {?} */
        NgSelectComponent.prototype.inputAttrs;
        /** @type {?} */
        NgSelectComponent.prototype.tabIndex;
        /** @type {?} */
        NgSelectComponent.prototype.readonly;
        /** @type {?} */
        NgSelectComponent.prototype.keyDownFn;
        /** @type {?} */
        NgSelectComponent.prototype.typeahead;
        /** @type {?} */
        NgSelectComponent.prototype.multiple;
        /** @type {?} */
        NgSelectComponent.prototype.addTag;
        /** @type {?} */
        NgSelectComponent.prototype.searchable;
        /** @type {?} */
        NgSelectComponent.prototype.clearable;
        /** @type {?} */
        NgSelectComponent.prototype.isOpen;
        /** @type {?} */
        NgSelectComponent.prototype.blurEvent;
        /** @type {?} */
        NgSelectComponent.prototype.focusEvent;
        /** @type {?} */
        NgSelectComponent.prototype.changeEvent;
        /** @type {?} */
        NgSelectComponent.prototype.openEvent;
        /** @type {?} */
        NgSelectComponent.prototype.closeEvent;
        /** @type {?} */
        NgSelectComponent.prototype.searchEvent;
        /** @type {?} */
        NgSelectComponent.prototype.clearEvent;
        /** @type {?} */
        NgSelectComponent.prototype.addEvent;
        /** @type {?} */
        NgSelectComponent.prototype.removeEvent;
        /** @type {?} */
        NgSelectComponent.prototype.scroll;
        /** @type {?} */
        NgSelectComponent.prototype.scrollToEnd;
        /** @type {?} */
        NgSelectComponent.prototype.optionTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.optgroupTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.labelTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.multiLabelTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.headerTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.footerTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.notFoundTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.typeToSearchTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.loadingTextTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.tagTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.loadingSpinnerTemplate;
        /** @type {?} */
        NgSelectComponent.prototype.dropdownPanel;
        /** @type {?} */
        NgSelectComponent.prototype.searchInput;
        /** @type {?} */
        NgSelectComponent.prototype.ngOptions;
        /** @type {?} */
        NgSelectComponent.prototype.itemsList;
        /** @type {?} */
        NgSelectComponent.prototype.viewPortItems;
        /** @type {?} */
        NgSelectComponent.prototype.searchTerm;
        /** @type {?} */
        NgSelectComponent.prototype.dropdownId;
        /** @type {?} */
        NgSelectComponent.prototype.element;
        /** @type {?} */
        NgSelectComponent.prototype.focused;
        /** @type {?} */
        NgSelectComponent.prototype.escapeHTML;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._items;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._itemsAreUsed;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._defaultLabel;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._primitive;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._manualOpen;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._disabled;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._pressedKeys;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._compareWith;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._clearSearchOnAdd;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._destroy$;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._keyPress$;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._onChange;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._onTouched;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._isComposing;
        /** @type {?} */
        NgSelectComponent.prototype.clearItem;
        /** @type {?} */
        NgSelectComponent.prototype.trackByOption;
        /** @type {?} */
        NgSelectComponent.prototype.classes;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype.autoFocus;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._cd;
        /**
         * @type {?}
         * @private
         */
        NgSelectComponent.prototype._console;
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
    }
    /**
     * @record
     */
    function SelectionModel() { }
    if (false) {
        /** @type {?} */
        SelectionModel.prototype.value;
        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} selectableGroupAsModel
         * @return {?}
         */
        SelectionModel.prototype.select = function (item, multiple, selectableGroupAsModel) { };
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        SelectionModel.prototype.unselect = function (item, multiple) { };
        /**
         * @param {?} keepDisabled
         * @return {?}
         */
        SelectionModel.prototype.clear = function (keepDisabled) { };
    }
    var DefaultSelectionModel = /** @class */ (function () {
        function DefaultSelectionModel() {
            this._selected = [];
        }
        Object.defineProperty(DefaultSelectionModel.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        DefaultSelectionModel.prototype.select = /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        function (item, multiple, groupAsModel) {
            item.selected = true;
            if (groupAsModel || !item.children) {
                this._selected.push(item);
            }
            if (multiple) {
                if (item.parent) {
                    /** @type {?} */
                    var childrenCount = item.parent.children.length;
                    /** @type {?} */
                    var selectedCount = item.parent.children.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.selected; })).length;
                    item.parent.selected = childrenCount === selectedCount;
                }
                else if (item.children) {
                    this._setChildrenSelectedState(item.children, true);
                    this._removeChildren(item);
                    if (!groupAsModel) {
                        this._selected = __spread(this._selected, item.children);
                    }
                }
            }
        };
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        DefaultSelectionModel.prototype.unselect = /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        function (item, multiple) {
            var _a;
            this._selected = this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x !== item; }));
            item.selected = false;
            if (multiple) {
                if (item.parent && item.parent.selected) {
                    /** @type {?} */
                    var children = item.parent.children;
                    this._removeParent(item.parent);
                    this._removeChildren(item.parent);
                    (_a = this._selected).push.apply(_a, __spread(children.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x !== item; }))));
                    item.parent.selected = false;
                }
                else if (item.children) {
                    this._setChildrenSelectedState(item.children, false);
                    this._removeChildren(item);
                }
            }
        };
        /**
         * @param {?} keepDisabled
         * @return {?}
         */
        DefaultSelectionModel.prototype.clear = /**
         * @param {?} keepDisabled
         * @return {?}
         */
        function (keepDisabled) {
            this._selected = keepDisabled ? this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.disabled; })) : [];
        };
        /**
         * @private
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
        DefaultSelectionModel.prototype._setChildrenSelectedState = /**
         * @private
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
        function (children, selected) {
            children.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.selected = selected; }));
        };
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeChildren = /**
         * @private
         * @param {?} parent
         * @return {?}
         */
        function (parent) {
            this._selected = this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.parent !== parent; }));
        };
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeParent = /**
         * @private
         * @param {?} parent
         * @return {?}
         */
        function (parent) {
            this._selected = this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x !== parent; }));
        };
        return DefaultSelectionModel;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DefaultSelectionModel.prototype._selected;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = DefaultSelectionModelFactory;
    var NgSelectModule = /** @class */ (function () {
        function NgSelectModule() {
        }
        NgSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgDropdownPanelComponent,
                            NgOptionComponent,
                            NgSelectComponent,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective,
                            NgLoadingSpinnerTemplateDirective,
                            NgItemLabelDirective
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            NgSelectComponent,
                            NgOptionComponent,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective,
                            NgLoadingSpinnerTemplateDirective
                        ],
                        providers: [
                            { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                        ]
                    },] }
        ];
        return NgSelectModule;
    }());

    exports.NgSelectComponent = NgSelectComponent;
    exports.NgSelectConfig = NgSelectConfig;
    exports.NgSelectModule = NgSelectModule;
    exports.SELECTION_MODEL_FACTORY = SELECTION_MODEL_FACTORY;
    exports.ɵb = DefaultSelectionModelFactory;
    exports.ɵc = DefaultSelectionModel;
    exports.ɵd = NgDropdownPanelService;
    exports.ɵe = NgItemLabelDirective;
    exports.ɵf = NgOptionTemplateDirective;
    exports.ɵg = NgOptgroupTemplateDirective;
    exports.ɵh = NgLabelTemplateDirective;
    exports.ɵi = NgMultiLabelTemplateDirective;
    exports.ɵj = NgHeaderTemplateDirective;
    exports.ɵk = NgFooterTemplateDirective;
    exports.ɵl = NgNotFoundTemplateDirective;
    exports.ɵm = NgTypeToSearchTemplateDirective;
    exports.ɵn = NgLoadingTextTemplateDirective;
    exports.ɵo = NgTagTemplateDirective;
    exports.ɵp = NgLoadingSpinnerTemplateDirective;
    exports.ɵq = NgDropdownPanelComponent;
    exports.ɵr = NgOptionComponent;
    exports.ɵs = ConsoleService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-select-ng-select.umd.js.map
