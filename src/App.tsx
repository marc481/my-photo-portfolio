// src/App.tsx

import Navbar from "./components/layout/Navbar";
import AppNavigator from "./components/navigators/AppNavigator";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white-950 text-neutral-900">
      {/* Navbar at the top */}
      <Navbar />

      {/* Routed content in the middle */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 pt-24 pb-16">
        <AppNavigator />
      </main>
    </div>
  );
}
