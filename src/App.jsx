import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { Header } from "./components";
import { SearchContext } from "./contexts";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters/:id" element={<Detail />} />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
