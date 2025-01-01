function TallyTemplate() {
  return (
    <div>
      <div style={{ height: "2rem" }}></div>
      {/* Fixed Footer */}
      <div
        style={{
          background: "linear-gradient(135deg, #f372b5, #8a8bf6)",
          height: "2rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 30000,
          gap: "0.5rem",
          padding: "0 1rem",
        }}
      >
        {/* Logo */}
        <a href="https://tally.ge/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.tally.ge/images/logos/tally-logo-white.png"
            alt="tally logo"
            style={{
              height: "1.5rem",
            }}
          />
        </a>
        
        {/* Text */}
        <h1
          style={{
            color: "#f9f9f9",
            fontSize: "14px",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          ამ ვებსაიტის შესაკვეთად ეწვიეთ{" "}
          <a
            href="https://tally.ge/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "underline",
            }}
          >
            Tally.ge-ს
          </a>
        </h1>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="fixed"] h1 {
              font-size: 12px !important;
            }
            div[style*="fixed"] img {
              height: 1.2rem !important;
            }
          }

          @media (max-width: 480px) {
            div[style*="fixed"] {
              gap: 0.25rem !important;
            }
            div[style*="fixed"] h1 {
              font-size: 11px !important;
            }
            div[style*="fixed"] img {
              height: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default TallyTemplate;
