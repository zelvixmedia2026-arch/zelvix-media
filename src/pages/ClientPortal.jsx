
import { useState } from "react";
import "./ClientPortal.css";
import clients from "../data/clients";

export default function ClientPortal() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [clientData, setClientData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const enteredPin = pin.trim();

    if (!enteredPin) {
      setError("Please enter your client PIN.");
      setClientData(null);
      return;
    }

    const client = clients[enteredPin];

    if (client) {
      setClientData(client);
      setError("");
    } else {
      setClientData(null);
      setError("Invalid PIN. Please check and try again.");
    }
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
              setClientData(null);
            }}
            placeholder="Enter your PIN"
            autoComplete="off"
            required
          />

          <button type="submit">
            Access my videos <span>↗</span>
          </button>

          {error && (
            <p className="portal-error" role="alert">
              {error}
            </p>
          )}
        </form>

        {clientData && (
          <section className="client-results">
            <h2>Welcome, {clientData.clientName}!</h2>
            <p>Your videos are ready.</p>

            {clientData.videos.map((video) => (
              <article className="client-video-card" key={video.videoNumber}>
                <p>VIDEO NO. {video.videoNumber}</p>
                <h3>{video.title}</h3>
                <p>{video.description}</p>

                {video.videoUrl.startsWith("https://") &&
                !video.videoUrl.includes("PASTE_BLOB_VIDEO_URL_HERE") ? (
                  <>
                    <video
                      controls
                      preload="metadata"
                      width="100%"
                      src={video.videoUrl}
                    />
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open / Download Video ↗
                    </a>
                  </>
                ) : (
                  <p>Video upload is pending. Please check back soon.</p>
                )}
              </article>
            ))}
          </section>
        )}

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
