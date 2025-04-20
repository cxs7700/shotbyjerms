export default function Contact() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-[90%] mx-auto py-20">
        <h1 className="text-5xl font-light mb-12 text-center">Contact</h1>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <p className="text-gray-300">Email: shotbyjerms@gmail.com</p>
            <p className="text-gray-300">Instagram: @shotbyjerms</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 hover:bg-white/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 