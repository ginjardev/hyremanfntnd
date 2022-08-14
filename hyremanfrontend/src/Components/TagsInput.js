import React, { useState } from "react";
import "./style.css";

function TagsInput({ filterName, getResumesByTag }) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    console.log(value);
    getResumesByTag(value, filterName);
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="tags-input"
        placeholder="Type something"
      />
    </div>
  );
}

export default TagsInput;
