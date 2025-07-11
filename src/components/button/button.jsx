import styles from './button.module.css';

const Button = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;


