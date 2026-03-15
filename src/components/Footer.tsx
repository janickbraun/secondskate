import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            second<span className="text-primary">skate</span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-primary transition-colors">AGB</Link>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/secondskate.de" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-zinc-800 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} secondskate. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
