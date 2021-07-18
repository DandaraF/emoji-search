import { useState } from "react";
import { arrayEmoji } from "../../mock/emojiData";
import "./index.scss"

const Search = (props) => {

  const [search, setSearch] = useState('');

  return (
    <div id="inputSearch">
      <input
        type="text"
        id="inputSearch"
        placeholder="Digite o nome do emoji que deseja encontrar"
        value={props.value}
        onChange={props.event}
      />
      
    </div>

  )
};

export { Search };