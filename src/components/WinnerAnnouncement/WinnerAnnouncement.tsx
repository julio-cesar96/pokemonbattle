import { WinnerAnnouncementProps } from "./WinnerAnnouncement.types";

const WinnerAnnouncement: React.FC<WinnerAnnouncementProps> = ({ winner }) => {
  return (
    <div className="mt-6 bg-yellow-400 px-6 py-3 rounded-md text-xl font-bold shadow-md">
      {winner === "Empate" ? "⚖️ Empate!" : `🏆 Vencedor: ${winner}`}
    </div>
  );
};

export default WinnerAnnouncement
