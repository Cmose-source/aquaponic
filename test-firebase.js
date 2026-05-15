import { ref, set, get, child } from "firebase/database";
import { getDb } from "./src/firebase/realtimeDb.js";

const db = getDb();
if (!db) {
  console.error("❌ VITE_FIREBASE_DATABASE_URL belum diset. Buat file .env di root proyek.");
  process.exit(1);
}

const dbRef = ref(db);
console.log("Menguji koneksi ke Firebase Realtime Database...");

set(ref(db, "test_koneksi"), {
  pesan: "Halo Isa! Koneksi Firebase dari VS Code berhasil.",
  waktu: new Date().toLocaleString()
}).then(() => {
  console.log("✅ [WRITE] Data test ditulis ke path /test_koneksi di database Anda.");
  return get(child(dbRef, "test_koneksi"));
}).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("✅ [READ] Data berhasil dibaca kembali: ", snapshot.val());
  } else {
    console.log("❌ [READ] Data tidak ditemukan!");
  }
  process.exit(0);
}).catch((error) => {
  console.error("❌ [ERROR] Firebase mengalami kendala:", error);
  process.exit(1);
});
