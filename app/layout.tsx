import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XR Vision — Next-Gen Immersive Tech",
  description:
    "Dive into cutting-edge XR technology. Learn AR & VR, real-time 3D modeling, WebXR, Three.js, and React Three Fiber.",
  keywords: ["XR", "AR", "VR", "WebXR", "Three.js", "React Three Fiber", "Immersive", "3D"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden", scrollBehavior: "smooth" }}>
      <head>
        {/* Google Fonts preconnect for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: "hidden", background: "#000" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

/* ─────────────────────────────────────────
   Footer
───────────────────────────────────────── */
function Footer() {
  return (
    <>
      <style>{`
        .xr-footer {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: #000;
          padding: 32px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* fuchsia glow line at top */
        .xr-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 320px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(192,38,211,0.65), transparent);
        }

        /* subtle radial glow behind footer */
        .xr-footer::after {
          content: '';
          position: absolute;
          bottom: -60px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 200px;
          background: radial-gradient(ellipse, rgba(192,38,211,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        /* "Made with ♥ by" line */
        .footer-made {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.3px;
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-heart { color: #e879f9; }
        .footer-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          background: linear-gradient(135deg, #f0abfc, #c026d3 50%, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* link row */
        .footer-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .f-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.42);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: border-color .22s, color .22s, background .22s;
          white-space: nowrap;
        }
        .f-link:hover {
          border-color: rgba(192, 38, 211, 0.5);
          color: #e879f9;
          background: rgba(192, 38, 211, 0.07);
        }

        .f-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          flex-shrink: 0;
        }

        /* copyright line */
        .footer-copy {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.18);
          letter-spacing: 0.4px;
        }

        @media (max-width: 480px) {
          .f-dot { display: none; }
          .f-link { font-size: 12px; padding: 7px 13px; }
        }
      `}</style>

      <footer className="xr-footer">
        <div className="footer-inner">

          {/* Made with line */}
          <p className="footer-made">
            Made with <span className="footer-heart">♥</span> by
            <span className="footer-name">Vikneshwaran</span>
          </p>

          {/* Social / profile links */}
          <div className="footer-links">

            {/* GitHub */}
            <a
              href="https://github.com/07-Vignesh"
              target="_blank"
              rel="noreferrer"
              className="f-link"
              aria-label="GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <div className="f-dot" aria-hidden="true" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/viknesh-waran/"
              target="_blank"
              rel="noreferrer"
              className="f-link"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <div className="f-dot" aria-hidden="true" />

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/7VigneshVicky/"
              target="_blank"
              rel="noreferrer"
              className="f-link"
              aria-label="LeetCode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              LeetCode
            </a>

          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {new Date().getFullYear()} XR Vision. All rights reserved.
          </p>

        </div>
      </footer>
    </>
  );
}