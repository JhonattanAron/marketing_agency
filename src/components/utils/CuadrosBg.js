export default function CuadrosBg(props) {
  return (
    <svg
      class="absolute bottom-0 left-0 mb-8"
      viewBox="0 0 375 283"
      fill="none"
    >
      <rect
        x="159.52"
        y="175"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 159.52 175)"
        fill={props.fill}
      ></rect>
      <rect
        y="107.48"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 0 107.48)"
        fill={props.fill}
      ></rect>
    </svg>
  );
}
