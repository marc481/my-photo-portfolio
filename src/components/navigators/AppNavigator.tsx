// src/components/navigators/AppNavigator.tsx

import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

// Minimal navigator so we know routing works
export default function AppNavigator() {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<HomeScreen />} />
      {/* Gallery route */}
      <Route path="/gallery" element={<GalleryScreen />} />
    </Routes>
  );
}
