import React, { useEffect, useState } from "react";
import { Moon, Sun, Sunrise, Sunset } from "lucide-react";

const FONT_LIK_ID = "digital-clock-fonts";

// Loads the two display fonts once, without needing a build-time config
function useClockFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LIK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LIK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500&family=Inter:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

// Ties the greeting + icon to the actual hour, so it's grounded in the
// clock's own data rather than being decorative chrome.
function getPeriod(hour) {
  if (hour < 5) return { label: "Still night", Icon: Moon };
  if (hour < 12) return { label: "Good morning", Icon: Sunrise };
  if (hour < 17) return { label: "Good afternoon", Icon: Sun };
  if (hour < 21) return { label: "Good evening", Icon: Sunset };
  return { label: "Winding down", Icon: Moon };
}

const pad = (n) => String(n).padStart(2, "0");

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useClockFonts();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id); // cleanup avoids stacking intervals
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());
  const dateLabel = time.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const { label, Icon } = getPeriod(time.getHours());

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-6"
      style={{
        backgroundColor: "#31241f",
        backgroundImage:
          "radial-gradient(circle at 50% 42%, #3c2c25 0%, #31241f 55%, #22190f 100%)",
      }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Greeting, tied to the real time-of-day */}
        <div
          className="mb-6 flex items-center gap-2"
          style={{ color: "#c79116", fontFamily: "'Inter', sans-serif" }}
        >
          <Icon size={16} strokeWidth={1.75} />
          <span className="text-sm">{label}</span>
        </div>

        {/* Time */}
        <div
          className="flex items-baseline tabular-nums"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <span
            className="text-7xl sm:text-8xl font-medium"
            style={{ color: "#e9b8c9" }}
          >
            {hours}
          </span>
          <span
            className="mx-1 text-6xl sm:text-7xl font-light animate-pulse"
            style={{ color: "#e9b8c9", opacity: 0.5 }}
          >
            :
          </span>
          <span
            className="text-7xl sm:text-8xl font-medium"
            style={{ color: "#e9b8c9" }}
          >
            {minutes}
          </span>
          <span
            className="mx-1 text-6xl sm:text-7xl font-light animate-pulse"
            style={{ color: "#e9b8c9", opacity: 0.5 }}
          >
            :
          </span>
          <span
            className="text-4xl sm:text-5xl font-light"
            style={{ color: "#e9b8c9", opacity: 0.65 }}
          >
            {seconds}
          </span>
        </div>

        {/* Divider */}
        <div
          className="my-6 h-px w-16"
          style={{ backgroundColor: "#e9b8c9", opacity: 0.35 }}
        />
        <p
          className="text-base"
          style={{ color: "#a68f86", fontFamily: "'Inter', sans-serif" }}
        >
          {dateLabel}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;
