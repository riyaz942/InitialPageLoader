import React from 'react';
import styles from '../styles';

const errorComponent = ({ titleErrorMessage, errorMessage, onClickRetry }) => {
  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorTitleText}>{titleErrorMessage}</div>
      <div style={styles.errorMessageText}>{errorMessage}</div>
      <br />
      <button onClick={onClickRetry}>Retry</button>
    </div>
  );
}

export default errorComponent;