import * as React from 'react';
import { TwistyPlayer as TP } from 'cubing/twisty';
import { TwistyPlayerInitialConfig } from 'cubing/dist/esm/src/twisty/dom/TwistyPlayerConfig';
// Delete me

interface TwistyPlayerConfig extends TwistyPlayerInitialConfig {}

export const TwistyPlayer = (props: TwistyPlayerConfig) => {
  const [, setTwisty] = React.useState<TP>();
  const spanRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const newTwisty = new TP(props);
    setTwisty(newTwisty);
    spanRef.current?.appendChild(newTwisty);
  }, []);

  return <span id="twisty-header" ref={spanRef} />;
};

export { TwistyPlayerConfig };
