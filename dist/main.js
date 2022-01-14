(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FD"] = factory();
	else
		root["FD"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports app, App */
/* harmony import */ var _es5_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);


const App = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)("App")({
    $containers: null,

    boot: function () {
        this.containers = [];
    },
    /**
     * thêm dich vu
     * @param _class class ban muon binding
     * @returns boolean
     */
    add: function (_class, args) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) return true;
        }

        this.containers.push({
            _class,
            _args: isArray(args) ? args : [],
            _instance: null
        });
        return true;
    },
    register: function (_class, args) {
        return this.add(_class, isArray(args) ? args : []);
    },
    remove: function (_class) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) {
                this.containers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    has: function (_class) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) return true;
        }
        return false;
    },
    instance: function (_class, args) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) {
                if (c._instance) {
                    if (!args || args.length == 0) {
                        return c._instance;
                    }
                    return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(c._class, args);
                } else {
                    c._instance = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(c._class, args);
                    return c._instance;
                }
            }
        }
        let _instance = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(_class, args);
        this.containers.push({
            _class,
            _args: isArray(args) ? args : [],
            _instance
        });
        return _instance;
    }
});

const _app = new App();
/**
 * tạo đối tượng
 * @param {*} _class_ 
 * @param {array} args 
 * @returns 
 */
const app = function (_class_, args) {
    return _app.instance(_class_, args);
}

Object.defineProperty(app, "containers", {
    configurable: false,
    enumerable: false,
    get: function () {
        return _app.containers;
    },
    set: function (v) {

    }
})
app.add = function (...args) {
    return _app.add(...args);
};
app.register = function (...args) {
    return _app.register(...args);
};
app.has = function (...args) {
    return _app.has(...args);
};
app.remove = function (...args) {
    return _app.remove(...args);
};
app.instance = function (...args) {
    return _app.instance(...args);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RL": () => (/* binding */ DomBag),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ut": () => (/* binding */ createEl),
/* harmony export */   "Ue": () => (/* binding */ create),
/* harmony export */   "bM": () => (/* binding */ getDomInf),
/* harmony export */   "is": () => (/* binding */ Dom),
/* harmony export */   "Je": () => (/* binding */ inputTypes),
/* harmony export */   "oE": () => (/* binding */ inputTags),
/* harmony export */   "ck": () => (/* binding */ htmlTags),
/* harmony export */   "ek": () => (/* binding */ domEvents)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _es5_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);




const global = window;
const MS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('ms');
const DEFAULT_VALUE = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));

const SHOW = 'SHOW' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PENDING_CHILDREN = 'PENDING_CHILDREN' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PENDING_CONTENTS = 'PENDING_CONTENTS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PARENT_NODE = 'PARENT_NODE' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const MARK_COMMENT = 'MARK_COMMENT' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_TYPES = 'DATA_TYPES' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const SYNC_CHANGE = 'SYNC_CHANGE' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_SYNC = 'DATA_SYNC' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DYNAMIC_SYNC = 'DYNAMIC_SYNC' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DYNAMIC_ATTRS = 'DYNAMIC_ATTRS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_CONTAINERS = 'DATA_CONTAINERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const BUILDER = 'BUILDER' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const IS_STARTED = 'IS_STARTED' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const LISTENNERS = 'LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DOM_LISTENNERS = 'DOM_LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));

const TRANSMISTION_LISTENNERS = 'TRANSMISTION_LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const TRANSMISTION_STATUS = 'TRANSMISTION_STATUS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const IS_BUILDED = 'IS_BUILDED' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const CAN_SET_CHILDREN = 'CAN_SET_CHILDREN' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));



var $document = window.document,
    div = $document.createElement("div"),
    simpleTags = ['img', 'meta', 'link', 'input', 'br', 'hr'],
    createElement = $document.createElement;

/**
 * thao tác với dom thông qua html query gần giống jquery nhưng ít chức năng hơn
 */
var domEvents = (
    "blur focus focusin focusout resize scroll click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup contextmenu load input"
).split(" ");
var allEvents = (
    "abort afterprint animationend animationiteration animationstart beforeprint beforeunload blur canplay canplaythrough " +
    "change click contextmenu copy cut dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange " +
    "ended error focus focusin focusout fullscreenchange fullscreenerror hashchange input invalid keydown keypress keyup " +
    "load loadeddata loadedmetadata loadstart message " +
    "mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup mousewheel pointerdown pointerup pointermove " +
    "offline online open pagehide pageshow paste pause play playing popstate progress ratechange resize reset scroll " +
    "search seeked seeking select show stalled storage submit suspend timeupdate toggle " +
    "touchcancel touchend touchmove touchstart transitionend unload volumechange waiting wheel"
).split(" ").filter(function (s) { return s.length > 0 });

// danh sách tag hợp lệ
var htmlTags = ("a abbr acronym address applet area article aside audio b base basefont bb bdo big blockquote body br button canvas caption center cite code col colgroup command datagrid datalist dd del details dfn dialog dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr  html i iframe img input ins isindex kbd keygen label legend li link map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr").split(" ");


/**
* mảng chứ các event sự kiện
* mỗi phần tử trong mảng chứa element, tên sự kiện, handle, và task
* task là một danh sách gồm callback và data
*/
var events = [];


var inputTypes = [
    "button", "submit", "image", "reset", "checkbox", "radio", // click

    "color", "range",
    "file", "hidden",

    "date", "datetime-local", "month", "time", "week",

    "text", "number", "email", "password", "search", "tel", "url"

];
var inputTags = ['input', 'textarea', 'select'];


var $window = null, $root = null;

var oneTimeData = {};

var isset = false;

/**
 * 
 */
var stopCallChildrenTask = {};

var curremtCallChildrenMethodID = null;
/**
 * các phương thức và thuộc tính của dom element
 */

/**
 * Lấy ra phần tử cha có kết quả trùng khớp
 * @param {Element} element
 * @param {string|Element|Query|Dom} selector 
 * @returns {Element}
 */
function closest(selector, element) {
    if (!element) return null;
    if (selector == undefined) return element ? element.parentNode || null : null;
    var finder = [];
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(selector)) {
        if (selector.isDom) {
            finder.push(selector.el);
        }
        else if (selector.isQuery) {
            for (var index = 0; index < selector.length; index++) {
                var el = selector[index];
                finder.push(el);
            }
        }
        else if (selector instanceof Element) {
            finder.push(selector);
        }
    }
    else if (selector instanceof Element) {
        finder.push(selector);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(selector)) {
        var els = document.querySelectorAll(selector);
        if (els.length) {
            for (var index = 0; index < els.length; index++) {
                var el = els[index];
                finder.push(el);
            }
        }
    }
    var closestList = null;
    var findLength = finder.length;
    if (findLength) {
        var parents = getParentNodes(element);
        var parentLength = parents.length;
        var parent = undefined, find = undefined;

        for (let n = 0; n < parentLength; n++) {
            parent = parents[n];
            for (let m = 0; m < findLength; m++) {
                find = finder[m];
                if (parent == find) {
                    closestList = parent;

                    m += findLength;
                    n += parentLength;
                }
            }
        }

    }
    return closestList;
}


/**
 * Tạo đối tượng dom
 * @param {string|object} selector
 * @param {string|Element|string[]|Element[]} children
 * @param {object} attributes
 * @returns {DomEl}
 * @note {string} Đoạn này thật ra không cần thiết. nhưng viết bào để trình soạn thảo sử dụng gợi ỳ
 */
//  var Dom = function Dom(selector, children, attributes):DomEl {
//     this.setup.apply(this, getArguments(arguments));
//     this.isDom = true;
//     return this;
// };

var dataContainers = [];

function getDataBag(_class) {
    let bag = {};
    let classes = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .getClassData */ .VG)(_class).parents.slice(0);
    classes.push(_class);
    classes.map(function (c) {
        dataContainers.map(function (container) {
            if (container._class == c) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(container.data)) {
                    for (const scope in container.data) {
                        if (Object.prototype.hasOwnProperty.call(container.data, scope)) {
                            const d = container.data[scope];
                            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .objectHasKey */ .aX)(bag, scope)) bag[scope] = {};
                            if (scope == 'data') {
                                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(bag[scope], d);
                            }
                            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['args', 'arguments', 'params'], scope)) {
                                bag[scope] = d;
                            }
                            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(d)) {
                                for (const key in d) {
                                    if (Object.prototype.hasOwnProperty.call(d, key)) {
                                        const v = d[key];
                                        bag[scope][key] = v;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    });
    return bag;
}

// Dom.prototype.isDom = true;

class DomBag {
    domClass = null;
    args = [];
    isDomBag = true;
    constructor(_dom, args) {
        this.domClass = _dom;
        this.args = args;
    }
    make() {
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this.domClass, this.args);
    }
    withParent(parent) {
        let args = this.args.slice(0);
        args.push({ parent })
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this.domClass, args);
    }
}

var DomClassData = {};
var DomPendingClassData = [];
/**
 * them dom data
 * @param {string} instanceID id cua doi tuong
 * @param {*} data 
 */
function addDomClassData(instanceID, data) {
    if (typeof DomClassData[instanceID] == "undefined") DomClassData[instanceID] = {};
    if (data && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(data)) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(DomClassData, instanceID, data);
}

function getDomDataValue(instanceID, key, value) {
    return typeof DomClassData[instanceID] == "object" ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getEl */ .Gn)(DomClassData[instanceID], key, value) : value;
}
function setDomDataValue(instanceID, key, value) {
    if (typeof DomClassData[instanceID] == "undefined") DomClassData[instanceID] = {};
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) DomClassData[instanceID][key] = value;
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key)) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(DomClassData, instanceID, key);
}

function getDomClassPendingDAta(classCTX) {
    for (let index = 0; index < DomPendingClassData.length; index++) {
        const wrapper = DomPendingClassData[index];
        if (wrapper.$class == classCTX) return wrapper.data;
    }
    var w = {}
    DomPendingClassData.push({ $class: classCTX, data: w });
    return w;
}

function setDomClassPendingData(classCTX, key, value) {
    var wrap = getDomClassPendingDAta(classCTX);
    if (isString(key)) {
        wrap[key] = value;
    }
    else if (isObject(key)) {
        assignValue(wrap, key);
    }
}

function addPendingData(_classCtx, data) {

}
/**
 * Class Dom
 * @param {string} selector css selewctor of element
 * @param {Dom|Dom[]} children Dom con
 * @param {Object<key:value>} attributes thuộc tính
 */
var Dom = function Dom(selector, children, attributes) {

    this.__instance__id__ = DEFAULT_VALUE;
};
Dom = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ._class */ .nN)("Dom")({
    static$isDomClass: true,
    $el: null,
    // const$isQuery: true,
    const$isDom: true,
    $tagName: null,
    $id: "",
    $className: "",

    $children: null,
    $parent: null,

    static$makeClass: function (name, props) {
        var wrapper = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(name, isGlobal).extends(this);
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props) ? wrapper(props) : wrapper;
    },
    static$maker: function (name, props) {
        try {
            var wrapper = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(name, isGlobal).extends(this);
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props) ? wrapper(props) : wrapper;
        } catch (error) {
            console.warn(error);
        }
    },
    /**
     * 
     * @param {*} props thuộc tính
     * @param {string} scope phạm vi thuộc tính
     * @param {function(*)} resolve 
     * @param {function(props)} reject đẩy ra
     * @param {function} classCTX 
     */
    __prepare__: function (props, scope, resolve, reject, classCTX) {
        let c = this;
        let hasData = false;
        let data = {};
        let p = {};
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                const vl = props[key];
                let k = key.toLowerCase();
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['data', 'services', 'params', 'args'], k)) {
                    hasData = true;
                    data[k] = vl;
                    delete props[key];
                }
                else if (k == 'dynamiccreate') {
                    p.allowDynamicCreate = vl;
                    hasData = true;
                    delete props[key];
                }
                else {
                    p[key] = vl;
                }
            }
        }
        if (hasData) {
            for (let index = 0; index < dataContainers.length; index++) {
                const container = dataContainers[index];
                if (container._class == c) {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(container.data, data);
                    return p;
                }

            }
            dataContainers.push({ _class: c, data: data })
        }
        return p;
    },

    __commit__: function (classData) {

        if (!classData.props.tagName && !classData.constants.tagName && !classData.accessors.tagName.value) {
            var s = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(this.__class__);
            if (s != 'dom' && s != "component") {
                if (!classData.accessors.tagName)
                    classData.accessors.tagName = {
                        value: s
                    };
                else
                    classData.accessors.tagName.value = s;
            }

        }
    },
    __boot__: function () {
        addDomClassData(this.__instance__id__, {});
        this.__set__(TRANSMISTION_LISTENNERS, {
            fromChildren: {},
            fromParent: {},
            fromSiblings: {},
            events: {}
        })
            .__set__(TRANSMISTION_STATUS, true)
            .__set__(PENDING_CHILDREN, [])
            .__set__(PENDING_CONTENTS, [])
            .__set__(LISTENNERS, {})
            .__set__(DOM_LISTENNERS, [])
            .__set__(DATA_CONTAINERS, [])
            .__set__(PARENT_NODE, null)
            .__set__(SHOW, false)
            .__set__(MARK_COMMENT, null)
            .__set__(CAN_SET_CHILDREN, true)
            .__set__(DYNAMIC_ATTRS, {})
            .__set__(DATA_TYPES, {})
            .__set__(SYNC_CHANGE, true)
            .__set__(DATA_SYNC, true)


        this.children = [];

        this.__set__(CAN_SET_CHILDREN, false);
        bootData.apply(this, []);
        if (oneTimeData && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(oneTimeData) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(oneTimeData)) {
            for (const key in oneTimeData) {
                if (Object.hasOwnProperty.call(oneTimeData, key)) {
                    const value = oneTimeData[key];
                    this[key] = value;
                }
            }
            oneTimeData = {};
        }
        ___assignDynamicProperties___.call(this);

    },

    __before__init__: function () {

    },

    __init__: function () {
        if (!this.el) {
            this.setup(this.getDefaultSelector());

        }

        this.__before__init__();
        var self = this;

        if (typeof this.onInit == "function") {
            this.onInit();
        }

        if (this.autoRender) {
            __buildChildren__.call(this);

        } else {
            __build__.call(this);
        }





        if (typeof this.onAferInit == "function") {
            this.onAferInit();
        }

    },


    __set__: function (key, value) {
        setDomDataValue(this.__instance__id__, key, value);
        return this;
    },
    __get__: function (key, value) {
        return getDomDataValue(this.__instance__id__, key, value);
    },

    constructor: function Dom() {
        this.setElement.apply(this, arguments);
        __build__.call(this);
        this.__test__key__ = true;
    },



    __call__: function (...args) {
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this, args);
    },


    /**
     * thay thế / thêm nội dung cho thẻ
     * @param {Element|Dom|string|Element[]|Dom[]|string[]} content nội dung
     */
    final$render: function (content) {
        this.clear();
        if (typeof this.onBeforeRender == "function") {
            this.onBeforeRender();
        }
        this.emit("rendering");
        this.append(content);
        if (typeof this.onAfterRender == "function") {
            this.onAfterRender();
        }
        this.emit("rendered");

    },
    clear: function () {
        if (typeof this.onBeforeClear == "function") {
            this.onBeforeClear();
        }
        this.removeChild();
        if (typeof this.onAfterClear == "function") {
            this.onAfterClear();
        }
    },

    __destroy__: function destroy() {
        if (typeof this.onDestroy == "function") {
            this.onDestroy();
        }
        this.emit("destroy");
        this.off();
    },
    const$renderChildren: function () {

        this.removeChild();

        if (typeof this.onBeforeRenderChildren == "function") {
            this.onBeforeRenderChildren();
        }
        this.emit('children.rendering');
        var _pendingChildren = this.__get__(PENDING_CHILDREN);

        if (_pendingChildren.length) {
            while (_pendingChildren.length) {
                var a = _pendingChildren.shift();
                this.append(a);
            }
        }
        var _pendingContents = this.__get__(PENDING_CONTENTS);
        if (_pendingContents.length) {
            while (_pendingContents.length) {
                var a = _pendingContents.shift();
                this[a.key] = a.content;
                this.append(a.content);
            }
        }
        if (typeof this.onAfterRenderChildren == "function") {
            this.onAfterRenderChildren();
        }
        this.emit('children.rendered');
        this.__set__(IS_BUILDED, true);
    },
    /**
     * thiết lập
     * @param {string|object}
     */
    const$setElement: function setElement(params) {
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (args.length && typeof args[0] != "string") {
            args.unshift(this.getDefaultSelector());
        }
        var elem = create.apply(this, args);

        var el = elem.el;
        if (el) {
            if (!this.tagName && this.static.__class__ == "DOM") {
                this.tagName = elem.tag;
            }

            if (!el.id && this.id) el.id = this.id;
            if (!el.className && this.className) el.className = this.className;

            this.el = el;
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.__dynamicAttrs)) {
                addDynamicAttr.call(this, elem.__dynamicAttrs);
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.dataTypeAttrs)) {
                for (const key in elem.dataTypeAttrs) {
                    if (Object.hasOwnProperty.call(elem.dataTypeAttrs, key)) {
                        const vl = elem.dataTypeAttrs[key];
                        setDataTypeAttribute.call(this, key, vl);
                    }
                }
            }
            if (elem.contents && elem.contents.length) {
                // this._pendingContents = elem.contents;
                var _pendingChildren = this.__get__(PENDING_CHILDREN);
                for (var index = 0; index < elem.contents.length; index++) {
                    _pendingChildren.push(elem.contents[index]);

                }
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.events)) {
                this.on(elem.events);
            }
            if (elem.parent) {
                this.parent = elem.parent;
            }

            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.methods)) {
                for (var method in elem.methods) {
                    if (Object.hasOwnProperty.call(elem.methods, method)) {
                        var fn = elem.methods[method];
                        // console.log(method, fn)
                        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, method, fn);
                    }
                }
            }

        }

        this.__set__(IS_STARTED, true);
        return this;
    },
    /**
     * giống element
     * @param {*} args thông tin element
     */
    final$setup: function setup(args) {
        return this.setElement.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
    },

    const$getDefaultSelector: function () {
        if (this.selector) return this.selector;
        return "div#" + (
            this.id ? this.id : _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand()
        ) + "." + (
                this.className ? this.className.split(" ").map(function (v) {
                    return v.trim();
                }).filter(function (v) {
                    return v.length > 0;
                }).join('.') : 'dom-element'
            );
    },


    /**
     * chuẩn hóa hàn lắng nghe sự kiện
     * @param {string|function} handler tên phương thức hoạc hàm handler
     * @returns function
     */

    parseEventHandler: function (handler) {
        var self = this;
        var element = this.el;

        var fnt = handler ? handler : function (e) {
            console.log(e);
        };

        if (typeof handler == "string") {
            var instanceID = undefined;


            var handleInfo = handler.split(".");
            if (handleInfo.length == 2) {
                instanceID = handleInfo[0];
                handler = handleInfo[1];
            }
            var params = [];
            var handleParams = handler.split(":");
            if (handleParams.length == 2) {
                handler = handleParams[0];
                params = handleParams[1].split(",").map(function (s) { return s.trim(); });

            }

            if (this.parent && this.parent.isDom) {

                if (!instanceID) {
                    params.unshift(handler);
                    var fn = self.getTreeMethod.apply(self, params);
                    if (fn) {
                        fnt = fn;
                    }
                    else fnt = function (e) {
                        e.component = self;
                    };
                } else {
                    fnt = function (e) {
                        // e.preventDefault();
                        e.component = self;
                        var args = [e];

                        params.map(function (p) { args.push(p); });
                        if (!instanceID) {
                            params.unshift(handler);
                            var fn = self.getTreeMethod.apply(self, params);

                            if (typeof fn == "function") {
                                return fn.apply(self, args);
                            }
                        }

                        if (typeof self[handler] == "function") {
                            return self[handler].apply(self, args);
                        } else {
                            return self.callChildrenMethod(handler, args, instanceID);
                        }
                    };
                }
            }
            else {
                fnt = function (e) {
                    // e.preventDefault();
                    e.component = self;
                    var args = [e];
                    params.map(function (p) { args.push(p); });
                    if (!instanceID) {
                        params.unshift(handler);
                        var fn = self.getTreeMethod.apply(self, params);

                        if (typeof fn == "function") {
                            return fn.apply(self, args);
                        }
                    }

                    if (typeof self[handler] == "function") {
                        return self[handler].apply(self, args);
                    } else {
                        return self.callChildrenMethod(handler, args, instanceID);
                    }
                };
            }

        }
        else if (typeof handler == "function") {
            fnt = function (e) {
                return handler.call(self, e);
            };
        }

        return fnt;
    },

    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} passed tham số báo có cần kiểm tra hay ko
     * @returns this
     */
    addEventListener: function (type, handler, passed) {
        var self = this;
        var element = this.el;
        var listener = passed === DEFAULT_VALUE ? handler : this.parseEventHandler(handler);

        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) _listeners = {};

        type = String(type).toLowerCase();



        if (isDomEvent(type)) return this.addDomEvent(type, listener, DEFAULT_VALUE);
        const listeners = _listeners;

        if (listeners[type] === undefined) {

            listeners[type] = [];

        }

        if (listeners[type].indexOf(listener) === - 1) {

            listeners[type].push(listener);

        }

        return this;
    },

    hasEventListener: function (type, listener) {
        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return false;

        type = String(type).toLowerCase();
        return _listeners[type] !== undefined && _listeners[type].indexOf(listener) !== - 1;

    },

    removeEventListener: function (type, listener) {
        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;
        type = String(type).toLowerCase();
        if (isDomEvent(type)) return this.off.apply((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
        const listeners = _listeners;
        const listenerArray = listeners[type];

        if (listenerArray !== undefined) {
            if (!type) {
                listenerArray.splice(0, listenerArray.length);
                return this;
            }
            const index = listenerArray.indexOf(listener);

            if (index !== - 1) {

                listenerArray.splice(index, 1);

            }

        }

        return this;
    },


    dispatchEvent: function (event) {

        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;

        if (isDomEvent(event.type)) return this.trigger.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
        const listeners = _listeners;
        const listenerArray = listeners[event.type];

        if (listenerArray !== undefined) {

            var s = true;
            event.target = this.el;

            event.stopImmediatePropagation = function () {
                s = false;
            }
            // Make a copy, in case listeners are removed while iterating.
            const array = listenerArray.slice(0);

            for (var i = 0, l = array.length; i < l; i++) {

                array[i].call(this, event);
                if (!s) break;

            }
            return s;

        }

    },

    /**
     * lắng nghe sự kiện của dom
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} passed tham số báo có cần kiểm tra hay ko
     * @returns this
     */
    addDomEvent: function (event, handler, passed) {
        var self = this;
        var element = this.el;
        var listener = passed === DEFAULT_VALUE ? handler : this.parseEventHandler(handler);


        if (!isDomEvent(event)) return this.addEventListener(event, listener, DEFAULT_VALUE);
        const _domlisteners = this.__get__(DOM_LISTENNERS);
        event.split(" ").filter(function (evt) { return (allEvents.indexOf(evt) >= 0); }).map(function (evt) {
            addEvent(element, evt, listener, null);
            if (_domlisteners.indexOf(evt) == -1) _domlisteners.push(evt);
        });
        return this;
    },
    hasEvent: function (event, listener) {
        return isDomEvent(event) ? hasEvent(this.el, event, listener) : this.hasEventListener(event, listener);
    },
    /**
     * Huỷ sự kiện 
     * @param {string} events Danh sách sự kiện
     * @param {function} handler 
     * @returns {Query|Dom}
     */
    off: function (events, handler) {
        handler = handler || null;
        const _domlisteners = this.__get__(DOM_LISTENNERS);
        if (this.el) {
            var evs = (events && events.length) ? events.split(" ") : domEvents;
            if (evs.length) {
                for (var j = 0; j < evs.length; j++) {
                    var ev = evs[j];
                    if (!isDomEvent(ev)) {
                        this.removeEventListener(ev, handler);
                    }
                    else {
                        removeEvent(this.el, ev, null, handler);
                        var ind = _domlisteners.indexOf(ev);
                        if (ind != -1) _domlisteners.splice(ind, 1);
                    }

                }

            } else {
                this.removeEventListener();
                removeEvent(this.el);
                _domlisteners.splice(0, _domlisteners.length);
            }
        }
        return this;
    },
    /**
     * Gán sự kiện
     * @param {string|Event} event sự kiện
     * @returns {Query|Dom}
     */
    trigger: function trigger(event, data) {
        var ev = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event) ? event : (event ? event.type : null);
        var e = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(event) ? { type: ev } : event;
        var el = this.el;
        if (!e.target) {
            e.target = el;
        }
        if (!e.data && data !== undefined) e.data = data;
        if (!isDomEvent(ev)) return this.dispatchEvent(e);

        triggerEvent(el, ev, e);
        return this;
    },

    emit: function () {
        return this.trigger.apply(this, arguments);
    },
    /**
     * Huỳ sự kiện
     */
    unbind: function () {
        this.off.apply(this, arguments);
        return this;
    },
    /**
     * lang nghe su kien
     * @param {string} event tên sự kiện
     * @param {function(Event)} handler hàm xử lý sự kiện
     * @returns {this}
     * 
     */
    on: function on(event, handler) {
        var self = this;
        const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
            var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
            if (isDomEvent(event)) {
                return self.addDomEvent.apply(this, args);
            }
            var s = event.toLowerCase().split(".");
            if (event == 'transmission' || (s.length > 1 && s[0] == 'transmission')) {
                event = event.toLowerCase();
                if (typeof handler != "function") return this;
                if (event != 'transmission') {
                    if (typeof __transmissionEventListeners.events[event] == "undefined") {
                        __transmissionEventListeners.events[event] = [];
                    }
                    __transmissionEventListeners.events[event].push(handler);
                } else {
                    if (typeof __transmissionEventListeners.events.transmission == "undefined") {
                        __transmissionEventListeners.events.transmission = [];
                    }
                    __transmissionEventListeners.events.transmission.push(handler);
                }
                return this;
            }
            else if (event.split(" ").length > 1) {
                return this.on(event.split(" ").filter(function (e) { return e.length > 0 }), handler);
            }
            else {
                this.addEventListener(event, handler);
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(event)) {
            event.map(function (e) {
                self.on(e, handler);
            })
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(event)) {
            for (var key in event) {
                if (Object.hasOwnProperty.call(event, key)) {
                    this.on(key, event[key]);
                }
            }
        }
        return this;
    },
    /**
     * lấy về một callback đến hàm hiện tại
     * @param {string} method tên phương thức
     * @returns {function(e)}
     */
    const$fn: function fn(method) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || typeof self[method] != "function") return function (e) { console.log(e) };
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        var fn = self[method];
        return function (e) {
            e.component = this;
            args[0] = e;
            return fn.apply(self, args);
        };
    },


    /**
     * lấy về một callback đến hàm hiện tại
     * @param {string} method tên phương thức
     * @returns {function(Event)}
     */
    const$getTreeMethod: function getTreeMethod(method) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method)) return function (e) { console.log(e) };
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (typeof self[method] != "function") {
            if (this.parent && typeof this.parent.getTreeMethod == "function") {
                return this.parent.getTreeMethod.apply(this.parent, args);
            }
            return null;
        }

        var fn = self[method];
        return function (e) {
            e.component = this;
            args[0] = e;
            return fn.apply(self, args);
        };
    },
    /**
     * Kiểm tra phần từ có trùng khớp với trạng thái hay phần tử đầu vào hay không
     * @param {string|Element} selector 
     * @returns {boolean}
     */
    is: function is(selector, el) {
        var e = null;
        if (el) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el)) {
                if (el.isDom) {
                    e = el.el;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(el, Element)) {
                    e = el;
                }
                else return false;
            }
            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(el)) {
                var elm = $document.querySelectorAll(el);
                if (elm.length) {
                    e = elm;
                }
                else return false;
            }
            else return false;
        }
        else if (this.el) {
            e = this.el;
        }
        else {
            return false;
        }


        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(selector)) {
            if (selector.length > 1 && selector.substring(0, 1) == ":") {
                var s = selector.substring(1);
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) return (typeof e[s] != 'undefined' && e[s]) ? true : false;
                for (let i = 0; i < e.length; i++) {
                    const ell = e[i];
                    if (typeof ell[s] != 'undefined' && ell[s]) return true;
                }
                return false;
            }
            var elem = $document.querySelectorAll(selector);
            for (let i = 0; i < elem.length; i++) {
                const ele = elem[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                    if (e == ele) return true;
                }
                else if (e.length) {
                    for (let j = 0; j < e.length; j++) {
                        const ee = e[j];
                        if (ee == ele) return true;
                    }
                }
            }

        }
        if (selector instanceof Element) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                if (e == selector) return true;
            }
            else if (e.length) {
                for (let j = 0; j < e.length; j++) {
                    const ee = e[j];
                    if (ee == selector) return true;
                }
            }
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(selector) && selector.isDom) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                if (e == selector.el) return true;
            }
            else if (e.length) {
                for (let j = 0; j < e.length; j++) {
                    const ee = e[j];
                    if (ee == selector.el) return true;
                }
            }
        }

        return false;
    },

    closest: function (selector, el) {
        if (!(el instanceof Element)) el = this.el;
        return closest(selector, el);
    },


    getProp: function (prop, all) {
        if (!this.el) return "";
        return (typeof this.el[prop] != "undefined") ? this.el[prop] : null;
    },
    setProp: function (prop, value) {
        if (!this.el) return this;
        var props = {};
        if (typeof prop == "object") {
            props = prop
        } else {
            props[prop] = value;
        }
        // var elements = this.getElements();
        for (var p in props) {
            if (props.hasOwnProperty(p)) {
                var val = props[p];
                this.el[prop] = val;
            }
        }

        return this;
    },

    removeProp: function (prop) {
        if (typeof prop != "undefined") {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) prop = [prop];
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(prop)) {
                prop.map(function (p) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(p)) {
                        delete this.el[p];
                    }
                })
            }
        }
        return this;
    },

    /**
     * 
     * @param {string|string{}} prop 
     * @param {*} value 
     */
    prop: function (prop, value) {
        if (!this.el) return this;
        if (prop) {
            if (typeof value != "undefined") {

                if (value === false) {
                    this.el[prop] = value;
                    delete this.el[prop];
                }
                else this.el[prop] = value;
                return this;
            } else {
                return this.el[prop] || null;
            }
        } else {
            var props = {};
            for (var key in this[0]) {
                if (this.el.hasOwnProperty(key)) {
                    var propVal = this.el[key];
                    props[key] = propVal;
                }
            }
            return props;
        }
    },
    val: function val(value) {
        if (typeof value == "undefined" || value === null) {
            var input = this.el;
            var tag = input.tagName.toLowerCase();
            var type = input.getAttribute("type");
            if (tag == "textarea" || type == "textarea") {
                return input.value || input.innerText;
            } else if (["radio", "checkbox"].indexOf(type) >= 0) {
                if (input.checked) {
                    if (input.value != undefined) {
                        return input.value;
                    } else {
                        return "on";
                    }
                }
                return null;
            }
            else {
                return input.value;
            }
        } else {
            var input = this.el;
            var tag = input.tagName.toLowerCase();
            if (tag == "textarea") {
                input.innerText = value
            } else {
                input.value = value;
            }
        }

        return this;
    },

    getHtml: function () {
        if (!this.el || isGlobalOrRoot(this.el)) return "";
        return this.el.innerHTML;
    },
    setHtml: function (html) {
        if (this.el) {
            this.removeChild();
            this.el.innerHTML = html;
        }
        return this;
    },
    html: function (str) {
        if (this.el) {
            if (typeof str == "undefined" || str === null) {
                return this.getHtml();
            } else {
                this.setContent(str)
            }
        }
        return this;
    },
    getAttribute: function (attr) {
        return this.el ? this.el.getAttribute(attr) : null;
    },
    setAttribute: function (attr, value) {
        this.el.setAttribute(attr, value);
        return this;
    },
    attr: function attr(attr, value) {
        if (typeof attr == "undefined" || attr === null) {
            return this.el ? this.el.attributes : {};
        }
        else if ((typeof value == "undefined" || value === null) && typeof attr != "object") {
            return this.getAttribute(attr);
        }
        else if (typeof attr != "undefined" && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getType */ .oL)(attr) == "object") {

            for (var key in attr) {
                if (attr.hasOwnProperty(key)) {
                    var ava = attr[key];
                    this.setAttribute(key, value)
                }
            }
        }

        return this.setAttribute(attr, value)
    },
    attrData: function (key) {
        if (!this.el) return null;
        if (!this.__data) {
            var data = {};
            var dataRaw = {};

            var attrs = this.el.attributes;
            if (attrs.length) {
                for (var i = 0; i < attrs.length; i++) {
                    var attr = attrs[i];
                    if (attr.name.toLowerCase().indexOf("data-") === 0) {
                        var a = attr.name.substring(5);
                        dataRaw[a] = attr.value;
                        var b = a.split("-");
                        var c = b.shift();
                        var d = b.map(function (v) { return _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(v) });
                        var k = c + (d.length ? d.join("") : "");
                        data[k] = attr.value;
                    }
                }
            }
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, '__data', {
                raw: dataRaw,
                parse: data
            });
        }
        if (typeof key == "undefined" || key == null) {
            return this.__data.parse;
        }
        if (typeof key == "string") {
            return (typeof this.__data.raw[key] != "undefined") ? this.__data.raw[key] : null;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(key)) {
            var arrData = {};
            for (var i = 0; i < key.length; i++) {
                var kk = key[i];
                if (typeof this.__data.raw[kk] != "undefined") {
                    arrData[kk] = this.__data.raw[kk];
                }
            }
            return arrData;
        }
        return null;
    },
    /**
     * thêm class
     * @param {string} className 
     */
    addClass: function (className) {
        var classlist = [];
        var mapFunc = function (val) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(val)) {
                classlist.push(val);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(val)) {
                val.map(mapFunc);
            }
        };
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
                    mapFunc(arg.split(" ").map(function (v) {
                        return v.trim();
                    }).filter(function (v) { return v.length > 0 }));
                } else {
                    mapFunc(arg);
                }

            }

        }
        var self = this;
        classlist.map(function (str) {
            self.el.classList.add(str);
        });
        return this;
    },

    removeClass: function (classname) {
        var classlist = [];
        var mapFunc = function (val) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(val)) {
                classlist.push(val);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(val)) {
                val.map(mapFunc);
            }
        };
        var args = [];
        var self = this;
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
                    mapFunc(arg.split(" ").map(function (v) {
                        return v.trim();
                    }).filter(function (v) { return v.length > 0 }));
                } else {
                    mapFunc(arg);
                }
            }
            classlist.map(function (str) {
                self.el.classList.remove(str);
            });
        } else {
            self.el.className = "";
        }
        return this;
    },

    hasClass: function (classname) {
        if (this.el) {
            return this.el.classList.contains(classname);
        }
        return false;
    },

    css: function (prop, value) {
        var self = this;
        if (!this.el) {
            return {};
        }
        else if (!prop) {
            return this.el.style;
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(value)) {
            var style = this.el.style;
            var p = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
            var s = p[0].toLowerCase() + prop.substr(1);
            if (Object.hasOwnProperty.call(style, p)) return style[p];
            if (Object.hasOwnProperty.call(style, s)) return style[s];
            return "";
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
            setCssProp(this.el, prop, value);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(prop)) {
            for (var key in prop) {
                if (prop.hasOwnProperty(key)) {
                    var v = prop[key];
                    setCssProp(this.el, key, v);
                }
            }
        }
        return this;
    },

    height: function (height) {
        return typeof height == "undefined" ? (this.el ? (this.el.clientHeight || this.el.offsetHeight) : 0) : this.css({ height: height });
    },
    width: function (width) {
        return typeof width == "undefined" ? (this.el ? (this.el.clientWidth || this.el.offsetWidth) : 0) : this.css({ width: width });
    },
    /**
     * Thêm phần tử con vào cuối danh danh sách phần tử con của element
     * @param {*} child 
     * @returns {Dom}
     */
    const$append: function (child) {
        if (typeof child == "undefined" || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(child) || simpleTags.indexOf(this.tagName) !== -1) return this;
        var self = this;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(child) && child.isDomClass) child = child('#inp-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(child)) {
            for (var index = 0; index < child.length; index++) {
                this.append(child[index]);

            }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            if (child.isDom) {
                child.parent = this;
                this.el.appendChild(child.el);
                this.children.push(child);
            }
            else if (child.isDomQuery) {
                this.el.appendChild(child.el);
                this.children.push(child);
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.appendChild(c.el);
                this.children.push(c);
            }
            else if (child.isQuery) {
                child.map(function (el) {
                    self.el.appendChild(el);
                });
                this.children.push(child);
            }
            else if (child instanceof Element) {
                this.el.appendChild(child);
                this.children.push(child);
            }
        }
        else if (child instanceof Element) {
            this.el.appendChild(child);
            this.children.push(child);
        }
        else {
            var c = parse(child);
            if (c) {
                this.el.appendChild(c);
                this.children.push(c);
            }


        }

        return this;
    },
    /**
     * Thêm phần tử con vào Đầu danh sách phần tử con cvua3 element
     * @param {*} child 
     * @returns {Query|Dom}
     */
     const$before: function (child, childTarget) {
        if (typeof child == "undefined" || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(child) || simpleTags.indexOf(this.tagName) !== -1 || !childTarget) return this;
        let index = 0;
        var target = null;
        var self = this;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(child) && child.isDomClass) child = child('#inp-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());
        var i = this.children.indexOf(childTarget);
        if(i!== -1){
            index = i;
            target = childTarget.isDom ? childTarget.el : childTarget;
        }
        else{
            for (let j = 0; j < this.children.length; j++) {
                const c = this.children[j];
                if((c.isDom && (c == childTarget || c.el == childTarget || c.el == childTarget.el)) || (childTarget.isDom && (childTarget.el == c || childTarget.el == c.el))){
                    index = j;
                    target = childTarget.isDom ? childTarget.el : childTarget;
                }
            }
        }

        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            if(target){
                if (child.isDom) {
                    child.parent = self;
                    this.children.splice(index, 0, child);
                    this.el.insertBefore(child.el, target);
                }
                else if (child.isDomBag) {
                    let c = child.withParent(this);
                    __build__.call(c);
                    this.children.splice(index, 0, c);
                    this.el.insertBefore(c.el, target);
                }
                else if (child instanceof Element) {
                    this.children.splice(index, 0, child);
                    this.el.insertBefore(child, target);
                }
            }
            if (child.isDom) {
                child.parent = self;
                this.children.unshift(child);
                this.el.insertBefore(child.el, this.el.firstChild);
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
            }
            else if (child instanceof Element) {
                this.el.insertBefore(child, this.el.firstChild);
                this.children.unshift(child);
            }
        } 
        return this;
    },
    /**
     * Thêm phần tử con vào Đầu danh sách phần tử con cvua3 element
     * @param {*} child 
     * @returns {Query|Dom}
     */
     const$prepend: function (child) {
        if (typeof child == "undefined" || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(child) || simpleTags.indexOf(this.tagName) !== -1) return this;

        var self = this;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(child) && child.isDomClass) child = child('#inp-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());

        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            if (child.isDom) {
                child.parent = self;
                this.children.unshift(child);
                this.el.insertBefore(child.el, this.el.firstChild);
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
            }
            else if (child.isDomQuery) {
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
            }
            else if (child.isQuery) {
                for (var index = child.length - 1; index > -1; index--) {
                    const c = child[index];
                    this.el.insertBefore(c, this.el.firstChild);
                }
                this.children.unshift(child);
            }
            else if (child instanceof Element) {
                this.el.insertBefore(child, this.el.firstChild);
                this.children.unshift(child);
            }


        } else {
            var c = parse(child);
            this.el.insertBefore(c, this.el.firstChild);
            this.children.unshift(c);
        }

        return this;
    },

    /**
     * Thêm phần tử con vào cuối danh danh sách phần tử con cvua3 element
     * @param {*} parent 
     * @returns {Query|Dom}
     */

    const$appendTo: function (parent) {
        if (typeof parent == "undefined") return this;
        if (parent.isDom) {
            parent.append(this);
        } else if (parent instanceof Element) {
            parent.appendChild(this.el);
            this.__set__(PARENT_NODE, parent);

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(domEl, Element)) {
                domEl.appendChild(this.el);
                this.__set__(PARENT_NODE, domEl);
            }
        }
        return this;
    },
    const$prependTo: function (parent) {
        if (typeof parent == "undefined") return this;
        if (parent.isDom) {
            parent.prepend(this);
        } else if (parent instanceof Element) {
            parent.insertBefore(this.el, parent.firstChild);
            this.__set__(PARENT_NODE, parent);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(domEl, Element)) {
                domEl.insertBefore(this.el, domEl.firstChild);
                this.__set__(PARENT_NODE, domEl);
            }
        }



        return this;
    },

    /**
     * kiểm tra vó phần tử dom con của el hay không
     * @param {Element} child Dom Element - phàn tử html con cần kiểm tra
     * @returns {boolean}
     */
    hasDomChild: function (child) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(child, Element)) {
            if (this.el.children.length) {
                for (var index = 0; index < this.el.children.length; index++) {
                    var chl = this.el.children[index];
                    if (chl === child) return true;
                }
            }
        }
        return false;
    },

    removeDomChild: function (child) {
        if (this.hasDomChild(child)) {
            this.el.removeChild(child);
        }
    },


    /**
     * xóa phần tử con
     * @param {Element|Dom|Dom|Dom.Query} child 
     * @param {boolean} removeDomEl Xóa dom el
     */
    final$removeChild: function (child, removeDomEl) {
        if (typeof removeDomEl == "undefined") removeDomEl = true;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(removeDomEl)) removeDomEl = true;

        if (child) {
            var self = this;
            if (child.isDom || child.isDomQuery) {
                if (removeDomEl) {
                    this.removeDomChild(child.el);
                    child.__destroy__();
                }
            }
            else if (child.isQuery) {
                child.map(function (ch) {
                    try {
                        self.el.removeChild(ch)
                    } catch (error) {
                        if (ch.parentNode) {
                            ch.parentNode.removeChild(ch)
                        }
                    }

                });

            }
            else if (child instanceof Element) {
                this.removeDomChild(child);

            }

            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(this.children)) return this;

            for (var index = 0; index < this.children.length; index++) {
                const c = this.children[index];
                if (c == child) {
                    this.children.splice(index, 1);
                }
            }
            if (this.children.length == 0) {
                this.el.innerHTML = "";
            }
        }
        else {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(this.children)) return this;

            while (this.children.length) {
                this.removeChild(this.children[0]);
            }
        }
        return this;

    },

    /**
     * Xóa
     */
    final$remove: function () {
        var children = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (children.length) {
            var self = this;
            children.map(function (child) {
                self.removeChild(child);
            });
        }
        else if (this.parent) {
            this.parent.removeChild(this);
        }
        else if (this.el.parentNode) {
            this.el.parentNode.removeChild(this.el);
        }
        return this;
    },

    /**
     * thay thế / thêm nội dung cho thẻ
     * @param {Element|Dom|string|Element[]|Dom[]|string[]} content nội dung
     */
    final$setContent: function (content) {
        this.removeChild();
        return this.append(content);
    },

    final$stopTransmission: function () {
        this.__set__(TRANSMISTION_STATUS, false);
    },
    /**
     * tuyền dữ liệu giữ các component cha -> con
     * @param {string} channel tên sự kiện
     * @param {*} data dữ liệu bất kỳ
     */
    final$sendToChildren: function (channel, data) {
        return __sendToChildren__.call(this, channel, data);
    },

    /**
     * tuyền dữ liệu giữ các component con -> cha
     * @param {string} channel tên sự kiện
     * @param {*} data dữ liệu bất kỳ
     */
    final$sendToParent: function (channel, data) {
        if (this.parent && this.parent != this && this.parent.isDom) {
            receiveFromChildren.call(this.parent, channel, data);
        } else {
            console.warn("Không có đối tượng cha");
        }
        return this;
    },




    /**
     * gọi phương thức của cha, ngược cây phả hệ cho đến khi có tồn tại phương thức dược định nghĩa hoặc hết cây phả hệ
     * @param {string} method tên phuong thức của thằng cha
     * @param {array} args các tham số dưới dạng mảng
     * @returns {mixed}
     */
    final$callParentMethod: function (method, args) {
        if (this.parent && this.parent.isDom) {
            return onChildrenCallMethod.call(this.parent, method, args);
        }

        return null;

    },

    /**
     * gọi phương thức của cha, ngược cây phả hệ cho đến khi có tồn tại phương thức dược định nghĩa hoặc hết cây phả hệ
     * @param {string} method tên phuong thức của thằng cha
     * @param {array} args các tham số dưới dạng mảng
     * @returns {mixed}
     */
    final$callParent: function (method, args) {
        return this.callParentMethod.call(this, method, args);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$callChildrenMethod: function (method, args, className) {
        curremtCallChildrenMethodID = this.__instance__id__;
        return __callChildrenMethod__.call(this, method, args, className);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$ccm: function (method, args, className) {
        return this.callChildrenMethod(method, args, className);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$callChildren: function (method, args, className) {
        return this.callChildrenMethod(method, args, className);
    },

    final$stopCallChildrenMethod: function () {
        if (curremtCallChildrenMethodID) stopCallChildrenTask[curremtCallChildrenMethodID] = true;
    },

    /**
     * gui data cho dong bon
     * @param {string} cslug chuoi key
     * @param {*} data du lieu
     */
    final$sendToSiblings: function (slug, data) {
        if (this.parent && this.parent.children && this.parent.children.length > 1) {
            for (var index = 0; index < this.parent.children.length; index++) {
                var sibling = this.parent.children[index];
                if (typeof sibling == "object" && sibling != this && sibling.isDom) {
                    var s = onReceiveFromSiblings.call(sibling, slug, data)
                    if (s === false) break;
                }
            }
        }
    },

    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$callSiblingMethod: function (method, args) {
        if (this.parent && this.parent.children && this.parent.children.length > 1) {
            var a = typeof args == "undefined" ? [] : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
            for (var i = 0; i < this.parent.children.length; i++) {
                var child = this.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child) && child != this && typeof child[method] == "function") {
                    var fn = child[method];
                    var r = fn.apply(child, a);
                    if (r !== undefined) return r;
                }
            }
        }
    },


    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$callSiblings: function (method, args) {
        return this.callSiblingMethod(method, args);
    },

    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$csm: function (method, args) {
        return this.callSiblingMethod(method, args);
    },

    getElementArgsData: function (args, rules) {
        // var rules = {

        // };
        var selector = '';
        var attrs = {};
        var data = [];
        var hasTag = false;
        // duyệt qua mảng tham so
        for (var index = 0; index < args.length; index++) {
            var vl = args[index];
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl)) {
                if (index == 0) {
                    var a = getDomInf(vl);
                    if (a.isElement) {
                        if (a.isDefault) {
                            selector = args[0];
                        } else {
                            selector = args[0].substr(a.tagName.length);
                        }
                    }
                }
            }
        }
    },

    /**
     * lấy về Element cha   
     * @returns {Dom}
     */
    final$getRootElement: function () {
        if (this.parent && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(this.parent) && this.parent.isDom) return this.parent.getRootElement();
        return this;
    },
    // dịch chuyển element trong dom
    final$moveTo: function (parent, pos) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(parent)) return false;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(parent, Element)) {
            parent.appendChild(this.el);
            return this;
        }
        if (!pos) pos = 'bottom';
        if (parent.isDom) {
            parent.moveIn(this, pos, this.parent);
        }
    },

    /**
     * 
     * @param {DomeElement|Element} child doi tuong con
     * @param {DomeElement|Element} receiveDomEl 
     * @param {string} pos 
     * @returns {Dom}
     */
    final$moveChild: function moveChild(child, receiveDomEl, pos) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(receiveDomEl)) return false;

        for (var index = 0; index < this.children.length; index++) {
            var ch = this.children[index];
            if (ch == child) {
                this.children.splice(index, 1);
                if (ch.isDom) {
                    ch.parent = null;
                    ch.moveTo(receiveDomEl, pos);

                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(ch, Element)) {
                    if (receiveDomEl.isDom) {
                        receiveDomEl.moveIn(ch);
                    }
                }
            }

        }
        return this;
    },
    /**
     * 
     * @param {Dom} child 
     * @param {boolean} pos 
     */
    final$moveIn: function moveIn(child, pos, oldparent) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            var t;
            if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(pos) && pos === true) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['top', 'start', 'prepend'], pos)) t = true;
            else t = false;
            var self = this;
            if (t) {
                if (child.isDom) {

                    this.children.unshift(child);
                    if (this.el.firstChild) this.el.insertBefore(child.el, this.el.firstChild);
                    else this.el.appendChild(child.el);

                    if (child.parent && child.parent.isDom) {
                        child.parent.removeChild(child, false);
                    }
                    child.parent = this;
                }
                else if (child.isDomQuery) {
                    this.el.insertBefore(child.el, this.el.firstChild);
                    this.children.unshift(child);
                }
                else if (child.isQuery) {
                    for (var index = child.length - 1; index > -1; index--) {
                        const c = child[index];
                        this.el.insertBefore(c, this.el.firstChild);
                    }
                    this.children.unshift(child);
                }
                else if (child instanceof Element) {
                    this.el.insertBefore(child, this.el.firstChild);
                    this.children.unshift(child);
                }

            } else {
                if (child.isDom) {
                    this.el.appendChild(child.el);
                    this.children.push(child);

                    if (child.parent && child.parent.isDom) {
                        child.parent.removeChild(child, false);
                    }
                    child.parent = this;

                }
                else if (child.isDomQuery) {
                    this.el.appendChild(child.el);
                    this.children.push(child);
                }
                else if (child.isQuery) {
                    child.map(function (el) {
                        self.el.appendChild(el);
                    });
                    this.children.push(child);
                }
                else if (child instanceof Element) {
                    this.el.appendChild(child);
                    this.children.push(child);
                }
            }

        }

    },

    /**
     * set id cho element khi set cho object
     * @param {string} id id của element
     */
    onSet$id: function (id) {
        this.attr('id', id);
    },
    onSet$className: function (className) {
        this.removeClass().addClass(className);
    },

    set$children: function onSetChildren(value) {
        var csc = this.__get__(CAN_SET_CHILDREN);
        if (!csc) console.warn("Bạn không thể set giá trị cho children");
        return csc;
    },
    get$children: function getChildren(value) {
        var returnValue = value;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(value)) {
            returnValue = [];
            this.__set__(CAN_SET_CHILDREN, true);
            this.children = returnValue;
            this.__set__(CAN_SET_CHILDREN, false);
        }
        return returnValue;
    },

    set$parent: function onSetParent(parent) {
        if (!parent || !parent.isDom) {
            return false;
        }
        var s = this.dispatchEvent({
            type: "setparent",
            target: this.el,
            eventData: parent,
            parent: parent
        });
        if (s !== false) {
            if (typeof this.onSetParent == "function") {
                s = this.onSetParent(parent);
            }

            if (s !== false) {
                this.__set__(PARENT_NODE, parent.el);
                if (typeof this.becomeAChild == "function") {
                    this.becomeAChild(parent);
                }
            }
        }

    },

    static$toString: function () {
        var self = this;
        return self('#' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());
    },
    static$withParent: function (parent) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(parent) || !parent.isDom) {
            console.error("Parent must be instance of Dom");
            return false;
        }
        if (typeof self != "function") {
            console.error("The context of withParent Method mush be Dom or Dom's Children");
            return false;
        }
        var params = [];
        for (let i = 1; i < arguments.length; i++) {
            const arg = arguments[i];
            params.push(arg);
        }
        oneTimeData = {
            parent: parent
        };
        return self.apply(null, params);

    }


});


