// src/App.tsx
import Navbar from "./components/layout/Navbar";
import AppNavigator from "./components/navigators/AppNavigator";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main className="ml-44 sm:ml-48 md:ml-56 min-h-screen">
        <AppNavigator />
      </main>
    </div>
  );
}
