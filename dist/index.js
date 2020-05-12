function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var pageStates = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  COMPLETED: 'COMPLETED'
};

var InitialPageLoader = function InitialPageLoader(_ref) {
  var callApiOnMount = _ref.callApiOnMount,
      api = _ref.api,
      successCondition = _ref.successCondition,
      children = _ref.children;

  var _useState = React.useState(''),
      pageState = _useState[0],
      setPageState = _useState[1];

  var _useState2 = React.useState(null),
      data = _useState2[0],
      setData = _useState2[1];

  var callApi = function callApi() {
    try {
      setPageState(pageStates.LOADING);

      var _temp2 = _catch(function () {
        return Promise.resolve(api()).then(function (data) {
          setData(data);
          if (successCondition(data)) setPageState(pageStates.COMPLETED);else setPageState(pageStates.ERROR);
        });
      }, function () {
        setPageState(pageStates.ERROR);
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  if (callApiOnMount) React.useEffect(callApi, [api]);
  return /*#__PURE__*/React__default.createElement(Fragment, null, pageState == pageStates.LOADING && /*#__PURE__*/React__default.createElement("div", null, "Loading"), pageState == pageStates.COMPLETED && children(data), pageState == pageStates.ERROR && /*#__PURE__*/React__default.createElement("div", null));
};

InitialPageLoader.defaultProps = {
  callApiOnMount: true
};
InitialPageLoader.propTypes = {
  children: PropTypes.any.isRequired,
  api: PropTypes.func.isRequired,
  callApiOnMount: PropTypes.bool,
  successCondition: PropTypes.func
};

module.exports = InitialPageLoader;
//# sourceMappingURL=index.js.map
