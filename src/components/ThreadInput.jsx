import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <form>
      <input label="Judul" value={title} onChange={onTitleChange} placeholder="Masukan Judul" />
      <input label="Kategori" value={category} onChange={onCategoryChange} placeholder="Masukan Kategori" />
      <input label="Masukkan Ide Kamu" value={body} onChange={onBodyChange} placeholder="Masukan ide kamu" />
      <button type="submit" onClick={() => addThread({ title, body, category })}>
        Kirim
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
