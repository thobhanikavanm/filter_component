import "./styles.css";
import JSONDATA from "./data.json";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {JSONDATA.filter((kav) => {
        if (search === "") {
          return kav;
        } else if (kav.toLowerCase().includes(search.toLowerCase())) {
          return kav;
        }
      }).map((val, key) => {
        return <div key={key}>{val}</div>;
      })}
    </div>
  );
}
