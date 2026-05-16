import AppContent from "./components/AppContent";
import { LibraryProvider } from "./context/LibraryContextProvider";

export default function App() {
  return (
    <LibraryProvider>
      <AppContent />
    </LibraryProvider>
  );
}
