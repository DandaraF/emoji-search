import './index.scss'

import { arrayEmoji } from '../../mock/emojiData';

const Emoji = () => {
  const emoji = "";
  const symbol = "";
  return (
    <div id="container"> 
      <div id="container-emoji">
        <p>{emoji} {symbol}</p>
      </div> 
    </div>
  );
};
  export { Emoji };