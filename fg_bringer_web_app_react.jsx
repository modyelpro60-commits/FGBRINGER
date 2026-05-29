import React from "react";

export default function FGBringer() {
  const dir = "rtl";
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://www.gamerpower.com/api/giveaways")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.slice(0, 9));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div dir={dir} className="min-h-screen bg-[#0b0f16] text-white">
      <header className="border-b border-white/10 backdrop-blur sticky top-0 z-50 bg-[#0b0f16]/90">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-green-400">
              بحبك ياجنجونتي
            </h1>
            <p className="text-sm text-gray-400 mt-1">
             اجمل بنت في الدنيا.
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-400 transition px-5 py-2 rounded-2xl font-semibold text-black shadow-lg shadow-green-500/20">
            فعل الإشعارات
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/20 rounded-3xl p-8 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-green-500 rounded-3xl blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-sm text-green-300 mb-5">
                تنبيهات الألعاب المجانية
              </div>

              <h2 className="text-5xl font-black leading-tight mb-5">
                اعرف أول ما الألعاب المدفوعة تبقى مجانية
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                FG Bringer بيتابع عروض Steam و Epic Games وبيبعتلك إشعارات لحظية عشان متفوتش أي لعبة مجانية لفترة محدودة.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-2xl text-black font-bold">
                  تحميل التطبيق
                </button>

                <button className="border border-white/10 hover:border-green-500/40 transition px-6 py-3 rounded-2xl font-semibold">
                  استكشف العروض
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#131a25] border border-white/10 rounded-[32px] p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1200&auto=format&fit=crop"
                  className="rounded-3xl h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold">الألعاب المجانية الحالية</h3>
            <p className="text-gray-400 mt-1">
              بيتحدث تلقائيًا كل شوية.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#161d29] border border-white/10 px-4 py-2 rounded-xl hover:border-green-500/30 transition">
              Steam
            </button>
            <button className="bg-[#161d29] border border-white/10 px-4 py-2 rounded-xl hover:border-green-500/30 transition">
              Epic Games
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {loading ? (
            <div className="text-gray-400 text-lg">جاري تحميل الألعاب...</div>
          ) : (
            games.map((game, index) => (
              <div
                key={index}
                className="bg-[#121722] border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300 hover:border-green-500/30 shadow-xl"
              >
                <img
                  src={game.image}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-500/15 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/20">
                      {game.platforms}
                    </span>

                    <span className="text-sm text-gray-400">مجاني</span>
                  </div>

                  <h4 className="text-2xl font-bold mb-3">
                    {game.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed mb-5 text-sm line-clamp-3">
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

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#121722] border border-white/10 rounded-3xl p-6">
            <div className="text-4xl mb-4">🔔</div>
            <h4 className="text-xl font-bold mb-3">إشعارات فورية</h4>
            <p className="text-gray-400 leading-relaxed">
              Receive alerts the second a new free game appears.
            </p>
          </div>

          <div className="bg-[#121722] border border-white/10 rounded-3xl p-6">
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-xl font-bold mb-3">Steam + Epic</h4>
            <p className="text-gray-400 leading-relaxed">
              تابع كل العروض المجانية على أكبر منصات الألعاب.
            </p>
          </div>

          <div className="bg-[#121722] border border-white/10 rounded-3xl p-6">
            <div className="text-4xl mb-4">💸</div>
            <h4 className="text-xl font-bold mb-3">جاهز للربح</h4>
            <p className="text-gray-400 leading-relaxed">
              جاهز لإضافة الإعلانات وتحقيق أرباح.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h5 className="text-xl font-bold text-green-400">بحبك ياجنجونتي</h5>
            <p className="text-gray-500 text-sm mt-1">
              FG Bringer © 2026
            </p>
          </div>

          <div className="flex gap-5 text-sm text-gray-400">
            <button className="hover:text-green-400 transition">
              الخصوصية
            </button>
            <button className="hover:text-green-400 transition">
              الدعم
            </button>
            <button className="hover:text-green-400 transition">
              ديسكورد
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
