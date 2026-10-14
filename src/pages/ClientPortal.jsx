
import { useState } from "react";
import "./ClientPortal.css";

export default function ClientPortal() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!pin.trim()) {
      setError("Please enter your client PIN.");
      return;
    }

    setError("The download service is not connected yet. Please try again later.");
  }

  return (
    <main className="client-portal">
      <nav className="portal-nav">
        <a className="portal-brand" href="/">
          ZELVIX <span>MEDIA.</span>
        </a>
        <a className="portal-home" href="/">
          Back to website ↗
        </a>
      </nav>

      <section className="portal-content">
        <div className="portal-label">
          <span className="portal-dot" />
          CLIENT DELIVERY PORTAL
        </div>

        <h1>
          Your work.
          <br />
          <span>Your download.</span>
        </h1>

        <p className="portal-description">
          Your edited videos, delivered by Zelvix Media.
          Enter the private PIN we shared with you to access your files.
        </p>

        <form className="portal-form" onSubmit={handleSubmit}>
          <label htmlFor="client-pin">CLIENT ACCESS PIN</label>

          <input
            id="client-pin"
            type="password"
            value={pin}
            onChange={(event) => {
              setPin(event.target.value);
              setError("");
            }}
            placeholder="Enter your PIN"
            autoComplete="off"
            required
          />

          <button type="submit">Access my videos <span>↗</span></button>

          {error && <p className="portal-error" role="alert">{error}</p>}
        </form>

        <p className="portal-help">
          Don't have your PIN? Contact Zelvix Media to get access.
        </p>
      </section>

      <footer className="portal-footer">
        <span>© {new Date().getFullYear()} ZELVIX MEDIA</span>
        <span>CREATE. CAPTIVATE. GROW.</span>
      </footer>
    </main>
  );
}
