// src/App.tsx

import Navbar from "./components/layout/Navbar";
import AppNavigator from "./components/navigators/AppNavigator";

export default function App() {
  return (
    <div className="min-h-screen flex bg-white text-neutral-900">
      {/* Navbar at the top */}
      <Navbar />

      {/* Routed content in the middle */}
      <main className="flex-1 mal-56 px-10 py-16">
        <AppNavigator />
      </main>
    </div>
  );
}
