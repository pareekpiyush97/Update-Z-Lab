import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/ai-consult", async (req, res) => {
    const { carModel, paintColor, drivingEnv, desiredStyle } = req.body || {};

    if (!carModel) {
      return res.status(400).json({ error: "Car model is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `You are the Lead Technical Director at STUDIO.FORM / AERO.STUDIO, a high-end bespoke automotive protection and motorsport engineering lab in Indirapuram.
Generate a high-tech bespoke recommendation build sheet for a client vehicle:
- Vehicle: ${carModel}
- Original Paint Color: ${paintColor || 'Factory Spec'}
- Primary Driving Environment: ${drivingEnv || 'city_and_highway'}
- Preferred Aesthetic: ${desiredStyle || 'stealth_satin'}

Provide a structured, ultra-sleek build recommendation formatted as:
1. Recommended Protection Film (e.g. 210 Micron Satin Stealth PPF, Coloured TPU PPF, or Clear High Impact Track PPF)
2. Aerodynamic & Bodykit Enhancements (if applicable)
3. Surface Matrix Coating & Maintenance Protocol
4. Estimated Installation Time & Warranty Grade
Keep the tone industrial, precise, luxury, and high-tech. Limit to 200 words.`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });

        if (response.text) {
          return res.json({ recommendation: response.text });
        }
      } catch (err: any) {
        console.error("Gemini API server call error/quota exception:", err?.message || err);
        // Fallback gracefully on quota or key error
      }
    }

    // High quality deterministic fallback when key is not set or quota is exceeded
    const fallback = `/// STUDIO.FORM TECHNICAL RECOMMENDATION ///
VEHICLE: ${String(carModel).toUpperCase()} (${paintColor ? String(paintColor).toUpperCase() : 'FACTORY SPEC'})

RECOMMENDED BUILD:
1. PRIMARY FILM: 210 Micron TPU Satin Stealth PPF
   - Full edge tuck & zero blade contact computerized template cut.
   - Converts factory gloss to a velvet non-reflective satin defense shield.
2. SURFACE MATRIX: 9H Quartz Hydrophobic Ceramic Topcoat
   - Applied over film face + forged wheel faces + brake calipers.
3. AERODYNAMICS: Autoclave Carbon Fiber Splitter & Vented Hood Accents
4. ESTIMATED TIMELINE: 5 Business Days in ISO-7 Cleanroom
5. WARRANTY: 10-Year Studio Certificate with Serialized Hydrophobic Matrix Care.`;

    return res.json({ recommendation: fallback });
  });

  // Vite middleware for dev / static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
