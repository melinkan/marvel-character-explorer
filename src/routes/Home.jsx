import { useEffect, useState, useContext } from "react";
import { Card, CharList } from "../components";
import axios from "axios";
import { SearchContext } from "../contexts";

export default function Home() {
  const { searchQuery } = useContext(SearchContext);
  const [chars, setChars] = useState([]);
  let offset = 0;
  const params = {};
  if (searchQuery) {
    params.nameStartsWith = searchQuery;
  }
  const loadMore = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&apikey=3ed3143d1f4660857e06b20c20aa1a2a`,
        {
          params,
        }
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
    setChars([]);
  }, [searchQuery]);

  useEffect(() => {
    loadMore();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchQuery]);

  return (
    <CharList>
      {chars.map((char) => {
        return <Card key={char.id} char={char} />;
      })}
    </CharList>
  );
}
