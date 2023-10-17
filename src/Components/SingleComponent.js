import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SingleComponent = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);

  const hexColor = `#${hex}`;
  const copy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };

  useEffect(() => {
    const out = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(out);
    };
  }, [alert]);
  console.log(index);
  return (
    <>
      <div
        style={{ backgroundColor: `rgb(${rgb})` }}
        className={`single_color ${index > 10 ? "light_color" : ""}`}
      >
        <p className="percent">{weight}</p>
        <p className="hex">{hexColor}</p>

        <p className="copied">{alert && "copied"}</p>
        <button className="copy" onClick={copy}>
          copy
        </button>
      </div>
    </>
  );
};

export default SingleComponent;
