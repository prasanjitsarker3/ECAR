export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Indian Sharee",
    price: "23,00",
    img: "/Photo/Fe1.png",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "23,00",
    img: "/Photo/Fe2.png",
  },
  {
    id: 3,
    name: "Plazu",
    price: "23,00",
    img: "/Photo/Fe3.png",
  },
  {
    id: 4,
    name: "Jacket",
    price: "23,00",
    img: "/Photo/Ma1.png",
  },
  {
    id: 5,
    name: "Shirt",
    price: "23,00",
    img: "/Photo/Ma2.png",
  },
  {
    id: 6,
    name: "Half Sleeve",
    price: "23,00",
    img: "/Photo/Fe4.png",
  },
  {
    id: 7,
    name: "Indian Sharee",
    price: "23,00",
    img: "/Photo/Fe1.png",
  },
  {
    id: 8,
    name: "Hoodie",
    price: "23,00",
    img: "/Photo/Fe2.png",
  },
  {
    id: 9,
    name: "Plazu",
    price: "23,00",
    img: "/Photo/Fe3.png",
  },
  {
    id: 10,
    name: "Jacket",
    price: "23,00",
    img: "/Photo/Ma1.png",
  },
  {
    id: 11,
    name: "Shirt",
    price: "23,00",
    img: "/Photo/Ma2.png",
  },
  {
    id: 12,
    name: "Half Sleeve",
    price: "23,00",
    img: "/Photo/Fe4.png",
  },
];

export const productInformationData = [
  {
    id: 1,
    name: "Details",
    details: "This is a detailed description of the product.",
  },
  {
    id: 2,
    name: "Review & Rating",
    users: [
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
    ],
    views: 121,
    rating: 4.5,
    userFeedBack: [
      { id: 5, value: 50 },
      { id: 4, value: 5 },
      { id: 3, value: 10 },
      { id: 2, value: 30 },
      { id: 1, value: 2 },
    ],
  },
  {
    id: 3,
    name: "Discussion",
    details: "Join the discussion about this product here.",
  },
];