function __build_data_ref__(data) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(data)) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const vl = data[key];
                __build_data_ref_item__.call(this, key, vl);
            }
        }
    }
}
function __build_data_ref_item__(key, value) {
    var self = this;
    var v = value;
    Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        set: function (val) {
            v = val;
            setTimeout(function () {
                __rebuild__.call(self);
            }, 10);
        },
        get: function () {
            return v;
        }

    })
}

function __rebuild__() {
    __buildChildren__.call(this);
}
function __buildChildren__() {
    if (typeof this.builder == "function") {
        if (typeof this.onBeforeBuild == "function") {
            this.onBeforeBuild();
        }
        this.emit("building");
        var children = this.builder();
        if (children) {
            this.render(children);
        }
        if (typeof this.onAfterBuild == "function") {
            this.onAfterBuild();
        }
        this.emit("built");

    } else {
        this.renderChildren();
    }
    this.__set__(IS_BUILDED, true);
}

function bootData() {
    let bag = getDataBag(this.static);
    let data = {};
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(bag)) {
        for (const key in bag) {
            if (Object.prototype.hasOwnProperty.call(bag, key)) {
                const scopeData = bag[key];
                if (key == 'services') {
                    for (const k in scopeData) {
                        if (Object.prototype.hasOwnProperty.call(scopeData, k)) {
                            const sc = scopeData[k];
                            this[k] = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(sc);
                        }
                    }
                }
                else if (key == 'data') {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(data, scopeData);
                }
            }
        }
    }

    const _data_containers = this.__get__(DATA_CONTAINERS);
    console.log(_data_containers);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(_data_containers)) {
        for (const key in _data_containers) {
            if (Object.prototype.hasOwnProperty.call(_data_containers, key)) {
                const sc = _data_containers[key];
                if (key == 'servives') {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(sc)) {
                        for (const k in sc) {
                            if (Object.prototype.hasOwnProperty.call(sc, k)) {
                                const s = sc[k];
                                if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(s)) {
                                    this[k] = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(s);
                                } else {
                                    this[k] = s;
                                }
                            }
                        }
                    }
                }
                else if (key == 'data') {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(data, sc);
                }
            }
        }
    }
    __build_data_ref__.call(this, data);
}



function __build__() {
    if (!this.autoRender && !this.__get__(IS_BUILDED)) {
        this.renderChildren();
    }
}

/**
 * tuyền dữ liệu giữ các component cha -> con
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 * @param {string} sentId id của class gửi
 */
function __sendToChildren__(channel, data, sentId) {
    var instanceID = this.__instance__id__;
    if (!sentId) sentId = instanceID;
    this.__set__(TRANSMISTION_STATUS, true);
    // truyền cho các thằng con
    if (this.children.length) {
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];

            if (child.isDom) {
                receiveFromParent.call(child, channel, data, sentId);
                if (this.__get__(TRANSMISTION_STATUS) === false) {
                    if (sentId != instanceID && this.parent) {
                        this.parent.stopTransmission();
                    }
                    break;
                }
            }
        }
    }
    this.__set__(TRANSMISTION_STATUS, true);
    return this;
}


/**
 * nhận dữ liệu giữ các component cha -> con
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 */
function receiveFromParent(channel, data, sentId) {
    var __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    var next = true;
    var self = this;
    var a = 0;
    var stop = false;
    var arr, fn, s = undefined;
    var eventData = {
        type: "",
        preventDefault: function () {
            next = false;
            a++;
        },
        stopTransmission: function () {
            next = false;
            self.stopTransmission();
            a++;
        },
        stopPropagation: function stopPropagation() {
            self.stopTransmission();
            next = false;
            a++;
        },
        data: data
    };

    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromParent, channel)) {
        arr = __transmissionEventListeners.fromParent[channel];
        try {
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        a++;
                        s = fn.call(this, data);
                        if (s === false) {
                            next = false;
                            self.parent.stopTransmission();
                            break;
                        }
                    }

                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    if (next) {
        if (!a) {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
                _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                    channel.split("-").join(" ")
                ),
                " ",
                ""
            );
            var listFn = [
                "onReceive" + c + "FromParent",
                "on" + c + "FromParent",
                "onReceive" + c + "Data",
                "onReceive" + c,
                "onParent" + c + "Data"
            ];
            var mt = "";
            for (var i = 0; i < listFn.length; i++) {
                mt = listFn[i];
                if (next && typeof self[mt] == "function") {
                    var stt = self[mt].call(self, data);
                    if (stt === false) {
                        next = false;
                        self.parent.stopTransmission();
                        break;
                    }
                }
            }
        }
    }
    if (next) {
        var slug = channel.toLowerCase();
        var mtfs = ["transmission.fromparent." + slug, "transmission.fromparent", "transmission"];
        var mt = "";
        for (var n = 0; n < mtfs.length; n++) {
            mt = mtfs[n];
            if (next && Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
                eventData.type = mt;
                arr = __transmissionEventListeners.events[mt];
                if (arr.length) {
                    for (var index = 0; index < arr.length; index++) {
                        fn = arr[index];
                        if (typeof fn == "function") {
                            // a++;
                            s = fn.call(self, eventData);
                            if (s === false || !next) {
                                next = false;
                                self.parent.stopTransmission();
                                index += arr.length;
                            }
                        }

                    }
                }
            }
            if (!next) break;

        }
    }
    // truyền cho các thằng con
    if (next) {
        __sendToChildren__.call(this, channel, data, sentId);
    }
}



/**
 * tuyền dữ liệu giữ các component con -> cha
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 */
function receiveFromChildren(channel, data) {
    var self = this;
    var next = true;
    var a = 0;
    var arr, fn, s = undefined;
    this.__set__(TRANSMISTION_STATUS, true);

    const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromChildren, channel)) {
        arr = __transmissionEventListeners.fromChildren[channel];
        if (arr.length) {
            for (var index = 0; index < arr.length; index++) {
                fn = arr[index];
                if (typeof fn == "function") {
                    a++;
                    s = fn.call(this, data);
                    if (s === false) {
                        next = false;
                        break;
                    }
                }

            }
        }
    }
    if (next) {
        if (!a) {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
                _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                    channel.split("-").join(" ")
                ),
                " ",
                ""
            );

            var fnList = ["onReceive" + c + "FromChildren", "on" + c + "FromChildren", "onChildren" + c + "Data", "onReceive" + c, "onReceive" + c + "Data"];
            fnList.map(function (mt, i) {
                if (next && typeof self[mt] == "function") {

                    var stt = self[mt].call(self, data);
                    if (stt === false) {
                        next = false
                    }
                }
            });

        }

    }
    if (next) {
        var eventData = {
            type: "",
            preventDefault: function () {
                next = false;
                a++;
            },
            stopTransmission: function () {
                next = false;
                self.stopTransmission();
                a++;
            },
            stopPropagation: function stopPropagation() {
                self.stopTransmission();
                next = false;
                a++;
            },
            data: data
        }

        var slug = channel.toLowerCase();
        ["transmission.fromchildren." + slug, "transmission.fromchildren", "transmission"].map(function (mt) {
            if (next && Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
                eventData.type = mt;
                arr = __transmissionEventListeners.events[mt];

                if (arr.length) {
                    for (var index = 0; index < arr.length; index++) {
                        fn = arr[index];
                        if (typeof fn == "function") {
                            // a++;
                            s = fn.call(self, eventData);
                            if (s === false || !next) {
                                next = false;
                                self.parent.stopTransmission();
                                break;
                            }
                        }

                    }
                }
            }

        });



    }
    // truyền cho các thằng con
    if (next && this.parent) {

        this.sendToParent(channel, data);
    }
    this.__set__(TRANSMISTION_STATUS, true);

}


/**
 * lsng81 nghe lời gọi hàm của thằng con
 * @param {string} method tên phương thức
 * @param {array} args tham số
 */
function onChildrenCallMethod(method, args) {
    if (typeof this[method] == "function") {
        var fn = this[method];
        return fn.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
    }
    return this.callParentMethod(method, args);
}



/**
 * lắng nghe sự kiện từ parent
 * @param {string} method phương thức 
 * @param {array} args mảng tham số
 * @param {string} className Tên claass cuối
 */
function onCallMethodFromParent(method, args, className) {
    var self = this;
    function f() {
        if (typeof self[method] == "function") {
            var fn = self[method];
            var res = fn.apply(self, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
            if (typeof res != "undefined") stopCallChildrenTask[curremtCallChildrenMethodID] = true;
            return res;
        }
        return DEFAULT_VALUE;

    }
    if (className) {
        return f();
    }
    var r = f();
    return r != DEFAULT_VALUE ? r : __callChildrenMethod__.call(this, method, args);
}

/**
 * gọi phương thức của thang con trong cây phả hệ
 * @param {string} method phương thức
 * @param {array} args tham so
 */

function __callChildrenMethod__(method, args, className) {
    var instanceId = this.__instance__id__;
    if (!curremtCallChildrenMethodID) curremtCallChildrenMethodID = instanceId;
    stopCallChildrenTask[instanceId] = false;
    var result = DEFAULT_VALUE;
    if (this.children.length) {
        for (var index = 0; index < this.children.length; index++) {
            var child = this.children[index];
            if (child && child.isDom && child.isDom) {
                var r = onCallMethodFromParent.call(child, method, args, className);
                if (r !== DEFAULT_VALUE && typeof r != "undefined") {
                    result = r;
                    break;
                } else if (stopCallChildrenTask[curremtCallChildrenMethodID]) {
                    result = undefined;
                    break;
                }
            }

        }
    }
    stopCallChildrenTask[instanceId] = false;

    if (instanceId == curremtCallChildrenMethodID) {
        stopCallChildrenTask[curremtCallChildrenMethodID] = false;
        curremtCallChildrenMethodID = null;
        if (result == DEFAULT_VALUE) {
            return undefined;
        }
    }
    return result;
}


/**
 * nhan du liieu tu dong bon
 * @param {string} slug chuoi khoa
 * @param {*} data du lieu
 */
function onReceiveFromSiblings(channel, data) {
    const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    var self = this;
    var next = true;
    var a = 0;
    var arr, fn, s = undefined;
    var eventData = {
        type: "",
        preventDefault: function () {
            next = false;
            a++;
        },
        stopTransmission: function () {
            next = false;
            a++;
        },
        stopPropagation: function stopPropagation() {
            next = false;
            a++;
        },
        data: data
    };

    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromSiblings, channel)) {
        arr = __transmissionEventListeners.fromSiblings[channel];
        try {
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        a++;
                        s = fn.call(this, data);
                        if (s === false) {
                            return false;
                        }
                    }

                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    if (!a) {
        var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
            _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                channel.split("-").join(" ")
            ),
            " ",
            ""
        );
        var listFn = [
            "onReceive" + c + "fromSiblings",
            "onReceive" + c
        ];
        var mt = "";
        for (var i = 0; i < listFn.length; i++) {
            mt = listFn[i];
            if (typeof self[mt] == "function") {
                var stt = self[mt].call(self, data);
                if (stt === false) {
                    return false;
                }
            }
        }
    }
    var slug = channel.toLowerCase();
    var mtfs = ["transmission.fromsiblings." + slug, "transmission.fromsiblings", "transmission"];
    var mt = "";
    for (var n = 0; n < mtfs.length; n++) {
        mt = mtfs[n];
        if (Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
            eventData.type = mt;
            arr = __transmissionEventListeners.events[mt];
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        // a++;
                        s = fn.call(self, eventData);
                        if (s === false || !next) {
                            return false;
                        }
                    }

                }
            }
        }
    }
}


