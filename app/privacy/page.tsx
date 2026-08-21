export const metadata = { title: "Privacy Policy — Compounding Goals" };

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Privacy Policy</h1>
        <p className="text-tertiary">Last updated: August 20, 2026</p>

        <p>
          Compounding Goals is built to keep your data on your phone. There&apos;s no account system
          and no backend server — so we (the developer) never receive, see, or store your goal data.
          Here&apos;s exactly what that means.
        </p>

        <h2>What data exists, and where it lives</h2>
        <p>
          Your goals, check-ins, streaks, and reminder times are stored only in local on-device
          storage (the equivalent of a browser&apos;s <code>localStorage</code>). This data never
          leaves your device.
        </p>
        <p>
          Because there&apos;s no cloud copy, reinstalling the app or switching phones will erase
          your local data — there&apos;s nothing on our end to restore it from.
        </p>

        <h2>No tracking, no ads, no selling data</h2>
        <p>
          Compounding Goals has no analytics SDKs, no ad networks, and no trackers. Nothing about
          your usage is collected, and nothing is ever sold to third parties.
        </p>

        <h2>Reminders</h2>
        <p>
          Reminders are scheduled through your phone&apos;s own operating system notification
          service. This happens entirely on-device — no data is sent to or through any external
          service to make a reminder fire.
        </p>

        <h2>Premium purchases</h2>
        <p>
          Today, the Premium purchase flow is a local placeholder — tapping &quot;Purchase&quot;
          shows a confirmation and flips a flag stored on your device. No real transaction occurs
          and no payment information is collected. Once real billing is turned on, purchases will be
          processed entirely by Apple&apos;s App Store or Google Play — Compounding Goals never sees
          or stores your payment details, only a purchase-verification confirmation from the store.
        </p>

        <h2>Deleting your data</h2>
        <p>Deleting the app deletes all of its local data. There is no account to close and nothing stored remotely to remove.</p>

        <h2>Children&apos;s privacy</h2>
        <p>Compounding Goals is not directed at children under 13 and does not knowingly collect data from anyone, of any age.</p>

        <h2>Changes to this policy</h2>
        <p>If this policy changes, we&apos;ll update the date above. Continued use of the app after a change means you accept the update.</p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href="mailto:CONFIRM-EMAIL@example.com">[CONFIRM: support email address]</a>.
        </p>
      </div>
    </section>
  );
}
