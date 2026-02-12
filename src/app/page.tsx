import { Calendar, MapPin, Wallet, Gift, Info, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero Section */}
      <header className="relative bg-stone-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-3 py-1 border border-white/30 rounded-full text-sm tracking-wider mb-4">
            FAREWELL PARTY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            田中さんを囲む会
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            皆さんの大切な先輩である、田中秀和さんが退職されました。<br className="hidden md:block" />
            これまでお世話になった感謝と、田中さんの新たな門出を祝し、<br className="hidden md:block" />
            「囲む会」を開催します。
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Event Details */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">日時</h3>
            <p className="text-stone-600">
              2/27 (金)<br />
              18:00 ～
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">場所</h3>
            <div className="w-full aspect-video relative rounded-lg overflow-hidden border border-stone-200">
              <img
                src="/pit-in-55.jpg"
                alt="Pit Inn 55 Exterior"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-stone-600">
              <a href="https://tabelog.com/hyogo/A2803/A280301/28018978/" target="_blank" rel="noreferrer" className="underline hover:text-blue-600 transition-colors">
                ピットイン55
              </a>
              <br />
              兵庫県西宮市戸田町2-16
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">会費</h3>
            <p className="text-stone-600">
              おひとり最大6,000円以内<br />
              <span className="text-sm text-stone-500">※プレゼント代含む</span>
            </p>
          </div>
        </section>

        {/* Access Map */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-stone-800 pl-4">アクセス</h2>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=兵庫県西宮市戸田町2-16+ピットイン55&output=embed`}
            ></iframe>
            {/* 
               Alternative: Use the 'pb' string if I could generate it, but I can't.
               Let's replace the iframe src with a generic search embed that might work, 
               or just a static map image if I had one. 
               Since I cannot easily get a valid API key, I will use a simple link button as a fallback if the map doesn't load,
               but for the code I'll try the embed.
               
               Actually, for this output, I'll use the `q` parameter format. 
               However, without a key, it might show "For development purposes only".
               That is acceptable for a draft.
            */}
          </div>
          {/* Detailed replacement for the iframe src to be more robust or just provide a link */}
          <div className="bg-stone-100 p-4 rounded-lg flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-stone-500" />
            <div>
              <p className="font-medium">ピットイン55</p>
              <p className="text-sm text-stone-600">兵庫県西宮市戸田町2-16</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=兵庫県西宮市戸田町2-16+ピットイン55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline mt-1 inline-block"
              >
                Google Mapで開く
              </a>
            </div>
          </div>
        </section>

        {/* Information & Notes */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold border-l-4 border-stone-800 pl-4 flex items-center gap-2">
              <Info className="w-6 h-6" /> 特記事項
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 space-y-4">
              <p className="leading-relaxed text-stone-700">
                たいへん安くてボリューミーなお店です。「女子多め。量より質」と伝えておりますが、多分ボリューミーです。
              </p>
              <div className="flex items-start gap-2 text-stone-600 text-sm bg-orange-50 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
                <p>食べきれないものは持ち帰りできるように話しておりますので、無理せず残してテイクアウトしてください。</p>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                <img
                  src="/takeout-illustration.png"
                  alt="Takeout Illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold border-l-4 border-stone-800 pl-4 flex items-center gap-2">
              <Gift className="w-6 h-6" /> プレゼント
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center justify-center min-h-[200px]">
              <div className="w-48 h-auto mb-4 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                <img
                  src="/whisky-bottle.png"
                  alt="Sakurao Whisky Bottle"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">桜尾ウイスキー</h3>
              <p className="text-stone-600">オリジナルボトルを用意しています。</p>
            </div>
          </section>
        </div>

        {/* RSVP / Footer */}
        <section className="bg-stone-900 text-stone-300 p-8 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">お願い・連絡事項</h2>
          <p className="leading-relaxed">
            予約の関係上、変更のある方は<br />
            <span className="font-bold text-white text-lg">前々日 2/25(水)</span> までに<br />
            畑までお知らせください。
          </p>
        </section>

      </main>

      <footer className="text-center py-8 text-stone-400 text-sm">
        <p>© 2026 Tanaka-san Farewell Party</p>
      </footer>
    </div>
  );
}
