import * as React from 'react';
import { capitalize } from 'lodash';
import backgroundColours, {
  BackgroundColourKey,
} from '../../global-interfaces/colours';

interface ISmallButton {
  text: string;
  colour?: BackgroundColourKey;
}

export default function SmallButton({
  text,
  colour = 'primary',
}: ISmallButton) {
  const buttonText = capitalize(text);
  const backgroundColour = backgroundColours[colour];

  return (
    <button
      id="sm-button"
      className={`${backgroundColour} border-4 border-white max-w-40`}
    >
      <p className="p-0.5 text-white text-sm">{buttonText}</p>
    </button>
  );
}
