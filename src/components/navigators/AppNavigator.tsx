// src/components/navigators/AppNavigator.tsx

import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import AboutScreen from "../screens/AboutScreen";

// Minimal navigator so we know routing works
export default function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route path="/gallery" element={<GalleryScreen />} />

      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
}
