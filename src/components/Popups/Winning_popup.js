import React, {useContext} from 'react';
import {AppContext} from '../../App.js';

import './popup.css';

const WinningPopup = () => {
  const {showWinningPopup} = useContext(AppContext);
  if (showWinningPopup === true) {
  return (
    <div className="popup">
    <h4>Congratulations, you win! 😊</h4>
    <h5>If you enjoyed this game, give me a call at (440) 523-9475 or shoot me an email at a8garber@yahoo.com.</h5>
    <h5>Reload the page if you would like to play again.</h5>
    </div>
  )
}
}

export default WinningPopup;