function ___assignDynamicProperties___() {
    var self = this;
    
    function next(args) {

        if (self.parent) {
            let index = self.parent.children.indexOf(self);
            var s = false;
            for (let i = index + 1; i < self.parent.children.length; i++) {
                const child = self.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(args) && args(child)) return child;
                else if (!args) return child;

            }
        }
        return null;
    }

    function previous(args) {
        if (self.parent) {
            let index = self.parent.children.indexOf(self);
            for (let i = index - 1; i > -1; i--) {
                const child = self.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(args) && args(child)) return child;
                else if (!args) return child;
            }
        }
        return null;
    }

    function show(time, callback) {

        // function _show() {
        if (self.__get__(SHOW)) return self;
        var t = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(time) ? parseInt(time) : 0;
        var cb = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(time) ? time : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback) ? callback : emptyFunc);

        function _show() {
            var e = self.el;
            if (t > 0) {
                var vpt = 1 / time;
                var opc = 0;

                var opacity = getCssProp(e, "opacity");

                if (opacity == "1") {
                    setTimeout(function () {
                        cb.call(e);
                    }, t);
                    return;
                }
                self.setCssProp(e, "opacity", 0);
                for (var i = 0; i < t; i++) {
                    setTimeout(function () {
                        opc += vpt;
                        setCssProp(e, "opacity", opc);
                    }, i + 1);
                }
                setTimeout(function () {
                    setCssProp(e, "opacity", 1);
                    cb.call(e);
                }, t);
            } else {
                var opacity = getCssProp(e, "opacity");
                if (opacity == "1") {
                    cb.call(e);
                    return;
                }
                setCssProp(e, "opacity", 1);
                cb.call(e);
            }

        }

        // if(!_show()) return this;
        var mc = self.__get__(MARK_COMMENT);
        if (mc) {
            mc.parentNode.insertBefore(self.el, mc);
            self.__set__(SHOW, true);
            _show();
        } else {
            var _next = next(function (el) { return el.isDom && el.__get__(SHOW) });
            if (_next) {
                _next.el.parentNode.insertBefore(self.el, _next.el);
                self.__set__(SHOW, true);
                _show();
            } else if (self.parent) {
                self.parent.el.appendChild(self.el);
                self.__set__(SHOW, true);
                _show();
            }
        }


        return self;
    }

    /**
     * 
     * @param {int} time thời gian tinh bang ms
     * @param {function} callback làm gì đó sau khi hoàn thành
     */
    function hide(time = 0, callback) {
        var e = self.el;
        var t = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(time) ? parseInt(time) : 0;
        var cb = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(time) ? time : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback) ? callback : emptyFunc);
        if (!self.el.parentNode) return self;
        if (!self.__get__(PARENT_NODE)) self.__set__(PARENT_NODE, self.el.parentNode);
        if (!self.__get__(MARK_COMMENT)) {
            self.__set__(MARK_COMMENT, document.createComment("/" + self.tagName + (self.el.id ? "#" + self.id : "") + (self.el.className ? "." + self.el.className.split(" ").map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 0; }).join(".") : "")))
            self.__get__(PARENT_NODE).insertBefore(self.__get__(MARK_COMMENT), self.el);
        }
        self.__set__(SHOW, false);
        if (t > 0) {
            var vpt = 1 / time;
            var opc = 1;
            var opacity = getCssProp(e, "opacity");
            if (opacity == "0" || opacity == "") {
                setTimeout(function () {
                    self.el.parentNode.removeChild(self.el);
                    cb.call(e);

                }, t);
                return;
            }
            for (var i = 0; i < t; i++) {
                setTimeout(function () {
                    opc -= vpt;
                    setCssProp(e, "opacity", opc);
                }, i + 1);
            }
            setTimeout(function () {
                setCssProp(e, "opacity", 0);
                self.el.parentNode.removeChild(self.el);
                cb.call(e);
            }, t);
        } else {
            setCssProp(e, "opacity", 0);
            self.el.parentNode.removeChild(self.el);
            cb.call(e);
        }

        return self;
    }

    Object.defineProperties(show, {
        toString: {
            configurable: false,
            enumerable: false,
            value: function () {
                return self.__get__(SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return self.__get__(SHOW);
            }
        },
        isBoolean: {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false
        }
    })
    Object.defineProperties(hide, {
        toString: {
            configurable: false,
            enumerable: false,
            value: function () {
                return !self.__get__(SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return !self.__get__(SHOW);
            }
        },
        isBoolean: {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false
        }
    })

    Object.defineProperties(this, {
        show: {
            configurable: false,
            enumerable: false,
            set: function (status) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(status)) {
                    if (status) show();
                    else hide();
                }
            },
            get: function () {
                return show;
            }
        },
        hide: {
            configurable: false,
            enumerable: false,
            set: function (status) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(status)) {
                    if (status) hide();
                    else show();
                }
            },
            get: function () {
                return hide;
            }
        },
        next: {
            configurable: false,
            enumerable: false,
            set: function (value) {
                // lam gi do
            },
            get: function () {
                return next();
            }
        },
        previous: {
            configurable: false,
            enumerable: false,
            set: function (value) {
                // lam gi do
            },
            get: function () {
                return previous();
            }
        }

    });

}

function setDataTypeAttribute(key, value, sync) {
    if (!(((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(value) && (value.isObjectData || value.isArrayData) || value.isPrimitive) || ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(value) && value.isPrimitive))) return sync ? this.addDynamicAttr(key, value) : this.setAttribute(key, value);
    this.__set__(DATA_SYNC, false);
    this.setAttribute(key, value.__toData__());
    var vl = value;
    var __dataTypes__ = this.__get__(DATA_TYPES);
    if (__dataTypes__[key] === undefined) {
        var self = this;
        __dataTypes__[key] = value;
        value.__addChangeEvent__(function (e) {
            self.__set__(DATA_SYNC, false);
            self.__set__(SYNC_CHANGE, false);
            vl = e.value;
            this.setAttribute(key, e.value.__toData__());
            self.__set__(DATA_SYNC, true);
            self.__set__(SYNC_CHANGE, true);

        });
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                return vl;
            },
            set: function (value2) {
                if (vl.__PARENT__) {
                    var key = vl.__PARENT__.keyOf(vl);
                    if (key !== undefined) {
                        self.__set__(DATA_SYNC, false);
                        self.__set__(SYNC_CHANGE, false);
                        vl.__PARENT__[key] = value2;
                        self.__set__(DATA_SYNC, true);
                        self.__set__(SYNC_CHANGE, true);

                    }
                }
            }
        })
        if (sync) {
            this.on("change", function (e) {
                if (e.target == self.el) {
                    var vlchange = self.attr(key);
                    if (vlchange != vl.__toData__() && self.__get__(SYNC_CHANGE)) {
                        self.__set__(SYNC_CHANGE, false);
                        self[key] = vlchange;
                        self.__set__(SYNC_CHANGE, true);

                    }
                }
            })
        }
    }
}

/**
 * Thêm thuộc tính động
 * @param {string} attr tên thuộc tính
 * @param {string|number} value 
 * @returns this
 */
function addDynamicAttr(attr, value) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(attr)) {
        var self = this;
        if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(value) && (value.isObjectData || value.isArrayData) || value.isPrimitive) || ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(value) && value.isPrimitive)) return setDataTypeAttribute.call(this, attr, value);
        this.attr(attr, value);
        var __dynamicAttrs = this.__get__(DYNAMIC_ATTRS);
        Object.defineProperty(this, attr, {
            configurable: true,
            set: function (val) {
                this.__set__(DYNAMIC_SYNC, false);
                var stt = true;
                this.trigger({
                    type: "change.attr." + attr,
                    preventDefault: function () {
                        stt = false;
                    },
                    target: this.el,
                    data: {
                        attr: attr,
                        value: val
                    }
                });

                if (stt) {
                    __dynamicAttrs[attr] = val;
                    this.attr(attr, val);

                }
                this.__set__(DYNAMIC_SYNC, true);
            },
            get: function () {
                return __dynamicAttrs[attr] || null;
            }
        })

    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(attr)) {
        for (var key in attr) {
            if (Object.hasOwnProperty.call(attr, key)) {
                addDynamicAttr.call(this, key, attr[key]);
            }
        }
    }
    return this;
}



/**
 * Tạo đối tượng dom
 * @param {string|object} tag ten the hoặc tất cả các thông tin của thẻ
 */
function create(tag, children, attributes) {
    var tagName = 'div',
        id = '',
        className = '',
        attrs = {},
        __dynamicAttrs = {},
        events = {},
        props = {},
        methods = {},
        contents = [],
        contentf = "",
        inf = { isElement: false },
        isSimple = false,
        isArrayContent = false,
        isTwoContent = 0,
        dataTypeAttrs = {},
        bindingAttrs = {},
        data = {},
        parent = null,
        self = this
        ;


    function addAttrValue(k, vl) {

        var s = String(k).toLowerCase();
        if (s.substr(0, 1) == '$') {
            if (s == '$parent' && (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && vl.isDom) || vl instanceof Element)) {
                parent = val;
            }
            else {
                __dynamicAttrs[k.substr(1)] = vl;
            }
            //fafdhfhdf
        }


        else if (k == 'parent' && (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && vl.isDom) || vl instanceof Element)) {
            parent = val;

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['data', 'services', 'methods'], k)) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl)) {
                var container = {};
                container[k] = vl;
                self.__set__(DATA_CONTAINERS, container);
            }
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
            // tagName = vl;
        }
        else if (s.substr(0, 2) == 'on' && isDomEvent(s.substr(2))) {
            events[s.substr(2)] = vl;
        }
        else if (s.substr(0, 1) == '@' && isDomEvent(s.substr(1))) {
            events[s.substr(1)] = vl;
        }
        else if (s == "on" && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl)) {
            for (const v in vl) {
                if (Object.hasOwnProperty.call(vl, v)) {
                    const ev = vl[v];
                    events[v] = ev;
                }
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "children"], s)) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                for (var j = 0; j < vl.length; j++) {
                    contents.push(vl[j]);
                }
            } else {
                contents.push(vl);
            }
        }
        else if (typeof vl == "function") {
            if (vl.isPrimitive) {
                dataTypeAttrs[k] = vl;
            } else {
                methods[k] = vl;
            }
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(vl) && vl.substr(0, 2) == '{{' && vl.substr(vl, length - 2) == '}}') {
            bindingAttrs[k] = vl.substr(2, vl, length - 4).trim();
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && (vl.isArrayData || vl.isObjectData)) {
            dataTypeAttrs[k] = vl;
        }
        else {
            attrs[k] = vl;
        }
    }
    if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && (tag.isQuery || tag.isDomQuery))) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDom) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDomBag) {
        contents.push(tag);
    }

    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag)) {
        for (var k in tag) {
            if (tag.hasOwnProperty(k)) {
                var vl = tag[k];
                var s = String(k).toLowerCase();
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    tagName = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "children"], s)) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                        for (var j = 0; j < vl.length; j++) {
                            var cnt = vl[j];
                            contents.push(cnt);
                        }
                    } else {
                        contents.push(vl);
                    }
                }
                else {
                    addAttrValue(k, vl);
                }
            }
        }
    }

    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(tag)) tagName = tag;


    for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i];
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && (arg.isQuery || arg.isDomQuery)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDom) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDomBag) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Element)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Dom)) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg)) {
            for (var k in arg) {
                if (arg.hasOwnProperty(k)) {
                    addAttrValue(k, arg[k]);
                }
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
            isTwoContent = 0;
            contents.push(arg);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(arg)) {
            isArrayContent = true;
            for (var j = 0; j < arg.length; j++) {
                contents.push(arg[j]);
            }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(arg) && arg.isDomClass) {
            contents.push(arg);
        }
    }

    inf = getDomInf(tagName);

    if (inf.isElement) {
        if (tagName != inf.tagName) {
            tagName = inf.tagName;
            isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
            if (inf.id) {
                id = inf.id;
            }
            if (inf.className) {
                className = inf.className;
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.attrs)) {
                for (var k in inf.attrs) {
                    if (Object.hasOwnProperty.call(inf.attrs, k)) {
                        addAttrValue(k, inf.attrs[k]);
                    }
                }
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.props)) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, inf.props);
            }
            if (inf.content) {
                if (!isSimple) {
                    contentf = inf.content;
                }
                // else if (typeof attrs.content == "undefined") attrs.content = inf.content;
            }
        }
    }
    if (id) {
        if (typeof attrs.id == "undefined") {
            attrs.id = id;
        }
    }

    if (this && this.tagName && this.tagName != tagName && tagName == 'div') {
        tagName = this.tagName;
    }

    isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
    var htmlObject = $document.createElement(tagName);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(attrs)) {

        var csk, v;
        var css = {};
        for (var prop in attrs) {
            if (Object.prototype.hasOwnProperty.call(attrs, prop)) {
                var val = attrs[prop];
                var key = prop.toLowerCase();
                var k = key;
                var f = k.substring(0, 1);
                var f2 = k.substring(0, 2);
                var isEvent = domEvents.indexOf(key) >= 0;
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    // tagName = vl;
                }
                else if (f == '$' && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(vl) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getType */ .oL)(vl) == "boolean")) {
                    __dynamicAttrs[k.substr(1)] = vl;
                }
                else if (key == "style") {

                    if (typeof val == "object") {
                        for (var cssKey in val) {
                            if (Object.prototype.hasOwnProperty.call(val, cssKey)) {
                                v = val[cssKey];
                                css[cssKey] = v;
                            }
                        }

                        for (var ck in css) {
                            if (css.hasOwnProperty(ck)) {
                                var cv = css[ck];
                                // htmlObject.style[ck] = cv;
                                // console.log(`htmlObject.style['${ck}'] = ${cv};`)
                                setCssProp(htmlObject, ck, cv);
                            }
                        }
                    } else {
                        htmlObject.setAttribute(key, val);
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(val)) {
                    if (val.isDom || val.isDomBag || val.isDomQuery || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(val, Element)) {
                        if (key == 'parent' || key == '@parent' || key == '$parent') {
                            parent = val;
                        }
                        else {
                            this._pendingContents.push({ key: key, content: val });
                        }

                    }
                    else if (val.constructor != Object) {
                        this[key] = val;
                    }
                    else {
                        var attrObj = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.convertTextObject */ .W3.convertTextObject({}, val, prop, '-');
                        for (var ak in attrObj) {
                            if (attrObj.hasOwnProperty(ak)) {
                                var v = attrObj[ak];
                                htmlObject.setAttribute(ak, v);
                            }
                        }
                    }


                }
                else if (key == 'class' || key == 'classname') {
                    htmlObject.className = val;
                }
                else if (typeof vl == "function") {
                    methods[k] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(val)) {
                    if (val === false) {
                        htmlObject.removeAttribute(key);

                    } else {
                        htmlObject.setAttribute(key, key);
                    }
                }
                else if (key != "content" || isSimple) {
                    var slug = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
                    htmlObject.setAttribute(slug, val);
                }
            }
        }
    }

    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(props)) {
        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const value = props[key];
                htmlObject[key] = value;
            }
        }
    }
    var childrenContents = [];
    if (!isSimple) {
        var cnt = null;
        var tn = tagName.toLowerCase();
        if (contents.length) {
            if (tn == 'textarea') {
                htmlObject.innerText = contents[0];
                if (contentf) {
                    htmlObject.innerText += contentf;
                }
            }
            else if (tn == 'a' && !attrs.hasOwnProperty('href') && isTwoContent == 2 && !isArrayContent && contents.length == 2) {
                attrs.href = contents[0];
                childrenContents[0] = contents[1];
            }
            else {
                childrenContents = contents.slice(0);

            }
        }
        else if (contentf) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText += contentf;
                childrenContents = [];
            } else {
                childrenContents.unshift(parse(contentf));

            }

        }
    }
    else if (tagName == 'img') {
        if (!attrs.hasOwnProperty('src')) {
            if (contents.length) {
                htmlObject['src'] = contents[0];
            }
            else if (contentf) {
                htmlObject['src'] = contentf;
            }
        }
    }

    else if (contentf && !attrs.hasOwnProperty('content')) {
        htmlObject.setAttribute('content', contentf);
    }
    if (className) {
        className.split(" ").filter(function (str) {
            return str.length > 0;
        }).map(function (str) {
            htmlObject.classList.add(str);
        })

    }

    return {
        el: htmlObject,
        contents: childrenContents,
        __dynamicAttrs: __dynamicAttrs,
        bindingAttrs: bindingAttrs,
        dataTypeAttrs: dataTypeAttrs,
        events: events,
        methods: methods,
        tag: tagName,
        parent: parent
    };

}


/**
 * Tạo đối tượng dom
 * @param {string|object} tag ten the hoặc tất cả các thông tin của thẻ
 * @returns {Element}
 */
var createEl = function createEl(tag, ...args) {
    var tagName = 'div',
        id = '',
        className = '',
        attrs = {},
        __dynamicAttrs = {},
        events = {},
        props = {},
        contents = [],
        contentf = "",
        inf = { isElement: false },
        isSimple = false,
        boot = null,
        init = null;

    /**
     * phan tich objec chưa cac thuoc tinh
     * @param {object} object doi tuong thuoc tinh
     * @param {boolean} changeTagName 
     */
    var parseAttrs = function (object, changeTagName) {
        for (var k in object) {
            if (object.hasOwnProperty(k)) {
                var vl = object[k];
                var s = String(k).toLowerCase();
                if (s.substr(0, 1) == '$') {
                    __dynamicAttrs[k.substr(1)] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    // tagName = vl;
                    if (changeTagName) {
                        tagName = vl;
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['init', 'boot'], s)) {
                    if (s == 'boot') boot = vl;
                    else init = vl;
                }
                else if (s.substr(0, 2) == 'on' && isDomEvent(s.substr(2))) {
                    events[s.substr(2)] = vl;
                }
                else if (s.substr(0, 1) == '@' && isDomEvent(s.substr(1))) {
                    events[s.substr(1)] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "content", "children"], s)) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                        for (var j = 0; j < vl.length; j++) {
                            var cnt = vl[j];
                            contents.push(cnt);
                        }
                    } else {
                        contents.push(vl);
                    }
                }
                else {
                    attrs[k] = vl;
                }
            }
        }
    }

    if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && (tag.isQuery || tag.isDomQuery))) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDom) {
        contents.push(tag.el);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag)) {
        parseAttrs(tag, true);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(tag)) tagName = tag;
    var max = arguments.length > 3 ? 3 : arguments.length;
    for (var i = 1; i < max; i++) {
        var arg = arguments[i];
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDom) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Element)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Dom)) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg)) {
            parseAttrs(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
            contents.push(arg);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(arg)) {
            for (var j = 0; j < arg.length; j++) {
                var cnt = arg[j];
                contents.push(cnt);
            }
        }
    }

    // lọc xong tất cả content va attr


    inf = getDomInf(tagName);
    if (inf.isElement) {

        if (tagName != inf.tagName) {

            tagName = inf.tagName;
            isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
            if (inf.id) {
                id = inf.id;
            }
            if (inf.className) {
                className = inf.className;
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.attrs)) {
                parseAttrs(inf.attrs);
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.props)) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, inf.props);
            }
            if (inf.content) {
                if (!isSimple) {
                    contentf = inf.content;
                }
                // else if (typeof attrs.content == "undefined") attrs.content = inf.content;
            }
        }
    }
    if (id) {
        if (typeof attrs.id == "undefined") {
            attrs.id = id;
        }
    }

    isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
    /**
     * 
     */
    var htmlObject = document.createElement(tagName);
    if (typeof boot == "function") boot.call(htmlObject, attrs, events);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(attrs)) {
        var csk, v;
        var css = {};
        for (var prop in attrs) {
            if (attrs.hasOwnProperty(prop)) {
                var val = attrs[prop];
                var key = prop.toLowerCase();
                var k = key;
                var f = k.substring(0, 1);
                var f2 = k.substring(0, 2);
                var isEvent = isDomEvent(key)
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], key)) {
                    // tagName = vl;
                }
                else if (key == "style") {
                    if (typeof val == "object") {
                        for (var cssKey in val) {
                            if (val.hasOwnProperty(cssKey)) {
                                v = val[cssKey];
                                css[cssKey] = v;
                            }
                        }

                        for (var ck in css) {
                            if (css.hasOwnProperty(ck)) {
                                var cv = css[ck];
                                htmlObject.style[ck] = cv;
                            }
                        }
                    } else {
                        htmlObject.setAttribute(key, val);
                    }
                }
                else if (typeof val == 'object') {
                    if (val.isQuery || val.isDomQuery || val.isDom) {

                    } else {
                        let attrObj = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.convertTextObject */ .W3.convertTextObject({}, val, prop, '-');
                        for (var ak in attrObj) {
                            if (attrObj.hasOwnProperty(ak)) {
                                var v = attrObj[ak];
                                htmlObject.setAttribute(ak, v);
                            }
                        }
                    }

                } else if (key == 'class' || key == 'classname') {
                    htmlObject.className = val;
                }
                else if (key != "content" || isSimple) {
                    var slug = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
                    htmlObject.setAttribute(slug, val);
                }
            }
        }
    }

    if (!isSimple) {
        if (contents.length) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText = contents[0];
                if (contentf) {
                    htmlObject.innerText += contentf;
                }
            } else {
                for (var i = 0; i < contents.length; i++) {
                    var el = contents[i];
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el) && el.isDom) {
                        htmlObject.appendChild(el.el);
                    }
                    else if (el instanceof Element) {
                        htmlObject.appendChild(el);
                    }
                    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(el)) {
                        var a = parse(el);
                        if (a) htmlObject.appendChild(a);
                    }
                }

            }
        }
        else if (contentf) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText += contentf;
            } else {
                htmlObject.appendChild(parse(contentf));

            }

        }

    }
    else if (contentf && !attrs.hasOwnProperty('content')) {
        htmlObject.setAttribute('content', contentf);
        contents = [];
    }

    if (className) {
        className.split(" ").filter(function (str) {
            return str.length > 0;
        }).map(function (str) {
            htmlObject.classList.add(str);
        })

    }

    var addEv = function (ev, fn) {
        var cb = (typeof fn == "function") ? fn : function (e) {

        };
        if (htmlObject.addEventListener) {
            htmlObject.addEventListener(ev, cb);
        }
    };


    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(events)) {
        for (var key in events) {
            if (Object.hasOwnProperty.call(events, key)) {
                var fn = events[key];
                addEv(key, fn);
            }
        }


    }
    if (typeof init == "function") {
        init.call(htmlObject);
    }

    return htmlObject;

}
/**
 * lấy ra đối tượng dom từ tham số đầu vào
 * @param {*} str giá trị bất kì
 * @returns {Element}
 */
function parse(str) {
    var div = document.createElement('div');
    if ((str instanceof Element)) return str;
    else if (typeof str == "object" && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(str)) {
        if (isQuery(str)) {
            if (str.length > 0) {
                return str[0];
            } else {
                return div;
            }
        }
        else if (str instanceof Dom || str.constructor == Dom) {
            return str.el;
        }
        else if (str.isDom) {
            return str.el;
        }

        else {
            return createEl(str);
        }
    }
    div.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(str) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(str) ? String(str).trim() : str;

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}


/**
 * gán sự kiện cho đối tượng dom
 * @param {Element} el đối tượng dom
 * @param {string} event sự kiện
 * @param {dunction} handler hàm xử lý sự kiện
 */
function addEventListener(el, event, handler) {
    if (!(el instanceof Element) && el != document && el != window) return false;
    var cb = (typeof handler == "function") ? handler : function (e) {
        // func.call(handler, [e.target]);
    };
    if (el.addEventListener) {
        el.addEventListener(event, cb);
    } else if (el.attachEvent) {
        el.attachEvent(event, cb);
    }
}
/**
 * Hủy một sự kiện trong dom
 * @param {Element} el
 * @param {string} event
 * @param {function} callback
 */
function removeEventListener(el, event, callback) {
    if (!(el instanceof Element) && el != document) return false;
    var cb = (typeof callback == "function") ? callback : function (e) {
        // func.call(callback, [e.target]);
    };
    if (el.removeEventListener) {
        el.removeEventListener(event, cb);
    }
}
function documentReady() {
    if (document.readyState !== 'complete') return;
    return true;

}

function isGlobalOrRoot(obj) {
    return obj == global || obj == document;
}



/**
 * lấy thông tin thẻ từ chuỗi đầu vào có dạng css selector
 * @param {string} s css selector
 */
function getDomInf(s) {
    var obj = { tagName: "", id: "", className: "", props: "", attrs: "", content: "", other: "" };
    var a = String(s).split("");
    var m = "tagName";
    // số lượng các cổng đang mở 
    var contentMode = 0;
    var attrMode = 0;

    var isDefault = false;
    var status = false;
    var fail = false;
    // lặp qua từng ký tự để tách chuỗi thông qua việc đêm các ký tự đặc biệt
    for (var i = 0; i < a.length; i++) {
        var c = a[i];
        // nếu nội dung dang được kích hoạt
        if (c == " ") {
            if (!obj.id && !obj.className && !obj.props && !obj.attrs && !obj.content) fail = true;
        }
        if (contentMode > 0) {
            if (c == "{") {
                contentMode++;
            }
            else if (c == "}") {
                contentMode--;
            }
            if (contentMode) {
                obj[m] += "" + c;
            }
            else {
                m = "other";
                obj.other += " ";
            }

        }
        // bắt đầu đọc thuộc tính có giá trị
        else if (attrMode > 0) {
            if (c == "[") {
                attrMode++;
            }
            else if (c == "]") {
                attrMode--;
            }
            if (attrMode) {
                obj[m] += "" + c;
            } else {
                m = "other";
                obj.other += " ";
            }

        }

        // bắt đầu dặc id
        else if (c == "#") {
            m = "id";
        }
        // bắt đầu dọc class
        else if (c == ".") {
            m = "className";
            obj.className += " ";
        }
        // bắt đầu đọc thuộc tính trạng thái
        else if (c == ":") {
            m = "props";
            obj.props += " ";
        }
        // bắt đầu đọc thuộc tính có giá trị
        else if (c == "[") {
            m = "attrs";
            attrMode++;
            obj.attrs += "\n";
        }
        // kết thúc việc đọc
        else if (c == "]") {
            attrMode--;
            m = "other";
            obj.other += " ";

        }
        // dọc nội dung
        else if (c == "{") {
            m = "content";
            // obj.content+= "";
            contentMode++;
        }
        // kết thúc đọc nội dung
        else if (c == "}") {
            m = "other";
            obj.other += " ";
            contentMode--;
        }
        // đang làm việc gì tiếp tục làm việc đó
        else {
            obj[m] += "" + c;
        }
    }
    var obj2 = { tagName: "", id: "", className: "", props: {}, attrs: {}, other: "", content: '', isElement: false };
    var tagName = obj.tagName.trim();
    var id = obj.id.trim();
    var className = obj.className.trim();
    var props = obj.props.trim();
    var attrs = obj.attrs.trim();
    var content = obj.content.trim();

    if (tagName) {
        obj2.tagName = tagName;
        status = true;
    } else if (s) {
        obj2.tagName = "div";
        isDefault = true;
    }

    if (id) {
        obj2.id = id;
        status = true;
    }

    if (className) {
        obj2.className = className;
        status = true;
    }

    if (props) {
        var p = props.split(" ");
        for (var i = 0; i < p.length; i++) {
            var prop = p[i];
            obj2.props[prop] = true;
            status = true;
        }
    }
    if (attrs) {
        var p = attrs.split("\n");
        for (var i = 0; i < p.length; i++) {
            var attr = p[i].split("=");
            if (attr.length == 2) {
                status = true;
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['"', "'"], attr[1][0]) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['"', "'"], attr[1][attr[1].length - 1])) {
                    obj2.attrs[attr[0]] = attr[1].substr(1, attr[1].length - 2);
                }
                else {
                    obj2.attrs[attr[0]] = attr[1];
                }
            }

        }
    }

    if (content) {
        obj2.content = content;
    }

    if (!obj.id && !obj.className && !obj.props && !obj.attrs && !obj.content && fail && (tagName.split(" ").length > 1 || htmlTags.indexOf(tagName) == -1)) {
        return { tagName: "", id: "", className: "", props: {}, attrs: {}, other: "", content: '', isElement: false };
    }

    obj2.isDefault = isDefault;

    obj2.isElement = status;

    obj2.isHtmlTag = htmlTags.indexOf(obj2.tagName.toLowerCase()) !== -1;
    return obj2;

}



function make(tag, attributes, content) {
    return Dom(tag, attributes, content);
}


function eventHandler(e) {
    console.log(e.target);
}


/**
* them su kien cho element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function addEvent(element, event, callback, data) {
    if (!element || !event || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event) || !callback || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback)) return false;
    event = event.toLowerCase();
    data = data || null;

    // tìm trong danh sách sự kiện có tồn tại sự kiện này chưa
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        // một cặp element và event là key của một bản ghi dom event
        if (eventData.element === element && eventData.event === event) {
            for (var j = 0; j < eventData.tasks.length; j++) {
                var evCallback = eventData.tasks[j];
                if (data) {
                    if (data == evCallback.data && evCallback.callback === callback) return true;
                } else if (evCallback.callback === callback) return true;
            }
            addEventListener(element, event, callback);
            events[i].tasks.push({
                callback: callback,
                data: data
            });


            return true;
        }
    }
    addEventListener(element, event, callback);
    events.push({
        element: element,
        event: event,
        data: data,
        tasks: [
            {
                callback: callback,
                data: data
            }
        ]
    });
    return true;
}

/**
* them su kien cho element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function removeEvent(element, event, callback, data) {
    // trưởng hợp không gửi element nào thì xóa tất cả
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
        for (var i = 0; i < events.length; i++) {
            var eventData = events[i];
            if (eventData.tasks.length) {
                eventData.tasks.map(function (task) {
                    removeEventListener(eventData.element, eventData.event, task.callback);
                });
            }

        }
        events = [];

        //
        return false;
    }
    event = event ? event.toLowerCase() : null;
    data = data || null;
    // duyệt mảng để tím element và event phù hợp
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (eventData.element === element) {
            if (!event) {
                if (eventData.tasks.length) {
                    eventData.tasks.map(function (task) {
                        removeEventListener(eventData.element, eventData.event, task.callback);
                    });
                }
                events.splice(i, 1);
                i--;
            }
            else if (eventData.event === event) {
                for (var j = 0; j < eventData.tasks.length; j++) {
                    var evCallback = eventData.tasks[j];
                    if (data) {
                        if (data == evCallback.data) {
                            if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                        if (evCallback.callback === callback) {
                            removeEventListener(eventData.element, eventData.event, evCallback.callback);
                            events[i].tasks.splice(j, 1);
                            j--;
                        }
                    } else {
                        removeEventListener(eventData.element, eventData.event, evCallback.callback);
                        events[i].tasks.splice(j, 1);
                        j--;
                    }
                }
                if (!events[i].tasks.length) {
                    // removeEventListener(eventData.element, eventData.event, eventData.handle);
                    events.splice(i, 1);
                    i--;
                }
            }
        }
    }
}

function getEvents(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    var list = [];
    if (!element && !event) return events;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if ((!element || element == eventData.element) && (!event || event == eventData.event)) {
            list.push(eventData);
        }
    }
    return list;
}

/**
* kiem tra su kien cua element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function hasEvent(element, event, callback, data) {
    // trưởng hợp không gửi element nào thì xóa tất cả
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
        return false;
    }
    event = event ? event.toLowerCase() : null;
    data = data || null;
    // duyệt mảng để tím element và event phù hợp
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (eventData.element === element) {
            if (eventData.event === event) {
                for (var j = 0; j < eventData.tasks.length; j++) {
                    var evCallback = eventData.tasks[j];
                    if (data) {
                        if (data == evCallback.data) {
                            if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                        if (evCallback.callback === callback) {
                            removeEventListener(eventData.element, eventData.event, evCallback.callback);
                            events[i].tasks.splice(j, 1);
                            j--;
                        }
                    } else {
                        removeEventListener(eventData.element, eventData.event, evCallback.callback);
                        events[i].tasks.splice(j, 1);
                        j--;
                    }
                }
                if (!events[i].tasks.length) {
                    // removeEventListener(eventData.element, eventData.event, eventData.handle);
                    events.splice(i, 1);
                    i--;
                }
            }
        }
    }
}

function triggerEvent(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    if (!element && !event) return events;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (element == eventData.element && event == eventData.event) {
            if (eventData.tasks.length) {
                eventData.tasks.map(function (task) {
                    // removeEventListener(eventData.element, eventData.event,);
                    if (typeof task.callback == "function") {
                        task.callback.apply(eventData.element, data)
                    }
                });
            }
        }
    }
}
function getEventData(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    if (!element && !event) return null;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if ((!element || element == eventData.element) && (!event || event == eventData.event)) {
            return eventData;
        }
    }
    return null;
}

/**
 * kiểm tra xem có phải sự kiện dom hay ko
 * @param {string|string[]} eventName 
 * @returns {boolean}
 */
