/// <reference types="vite/client" />
import Medusa from "@medusajs/js-sdk"


let MEDUSA_BACKEND_URL = "http://localhost:9000"
if (import.meta.env.VITE_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = import.meta.env.VITE_MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: import.meta.env.DEV,
  publishableKey: import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY = 'pk_823ac7a7bddffea59945a5f89810d7bcc236fcefef8c92d5385d135b4c1e9c75',
})