import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentID) {
    console.log(`Current id:${getCurrentID}`);
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
