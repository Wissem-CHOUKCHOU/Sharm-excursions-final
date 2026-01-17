'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">
          SHARM<span className="text-orange-500">EXPLORE</span>
        </h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <main className="p-6">
        <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl mb-8">
          <img
            src="https://images.unsplash.com"
            alt="Mer Rouge "
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-white text-3xl font-bold">
              La Mer Rouge vous attend
            </h2>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Découvrez les meilleures excursions à{' '}
            <span className="font-bold text-blue-600">Sharm El Sheikh</span>.
            Snorkeling, Safari et Plongée au meilleur prix.
          </p>
        </div>
      </main>
    </div>
  );
}
