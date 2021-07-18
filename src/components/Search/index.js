import { useState } from "react";
import { arrayEmoji } from "../../mock/emojiData";
import "./index.scss"

const Search = () => {

  return (
    <div id="inputSearch">
      <input
        type="text"
        id="inputSearch"
        placeholder="Digite o nome do emoji que deseja encontrar"
           />
      <hr/>
    </div>
  )
};

export { Search };