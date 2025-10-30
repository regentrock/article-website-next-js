import Card from "./components/card/card";
import styles from "./page.module.css";

export const metadata = {
  title: "NewsPress | Notícias em Alta",
  description: "Descubra o que está acontecendo ao redor do mundo com nossas notícias.",
};


export default async function Home() {

  return (
    <>
      <main className={styles.main}>
        <Card/>
      </main>
    </>
  );
}