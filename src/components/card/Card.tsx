
import { Component, JSX, splitProps } from "solid-js";
import { solidTwMerge } from "../../utils/solidTwMerge";

type CardProps = {
  title?: string; // Optional title
  image?: string; // Optional image URL
  children?: JSX.Element; // Additional content inside the card
} & JSX.IntrinsicElements["div"];

const Card: Component<CardProps> = (props) => {

  const [local, styling, rest] = splitProps(props, ["title", "image", "children"], ["classList", "class"]);
  const classStr = solidTwMerge(styling,
    [
      "relative", // For positioning
      "w-70", // Fixed width of 200px
      "h-60", // Fixed height of 150px
      "cursor-pointer", // Pointer on hover
      "overflow-hidden", // Ensures child content stays inside
      "rounded-lg", // Rounded corners (10px equivalent)
      "transition-transform", // Smooth transformation
      "duration-300", // Animation duration
      "shadow-md", // Box shadow
      "hover:shadow-lg hover:transform hover:scale-105", // Hover effects
      "bg-white" // Default background
    ]);

  return (
    <div
      {...rest} // Pass any additional
      class={classStr} // Apply default Tailwind styles

    >
      {/* Render image and title if provided */}
      {props.image && (
        <img
          src={props.image}
          alt={props.title || "Card image"}
          class="rounded-lg w-full h-full object-cover" // Tailwind classes for image
        />
      )}

      {/* Render title if provided */}
      {props.title && (
        <h2 class="absolute bottom-2 left-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
          {props.title}
        </h2>
      )}

      {/* Render children */}
      {props.children}
    </div>
  );
};

export default Card;
