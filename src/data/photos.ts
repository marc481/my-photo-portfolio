// Interface describing a single photo item
export interface Photo {
  id: number;
  title: string;
  category: string;
  location: string;
  src: string; // Path to the image file (public/images)
}

export const photos: Photo[] = [
  {
    id: 1,
    title: "Sitting Room",
    category: "Street",
    location: "Castle Combe",
    src: "images/sitting-room-sunlight.JPG",
  },
  {
    id: 2,
    title: "Manor House Hotel",
    category: "Landscape",
    location: "Castle Combe",
    src: "/images/manor-house-hotel.JPG",
  },
  {
    id: 3,
    title: "Garden House",
    category: "Landscape",
    location: "London",
    src: "/images/garden-house.jpg",
  },
];
