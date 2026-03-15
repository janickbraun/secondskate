import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-12 text-zinc-300">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-4">Für die Geschäftsbeziehung zwischen den Betreibern der "secondskate" Plattform (nachfolgend "Betreiber") und den Nutzern der App gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Nutzung gültigen Fassung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 2 Leistungsbeschreibung</h2>
            <p className="mb-4">secondskate stellt einen Marktplatz zur Verfügung, der Skatern ermöglicht, einzelne Schuhe (nur links oder nur rechts) zu kaufen und zu verkaufen. Die Plattform bringt Verkäufer und Käufer zusammen und wickelt den Zahlungsprozess ab.</p>
            <p className="mb-4">Der Betreiber wird selbst nicht Vertragspartner der ausschließlich zwischen den Nutzern geschlossenen Kaufverträge, es sei denn, er bietet selbst ausdrücklich Artikel an.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 3 Registrierungsprozess</h2>
            <p className="mb-4">Um Transaktionen durchzuführen, müssen sich Nutzer registrieren. Die Angaben (Name, E-Mail-Adresse, Adresse) müssen wahrheitsgemäß sein. Der Nutzer ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff durch unbefugte Dritte zu schützen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 4 Abschluss von Kaufverträgen zwischen Nutzern</h2>
            <p className="mb-4">Stellt ein Nutzer einen Schuh auf die Plattform ein, gibt er ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Der Vertrag kommt zustande, wenn ein anderer Nutzer auf den "Kaufen"-Button klickt und den Bezahlprozess erfolgreich abschließt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 5 Zahlungsabwicklung</h2>
            <p className="mb-4">Die Zahlungsabwicklung erfolgt über den externen Zahlungsdienstleister Stripe. Nutzer, die Artikel verkaufen möchten, müssen sich gegebenenfalls bei Stripe registrieren oder einem Zahlungsempfang zustimmen.</p>
            <p className="mb-4">Der Verkäufer verpflichtet sich, die Ware nach erfolgreichem Zahlungseingang (welcher über die Plattform bestätigt wird) an die vom Käufer hinterlegte Adresse zu versenden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 6 Verbotene Artikel und Haftung</h2>
            <p className="mb-4">Es dürfen ausschließlich Skateschuhe bzw. entsprechende Sportartikel gehandelt werden. Der Verkauf von defekter bzw. unbrauchbarer Ware ist nicht gestattet, es sei denn, der Defekt ist ausdrücklich, fotografisch und textlich in der Artikelbeschreibung dokumentiert.</p>
            <p className="mb-4">Der Betreiber haftet nicht für die Qualität, Sicherheit oder Legalität der angebotenen Artikel. Er haftet auch nicht für die Richtigkeit der Angebote oder die Fähigkeit der Nutzer, die Transaktion tatsächlich durchzuführen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 7 Gebühren</h2>
            <p className="mb-4">Die Registrierung auf der Plattform ist kostenlos. Der Betreiber behält sich das Recht vor, für die erfolgreiche Vermittlung von Verkäufen eine Servicegebühr (z.B. als prozentualer Anteil des Kaufpreises) zu erheben. Diese Gebühr wird dem Verkäufer vor Abschluss des Einstellvorgangs transparent angezeigt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§ 8 Schlussbestimmungen</h2>
            <p className="mb-4">Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Betreibers, sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
