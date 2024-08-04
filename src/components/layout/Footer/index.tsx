import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-muted px-10 md:px-28 py-8 md:py-12">
      <div className="max-w-7xl flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="grid gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">&copy; 2024 MyBooks</div>
          <div className="text-sm text-muted-foreground">Desenvolvido por Pedro Lima.</div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold text-muted-foreground">Siga-me</h3>
          <nav className="flex gap-4 justify-center">
            <Link href="https://www.linkedin.com/in/pedroalima6/" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/pedroalima" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FaGithubSquare className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}