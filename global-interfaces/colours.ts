interface Colours {
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  success: string;
}

const backgroundColours: Colours = {
  primary: 'bg-red-900',
  secondary: 'bg-gray-300',
  danger: 'bg-red-300',
  warning: 'bg-pink-900',
  success: 'bg-pink-600',
};

export type BackgroundColourKey = keyof Colours;

export default backgroundColours;

// I want danger to be 'rgb(185, 120, 130)'
