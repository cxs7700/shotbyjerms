export default function Rates() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-[90%] mx-auto py-20">
        <h1 className="text-5xl font-light mb-16 text-center">Rates</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portrait Session */}
          <div className="border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-light">Portrait Session</h2>
              <div className="py-6">
                <p className="text-5xl font-light">$200</p>
                <p className="text-gray-400 mt-2">1 hour session</p>
              </div>
              <div className="space-y-3 text-left">
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  20 edited photos
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Digital delivery
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  1 location
                </p>
                <div className="h-px bg-white/10" />
              </div>
            </div>
          </div>

          {/* Creative Session */}
          <div className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 bg-white/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-light">Creative Session</h2>
              <div className="py-6">
                <p className="text-5xl font-light">$350</p>
                <p className="text-gray-400 mt-2">2 hour session</p>
              </div>
              <div className="space-y-3 text-left">
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  40 edited photos
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Digital delivery
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Multiple locations
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Style consultation
                </p>
                <div className="h-px bg-white/10" />
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-light">Commercial</h2>
              <div className="py-6">
                <p className="text-4xl font-light">Custom</p>
                <p className="text-gray-400 mt-2">Tailored to your needs</p>
              </div>
              <div className="space-y-3 text-left">
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Flexible duration
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Commercial license
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-gray-300 flex items-center">
                  <span className="mr-2 text-white">•</span>
                  Rush delivery available
                </p>
                <div className="h-px bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block border border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
} 