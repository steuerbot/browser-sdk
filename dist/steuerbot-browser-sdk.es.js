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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var FileSaver_min = createCommonjsModule(function (module, exports) {
(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d);},e.onerror=function(){console.error("could not download file");},e.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null;},j.readAsDataURL(a);}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l);},4E4);}});f.saveAs=a.saveAs=a,(module.exports=a);});


});
var FileSaver_min_1 = FileSaver_min.saveAs;

var config = {
    url: null,
};
// get config out of current script tag
if (typeof document !== 'undefined') {
    var currentScript = document.currentScript;
    if (!currentScript) {
        var scripts = document.getElementsByTagName('script');
        currentScript = scripts[scripts.length - 1];
    }
    if (currentScript.dataset.url) {
        config.url = currentScript.dataset.url;
    }
}
/**
 * Lazy load config
 */
var getConfig = function () {
    return config;
};

var sha512 = function (str) { return __awaiter(void 0, void 0, void 0, function () {
    var buf, hashArray, hashHex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, crypto.subtle.digest('SHA-512', new TextEncoder().encode(str))];
            case 1:
                buf = _a.sent();
                hashArray = Array.from(new Uint8Array(buf));
                hashHex = hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
                return [2 /*return*/, hashHex];
        }
    });
}); };
/**
 * Create a blob out of a base64 string
 * @link https://stackoverflow.com/a/16245768/2422977
 *
 * @param {string} b64Data
 * @param {string} [contentType]
 * @param {number} [sliceSize]
 */
var base64toBlob = function (b64Data, contentType, sliceSize) {
    if (contentType === void 0) { contentType = ''; }
    if (sliceSize === void 0) { sliceSize = 512; }
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

var fetchResponse = function (url, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.method, method = _c === void 0 ? 'GET' : _c, headers = _b.headers, data = _b.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var xhr, dataArray, key, key, promise;
        return __generator(this, function (_d) {
            xhr = new XMLHttpRequest();
            if (method === 'GET' && data) {
                dataArray = [];
                for (key in data) {
                    dataArray.push(key + "=" + encodeURIComponent(data[key]));
                }
                url += "?" + dataArray.join('&');
            }
            xhr.open(method, url);
            if (headers) {
                for (key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
            promise = new Promise(function (resolve, reject) {
                xhr.onerror = function () {
                    reject(new HttpError(xhr.status));
                };
                xhr.onload = function () {
                    if (xhr.status >= 400) {
                        reject(new HttpError(xhr.status));
                        return;
                    }
                    resolve(xhr.response);
                };
            });
            xhr.send();
            // wait for download to finish
            return [2 /*return*/, promise];
        });
    });
};
var fetchJSON = function (url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchResponse(url, options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, JSON.parse(response)];
            }
        });
    });
};

/**
 * Download declaration pdf
 * @param {Object} options - Options object
 * @param {string} username - The username
 * @param {string} password - The password
 * @param {string} submitId - The submit identifier
 * @param {string} [baseUrl] - The base url for the api
 */
var downloadPdf = function (_a) {
    var username = _a.username, password = _a.password, submitId = _a.submitId, baseUrl = _a.baseUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, hash, authHash, _b, filename, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!username) {
                        throw new Error('Steuerbot-Browser-SDK: No username given');
                    }
                    if (!password) {
                        throw new Error('Steuerbot-Browser-SDK: No password given');
                    }
                    if (!submitId) {
                        throw new Error('Steuerbot-Browser-SDK: No submitId given');
                    }
                    baseUrl = baseUrl || getConfig().url;
                    if (!baseUrl) {
                        throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
                    }
                    url = baseUrl + ("/declaration/download?sid=" + submitId);
                    return [4 /*yield*/, sha512(password)];
                case 1:
                    hash = _c.sent();
                    authHash = btoa(username + ":" + hash);
                    return [4 /*yield*/, fetchJSON(url, {
                            headers: {
                                Authorization: "Basic " + authHash,
                            },
                        })];
                case 2:
                    _b = _c.sent(), filename = _b.filename, data = _b.data;
                    try {
                        FileSaver_min_1(base64toBlob(data, 'application/pdf'), filename);
                    }
                    catch (_d) {
                        throw new Error('Steuerbot-Browser-SDK: Error saving pdf');
                    }
                    return [2 /*return*/];
            }
        });
    });
};

/**
 * Reset user password
 * @param {string} id - The user identifier
 * @param {string} password - The new password of user
 * @param {string} [baseUrl] - The base url for the api
 */
var resetPassword = function (_a) {
    var id = _a.id, password = _a.password, baseUrl = _a.baseUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, hash, authHash;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!id) {
                        throw new Error('Steuerbot-Browser-SDK: No id given');
                    }
                    if (!password) {
                        throw new Error('Steuerbot-Browser-SDK: No password given');
                    }
                    baseUrl = baseUrl || getConfig().url;
                    if (!baseUrl) {
                        throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
                    }
                    url = baseUrl + "/password/reset";
                    return [4 /*yield*/, sha512(password)];
                case 1:
                    hash = _b.sent();
                    authHash = btoa(id + ":" + hash);
                    return [4 /*yield*/, fetchResponse(url, {
                            method: 'PUT',
                            headers: {
                                Authorization: "Basic " + authHash,
                            },
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * Request change of email
 * @param {string} newEmail - The new user email
 * @param {string} token - The token needed to execute this action
 * @param {string} [baseUrl] - The base url for the api
 */
var requestEmailChange = function (_a) {
    var newEmail = _a.newEmail, token = _a.token, baseUrl = _a.baseUrl;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!newEmail) {
                        throw new Error('Steuerbot-Browser-SDK: No newEmail given');
                    }
                    if (!token) {
                        throw new Error('Steuerbot-Browser-SDK: No token given');
                    }
                    baseUrl = baseUrl || getConfig().url;
                    if (!baseUrl) {
                        throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
                    }
                    return [4 /*yield*/, fetchResponse(baseUrl + "/passwordless/email/confirm/" + token, {
                            method: 'GET',
                            data: {
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                new_email: newEmail,
                            },
                        })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
/**
 * Delete account
 * @param {string}  token - The token needed to execute this action
 * @param {boolean} [force] - Force account deletion if there are already submissions
 * @param {string}  [baseUrl] - The base url for the api
 */
var deleteAccount = function (_a) {
    var token = _a.token, baseUrl = _a.baseUrl, force = _a.force;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!token) {
                        throw new Error('Steuerbot-Browser-SDK: No token given');
                    }
                    baseUrl = baseUrl || getConfig().url;
                    if (!baseUrl) {
                        throw new Error('Steuerbot-Browser-SDK: No baseUrl given');
                    }
                    return [4 /*yield*/, fetchResponse(baseUrl + "/passwordless/delete/confirm/" + token, {
                            method: 'GET',
                            data: {
                                force: force,
                            },
                        })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};

function HttpError(status) {
    this.name = 'HttpError';
    this.message = "HttpError " + status;
    this.statusCode = status;
}
HttpError.prototype = Error.prototype;

export { HttpError, deleteAccount, downloadPdf, requestEmailChange, resetPassword };
