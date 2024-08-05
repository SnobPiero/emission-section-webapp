// components/ProgressBar.tsx
import React from 'react';
import styles from './progressBar.module.scss';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;
