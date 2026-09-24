export const metadata = { title: "Support: Compounding Goals" };

const faqs = [
  {
    q: "How Do I Delete a Goal or Reset My Data?",
    a: "Delete individual goals from within the app's goal management screen. To reset everything, delete and reinstall the app. All data is stored locally, so a fresh install starts clean.",
  },
  {
    q: "Will I Lose My Data if I Reinstall or Switch Phones?",
    a: "Yes. All data lives only on your device with no cloud backup, so reinstalling the app or switching phones will lose your existing goals and progress.",
  },
  {
    q: "How Do I Restore My Premium Purchase?",
    a: "Once real billing is live, premium purchases will restore automatically through your Apple or Google account on any device signed into that store account.",
  },
];

export default function Support() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Support</h1>
        <p>
          Need help or have feedback? Email us at{" "}
          <a href="mailto:contactcompoundinggoals@gmail.com">contactcompoundinggoals@gmail.com</a> and we&apos;ll
          get back to you.
        </p>

        <h2>FAQ</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "17px", marginBottom: "4px" }}>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
