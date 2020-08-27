import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  const inputRef = useRef(null);
  const [activeStatus, setActive] = useState(false);

  const clickHandler = (e) => {
    e.persist();
    inputRef.current.value = "";
    setActive(!activeStatus);
    inputRef.current.focus();
  };

  return (
    <div className={activeStatus ? "search active" : "search"}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="input"
      />
      <button className="btn" onClick={clickHandler}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
