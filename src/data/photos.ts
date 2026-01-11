export interface Photo {
  id: number;
  title: string;
  category: string;
  location: string;
  src: string;
}

const base = import.meta.env.BASE_URL + "images/";

export const photos: Photo[] = [
  {
    id: 1,
    title: "Sitting Room",
    category: "Street",
    location: "Castle Combe",
    src: `${base}sitting-room-sunlight.JPG`,
  },
  {
    id: 2,
    title: "Manor House Hotel",
    category: "Landscape",
    location: "Castle Combe",
    src: `${base}manor-house-hotel.JPG`,
  },
  {
    id: 3,
    title: "Shibuya Crossing",
    category: "Landscape",
    location: "Tokyo",
    src: `${base}Shibuya-Crossing.jpg`,
  },
  {
    id: 4,
    title: "Mt Fuji Village",
    category: "Landscape",
    location: "Japan",
    src: `${base}mt-fuji-village.jpg`,
  },
  {
    id: 5,
    title: "Cat in the Cafe",
    category: "Street",
    location: "Japan",
    src: `${base}cafe-cat.jpg`,
  },
  {
    id: 6,
    title: "Street Sky",
    category: "Street",
    location: "Japan",
    src: `${base}street-sky.jpg`,
  },
  {
    id: 7,
    title: "Clock in the Park",
    category: "Street",
    location: "Japan",
    src: `${base}clock.jpg`,
  },
  {
    id: 8,
    title: "Indian Chrollo",
    category: "Portrait",
    location: "Japan",
    src: `${base}chrollo.jpg`,
  },
  {
    id: 9,
    title: "Old Man at the Beach",
    category: "Street",
    location: "Seven Sisters",
    src: `${base}the-end.JPG`,
  },
  {
    id: 10,
    title: "Bikes",
    category: "Street",
    location: "Japan",
    src: `${base}bikes.jpg`,
  },
  {
    id: 11,
    title: "Free Man",
    category: "Street",
    location: "Seven Sisters",
    src: `${base}free-man.JPG`,
  },
  {
    id: 12,
    title: "Cat at Seven Sisters",
    category: "Street",
    location: "Seven Sisters",
    src: `${base}cat-seven-sisters.JPG`,
  },
  {
    id: 13,
    title: "Mt Fuji Sidequest",
    category: "Landscape",
    location: "Japan",
    src: `${base}fuji-sidequest.jpg`,
  },
  {
    id: 14,
    title: "Sheep in the Field",
    category: "Landscape",
    location: "Seven Sisters",
    src: `${base}sheep-in-field.JPG`,
  },
  {
    id: 15,
    title: "Sunlit Sitting Room",
    category: "Interior",
    location: "Castle Combe",
    src: `${base}sun-sitting-room.jpg`,
  },
  {
    id: 16,
    title: "Piggy and Porky",
    category: "Still Life",
    location: "London",
    src: `${base}piggy-porky.JPG`,
  },
  {
    id: 17,
    title: "Mum and Son",
    category: "Street",
    location: "Cotswolds",
    src: `${base}mum-and-son.JPG`,
  },
  {
    id: 18,
    title: "Boats",
    category: "Landscape",
    location: "London",
    src: `${base}boats.JPG`,
  },
  {
    id: 19,
    title: "Christmas Tree",
    category: "Still Life",
    location: "Cotswolds",
    src: `${base}christmasTree.JPG`,
  },
];
