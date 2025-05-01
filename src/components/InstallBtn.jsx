import { useEffect, useState } from "react";

const InstallBtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Stop the browser from showing the default prompt
      setDeferredPrompt(e); // Save the event for later
      setVisible(true); // Show your custom button
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // ✅ This triggers the banner
    const result = await deferredPrompt.userChoice;

    console.log("Install result:", result.outcome); // accepted or dismissed
    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleInstallClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#2563eb",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      📲 Install App
    </button>
  );
};

export default InstallBtn;
