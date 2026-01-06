// src/App.tsx

import Navbar from "./components/layout/Navbar";
import AppNavigator from "./components/navigators/AppNavigator";

export default function App() {
  return (
    <div className="min-h-screen flex bg-white text-neutral-900">
      <Navbar />

      <main className="pl-56">
        <AppNavigator />
      </main>
    </div>
  );
}
