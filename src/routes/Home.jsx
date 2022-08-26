import { useEffect, useState } from "react";
import { Card, CharList } from "../components";
import axios from "axios";

export default function Home() {
  const [chars, setChars] = useState([]);
  let offset = 0;

  const loadMore = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&apikey=3ed3143d1f4660857e06b20c20aa1a2a`
      )
      .then(({ data }) => {
        const newChars = [];
        data.data.results.forEach((char) => newChars.push(char));
        setChars((prev) => [...prev, ...newChars]);
      });
    offset += 30;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    loadMore();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <CharList>
      {chars.map((char) => {
        return <Card key={char.id} char={char} />;
      })}
    </CharList>
  );
}
