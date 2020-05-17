import React from 'react';
import progressLoaderIcon from '../icons/circular-loader.gif';
import styles from '../styles';

const loaderComponent = () => {
  return (
    <div style={styles.loaderContainer}>
      <img
        style={styles.loader}
        src={progressLoaderIcon}
      />
    </div>
  );
}

export default loaderComponent;