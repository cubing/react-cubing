import * as React from 'react';
import { TwistyPlayer as TP, TwistyPlayerInitialConfig } from 'cubing/twisty';


interface TwistyPlayerConfig extends TwistyPlayerInitialConfig {
  className?: string;
  onTwistyInit?: (twisty: TP) => void;
}

export const TwistyPlayer = ({
  className,
  onTwistyInit,
  ...props
}: TwistyPlayerConfig) => {
  const [, setTwisty] = React.useState<TP>();
  const spanRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const newTwisty = new TP(props);
    if (className) {
      newTwisty.className = className;
    }
    setTwisty(newTwisty);
    spanRef.current?.appendChild(newTwisty);
    if (onTwistyInit) onTwistyInit(newTwisty);
  }, []);

  return <span id="twisty-header" className={className} ref={spanRef} />;
};

export { TwistyPlayerConfig };
