import { BattleButtonProps } from "./Button.types";

const BattleButton: React.FC<BattleButtonProps> = ({ onClick, label }) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-lg"
      >
        ⚔️ {label}
      </button>
    );
  };
  
  export default BattleButton;
  