import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TwistyPlayer, TwistyPlayerConfig } from '../.';
import { BlockMove, Sequence, experimentalAppendBlockMove } from 'cubing/alg';
import {TwistyPlayer as TP} from 'cubing/twisty'
import './index.css'

const App = () => {
  const [twisty, setTwisty] = React.useState<TP>()
  const config: TwistyPlayerConfig = {
    puzzle: '3x3x3',
    visualization: "3D",
    alg: new Sequence([new BlockMove(undefined, undefined, 'L', 1)]),
    background: 'none',
  }
  const handleInit = (tp: TP) => {
    setTwisty(tp)
  }
  return (
    <div>
      <TwistyPlayer onTwistyInit={handleInit} className='twisty-player' style={{height: '20px'}} {...config} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
