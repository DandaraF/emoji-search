import './index.scss';
import { useState } from 'react';
import { arrayEmoji } from '../../mock/emojiData';
import { Search } from '../Search';


const EmojiContainer = () => {
  const [search, setSearch] = useState('');

  return (
    <div id="container">
      <Searc
        value={search}
        event={(ev) => setSearch(ev.target.value)} />
      
      <div id="container-emoji">
        {arrayEmoji.filter(emoji =>
          emoji.title.toLowerCase().includes(search.toLocaleLowerCase()))
        .map(({ title, symbol }) => (
          <>
            <p> { symbol } { title } </p>
          </>
      ))}
      </div>
      
      
    </div>
  );
};
export { EmojiContainer };
  
