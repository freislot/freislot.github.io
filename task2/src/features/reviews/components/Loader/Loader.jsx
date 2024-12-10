import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader_containerNew}>
      <div className={styles.loaderNew}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="94" height="54" viewBox="0 0 94 54" fill="none">
            <path d="M87 7C87 12.2529 85.9654 17.4543 83.9552 22.3073C81.945 27.1604 78.9986 31.5699 75.2843 35.2843C71.5699 38.9986 67.1604 41.945 62.3073 43.9552C57.4543 45.9654 52.2529 47 47 47C41.7471 47 36.5457 45.9654 31.6927 43.9552C26.8396 41.945 22.4301 38.9986 18.7157 35.2843C15.0014 31.5699 12.055 27.1604 10.0448 22.3073C8.03463 17.4543 7 12.2529 7 6.99999" stroke="#1E60FC" strokeWidth="13" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <svg className={styles.shadow} xmlns="http://www.w3.org/2000/svg" width="716" height="508" viewBox="0 0 716 508" fill="none">
        <g opacity="0.4" filter="url(#filter0_f_741_22000)">
          <circle cx="90.5" cy="625.5" r="325.5" fill="#1e60fc" />
        </g>
        <defs>
          <filter id="filter0_f_741_22000" x="-535" y="0" width="1251" height="1251" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_741_22000" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}