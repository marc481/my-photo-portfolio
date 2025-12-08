// Interface describing a single photo item
export interface Photo {
  id: number;
  title: string;
  category: string;
  location: string;
  src: string; // Path to the image file (public/images)
}

// Array of photos used in your gallery
// Update the "src" values to match your actual filenames in public/images
export const photos: Photo[] = [
  {
    id: 1,
    title: "Castle Combe 1",
    category: "Street",
    location: "Castle Combe",
    src: "images/sitting-room-sunlight.jpg",
  },
  {
    id: 2,
    title: "Castle Combe 2",
    category: "Landscape",
    location: "Castle Combe",
    src: "/images/manor-house-hotel.jpg",
  },
];
