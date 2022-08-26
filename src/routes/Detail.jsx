import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from "../components/DetailCard/DetailCard";

export default function Detail() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  const fetchCharacter = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=3ed3143d1f4660857e06b20c20aa1a2a`
      )
      .then(({ data }) => {
        console.log(data.data.results[0]);
        setCharacter(data.data.results[0]);
      });
  };

  useEffect(() => {
    if (!id) return;
    fetchCharacter();
  }, [id]);

  return <DetailCard character={character} />;
}