function isDomEvent(eventName) {
    var stt = false;
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(eventName)) eventName.map(function (e) { if (allEvents.indexOf(String(e).toLowerCase()) != -1) stt = true; });
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(eventName) && allEvents.indexOf(eventName.toLowerCase()) != -1) stt = true;
    return stt;
};


/**
 * kiểm tra xem có phải sự kiện dom hay ko
 * @param {string|string[]} eventName 
 * @returns {boolean}
 */
function isDomBasicEvent(eventName) {
    var stt = false;
    if (isArray(eventName)) eventName.map(function (e) { if (domEvents.indexOf(String(e).toLowerCase()) != -1) stt = true; });
    else if (isString(eventName) && domEvents.indexOf(eventName.toLowerCase()) != -1) stt = true;
    return stt;
};


/**
 * 
 * @param {HTMLElement} element 
 * @param {string} prop 
 * @param {string} value 
 */
function setCssProp(element, prop, value) {
    if (element instanceof HTMLElement && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
        try {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.slugToCamel */ .W3.slugToCamel(prop);
            var s = "element.style." + c + " = value;";
            eval(s);
        } catch (error) {
            element['style'][prop] = value;
        }
    }
}
function getCssProp(element, prop) {
    if (element instanceof Element && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
        return typeof element['style'][prop] != "undefined" ? String(element['style'][prop]) : "";
    }
    return "";
}

function getTree(elem, list) {
    if (typeof elem == "undefined") return [];
    if (typeof list == "undefined" || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(list)) {
        list = [];
    }
    if (elem instanceof Element) {
        var self = this;
        if (!elem.children.length) return list;
        for (var i = 0; i < elem.children.length; i++) {
            var child = elem.children[i];
            list.push(child);
            if (child.children.length) {
                list = getTree(child, list);
            }
        }
    }
    return list;
}
function getParentNodes(elem, list, elementStop) {
    if (typeof elem == "undefined") return [];
    if (typeof list == "undefined" || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(list)) {
        list = [];
    }
    if (elem instanceof Element) {
        if (!elem.parentNode || (elementStop && elementStop == elem)) return list;
        list.push(elem.parentNode);
        list = getParentNodes(elem.parentNode, list, elementStop);
    }
    return list;
}

function isQuery(obj) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(obj)) return false;
    if (obj.isQuery || obj.isDomQuery) return true;
    return false;
}

function isHTML(str) {
    return isString(str) ? (
        /<(?=.*? .*?\/*>|br|hr|input|!--|wbr)[a-z\-_\:]+.*?>|<([a-z\-_\:]+).*?<\/\1>/i.test(str)
    ) :
        _instanceof(str, Element);
}


function checkHtmlStr(str) {
    return !(str || '')
        // replace html tag with content
        .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, '')
        // remove remaining self closing tags
        .replace(/(<([^>]+)>)/ig, '')
        // remove extra space at start and end
        .trim();
}

function emptyFunc() { }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);




/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qH": () => (/* binding */ createClass),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Fs": () => (/* binding */ createInstance),
/* harmony export */   "VG": () => (/* binding */ getClassData),
/* harmony export */   "nN": () => (/* binding */ _class)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);


const NORETURN_VALUE = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('time') + '-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('ms') + "-" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Num.rand */ .Cq.rand(0, 999999)));
const getArgs = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu;

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
        return true;
    } catch (e) {
        return false;
    }
}

const DynamicCreateKeys = [
    'dynamicCreate', 'allowCreateByCaller', 'dynamicCreateMode', 'allowDynamicCreate'
]

const _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; };
function setPrototypeOf(o, p) {
    return _setPrototypeOf(o, p);
}

const _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
    var a = [null];
    a.push.apply(a, args);
    var Constructor = Function.bind.apply(Parent, a);
    var instance = new Constructor();
    if (Class) setPrototypeOf(instance, Class.prototype);
    return instance;
};
function createInstance(Parent, args, Class) {
    return _construct.apply(null, arguments);
}

const classContainers = [];

const classInstanceData = {};

function addClass($class) {
    for (let i = 0; i < classContainers.length; i++) {
        if (classContainers[i].$class == $class) {
            return classContainers[i];
        }
    }
    classContainers.push({
        $class: $class
    });
    Object.defineProperty($class.prototype, '__isES5ClassInstance__', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: true
    });
    Object.defineProperty($class, '__isES5ClassInstance__', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: true
    });
    Object.defineProperty($class.prototype, '__dispose__', {
        configurable: false,
        writable: false,
        enumerable: true,
        value: function () {
            removeClassInstance(this.__instance__id__, typeof this.destructor == "function" ? this.destructor() : false);
        }
    })
    return classContainers[classContainers.length - 1];
}
function getClassIndex($class) {
    for (let i = 0; i < classContainers.length; i++) {
        if (classContainers[i].$class == $class) {
            return i;
        }
    }
    return -1;

}

function addClassData($class, key, value) {
    if (isString(key)) {
        addClass($class)[key] = value;
        return true;
    }
    if (isObject(key)) {
        var index = getClassIndex($class);
        if (index == -1) {
            addClass($class);
            index = classContainers[classContainers.length - 1];
        }
        assignValue(classContainers[index], key);
        return true;
    }
    return false;
}

function getClassData($class) {
    for (let i = 0; i < classContainers.length; i++) {
        const classData = classContainers[i];
        if (classData.$class == $class) {
            return classData;
        }
    }
    return false;
}

/**
 * thêm instance
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @param {ES5Class} instance indtance
 * @returns instanceData
 */

function addClassInstance(instanceID, instance) {
    if (typeof classInstanceData[instanceID] == "undefined") {
        classInstanceData[instanceID] = {
            instance: instance,
            data: {}
        };
    }
    return false

}



/**
 * Xóa instance
 * @param {string} instanceID id của instance
 * @returns {Boolean}
 */

function removeClassInstance(instanceID) {
    if (typeof classInstanceData[instanceID] != "undefined") {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .destroyObject */ .yp)(classInstanceData[instanceID]);
        delete classInstanceData[instanceID];
        return true;
    }
    return false

}

/**
 * Xóa instance
 * @param {string} instanceID id của instance
 * @returns {Boolean}
 */

function destroyInstance(instanceID) {
    return isObject(instanceID);
    if (typeof classInstanceData[instanceID] != "undefined") {
        destroyObject(classInstanceData[instanceID]);
        delete classInstanceData[instanceID];
        return true;
    }
    return false

}


/**
 * thêm instance
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @returns instanceData
 */

function getClassInstanceWrapper(instanceID) {
    if (instanceID) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(instanceID)) {
            for (const key in classInstanceData) {
                if (Object.hasOwnProperty.call(classInstanceData, key)) {
                    const instanceData = classInstanceData[key];
                    if (instanceData.instance == instanceID) return instanceData;
                }
            }
        }
        else if (typeof classInstanceData[instanceID] == "undefined") {
            return false;
        }

        return classInstanceData[instanceID];
    }
    return false

}



/**
 * thêm instance data
 * @param {string} instanceID id của instance
 * @param {string} key key
 * @param {*} value giá trị
 * 
 * @returns instanceData
 */

function addClassInstanceData(instanceID, key, value) {
    let instanceData = getClassInstanceWrapper(instanceID);
    if (instanceData) {
        let data = instanceData.data;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(key)) {
            data[key] = value;
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(key)) {
            for (const k in key) {
                if (Object.hasOwnProperty.call(key, k)) {
                    const v = key[k];
                    data[k] = v;
                }
            }
        }
        return data;
    }
    return false;
}


/**
 * lấy instance data
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @param {string} key keyị
 * 
 * @returns {*}
 */

function getClassInstanceData(instanceID, key) {
    let instanceData = getClassInstanceWrapper(instanceID);
    if (instanceData) {
        let data = instanceData.data;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(key)) {
            return data[key];
        }
        return data;
    }
    return undefined;
}



function Es5(...args) {
    /**
     * 
     * @param {Es5} superClass class cha
     * @param  {...any} superClasses class cha khác
     * @returns {Es5}
     */
    this.extends = function (superClass, ...superClasses) { return this };
    /**
     * 
     * @param {object} trait thuộc tính hoặc phương thức
     * @param  {...any} traits 
     * @returns 
     */
    this.uses = function (trait, ...traits) { return this };
    this.assign = function (props) { return this };
    this.static = function (props) { return Es5 };
    this.commit = function () { return this };
}

Object.assign(Es5, {
    __type__: "class",
    __class__: "ES5Class"
});

/**
 * 
 * @param {string} name tên class
 * @param {function(...args)} checkFn 
 * @returns {Es5}
 */
function createConstructor(name, checkFn) {
    var esc = null;
    var s = "try {" +
        "var " + name + " = function " + name + "(){" +
        "var classChecked = checkFn.call(this, getArgs(arguments));" +
        "if(classChecked!==NORETURN_VALUE) return classChecked;" +
        "};" +
        "esc = " + name + ";" +
        "} catch (error) {" +
        "console.log(\"lỗi\");" +
        "console.error(error);" +
        "}";
    eval(s);
    return esc;
}

function definePropertyGroup(target, groupConfig) {
    var configurable = groupConfig.configurable || false,
        enumerable = groupConfig.enumerable || false,
        writable = groupConfig.writable || false;
    for (const key in groupConfig.props) {
        if (Object.prototype.hasOwnProperty.call(groupConfig.props, key)) {
            const value = groupConfig.props[key];
            Object.defineProperty(target, key, {
                configurable: configurable,
                enumerable: enumerable,
                writable: writable,
                value: value
            });
        }
    }
}


const createClass = function (className, makeGlobal) {
    return function _Class() {
        var $className = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(className) ? _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.clearUnicode */ .W3.clearUnicode(className), [' ', '-', '+'], '') : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(className) ? className.name : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(makeGlobal) && makeGlobal.name ? makeGlobal.name : "Class" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand().substr(4, 4)));
        var hasClassName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(className) && className.length;
        var commited = false;
        // khai báo  class
        /**
         * Class dang es5
         * @param {...any} args
         * @var {class}
         */
        var ES5Class = function ES5Class(...args) {
            this.a = 0;
            var checked = checkConstructorCalled.call(this, getArgs(arguments));
            if (checked !== NORETURN_VALUE) return checked;
        };


        /**
         * @var {class}
         */

        function stdParent(instance, cn, scope) {
            this.__instance = instance;
            const self = this;

        }

        var iof = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH;


        // hàm gọi trong construct

        if (hasClassName) {
            try {
                let esc = createConstructor($className, checkConstructorCalled);
                if (esc !== null) {
                    ES5Class = esc;
                }
            } catch (error) {
                console.log("lỗi")
                console.error(error);
            }
        }
        Object.defineProperty(ES5Class, "__type__", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'class'
        });
        Object.defineProperty(ES5Class, "__class__", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: $className
        });

        addClass(ES5Class);

        var classIndex = classContainers.length - 1;
        var classData = classContainers[classIndex];
        classData.parentMap = {};
        classData.parents = [];
        classData.extends = {
            props: {},
            methods: {},
            accessors: {}
        };
        classData.constructs = [];
        classData.construct = null;
        classData.supers = {};
        classData.uses = {}; // {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.props = {};// {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.methods = {};// {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.accessors = {};// {value, set,get}
        classData.static = {};
        classData.constants = {};
        classData.boots = [];
        classData.inits = [];
        classData.prepare = [];
        classData.calls = [];
        classData.commits = [];
        classData.aftercommits = [];

        classData.pendingProps = {};
        classData.dynamicCreateMode = false;


        Object.assign(ES5Class.prototype, {
            constructor: ES5Class,
            noReturn: NORETURN_VALUE,
            static: ES5Class,

            __callStatic: function __callStatic(name, args) {
                if (typeof ES5Class[name] == "function") {
                    return ES5Class[name].apply(ES5Class, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : []);
                }
                return false;
            }
        })


        /**
         * trả về Wrapper
         * @returns {ES5Class}
         */
        function Wrapper() {
            var args = getArgs(arguments);
            if (!iof(this, Wrapper)) {
                if (commited) {
                    if (classData.calls.length) {
                        const caller = classData.calls[classData.calls.length - 1];
                        if (typeof caller == "function") {
                            return caller.apply(ES5Class, args);
                        }
                    }
                    if (checkCreateNewInstanceByStaticConstructorCall()) {
                        return newInstance(args);
                    }

                }
                // let a = Wrapper.assign(...args);

                return Wrapper.assign(...args);
            }
            else {
                return newInstance(args);
            }
            this.$class = ES5Class;
            return ES5Class;
        }

        /**
             * cập nhật thuộc tính
             * @param {boolean} override ghi ghi đè
             */
        function updateProperties(override) {
            for (var key in classData.pendingProps) {
                if (Object.prototype.hasOwnProperty.call(classData.pendingProps, key)) {
                    var val = classData.pendingProps[key];
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, key, val);
                }
            }
        }

        /**
         * ke thua
         * @param {ES5Class|function(...args)} superClass class cha
         */
        function _inherit(superClass) {
            if (commited) {
                throw new Error("Không thể gọi hàm inherit sau khi đã khai báo phương thức cho class");
            }

            if (superClass) {
                var cn;
                var _parent = {};
                if (superClass.__type__ == 'class') {// trường hợp là std class
                    cn = superClass.__class__;
                    _parent.__class__ = superClass;
                    var superData = getClassData(superClass);

                    superData.constructs.slice(0).map(function (fn) {
                        if (classData.constructs.indexOf(fn) == -1) {
                            classData.constructs.push(fn);
                        }

                    })

                    if (superData.construct && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(superData.construct)) {
                        if (classData.constructs.indexOf(superData.construct) == -1) {
                            classData.constructs.push(superData.construct);
                        }
                        classData.supers[cn] = superData.construct;
                    }


                    var superExtends = superData.extends;
                    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(superExtends)) {
                        // ke thua
                        for (var cln in superExtends) {
                            if (superExtends.hasOwnProperty(cln)) {
                                var exts = superExtends[cln];
                                for (var k in exts) {
                                    if (exts.hasOwnProperty(k)) {
                                        var p = exts[k];
                                        classData.extends[cln][k] = p;
                                    }
                                }
                            }
                        }
                    }
                    var superBoots = superData.boots.slice(0);
                    if (superBoots.length) superBoots.map(function (f) { classData.boots.push(f); });
                    var superInits = superData.inits.slice(0);
                    if (superInits.length) superInits.map(function (f) { classData.inits.push(f); });

                    var superContants = superData.constants;
                    for (const key in superContants) {
                        if (Object.hasOwnProperty.call(superContants, key)) {
                            const value = superContants[key];
                            if (!isConst(key)) {
                                classData.constants[key] = superContants[key];
                            } else {
                                throwConstError(superClass.__class__, key, superContants[key])
                            }
                            classData.constants[key] = value;
                        }
                    }
                    var superUses = superData.uses;
                    for (const key in superUses) {
                        if (Object.hasOwnProperty.call(superUses, key)) {
                            const vl = superUses[key];
                            _parent[key] = vl;

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            else if (typeof vl == "function") {
                                classData.extends.methods[key] = vl;
                            }
                            else {
                                classData.extends.props[key] = vl;
                            }

                        }
                    }

                    var superProps = superData.props;
                    for (var key in superProps) {
                        if (superProps.hasOwnProperty(key)) {
                            var vl = superProps[key];

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            classData.extends.props[key] = vl;
                            if (!superExtends || !superExtends.props || !superExtends.props[key]) {
                                _parent[key] = vl;
                            }
                        }
                    }

                    var superMethods = superData.methods;
                    for (var key in superMethods) {
                        if (superMethods.hasOwnProperty(key)) {
                            var vl = superMethods[key];

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            if (key != "constructor") {
                                classData.extends.methods[key] = vl;
                                _parent[key] = vl;
                            }
                            if (!superExtends || !superExtends.methods || !superExtends.methods[key] || key == "constructor") {
                                _parent[key] = vl;
                            }

                        }
                    }


                    var superAccessors = superData.accessors;
                    for (var key in superAccessors) {
                        if (superAccessors.hasOwnProperty(key)) {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(classData.extends.accessors, key, superAccessors[key]);
                            _parent[key] = superAccessors[key];
                            if (typeof classData.accessors[key] == "undefined") {
                                classData.accessors[key] = {}
                            }
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(classData.accessors[key], superAccessors[key]);

                        }
                    }


                    superData.parents.slice(0).map(function (p) { classData.parents.push(p); });


                    var superPrepare = superData.prepare;
                    for (const key in superPrepare) {
                        if (Object.hasOwnProperty.call(superPrepare, key)) {
                            const fn = superPrepare[key];
                            classData.prepare[key] = fn;
                        }
                    }
                    var superCommits = superData.commits;
                    for (const key in superCommits) {
                        if (Object.hasOwnProperty.call(superCommits, key)) {
                            const fn = superCommits[key];
                            classData.commits[key] = fn;
                        }
                    }

                    var superaftercommits = superData.aftercommits;
                    for (const key in superaftercommits) {
                        if (Object.hasOwnProperty.call(superaftercommits, key)) {
                            const fn = superaftercommits[key];
                            classData.aftercommits[key] = fn;
                        }
                    }

                    var superStatic = superData.static;
                    for (const key in superStatic) {
                        if (Object.hasOwnProperty.call(superStatic, key)) {
                            const fn = superStatic[key];
                            classData.static[key] = fn;
                        }
                    }


                    superData.calls.map(function (g) { classData.calls.push(g) });

                    if (!classData.dynamicCreateMode && superData.dynamicCreateMode) {
                        classData.dynamicCreateMode = superData.dynamicCreateMode;
                    }

                }
                else if (typeof superClass == "function" && typeof superClass.prototype == "object") {
                    cn = superClass.name || "parent_" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(8);
                    if (typeof superClass.prototype.constructor == "function") {
                        _parent.constructor = superClass.prototype.constructor;
                        _parent[cn] = superClass.prototype.constructor;
                        classData.methods[cn] = superClass.prototype.constructor;
                        classData.constructs.push(superClass.prototype.constructor);
                        classData.supers[cn] = superClass.prototype.constructor;
                    }
                    for (let mt in superClass.prototype) {
                        if (superClass.prototype.hasOwnProperty(mt)) {
                            var method = superClass.prototype[mt];
                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            if (mt == "constructor") {
                                _parent.constructor = method;
                                _parent[cn] = method;
                                classData.methods[cn] = method;
                                classData.constructs.push(method);
                                classData.supers[cn] = method;
                            }
                            else if (typeof method == "function") {
                                classData.extends.methods[mt] = method;
                            }
                            else {
                                classData.extends.props[mt] = method;
                            }
                            _parent[mt] = method;
                        }
                    }
                    classData.parents.push(superClass);

                }

                if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(_parent) && cn) {
                    // if (typeof $classData.parents[ES5Class.__class] == "undefined") {
                    //     classData.parentMap = {};
                    // }
                    _parent.__class__ = cn;
                    classData.parentMap[cn] = _parent;
                }
            }
        }


        Object.assign(Wrapper.prototype, {
            constructor: Wrapper,
            refClass: ES5Class

        });

        Wrapper.__type = "wrapper";
        /**
         * kế thừa
         * @param {ES5Class|function(...args)}
         */
        Wrapper.extends = function (superClass) {
            if (commited) {
                throw new Error("Không thể gọi hàm extends sau khi đã khai báo phương thức cho class");
            }

            for (var index = 0; index < arguments.length; index++) {
                var arg = arguments[index];
                _inherit(arg);
            }
            return this
        };

        /**
         * kế thừa các trait
         * @param {object} trait các thuộc tính và phương thức
         * @returns {ES5Class}
         */
        Wrapper.uses = function (...traits) {
            if (commited) {
                throw new Error("Không thể gọi hàm uses sau khi đã khai báo phương thức cho class");
            }

            function assignUses(props) {
                let prop1 = prepare(parsePrepare(props), 'uses');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        var lk = String(key).toLowerCase();
                        var el = prop1[key];

                        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['constructor', ES5Class.__class__], key)) {

                        }
                        else if (isConst(key)) {
                            throwConstError("trait", key, el)
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['boots', 'bootmethods', 'boot', '__boot__'], lk)) {
                            addBootMethod(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['inits', 'initmethods', 'init', '__init__'], lk)) {
                            addInitMethod(el);
                        }

                        else {
                            assignPropMethod('uses', key, el);
                        }
                    }
                }
            }
            var prototype = {};
            for (var index = 0; index < arguments.length; index++) {
                var props = arguments[index];
                if (typeof props == "object") {
                    assignUses(props);
                } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(props)) {
                    if (objectKeys(props.prototype).length > 1) {
                        Object.assign(prototype, props.prototype);
                    }
                }

            }

            assignUses(prototype);

            return Wrapper;
        };


        // khai báo

        /**
         * khai báo thuộc tính hoặc phương thức
         * @param {object} props thuộc tính hoặc phuong thức
         * @returns {ES5Class}
         */
        Wrapper.assign = function (props) {
            if (typeof props == "object") {
                let prop1 = prepare(parsePrepare(props), 'assign');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        let el = prop1[key];

                        if (isConst(key)) {
                            throwConstError(ES5Class.__class__, key, el)
                        }

                        else if ((key == "constructor" || key == ES5Class.__class__) && !isConst(key)) {
                            if (typeof el == "function") addConstructor(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['boots', 'bootmethods', 'boot', '__boot__'], String(key).toLowerCase())) {
                            addBootMethod(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['inits', 'initmethods', 'init', '__init__'], String(key).toLowerCase())) {
                            addInitMethod(el);
                        }

                        else if (typeof el == "function") {
                            assignPropMethod('methods', key, el);
                            // $classData.methods[key] = el;
                        }

                        else {
                            assignPropMethod('props', key, el);
                            // $classData.props[key] = el;
                        }
                    }
                }
            }
            _commit(ES5Class);
            return ES5Class;
        };


        /**
         * khai báo static
         * @param {string|object} props
         * @param {mixed} value
         * @returns {Wrapper}
         */
        Wrapper.static = function (props, value) {

            if (typeof props == "object") {
                let prop1 = prepare(parsePrepare(props), 'assign');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        var el = prop1[key];

                        classData.static[key] = el;
                        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class, key, el);

                    }
                }
            }
            else if (typeof props == "string") {
                var key = props;
                classData.static[key] = value;
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class, key, el);

            }
            return Wrapper;
        };

        /**
         * 
         * @param {function(props, scope, resolve, reject, classCtx)} fn 
         * @returns {Wrapper}
         */
        Wrapper.prepare = function (fn) {
            if (typeof fn == "function") {
                classData.prepare.push(fn);
            }
            return Wrapper;
        };
        /**
         * Cập nhật các thuộc tính mới
         */
        Wrapper.commit = function () {
            return _commit(ES5Class);
        };


        definePropertyGroup(Wrapper, {
            configurable: false,
            writable: false,
            enumerable: true,
            props: {
                // inherit: 
            }
        })




        function prepare(props, scope, baseClass) {
            let p = {};
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)) {
                for (const key in props) {
                    if (Object.prototype.hasOwnProperty.call(props, key)) {
                        const val = props[key];
                        p[key] = val;
                    }
                }
            }
            if (classData.prepare.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;
                let passed = true;
                let resolved = false;
                const resolve = function (prop) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(prop)) {
                        p = prop;
                        resolved = true;
                    };

                };
                const reject = function (msg) {
                    passed = false;
                    console.log(msg);
                }
                for (let index = 0; index < classData.prepare.length; index++) {
                    if (!passed) {
                        p = {};
                        break;
                    }
                    const f = classData.prepare[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [props, scope, resolve, reject, _classCtx]);
                        if (!passed) {
                            p = {};
                            break;
                        }
                        if (!resolved && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(rs)) {
                            p = rs;
                        }

                    }
                }
            }
            return p;
        }


        function onCommit(baseClass) {
            let passed = true;

            if (classData.commits.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;

                let resolved = false;
                const resolve = function () {
                    resolved = true;

                };
                const reject = function (msg) {
                    passed = false;
                }
                for (let index = 0; index < classData.commits.length; index++) {
                    if (!passed) {
                        break;
                    }
                    const f = classData.commits[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [classData, resolve, reject, _classCtx]);
                        if (!passed) {
                            break;
                        }
                        else if (rs === false) {
                            passed = false;
                        }
                    }
                }
            }
            return passed;
        }
        function onAfterCommit(baseClass) {
            let passed = true;

            if (classData.aftercommits.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;
                let resolved = false;
                const resolve = function () {
                    resolved = true;

                };
                const reject = function (msg) {
                    passed = false;
                }
                for (let index = 0; index < classData.aftercommits.length; index++) {
                    if (!passed) {
                        break;
                    }
                    const f = classData.aftercommits[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [classData, resolve, reject, _classCtx]);
                        if (!passed) {
                            break;
                        }
                        else if (rs === false) {
                            passed = false;
                        }
                    }
                }
            }
            return passed;
        }

        function parsePrepare(props) {
            let p = {};
            let hp = false;
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)) {
                for (const key in props) {
                    if (Object.prototype.hasOwnProperty.call(props, key)) {
                        const val = props[key];
                        const s = key.toLowerCase();
                        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__prepare', 'const$__prepare', 'finazl$__prepare', '__prepare__'], s)) {
                            if (typeof val == "function") {
                                classData.prepare.push(val);
                                hp = true;
                            }
                        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__commit', 'const$__commit', 'finazl$__commit', '__commit__'], s)) {
                            if (typeof val == "function") {
                                classData.commits.push(val);
                                hp = true;
                            }
                        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__commit_after', 'const$__commit_after', 'finazl$__commit_after', '__commit_after__', '__after_commit__', '__aftercommit__', 'aftercommit'], s)) {
                            if (typeof val == "function") {
                                classData.aftercommits.push(val);
                                hp = true;
                            }
                        } else {
                            p[key] = val;
                        }
                    }
                }
            }
            return hp ? p : props;
        }





        function checkConstructorCalled(args) {
            if (!iof(this, ES5Class)) {
                if (commited) {
                    if (classData.calls.length) {
                        const caller = classData.calls[classData.calls.length - 1];
                        if (typeof caller == "function") {
                            return caller.apply(ES5Class, args);
                        }
                    }
                    if (checkCreateNewInstanceByStaticConstructorCall()) {
                        return newInstance(args);
                    }
                }
                return Wrapper.assign.apply(null, args);
            }
            else {
                classConstructor.apply(this, args);
            }
            return NORETURN_VALUE;
        }


        /**
         * ham dc goi trong constructor
         */
        function classConstructor() {

            if (!commited) {
                _commit();
            }
            var instanceID = $className + "_" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand() + "_" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)("time");
            Object.defineProperty(this, '__instance__id__', {
                value: instanceID,
                enumerable: false,
                configurable: false,
                writable: false
            });
            Object.defineProperty(this, '__test__key__', {
                enumerable: false,
                configurable: false,
                set: function (value) { return value },
                get: function () { return true; }
            });

            updateProperties.call(this, true);

            addClassInstance(instanceID, this);


            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(classData.accessors)) {
                for (var key in classData.accessors) {
                    if (Object.hasOwnProperty.call(classData.accessors, key)) {
                        var val = classData.accessors[key].value;
                        addAccessorValue(instanceID, key, val);
                    }
                }
            }

            addParent(this);

            // if (!isEmpty($classData.parent)) {
            //     for (var key in $classData.parent) {
            //         if ($classData.parent.hasOwnProperty(key)) {
            //             var parentOpt = $classData.parent[key];
            //             __addAccessorValue(instanceID, "__parent",
            //                 new stdParent(this, key)
            //             );
            //         }
            //     }
            // }


            // if (oneTimeData && isObject(oneTimeData) && !isEmpty(oneTimeData)) {
            //     for (const key in oneTimeData) {
            //         if (Object.hasOwnProperty.call(oneTimeData, key)) {
            //             const value = oneTimeData[key];
            //             this[key] = value;
            //         }
            //     }
            //     oneTimeData = {};
            // }








            for (let i = 0; i < classData.boots.length; i++) {
                const f = classData.boots[i];
                if (typeof f == "function") {
                    f.call(this);
                }
                else if (typeof this[f] == "function") {
                    this[key].apply(this, []);
                }
            }
            if (typeof this.boot == "function") {
                this.boot();
                // this.boot = function () {
                //     console.warn(ES5Class.__class + " boot đã được gọi khi khởi tạo");
                // };
            }

            __construct.apply(this, arguments);

            for (let i = 0; i < classData.inits.length; i++) {
                const f = classData.inits[i];
                if (typeof f == "function") {
                    f.call(this);
                }
                else if (typeof this[f] == "function") {
                    this[key].apply(this, []);
                }
            }

            if (typeof this.init == "function") {
                this.init();
                // this.boot = function () {
                //     console.warn(ES5Class.__class + " boot đã được gọi khi khởi tạo");
                // };
            }



        };


        function addBootMethod(method) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(method)) {
                if (classData.boots.indexOf(method) == -1) classData.boots.push(method);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(method)) {
                method.map(function (mt) {
                    if (classData.boots.indexOf(mt) == -1) classData.boots.push(mt);
                });
            }
        }

        function addInitMethod(method) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(method)) {
                if (classData.inits.indexOf(method) == -1) classData.inits.push(method);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(method)) {
                method.map(function (mt) {
                    if (classData.inits.indexOf(mt) == -1) classData.inits.push(mt);
                });
            }

        }

        /**
         * khai bao thuoc tinh hoac phuong thuc
         * @param {string} scope 
         * @param {string} key 
         * @param {*} value 
         */
        function assignPropMethod(scope, key, value) {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) return false;
            var a = String(key).split("$");
            if (a.length == 2) {
                if (a[0].length) {
                    var s = a[0].toLowerCase();
                    if (s == "const" || s == "final") {
                        if (!isConst(a[1])) {
                            if (a[1] == "constructor") {
                                if (typeof value == 'function') {
                                    addConstructor(value)
                                }
                            }

                            if (typeof value == "function" && (a[1] == "call" || a[1] == "caller" || a[1] == "__call" || a[1] == "__call__")) {
                                classData.calls.push(value);
                                classData.constants[a[1]] = NORETURN_VALUE;
                            }
                            else {
                                classData.constants[a[1]] = value;
                            }

                        } else {
                            throw new Error("Bạn không thể ghi đè một Hằng");
                        }
                    }
                    else if (s == 'onset' || s == 'set') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].set = value;
                        }

                    }
                    else if (s == 'onafterset' || s == 'setted' || s == 'afterset') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].afterSet = value;
                        }

                    }
                    else if (s == 'onget' || s == 'get') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].get = value;
                        }
                    }
                    else if (s == 'static') {
                        classData.static[a[1]] = value;
                    }
                    else if (!isConst(a[1])) {
                        classData.constants[a[1]] = value;
                        if (typeof value == "function" && (a[1] == "call" || a[1] == "caller" || a[1] == "__call" || a[1] == "__call__")) {
                            classData.calls.push(value);
                        }
                        else if (typeof classData[scope] == "object") {
                            if (typeof classData.uses[key] != "undefined") delete classData.uses[key];
                            if (typeof classData.methods[key] != "undefined") delete classData.methods[key];
                            if (typeof classData.props[key] != "undefined") delete classData.props[key];
                            classData[scope][key] = value;
                        }
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(DynamicCreateKeys, a[1])) {
                    classData.dynamicCreateMode = value;
                }
                else if (a[1] && !isConst(a[1])) {
                    addAccessorData(a[1], value);
                }

            }
            else if (!isConst(key)) {
                let kl = String(key).toLowerCase();
                if (typeof value == "function" && (kl == "call" || kl == "caller" || kl == "__call" || kl == "__call__")) {
                    classData.calls.push(value);
                }
                // else if(a[1]){
                //     classData.accessors[a[1]] = value;
                // }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(DynamicCreateKeys, key)) {
                    classData.dynamicCreateMode = value;
                }

                else if (typeof classData[scope] == "object") {
                    if (typeof classData.uses[key] != "undefined") delete classData.uses[key];
                    if (typeof classData.methods[key] != "undefined") delete classData.methods[key];
                    if (typeof classData.props[key] != "undefined") delete classData.props[key];
                    classData[scope][key] = value;
                }
            }
        }

        function addAccessorValue(instanceID, key, val) {
            addClassInstanceData(instanceID, key, val);
        }

        function addAccessorData(key, value) {
            let acData = classData.accessors;
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) {
                if (typeof acData[key] == "undefined") {
                    acData[key] = {}
                }
                acData[key].value = value;
            }
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key)) {
                for (const k in key) {
                    if (Object.hasOwnProperty.call(key, k)) {
                        const v = key[k];
                        if (typeof acData[k] == "undefined") {
                            acData[k] = {}
                        }
                        acData[k].value = value;
                    }
                }
            }
        }


        function addAccessorKey(key) {

            if (ES5Class.prototype[key] !== undefined) return false;
            try {
                var g, s, afs;
                if (typeof classData.accessors[key] == "object") {
                    if (typeof classData.accessors[key].get == "function")
                        g = classData.accessors[key].get;
                    if (typeof classData.accessors[key].set == "function")
                        s = classData.accessors[key].set;
                    if (typeof classData.accessors[key].afterSet == "function")
                        afs = classData.accessors[key].afterSet;
                }

                Object.defineProperty(ES5Class.prototype, key, {
                    get: function get() {
                        var value = getClassInstanceData(this.__instance__id__, key);
                        var f = 'get' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r = this[f].call(this, value);
                            if (typeof r != "undefined") return r;
                        }
                        var f2 = 'onGet' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f2] == "function") {
                            var r2 = this[f2].call(this, value);
                            if (typeof r2 != "undefined") return r2;
                        }
                        if (g) {
                            var r3 = g.apply(this, [value]);
                            if (typeof r3 != "undefined") return r3;
                        }
                        return value;
                    },
                    set: function set(value) {
                        var stt = true;
                        var data = getClassInstanceData(this.__instance__id__);
                        var oldVal = data[key];
                        var f = 'onSet' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r2 = this[f].call(this, value, oldVal);
                            if (typeof r2 != "undefined") return r2;
                        }

                        if (s) {
                            var a = s.call(this, value, oldVal);
                            if (a === false) stt = false;
                        }

                        if (stt) {
                            data[key] = value;
                            if(afs) afs.call(this, value);
                        }

                        
                        return data[key];
                    }
                });
            } catch (error) {
                console.log(ES5Class.__class__);
                console.warn(error);
            }

        }


        var __constructs = [];
        var copyConstructs = [];
        var commitProps = {};
        function _commit(BaseClass) {

            if (commited) {
                return ES5Class;
            }
            onCommit(ES5Class);
            for (var key in classData.constants) {
                if (Object.hasOwnProperty.call(classData.constants, key)) {
                    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['constructor', ES5Class.__class__], key)) {
                        Object.defineProperty(ES5Class.prototype, key, {
                            value: classData.constants[key],
                            enumerable: true,
                            configurable: false,
                            writable: false
                        })
                    }
                }
            }
            // console.log(classData);
            var methods = {};
            var props = {};
            if (classData.extends) {
                for (var scope in classData.extends) {
                    if (classData.extends.hasOwnProperty(scope)) {
                        var _extends = classData.extends[scope];
                        if (scope == 'methods') {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(methods, _extends);
                        }
                        else if (scope == 'props') {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, _extends);
                        }
                    }
                }
            }

            if (classData.uses) {
                for (var key in classData.uses) {
                    if (classData.uses.hasOwnProperty(key)) {
                        var val = classData.uses[key];
                        if (typeof val == "function") {
                            methods[key] = val;
                        }
                        else {
                            props[key] = val;
                        }
                    }
                }
            }



            for (var method in classData.methods) {
                if (classData.methods.hasOwnProperty(method)) {
                    var cb = classData.methods[method];
                    methods[method] = cb;
                }
            }

            var mts = {};
            Object.assign(mts, methods);
            for (var key in mts) {
                if (mts.hasOwnProperty(key) && key != "constructor") {
                    var mt = mts[key];
                    __addMethod(key, mt);
                }
            }

            commited = true;

            commitProps = props;

            // if (classData.constructs) {
            //     for (var fn in classData.constructs) {
            //         if (classData.constructs.hasOwnProperty(fn)) {
            //             __constructs.push(classData.constructs[fn]);
            //         }
            //     }
            // }



            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(classData.accessors)) {
                for (let key in classData.accessors) {
                    if (Object.hasOwnProperty.call(classData.accessors, key)) {
                        // var val = classData.accessors[key];
                        addAccessorKey(key);
                    }
                }
            }


            parseDataProps();

            onAfterCommit(ES5Class);

            return ES5Class;
        }

        function __addMethod(name, handle) {
            if (name.length > 6) {
                var pre = name.substr(0, 6).toLowerCase();
                var n = name.substr(6, 1).toLowerCase() + (name.length > 7 ? name.substr(7) : '');
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['$onset', 'onset$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].set = handle;
                    return;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['$onget', 'onget$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].get = handle;
                    return;
                }
            }
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class.prototype, name, handle);

        }

        function parseDataProps() {
            var props = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)({}, commitProps);
            for (var prop in classData.props) {
                if (classData.props.hasOwnProperty(prop)) {
                    var cb = classData.props[prop];
                    props[prop] = cb;
                    // if ((!override && typeof this[prop] == "undefined") || override == true) {
                    //     $props[prop] = cb;
                    // }
                }
            }

            for (var key in props) {
                if (props.hasOwnProperty(key)) {
                    var val = props[key];
                    if (key.substr(0, 1) == '$') {
                        var ks = key.substr(1);
                        // addAccessorValue(this, ks, val);

                        addAccessorKey(ks);

                    }
                    else {
                        classData.pendingProps[key] = val;
                        // _defineProperty(this, key, val);
                    }
                }
            }

        }


        // hàm khởi tạo
        function __construct() {
            var self = this;
            copyConstructs = classData.constructs.slice(0);
            return (typeof this[$className] == "function" ? this[$className] : (
                typeof classData.construct == "function" ? classData.construct : (
                    copyConstructs.length ? copyConstructs.pop() : function () { }
                )
            )).apply(this, arguments);

        }

        function addParent(instance) {


        }

        /**
         * them ham khoi tao
         * @param {function(...args)} constructor ham khoi tao
         */
        function addConstructor(constructor) {

            classData.methods.constructor = classData.methods[$className] = classData.construct = function Constructor() {
                if (copyConstructs.length) {
                    copyConstructs = classData.constructs.slice(0);
                    Object.defineProperty(this, "super", {
                        value: function parentConstructor() {
                            var args1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
                            var pConstructor = copyConstructs.pop();
                            pConstructor.apply(this, args1);
                        },
                        enumerable: false

                    })
                }
                constructor.apply(this, arguments);
            }
        }

        function newInstance(args) {
            return createInstance(ES5Class, args);
        }

        function checkCreateNewInstanceByStaticConstructorCall() {
            if (commited && classData.dynamicCreateMode) {
                return true;
            }
            return false;
        }

        function isConst(key) {
            return Object.hasOwnProperty.call(classData.constants, key);
        }

        function throwConstError(className, key, value) {
            throw new Error("Không thể kế thừa " + (typeof value == "function" ? "phương thức" : "thuộc tính") + " [" + key + "] từ class [" + className + "] do trùng vời hàng số đã được khai báo");
        }

        return Wrapper;

    }();
};
const _class = createClass;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createClass);



