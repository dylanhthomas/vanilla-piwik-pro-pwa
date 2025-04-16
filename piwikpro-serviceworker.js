(function () {
  'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  // @ts-ignore
  try {
      self['workbox:core:6.5.4'] && _();
  }
  catch (e) { }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const messages$2 = {
      'invalid-value': ({ paramName, validValueDescription, value }) => {
          if (!paramName || !validValueDescription) {
              throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return (`The '${paramName}' parameter was given a value with an ` +
              `unexpected value. ${validValueDescription} Received a value of ` +
              `${JSON.stringify(value)}.`);
      },
      'not-an-array': ({ moduleName, className, funcName, paramName }) => {
          if (!moduleName || !className || !funcName || !paramName) {
              throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className}.${funcName}()' must be an array.`);
      },
      'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          const classNameStr = className ? `${className}.` : '';
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}` +
              `${funcName}()' must be of type ${expectedType}.`);
      },
      'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
          if (!expectedClassName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          const classNameStr = className ? `${className}.` : '';
          if (isReturnValueProblem) {
              return (`The return value from ` +
                  `'${moduleName}.${classNameStr}${funcName}()' ` +
                  `must be an instance of class ${expectedClassName}.`);
          }
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}${funcName}()' ` +
              `must be an instance of class ${expectedClassName}.`);
      },
      'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
          if (!expectedMethod ||
              !paramName ||
              !moduleName ||
              !className ||
              !funcName) {
              throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return (`${moduleName}.${className}.${funcName}() expected the ` +
              `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
      },
      'add-to-cache-list-unexpected-type': ({ entry }) => {
          return (`An unexpected entry was passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
              `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
              `strings with one or more characters, objects with a url property or ` +
              `Request objects.`);
      },
      'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
          if (!firstEntry || !secondEntry) {
              throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
          }
          return (`Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${firstEntry} but different revision details. Workbox is ` +
              `unable to cache and version the asset correctly. Please remove one ` +
              `of the entries.`);
      },
      'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
          if (!thrownErrorMessage) {
              throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
          }
          return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
              `The thrown error message was: '${thrownErrorMessage}'.`);
      },
      'invalid-cache-name': ({ cacheNameId, value }) => {
          if (!cacheNameId) {
              throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return (`You must provide a name containing at least one character for ` +
              `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
              `'${JSON.stringify(value)}'`);
      },
      'unregister-route-but-not-found-with-method': ({ method }) => {
          if (!method) {
              throw new Error(`Unexpected input to ` +
                  `'unregister-route-but-not-found-with-method' error.`);
          }
          return (`The route you're trying to unregister was not  previously ` +
              `registered for the method type '${method}'.`);
      },
      'unregister-route-route-not-registered': () => {
          return (`The route you're trying to unregister was not previously ` +
              `registered.`);
      },
      'queue-replay-failed': ({ name }) => {
          return `Replaying the background sync queue '${name}' failed.`;
      },
      'duplicate-queue-name': ({ name }) => {
          return (`The Queue name '${name}' is already being used. ` +
              `All instances of backgroundSync.Queue must be given unique names.`);
      },
      'expired-test-without-max-age': ({ methodName, paramName }) => {
          return (`The '${methodName}()' method can only be used when the ` +
              `'${paramName}' is used in the constructor.`);
      },
      'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
          return (`The supplied '${paramName}' parameter was an unsupported type. ` +
              `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
              `valid input types.`);
      },
      'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
          return (`The supplied '${paramName}' parameter must be an array of ` +
              `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
              `Please check the call to ${moduleName}.${className}.${funcName}() ` +
              `to fix the issue.`);
      },
      'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
          return (`You must define either config.maxEntries or config.maxAgeSeconds` +
              `in ${moduleName}.${className}.${funcName}`);
      },
      'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
          return (`You must define either config.statuses or config.headers` +
              `in ${moduleName}.${className}.${funcName}`);
      },
      'invalid-string': ({ moduleName, funcName, paramName }) => {
          if (!paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return (`When using strings, the '${paramName}' parameter must start with ` +
              `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
              `Please see the docs for ${moduleName}.${funcName}() for ` +
              `more info.`);
      },
      'channel-name-required': () => {
          return (`You must provide a channelName to construct a ` +
              `BroadcastCacheUpdate instance.`);
      },
      'invalid-responses-are-same-args': () => {
          return (`The arguments passed into responsesAreSame() appear to be ` +
              `invalid. Please ensure valid Responses are used.`);
      },
      'expire-custom-caches-only': () => {
          return (`You must provide a 'cacheName' property when using the ` +
              `expiration plugin with a runtime caching strategy.`);
      },
      'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
              `The Range header provided was "${normalizedRangeHeader}"`);
      },
      'single-range-only': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return (`Multiple ranges are not supported. Please use a  single start ` +
              `value, and optional end value. The Range header provided was ` +
              `"${normalizedRangeHeader}"`);
      },
      'invalid-range-values': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return (`The Range header is missing both start and end values. At least ` +
              `one of those values is needed. The Range header provided was ` +
              `"${normalizedRangeHeader}"`);
      },
      'no-range-header': () => {
          return `No Range header was found in the Request provided.`;
      },
      'range-not-satisfiable': ({ size, start, end }) => {
          return (`The start (${start}) and end (${end}) values in the Range are ` +
              `not satisfiable by the cached response, which is ${size} bytes.`);
      },
      'attempt-to-cache-non-get-request': ({ url, method }) => {
          return (`Unable to cache '${url}' because it is a '${method}' request and ` +
              `only 'GET' requests can be cached.`);
      },
      'cache-put-with-no-response': ({ url }) => {
          return (`There was an attempt to cache '${url}' but the response was not ` +
              `defined.`);
      },
      'no-response': ({ url, error }) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
              message += ` The underlying error is ${error}.`;
          }
          return message;
      },
      'bad-precaching-response': ({ url, status }) => {
          return (`The precaching request for '${url}' failed` +
              (status ? ` with an HTTP status of ${status}.` : `.`));
      },
      'non-precached-url': ({ url }) => {
          return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
              `not precached. Please pass in a URL that is precached instead.`);
      },
      'add-to-cache-list-conflicting-integrities': ({ url }) => {
          return (`Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${url} with different integrity values. Please remove one of them.`);
      },
      'missing-precache-entry': ({ cacheName, url }) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
      },
      'cross-origin-copy-response': ({ origin }) => {
          return (`workbox-core.copyResponse() can only be used with same-origin ` +
              `responses. It was passed a response with origin ${origin}.`);
      },
      'opaque-streams-source': ({ type }) => {
          const message = `One of the workbox-streams sources resulted in an ` +
              `'${type}' response.`;
          if (type === 'opaqueredirect') {
              return (`${message} Please do not use a navigation request that results ` +
                  `in a redirect as a source.`);
          }
          return `${message} Please ensure your sources are CORS-enabled.`;
      },
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const generatorFunction$1 = (code, details = {}) => {
      const message = messages$2[code];
      if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
      }
      return message(details);
  };
  const messageGenerator$1 = generatorFunction$1;

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */
  let WorkboxError$1 = class WorkboxError extends Error {
      /**
       *
       * @param {string} errorCode The error code that
       * identifies this particular error.
       * @param {Object=} details Any relevant arguments
       * that will help developers identify issues should
       * be added as a key on the context object.
       */
      constructor(errorCode, details) {
          const message = messageGenerator$1(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
      }
  };

  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const logger$1 = ((() => {
          // Don't overwrite this value if it's already set.
          // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
          if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
              self.__WB_DISABLE_DEV_LOGS = false;
          }
          let inGroup = false;
          const methodToColorMap = {
              debug: `#7f8c8d`,
              log: `#2ecc71`,
              warn: `#f39c12`,
              error: `#c0392b`,
              groupCollapsed: `#3498db`,
              groupEnd: null, // No colored prefix on groupEnd
          };
          const print = function (method, args) {
              if (self.__WB_DISABLE_DEV_LOGS) {
                  return;
              }
              if (method === 'groupCollapsed') {
                  // Safari doesn't print all console.groupCollapsed() arguments:
                  // https://bugs.webkit.org/show_bug.cgi?id=182754
                  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                      console[method](...args);
                      return;
                  }
              }
              const styles = [
                  `background: ${methodToColorMap[method]}`,
                  `border-radius: 0.5em`,
                  `color: white`,
                  `font-weight: bold`,
                  `padding: 2px 0.5em`,
              ];
              // When in a group, the workbox prefix is not displayed.
              const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
              console[method](...logPrefix, ...args);
              if (method === 'groupCollapsed') {
                  inGroup = true;
              }
              if (method === 'groupEnd') {
                  inGroup = false;
              }
          };
          // eslint-disable-next-line @typescript-eslint/ban-types
          const api = {};
          const loggerMethods = Object.keys(methodToColorMap);
          for (const key of loggerMethods) {
              const method = key;
              api[method] = (...args) => {
                  print(method, args);
              };
          }
          return api;
      })());

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /*
   * This method throws if the supplied value is not an array.
   * The destructed values are required to produce a meaningful error for users.
   * The destructed and restructured object is so it's clear what is
   * needed.
   */
  const isArray$1 = (value, details) => {
      if (!Array.isArray(value)) {
          throw new WorkboxError$1('not-an-array', details);
      }
  };
  const hasMethod$1 = (object, expectedMethod, details) => {
      const type = typeof object[expectedMethod];
      if (type !== 'function') {
          details['expectedMethod'] = expectedMethod;
          throw new WorkboxError$1('missing-a-method', details);
      }
  };
  const isType$1 = (object, expectedType, details) => {
      if (typeof object !== expectedType) {
          details['expectedType'] = expectedType;
          throw new WorkboxError$1('incorrect-type', details);
      }
  };
  const isInstance$1 = (object, 
  // Need the general type to do the check later.
  // eslint-disable-next-line @typescript-eslint/ban-types
  expectedClass, details) => {
      if (!(object instanceof expectedClass)) {
          details['expectedClassName'] = expectedClass.name;
          throw new WorkboxError$1('incorrect-class', details);
      }
  };
  const isOneOf$1 = (value, validValues, details) => {
      if (!validValues.includes(value)) {
          details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError$1('invalid-value', details);
      }
  };
  const isArrayOfClass$1 = (value, 
  // Need general type to do check later.
  expectedClass, // eslint-disable-line
  details) => {
      const error = new WorkboxError$1('not-array-of-class', details);
      if (!Array.isArray(value)) {
          throw error;
      }
      for (const item of value) {
          if (!(item instanceof expectedClass)) {
              throw error;
          }
      }
  };
  const finalAssertExports$1 = {
          hasMethod: hasMethod$1,
          isArray: isArray$1,
          isInstance: isInstance$1,
          isOneOf: isOneOf$1,
          isType: isType$1,
          isArrayOfClass: isArrayOfClass$1,
      };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const getFriendlyURL$1 = (url) => {
      const urlObj = new URL(String(url), location.href);
      // See https://github.com/GoogleChrome/workbox/issues/2323
      // We want to include everything, except for the origin if it's same-origin.
      return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
  };

  const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

  let idbProxyableTypes;
  let cursorAdvanceMethods;
  // This is a function to prevent it throwing up in node environments.
  function getIdbProxyableTypes() {
      return (idbProxyableTypes ||
          (idbProxyableTypes = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
          ]));
  }
  // This is a function to prevent it throwing up in node environments.
  function getCursorAdvanceMethods() {
      return (cursorAdvanceMethods ||
          (cursorAdvanceMethods = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
          ]));
  }
  const cursorRequestMap = new WeakMap();
  const transactionDoneMap = new WeakMap();
  const transactionStoreNamesMap = new WeakMap();
  const transformCache = new WeakMap();
  const reverseTransformCache = new WeakMap();
  function promisifyRequest(request) {
      const promise = new Promise((resolve, reject) => {
          const unlisten = () => {
              request.removeEventListener('success', success);
              request.removeEventListener('error', error);
          };
          const success = () => {
              resolve(wrap(request.result));
              unlisten();
          };
          const error = () => {
              reject(request.error);
              unlisten();
          };
          request.addEventListener('success', success);
          request.addEventListener('error', error);
      });
      promise
          .then((value) => {
          // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
          // (see wrapFunction).
          if (value instanceof IDBCursor) {
              cursorRequestMap.set(value, request);
          }
          // Catching to avoid "Uncaught Promise exceptions"
      })
          .catch(() => { });
      // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
      // is because we create many promises from a single IDBRequest.
      reverseTransformCache.set(promise, request);
      return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
      // Early bail if we've already created a done promise for this transaction.
      if (transactionDoneMap.has(tx))
          return;
      const done = new Promise((resolve, reject) => {
          const unlisten = () => {
              tx.removeEventListener('complete', complete);
              tx.removeEventListener('error', error);
              tx.removeEventListener('abort', error);
          };
          const complete = () => {
              resolve();
              unlisten();
          };
          const error = () => {
              reject(tx.error || new DOMException('AbortError', 'AbortError'));
              unlisten();
          };
          tx.addEventListener('complete', complete);
          tx.addEventListener('error', error);
          tx.addEventListener('abort', error);
      });
      // Cache it for later retrieval.
      transactionDoneMap.set(tx, done);
  }
  let idbProxyTraps = {
      get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
              // Special handling for transaction.done.
              if (prop === 'done')
                  return transactionDoneMap.get(target);
              // Polyfill for objectStoreNames because of Edge.
              if (prop === 'objectStoreNames') {
                  return target.objectStoreNames || transactionStoreNamesMap.get(target);
              }
              // Make tx.store return the only store in the transaction, or undefined if there are many.
              if (prop === 'store') {
                  return receiver.objectStoreNames[1]
                      ? undefined
                      : receiver.objectStore(receiver.objectStoreNames[0]);
              }
          }
          // Else transform whatever we get back.
          return wrap(target[prop]);
      },
      set(target, prop, value) {
          target[prop] = value;
          return true;
      },
      has(target, prop) {
          if (target instanceof IDBTransaction &&
              (prop === 'done' || prop === 'store')) {
              return true;
          }
          return prop in target;
      },
  };
  function replaceTraps(callback) {
      idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
      // Due to expected object equality (which is enforced by the caching in `wrap`), we
      // only create one new func per func.
      // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
      if (func === IDBDatabase.prototype.transaction &&
          !('objectStoreNames' in IDBTransaction.prototype)) {
          return function (storeNames, ...args) {
              const tx = func.call(unwrap(this), storeNames, ...args);
              transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
              return wrap(tx);
          };
      }
      // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
      // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
      // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
      // with real promises, so each advance methods returns a new promise for the cursor object, or
      // undefined if the end of the cursor has been reached.
      if (getCursorAdvanceMethods().includes(func)) {
          return function (...args) {
              // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.
              func.apply(unwrap(this), args);
              return wrap(cursorRequestMap.get(this));
          };
      }
      return function (...args) {
          // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
          // the original object.
          return wrap(func.apply(unwrap(this), args));
      };
  }
  function transformCachableValue(value) {
      if (typeof value === 'function')
          return wrapFunction(value);
      // This doesn't return, it just creates a 'done' promise for the transaction,
      // which is later returned for transaction.done (see idbObjectHandler).
      if (value instanceof IDBTransaction)
          cacheDonePromiseForTransaction(value);
      if (instanceOfAny(value, getIdbProxyableTypes()))
          return new Proxy(value, idbProxyTraps);
      // Return the same value back if we're not going to transform it.
      return value;
  }
  function wrap(value) {
      // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
      // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
      if (value instanceof IDBRequest)
          return promisifyRequest(value);
      // If we've already transformed this value before, reuse the transformed value.
      // This is faster, but it also provides object equality.
      if (transformCache.has(value))
          return transformCache.get(value);
      const newValue = transformCachableValue(value);
      // Not all types are transformed.
      // These may be primitive types, so they can't be WeakMap keys.
      if (newValue !== value) {
          transformCache.set(value, newValue);
          reverseTransformCache.set(newValue, value);
      }
      return newValue;
  }
  const unwrap = (value) => reverseTransformCache.get(value);

  /**
   * Open a database.
   *
   * @param name Name of the database.
   * @param version Schema version.
   * @param callbacks Additional callbacks.
   */
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
      const request = indexedDB.open(name, version);
      const openPromise = wrap(request);
      if (upgrade) {
          request.addEventListener('upgradeneeded', (event) => {
              upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
          });
      }
      if (blocked) {
          request.addEventListener('blocked', (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event.newVersion, event));
      }
      openPromise
          .then((db) => {
          if (terminated)
              db.addEventListener('close', () => terminated());
          if (blocking) {
              db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
          }
      })
          .catch(() => { });
      return openPromise;
  }

  const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
  const writeMethods = ['put', 'add', 'delete', 'clear'];
  const cachedMethods = new Map();
  function getMethod(target, prop) {
      if (!(target instanceof IDBDatabase &&
          !(prop in target) &&
          typeof prop === 'string')) {
          return;
      }
      if (cachedMethods.get(prop))
          return cachedMethods.get(prop);
      const targetFuncName = prop.replace(/FromIndex$/, '');
      const useIndex = prop !== targetFuncName;
      const isWrite = writeMethods.includes(targetFuncName);
      if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
          !(isWrite || readMethods.includes(targetFuncName))) {
          return;
      }
      const method = async function (storeName, ...args) {
          // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
          const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
          let target = tx.store;
          if (useIndex)
              target = target.index(args.shift());
          // Must reject if op rejects.
          // If it's a write operation, must reject if tx.done rejects.
          // Must reject with op rejection first.
          // Must resolve with op value.
          // Must handle both promises (no unhandled rejections)
          return (await Promise.all([
              target[targetFuncName](...args),
              isWrite && tx.done,
          ]))[0];
      };
      cachedMethods.set(prop, method);
      return method;
  }
  replaceTraps((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
  }));

  // @ts-ignore
  try {
      self['workbox:background-sync:6.5.4'] && _();
  }
  catch (e) { }

  /*
    Copyright 2021 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const DB_VERSION = 3;
  const DB_NAME = 'workbox-background-sync';
  const REQUEST_OBJECT_STORE_NAME = 'requests';
  const QUEUE_NAME_INDEX = 'queueName';
  /**
   * A class to interact directly an IndexedDB created specifically to save and
   * retrieve QueueStoreEntries. This class encapsulates all the schema details
   * to store the representation of a Queue.
   *
   * @private
   */
  class QueueDb {
      constructor() {
          this._db = null;
      }
      /**
       * Add QueueStoreEntry to underlying db.
       *
       * @param {UnidentifiedQueueStoreEntry} entry
       */
      async addEntry(entry) {
          const db = await this.getDb();
          const tx = db.transaction(REQUEST_OBJECT_STORE_NAME, 'readwrite', {
              durability: 'relaxed',
          });
          await tx.store.add(entry);
          await tx.done;
      }
      /**
       * Returns the first entry id in the ObjectStore.
       *
       * @return {number | undefined}
       */
      async getFirstEntryId() {
          const db = await this.getDb();
          const cursor = await db
              .transaction(REQUEST_OBJECT_STORE_NAME)
              .store.openCursor();
          return cursor === null || cursor === void 0 ? void 0 : cursor.value.id;
      }
      /**
       * Get all the entries filtered by index
       *
       * @param queueName
       * @return {Promise<QueueStoreEntry[]>}
       */
      async getAllEntriesByQueueName(queueName) {
          const db = await this.getDb();
          const results = await db.getAllFromIndex(REQUEST_OBJECT_STORE_NAME, QUEUE_NAME_INDEX, IDBKeyRange.only(queueName));
          return results ? results : new Array();
      }
      /**
       * Returns the number of entries filtered by index
       *
       * @param queueName
       * @return {Promise<number>}
       */
      async getEntryCountByQueueName(queueName) {
          const db = await this.getDb();
          return db.countFromIndex(REQUEST_OBJECT_STORE_NAME, QUEUE_NAME_INDEX, IDBKeyRange.only(queueName));
      }
      /**
       * Deletes a single entry by id.
       *
       * @param {number} id the id of the entry to be deleted
       */
      async deleteEntry(id) {
          const db = await this.getDb();
          await db.delete(REQUEST_OBJECT_STORE_NAME, id);
      }
      /**
       *
       * @param queueName
       * @returns {Promise<QueueStoreEntry | undefined>}
       */
      async getFirstEntryByQueueName(queueName) {
          return await this.getEndEntryFromIndex(IDBKeyRange.only(queueName), 'next');
      }
      /**
       *
       * @param queueName
       * @returns {Promise<QueueStoreEntry | undefined>}
       */
      async getLastEntryByQueueName(queueName) {
          return await this.getEndEntryFromIndex(IDBKeyRange.only(queueName), 'prev');
      }
      /**
       * Returns either the first or the last entries, depending on direction.
       * Filtered by index.
       *
       * @param {IDBCursorDirection} direction
       * @param {IDBKeyRange} query
       * @return {Promise<QueueStoreEntry | undefined>}
       * @private
       */
      async getEndEntryFromIndex(query, direction) {
          const db = await this.getDb();
          const cursor = await db
              .transaction(REQUEST_OBJECT_STORE_NAME)
              .store.index(QUEUE_NAME_INDEX)
              .openCursor(query, direction);
          return cursor === null || cursor === void 0 ? void 0 : cursor.value;
      }
      /**
       * Returns an open connection to the database.
       *
       * @private
       */
      async getDb() {
          if (!this._db) {
              this._db = await openDB(DB_NAME, DB_VERSION, {
                  upgrade: this._upgradeDb,
              });
          }
          return this._db;
      }
      /**
       * Upgrades QueueDB
       *
       * @param {IDBPDatabase<QueueDBSchema>} db
       * @param {number} oldVersion
       * @private
       */
      _upgradeDb(db, oldVersion) {
          if (oldVersion > 0 && oldVersion < DB_VERSION) {
              if (db.objectStoreNames.contains(REQUEST_OBJECT_STORE_NAME)) {
                  db.deleteObjectStore(REQUEST_OBJECT_STORE_NAME);
              }
          }
          const objStore = db.createObjectStore(REQUEST_OBJECT_STORE_NAME, {
              autoIncrement: true,
              keyPath: 'id',
          });
          objStore.createIndex(QUEUE_NAME_INDEX, QUEUE_NAME_INDEX, { unique: false });
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * A class to manage storing requests from a Queue in IndexedDB,
   * indexed by their queue name for easier access.
   *
   * Most developers will not need to access this class directly;
   * it is exposed for advanced use cases.
   */
  class QueueStore {
      /**
       * Associates this instance with a Queue instance, so entries added can be
       * identified by their queue name.
       *
       * @param {string} queueName
       */
      constructor(queueName) {
          this._queueName = queueName;
          this._queueDb = new QueueDb();
      }
      /**
       * Append an entry last in the queue.
       *
       * @param {Object} entry
       * @param {Object} entry.requestData
       * @param {number} [entry.timestamp]
       * @param {Object} [entry.metadata]
       */
      async pushEntry(entry) {
          {
              finalAssertExports$1.isType(entry, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'QueueStore',
                  funcName: 'pushEntry',
                  paramName: 'entry',
              });
              finalAssertExports$1.isType(entry.requestData, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'QueueStore',
                  funcName: 'pushEntry',
                  paramName: 'entry.requestData',
              });
          }
          // Don't specify an ID since one is automatically generated.
          delete entry.id;
          entry.queueName = this._queueName;
          await this._queueDb.addEntry(entry);
      }
      /**
       * Prepend an entry first in the queue.
       *
       * @param {Object} entry
       * @param {Object} entry.requestData
       * @param {number} [entry.timestamp]
       * @param {Object} [entry.metadata]
       */
      async unshiftEntry(entry) {
          {
              finalAssertExports$1.isType(entry, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'QueueStore',
                  funcName: 'unshiftEntry',
                  paramName: 'entry',
              });
              finalAssertExports$1.isType(entry.requestData, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'QueueStore',
                  funcName: 'unshiftEntry',
                  paramName: 'entry.requestData',
              });
          }
          const firstId = await this._queueDb.getFirstEntryId();
          if (firstId) {
              // Pick an ID one less than the lowest ID in the object store.
              entry.id = firstId - 1;
          }
          else {
              // Otherwise let the auto-incrementor assign the ID.
              delete entry.id;
          }
          entry.queueName = this._queueName;
          await this._queueDb.addEntry(entry);
      }
      /**
       * Removes and returns the last entry in the queue matching the `queueName`.
       *
       * @return {Promise<QueueStoreEntry|undefined>}
       */
      async popEntry() {
          return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName));
      }
      /**
       * Removes and returns the first entry in the queue matching the `queueName`.
       *
       * @return {Promise<QueueStoreEntry|undefined>}
       */
      async shiftEntry() {
          return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName));
      }
      /**
       * Returns all entries in the store matching the `queueName`.
       *
       * @param {Object} options See {@link workbox-background-sync.Queue~getAll}
       * @return {Promise<Array<Object>>}
       */
      async getAll() {
          return await this._queueDb.getAllEntriesByQueueName(this._queueName);
      }
      /**
       * Returns the number of entries in the store matching the `queueName`.
       *
       * @param {Object} options See {@link workbox-background-sync.Queue~size}
       * @return {Promise<number>}
       */
      async size() {
          return await this._queueDb.getEntryCountByQueueName(this._queueName);
      }
      /**
       * Deletes the entry for the given ID.
       *
       * WARNING: this method does not ensure the deleted entry belongs to this
       * queue (i.e. matches the `queueName`). But this limitation is acceptable
       * as this class is not publicly exposed. An additional check would make
       * this method slower than it needs to be.
       *
       * @param {number} id
       */
      async deleteEntry(id) {
          await this._queueDb.deleteEntry(id);
      }
      /**
       * Removes and returns the first or last entry in the queue (based on the
       * `direction` argument) matching the `queueName`.
       *
       * @return {Promise<QueueStoreEntry|undefined>}
       * @private
       */
      async _removeEntry(entry) {
          if (entry) {
              await this.deleteEntry(entry.id);
          }
          return entry;
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const serializableProperties = [
      'method',
      'referrer',
      'referrerPolicy',
      'mode',
      'credentials',
      'cache',
      'redirect',
      'integrity',
      'keepalive',
  ];
  /**
   * A class to make it easier to serialize and de-serialize requests so they
   * can be stored in IndexedDB.
   *
   * Most developers will not need to access this class directly;
   * it is exposed for advanced use cases.
   */
  class StorableRequest {
      /**
       * Converts a Request object to a plain object that can be structured
       * cloned or JSON-stringified.
       *
       * @param {Request} request
       * @return {Promise<StorableRequest>}
       */
      static async fromRequest(request) {
          const requestData = {
              url: request.url,
              headers: {},
          };
          // Set the body if present.
          if (request.method !== 'GET') {
              // Use ArrayBuffer to support non-text request bodies.
              // NOTE: we can't use Blobs becuse Safari doesn't support storing
              // Blobs in IndexedDB in some cases:
              // https://github.com/dfahlander/Dexie.js/issues/618#issuecomment-398348457
              requestData.body = await request.clone().arrayBuffer();
          }
          // Convert the headers from an iterable to an object.
          for (const [key, value] of request.headers.entries()) {
              requestData.headers[key] = value;
          }
          // Add all other serializable request properties
          for (const prop of serializableProperties) {
              if (request[prop] !== undefined) {
                  requestData[prop] = request[prop];
              }
          }
          return new StorableRequest(requestData);
      }
      /**
       * Accepts an object of request data that can be used to construct a
       * `Request` but can also be stored in IndexedDB.
       *
       * @param {Object} requestData An object of request data that includes the
       *     `url` plus any relevant properties of
       *     [requestInit]{@link https://fetch.spec.whatwg.org/#requestinit}.
       */
      constructor(requestData) {
          {
              finalAssertExports$1.isType(requestData, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'StorableRequest',
                  funcName: 'constructor',
                  paramName: 'requestData',
              });
              finalAssertExports$1.isType(requestData.url, 'string', {
                  moduleName: 'workbox-background-sync',
                  className: 'StorableRequest',
                  funcName: 'constructor',
                  paramName: 'requestData.url',
              });
          }
          // If the request's mode is `navigate`, convert it to `same-origin` since
          // navigation requests can't be constructed via script.
          if (requestData['mode'] === 'navigate') {
              requestData['mode'] = 'same-origin';
          }
          this._requestData = requestData;
      }
      /**
       * Returns a deep clone of the instances `_requestData` object.
       *
       * @return {Object}
       */
      toObject() {
          const requestData = Object.assign({}, this._requestData);
          requestData.headers = Object.assign({}, this._requestData.headers);
          if (requestData.body) {
              requestData.body = requestData.body.slice(0);
          }
          return requestData;
      }
      /**
       * Converts this instance to a Request.
       *
       * @return {Request}
       */
      toRequest() {
          return new Request(this._requestData.url, this._requestData);
      }
      /**
       * Creates and returns a deep clone of the instance.
       *
       * @return {StorableRequest}
       */
      clone() {
          return new StorableRequest(this.toObject());
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const TAG_PREFIX = 'workbox-background-sync';
  const MAX_RETENTION_TIME$1 = 60 * 24 * 7; // 7 days in minutes
  const queueNames = new Set();
  /**
   * Converts a QueueStore entry into the format exposed by Queue. This entails
   * converting the request data into a real request and omitting the `id` and
   * `queueName` properties.
   *
   * @param {UnidentifiedQueueStoreEntry} queueStoreEntry
   * @return {Queue}
   * @private
   */
  const convertEntry = (queueStoreEntry) => {
      const queueEntry = {
          request: new StorableRequest(queueStoreEntry.requestData).toRequest(),
          timestamp: queueStoreEntry.timestamp,
      };
      if (queueStoreEntry.metadata) {
          queueEntry.metadata = queueStoreEntry.metadata;
      }
      return queueEntry;
  };
  /**
   * A class to manage storing failed requests in IndexedDB and retrying them
   * later. All parts of the storing and replaying process are observable via
   * callbacks.
   *
   * @memberof workbox-background-sync
   */
  class Queue {
      /**
       * Creates an instance of Queue with the given options
       *
       * @param {string} name The unique name for this queue. This name must be
       *     unique as it's used to register sync events and store requests
       *     in IndexedDB specific to this instance. An error will be thrown if
       *     a duplicate name is detected.
       * @param {Object} [options]
       * @param {Function} [options.onSync] A function that gets invoked whenever
       *     the 'sync' event fires. The function is invoked with an object
       *     containing the `queue` property (referencing this instance), and you
       *     can use the callback to customize the replay behavior of the queue.
       *     When not set the `replayRequests()` method is called.
       *     Note: if the replay fails after a sync event, make sure you throw an
       *     error, so the browser knows to retry the sync event later.
       * @param {number} [options.maxRetentionTime=7 days] The amount of time (in
       *     minutes) a request may be retried. After this amount of time has
       *     passed, the request will be deleted from the queue.
       * @param {boolean} [options.forceSyncFallback=false] If `true`, instead
       *     of attempting to use background sync events, always attempt to replay
       *     queued request at service worker startup. Most folks will not need
       *     this, unless you explicitly target a runtime like Electron that
       *     exposes the interfaces for background sync, but does not have a working
       *     implementation.
       */
      constructor(name, { forceSyncFallback, onSync, maxRetentionTime } = {}) {
          this._syncInProgress = false;
          this._requestsAddedDuringSync = false;
          // Ensure the store name is not already being used
          if (queueNames.has(name)) {
              throw new WorkboxError$1('duplicate-queue-name', { name });
          }
          else {
              queueNames.add(name);
          }
          this._name = name;
          this._onSync = onSync || this.replayRequests;
          this._maxRetentionTime = maxRetentionTime || MAX_RETENTION_TIME$1;
          this._forceSyncFallback = Boolean(forceSyncFallback);
          this._queueStore = new QueueStore(this._name);
          this._addSyncListener();
      }
      /**
       * @return {string}
       */
      get name() {
          return this._name;
      }
      /**
       * Stores the passed request in IndexedDB (with its timestamp and any
       * metadata) at the end of the queue.
       *
       * @param {QueueEntry} entry
       * @param {Request} entry.request The request to store in the queue.
       * @param {Object} [entry.metadata] Any metadata you want associated with the
       *     stored request. When requests are replayed you'll have access to this
       *     metadata object in case you need to modify the request beforehand.
       * @param {number} [entry.timestamp] The timestamp (Epoch time in
       *     milliseconds) when the request was first added to the queue. This is
       *     used along with `maxRetentionTime` to remove outdated requests. In
       *     general you don't need to set this value, as it's automatically set
       *     for you (defaulting to `Date.now()`), but you can update it if you
       *     don't want particular requests to expire.
       */
      async pushRequest(entry) {
          {
              finalAssertExports$1.isType(entry, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'Queue',
                  funcName: 'pushRequest',
                  paramName: 'entry',
              });
              finalAssertExports$1.isInstance(entry.request, Request, {
                  moduleName: 'workbox-background-sync',
                  className: 'Queue',
                  funcName: 'pushRequest',
                  paramName: 'entry.request',
              });
          }
          await this._addRequest(entry, 'push');
      }
      /**
       * Stores the passed request in IndexedDB (with its timestamp and any
       * metadata) at the beginning of the queue.
       *
       * @param {QueueEntry} entry
       * @param {Request} entry.request The request to store in the queue.
       * @param {Object} [entry.metadata] Any metadata you want associated with the
       *     stored request. When requests are replayed you'll have access to this
       *     metadata object in case you need to modify the request beforehand.
       * @param {number} [entry.timestamp] The timestamp (Epoch time in
       *     milliseconds) when the request was first added to the queue. This is
       *     used along with `maxRetentionTime` to remove outdated requests. In
       *     general you don't need to set this value, as it's automatically set
       *     for you (defaulting to `Date.now()`), but you can update it if you
       *     don't want particular requests to expire.
       */
      async unshiftRequest(entry) {
          {
              finalAssertExports$1.isType(entry, 'object', {
                  moduleName: 'workbox-background-sync',
                  className: 'Queue',
                  funcName: 'unshiftRequest',
                  paramName: 'entry',
              });
              finalAssertExports$1.isInstance(entry.request, Request, {
                  moduleName: 'workbox-background-sync',
                  className: 'Queue',
                  funcName: 'unshiftRequest',
                  paramName: 'entry.request',
              });
          }
          await this._addRequest(entry, 'unshift');
      }
      /**
       * Removes and returns the last request in the queue (along with its
       * timestamp and any metadata). The returned object takes the form:
       * `{request, timestamp, metadata}`.
       *
       * @return {Promise<QueueEntry | undefined>}
       */
      async popRequest() {
          return this._removeRequest('pop');
      }
      /**
       * Removes and returns the first request in the queue (along with its
       * timestamp and any metadata). The returned object takes the form:
       * `{request, timestamp, metadata}`.
       *
       * @return {Promise<QueueEntry | undefined>}
       */
      async shiftRequest() {
          return this._removeRequest('shift');
      }
      /**
       * Returns all the entries that have not expired (per `maxRetentionTime`).
       * Any expired entries are removed from the queue.
       *
       * @return {Promise<Array<QueueEntry>>}
       */
      async getAll() {
          const allEntries = await this._queueStore.getAll();
          const now = Date.now();
          const unexpiredEntries = [];
          for (const entry of allEntries) {
              // Ignore requests older than maxRetentionTime. Call this function
              // recursively until an unexpired request is found.
              const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1000;
              if (now - entry.timestamp > maxRetentionTimeInMs) {
                  await this._queueStore.deleteEntry(entry.id);
              }
              else {
                  unexpiredEntries.push(convertEntry(entry));
              }
          }
          return unexpiredEntries;
      }
      /**
       * Returns the number of entries present in the queue.
       * Note that expired entries (per `maxRetentionTime`) are also included in this count.
       *
       * @return {Promise<number>}
       */
      async size() {
          return await this._queueStore.size();
      }
      /**
       * Adds the entry to the QueueStore and registers for a sync event.
       *
       * @param {Object} entry
       * @param {Request} entry.request
       * @param {Object} [entry.metadata]
       * @param {number} [entry.timestamp=Date.now()]
       * @param {string} operation ('push' or 'unshift')
       * @private
       */
      async _addRequest({ request, metadata, timestamp = Date.now() }, operation) {
          const storableRequest = await StorableRequest.fromRequest(request.clone());
          const entry = {
              requestData: storableRequest.toObject(),
              timestamp,
          };
          // Only include metadata if it's present.
          if (metadata) {
              entry.metadata = metadata;
          }
          switch (operation) {
              case 'push':
                  await this._queueStore.pushEntry(entry);
                  break;
              case 'unshift':
                  await this._queueStore.unshiftEntry(entry);
                  break;
          }
          {
              logger$1.log(`Request for '${getFriendlyURL$1(request.url)}' has ` +
                  `been added to background sync queue '${this._name}'.`);
          }
          // Don't register for a sync if we're in the middle of a sync. Instead,
          // we wait until the sync is complete and call register if
          // `this._requestsAddedDuringSync` is true.
          if (this._syncInProgress) {
              this._requestsAddedDuringSync = true;
          }
          else {
              await this.registerSync();
          }
      }
      /**
       * Removes and returns the first or last (depending on `operation`) entry
       * from the QueueStore that's not older than the `maxRetentionTime`.
       *
       * @param {string} operation ('pop' or 'shift')
       * @return {Object|undefined}
       * @private
       */
      async _removeRequest(operation) {
          const now = Date.now();
          let entry;
          switch (operation) {
              case 'pop':
                  entry = await this._queueStore.popEntry();
                  break;
              case 'shift':
                  entry = await this._queueStore.shiftEntry();
                  break;
          }
          if (entry) {
              // Ignore requests older than maxRetentionTime. Call this function
              // recursively until an unexpired request is found.
              const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1000;
              if (now - entry.timestamp > maxRetentionTimeInMs) {
                  return this._removeRequest(operation);
              }
              return convertEntry(entry);
          }
          else {
              return undefined;
          }
      }
      /**
       * Loops through each request in the queue and attempts to re-fetch it.
       * If any request fails to re-fetch, it's put back in the same position in
       * the queue (which registers a retry for the next sync event).
       */
      async replayRequests() {
          let entry;
          while ((entry = await this.shiftRequest())) {
              try {
                  await fetch(entry.request.clone());
                  if ("development" !== 'production') {
                      logger$1.log(`Request for '${getFriendlyURL$1(entry.request.url)}' ` +
                          `has been replayed in queue '${this._name}'`);
                  }
              }
              catch (error) {
                  await this.unshiftRequest(entry);
                  {
                      logger$1.log(`Request for '${getFriendlyURL$1(entry.request.url)}' ` +
                          `failed to replay, putting it back in queue '${this._name}'`);
                  }
                  throw new WorkboxError$1('queue-replay-failed', { name: this._name });
              }
          }
          {
              logger$1.log(`All requests in queue '${this.name}' have successfully ` +
                  `replayed; the queue is now empty!`);
          }
      }
      /**
       * Registers a sync event with a tag unique to this instance.
       */
      async registerSync() {
          // See https://github.com/GoogleChrome/workbox/issues/2393
          if ('sync' in self.registration && !this._forceSyncFallback) {
              try {
                  await self.registration.sync.register(`${TAG_PREFIX}:${this._name}`);
              }
              catch (err) {
                  // This means the registration failed for some reason, possibly due to
                  // the user disabling it.
                  {
                      logger$1.warn(`Unable to register sync event for '${this._name}'.`, err);
                  }
              }
          }
      }
      /**
       * In sync-supporting browsers, this adds a listener for the sync event.
       * In non-sync-supporting browsers, or if _forceSyncFallback is true, this
       * will retry the queue on service worker startup.
       *
       * @private
       */
      _addSyncListener() {
          // See https://github.com/GoogleChrome/workbox/issues/2393
          if ('sync' in self.registration && !this._forceSyncFallback) {
              self.addEventListener('sync', (event) => {
                  if (event.tag === `${TAG_PREFIX}:${this._name}`) {
                      {
                          logger$1.log(`Background sync for tag '${event.tag}' ` + `has been received`);
                      }
                      const syncComplete = async () => {
                          this._syncInProgress = true;
                          let syncError;
                          try {
                              await this._onSync({ queue: this });
                          }
                          catch (error) {
                              if (error instanceof Error) {
                                  syncError = error;
                                  // Rethrow the error. Note: the logic in the finally clause
                                  // will run before this gets rethrown.
                                  throw syncError;
                              }
                          }
                          finally {
                              // New items may have been added to the queue during the sync,
                              // so we need to register for a new sync if that's happened...
                              // Unless there was an error during the sync, in which
                              // case the browser will automatically retry later, as long
                              // as `event.lastChance` is not true.
                              if (this._requestsAddedDuringSync &&
                                  !(syncError && !event.lastChance)) {
                                  await this.registerSync();
                              }
                              this._syncInProgress = false;
                              this._requestsAddedDuringSync = false;
                          }
                      };
                      event.waitUntil(syncComplete());
                  }
              });
          }
          else {
              {
                  logger$1.log(`Background sync replaying without background sync event`);
              }
              // If the browser doesn't support background sync, or the developer has
              // opted-in to not using it, retry every time the service worker starts up
              // as a fallback.
              void this._onSync({ queue: this });
          }
      }
      /**
       * Returns the set of queue names. This is primarily used to reset the list
       * of queue names in tests.
       *
       * @return {Set<string>}
       *
       * @private
       */
      static get _queueNames() {
          return queueNames;
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * A class implementing the `fetchDidFail` lifecycle callback. This makes it
   * easier to add failed requests to a background sync Queue.
   *
   * @memberof workbox-background-sync
   */
  class BackgroundSyncPlugin {
      /**
       * @param {string} name See the {@link workbox-background-sync.Queue}
       *     documentation for parameter details.
       * @param {Object} [options] See the
       *     {@link workbox-background-sync.Queue} documentation for
       *     parameter details.
       */
      constructor(name, options) {
          /**
           * @param {Object} options
           * @param {Request} options.request
           * @private
           */
          this.fetchDidFail = async ({ request }) => {
              await this._queue.pushRequest({ request });
          };
          this._queue = new Queue(name, options);
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const getFriendlyURL = (url) => {
      const urlObj = new URL(String(url), location.href);
      // See https://github.com/GoogleChrome/workbox/issues/2323
      // We want to include everything, except for the origin if it's same-origin.
      return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
  };

  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const logger = ((() => {
          // Don't overwrite this value if it's already set.
          // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
          if (!('__WB_DISABLE_DEV_LOGS' in self)) {
              self.__WB_DISABLE_DEV_LOGS = false;
          }
          let inGroup = false;
          const methodToColorMap = {
              debug: `#7f8c8d`,
              log: `#2ecc71`,
              warn: `#f39c12`,
              error: `#c0392b`,
              groupCollapsed: `#3498db`,
              groupEnd: null, // No colored prefix on groupEnd
          };
          const print = function (method, args) {
              if (self.__WB_DISABLE_DEV_LOGS) {
                  return;
              }
              if (method === 'groupCollapsed') {
                  // Safari doesn't print all console.groupCollapsed() arguments:
                  // https://bugs.webkit.org/show_bug.cgi?id=182754
                  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                      console[method](...args);
                      return;
                  }
              }
              const styles = [
                  `background: ${methodToColorMap[method]}`,
                  `border-radius: 0.5em`,
                  `color: white`,
                  `font-weight: bold`,
                  `padding: 2px 0.5em`,
              ];
              // When in a group, the workbox prefix is not displayed.
              const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
              console[method](...logPrefix, ...args);
              if (method === 'groupCollapsed') {
                  inGroup = true;
              }
              if (method === 'groupEnd') {
                  inGroup = false;
              }
          };
          // eslint-disable-next-line @typescript-eslint/ban-types
          const api = {};
          const loggerMethods = Object.keys(methodToColorMap);
          for (const key of loggerMethods) {
              const method = key;
              api[method] = (...args) => {
                  print(method, args);
              };
          }
          return api;
      })());

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const messages$1 = {
      'invalid-value': ({ paramName, validValueDescription, value }) => {
          if (!paramName || !validValueDescription) {
              throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return (`The '${paramName}' parameter was given a value with an ` +
              `unexpected value. ${validValueDescription} Received a value of ` +
              `${JSON.stringify(value)}.`);
      },
      'not-an-array': ({ moduleName, className, funcName, paramName }) => {
          if (!moduleName || !className || !funcName || !paramName) {
              throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className}.${funcName}()' must be an array.`);
      },
      'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          const classNameStr = className ? `${className}.` : '';
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}` +
              `${funcName}()' must be of type ${expectedType}.`);
      },
      'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
          if (!expectedClassName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          const classNameStr = className ? `${className}.` : '';
          if (isReturnValueProblem) {
              return (`The return value from ` +
                  `'${moduleName}.${classNameStr}${funcName}()' ` +
                  `must be an instance of class ${expectedClassName}.`);
          }
          return (`The parameter '${paramName}' passed into ` +
              `'${moduleName}.${classNameStr}${funcName}()' ` +
              `must be an instance of class ${expectedClassName}.`);
      },
      'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
          if (!expectedMethod ||
              !paramName ||
              !moduleName ||
              !className ||
              !funcName) {
              throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return (`${moduleName}.${className}.${funcName}() expected the ` +
              `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
      },
      'add-to-cache-list-unexpected-type': ({ entry }) => {
          return (`An unexpected entry was passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
              `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
              `strings with one or more characters, objects with a url property or ` +
              `Request objects.`);
      },
      'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
          if (!firstEntry || !secondEntry) {
              throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
          }
          return (`Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${firstEntry} but different revision details. Workbox is ` +
              `unable to cache and version the asset correctly. Please remove one ` +
              `of the entries.`);
      },
      'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
          if (!thrownErrorMessage) {
              throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
          }
          return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
              `The thrown error message was: '${thrownErrorMessage}'.`);
      },
      'invalid-cache-name': ({ cacheNameId, value }) => {
          if (!cacheNameId) {
              throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return (`You must provide a name containing at least one character for ` +
              `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
              `'${JSON.stringify(value)}'`);
      },
      'unregister-route-but-not-found-with-method': ({ method }) => {
          if (!method) {
              throw new Error(`Unexpected input to ` +
                  `'unregister-route-but-not-found-with-method' error.`);
          }
          return (`The route you're trying to unregister was not  previously ` +
              `registered for the method type '${method}'.`);
      },
      'unregister-route-route-not-registered': () => {
          return (`The route you're trying to unregister was not previously ` +
              `registered.`);
      },
      'queue-replay-failed': ({ name }) => {
          return `Replaying the background sync queue '${name}' failed.`;
      },
      'duplicate-queue-name': ({ name }) => {
          return (`The Queue name '${name}' is already being used. ` +
              `All instances of backgroundSync.Queue must be given unique names.`);
      },
      'expired-test-without-max-age': ({ methodName, paramName }) => {
          return (`The '${methodName}()' method can only be used when the ` +
              `'${paramName}' is used in the constructor.`);
      },
      'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
          return (`The supplied '${paramName}' parameter was an unsupported type. ` +
              `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
              `valid input types.`);
      },
      'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
          return (`The supplied '${paramName}' parameter must be an array of ` +
              `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
              `Please check the call to ${moduleName}.${className}.${funcName}() ` +
              `to fix the issue.`);
      },
      'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
          return (`You must define either config.maxEntries or config.maxAgeSeconds` +
              `in ${moduleName}.${className}.${funcName}`);
      },
      'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
          return (`You must define either config.statuses or config.headers` +
              `in ${moduleName}.${className}.${funcName}`);
      },
      'invalid-string': ({ moduleName, funcName, paramName }) => {
          if (!paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return (`When using strings, the '${paramName}' parameter must start with ` +
              `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
              `Please see the docs for ${moduleName}.${funcName}() for ` +
              `more info.`);
      },
      'channel-name-required': () => {
          return (`You must provide a channelName to construct a ` +
              `BroadcastCacheUpdate instance.`);
      },
      'invalid-responses-are-same-args': () => {
          return (`The arguments passed into responsesAreSame() appear to be ` +
              `invalid. Please ensure valid Responses are used.`);
      },
      'expire-custom-caches-only': () => {
          return (`You must provide a 'cacheName' property when using the ` +
              `expiration plugin with a runtime caching strategy.`);
      },
      'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
              `The Range header provided was "${normalizedRangeHeader}"`);
      },
      'single-range-only': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return (`Multiple ranges are not supported. Please use a  single start ` +
              `value, and optional end value. The Range header provided was ` +
              `"${normalizedRangeHeader}"`);
      },
      'invalid-range-values': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return (`The Range header is missing both start and end values. At least ` +
              `one of those values is needed. The Range header provided was ` +
              `"${normalizedRangeHeader}"`);
      },
      'no-range-header': () => {
          return `No Range header was found in the Request provided.`;
      },
      'range-not-satisfiable': ({ size, start, end }) => {
          return (`The start (${start}) and end (${end}) values in the Range are ` +
              `not satisfiable by the cached response, which is ${size} bytes.`);
      },
      'attempt-to-cache-non-get-request': ({ url, method }) => {
          return (`Unable to cache '${url}' because it is a '${method}' request and ` +
              `only 'GET' requests can be cached.`);
      },
      'cache-put-with-no-response': ({ url }) => {
          return (`There was an attempt to cache '${url}' but the response was not ` +
              `defined.`);
      },
      'no-response': ({ url, error }) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
              message += ` The underlying error is ${error}.`;
          }
          return message;
      },
      'bad-precaching-response': ({ url, status }) => {
          return (`The precaching request for '${url}' failed` +
              (status ? ` with an HTTP status of ${status}.` : `.`));
      },
      'non-precached-url': ({ url }) => {
          return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
              `not precached. Please pass in a URL that is precached instead.`);
      },
      'add-to-cache-list-conflicting-integrities': ({ url }) => {
          return (`Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${url} with different integrity values. Please remove one of them.`);
      },
      'missing-precache-entry': ({ cacheName, url }) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
      },
      'cross-origin-copy-response': ({ origin }) => {
          return (`workbox-core.copyResponse() can only be used with same-origin ` +
              `responses. It was passed a response with origin ${origin}.`);
      },
      'opaque-streams-source': ({ type }) => {
          const message = `One of the workbox-streams sources resulted in an ` +
              `'${type}' response.`;
          if (type === 'opaqueredirect') {
              return (`${message} Please do not use a navigation request that results ` +
                  `in a redirect as a source.`);
          }
          return `${message} Please ensure your sources are CORS-enabled.`;
      },
  };
  const generatorFunction = (code, details = {}) => {
      const message = messages$1[code];
      if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
      }
      return message(details);
  };
  const messageGenerator = generatorFunction;

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */
  class WorkboxError extends Error {
      /**
       *
       * @param {string} errorCode The error code that
       * identifies this particular error.
       * @param {Object=} details Any relevant arguments
       * that will help developers identify issues should
       * be added as a key on the context object.
       */
      constructor(errorCode, details) {
          const message = messageGenerator(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /*
   * This method throws if the supplied value is not an array.
   * The destructed values are required to produce a meaningful error for users.
   * The destructed and restructured object is so it's clear what is
   * needed.
   */
  const isArray = (value, details) => {
      if (!Array.isArray(value)) {
          throw new WorkboxError('not-an-array', details);
      }
  };
  const hasMethod = (object, expectedMethod, details) => {
      const type = typeof object[expectedMethod];
      if (type !== 'function') {
          details['expectedMethod'] = expectedMethod;
          throw new WorkboxError('missing-a-method', details);
      }
  };
  const isType = (object, expectedType, details) => {
      if (typeof object !== expectedType) {
          details['expectedType'] = expectedType;
          throw new WorkboxError('incorrect-type', details);
      }
  };
  const isInstance = (object, 
  // Need the general type to do the check later.
  // eslint-disable-next-line @typescript-eslint/ban-types
  expectedClass, details) => {
      if (!(object instanceof expectedClass)) {
          details['expectedClassName'] = expectedClass.name;
          throw new WorkboxError('incorrect-class', details);
      }
  };
  const isOneOf = (value, validValues, details) => {
      if (!validValues.includes(value)) {
          details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError('invalid-value', details);
      }
  };
  const isArrayOfClass = (value, 
  // Need general type to do check later.
  expectedClass, // eslint-disable-line
  details) => {
      const error = new WorkboxError('not-array-of-class', details);
      if (!Array.isArray(value)) {
          throw error;
      }
      for (const item of value) {
          if (!(item instanceof expectedClass)) {
              throw error;
          }
      }
  };
  const finalAssertExports = {
          hasMethod,
          isArray,
          isInstance,
          isOneOf,
          isType,
          isArrayOfClass,
      };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const cacheOkAndOpaquePlugin = {
      /**
       * Returns a valid response (to allow caching) if the status is 200 (OK) or
       * 0 (opaque).
       *
       * @param {Object} options
       * @param {Response} options.response
       * @return {Response|null}
       *
       * @private
       */
      cacheWillUpdate: async ({ response }) => {
          if (response.status === 200 || response.status === 0) {
              return response;
          }
          return null;
      },
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const _cacheNameDetails = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: typeof registration !== 'undefined' ? registration.scope : '',
  };
  const _createCacheName = (cacheName) => {
      return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
          .filter((value) => value && value.length > 0)
          .join('-');
  };
  const eachCacheNameDetail = (fn) => {
      for (const key of Object.keys(_cacheNameDetails)) {
          fn(key);
      }
  };
  const cacheNames = {
      updateDetails: (details) => {
          eachCacheNameDetail((key) => {
              if (typeof details[key] === 'string') {
                  _cacheNameDetails[key] = details[key];
              }
          });
      },
      getGoogleAnalyticsName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
      },
      getPrecacheName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.precache);
      },
      getPrefix: () => {
          return _cacheNameDetails.prefix;
      },
      getRuntimeName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.runtime);
      },
      getSuffix: () => {
          return _cacheNameDetails.suffix;
      },
  };

  /*
    Copyright 2020 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  function stripParams(fullURL, ignoreParams) {
      const strippedURL = new URL(fullURL);
      for (const param of ignoreParams) {
          strippedURL.searchParams.delete(param);
      }
      return strippedURL.href;
  }
  /**
   * Matches an item in the cache, ignoring specific URL params. This is similar
   * to the `ignoreSearch` option, but it allows you to ignore just specific
   * params (while continuing to match on the others).
   *
   * @private
   * @param {Cache} cache
   * @param {Request} request
   * @param {Object} matchOptions
   * @param {Array<string>} ignoreParams
   * @return {Promise<Response|undefined>}
   */
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
      const strippedRequestURL = stripParams(request.url, ignoreParams);
      // If the request doesn't include any ignored params, match as normal.
      if (request.url === strippedRequestURL) {
          return cache.match(request, matchOptions);
      }
      // Otherwise, match by comparing keys
      const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
      const cacheKeys = await cache.keys(request, keysOptions);
      for (const cacheKey of cacheKeys) {
          const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
          if (strippedRequestURL === strippedCacheKeyURL) {
              return cache.match(cacheKey, matchOptions);
          }
      }
      return;
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * The Deferred class composes Promises in a way that allows for them to be
   * resolved or rejected from outside the constructor. In most cases promises
   * should be used directly, but Deferreds can be necessary when the logic to
   * resolve a promise must be separate.
   *
   * @private
   */
  class Deferred {
      /**
       * Creates a promise and exposes its resolve and reject functions as methods.
       */
      constructor() {
          this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
          });
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  // Callbacks to be executed whenever there's a quota error.
  // Can't change Function type right now.
  // eslint-disable-next-line @typescript-eslint/ban-types
  const quotaErrorCallbacks = new Set();

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Runs all of the callback functions, one at a time sequentially, in the order
   * in which they were registered.
   *
   * @memberof workbox-core
   * @private
   */
  async function executeQuotaErrorCallbacks() {
      {
          logger.log(`About to run ${quotaErrorCallbacks.size} ` +
              `callbacks to clean up caches.`);
      }
      for (const callback of quotaErrorCallbacks) {
          await callback();
          {
              logger.log(callback, 'is complete.');
          }
      }
      {
          logger.log('Finished running callbacks.');
      }
  }

  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Returns a promise that resolves and the passed number of milliseconds.
   * This utility is an async/await-friendly version of `setTimeout`.
   *
   * @param {number} ms
   * @return {Promise}
   * @private
   */
  function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /*
    Copyright 2020 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  function toRequest(input) {
      return typeof input === 'string' ? new Request(input) : input;
  }
  /**
   * A class created every time a Strategy instance instance calls
   * {@link workbox-strategies.Strategy~handle} or
   * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
   * cache actions around plugin callbacks and keeps track of when the strategy
   * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
   *
   * @memberof workbox-strategies
   */
  class StrategyHandler {
      /**
       * Creates a new instance associated with the passed strategy and event
       * that's handling the request.
       *
       * The constructor also initializes the state that will be passed to each of
       * the plugins handling this request.
       *
       * @param {workbox-strategies.Strategy} strategy
       * @param {Object} options
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params] The return value from the
       *     {@link workbox-routing~matchCallback} (if applicable).
       */
      constructor(strategy, options) {
          this._cacheKeys = {};
          /**
           * The request the strategy is performing (passed to the strategy's
           * `handle()` or `handleAll()` method).
           * @name request
           * @instance
           * @type {Request}
           * @memberof workbox-strategies.StrategyHandler
           */
          /**
           * The event associated with this request.
           * @name event
           * @instance
           * @type {ExtendableEvent}
           * @memberof workbox-strategies.StrategyHandler
           */
          /**
           * A `URL` instance of `request.url` (if passed to the strategy's
           * `handle()` or `handleAll()` method).
           * Note: the `url` param will be present if the strategy was invoked
           * from a workbox `Route` object.
           * @name url
           * @instance
           * @type {URL|undefined}
           * @memberof workbox-strategies.StrategyHandler
           */
          /**
           * A `param` value (if passed to the strategy's
           * `handle()` or `handleAll()` method).
           * Note: the `param` param will be present if the strategy was invoked
           * from a workbox `Route` object and the
           * {@link workbox-routing~matchCallback} returned
           * a truthy value (it will be that value).
           * @name params
           * @instance
           * @type {*|undefined}
           * @memberof workbox-strategies.StrategyHandler
           */
          {
              finalAssertExports.isInstance(options.event, ExtendableEvent, {
                  moduleName: 'workbox-strategies',
                  className: 'StrategyHandler',
                  funcName: 'constructor',
                  paramName: 'options.event',
              });
          }
          Object.assign(this, options);
          this.event = options.event;
          this._strategy = strategy;
          this._handlerDeferred = new Deferred();
          this._extendLifetimePromises = [];
          // Copy the plugins list (since it's mutable on the strategy),
          // so any mutations don't affect this handler instance.
          this._plugins = [...strategy.plugins];
          this._pluginStateMap = new Map();
          for (const plugin of this._plugins) {
              this._pluginStateMap.set(plugin, {});
          }
          this.event.waitUntil(this._handlerDeferred.promise);
      }
      /**
       * Fetches a given request (and invokes any applicable plugin callback
       * methods) using the `fetchOptions` (for non-navigation requests) and
       * `plugins` defined on the `Strategy` object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - `requestWillFetch()`
       * - `fetchDidSucceed()`
       * - `fetchDidFail()`
       *
       * @param {Request|string} input The URL or request to fetch.
       * @return {Promise<Response>}
       */
      async fetch(input) {
          const { event } = this;
          let request = toRequest(input);
          if (request.mode === 'navigate' &&
              event instanceof FetchEvent &&
              event.preloadResponse) {
              const possiblePreloadResponse = (await event.preloadResponse);
              if (possiblePreloadResponse) {
                  {
                      logger.log(`Using a preloaded navigation response for ` +
                          `'${getFriendlyURL(request.url)}'`);
                  }
                  return possiblePreloadResponse;
              }
          }
          // If there is a fetchDidFail plugin, we need to save a clone of the
          // original request before it's either modified by a requestWillFetch
          // plugin or before the original request's body is consumed via fetch().
          const originalRequest = this.hasCallback('fetchDidFail')
              ? request.clone()
              : null;
          try {
              for (const cb of this.iterateCallbacks('requestWillFetch')) {
                  request = await cb({ request: request.clone(), event });
              }
          }
          catch (err) {
              if (err instanceof Error) {
                  throw new WorkboxError('plugin-error-request-will-fetch', {
                      thrownErrorMessage: err.message,
                  });
              }
          }
          // The request can be altered by plugins with `requestWillFetch` making
          // the original request (most likely from a `fetch` event) different
          // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
          const pluginFilteredRequest = request.clone();
          try {
              let fetchResponse;
              // See https://github.com/GoogleChrome/workbox/issues/1796
              fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
              if ("development" !== 'production') {
                  logger.debug(`Network request for ` +
                      `'${getFriendlyURL(request.url)}' returned a response with ` +
                      `status '${fetchResponse.status}'.`);
              }
              for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                  fetchResponse = await callback({
                      event,
                      request: pluginFilteredRequest,
                      response: fetchResponse,
                  });
              }
              return fetchResponse;
          }
          catch (error) {
              {
                  logger.log(`Network request for ` +
                      `'${getFriendlyURL(request.url)}' threw an error.`, error);
              }
              // `originalRequest` will only exist if a `fetchDidFail` callback
              // is being used (see above).
              if (originalRequest) {
                  await this.runCallbacks('fetchDidFail', {
                      error: error,
                      event,
                      originalRequest: originalRequest.clone(),
                      request: pluginFilteredRequest.clone(),
                  });
              }
              throw error;
          }
      }
      /**
       * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
       * the response generated by `this.fetch()`.
       *
       * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
       * so you do not have to manually call `waitUntil()` on the event.
       *
       * @param {Request|string} input The request or URL to fetch and cache.
       * @return {Promise<Response>}
       */
      async fetchAndCachePut(input) {
          const response = await this.fetch(input);
          const responseClone = response.clone();
          void this.waitUntil(this.cachePut(input, responseClone));
          return response;
      }
      /**
       * Matches a request from the cache (and invokes any applicable plugin
       * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
       * defined on the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cachedResponseWillByUsed()
       *
       * @param {Request|string} key The Request or URL to use as the cache key.
       * @return {Promise<Response|undefined>} A matching response, if found.
       */
      async cacheMatch(key) {
          const request = toRequest(key);
          let cachedResponse;
          const { cacheName, matchOptions } = this._strategy;
          const effectiveRequest = await this.getCacheKey(request, 'read');
          const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
          cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
          {
              if (cachedResponse) {
                  logger.debug(`Found a cached response in '${cacheName}'.`);
              }
              else {
                  logger.debug(`No cached response found in '${cacheName}'.`);
              }
          }
          for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
              cachedResponse =
                  (await callback({
                      cacheName,
                      matchOptions,
                      cachedResponse,
                      request: effectiveRequest,
                      event: this.event,
                  })) || undefined;
          }
          return cachedResponse;
      }
      /**
       * Puts a request/response pair in the cache (and invokes any applicable
       * plugin callback methods) using the `cacheName` and `plugins` defined on
       * the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cacheWillUpdate()
       * - cacheDidUpdate()
       *
       * @param {Request|string} key The request or URL to use as the cache key.
       * @param {Response} response The response to cache.
       * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
       * not be cached, and `true` otherwise.
       */
      async cachePut(key, response) {
          const request = toRequest(key);
          // Run in the next task to avoid blocking other cache reads.
          // https://github.com/w3c/ServiceWorker/issues/1397
          await timeout(0);
          const effectiveRequest = await this.getCacheKey(request, 'write');
          {
              if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                  throw new WorkboxError('attempt-to-cache-non-get-request', {
                      url: getFriendlyURL(effectiveRequest.url),
                      method: effectiveRequest.method,
                  });
              }
              // See https://github.com/GoogleChrome/workbox/issues/2818
              const vary = response.headers.get('Vary');
              if (vary) {
                  logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} ` +
                      `has a 'Vary: ${vary}' header. ` +
                      `Consider setting the {ignoreVary: true} option on your strategy ` +
                      `to ensure cache matching and deletion works as expected.`);
              }
          }
          if (!response) {
              {
                  logger.error(`Cannot cache non-existent response for ` +
                      `'${getFriendlyURL(effectiveRequest.url)}'.`);
              }
              throw new WorkboxError('cache-put-with-no-response', {
                  url: getFriendlyURL(effectiveRequest.url),
              });
          }
          const responseToCache = await this._ensureResponseSafeToCache(response);
          if (!responseToCache) {
              {
                  logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' ` +
                      `will not be cached.`, responseToCache);
              }
              return false;
          }
          const { cacheName, matchOptions } = this._strategy;
          const cache = await self.caches.open(cacheName);
          const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
          const oldResponse = hasCacheUpdateCallback
              ? await cacheMatchIgnoreParams(
              // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
              // feature. Consider into ways to only add this behavior if using
              // precaching.
              cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
              : null;
          {
              logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                  `for ${getFriendlyURL(effectiveRequest.url)}.`);
          }
          try {
              await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
          }
          catch (error) {
              if (error instanceof Error) {
                  // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                  if (error.name === 'QuotaExceededError') {
                      await executeQuotaErrorCallbacks();
                  }
                  throw error;
              }
          }
          for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
              await callback({
                  cacheName,
                  oldResponse,
                  newResponse: responseToCache.clone(),
                  request: effectiveRequest,
                  event: this.event,
              });
          }
          return true;
      }
      /**
       * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
       * executes any of those callbacks found in sequence. The final `Request`
       * object returned by the last plugin is treated as the cache key for cache
       * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
       * been registered, the passed request is returned unmodified
       *
       * @param {Request} request
       * @param {string} mode
       * @return {Promise<Request>}
       */
      async getCacheKey(request, mode) {
          const key = `${request.url} | ${mode}`;
          if (!this._cacheKeys[key]) {
              let effectiveRequest = request;
              for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                  effectiveRequest = toRequest(await callback({
                      mode,
                      request: effectiveRequest,
                      event: this.event,
                      // params has a type any can't change right now.
                      params: this.params, // eslint-disable-line
                  }));
              }
              this._cacheKeys[key] = effectiveRequest;
          }
          return this._cacheKeys[key];
      }
      /**
       * Returns true if the strategy has at least one plugin with the given
       * callback.
       *
       * @param {string} name The name of the callback to check for.
       * @return {boolean}
       */
      hasCallback(name) {
          for (const plugin of this._strategy.plugins) {
              if (name in plugin) {
                  return true;
              }
          }
          return false;
      }
      /**
       * Runs all plugin callbacks matching the given name, in order, passing the
       * given param object (merged ith the current plugin state) as the only
       * argument.
       *
       * Note: since this method runs all plugins, it's not suitable for cases
       * where the return value of a callback needs to be applied prior to calling
       * the next callback. See
       * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
       * below for how to handle that case.
       *
       * @param {string} name The name of the callback to run within each plugin.
       * @param {Object} param The object to pass as the first (and only) param
       *     when executing each callback. This object will be merged with the
       *     current plugin state prior to callback execution.
       */
      async runCallbacks(name, param) {
          for (const callback of this.iterateCallbacks(name)) {
              // TODO(philipwalton): not sure why `any` is needed. It seems like
              // this should work with `as WorkboxPluginCallbackParam[C]`.
              await callback(param);
          }
      }
      /**
       * Accepts a callback and returns an iterable of matching plugin callbacks,
       * where each callback is wrapped with the current handler state (i.e. when
       * you call each callback, whatever object parameter you pass it will
       * be merged with the plugin's current state).
       *
       * @param {string} name The name fo the callback to run
       * @return {Array<Function>}
       */
      *iterateCallbacks(name) {
          for (const plugin of this._strategy.plugins) {
              if (typeof plugin[name] === 'function') {
                  const state = this._pluginStateMap.get(plugin);
                  const statefulCallback = (param) => {
                      const statefulParam = Object.assign(Object.assign({}, param), { state });
                      // TODO(philipwalton): not sure why `any` is needed. It seems like
                      // this should work with `as WorkboxPluginCallbackParam[C]`.
                      return plugin[name](statefulParam);
                  };
                  yield statefulCallback;
              }
          }
      }
      /**
       * Adds a promise to the
       * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
       * of the event event associated with the request being handled (usually a
       * `FetchEvent`).
       *
       * Note: you can await
       * {@link workbox-strategies.StrategyHandler~doneWaiting}
       * to know when all added promises have settled.
       *
       * @param {Promise} promise A promise to add to the extend lifetime promises
       *     of the event that triggered the request.
       */
      waitUntil(promise) {
          this._extendLifetimePromises.push(promise);
          return promise;
      }
      /**
       * Returns a promise that resolves once all promises passed to
       * {@link workbox-strategies.StrategyHandler~waitUntil}
       * have settled.
       *
       * Note: any work done after `doneWaiting()` settles should be manually
       * passed to an event's `waitUntil()` method (not this handler's
       * `waitUntil()` method), otherwise the service worker thread my be killed
       * prior to your work completing.
       */
      async doneWaiting() {
          let promise;
          while ((promise = this._extendLifetimePromises.shift())) {
              await promise;
          }
      }
      /**
       * Stops running the strategy and immediately resolves any pending
       * `waitUntil()` promises.
       */
      destroy() {
          this._handlerDeferred.resolve(null);
      }
      /**
       * This method will call cacheWillUpdate on the available plugins (or use
       * status === 200) to determine if the Response is safe and valid to cache.
       *
       * @param {Request} options.request
       * @param {Response} options.response
       * @return {Promise<Response|undefined>}
       *
       * @private
       */
      async _ensureResponseSafeToCache(response) {
          let responseToCache = response;
          let pluginsUsed = false;
          for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
              responseToCache =
                  (await callback({
                      request: this.request,
                      response: responseToCache,
                      event: this.event,
                  })) || undefined;
              pluginsUsed = true;
              if (!responseToCache) {
                  break;
              }
          }
          if (!pluginsUsed) {
              if (responseToCache && responseToCache.status !== 200) {
                  responseToCache = undefined;
              }
              {
                  if (responseToCache) {
                      if (responseToCache.status !== 200) {
                          if (responseToCache.status === 0) {
                              logger.warn(`The response for '${this.request.url}' ` +
                                  `is an opaque response. The caching strategy that you're ` +
                                  `using will not cache opaque responses by default.`);
                          }
                          else {
                              logger.debug(`The response for '${this.request.url}' ` +
                                  `returned a status code of '${response.status}' and won't ` +
                                  `be cached as a result.`);
                          }
                      }
                  }
              }
          }
          return responseToCache;
      }
  }

  /*
    Copyright 2020 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * An abstract base class that all other strategy classes must extend from:
   *
   * @memberof workbox-strategies
   */
  class Strategy {
      /**
       * Creates a new instance of the strategy and sets all documented option
       * properties as public instance properties.
       *
       * Note: if a custom strategy class extends the base Strategy class and does
       * not need more than these properties, it does not need to define its own
       * constructor.
       *
       * @param {Object} [options]
       * @param {string} [options.cacheName] Cache name to store and retrieve
       * requests. Defaults to the cache names provided by
       * {@link workbox-core.cacheNames}.
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
       * `fetch()` requests made by this strategy.
       * @param {Object} [options.matchOptions] The
       * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
       * for any `cache.match()` or `cache.put()` calls made by this strategy.
       */
      constructor(options = {}) {
          /**
           * Cache name to store and retrieve
           * requests. Defaults to the cache names provided by
           * {@link workbox-core.cacheNames}.
           *
           * @type {string}
           */
          this.cacheName = cacheNames.getRuntimeName(options.cacheName);
          /**
           * The list
           * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
           * used by this strategy.
           *
           * @type {Array<Object>}
           */
          this.plugins = options.plugins || [];
          /**
           * Values passed along to the
           * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
           * of all fetch() requests made by this strategy.
           *
           * @type {Object}
           */
          this.fetchOptions = options.fetchOptions;
          /**
           * The
           * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
           * for any `cache.match()` or `cache.put()` calls made by this strategy.
           *
           * @type {Object}
           */
          this.matchOptions = options.matchOptions;
      }
      /**
       * Perform a request strategy and returns a `Promise` that will resolve with
       * a `Response`, invoking all relevant plugin callbacks.
       *
       * When a strategy instance is registered with a Workbox
       * {@link workbox-routing.Route}, this method is automatically
       * called when the route matches.
       *
       * Alternatively, this method can be used in a standalone `FetchEvent`
       * listener by passing it to `event.respondWith()`.
       *
       * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
       *     properties listed below.
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       */
      handle(options) {
          const [responseDone] = this.handleAll(options);
          return responseDone;
      }
      /**
       * Similar to {@link workbox-strategies.Strategy~handle}, but
       * instead of just returning a `Promise` that resolves to a `Response` it
       * it will return an tuple of `[response, done]` promises, where the former
       * (`response`) is equivalent to what `handle()` returns, and the latter is a
       * Promise that will resolve once any promises that were added to
       * `event.waitUntil()` as part of performing the strategy have completed.
       *
       * You can await the `done` promise to ensure any extra work performed by
       * the strategy (usually caching responses) completes successfully.
       *
       * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
       *     properties listed below.
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       * @return {Array<Promise>} A tuple of [response, done]
       *     promises that can be used to determine when the response resolves as
       *     well as when the handler has completed all its work.
       */
      handleAll(options) {
          // Allow for flexible options to be passed.
          if (options instanceof FetchEvent) {
              options = {
                  event: options,
                  request: options.request,
              };
          }
          const event = options.event;
          const request = typeof options.request === 'string'
              ? new Request(options.request)
              : options.request;
          const params = 'params' in options ? options.params : undefined;
          const handler = new StrategyHandler(this, { event, request, params });
          const responseDone = this._getResponse(handler, request, event);
          const handlerDone = this._awaitComplete(responseDone, handler, request, event);
          // Return an array of promises, suitable for use with Promise.all().
          return [responseDone, handlerDone];
      }
      async _getResponse(handler, request, event) {
          await handler.runCallbacks('handlerWillStart', { event, request });
          let response = undefined;
          try {
              response = await this._handle(request, handler);
              // The "official" Strategy subclasses all throw this error automatically,
              // but in case a third-party Strategy doesn't, ensure that we have a
              // consistent failure when there's no response or an error response.
              if (!response || response.type === 'error') {
                  throw new WorkboxError('no-response', { url: request.url });
              }
          }
          catch (error) {
              if (error instanceof Error) {
                  for (const callback of handler.iterateCallbacks('handlerDidError')) {
                      response = await callback({ error, event, request });
                      if (response) {
                          break;
                      }
                  }
              }
              if (!response) {
                  throw error;
              }
              else {
                  logger.log(`While responding to '${getFriendlyURL(request.url)}', ` +
                      `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                      `a handlerDidError plugin.`);
              }
          }
          for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
              response = await callback({ event, request, response });
          }
          return response;
      }
      async _awaitComplete(responseDone, handler, request, event) {
          let response;
          let error;
          try {
              response = await responseDone;
          }
          catch (error) {
              // Ignore errors, as response errors should be caught via the `response`
              // promise above. The `done` promise will only throw for errors in
              // promises passed to `handler.waitUntil()`.
          }
          try {
              await handler.runCallbacks('handlerDidRespond', {
                  event,
                  request,
                  response,
              });
              await handler.doneWaiting();
          }
          catch (waitUntilError) {
              if (waitUntilError instanceof Error) {
                  error = waitUntilError;
              }
          }
          await handler.runCallbacks('handlerDidComplete', {
              event,
              request,
              response,
              error: error,
          });
          handler.destroy();
          if (error) {
              throw error;
          }
      }
  }
  /**
   * Classes extending the `Strategy` based class should implement this method,
   * and leverage the {@link workbox-strategies.StrategyHandler}
   * arg to perform all fetching and cache logic, which will ensure all relevant
   * cache, cache options, fetch options and plugins are used (per the current
   * strategy instance).
   *
   * @name _handle
   * @instance
   * @abstract
   * @function
   * @param {Request} request
   * @param {workbox-strategies.StrategyHandler} handler
   * @return {Promise<Response>}
   *
   * @memberof workbox-strategies.Strategy
   */

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  const messages = {
      strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
      printFinalResponse: (response) => {
          if (response) {
              logger.groupCollapsed(`View the final response here.`);
              logger.log(response || '[No response returned]');
              logger.groupEnd();
          }
      },
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * An implementation of a
   * [network first](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-first-falling-back-to-cache)
   * request strategy.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#opaque-responses).
   * Opaque responses are are cross-origin requests where the response doesn't
   * support [CORS](https://enable-cors.org/).
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends workbox-strategies.Strategy
   * @memberof workbox-strategies
   */
  class NetworkFirst extends Strategy {
      /**
       * @param {Object} [options]
       * @param {string} [options.cacheName] Cache name to store and retrieve
       * requests. Defaults to cache names provided by
       * {@link workbox-core.cacheNames}.
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
       * `fetch()` requests made by this strategy.
       * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
       * @param {number} [options.networkTimeoutSeconds] If set, any network requests
       * that fail to respond within the timeout will fallback to the cache.
       *
       * This option can be used to combat
       * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
       * scenarios.
       */
      constructor(options = {}) {
          super(options);
          // If this instance contains no plugins with a 'cacheWillUpdate' callback,
          // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
          if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
              this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
          {
              if (this._networkTimeoutSeconds) {
                  finalAssertExports.isType(this._networkTimeoutSeconds, 'number', {
                      moduleName: 'workbox-strategies',
                      className: this.constructor.name,
                      funcName: 'constructor',
                      paramName: 'networkTimeoutSeconds',
                  });
              }
          }
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          const logs = [];
          {
              finalAssertExports.isInstance(request, Request, {
                  moduleName: 'workbox-strategies',
                  className: this.constructor.name,
                  funcName: 'handle',
                  paramName: 'makeRequest',
              });
          }
          const promises = [];
          let timeoutId;
          if (this._networkTimeoutSeconds) {
              const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
              timeoutId = id;
              promises.push(promise);
          }
          const networkPromise = this._getNetworkPromise({
              timeoutId,
              request,
              logs,
              handler,
          });
          promises.push(networkPromise);
          const response = await handler.waitUntil((async () => {
              // Promise.race() will resolve as soon as the first promise resolves.
              return ((await handler.waitUntil(Promise.race(promises))) ||
                  // If Promise.race() resolved with null, it might be due to a network
                  // timeout + a cache miss. If that were to happen, we'd rather wait until
                  // the networkPromise resolves instead of returning null.
                  // Note that it's fine to await an already-resolved promise, so we don't
                  // have to check to see if it's still "in flight".
                  (await networkPromise));
          })());
          {
              logger.groupCollapsed(messages.strategyStart(this.constructor.name, request));
              for (const log of logs) {
                  logger.log(log);
              }
              messages.printFinalResponse(response);
              logger.groupEnd();
          }
          if (!response) {
              throw new WorkboxError('no-response', { url: request.url });
          }
          return response;
      }
      /**
       * @param {Object} options
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs array
       * @param {Event} options.event
       * @return {Promise<Response>}
       *
       * @private
       */
      _getTimeoutPromise({ request, logs, handler, }) {
          let timeoutId;
          const timeoutPromise = new Promise((resolve) => {
              const onNetworkTimeout = async () => {
                  {
                      logs.push(`Timing out the network response at ` +
                          `${this._networkTimeoutSeconds} seconds.`);
                  }
                  resolve(await handler.cacheMatch(request));
              };
              timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
          });
          return {
              promise: timeoutPromise,
              id: timeoutId,
          };
      }
      /**
       * @param {Object} options
       * @param {number|undefined} options.timeoutId
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs Array.
       * @param {Event} options.event
       * @return {Promise<Response>}
       *
       * @private
       */
      async _getNetworkPromise({ timeoutId, request, logs, handler, }) {
          let error;
          let response;
          try {
              response = await handler.fetchAndCachePut(request);
          }
          catch (fetchError) {
              if (fetchError instanceof Error) {
                  error = fetchError;
              }
          }
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          {
              if (response) {
                  logs.push(`Got response from network.`);
              }
              else {
                  logs.push(`Unable to get a response from the network. Will respond ` +
                      `with a cached response.`);
              }
          }
          if (error || !response) {
              response = await handler.cacheMatch(request);
              {
                  if (response) {
                      logs.push(`Found a cached response in the '${this.cacheName}'` + ` cache.`);
                  }
                  else {
                      logs.push(`No response found in the '${this.cacheName}' cache.`);
                  }
              }
          }
          return response;
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * The default HTTP method, 'GET', used when there's no specific method
   * configured for a route.
   *
   * @type {string}
   *
   * @private
   */
  const defaultMethod = 'GET';
  /**
   * The list of valid HTTP methods associated with requests that could be routed.
   *
   * @type {Array<string>}
   *
   * @private
   */
  const validMethods = [
      'DELETE',
      'GET',
      'HEAD',
      'PATCH',
      'POST',
      'PUT',
  ];

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * @param {function()|Object} handler Either a function, or an object with a
   * 'handle' method.
   * @return {Object} An object with a handle method.
   *
   * @private
   */
  const normalizeHandler = (handler) => {
      if (handler && typeof handler === 'object') {
          {
              finalAssertExports.hasMethod(handler, 'handle', {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'handler',
              });
          }
          return handler;
      }
      else {
          {
              finalAssertExports.isType(handler, 'function', {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'handler',
              });
          }
          return { handle: handler };
      }
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * A `Route` consists of a pair of callback functions, "match" and "handler".
   * The "match" callback determine if a route should be used to "handle" a
   * request by returning a non-falsy value if it can. The "handler" callback
   * is called when there is a match and should return a Promise that resolves
   * to a `Response`.
   *
   * @memberof workbox-routing
   */
  class Route {
      /**
       * Constructor for Route class.
       *
       * @param {workbox-routing~matchCallback} match
       * A callback function that determines whether the route matches a given
       * `fetch` event by returning a non-falsy value.
       * @param {workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resolving to a Response.
       * @param {string} [method='GET'] The HTTP method to match the Route
       * against.
       */
      constructor(match, handler, method = defaultMethod) {
          {
              finalAssertExports.isType(match, 'function', {
                  moduleName: 'workbox-routing',
                  className: 'Route',
                  funcName: 'constructor',
                  paramName: 'match',
              });
              if (method) {
                  finalAssertExports.isOneOf(method, validMethods, { paramName: 'method' });
              }
          }
          // These values are referenced directly by Router so cannot be
          // altered by minificaton.
          this.handler = normalizeHandler(handler);
          this.match = match;
          this.method = method;
      }
      /**
       *
       * @param {workbox-routing-handlerCallback} handler A callback
       * function that returns a Promise resolving to a Response
       */
      setCatchHandler(handler) {
          this.catchHandler = normalizeHandler(handler);
      }
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * The Router can be used to process a `FetchEvent` using one or more
   * {@link workbox-routing.Route}, responding with a `Response` if
   * a matching route exists.
   *
   * If no route matches a given a request, the Router will use a "default"
   * handler if one is defined.
   *
   * Should the matching Route throw an error, the Router will use a "catch"
   * handler if one is defined to gracefully deal with issues and respond with a
   * Request.
   *
   * If a request matches multiple routes, the **earliest** registered route will
   * be used to respond to the request.
   *
   * @memberof workbox-routing
   */
  class Router {
      /**
       * Initializes a new Router.
       */
      constructor() {
          this._routes = new Map();
          this._defaultHandlerMap = new Map();
      }
      /**
       * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
       * method name ('GET', etc.) to an array of all the corresponding `Route`
       * instances that are registered.
       */
      get routes() {
          return this._routes;
      }
      /**
       * Adds a fetch event listener to respond to events when a route matches
       * the event's request.
       */
      addFetchListener() {
          // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
          self.addEventListener('fetch', ((event) => {
              const { request } = event;
              const responsePromise = this.handleRequest({ request, event });
              if (responsePromise) {
                  event.respondWith(responsePromise);
              }
          }));
      }
      /**
       * Adds a message event listener for URLs to cache from the window.
       * This is useful to cache resources loaded on the page prior to when the
       * service worker started controlling it.
       *
       * The format of the message data sent from the window should be as follows.
       * Where the `urlsToCache` array may consist of URL strings or an array of
       * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
       *
       * ```
       * {
       *   type: 'CACHE_URLS',
       *   payload: {
       *     urlsToCache: [
       *       './script1.js',
       *       './script2.js',
       *       ['./script3.js', {mode: 'no-cors'}],
       *     ],
       *   },
       * }
       * ```
       */
      addCacheListener() {
          // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
          self.addEventListener('message', ((event) => {
              // event.data is type 'any'
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (event.data && event.data.type === 'CACHE_URLS') {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  const { payload } = event.data;
                  {
                      logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                  }
                  const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                      if (typeof entry === 'string') {
                          entry = [entry];
                      }
                      const request = new Request(...entry);
                      return this.handleRequest({ request, event });
                      // TODO(philipwalton): TypeScript errors without this typecast for
                      // some reason (probably a bug). The real type here should work but
                      // doesn't: `Array<Promise<Response> | undefined>`.
                  })); // TypeScript
                  event.waitUntil(requestPromises);
                  // If a MessageChannel was used, reply to the message on success.
                  if (event.ports && event.ports[0]) {
                      void requestPromises.then(() => event.ports[0].postMessage(true));
                  }
              }
          }));
      }
      /**
       * Apply the routing rules to a FetchEvent object to get a Response from an
       * appropriate Route's handler.
       *
       * @param {Object} options
       * @param {Request} options.request The request to handle.
       * @param {ExtendableEvent} options.event The event that triggered the
       *     request.
       * @return {Promise<Response>|undefined} A promise is returned if a
       *     registered route can handle the request. If there is no matching
       *     route and there's no `defaultHandler`, `undefined` is returned.
       */
      handleRequest({ request, event, }) {
          {
              finalAssertExports.isInstance(request, Request, {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'handleRequest',
                  paramName: 'options.request',
              });
          }
          const url = new URL(request.url, location.href);
          if (!url.protocol.startsWith('http')) {
              {
                  logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
              }
              return;
          }
          const sameOrigin = url.origin === location.origin;
          const { params, route } = this.findMatchingRoute({
              event,
              request,
              sameOrigin,
              url,
          });
          let handler = route && route.handler;
          const debugMessages = [];
          {
              if (handler) {
                  debugMessages.push([`Found a route to handle this request:`, route]);
                  if (params) {
                      debugMessages.push([
                          `Passing the following params to the route's handler:`,
                          params,
                      ]);
                  }
              }
          }
          // If we don't have a handler because there was no matching route, then
          // fall back to defaultHandler if that's defined.
          const method = request.method;
          if (!handler && this._defaultHandlerMap.has(method)) {
              {
                  debugMessages.push(`Failed to find a matching route. Falling ` +
                      `back to the default handler for ${method}.`);
              }
              handler = this._defaultHandlerMap.get(method);
          }
          if (!handler) {
              {
                  // No handler so Workbox will do nothing. If logs is set of debug
                  // i.e. verbose, we should print out this information.
                  logger.debug(`No route found for: ${getFriendlyURL(url)}`);
              }
              return;
          }
          {
              // We have a handler, meaning Workbox is going to handle the route.
              // print the routing details to the console.
              logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
              debugMessages.forEach((msg) => {
                  if (Array.isArray(msg)) {
                      logger.log(...msg);
                  }
                  else {
                      logger.log(msg);
                  }
              });
              logger.groupEnd();
          }
          // Wrap in try and catch in case the handle method throws a synchronous
          // error. It should still callback to the catch handler.
          let responsePromise;
          try {
              responsePromise = handler.handle({ url, request, event, params });
          }
          catch (err) {
              responsePromise = Promise.reject(err);
          }
          // Get route's catch handler, if it exists
          const catchHandler = route && route.catchHandler;
          if (responsePromise instanceof Promise &&
              (this._catchHandler || catchHandler)) {
              responsePromise = responsePromise.catch(async (err) => {
                  // If there's a route catch handler, process that first
                  if (catchHandler) {
                      {
                          // Still include URL here as it will be async from the console group
                          // and may not make sense without the URL
                          logger.groupCollapsed(`Error thrown when responding to: ` +
                              ` ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
                          logger.error(`Error thrown by:`, route);
                          logger.error(err);
                          logger.groupEnd();
                      }
                      try {
                          return await catchHandler.handle({ url, request, event, params });
                      }
                      catch (catchErr) {
                          if (catchErr instanceof Error) {
                              err = catchErr;
                          }
                      }
                  }
                  if (this._catchHandler) {
                      {
                          // Still include URL here as it will be async from the console group
                          // and may not make sense without the URL
                          logger.groupCollapsed(`Error thrown when responding to: ` +
                              ` ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
                          logger.error(`Error thrown by:`, route);
                          logger.error(err);
                          logger.groupEnd();
                      }
                      return this._catchHandler.handle({ url, request, event });
                  }
                  throw err;
              });
          }
          return responsePromise;
      }
      /**
       * Checks a request and URL (and optionally an event) against the list of
       * registered routes, and if there's a match, returns the corresponding
       * route along with any params generated by the match.
       *
       * @param {Object} options
       * @param {URL} options.url
       * @param {boolean} options.sameOrigin The result of comparing `url.origin`
       *     against the current origin.
       * @param {Request} options.request The request to match.
       * @param {Event} options.event The corresponding event.
       * @return {Object} An object with `route` and `params` properties.
       *     They are populated if a matching route was found or `undefined`
       *     otherwise.
       */
      findMatchingRoute({ url, sameOrigin, request, event, }) {
          const routes = this._routes.get(request.method) || [];
          for (const route of routes) {
              let params;
              // route.match returns type any, not possible to change right now.
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const matchResult = route.match({ url, sameOrigin, request, event });
              if (matchResult) {
                  {
                      // Warn developers that using an async matchCallback is almost always
                      // not the right thing to do.
                      if (matchResult instanceof Promise) {
                          logger.warn(`While routing ${getFriendlyURL(url)}, an async ` +
                              `matchCallback function was used. Please convert the ` +
                              `following route to use a synchronous matchCallback function:`, route);
                      }
                  }
                  // See https://github.com/GoogleChrome/workbox/issues/2079
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  params = matchResult;
                  if (Array.isArray(params) && params.length === 0) {
                      // Instead of passing an empty array in as params, use undefined.
                      params = undefined;
                  }
                  else if (matchResult.constructor === Object && // eslint-disable-line
                      Object.keys(matchResult).length === 0) {
                      // Instead of passing an empty object in as params, use undefined.
                      params = undefined;
                  }
                  else if (typeof matchResult === 'boolean') {
                      // For the boolean value true (rather than just something truth-y),
                      // don't set params.
                      // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                      params = undefined;
                  }
                  // Return early if have a match.
                  return { route, params };
              }
          }
          // If no match was found above, return and empty object.
          return {};
      }
      /**
       * Define a default `handler` that's called when no routes explicitly
       * match the incoming request.
       *
       * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
       *
       * Without a default handler, unmatched requests will go against the
       * network as if there were no service worker present.
       *
       * @param {workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {string} [method='GET'] The HTTP method to associate with this
       * default handler. Each method has its own default.
       */
      setDefaultHandler(handler, method = defaultMethod) {
          this._defaultHandlerMap.set(method, normalizeHandler(handler));
      }
      /**
       * If a Route throws an error while handling a request, this `handler`
       * will be called and given a chance to provide a response.
       *
       * @param {workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       */
      setCatchHandler(handler) {
          this._catchHandler = normalizeHandler(handler);
      }
      /**
       * Registers a route with the router.
       *
       * @param {workbox-routing.Route} route The route to register.
       */
      registerRoute(route) {
          {
              finalAssertExports.isType(route, 'object', {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
              });
              finalAssertExports.hasMethod(route, 'match', {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
              });
              finalAssertExports.isType(route.handler, 'object', {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route',
              });
              finalAssertExports.hasMethod(route.handler, 'handle', {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route.handler',
              });
              finalAssertExports.isType(route.method, 'string', {
                  moduleName: 'workbox-routing',
                  className: 'Router',
                  funcName: 'registerRoute',
                  paramName: 'route.method',
              });
          }
          if (!this._routes.has(route.method)) {
              this._routes.set(route.method, []);
          }
          // Give precedence to all of the earlier routes by adding this additional
          // route to the end of the array.
          this._routes.get(route.method).push(route);
      }
      /**
       * Unregisters a route with the router.
       *
       * @param {workbox-routing.Route} route The route to unregister.
       */
      unregisterRoute(route) {
          if (!this._routes.has(route.method)) {
              throw new WorkboxError('unregister-route-but-not-found-with-method', {
                  method: route.method,
              });
          }
          const routeIndex = this._routes.get(route.method).indexOf(route);
          if (routeIndex > -1) {
              this._routes.get(route.method).splice(routeIndex, 1);
          }
          else {
              throw new WorkboxError('unregister-route-route-not-registered');
          }
      }
  }

  const MAX_RETENTION_TIME = 60 * 48; // Two days in minutes
  // export const GOOGLE_ANALYTICS_HOST = 'www.google-analytics.com';
  // export const GTM_HOST = 'www.googletagmanager.com';
  const TRACKING_CLIENT_JS_PATH = '/ppms.js';
  // export const GTAG_JS_PATH = '/gtag/js';
  // export const GTM_JS_PATH = '/gtm.js';
  // export const COLLECT_DEFAULT_PATH = '/collect';
  // This RegExp matches all known Measurement Protocol single-hit collect
  // endpoints. Most of the time the default path (/collect) is used, but
  // occasionally an experimental endpoint is used when testing new features,
  // (e.g. /r/collect or /j/collect)
  const COLLECT_PATHS_REGEX = /^\/(\w+\/)?ppms/;
  const OVERRIDE_REQUEST_TIME_PARAM = 'cdt';

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * An implementation of a
   * [network-only](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#network-only)
   * request strategy.
   *
   * This class is useful if you want to take advantage of any
   * [Workbox plugins](https://developer.chrome.com/docs/workbox/using-plugins/).
   *
   * If the network request fails, this will throw a `WorkboxError` exception.
   *
   * @extends workbox-strategies.Strategy
   * @memberof workbox-strategies
   */
  class NetworkOnly extends Strategy {
      /**
       * @param {Object} [options]
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
       * `fetch()` requests made by this strategy.
       * @param {number} [options.networkTimeoutSeconds] If set, any network requests
       * that fail to respond within the timeout will result in a network error.
       */
      constructor(options = {}) {
          super(options);
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          {
              finalAssertExports.isInstance(request, Request, {
                  moduleName: 'workbox-strategies',
                  className: this.constructor.name,
                  funcName: '_handle',
                  paramName: 'request',
              });
          }
          let error = undefined;
          let response;
          try {
              const promises = [
                  handler.fetch(request),
              ];
              if (this._networkTimeoutSeconds) {
                  const timeoutPromise = timeout(this._networkTimeoutSeconds * 1000);
                  promises.push(timeoutPromise);
              }
              response = await Promise.race(promises);
              if (!response) {
                  throw new Error(`Timed out the network response after ` +
                      `${this._networkTimeoutSeconds} seconds.`);
              }
          }
          catch (err) {
              if (err instanceof Error) {
                  error = err;
              }
          }
          {
              logger.groupCollapsed(messages.strategyStart(this.constructor.name, request));
              if (response) {
                  logger.log(`Got response from network.`);
              }
              else {
                  logger.log(`Unable to get a response from the network.`);
              }
              messages.printFinalResponse(response);
              logger.groupEnd();
          }
          if (!response) {
              throw new WorkboxError('no-response', { url: request.url, error });
          }
          return response;
      }
  }

  /**
   * Creates the requestWillDequeue callback to be used with the background
   * sync plugin. The callback takes the failed request and adds the
   * `cdt` param based on the current time, as well as applies any other
   * user-defined hit modifications.
   *
   * @param {Object} config.
   * @return {Function} The requestWillDequeue callback function.
   *
   * @private
   */
  const createOnSyncCallback = (config) => {
      return ({ queue }) => __awaiter(void 0, void 0, void 0, function* () {
          let entry;
          while ((entry = yield queue.shiftRequest())) {
              const { request, timestamp } = entry;
              const url = new URL(request.url);
              try {
                  // Measurement protocol requests can set their payload parameters in
                  // either the URL query string (for GET requests) or the POST body.
                  const params = request.method === 'POST'
                      ? new URLSearchParams(yield request.clone().text())
                      : url.searchParams;
                  // Calculate the cdt param, accounting for the fact that an existing
                  // cdt param may be present and should be updated rather than replaced.
                  // const originalHitTime = timestamp! - (Number(params.get('cdt')) || 0);
                  // const queueTime = Date.now() - originalHitTime;
                  // Set the override request time param prior to applying hitFilter or parameterOverrides.
                  // @ts-ignore
                  params.set(OVERRIDE_REQUEST_TIME_PARAM, String((timestamp / 1000).toFixed(0)));
                  // Apply `parameterOverrides`, if set.
                  if (config.parameterOverrides) {
                      for (const param of Object.keys(config.parameterOverrides)) {
                          const value = config.parameterOverrides[param];
                          params.set(param, value);
                      }
                  }
                  // Apply `hitFilter`, if set.
                  if (typeof config.hitFilter === 'function') {
                      config.hitFilter.call(null, params);
                  }
                  // Retry the fetch. Ignore URL search params from the URL as they're
                  // now in the post body.
                  yield fetch(new Request(`${url.origin}${url.pathname}?${params}`, {
                      // body: params.toString(),
                      method: 'GET',
                      // mode: 'cors',
                      // credentials: 'omit',
                      // headers: {'Content-Type': 'text/plain'},
                  }));
                  if (config.debug) {
                      logger.log(`Request for '${getFriendlyURL(url.href)}' ` + `has been replayed`);
                  }
              }
              catch (err) {
                  yield queue.unshiftRequest(entry);
                  if (config.debug) {
                      logger.log(`Request for '${getFriendlyURL(url.href)}' ` +
                          `failed to replay, putting it back in the queue.`);
                  }
                  throw err;
              }
          }
          if (config.debug) {
              logger.log(`All Piwik Pro request successfully replayed; ` +
                  `the queue is now empty!`);
          }
      });
  };
  /**
   * Creates GET and POST routes to catch failed Measurement Protocol hits.
   *
   * @param {BackgroundSyncPlugin} bgSyncPlugin
   * @return {Array<Route>} The created routes.
   *
   * @private
   */
  const createCollectRoutes = (bgSyncPlugin) => {
      // const match = ({url}: RouteMatchCallbackOptions) =>
      //   /^\/(\w+\/)?ppms/.test(url.pathname);
      const match = ({ url }) => {
          return COLLECT_PATHS_REGEX.test(url.pathname);
      };
      const handler = new NetworkOnly({
          plugins: [bgSyncPlugin],
      });
      return [new Route(match, handler, 'GET'), new Route(match, handler, 'POST')];
  };
  const createTrackingClientJsRoute = (cacheName) => {
      const match = ({ url }) => url.pathname === TRACKING_CLIENT_JS_PATH;
      const handler = new NetworkFirst({ cacheName });
      return new Route(match, handler, 'GET');
  };
  const createContainerJsRoute = (cacheName, containerId) => {
      const match = ({ url }) => {
          return url.pathname.indexOf(containerId) > -1;
      };
      const handler = new NetworkFirst({ cacheName });
      return new Route(match, handler, 'GET');
  };
  const initialize = (options) => {
      const bgSyncPlugin = new BackgroundSyncPlugin('PIWIK_PRO_QUEUE', {
          onSync: createOnSyncCallback(options),
          maxRetentionTime: MAX_RETENTION_TIME
      });
      const routes = [
          createTrackingClientJsRoute('trackingClientJS'),
          createContainerJsRoute('containerJS', options.containerId),
          ...createCollectRoutes(bgSyncPlugin),
      ];
      const router = new Router();
      for (const route of routes) {
          router.registerRoute(route);
      }
      router.addFetchListener();
  };

  const EVENT_LISTENER = {
      APP_INSTALLED: 'appinstalled',
      ONLINE: 'online',
      OFFLINE: 'offline'
  };

  var TRACK_EVENT;
  (function (TRACK_EVENT) {
      TRACK_EVENT["CUSTOM_EVENT"] = "trackEvent";
      TRACK_EVENT["SET_TRACKING_SOURCE"] = "setTrackingSource";
  })(TRACK_EVENT || (TRACK_EVENT = {}));

  function push(collection) {
      if (!window._paq) {
          window._paq = [];
      }
      window._paq.push(["setCustomUrl", window.location.pathname]);
      window._paq.push(["setDocumentTitle", document.title]);
      console.log('Push', collection);
      return window._paq.push(collection);
  }
  const PaqService = {
      push,
  };

  function trackEvent(category, action, name, value) {
      const eventArguments = [
          category,
          action,
          ...([]),
          ...([]),
      ];
      PaqService.push([TRACK_EVENT.CUSTOM_EVENT, ...eventArguments]);
  }

  const EVENT_ACTIONS = {
      APP_INSTALL: 'INSTALL',
      INTERNET_CONNECTION_ONLINE: 'OnLine',
      INTERNET_CONNECTION_OFFLINE: 'OffLine',
  };
  const EVENT_CATEGORIES = {
      INTERNET_CONNECTION: 'Internet connection',
      APP: 'App'
  };

  function trackAppInstall() {
      trackEvent(EVENT_CATEGORIES.APP, EVENT_ACTIONS.APP_INSTALL);
  }

  function trackInternetConnectionOnline() {
      trackEvent(EVENT_CATEGORIES.INTERNET_CONNECTION, EVENT_ACTIONS.INTERNET_CONNECTION_ONLINE);
  }

  function trackInternetConnectionOffline() {
      trackEvent(EVENT_CATEGORIES.INTERNET_CONNECTION, EVENT_ACTIONS.INTERNET_CONNECTION_OFFLINE);
  }

  function enableInstallTracking() {
      window.addEventListener(EVENT_LISTENER.APP_INSTALLED, () => {
          trackAppInstall();
      });
  }

  function enableInternetConnectionTracking() {
      window.addEventListener(EVENT_LISTENER.ONLINE, () => {
          trackInternetConnectionOnline();
      });
      window.addEventListener(EVENT_LISTENER.OFFLINE, () => {
          trackInternetConnectionOffline();
      });
  }

  var index = {
      initialize,
      enableInstallTracking,
      enableInternetConnectionTracking,
  };

  index.initialize({
      containerURL: 'example.com',
      containerId: '12345678-1234-1234-1234-1234567890ab'
  });

})();
