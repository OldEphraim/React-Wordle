import React, {useContext} from 'react';
import {AppContext} from '../../App.js';

import './popup.css';

const ExplainingPopup = () => {
  const {showExplainingPopup} = useContext(AppContext);
  if (showExplainingPopup % 2 !== 0) {
    return (
      <div className="popup">
        <div className="game-explanation">
          <h5>To return to the game, click again on the header at the top of the screen!</h5>
          <h5>Keep in mind that you must use your computer's keyboard to guess letters -- the one onscreen just tracks which letters you have already attempted!</h5>
          <h5>Credit for the invention of the game Wordle goes to Josh Wardle! I did not invent this game and have no rights to it.
          <br/>
          <br/>
          Swordle has a few differences from Wordle. You must guess a six-letter string (but it doesn't have to be a valid word - go crazy if you like). Suppose the correct word is <b>SWORDS</b>, but you guess <b>FLOWER</b>.
          </h5>
          <div className="row">
            <div className="tile" id="tile1">F</div>
            <div className="tile" id="tile2">L</div>
            <div className="tile" id="tile3">O</div>
            <div className="tile" id="tile4">W</div>
            <div className="tile" id="tile5">E</div>
            <div className="tile" id="tile6">R</div>
          </div>
          <br/>
          <br/>
          <h5>
            Here, the letter O is in the word, and is in the correct spot. The letters W and R are in the word, but they are in the wrong spots. The letters F, L, and E are not in the word at all.
            <br/>
            <br/>
            Note that this game generates a new word every time you reload the page, not every day - so you can play more than once a day, if you would like. Click anywhere to get started!
            <br/>
            <br/>
            Happy playing! If you enjoy this game, consider hiring me as a front-end software engineer. Send me a text at (440) 523-9475 or shoot me an email at a8garber@wustl.edu.
          </h5>
        </div>
      </div>
    )
  }
}

export default ExplainingPopup;
