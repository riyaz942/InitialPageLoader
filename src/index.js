import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from "prop-types";
import styles from './index.module.scss';
import LoaderComponent from './components/loaderComponent';
import ErrorComponent from './components/errorComponent';
import EmptyComponent from './components/emptyComponent';

const pageStates = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  COMPLETED: 'COMPLETED'
};

const InitialPageLoader = ({
  callApiOnMount,
  api,
  successCondition,
  errorMessage,
  emptyMessage, //TODO
  children
}) => {
  const [pageState, setPageState] = useState('');
  const [data, setData] = useState(null);

  const callApi = () => {
    setPageState(pageStates.LOADING);
    const promise = api();

    promise.then(response => response.json())
      .then(data => {
        setData(data);

        if (successCondition(data)) setPageState(pageStates.COMPLETED)
        else setPageState(pageStates.ERROR)
      })
      .catch(error => {
        setPageState(pageStates.ERROR)
      })
  };

  if (callApiOnMount) useEffect(callApi, [api]);

  return (
    <Fragment>
      {pageState == pageStates.LOADING && <LoaderComponent />}
      {pageState == pageStates.COMPLETED && children(data)}
      {pageState == pageStates.ERROR && (
        <ErrorComponent
          titleErrorMessage={errorMessage.title}
          errorMessage={errorMessage.message}
          onClickRetry={callApi}
        />
      )}
    </Fragment>
  )
}


InitialPageLoader.defaultProps = {
  callApiOnMount: true,
  successCondition: data => typeof data != 'undefined',
  errorMessage: {
    title: 'Whoops! Something Went Wrong.',
    message: 'Please Retry Again.',
  },
  emptyMessage: {
    title: '',
    message: '',
  }
};

InitialPageLoader.propTypes = {
  children: PropTypes.any.isRequired, //(Mandetory) the children to show after the api call
  api: PropTypes.func.isRequired, //(Mandetory) the promise in which the api call is being made
  callApiOnMount: PropTypes.bool, //(Optional) Don't automatically want to call the api on mount, instead
  successCondition: PropTypes.func,

  errorMessage: PropTypes.object,
  emptyMessage: PropTypes.object,
};

export default InitialPageLoader;