import { useState } from "react";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = () => {
    const randomX = Math.random() * 80 + 10;
    const randomY = Math.random() * 80 + 10;
    setNoPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80')",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="absolute inset-0 bg-pink-500/20 backdrop-blur-sm"></div>
      {!accepted ? (
        <div className="text-center relative z-10 flex flex-col items-center justify-center p-8 w-full max-w-4xl mx-auto">
          <img 
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZiMzBmMjM0ZWM4ZTBkYzM4ZTJiZjg4ZjM1ZjM4ZWM5ZmY1YzM5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"
            alt="Cute kitty with heart"
            className="w-96 h-96 mx-auto mb-12 rounded-full object-cover shadow-xl"
          />
          <h1 className="text-7xl font-bold text-white mb-16" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Mila, ¿quieres ser mi San Valentín?
          </h1>
          <div className="flex justify-center gap-6 relative">
            <button
              onClick={() => setAccepted(true)}
              className="px-10 py-5 text-2xl bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-lg hover:scale-110"
            >
              Sí
            </button>
            <button
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
                transition: "all 0.3s ease"
              }}
              className="px-10 py-5 text-2xl bg-red-500 text-white font-bold rounded-lg shadow-lg"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center relative z-10 flex flex-col items-center justify-center p-8 w-full max-w-4xl mx-auto">
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXF5Z2Vxa3QyeGt0MG51eWV4bWY4NmN0NTVlOXBnYzNiNzBiNjRpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/26BRv0ThflsHCqDrG/giphy.gif"
            alt="Love celebration"
            className="w-96 h-96 mx-auto mb-12 rounded-full object-cover shadow-xl"
          />
          <h1 className="text-7xl font-bold text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            ¡Sabía que dirías que sí! ❤️
          </h1>
        </div>
      )}
    </div>
  );
}