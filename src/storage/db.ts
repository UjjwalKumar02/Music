import { openDB } from "idb";

export const dbPromise = openDB("music-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("songs")) {
      db.createObjectStore("songs", {
        keyPath: "id",
      });
    }
  },
});
