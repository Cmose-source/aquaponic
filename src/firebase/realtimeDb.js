import { getDatabase } from 'firebase/database'
import { getFirebaseApp } from './config.js'

let db = null

/** Lazy init — halaman tidak crash jika .env belum terbaca (restart npm run dev). */
export function getDb() {
  if (!import.meta.env.VITE_FIREBASE_DATABASE_URL) {
    return null
  }
  if (!db) {
    db = getDatabase(getFirebaseApp())
  }
  return db
}
