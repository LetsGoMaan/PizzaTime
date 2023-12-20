import styles from "./NotFound.module.scss";
export const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1></h1>
      <span>😕</span>
      <br />
      Ничего не найдено
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
