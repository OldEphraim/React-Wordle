import React, {useContext} from 'react';
import {AppContext} from '../../App.js';

import './popup.css';

const LosingPopup = () => {
  const {showLosingPopup} = useContext(AppContext);
  const {word} = useContext(AppContext);
  const answer = word.join("");
  if (showLosingPopup === true) {
  return (
    <div className="popup">
    <h4>Sorry, you've lost ☹️. The correct answer was '{answer}'. Better luck next time!</h4>
    <h5>If you enjoyed this game, give me a call at (440) 523-9475 or shoot me an email at a8garber@wustl.edu.</h5>
    <h5>Reload the page if you would like to play again.</h5>
    </div>
  )
}
}

export default LosingPopup;
