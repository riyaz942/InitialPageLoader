import React, { useState, useEffect } from 'react';

const pageStates = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  COMPLETED: 'COMPLETED'
};

const InitialPageLoader = ({
  callApiOnMount,
  api,
  successCondition,
  children
}) => {
  const [pageState, setPageState] = useState('');
  const [data, setData] = useState(null);

  const callApi = async () => {
    setPageState(pageStates.LOADING);

    try {
      const data = await api();
      setData(data);
      if (successCondition(data)) setPageState(pageStates.COMPLETED);else setPageState(pageStates.ERROR);
    } catch (error) {
      setPageState(pageStates.ERROR);
    }
  };

  if (callApiOnMount) useEffect(callApi, [api]);
  return /*#__PURE__*/React.createElement(Fragment, null, pageState == pageStates.LOADING && /*#__PURE__*/React.createElement("div", null, "Loading"), pageState == pageStates.COMPLETED && children(data), pageState == pageStates.ERROR && /*#__PURE__*/React.createElement("div", null));
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

export default InitialPageLoader;
//# sourceMappingURL=index.modern.js.map
