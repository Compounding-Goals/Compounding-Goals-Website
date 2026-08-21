import Image from "next/image";

function DownloadBadges() {
  return (
    <div id="download" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {/* TODO: replace href="#" with real App Store / Google Play listing URLs once published */}
      <a href="#" aria-label="Download on the App Store">
        <Image src="/badges/app-store-badge.svg" alt="Download on the App Store" width={160} height={54} />
      </a>
      <a href="#" aria-label="Get it on Google Play">
        <Image src="/badges/google-play-badge.png" alt="Get it on Google Play" width={182} height={54} />
      </a>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="card"
      style={{
        width: "260px",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <span className="text-secondary" style={{ fontSize: "13px", fontWeight: 600 }}>
        Today
      </span>
      <div className="card" style={{ background: "var(--color-card-elevated)", padding: "16px" }}>
        <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Pushups</div>
        <div style={{ fontSize: "34px", fontWeight: 700, color: "var(--color-accent)" }}>24</div>
        <div style={{ fontSize: "13px", color: "var(--color-text-tertiary)" }}>started at 10, +2/wk</div>
      </div>
      <div className="card" style={{ background: "var(--color-card-elevated)", padding: "16px" }}>
        <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Write 500 words</div>
        <div style={{ fontSize: "34px", fontWeight: 700, color: "var(--color-accent)" }}>750</div>
        <div style={{ fontSize: "13px", color: "var(--color-text-tertiary)" }}>started at 500, +50/wk</div>
      </div>
      <span className="badge" style={{ alignSelf: "flex-start", color: "var(--color-streak)" }}>
        🔥 12 day streak
      </span>
    </div>
  );
}

function CompoundChart() {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="140" role="img" aria-label="Compounding growth chart">
      <polyline
        points="10,120 60,100 110,95 160,60 210,45 290,10"
        fill="none"
        stroke="url(#g)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF5500" />
          <stop offset="100%" stopColor="#FF7733" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const features = [
  { title: "Today Checklist", body: "A single daily view of every goal that's due — check it off and move on." },
  { title: "Goals Management", body: "Pause and resume goals without losing your progress. Life happens; your compounding value doesn't reset." },
  { title: "Custom Reminders", body: "Per-goal reminder times, tuned to when you actually do the work.", premium: true },
  { title: "Statistics", body: "12-week heatmap, consistency rate, and per-goal growth charts.", premium: true },
  { title: "Streaks", body: "Global and per-goal streaks that track consistency alongside your compounding value." },
];

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 420px" }}>
            <h1 className="prose hero-heading" style={{ fontSize: "56px", lineHeight: 1.05 }}>
              Small actions, compounding results.
            </h1>
            <p className="text-secondary" style={{ fontSize: "17px", maxWidth: "480px", marginTop: "16px" }}>
              Set a starting value and a fixed increment per period — pushups, words, reps, whatever
              you&apos;re building. Compounding Goals shows the live compounded value, not just a streak.
            </p>
            <div style={{ marginTop: "32px" }}>
              <DownloadBadges />
            </div>
          </div>
          <div style={{ flex: "1 1 260px", display: "flex", justifyContent: "center" }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-card)" }}>
        <div className="container">
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>How It Works</h2>
          <div className="grid grid-2" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div>
              <span className="badge">1</span>
              <h3 style={{ fontSize: "17px", marginTop: "16px" }}>Set a Starting Value + Increment</h3>
              <p className="text-secondary">e.g. 10 pushups, +2 per week.</p>
            </div>
            <div>
              <span className="badge">2</span>
              <h3 style={{ fontSize: "17px", marginTop: "16px" }}>Check in Each Period</h3>
              <p className="text-secondary">A quick tap on the Today screen.</p>
            </div>
            <div>
              <span className="badge">3</span>
              <h3 style={{ fontSize: "17px", marginTop: "16px" }}>Watch the Value Compound</h3>
              <p className="text-secondary">See the number climb, period over period.</p>
            </div>
          </div>
          <div className="card" style={{ marginTop: "32px" }}>
            <CompoundChart />
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Built for People Who Track Numbers, Not Vibes</h2>
          <div className="grid grid-4">
            {features.map((f) => (
              <div key={f.title} className="card">
                {f.premium && (
                  <span className="badge" style={{ color: "var(--color-accent)", marginBottom: "8px" }}>
                    Premium
                  </span>
                )}
                <h3 style={{ fontSize: "17px" }}>{f.title}</h3>
                <p className="text-secondary" style={{ fontSize: "15px" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-card)" }}>
        <div className="container">
          <h2 style={{ fontSize: "28px" }}>Start with Fitness</h2>
          <p className="text-secondary" style={{ maxWidth: "600px", marginTop: "8px" }}>
            Progressive overload is the clearest example of compounding: 10 pushups today, +2 a week,
            and in six months you&apos;re not &quot;keeping a streak&quot; — you&apos;re doing 60+.
          </p>
          <div className="grid grid-2" style={{ marginTop: "32px" }}>
            <div className="card">
              <h3 style={{ fontSize: "17px" }}>Pushups</h3>
              <p className="text-secondary">Start at 10, +2 per week</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "17px" }}>Bench Press</h3>
              <p className="text-secondary">Start at 95 lbs, +5 per week</p>
            </div>
          </div>
          <p className="text-tertiary" style={{ marginTop: "24px", fontSize: "15px" }}>
            Also works for productivity and creative goals — e.g. write 500 words a day, +50 per week.
          </p>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Pricing</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ fontSize: "22px" }}>Free</h3>
              <p className="text-secondary" style={{ fontSize: "34px", fontWeight: 700, color: "var(--color-text-primary)", margin: "8px 0" }}>
                $0
              </p>
              <ul style={{ paddingLeft: "20px", color: "var(--color-text-secondary)" }}>
                <li>2 active goals</li>
                <li>One global reminder</li>
                <li>Full core tracking</li>
              </ul>
            </div>
            <div className="card" style={{ borderColor: "var(--color-accent)" }}>
              <h3 style={{ fontSize: "22px" }}>Premium</h3>
              <p style={{ fontSize: "34px", fontWeight: 700, margin: "8px 0" }}>
                $19.99 <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-success)" }}>one-time</span>
              </p>
              <p className="text-tertiary" style={{ fontSize: "13px", marginTop: "-4px", marginBottom: "12px" }}>
                Lifetime access — not a subscription.
              </p>
              <ul style={{ paddingLeft: "20px", color: "var(--color-text-secondary)" }}>
                <li>Unlimited goals</li>
                <li>Custom per-goal reminders</li>
                <li>Advanced statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-card)" }}>
        <div className="container">
          <h2 style={{ fontSize: "28px" }}>What People Are Saying</h2>
          <div className="card" style={{ marginTop: "24px", textAlign: "center" }}>
            <p className="text-tertiary">
              [Placeholder: App Store reviews and testimonials will appear here after launch.]
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              borderColor: "var(--color-accent)",
              textAlign: "center",
              padding: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <h2 style={{ fontSize: "28px" }}>Start Compounding Today</h2>
            <DownloadBadges />
          </div>
        </div>
      </section>
    </>
  );
}
