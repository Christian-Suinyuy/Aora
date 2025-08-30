// lib/sdk.js
import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: "http://localhost:9000", // or your Medusa backend URL
  debug: process.env.NODE_ENV === "development",
  // publishableKey: "your-publishable-key", // if needed
})