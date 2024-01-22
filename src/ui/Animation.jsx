import { useEffect } from 'react';
import styles from './Animation.module.css';
function Animation({ children }) {
  useEffect(() => {
    const animationDurations = [
      11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 23, 18, 21, 13, 15, 26, 17, 13,
      28,
    ];

    const bubbles = document.querySelectorAll(`.${styles.bubbles} span`);
    bubbles.forEach((bubble, index) => {
      bubble.style.animationDuration = `${
        animationDurations[index % animationDurations.length]
      }s`;
    });
  }, []);

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.bubbles}>
          {Array.from({ length: 60 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}

export default Animation;
