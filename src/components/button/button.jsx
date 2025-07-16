import styles from "./Button.module.css";

function Button({
  text,
  onClick,
  isLoading = false,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {text}
      {isLoading && <span className={styles.spinner} />}
    </button>
  );
}

export default Button;