/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lH": () => (/* binding */ _instanceof),
/* harmony export */   "Pm": () => (/* binding */ _defineProperties),
/* harmony export */   "TD": () => (/* binding */ _createClass),
/* harmony export */   "w2": () => (/* binding */ _defineProperty),
/* harmony export */   "sN": () => (/* binding */ addToGlobal),
/* harmony export */   "oL": () => (/* binding */ getType),
/* harmony export */   "$1": () => (/* binding */ checkType),
/* harmony export */   "kJ": () => (/* binding */ isArray),
/* harmony export */   "jn": () => (/* binding */ isBoolean),
/* harmony export */   "Kn": () => (/* binding */ isObject),
/* harmony export */   "HD": () => (/* binding */ isString),
/* harmony export */   "hj": () => (/* binding */ isNumber),
/* harmony export */   "U": () => (/* binding */ isInteger),
/* harmony export */   "Jh": () => (/* binding */ isEmail),
/* harmony export */   "Ft": () => (/* binding */ isNull),
/* harmony export */   "hp": () => (/* binding */ isFormData),
/* harmony export */   "xb": () => (/* binding */ isEmpty),
/* harmony export */   "GV": () => (/* binding */ isCallable),
/* harmony export */   "mf": () => (/* binding */ isFunction),
/* harmony export */   "IC": () => (/* binding */ isProperty),
/* harmony export */   "A": () => (/* binding */ isMethod),
/* harmony export */   "Uh": () => (/* binding */ hasValue),
/* harmony export */   "d3": () => (/* binding */ inArray),
/* harmony export */   "rj": () => (/* binding */ cutWithout),
/* harmony export */   "qV": () => (/* binding */ copyWithout),
/* harmony export */   "$3": () => (/* binding */ copyArray),
/* harmony export */   "Yd": () => (/* binding */ objectKeys),
/* harmony export */   "TT": () => (/* binding */ objectValues),
/* harmony export */   "TS": () => (/* binding */ merge),
/* harmony export */   "$e": () => (/* binding */ combine),
/* harmony export */   "KA": () => (/* binding */ arrayJoin),
/* harmony export */   "aX": () => (/* binding */ objectHasKey),
/* harmony export */   "o8": () => (/* binding */ objectHasProperty),
/* harmony export */   "yp": () => (/* binding */ destroyObject),
/* harmony export */   "zH": () => (/* binding */ assignOneValue),
/* harmony export */   "Cq": () => (/* binding */ Num),
/* harmony export */   "W3": () => (/* binding */ Str),
/* harmony export */   "hT": () => (/* binding */ date),
/* harmony export */   "Gn": () => (/* binding */ getEl),
/* harmony export */   "MP": () => (/* binding */ assignValue),
/* harmony export */   "bg": () => (/* binding */ assignWithout),
/* harmony export */   "_W": () => (/* binding */ assignIfNotExists),
/* harmony export */   "wB": () => (/* binding */ objectAssign),
/* harmony export */   "hq": () => (/* binding */ colorToHex),
/* harmony export */   "R8": () => (/* binding */ invertHexColor),
/* harmony export */   "Y9": () => (/* binding */ minOf),
/* harmony export */   "yZ": () => (/* binding */ maxOf),
/* harmony export */   "GE": () => (/* binding */ copyByList),
/* harmony export */   "Q7": () => (/* binding */ isFloat),
/* harmony export */   "ci": () => (/* binding */ Queue),
/* harmony export */   "kg": () => (/* binding */ queueTask),
/* harmony export */   "E2": () => (/* binding */ combineElenentsToArrList),
/* harmony export */   "Ss": () => (/* binding */ combineElenentsJoinStringList),
/* harmony export */   "Tu": () => (/* binding */ getArguments),
/* harmony export */   "dj": () => (/* binding */ JsonToBase64),
/* harmony export */   "Mi": () => (/* binding */ b64toBlob),
/* harmony export */   "tg": () => (/* binding */ resizeImage),
/* harmony export */   "dg": () => (/* binding */ getTimeStamp),
/* harmony export */   "S3": () => (/* binding */ degreeToRadians),
/* harmony export */   "DR": () => (/* binding */ radianToDegrees),
/* harmony export */   "tr": () => (/* binding */ newObj),
/* harmony export */   "FD": () => (/* binding */ emptyObject),
/* harmony export */   "Sk": () => (/* binding */ getInputCfg),
/* harmony export */   "X5": () => (/* binding */ getFirstValueInList),
/* harmony export */   "Ic": () => (/* binding */ EMPTY_VALUE)
/* harmony export */ });
// var Helper;
var global = undefined || window || {document:{createElement:function(tag){return Object({})}}};
function addToGlobal(name, value) {
    global[name] = value;
}



// mang
var arr = [];

var document = global.document;

var div = document.createElement("div");

// var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var createElement = document.createElement;


// var $$;
if (typeof Object.assign != 'function') {

    Object.assign = function (target, varArgs) { // .length của function là 2
        'use strict';
        if (target == null) { // TypeError nếu undefined hoặc null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Bỏ qua nếu undefined hoặc null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}


var isFunction = function isFunction(obj) {

    return typeof obj === "function" && typeof obj.nodeType !== "number";
};

var isCallable = function (variable) {
    return typeof variable === "function";
};

var FD = typeof FormData != "undefined" ? FormData : function FormData() { this.data = null; };
/**
 * lấy kiểu giá trị của biến
 * @param {*} obj
 * @return {string}
 */
var getType = function (obj) {
    var t = 'null';
    var type = typeof obj;
    if (type == 'object') {
        if (obj === null) {
            t = 'null';
        } else if (obj.constructor == FD) {
            t = 'formdata';
        } else if (obj.constructor == Array) {
            t = 'array';
        } else if (obj.constructor == Object) {
            t = 'object';
        } else if (obj.constructor == Number) {
            t = 'number';
        } else {
            t = 'object';
        }
    } else {
        t = type;
    }
    return t;
};
/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
var isString = function isString(variable) {
    var type = getType(variable);
    return type == "string" || (type == "number" && !isNaN(variable));
}
/**
 * kiềm tra có phải null
 * @param {*} variable biến bất kỳ
 */
var isNull = function isNull(variable) {
    return getType(variable) == "null";
}
/**
 * kiềm tra có phải array
 * @param {*} variable biến bất kỳ
 */
var isArray = function isArray(variable) {
    return getType(variable) == "array" || Array.isArray(variable);
}
/**
 * kiềm tra có phải object
 * @param {*} variable biến bất kỳ
 */
var isObject = function isObject(variable) {
    return getType(variable) == "object";
}
/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
var isNumber = function isNumber(variable) {
    var type = getType(variable);
    return (type === "number" || type === "string") && !isNaN(variable - parseFloat(variable));
}
/**
 * kiềm tra có phải loat
 * @param {*} variable biến bất kỳ
 */
var isFloat = function isFloat(variable) {
    var type = getType(variable);
    return (type === "number" || type === "string") && !isNaN(variable - parseFloat(variable));
}

/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
var isInteger = function isInteger(variable) {
    return isNumber(variable) && String(parseInt(variable)) == String(variable);
}


/**
 * kiềm tra có phải boolean
 * @param {*} variable biến bất kỳ
 */
var isBoolean = function isBoolean(variable) {
    return getType(variable) == "boolean";
}

/**
 * kiềm tra có phải Formdata
 * @param {*} variable biến bất kỳ
 */
var isFormData = function isFormData(variable) {
    return getType(variable) == "formdata";
}

/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
var isEmail = function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

var isEmpty = function (obj) {

    if (typeof obj == "undefined") return true;

    // console.log(any.constructor)
    var type = getType(obj);

    if (type == "object") {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    else if (type == "array" || type == 'string') {
        return obj.length == 0;
    }
    else return !obj;
}
var emptyFunc = function () { };

var newObj = (obj) => {
    var d = isObject(obj) ? obj : {};
    var a = Object.create(d);
    for (const key in d) {
        if (Object.prototype.hasOwnProperty.call(d, key)) {
            const v = d[key];
            a[key] = v;
        }
    }
    return a;
}
var emptyObject = function () {
    return Object.create({});
}
/**
 *
 * @param {object} dst
 * @param {object} src
 * @returns {object}
 */
var merge = function (dst, src) {
    if (!dst || !isObject(dst)) dst = {};
    var to = Object(dst);
    var srclength = arguments.length;
    for (var i = 1; i < srclength; i++) {
        var srcObj = arguments[i];
        if (isObject(srcObj)) {
            for (var key in srcObj) {
                if (srcObj.hasOwnProperty(key)) {
                    var val = srcObj[key];
                    if ((isObject(val) || isArray(val)) && !isFormData(val) && val.constructor != Promise) {
                        var d = {};
                        to[key] = merge(d, val);
                    } else {
                        to[key] = val;
                    }
                }
            }
        }
    }
    return dst;
}

/**
 * sao chep gia tri trong mang
 * @param {array|object} src mang doi tuong  can sao chep
 */
var copyArray = function (src) {
    var arr = [];
    var t = getType(src);
    if (t == 'object' || t == 'array') {
        if (src.length) {
            for (var index = 0; index < src.length; index++) {
                if (typeof src[index] != "undefined") {
                    arr.push(src[index]);
                }
            }
        } else if (t == 'object') {
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    var item = src[key];
                    arr.push(item);
                }
            }
        }
    }
    return arr;
};


var combine = function combine(list) {
    var sth = function (lst, i) {
        if (!i) i = 0;
        var ls = [];
        if (lst.length <= i) return [];
        var arr = lst[i];
        arr.map(function (c) {
            var s = c;
            if (i < lst.length - 1) {
                var tl = sth(lst, i + 1);
                if (tl.length) {
                    tl.map(function (t) {
                        ls.push(c + "" + t);
                    });
                } else {
                    ls.push(c);
                }
            } else {
                ls.push(c);
            }
        });
        return ls;
    };
    return sth(list);
};


var objectKeys = function (obj) {
    var keys = [];
    if (isArray(obj) || isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
    }
    return keys;
};
var objectValues = function (obj) {
    const values = Object.values(obj);
    // var values = [];
    // obj.a = 0;
    // if (isArray(obj) || isObject(obj)) {
    //     for (var key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             values.push(obj[key]);
    //         }
    //     }
    // }
    return values;
};

var isProperty = function isProperty(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
var isMethod = function isisMethod(obj, key) {
    var a = false;
    eval("a = typeof obj[key] == 'function'");
    return a;
}

/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
var hasValue = function hasValue(arr, value, checkType) {
    if (typeof arr == "undefined") return false;
    var t = getType(arr);
    if (t == 'array') {
        if (checkType == true) {
            for (var index = 0; index < arr.length; index++) {
                var v = arr[index];
                if (v === value) return true;
            }
        } else {
            return arr.indexOf(value) >= 0;
        }
    } else if (t == 'object') {
        if (checkType) {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v === value) {
                        return true;
                    }
                }
            }
        } else {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v == value) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
var inArray = function inArray(arr, value, checkType) {
    if (typeof arr == "undefined") return false;
    var t = getType(arr);
    if (t != "array" && t != "object" && (isArray(value) || isObject(value))) {
        var c = arr;
        arr = value;
        value = c;
        t = getType(arr);
    }
    if (t == 'array') {
        if (checkType == true) {
            for (var index = 0; index < arr.length; index++) {
                var v = arr[index];
                if (v === value) return true;
            }
        } else {
            return arr.indexOf(value) >= 0;
        }
    } else if (t == 'object') {
        if (checkType) {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v === value) {
                        return true;
                    }
                }
            }
        } else {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v == value) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};


var cutWithout = function cutWithout(obj, keys) {
    var newObj = Object.create({});
    var oldObj = Object.create(obj);
    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    list.push(keys[key]);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
}

var copyWithout = function copyWithout(obj, keys) {
    var newObj = Object.create({});
    var oldObj = Object.create(obj);

    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    list.push(keys[key]);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
};


var copyByList = function copyByList(obj, keys) {
    var newObj = {};
    var oldObj = Object.create(obj);
    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    var v = keys[key];
                    list.push(key);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
};

/**
 * kiểm tra toàn bộ kiểu dử liệu của các phần tử con
 * @param {string} type kiểu dử liệu
 * @param {array} object đối tượng cần kiểm tra
 */
var checkAllElementType = function checkAllElementType(type, object) {
    if (!(isString(type) || isArray(type)) || !(isArray(object) || isObject(object))) {
        return false;
    }
    var types = [];
    if (!isArray(type)) types = [type];
    else types = type.slice(0);
    var checked = false;
    if (isArray(object)) {
        let temp = Object.values(object);
        return temp.length && temp.length == temp.filter(function (value) { return types.indexOf(getType(value)) >= 0; }).length;
    }
    var nO = Object.create(object);
    for (var key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if (types.indexOf(getType(nO[key])) < 0) return false;
            checked = true;
        }
    }
    return checked;

}
/**
 * trổn 2 mảng thành mảng kết hợp mới
 * @param {array[]} arrayArr mảng chứa các phần tử con là 1 mảng
 * @param {any[]} arrayAny mảng chứa các phần tử con có kiểu dử liệu là string hoặc number
 * @returns {array[]}
 */
var combineTwoArray = function combineTwoArray(arrayArr, arrayAny) {
    var newArr = [];
    for (var i = 0; i < arrayArr.length; i++) {
        var arr = arrayArr[i];

        for (var j = 0; j < arrayAny.length; j++) {
            var any = arrayAny[j];
            var v = arr.slice(0);
            v.push(any);
            newArr.push(v);
        }
    }
    return newArr;
};


/**
 * lấy tổ hợp các các phần từ com
 * @param {array} arr1 
 * @param {array} arr2 
 */
var combineElenentsToArrList = function combineElenentsToArrList() {
    var arrayList = [];
    for (var index = 0; index < arguments.length; index++) {
        var arg = arguments[index];
        if (!isArray(arg) || !checkAllElementType(['string', 'number'], arg)) return [];

        arrayList.push(arg);
    }
    if (arrayList.length < 2) return arrayList[0];
    var results = [];
    arrayList[0].map(function (str) {
        results.push([str]);
    });
    for (var i = 1; i < arrayList.length; i++) {
        var arr = arrayList[i];
        results = combineTwoArray(results, arr);
    }

    return results;
};

/**
 * trộn 2 hoặc nhiều mảng thành mảng tổ hợp các phần tử dược nối với nhau bằng delimiter
 * @param {string} deliniter ký tự nối
 * @param {string[]} arr1 mảng 1
 * @param {string[]} arr2 mảng 2
 * @param {string[]} ...arrN mảng 2
 * 
 * @returns {string[]}
 */
var combineElenentsJoinStringList = function combineElenentsJoinStringList(deliniter, arr1, arr2) {
    var arrayList = [];
    for (var index = 1; index < arguments.length; index++) {
        var arg = arguments[index];

        if (!isArray(arg) || !checkAllElementType(['string', 'number'], arg)) return [];

        arrayList.push(arg);
    }
    if (arrayList.length < 2) return arr1;
    var results = combineElenentsToArrList(...arrayList);
    if (!isString(deliniter)) deliniter = '';
    return results.map(function (arr) {
        return arr.join(deliniter);
    });
}


/**
 * lay ra gia tri nho nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
var minOf = function minOf(obj) {
    var min = NaN;
    if (arguments.length > 1 && !(isArray(obj) || isObject(obj))) {
        obj = copyArray(arguments);
    }
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (!isNumber(obj[index])) continue;
            var n = Number(obj[index]);

            if (isNaN(min) || !index)
                min = n;
            else if (n < min) min = n;
        }
    }
    else if (isObject(obj)) {
        var index = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!isNumber(obj[index])) continue;
                else {
                    var n = Number(obj[index]);
                    if (isNaN(min) || !index) min = n;
                    else if (n < min) min = n;
                }
                index++;
            }
        }
    }
    return min;
};

/**
 * lay ra gia tri lon nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
var maxOf = function maxOf(obj) {
    var min = NaN;
    if (arguments.length > 1 && !(isArray(obj) || isObject(obj))) {
        obj = copyArray(arguments);
    }
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (!isNumber(obj[index])) continue;
            else {
                var n = Number(obj[index]);
                if (isNaN(min) || !index) min = n;
                else if (n > min) min = n;
            }
        }
    }
    else if (isObject(obj)) {
        var index = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!isNumber(obj[index])) continue;
                else {
                    var n = Number(obj[index]);
                    if (isNaN(min) || !index) min = n;
                    else if (n > min) min = n;
                }
                index++;
            }
        }
    }
    return min;
};

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
};

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

function _defineProperties(target, props) {
    if (isArray(props)) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    else if (isObject(props)) {
        for (var key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                var val = props[key];
                Object.defineProperty(target, key, val);
            }
        }
    }

};

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
};

var checkType = function checkType(type, value, absolultely) {
    if (typeof type !== "string" || !type) return false;
    var tl = type.toLowerCase();
    if (tl == "float") tl = 'number';
    if (tl == 'mixed') return true;
    var t = type.substr(0, 1).toUpperCase() + type.substr(1).toLowerCase();
    var t2 = getType(value);
    return absolultely ? t2 === tl : t2 == tl;
};

/**
 * Kiểm tra tồn tại key hay ko?
 * @param {object|array} obj doi tuong can kiem tra
 * @param {string} key 
 * @returns {boolean}
 */
function objectHasKey(obj, key) {
    return (isObject(obj) && isString(key) && Object.hasOwnProperty.call(obj, key));
}

/**
 * kiểm tra sự tồn tại của thuộc tinh thông qua key và kiểu giá trị
 * @param {any} obj doi tuong can kiem tra
 * @param {string} key danh sach key kem kiey gia tri
 * @param {string} type kieu gia tri
 * @returns {boolean}
 */
var objectHasProperty = function objectHasProperty(obj, key, type) {
    if (!isObject(obj) || isEmpty(obj) || typeof key == "undefined" || (!isString(key) && !isArray(key))) return false;
    var keys = isArray(key) ? key : [key + (isString(type) ? ":" + type : "")];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var ks = k.split(':');
        var kv = ks[0];
        if (!objectHasKey(obj, kv)) return false;
        if (ks.length == 2) {
            var b = ks[1].split('|').map(function (t) { return t.trim(); }).filter(function (vl) { return vl.length > 0; });
            if (b.length && !inArray(b, getType(obj[kv]))) return false;
        }
    }
    return true;
}

/**
 * joi các mảng vào làm một
 * @param {string[]|number[]} target mảng đầu vào cần join
 * @returns {array}
 */
function arrayJoin(target) {
    if (!isArray(target)) target = [];
    function addToTarget(arr) {
        arr.map(function (vl) {
            if (target.indexOf(vl) === -1) {
                target.push(vl);
            }
        })
    }
    var args = getArguments(arguments, 1);
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (isArray(arg)) addToTarget(arg);
        else if (isObject(arg)) addToTarget(objectValues(arg));
        else addToTarget(arg);
    }
    return target;
}







/**
 * 
 * @param obj 
 * @param key 
 * @param delimiter 
 * @returns 
 */
var getEl = function (obj, key, defaultValue, delimiter) {
    if (typeof obj == 'undefined') {
        return null;
    }
    if (typeof key == 'undefined') {
        return obj;
    }
    var tpo = getType(obj);
    var tpk = getType(key);
    if (tpo == 'array') {
        var k = NaN;
        if (tpk == 'number') {
            k = key;
        } else if (parseInt(key) != NaN) {
            k = parseInt(key);
        }
        if (!isNaN(k)) {
            if (typeof obj[k] != 'undefined') {
                return obj[k];
            }
        }
    }
    else if(tpo == "object"){
        var c = obj;
        var d = isString(delimiter)?delimiter:'.';
        var ks = String(key).split(d);
        for (let index = 0; index < ks.length; index++) {
            const e = ks[index];
            if(objectHasKey(c, e)) {
                c = c[e];
            }else{
                c = defaultValue;
            }
            if(index < ks.length -1 && (!isObject(c) && !isArray(c))) return defaultValue;
        }
        return c;

    }
    return defaultValue;
};

var Num = {
    rand: function (from, to) {
        if (!from) from = 0;
        if (!to) to = 0;
        if (from == 0) to++;
        var rand = Math.floor(Math.random() * to) + from;
        return rand;
    },
    currency: function (x) {
        return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1\.");
    }
};

var convertedArray = [];

