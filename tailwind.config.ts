import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { swiss: { red: "#ff2f45", dark: "#08050d", panel: "#15101f" } }, boxShadow: { premium: "0 28px 90px rgba(255,47,69,.18)" } } }, plugins: [] };
export default config;
