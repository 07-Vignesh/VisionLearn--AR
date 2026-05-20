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
  title: "VisionLearn AR",
  description: "Welcome to the next dimension of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .xr-footer {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: #000;
          padding: 28px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .xr-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 300px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(192,38,211,0.6), transparent);
        }

        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
        }

        .footer-made {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.38);
          letter-spacing: 0.3px;
        }

        .footer-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          background: linear-gradient(135deg, #e879f9, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 5px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .f-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.22s ease;
          white-space: nowrap;
        }

        .f-link:hover {
          border-color: rgba(192, 38, 211, 0.45);
          color: #e879f9;
          background: rgba(192, 38, 211, 0.07);
        }

        .f-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }

        @media (max-width: 520px) {
          .footer-links { flex-wrap: wrap; justify-content: center; }
          .f-dot { display: none; }
        }
      `}</style>

      <footer className="xr-footer">
        <div className="footer-inner">

          {/* Made with line */}
          <p className="footer-made">
            Made with <span style={{ color: '#e879f9' }}>♥</span> by
            <span className="footer-name">Vikneshwaran</span>
          </p>

          {/* Links */}
          <div className="footer-links">

            {/* GitHub */}
            <a href="https://github.com/07-Vignesh" target="_blank" rel="noreferrer" className="f-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <div className="f-dot" />

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/viknesh-waran/" target="_blank" rel="noreferrer" className="f-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <div className="f-dot" />

            {/* LeetCode */}
            <a href="https://leetcode.com/u/7VigneshVicky/" target="_blank" rel="noreferrer" className="f-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              LeetCode
            </a>

          </div>
        </div>
      </footer>
    </>
  );
}