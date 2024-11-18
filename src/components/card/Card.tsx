// import { JSX } from "solid-js";

// type CardProps = {
//   flat: boolean;
//   rounded: boolean;
//   children: JSX.Element;
//   onClick?: () => void;
//   style?: JSX.CSSProperties;
//   backgroundImage?: string; // New prop for background image URL
// };

// export default function Card({ flat, rounded, children, onClick, style, backgroundImage }: CardProps) {
//   return (
//     <div
//       class={`card ${flat ? 'flat' : ''} ${rounded ? 'rounded-lg' : ''}`}
//       onClick={onClick}
//       style={{
//         ...style,
//         'background-image': `url(${backgroundImage})`,
//         'background-size': 'cover',           // Ensures image covers the entire card
//         'background-position': 'center',      // Centers the image
//         'background-repeat': 'no-repeat',     // Prevents repeating if image is small
//       }}
//     >
//       <div class="card-overlay">
//         {children}
//       </div>
//     </div>
//   );
// }

// components/Card.tsx

// src/components/Card.tsx
import { Component } from "solid-js";

interface CardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const Card: Component<CardProps> = (props) => {
  return (
    <div class="card" onclick={props.onClick}>
      <img src={props.image} alt={props.title} class="card-image" />
      <div class="card-overlay">
        <h2 class="card-title">{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;

