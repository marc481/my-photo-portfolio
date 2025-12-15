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
  {
    id: 4,
    title: "Shibuya Crossing",
    category: "Landscape",
    location: "Tokyo",
    src: "/images/Shibuya-Crossing.jpg",
  },
  {
    id: 5,
    title: "Mt Fuji Village",
    category: "Landscape",
    location: "Japan",
    src: "/images/mt-fuj-village.jpg",
  },

  {
    id: 6,
    title: "Cat in the Cafe",
    category: "Landscape",
    location: "Japan",
    src: "/images/cafe-cat.jpg",
  },

  {
    id: 7,
    title: "Cat in the Cafe",
    category: "Landscape",
    location: "Japan",
    src: "/images/street-sky.jpg",
  },

  {
    id: 8,
    title: "Clock in the Park",
    category: "Landscape",
    location: "Japan",
    src: "/images/clock.jpg",
  },

  {
    id: 9,
    title: "Indian Chrollo",
    category: "Landscape",
    location: "Japan",
    src: "/images/chrollo.jpg",
  },

  {
    id: 10,
    title: "Old man at the beach",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/the-end.JPG",
  },

  {
    id: 11,
    title: "Bikes",
    category: "Landscape",
    location: "Japan",
    src: "/images/bikes.jpg",
  },

  {
    id: 12,
    title: "Free Man",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/free-man.JPG",
  },
];
