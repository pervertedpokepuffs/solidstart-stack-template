import { JSX } from "solid-js";

type CardProps = {
  flat: boolean;
  rounded: boolean;
  children: JSX.Element;
  onClick?: () => void;
  style?: JSX.CSSProperties;
  backgroundImage?: string; // New prop for background image URL
};

export default function Card({ flat, rounded, children, onClick, style, backgroundImage }: CardProps) {
  return (
    <div
      class={`card ${flat ? 'flat' : ''} ${rounded ? 'rounded-lg' : ''}`}
      onClick={onClick}
      style={{
        ...style,
        'background-image': `url(${backgroundImage})`,
        'background-size': 'cover',           // Ensures image covers the entire card
        'background-position': 'center',      // Centers the image
        'background-repeat': 'no-repeat',     // Prevents repeating if image is small
      }}
    >
      <div class="card-overlay">
        {children}
      </div>
    </div>
  );
}
