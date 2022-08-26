import { useState, useEffect } from "react";
import { Spinner } from "../../components";
import styles from "./DetailCard.module.scss";
import axios from "axios";

export default function DetailCard({ character }) {
  const [comics, setComics] = useState(null);
  const fetchComics = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${character.id}/comics?offset=0&limit=10&apikey=3ed3143d1f4660857e06b20c20aa1a2a`
      )
      .then(({ data }) => {
        console.log(data.data.results);
        setComics(data.data.results);
      });
  };

  useEffect(() => {
    if (!character?.id) return;
    fetchComics();
  }, [character?.id]);

  if (!character)
    return (
      <div>
        <Spinner size="lg" />
      </div>
    );

  return (
    <main className={styles.base}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div>
            <img
              className={`img-fluid ${styles.imgWrapper}`}
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            />
          </div>
          <div className={styles.description}>
            <h1>{character.name}</h1>
            <p>
              {!!character.description
                ? character.description
                : "Character's description doesn't exist."}
            </p>
          </div>
        </div>

        <h2 className={styles.comicsTitle}>Comics</h2>
        <div className={styles.comics}>
          {comics?.map((comic) => {
            return (
              <div key={comic.id} className={styles.cardwrapper}>
                <div className={styles.cardimg}>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  />
                </div>
                <div className={styles.cardtitle}>
                  <p>{comic.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