var Str = {
    html_char_raw: ['%', '&', '=', '?', '#', '+', ':', '/', ' ', '\n', '{', '}'],
    html_char_enc: ['%25', '%26', '%3D', '%3F', '%23', '%2B', '%3A', '%2F', '+', '%0D%0A', '%7B', '%7D'],
    urlcode: { '%': '%25', '&': '%26', '=': '%3D', '?': '%3F', '#': '%23', '+': '%2B', ':': '%3A', '/': '%2F', ' ': '%20', '\n': '%0D%0A', '{': '%7B', '}': '%7D' },
    unicode: {
        js: ["\\u00e0", "\\u00e1", "\\u1ea1", "\\u1ea3", "\\u00e3", "\\u00e2", "\\u1ea7", "\\u1ea5", "\\u1ead", "\\u1ea9", "\\u1eab", "\\u0103", "\\u1eb1", "\\u1eaf", "\\u1eb7", "\\u1eb3", "\\u1eb5", "\\u00e8", "\\u00e9", "\\u1eb9", "\\u1ebb", "\\u1ebd", "\\u00ea", "\\u1ec1", "\\u1ebf", "\\u1ec7", "\\u1ec3", "\\u1ec5", "\\u00ec", "\\u00ed", "\\u1ecb", "\\u1ec9", "\\u0129", "\\u00f2", "\\u00f3", "\\u1ecd", "\\u1ecf", "\\u00f5", "\\u00f4", "\\u1ed3", "\\u1ed1", "\\u1ed9", "\\u1ed5", "\\u1ed7", "\\u01a1", "\\u1edd", "\\u1edb", "\\u1ee3", "\\u1edf", "\\u1ee1", "\\u00f9", "\\u00fa", "\\u1ee5", "\\u1ee7", "\\u0169", "\\u01b0", "\\u1eeb", "\\u1ee9", "\\u1ef1", "\\u1eed", "\\u1eef", "\\u1ef3", "\\u00fd", "\\u1ef5", "\\u1ef7", "\\u1ef9", "\\u0111", "\\u00c0", "\\u00c1", "\\u1ea0", "\\u1ea2", "\\u00c3", "\\u00c2", "\\u1ea6", "\\u1ea4", "\\u1eac", "\\u1ea8", "\\u1eaa", "\\u0102", "\\u1eb0", "\\u1eae", "\\u1eb6", "\\u1eb2", "\\u1eb4", "\\u00c8", "\\u00c9", "\\u1eb8", "\\u1eba", "\\u1ebc", "\\u00ca", "\\u1ec0", "\\u1ebe", "\\u1ec6", "\\u1ec2", "\\u1ec4", "\\u00cc", "\\u00cd", "\\u1eca", "\\u1ec8", "\\u0128", "\\u00d2", "\\u00d3", "\\u1ecc", "\\u1ece", "\\u00d5", "\\u00d4", "\\u1ed2", "\\u1ed0", "\\u1ed8", "\\u1ed4", "\\u1ed6", "\\u01a0", "\\u1edc", "\\u1eda", "\\u1ee2", "\\u1ede", "\\u1ee0", "\\u00d9", "\\u00da", "\\u1ee4", "\\u1ee6", "\\u0168", "\\u01af", "\\u1eea", "\\u1ee8", "\\u1ef0", "\\u1eec", "\\u1eee", "\\u1ef2", "\\u00dd", "\\u1ef4", "\\u1ef6", "\\u1ef8", "\\u0110"],
        vi: ["\u00e0", "\u00e1", "\u1ea1", "\u1ea3", "\u00e3", "\u00e2", "\u1ea7", "\u1ea5", "\u1ead", "\u1ea9", "\u1eab", "\u0103", "\u1eb1", "\u1eaf", "\u1eb7", "\u1eb3", "\u1eb5", "\u00e8", "\u00e9", "\u1eb9", "\u1ebb", "\u1ebd", "\u00ea", "\u1ec1", "\u1ebf", "\u1ec7", "\u1ec3", "\u1ec5", "\u00ec", "\u00ed", "\u1ecb", "\u1ec9", "\u0129", "\u00f2", "\u00f3", "\u1ecd", "\u1ecf", "\u00f5", "\u00f4", "\u1ed3", "\u1ed1", "\u1ed9", "\u1ed5", "\u1ed7", "\u01a1", "\u1edd", "\u1edb", "\u1ee3", "\u1edf", "\u1ee1", "\u00f9", "\u00fa", "\u1ee5", "\u1ee7", "\u0169", "\u01b0", "\u1eeb", "\u1ee9", "\u1ef1", "\u1eed", "\u1eef", "\u1ef3", "\u00fd", "\u1ef5", "\u1ef7", "\u1ef9", "\u0111", "\u00c0", "\u00c1", "\u1ea0", "\u1ea2", "\u00c3", "\u00c2", "\u1ea6", "\u1ea4", "\u1eac", "\u1ea8", "\u1eaa", "\u0102", "\u1eb0", "\u1eae", "\u1eb6", "\u1eb2", "\u1eb4", "\u00c8", "\u00c9", "\u1eb8", "\u1eba", "\u1ebc", "\u00ca", "\u1ec0", "\u1ebe", "\u1ec6", "\u1ec2", "\u1ec4", "\u00cc", "\u00cd", "\u1eca", "\u1ec8", "\u0128", "\u00d2", "\u00d3", "\u1ecc", "\u1ece", "\u00d5", "\u00d4", "\u1ed2", "\u1ed0", "\u1ed8", "\u1ed4", "\u1ed6", "\u01a0", "\u1edc", "\u1eda", "\u1ee2", "\u1ede", "\u1ee0", "\u00d9", "\u00da", "\u1ee4", "\u1ee6", "\u0168", "\u01af", "\u1eea", "\u1ee8", "\u1ef0", "\u1eec", "\u1eee", "\u1ef2", "\u00dd", "\u1ef4", "\u1ef6", "\u1ef8", "\u0110"],
        en: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "i", "i", "i", "i", "i", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "y", "y", "y", "y", "y", "d", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "I", "I", "I", "I", "I", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "Y", "Y", "Y", "Y", "Y", "D"],
        upper: ["À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă", "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ", "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ", "Ì", "Í", "Ị", "Ỉ", "Ĩ", "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ", "Ờ", "Ớ", "Ợ", "Ở", "Ỡ", "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ", "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ", "Đ"],
        lower: ["à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ", "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ", "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ", "ờ", "ớ", "ợ", "ở", "ỡ", "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ", "ỳ", "ý", "ỵ", "ỷ", "ỹ", "đ"]
    },
    clearUnicode: function (str) {
        return this.replace(str, this.unicode.vi, this.unicode.en);
    },
    isSN: function (str) {
        if (typeof str == 'undefined') return null;
        var t = getType(str);
        if (t == 'string' || t == 'number') return true;
        return false;
    },
    /**
     * thay the chuoi trong chuoi bang mot chuoi =)))))
     * @param {string} str  chuoi dau vao
     * @param {string|object|array} find  tham so tim kiem
     * @param {string|object|array} replace  tham so thay the
     */
    replace: function () {
        var a = getArguments(arguments);
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];

        var b = getType(a[1]);
        if (this.isSN(a[1])) {
            if (t >= 3 && this.isSN(a[2])) {
                var obj = Object.create({});
                obj[a[1]] = a[2];
                str = this.replaceByObj(str, obj);
            }
        } else if (b == 'array') {
            if (t >= 3 && getType(a[2]) == 'array') {
                str = this.replaceByArr(str, a[1], a[2]);
            } else if (t >= 3 && getType(a[2]) == 'string') {
                var obj = Object.create({}),
                    val = a[2];
                var d = a[1];
                for (var k in d) {
                    obj[d[k]] = val;
                }
                str = this.replaceByObj(str, obj);
            }
        } else if (b == 'object') {
            str = this.replaceByObj(str, a[1]);
        }
        return str;
    },
    replaceByArr: function () {
        var a = getArguments(arguments);
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];
        var b = getType(a[1]);
        if (b == 'object') {
            str = this.replaceByObj(str, a[1]);
        } else if (b == 'array') {
            var obj = emptyObject();
            if (t >= 3) {
                var f = getType(a[2]);
                if (f == 'string') {
                    for (var k in a[1]) {
                        obj[a[1][k]] = a[2];
                    }
                } else if (f == 'array') {
                    var e = a[1].length,
                        g = a[2].length;
                    var max = (e > g) ? e : g;
                    for (var i = 0; i < max; i++) {
                        obj[a[1][i]] = a[2][i];
                    }
                }
            }
            str = this.replaceByObj(str, obj);
        }
        return str;
    },
    replaceByObj: function () {
        var a = getArguments(arguments);
        // var a = arguments;
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];
        var b = getType(a[1]);
        if (b == 'object') {
            var max = null;
            if (typeof a[2] == 'number') {
                max = a[2];
            }
            var i = 1;
            var sts = a[1];
            for (var key in sts) {
                var txt = sts[key];
                str = this.preg_replace(key, txt, str);
                if (max && i >= max) break;
                i++;
            }
        }
        return str;
    },
    escapeRegExp: function (str) {
        var s = "" + str + "";
        return s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },

    preg_replace: function (find, replace, str) {
        var str = "" + str + "";
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },

    /**
     * Tạo một chuỗi random Ngẫu nhiên
     * @param {string} charList chuỗi ký tự bổ xung
     * @returns {string}
     */
    rand: function (charList) {
        var st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        if (charList && isString(charList)) st = st + String(charList);
        var sp = st.split('');
        var l = sp.length - 1;
        var s = '';
        for (var i = 0; i < 32; i++) {
            s += sp[Num.rand(0, l)];
        }
        return s;
    },
    /**
     * biến đổ chuỗi thành slug
     * @param {string} str chuỗi đầu vào
     * @param {string} joinKey ký tự nối
     * @returns {string}
     */
    camelToSlug: function (str, joinKey) {
        // if(typeof str == "undefined") str = "";
        var st = 'BCDEFGHIJKLMNOPQRSTUVWXYZ';
        var sp = st.split('');
        var l = sp.length - 1;
        var s = '';
        var find = [];
        var replace = [];
        var k = isString(joinKey) ? joinKey : "-";
        sp.map(function (c) {
            find.push(c);
            replace.push(k + c.toLowerCase());
        });
        return this.replace(str[0].toLowerCase()+""+str.substr(1), find, replace);
    },
    upperToWord: function (str) {
        var st = 'abcdefghijklmnopqrstuvwxyz';
        var sp = st.split('');
        var l = sp.length - 1;
        var s = this.clearUnicode(String(str));
        var find = [];
        var replace = "";
        sp.map(function (c) {
            find.push(c);
        });

        return this.lower(s.substr(0, 1)) + this.lower(this.replace(s.substr(1), find, replace));
    },


    urlencode: function (str) {
        var t = this.html_char_raw.length;
        for (var i = 0; i < t; i++) str = this.replace(str, this.html_char_raw[i], this.html_char_enc[i]);
        return str;
    },
    urldecode: function (str) {
        var t = this.html_char_raw.length;
        for (var i = t - 1; i >= 0; i--) str = this.replace(str, this.html_char_enc[i], this.html_char_raw[i]);
        return str;
    },
    eval: function (template, data) {
        var t = typeof data;
        var tpl = template;
        if (t == 'object' || t == "array") {
            data = this.convertTextObject({}, data);
            for (var k in data) {
                var val = data[k];
                if (val === null) val = '';
                var f = "\{\$" + k + "\}";
                tpl = this.replace(tpl, f, val);
            }
        }
        return tpl;
    },
    convertTextObject: function (root, object, name, joinKey) {

        if (inArray(convertedArray, object)) return root;

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (typeof joinKey != "string") joinKey = ".";
                var val = object[key];
                var t = typeof val;
                var k = (typeof name != "undefined" && ("" + name).length) ? name + joinKey + key : key;
                if (val != null && (t == 'object' || t == "array")) {
                    root = this.convertTextObject(root, val, k, joinKey);
                } else {
                    root[k] = val;
                }
            }
        }
        convertedArray.push(object);
        return root;
    },
    upper: function (str) {
        if (typeof str == "undefined") return null;
        if (isString(str)) {
            var s = str.toUpperCase();
            return this.replace(s, this.unicode.lower, this.unicode.upper);
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.upper(str[i]);
            }
            return str;
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    var st = str[key];
                    str[key] = this.upper(st);
                }
            }
            return str;

        }
    },
    lower: function (str) {
        if (typeof str == "undefined") return null;
        if (isString(str)) {
            var s = str.toLowerCase();
            str = this.replace(s, this.unicode.upper, this.unicode.lower);
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.upper(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    var st = str[key];
                    str[key] = this.upper(st);
                }
            }
        }

        return str;
    },
    ucfirst: function (str) {
        if (isString(str)) {
            if (str.length) {
                var first = str.substring(0, 1);
                str = this.upper(first) + str.substring(1);
            }
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.ucfirst(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    str[key] = this.ucfirst(str[key]);
                }
            }
        }
        return str;
    },
    ucword: function (str) {
        var self = this;
        if (isString(str)) {
            if (str.length) {
                str = str.split(" ").map(function (s) { return self.ucfirst(s) }).join(" ");
            }
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.ucword(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    str[key] = this.ucword(str[key]);
                }
            }
        }
        return str;
    },

    htmlentities: function (str) {
        return this.eval(str, {
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quote;",
            "&": "&amp;"
        });
    },
    formSlug: function (str) {
        return typeof str != "string" ? str : this.replace(this.replace(str, "[]", '.*'), { "[": ".", "]": "" });
    },
    slug: function (str, key) {
        if (!key) key = '-';
        var s = String(str);
        var l = 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var list = [];
        var n = 0;
        var t = this.replace(this.replace(
            this.clearUnicode(this.lower(s)),
            "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
            "-"
        ), '--', '-');
        for (var i = 0; i < t.length; i++) {
            var st = t[i];
            if (l.indexOf(st) == -1) {
                if (typeof list[n] != "undefined") {
                    if (l.indexOf(t[i - 1]) >= 0) n++;
                }
            } else {
                if (typeof list[n] == "undefined") {
                    list[n] = st;
                } else {
                    list[n] += st;
                }
            }
        };
        return list.join(key);
    },
    slugToCamel: function (str) {
        if (isString(str)) {
            var self = this;
            var t = this.replace(
                this.replace(
                    this.clearUnicode(str),
                    "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
                    "-"
                ),
                '--',
                '-'
            ).split("-")
                .map(s => s.trim())
                .filter(s => s.length > 0)
                .map((s, i) => i > 0 ? self.ucfirst(s) : s)
                .join("");
            str = t;


        }
        return str;
    },
    objectKey: function (str, key) {
        if (!key) key = '_';
        var s = String(str);
        var l = '$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var list = [];
        var n = 0;
        var t = this.replace(this.replace(
            this.clearUnicode(s),
            "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
            "-"
        ), '--', '-');
        for (var i = 0; i < t.length; i++) {
            var st = t[i];
            if (l.indexOf(st) == -1) {
                if (typeof list[n] != "undefined") {
                    if (l.indexOf(t[i - 1]) >= 0) n++;
                }
            } else {
                if (typeof list[n] == "undefined") {
                    list[n] = st;
                } else {
                    list[n] += st;
                }
            }
        };
        return list.join(key);
    },
    orderCharList: [
        " ", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@",
        "A", "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă", "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
        "B", "C", "D", "Đ",
        "E", "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
        "F", "G", "H",
        "I", "Ì", "Í", "Ị", "Ỉ", "Ĩ",
        "K", "L", "M", "N",
        "O", "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ", "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
        "P", "Q", "R", "S", "T",
        "U", "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
        "V", "W", "X",
        "Y", "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
        "z",
        "[", "\\", "]", "^", "_",
        "a", "à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ", "ặ", "ẳ", "ẵ",
        "b", "c",
        "d", "d",
        "e", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ",
        "f", "g", "h",
        "i", "ì", "í", "ị", "ỉ", "ĩ",
        "k", "l", "m", "n",
        "o", "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ", "ờ", "ớ", "ợ", "ở", "ỡ",
        "p", "q", "r", "s", "t",
        "u", "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
        "v", "w", "x", "y", "ỳ", "ý", "ỵ", "ỷ", "ỹ",
        "z"
    ],
    compare: function (str1, str2) {
        var i1n = isNumber(str1)
        var i2n = isNumber(str2);
        if (i1n && i2n) {
            return str1 > str2 ? 1 : (str1 == str2 ? 0 : -1)

        }
        str1 = String(str1);
        str2 = String(str2);
        var s1l = str1.length, s2l = str2.length;
        var max = s1l < s2l ? s1l : s2l;
        for (var i = 0; i < max; i++) {
            var c1 = this.orderCharList.indexOf(str1[i]);
            var c2 = this.orderCharList.indexOf(str2[i]);

            if (c2 == -1 || c1 > c2) return 1;
            if (c1 == -1 || c1 < c2) return -1;

        }
        return s1l > s2l ? 1 : (s1l < s2l ? -1 : 0);

    }

};





var date = function (format, lang) {
    var offset = 0;
    var d = new Date();
    var t = emptyObject();
    var l = String(lang).toLowerCase() != 'en' ? 'vi' : 'en';

    var dl = newObj({
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        vi: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    });
    var ml = {
        en: ["", "Jan"]
    };


    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    d = new Date(utc + (3600000 * offset));



    t.ms = d.getMilliseconds();
    t.Y = d.getFullYear();
    t.y = d.getFullYear() - 1900;
    t.H = d.getHours();
    t.i = d.getMinutes();
    t.m = d.getMonth() + 1;
    t.s = d.getSeconds();
    t.time = d.getTime();
    t.d = d.getDate();
    t.w = dl[l][d.getDay()];
    if (!format) return t;
    var f = getType(format);
    if (f == 'string') {
        var txt = format;
        txt = Str.replace(txt, 'ms', t.ms);
        txt = Str.replace(txt, 'time', t.time);
        txt = Str.replace(txt, t);
        return txt;
    }
    return null;
};
var getTimeStamp = function () {
    var offset = 0;
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    d = new Date(utc + (3600000 * offset));



    return d.getTime();
};


/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignValue =  function(target, key, value) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(key)) {
        let objData = key;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignValue({}, a);
        }
        for (var k in objData) {
            if (objData.hasOwnProperty(k)) {

                
                    var v = objData[k];
                    assignValue(target, k, v);
                


            }
        }
    } else if (isArray(key)) {
        let arrData = key;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            assignValue(target, i, vl);
        }
    }
    else if ((isString(key) || isNumber(key)) && String(key).length) {
        let sk = String(key);
        let ak = key;
        if (String(key).substr(0, 1) == '@') {
            var f = sk.substr(1);
            if (typeof target[f] == "function") {
                target[f].apply(target, isArray(value) ? value : [value]);
            }
        }
        else if (isObject(value)) {
            if (value.constructor == Object) {
                if (typeof target[ak] != "object") target[ak] = {};
                assignValue(target[ak], value);
            }
            else {
                target[ak] = value;
            }
        }
        else if (isArray(value)) {
            if (typeof target[ak] == "undefined" || !isArray(target[ak])) {
                target[ak] = [];
                assignValue(target[ak], value);
            } else {
                assignValue(target[ak], value);
            }
        }
        else {
            target[ak] = value;
        }
    }
    return target;
};




/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignOneValue = function(target, value) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(target)) {
        if(target.constructor == Object){
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    const vl = target[key];
                    if(isObject(vl) && vl.constructor == Object){
                        assignOneValue(vl, value);
                    }
                    target[key] = value;
                }
            }
        }
    } else if (isArray(target)) {
        let arrData = target;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            if(isObject(vl) && vl.constructor == Object){
                assignOneValue(vl, value);
            }
            arrData[i] = value;
        }
    }
    return target;
};
/**
 * hủy object
 * @param {object|array} target đối tượng cần gán thuộc tính
 * @returns {object}
 */
const destroyObject = function(target) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(target)) {
        if(target.constructor == Object){
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    const vl = target[key];
                    if(isObject(vl) && vl.constructor == Object){
                        destroyObject(vl);
                    }
                    target[key] = null;
                    delete target[key]
                }
            }
        }
    } else if (isArray(target)) {
        for (let i = 0; i < target.length; i++) {
            const vl = target[i];
            if(isObject(vl) && vl.constructor == Object){
                destroyObject(vl);
            }
            target[i] = null;
        }
        target.splice(0);
    }
    return target;
};

/**
 * khai báo ngoại trừ   
 * @param {*} target đầu vào chịu ảnh hưởng
 * @param {*} source nguồn
 * @returns object
 */
var assignWithout = function (target, source) {
    if (typeof target != "object" || typeof source != "object") return target;
    var il = [];
    var ignore = getArguments(arguments, 2);
    for (var index = 0; index < ignore.length; index++) {
        var list = ignore[index];
        if (isArray(list)) {
            for (var i = 0; i < list.length; i++) {
                let field = list[i];
                il.push(field);
            }
        } else if (isObject(list)) {
            for (var field in list) {
                if (list.hasOwnProperty(field)) {
                    var val = list[field];
                    il.push(field);
                }
            }
        }else{
            il.push(list)
        }
    }
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            var val = source[key];
            if (!inArray(il, key)) {
                assignValue(target, key, val);
            }
        }
    }
    return target;
};


/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignIfNotExists = (target, key, value) => {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(key)) {
        let objData = key;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignIfNotExists({}, a);
        }
        for (var k in objData) {
            if (Object.prototype.hasOwnProperty.call(objData, k)) {
                var v = objData[k];
                assignIfNotExists(target, k, v);


            }
        }
    } else if (isArray(key)) {
        let arrData = key;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            assignIfNotExists(target, i, vl);
        }
    }
    else if ((isString(key) || isNumber(key)) && String(key).length) {
        let sk = String(key);
        let ak = key;
        if (String(key).substr(0, 1) == '@') {
            var f = sk.substr(1);
            if (typeof target[f] == "function") {
                target[f].apply(target, isArray(value) ? value : [value]);
            }
        }
        else if (isObject(value)) {
            if (value.constructor == Object) {
                if (typeof target[ak] != "object") target[ak] = {};
                assignIfNotExists(target[ak], value);
            }
            else if(!objectHasKey(target, sk)){

                target[ak] = value;
            }
        }
        else if (isArray(value)) {
            if (typeof target[ak] == "undefined" || !isArray(target[ak])) {
                target[ak] = [];
                assignIfNotExists(target[ak], value);
            } else {
                assignIfNotExists(target[ak], value);
            }
        }
        else if(!objectHasKey(target, sk)){
            target[ak] = value;
        }
    }
    return target;
};


const objectAssignKeyValue = (target, key, value, filter) => {
    let stt = true;
    let resolveValue = value;
    let resolveStt = false;
    const resolve = (val) => {
        resolveValue = val;
        resolveStt = true;
        return val;
    };
    const reject = (_any) => {
        stt = false;
    }
    if(typeof filter == "function"){
        let rs = filter(key, value, resolve, reject);
        if(resolveStt){
            target[key] = resolveValue;
        }else if(stt){
            if(isBoolean(rs)){
                if(isBoolean(value)) target[key] = rs;
                else if(rs === true) target[key] = value;
            }else if(typeof rs != "undefined") target[key] = value;
        }
    }else if(isString(filter)){
        if(getType(value) == filter){
            target[key] = value;
        }
    }else{
        target[key] = value;
    }
    return value;
};
const objectAssign = (target, obj, filter) => {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(obj)) {
        let objData = obj;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignValue({}, a);
        }
        for (var k in objData) {
            if (objData.hasOwnProperty(k)) {

                var v = objData[k];
                objectAssignKeyValue(target, k, v, filter);
                


            }
        }
    } else if (isArray(obj)) {
        let arrData = obj;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            objectAssignKeyValue(target, i, vl, filter);
        }
    }
    return target;
};
var rgbToHex = function (rgb) {
    var hex = parseInt(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};
var colorToHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue;
};

var invertHexColor = function invertHexColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}

/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
class Queue {
    status = "";
    result;

    e=null;
    
    constructor(work, delay, step) {
        if (typeof work == "undefined") return this;
        this.status = "pending";
        this.result = null;
        var d = (typeof delay == "undefined" || !isNumber(delay) || delay < 1) ? 10 : delay;
        var s = (typeof step == "undefined" || !isNumber(step) || step < 0) ? -1 : step;
        var self = this;
        var properties = newObj({
            timeDelay: d,
            stepCount: s,
            resolved: false,
            rejected: false,
            cancelled: false,
            stopped: false,
            status: "pending",
            timeId: null,
            turn: 1,
            count: 1
        });
        var methods = {
            then: function (rs) {
                // App.log(rs);
            },
            catch: function (err) {
                console.log(err);
            },
            clear: function () {
                if (properties.timeId) {
                    clearTimeout(properties.timeId);
                    self.status = properties.status;
                }

            },
            run: function () {
                var comtext = this;
                var time = properties.timeDelay || 10;
                var stop = properties.stepCount;
                var resolve = function (rs) {
                    properties.resolved = rs;
                    if (properties.status == "pending") {
                        properties.status = "resolved";
                        self.result = rs;
                        comtext.clear();
                        return comtext.then(rs);
                    }
                    comtext.clear();
                    return true;

                };
                var reject = function (err) {
                    properties.rejected = err;
                    if (properties.status == "pending") {
                        properties.status = "rejected";
                        self.result = err;
                        comtext.catch(err);
                    }
                    comtext.clear();
                    return err;

                };
                var runtask = function () {

                    var id = setTimeout(() => {
                        if (properties.stepCount > -1 && properties.turn > properties.stepCount) {
                            properties.status = "stoped";
                            properties.stopped = "time out";
                            comtext.clear();
                            return false;
                        } else if (properties.status != "pending") {
                            return false;
                        } else {
                            try {
                                var stt = work(resolve, reject, properties.turn);
                                if (stt !== undefined) {
                                    if (properties.status == "pending") {
                                        comtext.stop();
                                        return false;
                                    }
                                }
                                properties.turn++;
                            } catch (error) {
                                comtext.stop();
                                comtext.catch(error);
                                return false;
                            }
                        }

                        properties.count++;
                        runtask();
                        return true;
                    }, time);
                    properties.timeId = id;
                };
                runtask();
            },
            stop: function () {
                properties.stepCount = 0;
                properties.status = "stopped";
                this.clear();
            },
            delay: function (delay) {
                if (typeof delay == "undefined" || !isNumber(delay) || delay < 1) return;
                properties.timeDelay = delay;
                this.clear();
                this.run();
            },
            step: function (step) {
                if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
                properties.stepCount = step;
                this.clear();
                this.run();
            },
            restart: function () {
                this.clear();
                properties.turn = 1;
                this.run();
            },
            addThen: function (fn) {
                if (typeof fn == "function") {
                    this.then = fn;
                }
            },
            addCatch: function (fn) {
                if (typeof fn == "function") {
                    this.catch = fn;
                }
            },
            getData: function () {
                return properties;
            }
        };
        this.e = function (...args) {
            if (!args.length || typeof args[0] != "string") return null;
            var method = args[0];
            var r = null;
            if (typeof methods[method] == "function") {
                var args2 = [];
                for (var i = 1; i < args.length; i++) {
                    var arg = args[i];
                    args2.push(arg);
                }

                r = methods[method].apply(methods, args2);
            }
            return r;
        };
        setTimeout(function () {
            methods.run();
        }, 1);
    }

    delay(delay) {
        if (typeof delay == "undefined" || !isNumber(delay) || delay < 1) return;
        this.e("delay", delay);
        return this;
    }
    step(step) {
        if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
        this.e("step", step);
        return this;
    }
    try(step) {
        if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
        this.e("step", step);
        return this;
    }
    restart() {
        this.e("restart");
        return this;
    }
    then(fn) {
        if (typeof fn == "function") {
            this.e("addThen", fn);
        }
        return this;
    }
    catch(fn){
        if (typeof fn == "function") {
            this.e("addCatch", fn);
        }
        return this;
    }
}
/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
function queueTask(work, delay, step) {
    return new Queue(work, delay, step);
}



/**
 * lấy danh sách tham số nội hàm khi dược gọi
 * @param {Arguments} args tham số nội hàm
 * @param {integer} start vị trí bắt đầu lấy tham số
 * @returns {mixed[]}
 */
function getArguments(args, start) {
    var a = [];
    if (!isNumber(start) || start < 0) start = 0;
    if (args && args.length) {
        for (let i = start; i < args.length; i++) {
            const arg = args[i];
            a.push(arg);
        }
    }
    return a;
}


function JsonToBase64(data) {
    return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
}


function b64toBlob(b64Data, contentType, sliceSize) {
    if (!contentType) contentType = '';
    if (!sliceSize) sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}





/**
 * resize anh
 * @param {string|Element} img anh
 * @param {int} resizeWidth do rong 
 * @param {int} resizeHeight chieu cao
 * @param {function} callback ham call back
 */
function resizeImage(img, resizeWidth, resizeHeight, callback) {
    function fn(imgTag) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', resizeWidth);
        canvas.setAttribute('height', resizeHeight);


        var ctx = canvas.getContext("2d");

        var imageWidth = imgTag.width;
        var imageHeight = imgTag.height;

        var zoomWidth = imageWidth, zoomHeight = imageHeight;
        var imageRatio = imageWidth / imageHeight;
        var resizeRatio = resizeWidth / resizeHeight;
        // tỉ lệ là dài trên cao

        if (imageRatio < resizeRatio) { // Nếu rỉ lệ của ảnh nhỏ hơn tỷ lệ resize thì sẽ zoom ảnh theo chiều rộng resize
            zoomWidth = resizeWidth;
            zoomHeight = zoomWidth / imageRatio;
        } else { // nhược lại sẽ zoom ảnh theo chiều cao resize
            zoomHeight = resizeHeight;
            zoomWidth = zoomHeight * imageRatio;
        }

        // var image = new Image();
        // image.src = imgTag.src;
        // console.log(imageWidth, imageHeight, zoomWidth, zoomHeight, (resizeWidth - zoomWidth) / 2, (resizeHeight - zoomHeight) / 2);
        ctx.drawImage(imgTag, (resizeWidth - zoomWidth) / 2, (resizeHeight - zoomHeight) / 2, zoomWidth, zoomHeight);
        // console.log(canvas)
        var url = canvas.toDataURL("image/png");
        callback(url);

    }
    return isString(img) ? function () {
        var el = document.createElement('img');
        el.crossOrigin = "anonymous";
        el.onload = function () {
            // window['img00'] = el
            fn(el);

        }
        el.src = img;
        return el;
    }() :
        img instanceof Element ? fn(img) : null;
}

var degreeToRadians = function (degrees) {
    if (!isNumber(degrees) || isNaN(degrees) || degrees == "") degrees = 0;
    return degrees * Math.PI / 180;
};
var radianToDegrees = function (radians) {
    if (!isNumber(radians) || isNaN(radians) || radians == '') radians = 0;
    return radians * 180 / Math.PI;
}


/**
 * 
 * @param type loại input
 * @param name tên input
 * @param value gia tri
 * @param options option
 */
function getInputCfg ( type, name, value, options ) {
    var t = Str.lower(type);
    return inArray([
        'text', 'number', 'select', 'range', 'radio', 'checkbox', 'switch', 
        'textarea', 'texteditor', 'vector2', 'vector3', 'vector4', 'texture', 
        'imagesurl', 'color' 
    ], t)? assignValue({
        type: t,
        name: name,
        value: value
    }, options) : null ;
}


const EMPTY_VALUE = "<EMPTY>" + Str.rand(getTimeStamp()) + "</EMPTY>";


