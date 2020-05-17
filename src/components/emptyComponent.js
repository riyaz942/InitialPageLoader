import React from 'react';
import styles from '../styles';

const emptyComponent = ({ titleEmptyMessage, emptyMessage }) => {
  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorTitleText}>{titleEmptyMessage}</div>
      <div style={styles.errorMessageText}>{emptyMessage}</div>
    </div>
  );
}

export default emptyComponent;
