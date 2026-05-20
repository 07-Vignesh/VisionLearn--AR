"use client"

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedText from '../components/AnimatedText';

// ─── EMAILJS CONFIG ────────────────────────────────────────────────────────────
// Replace these three values with your real credentials from emailjs.com
const EMAILJS_SERVICE_ID  = "service_5ppdsp9";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_9xowq6g";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "DAKh3X85S7WRVC8BE";   // e.g. "aBcDeFgHiJkLmNoPq"
// ──────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          to_name:    "XR Vision Team",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const btnLabel =
    status === "sending" ? "Sending…"
    : status === "sent"  ? "✓ Message Sent!"
    : "Send Message →";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .c-wrap {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .c-wrap::before {
          content: ''; position: absolute; top: -200px; right: -200px;
          width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle, rgba(192,38,211,.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .c-wrap::after {
          content: ''; position: absolute; bottom: -150px; left: -150px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(173,216,230,.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .hfont { font-family: 'Syne', sans-serif; }

        .s-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px;
          background: rgba(192,38,211,.12); border: 1px solid rgba(192,38,211,.28);
          border-radius: 999px; font-size: 12px; font-weight: 600;
          color: #e879f9; letter-spacing: 1px; text-transform: uppercase;
          margin-bottom: 18px;
        }
        .divider {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #c026d3, transparent);
          border-radius: 2px; margin: 12px 0 24px;
        }

        /* card */
        .c-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px; padding: 36px;
          backdrop-filter: blur(12px);
        }
        @media (max-width: 768px) { .c-card { padding: 22px 18px; } }

        /* inputs */
        .inp {
          width: 100%; padding: 14px 18px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 15px;
          transition: all .25s; outline: none; box-sizing: border-box;
        }
        .inp::placeholder { color: rgba(255,255,255,.25); }
        .inp:focus {
          border-color: rgba(192,38,211,.65);
          background: rgba(192,38,211,.05);
          box-shadow: 0 0 0 3px rgba(192,38,211,.12);
        }
        .lbl {
          display: block; margin-bottom: 8px; font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,.45); letter-spacing: .6px; text-transform: uppercase;
        }

        /* button */
        .s-btn {
          width: 100%; padding: 15px 32px;
          background: linear-gradient(135deg, #c026d3, #9333ea);
          border: none; border-radius: 12px; color: #fff;
          font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700;
          letter-spacing: .5px; cursor: pointer;
          transition: opacity .25s, transform .15s;
        }
        .s-btn:hover:not(:disabled) { opacity: .88; transform: translateY(-1px); }
        .s-btn:active               { transform: translateY(0); }
        .s-btn:disabled             { opacity: .6; cursor: not-allowed; }
        .s-btn.sent  { background: linear-gradient(135deg, #059669, #10b981); }
        .s-btn.error { background: linear-gradient(135deg, #dc2626, #b91c1c); }

        /* error */
        .err-msg {
          font-size: 13px; color: #f87171;
          padding: 10px 14px;
          background: rgba(220,38,38,.08);
          border: 1px solid rgba(220,38,38,.2);
          border-radius: 10px;
        }

        /* info pills */
        .i-pill {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 14px; transition: border-color .2s;
        }
        .i-pill:hover { border-color: rgba(192,38,211,.3); }
        .i-icon {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(192,38,211,.2), rgba(147,51,234,.2));
          display: flex; align-items: center; justify-content: center;
        }

        /* map */
        .map-wrap {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.07);
          position: relative; min-height: 380px; flex: 1;
        }
        .map-wrap::after {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          box-shadow: inset 0 0 0 1px rgba(192,38,211,.15); pointer-events: none;
        }

        /* social */
        .soc-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px; color: rgba(255,255,255,.55);
          text-decoration: none; font-size: 14px; font-weight: 500;
          transition: all .25s;
        }
        .soc-btn:hover {
          border-color: rgba(192,38,211,.5);
          color: #e879f9; background: rgba(192,38,211,.07);
        }
        @media (max-width: 640px) { .soc-row { flex-wrap: wrap; } }
      `}</style>

      <section id="contact" className="c-wrap min-h-screen text-white flex items-center justify-center px-4 sm:px-6 py-20 mt-16">
        <AnimatedText>
          <div className="w-full max-w-6xl mx-auto">

            {/* ── Header ── */}
            <div className="mb-12">
              <div className="s-tag"><span>✦</span> Contact Us</div>
              <h2 className="hfont text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Get in <span className="text-fuchsia-500">Touch</span>
              </h2>
              <div className="divider" />
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                Have a question, proposal, or just want to say hello? Fill out the form or reach us through the details below.
              </p>
            </div>

            {/* ── Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* ── LEFT ── */}
              <div className="flex flex-col gap-6">

                {/* Info pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <div className="i-pill">
                    <div className="i-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e879f9" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize:'11px', color:'rgba(255,255,255,.38)', marginBottom:'2px', textTransform:'uppercase', letterSpacing:'.5px' }}>Phone</p>
                      <p style={{ fontSize:'14px', color:'#fff', fontWeight:500 }}>+91 8925615178</p>
                    </div>
                  </div>

                  <div className="i-pill">
                    <div className="i-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e879f9" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize:'11px', color:'rgba(255,255,255,.38)', marginBottom:'2px', textTransform:'uppercase', letterSpacing:'.5px' }}>Location</p>
                      <p style={{ fontSize:'14px', color:'#fff', fontWeight:500 }}>Karikudi, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                {/* ── Form card ── */}
                <div className="c-card flex-1">
                  <h3 className="hfont text-xl font-bold text-white mb-6">Send a Message</h3>

                  <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>

                    <div>
                      <label className="lbl">Your Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        type="text" placeholder="John Doe" className="inp"
                      />
                    </div>

                    <div>
                      <label className="lbl">Your Email</label>
                      <input
                        name="email" value={form.email} onChange={handleChange}
                        type="email" placeholder="john@example.com" className="inp"
                      />
                    </div>

                    <div>
                      <label className="lbl">Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        rows={5} placeholder="Tell us what's on your mind…"
                        className="inp" style={{ resize:'none' }}
                      />
                    </div>

                    {status === "error" && <p className="err-msg">⚠ {errMsg}</p>}

                    <button
                      className={`s-btn ${status === "sent" ? "sent" : status === "error" ? "error" : ""}`}
                      onClick={handleSubmit}
                      disabled={status === "sending"}
                    >
                      {btnLabel}
                    </button>
                  </div>
                </div>

                {/* Social links */}
               
              </div>

              {/* ── RIGHT ── */}
              <div className="flex flex-col gap-6">

                {/* Map */}
                <div className="map-wrap">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.510230458267!2d80.24327357504667!3d13.063891012598582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664120cd9971%3A0xc8609e16c2d13392!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719148210192!5m2!1sen!2sin"
                    width="100%" height="100%"
                    style={{ border:0, display:'block', minHeight:'380px' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Business Hours */}
                <div className="c-card">
                  <h4 className="hfont text-base font-bold text-white mb-4" style={{ letterSpacing:'.5px' }}>Business Hours</h4>
                  <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                    {[
                      { day:'Monday – Friday', hours:'9:00 AM – 6:00 PM' },
                      { day:'Saturday',        hours:'10:00 AM – 3:00 PM' },
                      { day:'Sunday',          hours:'Closed' },
                    ].map(({ day, hours }) => (
                      <div key={day} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:'10px', borderBottom:'1px solid rgba(255,255,255,.05)' }}>
                        <span style={{ fontSize:'14px', color:'rgba(255,255,255,.5)' }}>{day}</span>
                        <span style={{ fontSize:'14px', fontWeight:500, color: hours === 'Closed' ? 'rgba(192,38,211,.8)' : '#fff' }}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </AnimatedText>
      </section>
    </>
  );
}