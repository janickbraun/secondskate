import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Impressum</h1>
        
        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">Janick Braun</p>
            <p className="mb-2">Ruhe am Bach 5d</p>
            <p className="mb-2">82377 Penzberg</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
            <p className="mb-2">Telefon: +49 (0) 160 98640952</p>
            <p className="mb-2">E-Mail: <a href="mailto:janick@grovider.de" className="text-primary hover:underline">janick@grovider.de</a></p>
          </section>

          {/*
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="mb-2">[DE999999999]</p>
          </section>
          

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Registereintrag</h2>
            <p className="mb-2">Eintragung im [Handelsregister/Vereinsregister].</p>
            <p className="mb-2">Registergericht: [Amtsgericht Musterstadt]</p>
            <p className="mb-2">Registernummer: [HRB 999999]</p>
          </section>
          */}

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
            <p className="mb-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