export const carDataArray = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model S Plaid",
    price: 124990,
    category: "Electric",
    description:
      "The Tesla Model S Plaid is the ultimate electric sedan with unparalleled speed and cutting-edge technology.",
    specifications: {
      range: "396 miles",
      topSpeed: "200 mph",
      acceleration: "0-60 mph in 1.99 seconds",
      horsepower: "1,020 hp",
    },
    features: [
      "Autopilot",
      "Full Self-Driving",
      "17-inch Touchscreen",
      "Premium Interior",
      "Over-the-Air Software Updates",
      "Tri-Motor All-Wheel Drive",
      "Glass Roof",
      "High-Fidelity Sound System",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/front-view-part-black-modern-car-closeup-black-background-headlights-detail_34008-337.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 12,
    isAvailable: true,
  },
  {
    id: 2,
    brand: "Ford",
    model: "Mustang Mach-E",
    price: 55900,
    category: "Electric",
    description:
      "The Ford Mustang Mach-E combines the iconic Mustang performance with modern electric efficiency.",
    specifications: {
      range: "300 miles",
      topSpeed: "150 mph",
      acceleration: "0-60 mph in 3.5 seconds",
      horsepower: "480 hp",
    },
    features: [
      "Electric All-Wheel Drive",
      "14-inch Touchscreen",
      "Ford Co-Pilot360",
      "Panoramic Glass Roof",
      "Wireless Charging",
      "Adaptive Cruise Control",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/luxury-car-black-background-generative-ai_849906-6692.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/studio-shot-black-luxury-car-isolated-black_209729-320.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 15,
    isAvailable: true,
  },
  {
    id: 3,
    brand: "Chevrolet",
    model: "Corvette Z06",
    price: 105300,
    category: "Sports",
    description:
      "The Chevrolet Corvette Z06 delivers track-ready performance with an unmistakable design.",
    specifications: {
      range: "NA",
      topSpeed: "195 mph",
      acceleration: "0-60 mph in 2.6 seconds",
      horsepower: "670 hp",
    },
    features: [
      "Carbon Fiber Aero Package",
      "Bose Performance Series Audio",
      "8-Speed Dual-Clutch Transmission",
      "High-Performance Tires",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/clean-straightforward-electric-car-silhouette_978035-7505.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 10,
    isAvailable: true,
  },
  {
    id: 4,
    brand: "BMW",
    model: "iX",
    price: 85900,
    category: "Luxury Electric",
    description:
      "The BMW iX redefines electric luxury with futuristic design and advanced features.",
    specifications: {
      range: "324 miles",
      topSpeed: "124 mph",
      acceleration: "0-60 mph in 4.4 seconds",
      horsepower: "516 hp",
    },
    features: [
      "Harman Kardon Sound System",
      "BMW iDrive 8",
      "Glass Controls",
      "Sustainable Interior Materials",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/black-modern-sport-car_110488-550.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/realistic-car-headlights-ad-composition-headlights-with-green-purple-illumination_1284-56577.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 18,
    isAvailable: true,
  },
  {
    id: 5,
    brand: "Porsche",
    model: "Taycan Turbo S",
    price: 185000,
    category: "Electric Sports",
    description:
      "The Porsche Taycan Turbo S combines electric efficiency with the driving dynamics of a Porsche.",
    specifications: {
      range: "250 miles",
      topSpeed: "162 mph",
      acceleration: "0-60 mph in 2.8 seconds",
      horsepower: "750 hp",
    },
    features: [
      "Porsche Connect",
      "Burmester 3D High-End Surround Sound System",
      "4-Zone Climate Control",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/3d-render-closeup-vintage-car_157701-895.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/black-sport-car-dark-background-3d-render_68747-40.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 8,
    isAvailable: true,
  },
  {
    id: 6,
    brand: "Audi",
    model: "e-tron GT",
    price: 104900,
    category: "Electric",
    description:
      "The Audi e-tron GT is an electric grand tourer with striking design and exhilarating performance.",
    specifications: {
      range: "238 miles",
      topSpeed: "152 mph",
      acceleration: "0-60 mph in 3.3 seconds",
      horsepower: "637 hp",
    },
    features: [
      "Matrix LED Headlights",
      "Bang & Olufsen Sound System",
      "Dynamic All-Wheel Steering",
    ],
    imageUrl: [
      "https://img.freepik.com/free-photo/view-four-wheeled-vehicle-mobility-fast-travel_23-2151016430.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 10,
    isAvailable: true,
  },
  {
    id: 7,
    brand: "Lucid",
    model: "Air Dream Edition",
    price: 169000,
    category: "Luxury Electric",
    description:
      "The Lucid Air Dream Edition sets new standards in electric luxury and range.",
    specifications: {
      range: "520 miles",
      topSpeed: "168 mph",
      acceleration: "0-60 mph in 2.5 seconds",
      horsepower: "1,111 hp",
    },
    features: ["21-inch Wheels", "5K Touchscreen", "Executive Rear Seating"],
    imageUrl: [
      "https://img.freepik.com/premium-photo/detail-front-generic-modern-car-3d-illustration_110488-2017.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 6,
    isAvailable: true,
  },
  {
    id: 8,
    brand: "Rivian",
    model: "R1T",
    price: 73900,
    category: "Electric Truck",
    description:
      "The Rivian R1T is an all-electric adventure truck with impressive performance and utility.",
    specifications: {
      range: "314 miles",
      topSpeed: "125 mph",
      acceleration: "0-60 mph in 3 seconds",
      horsepower: "835 hp",
    },
    features: [
      "Gear Tunnel Storage",
      "Rivian Elevation Audio System",
      "Waterproof Key Fob",
    ],
    imageUrl: [
      "https://img.freepik.com/premium-photo/black-car_110488-1488.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/silhouette-prototype-passenger-car-side-view_183270-680.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    ],
    stock: 14,
    isAvailable: true,
  },
];
