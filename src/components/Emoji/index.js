import './index.scss'
import { useEffect, useState } from 'react';
import { arrayEmoji } from '../../mock/emojiData';

const Emoji = () => {
  const [search, setSearch] = useState("");

  return (
    <div id="container"> 
      {arrayEmoji.map(({ title, symbol })=>{
        return (
          <div id="container-emoji">
            <p>{symbol} {title}</p>
          </div>
        );
      })  
      } 
    </div>
  
  );
};
  export { Emoji };