import React from "react";

export default function App() {
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://www.gamerpower.com/api/giveaways")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.slice(0, 9));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0f16] text-white">
      <header className="border-b border-white/10 bg-[#0b0f16]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-400">FG Bringer</h1>
            <p className="text-sm text-gray-400 mt-1">
              متفوتش أي لعبة مجانية تاني.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-3">
          الألعاب المجانية الحالية
        </h2>

        <p className="text-gray-400 mb-8">
          بيتحدث تلقائيًا كل شوية.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {loading ? (
            <div className="text-gray-400 text-lg">
              جاري تحميل الألعاب...
            </div>
          ) : (
            games.map((game, index) => (
              <div
                key={index}
                className="bg-[#121722] border border-white/10 rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={game.image}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-500/15 text-green-300 text-xs px-3 py-1 rounded-full">
                      {game.platforms}
                    </span>

                    <span className="text-sm text-gray-400">مجاني</span>
                  </div>

                  <h4 className="text-2xl font-bold mb-3">
                    {game.title}
                  </h4>

                  <p className="text-gray-400 mb-5 text-sm">
                    {game.description}
                  </p>

                  <button
                    onClick={() =>
                      window.open(game.open_giveaway_url, "_blank")
                    }
                    className="w-full bg-green-500 hover:bg-green-400 transition text-black font-bold py-3 rounded-2xl"
                  >
                    احصل على اللعبة
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
