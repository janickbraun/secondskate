import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Datenschutzerklärung</h1>
        <p className="mt-4 mb-12 text-zinc-400">Stand: 16.03.2026</p>
        
        <div className="space-y-12 text-zinc-300">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-medium text-white mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese App/Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h3 className="text-xl font-medium text-white mb-2">Datenerfassung in unserer App</h3>
            <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung?</strong><br/>Die Datenverarbeitung auf dieser Plattform erfolgt durch den Betreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
            <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong><br/>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie bei der Registrierung eingeben (Name, E-Mail, Schuhgröße, Stance, Profilbild).</p>
            <p className="mb-4">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Plattform durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. IP-Adresse oder Uhrzeit des Seitenaufrufs).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-medium text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung ist:</p>
            <p className="mb-2 bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
              Janick Braun<br/>
              Ruhe am Bach 5d<br/>
              82377 Penzberg<br/>
              Telefon: +49 (0) 160 98640952<br/>
              E-Mail: <a href="mailto:janick@secondskate.de" className="text-primary hover:underline">janick@secondskate.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Datenerfassung in unserer App</h2>
            <h3 className="text-xl font-medium text-white mb-2">Registrierung und Profil</h3>
            <p className="mb-4">Wenn Sie sich auf secondskate registrieren, verarbeiten wir folgende Daten zur Bereitstellung des Marktplatzes: <strong>Name, E-Mail-Adresse, Profilbilder, Stance (Goofy/Regular), Schuhgröße sowie Ihre Postadresse</strong> für den Versand. Die Grundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
            
            <h3 className="text-xl font-medium text-white mb-2">Chat-Funktion</h3>
            <p className="mb-4">Die App bietet eine Chat-Funktion, um Käufer und Verkäufer zusammenzubringen. Die Chat-Verläufe werden auf unseren Servern gespeichert, um nachvollziehbar zu machen, was bei Transaktionen vereinbart wurde, und um bei Betrugsfällen eingreifen zu können (Rechtsgrundlage: berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Analyse-Tools</h2>
            <h3 className="text-xl font-medium text-white mb-2">Vercel Analytics</h3>
            <p className="mb-4">
              Wir nutzen zur Analyse unserer Website-Besuche den Dienst „Vercel Analytics“ der Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723. Die Analyse erfolgt vollständig anonymisiert; es werden keine Cookies auf Ihrem Endgerät gespeichert und es werden keine personenbezogenen Daten erhoben, mit denen Sie persönlich identifiziert werden könnten. Wir erfassen lediglich technische Informationen wie Browsertyp, Betriebssystem und besuchte Seiten, um die Benutzerfreundlichkeit unserer Plattform zu verbessern. Da keine personenbezogenen Daten im Sinne der DSGVO verarbeitet werden und keine Tracking-Cookies zum Einsatz kommen, ist für die Nutzung von Vercel Analytics keine explizite Einwilligung erforderlich (Art. 6 Abs. 1 lit. f DSGVO - berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Zahlungsanbieter (Stripe)</h2>
            <p className="mb-4">Wir bieten in der App die Bezahlung via Stripe an. Anbieter ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland. Wenn Sie sich für diese Zahlungsart entscheiden, werden die von Ihnen eingegebenen Zahlungsdaten an Stripe übermittelt.</p>
            <p className="mb-4">Die Übermittlung Ihrer Daten an Stripe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung). Details entnehmen Sie der Datenschutzerklärung von Stripe: <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://stripe.com/de/privacy</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Ihre Rechte</h2>
            <p className="mb-4">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
