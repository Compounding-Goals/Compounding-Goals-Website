import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compounding Goals: Small actions. Compounding results.",
  description:
    "Compounding Goals turns small, consistent actions into visible, quantified growth: start at a value, add a fixed increment every period, and watch it compound.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: "1px solid var(--color-border)" }}>
          <nav
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px var(--space-4)",
            }}
          >
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
            >
              <Image src="/logo-mark.png" alt="Compounding Goals" width={32} height={32} />
              <span style={{ fontWeight: 700, fontSize: "17px" }}>Compounding Goals</span>
            </Link>
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <Link href="/#features" className="text-secondary" style={{ textDecoration: "none", fontWeight: 600 }}>
                Features
              </Link>
              <Link href="/#pricing" className="text-secondary" style={{ textDecoration: "none", fontWeight: 600 }}>
                Pricing
              </Link>
              <Link href="/support" className="text-secondary" style={{ textDecoration: "none", fontWeight: 600 }}>
                Support
              </Link>
              <Link href="/#download" className="btn btn-primary">
                Download
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/logo-mark.png" alt="Compounding Goals" width={24} height={24} />
              <span className="text-secondary" style={{ fontSize: "13px" }}>
                © {new Date().getFullYear()} Compounding Goals. All rights reserved.
              </span>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/privacy" className="text-secondary" style={{ textDecoration: "none", fontSize: "13px" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary" style={{ textDecoration: "none", fontSize: "13px" }}>
                Terms of Service
              </Link>
              <Link href="/support" className="text-secondary" style={{ textDecoration: "none", fontSize: "13px" }}>
                Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
