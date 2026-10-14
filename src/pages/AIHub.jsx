import { useState } from "react";
import "./AIHuB.css";

function AIHub() {
  const [reelLink, setReelLink] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeReel = async () => {
    if (!reelLink.trim()) {
      setError("Paste an Instagram Reel link first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      
const response = await fetch("/api/analyze", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: reelLink,
  }),
});


      const data = await response.json();

      if (!data.success) {
        setError(data.error);
        return;
      }

      setResult(data.data);

    } catch (err) {
      setError(
        "Unable to connect to the Zelvix AI Hub server."
      );
    } finally {
      setLoading(false);
    }
  };

  const copyText = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="aihub">

      {/* NAVBAR */}

      <header className="aihub-nav">

        <a href="/" className="aihub-logo">
          ZELVIX MEDIA<span>.</span>
        </a>

        <div className="aihub-nav-label">
          AI HUB
        </div>

        <a href="/" className="aihub-back">
          ← Main Site
        </a>

      </header>


      {/* HERO */}

      <main>

        <section className="aihub-hero">

          <div className="aihub-eyebrow">
            <span></span>
            ZELVIX AI HUB
          </div>

          <h1>
            See something.
            <br />
            <em>Recreate it.</em>
          </h1>

          <p>
            Paste a Zelvix Reel link and discover the
            prompts, scenes, motion and editing ideas behind it.
          </p>


          {/* SEARCH */}

          <div className="aihub-search-wrapper">

            <div className="aihub-search">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Paste Instagram Reel link here..."
                value={reelLink}
                onChange={(e) => setReelLink(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    analyzeReel();
                  }
                }}
              />

              <button
                onClick={analyzeReel}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Reel"}
                {!loading && <span>↗</span>}
              </button>

            </div>

            <div className="search-options">
              <span>Instagram Reel</span>
              <span>•</span>
              <span>Paste Link</span>
            </div>

          </div>


          {/* ERROR */}

          {error && (
            <div className="aihub-error">
              {error}
            </div>
          )}

        </section>


        {/* RESULTS */}

        {result && (

          <section className="aihub-results">

            <div className="result-heading">

              <div>

                <span className="result-label">
                  ANALYSIS
                </span>

                <h2>
                  {result.title}
                </h2>

              </div>

              <span className="result-status">
                READY
              </span>

            </div>


            {/* CONCEPT */}

            <div className="result-card">

              <div className="card-top">
                <span>01</span>
                <span>CONCEPT</span>
              </div>

              <h3>
                {result.concept}
              </h3>

            </div>


            {/* IMAGE PROMPT */}

            <div className="result-card">

              <div className="card-top">
                <span>02</span>
                <span>AI IMAGE PROMPT</span>
              </div>

              <div className="prompt-box">
                {result.image_prompt}
              </div>

              <button
                className="copy-button"
                onClick={() =>
                  copyText(result.image_prompt)
                }
              >
                COPY PROMPT ↗
              </button>

            </div>


            {/* VIDEO PROMPT */}

            <div className="result-card">

              <div className="card-top">
                <span>03</span>
                <span>AI VIDEO PROMPT</span>
              </div>

              <div className="prompt-box">
                {result.video_prompt}
              </div>

              <button
                className="copy-button"
                onClick={() =>
                  copyText(result.video_prompt)
                }
              >
                COPY PROMPT ↗
              </button>

            </div>


            {/* MOTION */}

            <div className="result-card">

              <div className="card-top">
                <span>04</span>
                <span>MOTION GUIDE</span>
              </div>

              <div className="guide-list">

                {result.motion_guide.map(
                  (motion, index) => (

                    <div key={index}>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>
                        {motion}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* SCENE GUIDE */}

            <div className="result-card">

              <div className="card-top">
                <span>05</span>
                <span>SCENE-BY-SCENE GUIDE</span>
              </div>

              <div className="scene-grid">

                {result.scene_guide.map(
                  (scene) => (

                    <div
                      className="scene"
                      key={scene.scene}
                    >

                      <span>
                        SCENE {scene.scene}
                      </span>

                      <h3>
                        {scene.title}
                      </h3>

                      <p>
                        {scene.description}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* EDITING */}

            <div className="result-card">

              <div className="card-top">
                <span>06</span>
                <span>EDITING GUIDE</span>
              </div>

              <div className="editing-grid">

                <div>
                  <span>TRANSITIONS</span>
                  <strong>
                    {result.editing_guide.transitions}
                  </strong>
                </div>

                <div>
                  <span>TEXT</span>
                  <strong>
                    {result.editing_guide.text}
                  </strong>
                </div>

                <div>
                  <span>SFX</span>
                  <strong>
                    {result.editing_guide.sfx}
                  </strong>
                </div>

                <div>
                  <span>COLOR</span>
                  <strong>
                    {result.editing_guide.color}
                  </strong>
                </div>

              </div>

            </div>


            {/* COPY ALL */}

            <button
              className="copy-all"
              onClick={() =>
                copyText(
                  `
${result.title}

CONCEPT
${result.concept}

IMAGE PROMPT
${result.image_prompt}

VIDEO PROMPT
${result.video_prompt}

MOTION GUIDE
${result.motion_guide.join("\n")}

SCENE GUIDE
${result.scene_guide
  .map(
    (scene) =>
      `${scene.scene} - ${scene.title}: ${scene.description}`
  )
  .join("\n")}

EDITING GUIDE
Transitions: ${result.editing_guide.transitions}
Text: ${result.editing_guide.text}
SFX: ${result.editing_guide.sfx}
Color: ${result.editing_guide.color}
`
                )
              }
            >
              COPY FULL GUIDE ↗
            </button>

          </section>

        )}

      </main>


      {/* FOOTER */}

      <footer className="aihub-footer">

        <span>
          © 2026 ZELVIX MEDIA
        </span>

        <span>
          CREATE • CAPTIVATE • GROW
        </span>

        <span>
          AI HUB
        </span>

      </footer>

    </div>
  );
}

export default AIHub;