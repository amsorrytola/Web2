import classNames from 'classnames';

const tailwindColors = {
  slate: { 300: "#91a7c2", 500: "#64748b", 900: "#1e293b" },
  gray: { 300: "#d1d5db", 500: "#6b7280", 900: "#111827" },
  zinc: { 300: "#d4d7dd", 500: "#78716c", 900: "#1c1b19" },
  neutral: { 300: "#d1d5db", 500: "#737373", 900: "#1f1f1f" },
  stone: { 300: "#d6d3d1", 500: "#78716c", 900: "#2c2a29" },
  red: { 300: "#fca5a5", 500: "#ef4444", 900: "#7f1d1d" },
  orange: { 300: "#fdba74", 500: "#f97316", 900: "#9a3412" },
  amber: { 300: "#fcd34d", 500: "#f59e0b", 900: "#b45309" },
  yellow: { 300: "#fef08a", 500: "#eab308", 900: "#92400e" },
  lime: { 300: "#a7f3d0", 500: "#84cc16", 900: "#4d7c0f" },
  green: { 300: "#6ee7b7", 500: "#22c55e", 900: "#064e3b" },
  emerald: { 300: "#6ee7b7", 500: "#10b981", 900: "#064e3b" },
  teal: { 300: "#5eead4", 500: "#14b8a6", 900: "#134e4a" },
  cyan: { 300: "#67e8f9", 500: "#22d3ee", 900: "#0e4f5a" },
  sky: { 300: "#7dd3fc", 500: "#0ea5e9", 900: "#1e40af" },
  blue: { 300: "#93c5fd", 500: "#3b82f6", 900: "#1e3a8a" },
  indigo: { 300: "#a5b4fc", 500: "#6366f1", 900: "#1e3a8a" },
  violet: { 300: "#a78bfa", 500: "#8b5cf6", 900: "#4c1d95" },
  purple: { 300: "#d8b4fe", 500: "#9333ea", 900: "#6b21a8" },
  fuchsia: { 300: "#f0abfc", 500: "#d946ef", 900: "#9d0b6f" },
  pink: { 300: "#f9a8d4", 500: "#ec4899", 900: "#9d174d" },
  rose: { 300: "#fda4af", 500: "#e11d48", 900: "#9f1239" }
};

function getColorHash(colorName, shade) {
  if (tailwindColors[colorName] && tailwindColors[colorName][shade]) {
    return tailwindColors[colorName][shade];
  }
  return null; 
}

function Button({ color, updatestate }) {
  const colorhash300 = getColorHash(color, 300);
  const colorhash900 = getColorHash(color, 900);
  const colorhash500 = getColorHash(color, 500);

  const handleHover = () => {
    updatestate(colorhash500); // Update background color of the page when hovering over the button
  };

  return (
    <button 
      onMouseEnter={handleHover} // Trigger color change on hover
      className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 rounded-full p-3 w-24 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: colorhash300, color: colorhash900 }}
    >
      {color}
    </button>
  );
}

export default Button;
