import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from "prop-types";
import styles from './index.module.scss';

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

      if (successCondition(data)) setPageState(pageStates.COMPLETED)
      else setPageState(pageStates.ERROR)
    } catch (error) {
      setPageState(pageStates.ERROR)
    }
  };

  if (callApiOnMount) useEffect(callApi, [api]);

  return (
    <Fragment>
      { pageState == pageStates.LOADING && <div>Loading</div> }
      { pageState == pageStates.COMPLETED && children(data) }
      { pageState == pageStates.ERROR && <div></div> }
    </Fragment>
  )
}


InitialPageLoader.defaultProps = {
  callApiOnMount: true,
  successCondition: data => typeof data != 'undefined'
};

InitialPageLoader.propTypes = {
  children: PropTypes.any.isRequired, //(Mandetory) the children to show after the api call
  api: PropTypes.func.isRequired, //(Mandetory) the promise in which the api call is being made
  callApiOnMount: PropTypes.bool, //(Optional) Don't automatically want to call the api on mount, instead
  successCondition: PropTypes.func,
};

export default InitialPageLoader;