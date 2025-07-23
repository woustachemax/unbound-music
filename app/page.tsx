import LiquidChrome from "./components/Background"
import { ArrowRight, Music, Zap } from 'lucide-react';

export default function Home(){
  return <div className="min-h-screen">
  <LiquidChrome
      baseColor={[0.2, 0.1, 0.5]}
      speed={0.2}
      amplitude={0.6}
      interactive={true}
      className="fixed inset-0 w-full h-full">
            <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white/20">
                Unbound Music
              </span>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="#features" className="text-white/30 hover:text-white/50 transition-colors">Features</a>
              <a href="#mission" className="text-white/30 hover:text-white/50 transition-colors">Mission</a>
              <a href="#convert" className="text-white/30 hover:text-white/50 transition-colors">Convert</a>
              
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full">
                  <LiquidChrome 
                    baseColor={[0.8, 0.8, 1.0]}
                    speed={0.3}
                    amplitude={0.2}
                    interactive={true}
                  />
                </div>
                <button className="relative px-4 py-2 text-white/40 border border-white/10 rounded-lg backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300">
                  Sign In
                </button>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full">
                  <LiquidChrome 
                    baseColor={[1.0, 0.8, 0.8]}
                    speed={0.4}
                    amplitude={0.3}
                    interactive={true}
                  />
                </div>
                <button className="relative px-4 py-2 text-white/40 border border-white/15 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white/30 drop-shadow-2xl">
              Break Free
              <br />
              From Music Silos
            </h1>
            
            <p className="text-xl md:text-2xl text-white/20 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
              The first universal playlist converter that actually works. 
              Move your music between Spotify, Apple Music, and YouTube Music — in any direction.
            </p>

            <div className="flex justify-center items-center mb-12">
              <button className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white/40 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Start Converting</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-white/30 drop-shadow-lg">3</div>
                <div className="text-white/20">Platforms</div>
              </div>
              <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-white/30 drop-shadow-lg">6</div>
                <div className="text-white/20">Conversion Paths</div>
              </div>
              <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-white/30 drop-shadow-lg">∞</div>
                <div className="text-white/20">Freedom</div>
              </div>
            </div>
          </div>
        </main>

        <section id="features" className="py-20 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white/30 drop-shadow-lg">
              Why Unbound Music?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/30">Bidirectional</h3>
                <p className="text-white/20">
                  Not just one-way. Convert playlists in any direction between all major music platforms.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/30">Lightning Fast</h3>
                <p className="text-white/20">
                  Advanced matching algorithms ensure quick, accurate playlist transfers with minimal errors.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-white/40" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/30">Smart Matching</h3>
                <p className="text-white/20">
                  Fuzzy search technology finds your tracks even when titles don't match exactly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white/30 drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-xl text-white/20 leading-relaxed mb-8 drop-shadow-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6">
              Music should be free to move. Your carefully curated playlists shouldn't be trapped 
              in one ecosystem. We're building the bridge between platforms so your music follows you, 
              wherever you choose to listen.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl">
              <p className="text-xl italic drop-shadow-lg font-medium text-white/30">
                "Every playlist deserves to be unbound."
              </p>
            </div>
          </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-center items-center space-x-8">
              <a href="#features" className="text-white/40 hover:text-white/60 transition-colors text-sm">Features</a>
              <a href="#mission" className="text-white/40 hover:text-white/60 transition-colors text-sm">Mission</a>
              <span className="text-white/30 font-semibold">Unbound Music</span>
              <a href="#convert" className="text-white/40 hover:text-white/60 transition-colors text-sm">Convert</a>
              <a href="#contact" className="text-white/40 hover:text-white/60 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </nav>
      </div>
  </LiquidChrome>
</div>
}