import * as React from 'react';
import { TwistyPlayer as TP } from 'cubing/twisty';
import { TwistyPlayerInitialConfig } from 'cubing/dist/esm/src/twisty/dom/TwistyPlayerConfig';
// import {Sequence, BlockMove} from 'cubing/alg';

interface TwistyPlayerConfig extends TwistyPlayerInitialConfig {
  className?: string;
  onTwistyInit?: (twisty: TP) => void
}

export const TwistyPlayer = ({className, onTwistyInit,  ...props}: TwistyPlayerConfig) => {
  const [, setTwisty] = React.useState<TP>();
  const spanRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const newTwisty = new TP(props);
    if(className) {
    newTwisty.className = className
    }
    setTwisty(newTwisty);
    spanRef.current?.appendChild(newTwisty);
    if(onTwistyInit) onTwistyInit(newTwisty);
  }, []);

  return <span id="twisty-header" className={className} ref={spanRef} />;
};

export { TwistyPlayerConfig };