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
    title: "Shibuya Crossing",
    category: "Landscape",
    location: "Tokyo",
    src: "/images/Shibuya-Crossing.jpg",
  },
  {
    id: 4,
    title: "Mt Fuji Village",
    category: "Landscape",
    location: "Japan",
    src: "/images/mt-fuj-village.jpg",
  },

  {
    id: 5,
    title: "Cat in the Cafe",
    category: "Landscape",
    location: "Japan",
    src: "/images/cafe-cat.jpg",
  },

  {
    id: 6,
    title: "Cat in the Cafe",
    category: "Landscape",
    location: "Japan",
    src: "/images/street-sky.jpg",
  },

  {
    id: 7,
    title: "Clock in the Park",
    category: "Landscape",
    location: "Japan",
    src: "/images/clock.jpg",
  },

  {
    id: 8,
    title: "Indian Chrollo",
    category: "Landscape",
    location: "Japan",
    src: "/images/chrollo.jpg",
  },

  {
    id: 9,
    title: "Old man at the beach",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/the-end.JPG",
  },

  {
    id: 10,
    title: "Bikes",
    category: "Landscape",
    location: "Japan",
    src: "/images/bikes.jpg",
  },

  {
    id: 11,
    title: "Free Man",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/free-man.JPG",
  },

  {
    id: 12,
    title: "Cat Seven Sisters",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/cat-seven-sisters.JPG",
  },

  {
    id: 13,
    title: "Mt Fuji Sidequest",
    category: "Landscape",
    location: "Japan",
    src: "/images/fuji-sidequest.jpg",
  },

  {
    id: 14,
    title: "Sheep in the field",
    category: "Landscape",
    location: "Seven Sisters",
    src: "/images/sheep-in-field.JPG",
  },
  {
    id: 15,
    title: "Sitting Room in the Sunlight",
    category: "Landscape",
    location: "Castle Combe",
    src: "/images/sun-sitting-room.jpg",
  },
  {
    id: 16,
    title: "Piggy and Porky",
    category: "Still Life",
    location: "London",
    src: "/images/piggy-porky.JPG",
  },

  {
    id: 17,
    title: "Mum and Son",
    category: "Landscape",
    location: "Cotswold",
    src: "/images/mum&son.JPG",
  },

  {
    id: 18,
    title: "Boats",
    category: "Landscape",
    location: "London",
    src: "/images/boats.JPG",
  },

  {
    id: 19,
    title: "Christmas Tree",
    category: "Still Life",
    location: "Cotswold",
    src: "/images/christmasTree.JPG",
  },
];