var getFirstValueInList = function(list, key, checkFn){
    var val = EMPTY_VALUE;
    if(isArray(list) && isString(key)){
        if(isFunction(checkFn)){
            for (let index = 0; index < list.length; index++) {
                const currentObject = list[index];
                if(isObject(currentObject)){
                    if(Object.hasOwnProperty.call(currentObject, key)){
                        if(checkFn(currentObject[key])){
                            return currentObject[key];
                        }
                    }
                }
            }
        }else{
            for (let index = 0; index < list.length; index++) {
                const currentObject = list[index];
                if(isObject(currentObject)){
                    if(Object.hasOwnProperty.call(currentObject, key)){
                        if(currentObject[key] !== "" && currentObject[key]!== null && currentObject[key] !== undefined) return currentObject[key];
                    }
                }
            }
        }
    }
    return val;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ A),
  "Abbr": () => (/* reexport */ Abbr),
  "Acronym": () => (/* reexport */ Acronym),
  "Address": () => (/* reexport */ Address),
  "Applet": () => (/* reexport */ Applet),
  "Area": () => (/* reexport */ Area),
  "Article": () => (/* reexport */ Article),
  "Aside": () => (/* reexport */ Aside),
  "Audio": () => (/* reexport */ Audio),
  "B": () => (/* reexport */ B),
  "Base": () => (/* reexport */ Base),
  "Basefont": () => (/* reexport */ Basefont),
  "Bb": () => (/* reexport */ Bb),
  "Bdo": () => (/* reexport */ Bdo),
  "Big": () => (/* reexport */ Big),
  "Blockquote": () => (/* reexport */ Blockquote),
  "Body": () => (/* reexport */ Body),
  "Br": () => (/* reexport */ Br),
  "Button": () => (/* reexport */ Button),
  "Canvas": () => (/* reexport */ Canvas),
  "Caption": () => (/* reexport */ Caption),
  "Center": () => (/* reexport */ Center),
  "Cite": () => (/* reexport */ Cite),
  "Code": () => (/* reexport */ Code),
  "Col": () => (/* reexport */ Col),
  "Colgroup": () => (/* reexport */ Colgroup),
  "Command": () => (/* reexport */ Command),
  "Component": () => (/* reexport */ Component),
  "Datagrid": () => (/* reexport */ Datagrid),
  "Datalist": () => (/* reexport */ Datalist),
  "Dd": () => (/* reexport */ Dd),
  "Del": () => (/* reexport */ Del),
  "Details": () => (/* reexport */ Details),
  "Dfn": () => (/* reexport */ Dfn),
  "Dialog": () => (/* reexport */ Dialog),
  "Dir": () => (/* reexport */ Dir),
  "Div": () => (/* reexport */ Div),
  "Dl": () => (/* reexport */ Dl),
  "Dom": () => (/* reexport */ dom/* Dom */.is),
  "DomBag": () => (/* reexport */ dom/* DomBag */.RL),
  "Dt": () => (/* reexport */ Dt),
  "EMPTY_VALUE": () => (/* reexport */ utils/* EMPTY_VALUE */.Ic),
  "Em": () => (/* reexport */ Em),
  "Embed": () => (/* reexport */ Embed),
  "Eventsource": () => (/* reexport */ Eventsource),
  "Fieldset": () => (/* reexport */ Fieldset),
  "Figcaption": () => (/* reexport */ Figcaption),
  "Figure": () => (/* reexport */ Figure),
  "Font": () => (/* reexport */ Font),
  "Footer": () => (/* reexport */ Footer),
  "ForDec": () => (/* reexport */ ForDec),
  "ForInc": () => (/* reexport */ ForInc),
  "Form": () => (/* reexport */ Form),
  "Frame": () => (/* reexport */ Frame),
  "Frameset": () => (/* reexport */ Frameset),
  "H1": () => (/* reexport */ H1),
  "H2": () => (/* reexport */ H2),
  "H3": () => (/* reexport */ H3),
  "H4": () => (/* reexport */ H4),
  "H5": () => (/* reexport */ H5),
  "H6": () => (/* reexport */ H6),
  "Head": () => (/* reexport */ Head),
  "Header": () => (/* reexport */ Header),
  "Hgroup": () => (/* reexport */ Hgroup),
  "Hr": () => (/* reexport */ Hr),
  "Html": () => (/* reexport */ Html),
  "I": () => (/* reexport */ I),
  "Iframe": () => (/* reexport */ Iframe),
  "Img": () => (/* reexport */ Img),
  "Input": () => (/* reexport */ Input),
  "Ins": () => (/* reexport */ Ins),
  "Isindex": () => (/* reexport */ Isindex),
  "JsonToBase64": () => (/* reexport */ utils/* JsonToBase64 */.dj),
  "Kbd": () => (/* reexport */ Kbd),
  "Keygen": () => (/* reexport */ Keygen),
  "Label": () => (/* reexport */ Label),
  "Legend": () => (/* reexport */ Legend),
  "Li": () => (/* reexport */ Li),
  "Link": () => (/* reexport */ Link),
  "Loop": () => (/* reexport */ Loop),
  "Map": () => (/* reexport */ Map),
  "Mark": () => (/* reexport */ Mark),
  "Menu": () => (/* reexport */ Menu),
  "Meta": () => (/* reexport */ Meta),
  "Meter": () => (/* reexport */ Meter),
  "Nav": () => (/* reexport */ Nav),
  "Noframes": () => (/* reexport */ Noframes),
  "Noscript": () => (/* reexport */ Noscript),
  "Num": () => (/* reexport */ utils/* Num */.Cq),
  "Ol": () => (/* reexport */ Ol),
  "Optgroup": () => (/* reexport */ Optgroup),
  "Option": () => (/* reexport */ Option),
  "Output": () => (/* reexport */ Output),
  "P": () => (/* reexport */ P),
  "Param": () => (/* reexport */ Param),
  "Pre": () => (/* reexport */ Pre),
  "Progress": () => (/* reexport */ Progress),
  "Q": () => (/* reexport */ Q),
  "Queue": () => (/* reexport */ utils/* Queue */.ci),
  "Rp": () => (/* reexport */ Rp),
  "Rt": () => (/* reexport */ Rt),
  "Ruby": () => (/* reexport */ Ruby),
  "S": () => (/* reexport */ S),
  "Samp": () => (/* reexport */ Samp),
  "Script": () => (/* reexport */ Script),
  "Section": () => (/* reexport */ Section),
  "Select": () => (/* reexport */ Select),
  "Small": () => (/* reexport */ Small),
  "Source": () => (/* reexport */ Source),
  "Span": () => (/* reexport */ Span),
  "Str": () => (/* reexport */ utils/* Str */.W3),
  "Strike": () => (/* reexport */ Strike),
  "Strong": () => (/* reexport */ Strong),
  "Style": () => (/* reexport */ Style),
  "Sub": () => (/* reexport */ Sub),
  "Sup": () => (/* reexport */ Sup),
  "Table": () => (/* reexport */ Table),
  "Tbody": () => (/* reexport */ Tbody),
  "Td": () => (/* reexport */ Td),
  "Textarea": () => (/* reexport */ Textarea),
  "Tfoot": () => (/* reexport */ Tfoot),
  "Th": () => (/* reexport */ Th),
  "Thead": () => (/* reexport */ Thead),
  "Time": () => (/* reexport */ Time),
  "Title": () => (/* reexport */ Title),
  "Tr": () => (/* reexport */ Tr),
  "Track": () => (/* reexport */ Track),
  "Tt": () => (/* reexport */ Tt),
  "U": () => (/* reexport */ U),
  "Ul": () => (/* reexport */ Ul),
  "Video": () => (/* reexport */ Video),
  "Wbr": () => (/* reexport */ Wbr),
  "_class": () => (/* reexport */ es5_class/* _class */.nN),
  "_createClass": () => (/* reexport */ utils/* _createClass */.TD),
  "_defineProperties": () => (/* reexport */ utils/* _defineProperties */.Pm),
  "_defineProperty": () => (/* reexport */ utils/* _defineProperty */.w2),
  "_instanceof": () => (/* reexport */ utils/* _instanceof */.lH),
  "a": () => (/* reexport */ a),
  "abbr": () => (/* reexport */ abbr),
  "acronym": () => (/* reexport */ acronym),
  "addToGlobal": () => (/* reexport */ utils/* addToGlobal */.sN),
  "address": () => (/* reexport */ address),
  "applet": () => (/* reexport */ applet),
  "area": () => (/* reexport */ html_components_area),
  "arrayJoin": () => (/* reexport */ utils/* arrayJoin */.KA),
  "article": () => (/* reexport */ article),
  "aside": () => (/* reexport */ aside),
  "assignIfNotExists": () => (/* reexport */ utils/* assignIfNotExists */._W),
  "assignOneValue": () => (/* reexport */ utils/* assignOneValue */.zH),
  "assignValue": () => (/* reexport */ utils/* assignValue */.MP),
  "assignWithout": () => (/* reexport */ utils/* assignWithout */.bg),
  "audio": () => (/* reexport */ audio),
  "b": () => (/* reexport */ b),
  "b64toBlob": () => (/* reexport */ utils/* b64toBlob */.Mi),
  "base": () => (/* reexport */ base),
  "basefont": () => (/* reexport */ basefont),
  "bb": () => (/* reexport */ bb),
  "bdo": () => (/* reexport */ bdo),
  "big": () => (/* reexport */ big),
  "blockquote": () => (/* reexport */ blockquote),
  "body": () => (/* reexport */ body),
  "br": () => (/* reexport */ br),
  "button": () => (/* reexport */ html_components_button),
  "canvas": () => (/* reexport */ canvas),
  "caption": () => (/* reexport */ caption),
  "center": () => (/* reexport */ center),
  "checkType": () => (/* reexport */ utils/* checkType */.$1),
  "cite": () => (/* reexport */ cite),
  "code": () => (/* reexport */ code),
  "col": () => (/* reexport */ col),
  "colgroup": () => (/* reexport */ colgroup),
  "colorToHex": () => (/* reexport */ utils/* colorToHex */.hq),
  "combine": () => (/* reexport */ utils/* combine */.$e),
  "combineElenentsJoinStringList": () => (/* reexport */ utils/* combineElenentsJoinStringList */.Ss),
  "combineElenentsToArrList": () => (/* reexport */ utils/* combineElenentsToArrList */.E2),
  "command": () => (/* reexport */ command),
  "copyArray": () => (/* reexport */ utils/* copyArray */.$3),
  "copyByList": () => (/* reexport */ utils/* copyByList */.GE),
  "copyWithout": () => (/* reexport */ utils/* copyWithout */.qV),
  "create": () => (/* reexport */ dom/* create */.Ue),
  "createClass": () => (/* reexport */ es5_class/* createClass */.qH),
  "createEl": () => (/* reexport */ dom/* createEl */.ut),
  "createElementClass": () => (/* reexport */ createElementClass),
  "createInstance": () => (/* reexport */ es5_class/* createInstance */.Fs),
  "cutWithout": () => (/* reexport */ utils/* cutWithout */.rj),
  "datagrid": () => (/* reexport */ datagrid),
  "datalist": () => (/* reexport */ datalist),
  "date": () => (/* reexport */ utils/* date */.hT),
  "dd": () => (/* reexport */ dd),
  "degreeToRadians": () => (/* reexport */ utils/* degreeToRadians */.S3),
  "del": () => (/* reexport */ del),
  "destroyObject": () => (/* reexport */ utils/* destroyObject */.yp),
  "details": () => (/* reexport */ details),
  "dfn": () => (/* reexport */ dfn),
  "dialog": () => (/* reexport */ dialog),
  "dir": () => (/* reexport */ dir),
  "div": () => (/* reexport */ div),
  "dl": () => (/* reexport */ dl),
  "domEvents": () => (/* reexport */ dom/* domEvents */.ek),
  "dt": () => (/* reexport */ dt),
  "em": () => (/* reexport */ em),
  "embed": () => (/* reexport */ html_components_embed),
  "emptyObject": () => (/* reexport */ utils/* emptyObject */.FD),
  "eventsource": () => (/* reexport */ eventsource),
  "fieldset": () => (/* reexport */ fieldset),
  "figcaption": () => (/* reexport */ figcaption),
  "figure": () => (/* reexport */ figure),
  "font": () => (/* reexport */ font),
  "footer": () => (/* reexport */ footer),
  "form": () => (/* reexport */ html_components_form),
  "frame": () => (/* reexport */ html_components_frame),
  "frameset": () => (/* reexport */ frameset),
  "getArguments": () => (/* reexport */ utils/* getArguments */.Tu),
  "getClassData": () => (/* reexport */ es5_class/* getClassData */.VG),
  "getDomInf": () => (/* reexport */ dom/* getDomInf */.bM),
  "getEl": () => (/* reexport */ utils/* getEl */.Gn),
  "getFirstValueInList": () => (/* reexport */ utils/* getFirstValueInList */.X5),
  "getInputCfg": () => (/* reexport */ utils/* getInputCfg */.Sk),
  "getTimeStamp": () => (/* reexport */ utils/* getTimeStamp */.dg),
  "getType": () => (/* reexport */ utils/* getType */.oL),
  "h1": () => (/* reexport */ h1),
  "h2": () => (/* reexport */ h2),
  "h3": () => (/* reexport */ h3),
  "h4": () => (/* reexport */ h4),
  "h5": () => (/* reexport */ h5),
  "h6": () => (/* reexport */ h6),
  "hasValue": () => (/* reexport */ utils/* hasValue */.Uh),
  "head": () => (/* reexport */ head),
  "header": () => (/* reexport */ header),
  "hgroup": () => (/* reexport */ hgroup),
  "hr": () => (/* reexport */ hr),
  "htmlTags": () => (/* reexport */ dom/* htmlTags */.ck),
  "i": () => (/* reexport */ i),
  "iframe": () => (/* reexport */ iframe),
  "img": () => (/* reexport */ img),
  "inArray": () => (/* reexport */ utils/* inArray */.d3),
  "input": () => (/* reexport */ input),
  "inputTags": () => (/* reexport */ dom/* inputTags */.oE),
  "inputTypes": () => (/* reexport */ dom/* inputTypes */.Je),
  "ins": () => (/* reexport */ ins),
  "invertHexColor": () => (/* reexport */ utils/* invertHexColor */.R8),
  "isArray": () => (/* reexport */ utils/* isArray */.kJ),
  "isBoolean": () => (/* reexport */ utils/* isBoolean */.jn),
  "isCallable": () => (/* reexport */ utils/* isCallable */.GV),
  "isEmail": () => (/* reexport */ utils/* isEmail */.Jh),
  "isEmpty": () => (/* reexport */ utils/* isEmpty */.xb),
  "isFloat": () => (/* reexport */ utils/* isFloat */.Q7),
  "isFormData": () => (/* reexport */ utils/* isFormData */.hp),
  "isFunction": () => (/* reexport */ utils/* isFunction */.mf),
  "isInteger": () => (/* reexport */ utils/* isInteger */.U),
  "isMethod": () => (/* reexport */ utils/* isMethod */.A),
  "isNull": () => (/* reexport */ utils/* isNull */.Ft),
  "isNumber": () => (/* reexport */ utils/* isNumber */.hj),
  "isObject": () => (/* reexport */ utils/* isObject */.Kn),
  "isProperty": () => (/* reexport */ utils/* isProperty */.IC),
  "isString": () => (/* reexport */ utils/* isString */.HD),
  "isindex": () => (/* reexport */ isindex),
  "kbd": () => (/* reexport */ kbd),
  "keygen": () => (/* reexport */ keygen),
  "label": () => (/* reexport */ label),
  "legend": () => (/* reexport */ legend),
  "li": () => (/* reexport */ li),
  "link": () => (/* reexport */ html_components_link),
  "map": () => (/* reexport */ map),
  "mark": () => (/* reexport */ mark),
  "maxOf": () => (/* reexport */ utils/* maxOf */.yZ),
  "menu": () => (/* reexport */ menu),
  "merge": () => (/* reexport */ utils/* merge */.TS),
  "meta": () => (/* reexport */ meta),
  "meter": () => (/* reexport */ meter),
  "minOf": () => (/* reexport */ utils/* minOf */.Y9),
  "nav": () => (/* reexport */ nav),
  "newObj": () => (/* reexport */ utils/* newObj */.tr),
  "noframes": () => (/* reexport */ noframes),
  "noscript": () => (/* reexport */ noscript),
  "objectAssign": () => (/* reexport */ utils/* objectAssign */.wB),
  "objectHasKey": () => (/* reexport */ utils/* objectHasKey */.aX),
  "objectHasProperty": () => (/* reexport */ utils/* objectHasProperty */.o8),
  "objectKeys": () => (/* reexport */ utils/* objectKeys */.Yd),
  "objectValues": () => (/* reexport */ utils/* objectValues */.TT),
  "observe": () => (/* reexport */ observe),
  "ol": () => (/* reexport */ ol),
  "optgroup": () => (/* reexport */ optgroup),
  "option": () => (/* reexport */ html_components_option),
  "output": () => (/* reexport */ output),
  "p": () => (/* reexport */ p),
  "param": () => (/* reexport */ param),
  "pre": () => (/* reexport */ pre),
  "progress": () => (/* reexport */ progress),
  "q": () => (/* reexport */ q),
  "queueTask": () => (/* reexport */ utils/* queueTask */.kg),
  "radianToDegrees": () => (/* reexport */ utils/* radianToDegrees */.DR),
  "resizeImage": () => (/* reexport */ utils/* resizeImage */.tg),
  "rp": () => (/* reexport */ rp),
  "rt": () => (/* reexport */ rt),
  "ruby": () => (/* reexport */ ruby),
  "s": () => (/* reexport */ s),
  "samp": () => (/* reexport */ samp),
  "script": () => (/* reexport */ script),
  "section": () => (/* reexport */ section),
  "select": () => (/* reexport */ html_components_select),
  "small": () => (/* reexport */ small),
  "source": () => (/* reexport */ source),
  "span": () => (/* reexport */ span),
  "strike": () => (/* reexport */ strike),
  "strong": () => (/* reexport */ strong),
  "style": () => (/* reexport */ style),
  "sub": () => (/* reexport */ sub),
  "sup": () => (/* reexport */ sup),
  "table": () => (/* reexport */ table),
  "tbody": () => (/* reexport */ tbody),
  "td": () => (/* reexport */ td),
  "textarea": () => (/* reexport */ html_components_textarea),
  "tfoot": () => (/* reexport */ tfoot),
  "th": () => (/* reexport */ th),
  "thead": () => (/* reexport */ thead),
  "time": () => (/* reexport */ time),
  "title": () => (/* reexport */ title),
  "tr": () => (/* reexport */ tr),
  "track": () => (/* reexport */ track),
  "tt": () => (/* reexport */ tt),
  "u": () => (/* reexport */ u),
  "ul": () => (/* reexport */ ul),
  "video": () => (/* reexport */ video),
  "wbr": () => (/* reexport */ wbr)
});

// EXTERNAL MODULE: ./src/core/utils.js
var utils = __webpack_require__(499);
// EXTERNAL MODULE: ./src/core/es5-class.js
var es5_class = __webpack_require__(170);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(486);
;// CONCATENATED MODULE: ./src/core/observer.js






// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null
}

function isDef(v) {
    return v !== undefined && v !== null
}


/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

function isArray(variable) {
    return getType(variable) == "array" || Array.isArray(variable);
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
    return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]'
}



/**
 * Remove an item from an array.
 */
function remove(arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

/**
 * Check whether an object has the property.
 */
var observer_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return observer_hasOwnProperty.call(obj, key)
}





var config = ({
    /**
     * Whether to enable devtools
     */

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

});


/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}

function defConst(obj, key, value, options) {
    var opt = {
        enumerable: false,
        configurable: false
    };
    if (isObject(options)) {
        if (options.enumerable) {
            opt.enumerable = true;
        }
        if (typeof options.get == "function") {
            opt.get = options.get;
            // if(options.writable){
            //     opt.writable = true;
            // }
        }
        else {
            opt.value = Object.hasOwnProperty(options, 'value') ? options.value : value;
        }
    } else {
        opt.value = value;
    }
    Object.defineProperty(obj, key, opt);
}

function defProp(obj, key, value, options) {
    var opt = {
        enumerable: true,
        configurable: true
    };
    if (isObject(options)) {
        if (options.enumerable !== undefined) {
            opt.enumerable = options.enumerable ? true : false;
        }
        if (typeof options.get == "function") {
            opt.get = options.get;
            if (typeof options.set == "function") {
                opt.set = options.set;
            }
        }
        else {
            opt.value = Object.hasOwnProperty(options, 'value') ? options.value : value;
            if (options.writable) {
                opt.writable = true;
            }
        }
    } else {
        opt.value = value;
    }
    Object.defineProperty(obj, key, opt);
}

function getPrimitiveValue(value, change) {
    return function Primitive(newValue) {
        var type = getType(newValue);
        value = newValue;
        if (typeof change == "function") {
            change(value);
        }
    };

}

function getPrimitive(value, parent) {
    var type = getType(value);
    var primitive = null;
    switch (type) {
        case 'number':
            primitive = new Number(value);
            break;
        case 'string':
            primitive = new String(value);
            break;
        case 'boolean':
            primitive = new Boolean(value);
            break;



        default:
            primitive = getPrimitiveValue(value);
            break;
    }
    var events = {
        value: [],
        type: []
    };
    var parents = [];

    defConst(primitive, 'isPrimitive', true);
    defConst(primitive, 'is' + Str.ucfirst(getType(value)), true);


    defConst(primitive, '__toData__', function (fn) {
        if ((isObject(this) || isFunction(this)) && typeof this.__toData__ == "function") return this.__toData__();
        return value;
    });

    defConst(primitive, 'toString', function (fn) {
        return this.__toData__();
    });

    return primitive;
}

function parseValue(value) {
    if ((isObject(value) && (value.isArrayData || value.isObjectData || value.isPrimitiveData)) || (isFunction(value) && value.isPrimitiveData)) return value;
    return isArray(value) ? (new ArrayData(value)) : (isObject(value) && value.constructor == Object ? (new ObjectData(value)) : getPrimitive(value));
}


/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';


var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
            get: function get() {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    } catch (e) { }
}



/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
} else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function has(key) {
            return this.set[key] === true
        };
        Set.prototype.add = function add(key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function clear() {
            this.set = Object.create(null);
        };

        return Set;
    }());
}




var uid = 0;


/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break
            case 'splice':
                inserted = args.slice(2);
                break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dispatch()
        return result
    });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

var obsDefaultKey = '___OBSERVER_DEFAULT_KEY___';

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 * @property {Observer} parent
 * @param {*} value 
 * @param {Observer} parent đối tượng cha
 */
var Observer = function Observer(value, parent) {
    this.value = value;
    this.parents = (0,utils/* _instanceof */.lH)(parent, Observer) ? [parent] : [];
    this.listeners = [];
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
        if (hasProto) {
            protoAugment(value, arrayMethods);
        } else {
            copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
    } else {
        this.walk(value);
    }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        defineReactive$$1.call(this, obj, keys[i]);
    }

};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i], this);
    }

};


/**
 * lắng nghe sự kiện
 * @param {Observer} child đối tượng muốn gửi
 * @param {string[]} keys key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.onTransfer = function (child, keys, listen) {
    var key = null;
    if (isArray(this.value)) {
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if (vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if (vl == child.value) {
                    key = k;
                    break;
                }
            }
        }
    }

    keys.unshift(key);


    if (this.parents.length == 0) {
        this.addEventListener(keys.join("."), listen);
    }
    else {
        var self = this;
        this.parents.map(function (parent) {
            parent.onTransfer(self, keys, listen);
        });

    }
    return this;
}
/**
 * thêm cha
 * @param {Observer} parent doi tuong cha
 */
Observer.prototype.addParent = function addParent(parent) {
    if ((0,utils/* _instanceof */.lH)(parent, Observer) && this.indexOf(parent) == -1) {
        this.parents.push(parent);
        var self =  this;
        for (const key in this.listeners) {
            if (Object.hasOwnProperty.call(this.listeners, key)) {
                const tasks = this.listeners[key];
                if(isArray(tasks)){
                    let keys = key.split(".");
                    tasks.map(task => {
                        parent.onTransfer(self, keys, task);
                    });
                }
            }
        }
    }
}

/**
 * lắng nghe sự kiện
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.addEventListener = function (key, listen) {
    var self = this;
    if (this.parents.length == 0) {
        if (typeof key == "function") {
            listen = key;
            key = obsDefaultKey;
        }

        if (typeof this.listeners[key] == "undefined") this.listeners[key] = [];
        this.listeners[key].push(listen);
        return this
    }

    if (typeof key == "function") {
        listen = key;
        key = obsDefaultKey;
        this.parents.map(function (parent) {
            parent.onTransfer(self, [], listen);
        });
        return this
    }
    if (typeof listen != "function") return this;
    this.parents.map(function (parent) {
        parent.onTransfer(self, [key], listen);
    });


    return this

}
/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
 */
Observer.prototype.subcribe = function subcribe(key, listen) {
    return this.addEventListener.call(this, key, listen);
};

/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
 */
Observer.prototype.on = function on(key, listen) {
    return this.addEventListener.call(this, key, listen);
};

/**
 * Nhận thay doi tu con
 * @param {*[]} key key muốn theo dõi thay đổi
 */
Observer.prototype.onDispatch = function onDispatch(changes, child) {
    var key = null;
    if (isArray(this.value)) {
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if (vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if (vl == child.value) {
                    key = k;
                    break;
                }
            }
        }
    }
    for (let i = 0; i < changes.length; i++) {
        changes[i].key = key + "." + changes[i].key;
    }
    changes.push({
        key: key,
        value: this.value,
        old: this.value,
        target: child.value
    })

    var self = this;
    if (this.parents.length) {
        return this.parents.map(function (parent) {
            parent.onDispatch(changes, self);
        });
    }
    for (let index = 0; index < changes.length; index++) {
        const change = changes[index];
        this.dispatch(change.key, change.value, change.old, change.target);
    }

};

/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {any} value hàm xử lý
 * @param {any} old hàm xử lý
 */
Observer.prototype.dispatch = function dispatch(key, value, old, target) {
    var t = target ? target : this.value;
    var self = this;
    if (!this.parents.length) {
        if (key === undefined) {
            key = obsDefaultKey;
            value = this.value;
            old = this.value;
            target = this.value;
        }

        if (typeof this.listeners[key] != "undefined") {
            if (isArray(this.listeners[key])) {
                for (let index = 0; index < this.listeners[key].length; index++) {
                    const fn = this.listeners[key][index];
                    if (typeof fn == "function") {
                        fn(value, old, key);
                    }
                }
            }
        }
    }
    else {
        if (key === undefined) {
            this.parents.map(function (parent) {
                parent.onDispatch([], self);
            });
            return this;
        }

        this.parents.map(function (parent) {
            parent.onDispatch([{
                key: key,
                value: value,
                old: old,
                target: t
            }], self);
        });

    }

};


/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {any} value hàm xử lý
 * @param {any} old hàm xử lý
 */
Observer.prototype.emit = function emit(key, value, old) {
    return this.addEventListener.call(this, key, value, old);
};


// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
    }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, parent) {
    if (!isObject(value)) {
        return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else if (
        (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value)
    ) {
        ob = new Observer(value, parent);
    }
    if (parent && ob.parents.indexOf(parent) == -1) {
        ob.addParent(parent);
    }
    return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter, shallow) {
    // var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    var childOb = !shallow && observe(val, this);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            return value
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            /* eslint-disable no-self-compare */
            var old = val;
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            /* eslint-enable no-self-compare */
            if (customSetter) {
                customSetter();
            }
            // #7981: for accessor properties without setter
            if (getter && !setter) { return }
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }
            childOb = !shallow && observe(newVal, this);
            obj.__ob__.dispatch(key, val, old, obj);
        }
    });
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
            dependArray(e);
        }
    }
}



// EXTERNAL MODULE: ./src/core/dom/dom.js
var dom = __webpack_require__(809);
;// CONCATENATED MODULE: ./src/core/dom/html-components.js

// import Dom, { $, Query, query } from './dom.js';




function checkImageURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null || url.match(/^(http|https)\:\/\//) != null);
}
/**
 * Tạo một lớp đối tượng
 * @param {string} tag tên thẻ bạn muốn khởi tạo
 * @returns {Html}
 */
function createElementClass(tag, properties) {
    var prop = {};
    if ((0,utils/* isObject */.Kn)(properties)) {
        for (var key in properties) {
            if (Object.hasOwnProperty.call(properties, key)) {
                var fn = properties[key];
                if (key == "constructor") {
                    if (typeof fn == "function") prop.__constructor__ = fn;
                }
                else {
                    prop[key] = fn;
                }
            }
        }
    }
    var t = tag.toLowerCase();
    var classProps = {

        const$tagName: tag,
        constructor: function () {
            var args = (0,utils/* getArguments */.Tu)(arguments);
            if (args.length && (0,utils/* isString */.HD)(args[0])) {
                if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                    var a = (0,dom/* getDomInf */.bM)(args[0]);
                    if (a.isElement) {
                        if (a.isDefault) {
                            args[0] = tag.toLowerCase() + args[0];
                        } else {
                            args[0] = this.tagName + args[0].substr(a.tagName.length);
                        }
                    }
                    else {
                        args.unshift(this.tagName);
                    }
                }
                else {
                    args.unshift(this.tagName);
                    if (args[0].match(/^\{.*\}$/i) !== null) {
                        args[0] = args[0].substr(1, args[0].length - 2);
                    }
                }

            }
            else {
                args.unshift(this.tagName);
            }
            this.setElement.apply(this, args);
        }
    };
    classProps['const$is' + utils/* Str.ucfirst */.W3.ucfirst(t)] = true;
    if (t == 'img') {
        (0,utils/* assignValue */.MP)(classProps, {
            $isImage: true,
            $srcSync: false,
            $src: null,
            inits: '__src_init__',
            get$src: function (value) {
                // return this.val();
            },
            set$src: function (value) {
                if (this.srcSync) this.attr('src', value);
            },
            __src_init__: function () {
                this.src = this.attr('src');
                var self = this;
                this.on('change', function (e) {
                    var value = this.attr('src');
                    if (value != self.src) {
                        self.valueSync = false;
                        self.src = value;
                        self.srcSync = true;
                    }
                });
                this.srcSync = true;
            },
            constructor: function constructor() {
                var args = (0,utils/* getArguments */.Tu)(arguments);
                var src = null;
                var createArgs = [];
                var attrs = {};
                var hasTag = false;
                for (var index = 0; index < args.length; index++) {
                    var vl = args[index];
                    if (index == 0) {
                        if ((0,utils/* isString */.HD)(vl)) {
                            if (checkImageURL(vl)) {
                                src = vl;
                                createArgs.unshift(this.tagName);
                            } else {
                                var a = (0,dom/* getDomInf */.bM)(vl);
                                if (a.isElement) {
                                    if (a.isDefault) {
                                        createArgs.push(tag.toLowerCase() + args[0]);
                                        hasTag = true;
                                    } else {
                                        createArgs.push(this.tagName + args[0].substr(a.tagName.length));
                                        hasTag = true;
                                    }
                                }
                                else {
                                    createArgs.unshift(this.tagName);
                                }
                            }

                        }
                        else {
                            createArgs.unshift(this.tagName);
                            (0,utils/* assignValue */.MP)(attrs, vl);
                        }
                    }
                    else {
                        if ((0,utils/* isString */.HD)(vl)) {
                            if (!src && checkImageURL(vl)) {
                                src = vl;
                            }
                            else {
                                attrs.alt = vl;
                            }

                        }
                        else if ((0,utils/* isObject */.Kn)(vl)) {
                            (0,utils/* assignValue */.MP)(attrs, vl);
                        }
                    }
                }

                if (src && !attrs.src) attrs.src = src;
                createArgs.push(attrs);

                this.setElement.apply(this, createArgs);
            }
        });
    }
    else if (t == 'input') {
        (0,utils/* assignValue */.MP)(classProps, {
            $valueSync: false,
            $value: null,
            inits: '__value_init__',
            onGet$Value: function (value) {
                // return this.val();
            },
            onset$value: function (value) {
                if (this.valueSync) this.val(value);
            },
            __value_init__: function () {
                this.value = this.val();
                var self = this;
                this.on('change', function (e) {
                    var value = this.val();
                    if (value != self.value) {
                        self.valueSync = false;
                        self.value = value;
                        self.valueSync = true;
                    }
                });
                this.valueSync = true;
            },
            constructor: function constructor() {
                var args = (0,utils/* getArguments */.Tu)(arguments);
                // nếu nhập vào ("select", "name", "value", data)
                var createArgs = [];
                var domEls = [];
                if (args.length) {
                    if ((0,utils/* isObject */.Kn)(args[0]) && !args[0].isDom) {

                        createArgs.push(args[0])

                    }
                    else {
                        var inputOptions = {
                            type: "",
                            name: "",
                            value: "",
                            default: "",
                            data: {}
                        }
                        var s = 0;
                        var domEls = [];
                        for (var index = 0; index < args.length; index++) {
                            var vl = args[index];

                            if ((0,utils/* isString */.HD)(vl)) {
                                var vlow = String(vl).toLowerCase();
                                if (!s) {
                                    var a = (0,dom/* getDomInf */.bM)(vl);
                                    if (dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) {
                                        inputOptions.type = vlow;
                                        s++;
                                    }
                                    else if (a.isElement) {
                                        var tg = a.tagName.toLowerCase();
                                        if (dom/* inputTypes.indexOf */.Je.indexOf(tg) !== -1) {
                                            inputOptions.type = tg;
                                        }
                                        else if (dom/* inputTags.indexOf */.oE.indexOf(tg) != -1) {
                                            inputOptions.type = tg;
                                        }
                                        s++;
                                        if (!(0,utils/* isEmpty */.xb)(a.attrs)) {
                                            (0,utils/* assignValue */.MP)(inputOptions, a.attrs);
                                        };
                                        if (!(0,utils/* isEmpty */.xb)(a.props)) (0,utils/* assignValue */.MP)(inputOptions, a.props);
                                        if (a.className) {
                                            inputOptions.className = a.className;
                                        }
                                        if (a.id) {
                                            inputOptions.id = a.id;
                                        }

                                    } else {
                                        inputOptions.name = vl;
                                        s++;
                                    }

                                }
                                else if (index < 3) {
                                    if ((inputOptions.name && dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) && !inputOptions.type) {
                                        inputOptions.type = vlow;
                                    }
                                    else if (!inputOptions.name && vl.match(/^[A-z_]+[A-z_\[\]0-9\.\-]*$/i) != null) {
                                        inputOptions.name = vl;
                                    }
                                    else {
                                        inputOptions.value = vl;
                                    }
                                }
                            }
                            else if ((0,utils/* isObject */.Kn)(vl)) {
                                if (vl.isDom) {
                                    domEls.push(vl);
                                }
                                else {
                                    (0,utils/* assignValue */.MP)(inputOptions, vl);
                                }

                            }


                        }
                        if (!inputOptions.type) inputOptions.type = 'text';
                        createArgs.push(inputOptions);
                    }
                }
                if (createArgs.length) {
                    var elem = input1.apply(this, createArgs);
                    var el = elem.el;
                    if (el) {

                        if (!el.id && this.id) el.id = this.id;
                        if (!el.className && this.className) el.className = this.className;

                        this.el = el;
                        if (!(0,utils/* isEmpty */.xb)(elem.dynamicAttrs)) {
                            this.addDynamicAttr(elem.dynamicAttrs);
                        }
                        // console.log(this, args, elem.contents);
                        if (elem.tag == 'select' && !(0,utils/* isEmpty */.xb)(elem.contents)) {
                            this.setHtml((0,dom/* default */.ZP)('div', elem.contents).html());

                        }
                        if (!(0,utils/* isEmpty */.xb)(elem.events)) {
                            this.on(elem.events);
                        }

                        // DoanDepTrai
                        if (!(0,utils/* isEmpty */.xb)(elem.methods)) {
                            for (var method in elem.methods) {
                                if (Object.hasOwnProperty.call(elem.methods, method)) {
                                    var fn = elem.methods[method];
                                    // console.log(method, fn)
                                    (0,utils/* _defineProperty */.w2)(this, method, fn);
                                }
                            }
                        }
                        if (this._pendingContents.length) {
                            while (this._pendingContents.length) {
                                var a = this._pendingContents.shift();
                                this[a.key] = a.content;
                                this.append(a.content);
                            }
                        }
                    }
                }

            }
        });
    }

    return (0,es5_class/* default */.ZP)(utils/* Str.ucfirst */.W3.ucfirst(tag), false).extends(dom/* default */.ZP).uses(prop)(classProps);
}

