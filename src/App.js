import React from "react";
import { useState } from "react";
import "./Components/styles.css";
import values from "values.js";
import SingleComponent from "./Components/SingleComponent";

function App() {
  const [errMessage, setErrMessage] = useState(false);
  const [list, setList] = useState(new values(`#f15025`).all(10));
  const [color, setColor] = useState("");
  const generate = (e) => {
    e.preventDefault();
    try {
      const colors = new values(color).all(10);
      setList(colors);
      setColor("");
    } catch (error) {
      console.log(error);
      setErrMessage(true);
    }
  };

  useState(() => {
    const warning = setInterval(() => {
      setErrMessage(false);
    }, 3000);
    return () => {
      clearInterval(warning);
    };
  }, [list]);
  return (
    <div className="wrapper">
      <form className="forms" onSubmit={generate}>
        <label htmlFor="color">color generator:</label>
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#12345"
          className={errMessage ? "red" : ""}
        />

        <button type="submit" className="submit">
          submit
        </button>
        <h3 className="warning">{errMessage && "not a color"}</h3>
      </form>

      <section className="colors_list">
        {list.map((item, index) => {
          const hex = item.hex;
          return (
            <SingleComponent key={index} {...item} hex={hex} index={index} />
          );
        })}
      </section>
    </div>
  );
}

export default App;
