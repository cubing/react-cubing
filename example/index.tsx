import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TwistyPlayer, TwistyPlayerConfig } from '../.';
import { BlockMove, Sequence, experimentalAppendBlockMove } from 'cubing/alg';

const App = () => {
  const config: TwistyPlayerConfig = {
    puzzle: '4x4x4',
    visualization: "PG3D",
    alg: new Sequence([new BlockMove(undefined, undefined, 'R', 1)])
  }
  return (
    <div>
      <TwistyPlayer {...config} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
