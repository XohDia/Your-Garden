import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      
      {/* Contenu de ta page - ajoute du padding-top pour ne pas être caché par la navbar fixe */}
      <main className="pt-20">
        <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
          <h1 className="text-5xl font-bold text-green-700">Bienvenue sur YourGarden 🌿</h1>
        </section>
        
        <section id="apropos" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold text-gray-800">À propos</h2>
        </section>
        
        <section id="services" className="min-h-screen flex items-center justify-center bg-green-50">
          <h2 className="text-4xl font-bold text-gray-800">Services</h2>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App