/**
 * tạo hàm tạo tag
 * @param {string} tag tên thẻ HTML
 * @returns {function(...args):Element}
 */
function createHtmlElementFunction(tag) {
    var tagName = tag.toLowerCase();
    var fn = function (...args) {
        if (args.length && (0,utils/* isString */.HD)(args[0])) {
            if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                var a = (0,dom/* getDomInf */.bM)(args[0]);
                if (a.isElement) {
                    if (a.isDefault) {
                        args[0] = tag.toLowerCase() + args[0];
                    } else {
                        args[0] = tagName + args[0].substr(a.tagName.length);
                    }
                }
                else {
                    args.unshift(tagName);
                }
            }
            else {
                args.unshift(tagName);
                if (args[0].match(/^\{.*\}$/i) !== null) {
                    args[0] = args[0].substr(1, args[0].length - 2);
                }
            }

        }
        else {
            args.unshift(tagName);
        }
        return (0,dom/* createEl */.ut)(...args);
    };
    if (tagName == "input") {
        fn = function (...args) {
            var createArgs = [];
            var domEls = [];
            if (args.length) {
                if ((0,utils/* isObject */.Kn)(args[0]) && !args[0].isDom) {

                    createArgs.push(args[0])

                }
                else {
                    var inputOptions = {
                        type: "",
                        name: "",
                        value: "",
                        default: "",
                        data: {}
                    }
                    var s = 0;
                    var domEls = [];
                    for (var index = 0; index < args.length; index++) {
                        var vl = args[index];

                        if ((0,utils/* isString */.HD)(vl)) {
                            var vlow = String(vl).toLowerCase();
                            if (!s) {
                                var a = (0,dom/* getDomInf */.bM)(vl);
                                if (dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) {
                                    inputOptions.type = vlow;
                                    s++;
                                }
                                else if (a.isElement) {
                                    var tg = a.tagName.toLowerCase();
                                    if (dom/* inputTypes.indexOf */.Je.indexOf(tg) !== -1) {
                                        inputOptions.type = tg;
                                    }
                                    else if (dom/* inputTags.indexOf */.oE.indexOf(tg) != -1) {
                                        inputOptions.type = tg;
                                    }
                                    s++;
                                    if (!(0,utils/* isEmpty */.xb)(a.attrs)) {
                                        (0,utils/* assignValue */.MP)(inputOptions, a.attrs);
                                    };
                                    if (!(0,utils/* isEmpty */.xb)(a.props)) (0,utils/* assignValue */.MP)(inputOptions, a.props);
                                    if (a.className) {
                                        inputOptions.className = a.className;
                                    }
                                    if (a.id) {
                                        inputOptions.id = a.id;
                                    }

                                } else {
                                    inputOptions.name = vl;
                                    s++;
                                }

                            }
                            else if (index < 3) {
                                if ((inputOptions.name && dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) && !inputOptions.type) {
                                    inputOptions.type = vlow;
                                }
                                else if (!inputOptions.name && vl.match(/^[A-z_]+[A-z_\[\]0-9\.\-]*$/i) != null) {
                                    inputOptions.name = vl;
                                }
                                else {
                                    inputOptions.value = vl;
                                }
                            }
                        }
                        else if ((0,utils/* isObject */.Kn)(vl)) {
                            if (vl.isDom) {
                                domEls.push(vl);
                            }
                            else {
                                (0,utils/* assignValue */.MP)(inputOptions, vl);
                            }

                        }


                    }
                    if (!inputOptions.type) inputOptions.type = 'text';
                    createArgs.push(inputOptions);
                }
            }
            if (createArgs.length) {
                return input2(createArgs);

            }
            else {
                return input2({
                    type: "text"
                });
            }
        };


    } else if (tagName == "img") {
        fn = function (...args) {
            var src = null;
            var createArgs = [];
            var attrs = {};
            var hasTag = false;
            for (var index = 0; index < args.length; index++) {
                var vl = args[index];
                if (index == 0) {
                    if ((0,utils/* isString */.HD)(vl)) {
                        if (checkImageURL(vl)) {
                            src = vl;
                            createArgs.unshift(tagName);
                        } else {
                            var a = (0,dom/* getDomInf */.bM)(vl);
                            if (a.isElement) {
                                if (a.isDefault) {
                                    createArgs.push(tag.toLowerCase() + args[0]);
                                    hasTag = true;
                                } else {
                                    createArgs.push(tagName + args[0].substr(a.tagName.length));
                                    hasTag = true;
                                }
                            }
                            else {
                                createArgs.unshift(tagName);
                            }
                        }

                    }
                    else {
                        createArgs.unshift(tagName);
                        (0,utils/* assignValue */.MP)(attrs, vl);
                    }
                }
                else {
                    if ((0,utils/* isString */.HD)(vl)) {
                        if (!src && checkImageURL(vl)) {
                            src = vl;
                        }
                        else {
                            attrs.alt = vl;
                        }

                    }
                    else if ((0,utils/* isObject */.Kn)(vl)) {
                        (0,utils/* assignValue */.MP)(attrs, vl);
                    }
                }
            }

            if (src && !attrs.src) attrs.src = src;
            createArgs.push(attrs);

            return (0,dom/* createEl */.ut)(...args);
        };

    }

    return fn;


}




function input1(args) {
    if (typeof args == "object") {
        var tagName = 'input';
        var attrs = {};
        var content = null;
        var value = null;
        var type = "text";
        var ignore = [];
        var data = [];
        var boot = null,
            init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                let p = prop.toLowerCase();
                if (p == 'type') {
                    let v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    } else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    } else {
                        attrs[p] = v;
                    }
                } else if (ignore.indexOf(p) >= 0) {
                    // next
                } else if (p == "init") {
                    init = val;
                } else if (p == "boot") {
                    boot = val;
                } else {
                    attrs[prop] = val;
                }

                if (p == 'value') {
                    value = val;
                } else if (p == 'data') {
                    data = val;
                }
            }
        }
        var attributes = {};
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                var va = attrs[key];
                if (ignore.indexOf(key.toLowerCase()) >= 0) {
                    // next
                } else {
                    attributes[key] = va;
                }
            }
        }
        if (type == 'select') {
            content = [];
            if (typeof data == "object") {
                for (var vl in data) {
                    if (data.hasOwnProperty(vl)) {
                        var text = data[vl];
                        let option = { value: vl };
                        if (vl == value) {
                            option.selected = "selected";
                        }
                        content.push((0,dom/* createEl */.ut)('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return dom/* create.call */.Ue.call(this, tagName, attributes, content, boot, init);
    }
    return null;
};

function input2(args) {
    if (typeof args == "object") {
        var tagName = 'input';
        var attrs = {};
        var content = null;
        var value = null;
        var type = "text";
        var ignore = [];
        var data = [];
        var boot = null,
            init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                let p = prop.toLowerCase();
                if (p == 'type') {
                    let v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    } else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    } else {
                        attrs[p] = v;
                    }
                } else if (ignore.indexOf(p) >= 0) {
                    // next
                } else if (p == "init") {
                    init = val;
                } else if (p == "boot") {
                    boot = val;
                } else {
                    attrs[prop] = val;
                }

                if (p == 'value') {
                    value = val;
                } else if (p == 'data') {
                    data = val;
                }
            }
        }
        var attributes = {};
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                var va = attrs[key];
                if (ignore.indexOf(key.toLowerCase()) >= 0) {
                    // next
                } else {
                    attributes[key] = va;
                }
            }
        }
        if (type == 'select') {
            content = [];
            if (typeof data == "object") {
                for (var vl in data) {
                    if (data.hasOwnProperty(vl)) {
                        var text = data[vl];
                        let option = { value: vl };
                        if (vl == value) {
                            option.selected = "selected";
                        }
                        content.push((0,dom/* createEl */.ut)('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return (0,dom/* createEl */.ut)(tagName, attributes, content, boot, init);
    }
    return null;
};



const A = createElementClass("a"), Abbr = createElementClass("abbr"), Acronym = createElementClass("acronym"), Address = createElementClass("address"), Applet = createElementClass("applet"), Area = createElementClass("area"), Article = createElementClass("article"), Aside = createElementClass("aside"), Audio = createElementClass("audio");
const B = createElementClass("b"), Base = createElementClass("base"), Basefont = createElementClass("basefont"), Bb = createElementClass("bb"), Bdo = createElementClass("bdo"), Big = createElementClass("big"), Blockquote = createElementClass("blockquote"), Body = createElementClass("body"), Br = createElementClass("br"), Button = createElementClass("button");
const Canvas = createElementClass("canvas"), Caption = createElementClass("caption"), Center = createElementClass("center"), Cite = createElementClass("cite"), Code = createElementClass("code"), Col = createElementClass("col"), Colgroup = createElementClass("colgroup"), Command = createElementClass("command");
const Datagrid = createElementClass("datagrid"), Datalist = createElementClass("datalist"), Dd = createElementClass("dd"), Del = createElementClass("del"), Details = createElementClass("details"), Dfn = createElementClass("dfn"), Dialog = createElementClass("dialog"), Dir = createElementClass("dir"), Div = createElementClass("div"), Dl = createElementClass("dl"), Dt = createElementClass("dt");
const Em = createElementClass("em"), Embed = createElementClass("embed"), Eventsource = createElementClass("eventsource");
const Fieldset = createElementClass("fieldset"), Figcaption = createElementClass("figcaption"), Figure = createElementClass("figure"), Font = createElementClass("font"), Footer = createElementClass("footer"), Form = createElementClass("form"), Frame = createElementClass("frame"), Frameset = createElementClass("frameset");
const H1 = createElementClass("h1"), H2 = createElementClass("h2"), H3 = createElementClass("h3"), H4 = createElementClass("h4"), H5 = createElementClass("h5"), H6 = createElementClass("h6"), Head = createElementClass("head"), Header = createElementClass("header"), Hgroup = createElementClass("hgroup"), Hr = createElementClass("hr");
const I = createElementClass("i"), Iframe = createElementClass("iframe"), Img = createElementClass("img"), Input = createElementClass("input"), Ins = createElementClass("ins"), Isindex = createElementClass("isindex");
const Kbd = createElementClass("kbd"), Keygen = createElementClass("keygen");
const Label = createElementClass("label"), Legend = createElementClass("legend"), Li = createElementClass("li"), Link = createElementClass("link");
const Map = createElementClass("map"), Mark = createElementClass("mark"), Menu = createElementClass("menu"), Meta = createElementClass("meta"), Meter = createElementClass("meter");
const Nav = createElementClass("nav"), Noframes = createElementClass("noframes"), Noscript = createElementClass("noscript");
const Ol = createElementClass("ol"), Optgroup = createElementClass("optgroup"), Option = createElementClass("option"), Output = createElementClass("output");
const P = createElementClass("p"), Param = createElementClass("param"), Pre = createElementClass("pre"), Progress = createElementClass("progress");
const Q = createElementClass("q");
const Rp = createElementClass("rp"), Rt = createElementClass("rt"), Ruby = createElementClass("ruby"), S = createElementClass("s");
const Samp = createElementClass("samp"), Script = createElementClass("script"), Section = createElementClass("section"), Select = createElementClass("select"), Small = createElementClass("small"), Source = createElementClass("source"), Span = createElementClass("span"), Strike = createElementClass("strike"), Strong = createElementClass("strong"), Style = createElementClass("style"), Sub = createElementClass("sub"), Sup = createElementClass("sup");
const Table = createElementClass("table"), Tbody = createElementClass("tbody"), Td = createElementClass("td"), Textarea = createElementClass("textarea"), Tfoot = createElementClass("tfoot"), Th = createElementClass("th"), Thead = createElementClass("thead"), Time = createElementClass("time"), Title = createElementClass("title"), Tr = createElementClass("tr"), Track = createElementClass("track"), Tt = createElementClass("tt");
const U = createElementClass("u"), Ul = createElementClass("ul");
const Video = createElementClass("video");
const Wbr = createElementClass("wbr");


const a = createHtmlElementFunction("a"), abbr = createHtmlElementFunction("abbr"), acronym = createHtmlElementFunction("acronym"), address = createHtmlElementFunction("address"), applet = createHtmlElementFunction("applet"), html_components_area = createHtmlElementFunction("area"), article = createHtmlElementFunction("article"), aside = createHtmlElementFunction("aside"), audio = createHtmlElementFunction("audio"),
    b = createHtmlElementFunction("b"), base = createHtmlElementFunction("base"), basefont = createHtmlElementFunction("basefont"), bb = createHtmlElementFunction("bb"), bdo = createHtmlElementFunction("bdo"), big = createHtmlElementFunction("big"), blockquote = createHtmlElementFunction("blockquote"), body = createHtmlElementFunction("body"), br = createHtmlElementFunction("br"), html_components_button = createHtmlElementFunction("button"),
    canvas = createHtmlElementFunction("canvas"), caption = createHtmlElementFunction("caption"), center = createHtmlElementFunction("center"), cite = createHtmlElementFunction("cite"), code = createHtmlElementFunction("code"), col = createHtmlElementFunction("col"), colgroup = createHtmlElementFunction("colgroup"), command = createHtmlElementFunction("command"),
    datagrid = createHtmlElementFunction("datagrid"), datalist = createHtmlElementFunction("datalist"), dd = createHtmlElementFunction("dd"), del = createHtmlElementFunction("del"), details = createHtmlElementFunction("details"), dfn = createHtmlElementFunction("dfn"), dialog = createHtmlElementFunction("dialog"), dir = createHtmlElementFunction("dir"), div = createHtmlElementFunction("div"), dl = createHtmlElementFunction("dl"), dt = createHtmlElementFunction("dt"),
    em = createHtmlElementFunction("em"), html_components_embed = createHtmlElementFunction("embed"), eventsource = createHtmlElementFunction("eventsource"), fieldset = createHtmlElementFunction("fieldset"), figcaption = createHtmlElementFunction("figcaption"), figure = createHtmlElementFunction("figure"), font = createHtmlElementFunction("font"), footer = createHtmlElementFunction("footer"), html_components_form = createHtmlElementFunction("form"), html_components_frame = createHtmlElementFunction("frame"), frameset = createHtmlElementFunction("frameset"),
    h1 = createHtmlElementFunction("h1"), h2 = createHtmlElementFunction("h2"), h3 = createHtmlElementFunction("h3"), h4 = createHtmlElementFunction("h4"), h5 = createHtmlElementFunction("h5"), h6 = createHtmlElementFunction("h6"), head = createHtmlElementFunction("head"), header = createHtmlElementFunction("header"), hgroup = createHtmlElementFunction("hgroup"), hr = createHtmlElementFunction("hr"),
    i = createHtmlElementFunction("i"), iframe = createHtmlElementFunction("iframe"), img = createHtmlElementFunction("img"), input = createHtmlElementFunction("input"), ins = createHtmlElementFunction("ins"), isindex = createHtmlElementFunction("isindex"),
    kbd = createHtmlElementFunction("kbd"), keygen = createHtmlElementFunction("keygen"),
    label = createHtmlElementFunction("label"), legend = createHtmlElementFunction("legend"), li = createHtmlElementFunction("li"), html_components_link = createHtmlElementFunction("link"),
    map = createHtmlElementFunction("map"), mark = createHtmlElementFunction("mark"), menu = createHtmlElementFunction("menu"), meta = createHtmlElementFunction("meta"),
    meter = createHtmlElementFunction("meter"), nav = createHtmlElementFunction("nav"),
    noframes = createHtmlElementFunction("noframes"), noscript = createHtmlElementFunction("noscript"), ol = createHtmlElementFunction("ol"), optgroup = createHtmlElementFunction("optgroup"), html_components_option = createHtmlElementFunction("option"), output = createHtmlElementFunction("output"),
    p = createHtmlElementFunction("p"), param = createHtmlElementFunction("param"), pre = createHtmlElementFunction("pre"), progress = createHtmlElementFunction("progress"),
    q = createHtmlElementFunction("q"),
    rp = createHtmlElementFunction("rp"), rt = createHtmlElementFunction("rt"), ruby = createHtmlElementFunction("ruby"),
    s = createHtmlElementFunction("s"), samp = createHtmlElementFunction("samp"), script = createHtmlElementFunction("script"), section = createHtmlElementFunction("section"), html_components_select = createHtmlElementFunction("select"), small = createHtmlElementFunction("small"), source = createHtmlElementFunction("source"), span = createHtmlElementFunction("span"), strike = createHtmlElementFunction("strike"), strong = createHtmlElementFunction("strong"), style = createHtmlElementFunction("style"), sub = createHtmlElementFunction("sub"), sup = createHtmlElementFunction("sup"),
    table = createHtmlElementFunction("table"), tbody = createHtmlElementFunction("tbody"), td = createHtmlElementFunction("td"), html_components_textarea = createHtmlElementFunction("textarea"), tfoot = createHtmlElementFunction("tfoot"), th = createHtmlElementFunction("th"), thead = createHtmlElementFunction("thead"), time = createHtmlElementFunction("time"), title = createHtmlElementFunction("title"), tr = createHtmlElementFunction("tr"), track = createHtmlElementFunction("track"), tt = createHtmlElementFunction("tt"),
    u = createHtmlElementFunction("u"), ul = createHtmlElementFunction("ul"),
    video = createHtmlElementFunction("video"),
    wbr = createHtmlElementFunction("wbr");



/**
 * Tạo đối tượng dom
 * @param {string|object} selector
 * @param {string|Element|string[]|Element[]} children
 * @param {object} attributes
 * @returns {DomFactory}
 * @note {string} Đoạn này thật ra không cần thiết. nhưng viết bào để trình soạn thảo sử dụng gợi ỳ
 */


var Html = function () {
    var $class = (0,es5_class/* _class */.nN)("Html").extends(dom/* default */.ZP)({
        const$isHtml: true,
        __call(...args) {
            return (0,dom/* createEl */.ut)(...args);
        }
    });
    return $class
}();

Html.static = function (props) {
    if ((0,utils/* isObject */.Kn)(props)) {
        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const vl = props[key];
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: true,
                    value: vl
                })
            }
        }
    }
}

const Loop = (0,es5_class/* _class */.nN)("Loop")({
    static$isDomClass: true,
    $el: null,
    const$isDom: true,
    $target: null,
    $parent: null,
    $eachFn: null,
    $children: null,
    $index: 0,
    $key: 0,
    $value: undefined,
    $object: null,

    $isFirst: false,
    isLast: false,

    __boot__: function () {
        this.children = [];
        this.el = document.createComment('Loop Elememt');
        this.object = [];
    },
    __destroy__: function () {
        this.removeChild();
    },

    /**
     * ham khoi tao
     * @param {*} arrObj data đầu vào
     * @param {function(*)} eachFactory ham trả về đối tượng dom hoặc bất kỳ
     */
    constructor: function (arrObj, eachFactory) {
        this.object = arrObj;
        this.eachFn = eachFactory;
    },

    __init__: function () {

    },

    afterSet$parent: function (parent) {
        this.render();
    },

    render: function () {
        this.removeChild();
        if ((0,utils/* isFunction */.mf)(this.eachFn)) {
            if ((0,utils/* isObject */.Kn)(this.object)) {
                var keys = (0,utils/* objectKeys */.Yd)(this.object);
                var length = keys.length;
                var i = 0;
                for (const key in this.object) {
                    if (Object.hasOwnProperty.call(this.object, key)) {
                        const value = this.object[key];
                        this.value = value;
                        this.key = key;
                        this.index = i;
                        this.isFirst = i == 0;
                        this.isLast = i == length - 1;
                        if (this.eachFn.length == 1) {
                            this.addChild(this.eachFn.apply(this, [value]));
                        } else if (this.eachFn.length == 2) {
                            this.addChild(this.eachFn.apply(this, [key, value]));
                        }
                        i++;
                    }
                }
            }
            else if ((0,utils/* isArray */.kJ)(this.object)) {
                for (let index = 0; index < this.object.length; index++) {
                    const value = this.object[index];
                    this.key = key;
                    this.index = index;
                    this.isFirst = index == 0;
                    this.isLast = index == this.object.length - 1;
                    if (this.eachFn.length == 1) {
                        this.addChild(this.eachFn.apply(this, [value]));
                    } else if (this.eachFn.length == 2) {
                        this.addChild(this.eachFn.apply(this, [key, value]));
                    }
                }
            }
        }
    },

    addChild: function (child) {
        if (child) {
            this.children.push(child);
            if (this.parent) {
                this.parent.before(child, this);
            }
        }
    },

    /**
     * xóa phần tử con
     * @param {Element|Dom|Dom|Dom.Query} child 
     * @param {boolean} removeDomEl Xóa dom el
     */
    final$removeChild: function (child, removeDomEl) {
        if (typeof removeDomEl == "undefined" || !(0,utils/* isBoolean */.jn)(removeDomEl) || child === true) removeDomEl = true;

        if (child) {
            var self = this;
            let index = this.children.indexOf(child);
            if (index != -1) {
                this.children.splice(index, 1);
                if (child.isDom) {
                    child.remove(true);
                    child.__destroy__();
                }

            }
            else if (child instanceof Element) {
                for (let i = 0; i < this.children.length; i++) {
                    const c = this.children[i];
                    if (c.el == child) {
                        this.children.splice(i, 1);
                        child.remove(true);
                        child.__destroy__();
                    }
                }
            }

        }
        else {
            if (!(0,utils/* isArray */.kJ)(this.children)) return this;
            while (this.children.length > 0) {
                let child = this.children.shift();
                child.remove(true);
                child.__destroy__();
            }
        }
        return this;

    },

    /**
     * Xóa
     */
    final$remove: function () {
        var children = (0,utils/* getArguments */.Tu)(arguments);
        if (!children.length || (children.length == 1 && children[0] == true)) {
            this.removeChild();
            if (this.parent) {
                this.parent.removeChild(this);
            }
            else if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            if (children[0] == true) {
                this.removeChild();
            }

        }
        else if (children.length) {
            var self = this;
            children.map(function (child) {
                self.removeChild(child);
            });
        }
        return this;
    }
});

const ForInc = (0,es5_class/* _class */.nN)("ForInc").extends(Loop)({
    const$isForLoop: true,
    render: function () {
        this.removeChild();
        if ((0,utils/* isFunction */.mf)(this.eachFn)) {
            if ((0,utils/* isObject */.Kn)(this.object)) {
                var keys = Object.keys(this.object);
                var length = keys.length;
                for (let index = 0; index < length; index++) {
                    const key = keys[index];
                    if (Object.hasOwnProperty.call(this.object, key)) {
                        const value = this.object[key];
                        this.value = value;
                        this.key = key;
                        this.index = i;
                        this.isFirst = index == 0;
                        this.isLast = index == length - 1;
                        if (this.eachFn.length == 1) {
                            this.addChild(this.eachFn.apply(this, [value]));
                        } else if (this.eachFn.length == 2) {
                            this.addChild(this.eachFn.apply(this, [key, value]));
                        }
                    }
                }
                
            }
            else if ((0,utils/* isArray */.kJ)(this.object)) {
                for (let index = 0; index < this.object.length; index++) {
                    const value = this.object[index];
                    this.key = index;
                    this.index = index;
                    this.isFirst = index == 0;
                    this.isLast = index == this.object.length - 1;
                    if (this.eachFn.length == 1) {
                        this.addChild(this.eachFn.apply(this, [value]));
                    } else if (this.eachFn.length == 2) {
                        this.addChild(this.eachFn.apply(this, [index, value]));
                    }
                }
            }
        }
    }
})
const ForDec = (0,es5_class/* _class */.nN)("ForDec").extends(Loop)({
    const$isForLoop: true,
    render: function () {
        this.removeChild();
        if ((0,utils/* isFunction */.mf)(this.eachFn)) {
            if ((0,utils/* isObject */.Kn)(this.object)) {
                var keys = Object.keys(this.object);
                var length = keys.length;
                for (let index = length - 1; index > -1; index--) {
                    const key = keys[index];
                    if (Object.hasOwnProperty.call(this.object, key)) {
                        const value = this.object[key];
                        this.value = value;
                        this.key = key;
                        this.index = i;
                        this.isFirst = index == 0;
                        this.isLast = index == length - 1;
                        if (this.eachFn.length == 1) {
                            this.addChild(this.eachFn.apply(this, [value]));
                        } else if (this.eachFn.length == 2) {
                            this.addChild(this.eachFn.apply(this, [key, value]));
                        }
                    }
                }
            }
            else if ((0,utils/* isArray */.kJ)(this.object)) {
                for (let index = this.object.length - 1; index > -1; index--) {
                    const value = this.object[index];
                    this.key = index;
                    this.index = index;
                    this.isFirst = index == 0;
                    this.isLast = index == this.object.length - 1;
                    if (this.eachFn.length == 1) {
                        this.addChild(this.eachFn.apply(this, [value]));
                    } else if (this.eachFn.length == 2) {
                        this.addChild(this.eachFn.apply(this, [index, value]));
                    }
                }
            }
        }
    }
})

Html.static({
    A: A, Abbr: Abbr, Acronym: Acronym, Address: Address, Applet: Applet, Area: Area, Article: Article, Aside: Aside, Audio: Audio,
    B: B, Base: Base, Basefont: Basefont, Bb: Bb, Bdo: Bdo, Big: Big, Blockquote: Blockquote, Body: Body, Br: Br, Button: Button,
    Canvas: Canvas, Caption: Caption, Center: Center, Cite: Cite, Code: Code, Col: Col, Colgroup: Colgroup, Command: Command,
    Datagrid: Datagrid, Datalist: Datalist, Dd: Dd, Del: Del, Details: Details, Dfn: Dfn, Dialog: Dialog, Dir: Dir, Div: Div, Dl: Dl, Dt: Dt,
    Em: Em, Embed: Embed, Eventsource: Eventsource, Fieldset: Fieldset, Figcaption: Figcaption, Figure: Figure, Font: Font, Footer: Footer, Form: Form, Frame: Frame, Frameset: Frameset,
    H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, Head: Head, Header: Header, Hgroup: Hgroup, Hr: Hr,
    I: I, Iframe: Iframe, Img: Img, Input: Input, Ins: Ins, Isindex: Isindex,
    Kbd: Kbd, Keygen: Keygen,
    Label: Label, Legend: Legend, Li: Li, Link: Link,
    Map: Map, Mark: Mark, Menu: Menu, Meta: Meta, Meter: Meter,
    Nav: Nav, Noframes: Noframes, Noscript: Noscript,
    Ol: Ol, Optgroup: Optgroup, Option: Option, Output: Output,
    P: P, Param: Param, Pre: Pre, Progress: Progress,
    Q: Q, Rp: Rp, Rt: Rt, Ruby: Ruby,
    S: S, Samp: Samp, Script: Script, Section: Section, Select: Select, Small: Small, Source: Source, Span: Span, Strike: Strike, Strong: Strong, Style: Style, Sub: Sub, Sup: Sup,
    Table: Table, Tbody: Tbody, Td: Td, Textarea: Textarea, Tfoot: Tfoot, Th: Th, Thead: Thead, Time: Time, Title: Title, Tr: Tr, Track: Track, Tt: Tt,
    U: U, Ul: Ul,
    Video: Video, Wbr: Wbr,
    Loop:Loop, ForInc:ForInc, ForDec: ForDec,
    a: a, abbr: abbr, acronym: acronym, address: address, applet: applet, area: html_components_area, article: article, aside: aside, audio: audio,
    b: b, base: base, basefont: basefont, bb: bb, bdo: bdo, big: big, blockquote: blockquote, body: body, br: br, button: html_components_button,
    canvas: canvas, caption: caption, center: center, cite: cite, code: code, col: col, colgroup: colgroup, command: command,
    datagrid: datagrid, datalist: datalist, dd: dd, del: del, details: details, dfn: dfn, dialog: dialog, dir: dir, div: div, dl: dl, dt: dt,
    em: em, embed: html_components_embed, eventsource: eventsource, fieldset: fieldset, figcaption: figcaption, figure: figure, font: font, footer: footer, form: html_components_form, frame: html_components_frame, frameset: frameset,
    h1: h1, h2: h2, h3: h3, h4: h4, h5: h5, h6: h6, head: head, header: header, hgroup: hgroup, hr: hr,
    i: i, iframe: iframe, img: img, input: input, ins: ins, isindex: isindex,
    kbd: kbd, keygen: keygen,
    label: label, legend: legend, li: li, link: html_components_link,
    map: map, mark: mark, menu: menu, meta: meta,
    meter: meter, nav: nav,
    noframes: noframes, noscript: noscript, ol: ol, optgroup: optgroup, option: html_components_option, output: output,
    p: p, param: param, pre: pre, progress: progress,
    q: q,
    rp: rp, rt: rt, ruby: ruby,
    s: s, samp: samp, script: script, section: section, select: html_components_select, small: small, source: source, span: span, strike: strike, strong: strong, style: style, sub: sub, sup: sup,
    table: table, tbody: tbody, td: td, textarea: html_components_textarea, tfoot: tfoot, th: th, thead: thead, time: time, title: title, tr: tr, track: track, tt: tt,
    u: u, ul: ul,
    video: video,
    wbr: wbr,

});


/* harmony default export */ const html_components = ((/* unused pure expression or super */ null && (Html)));

;// CONCATENATED MODULE: ./src/core/dom/component.js



const Component = (0,es5_class/* _class */.nN)("Component").extends(dom/* default */.ZP)({
    static$isComponentClass: true,
    const$isComponent: true,
    autoRender: true,
    constructor: function(args){

    },
    builder: function(){
        return null;
    }
});
;// CONCATENATED MODULE: ./src/main.ts







})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});