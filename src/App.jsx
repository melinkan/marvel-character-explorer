import { useEffect, useState } from "react";
import { Header, Card, CharList } from "./components";

function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=3ed3143d1f4660857e06b20c20aa1a2a"
    )
      .then((data) => data.json())
      .then(({ data }) => {
        setChars(data.results);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Header />
      <CharList>
        {chars.map((char) => {
          return <Card char={char} />;
        })}
      </CharList>
    </>
  );
}

export default App;
