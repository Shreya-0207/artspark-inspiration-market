
export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  followers: number;
}

export interface Artwork {
  id: string;
  title: string;
  image: string;
  price: number;
  artistId: string;
  artistName: string;
  medium: string;
  dimensions: string;
  year: number;
  description: string;
  style: string;
}

export const artStyles = [
  "Abstract",
  "Contemporary",
  "Cubism",
  "Expressionism",
  "Impressionism",
  "Minimalism",
  "Pop Art",
  "Realism",
  "Street Art",
  "Surrealism"
];

export const artists: Artist[] = [
  {
    id: "1",
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Contemporary artist focusing on vibrant abstract expressions of city life.",
    location: "Barcelona, Spain",
    followers: 3452
  },
  {
    id: "2",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Specializing in minimalist sculptures and digital art compositions.",
    location: "Tokyo, Japan",
    followers: 2890
  },
  {
    id: "3",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Inspired by natural landscapes, creating impressionist paintings with oil.",
    location: "Portland, USA",
    followers: 5214
  },
  {
    id: "4",
    name: "Jamal Williams",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Street artist bringing urban stories to canvas with bold colors and shapes.",
    location: "Berlin, Germany",
    followers: 4130
  },
  {
    id: "5",
    name: "Aisha Patel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Combining traditional techniques with modern themes in surrealist paintings.",
    location: "Mumbai, India",
    followers: 2756
  }
];

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Urban Symphony",
    image: "https://images.unsplash.com/photo-1617503752587-97d2103a96ea",
    price: 1200,
    artistId: "1",
    artistName: "Elena Rodriguez",
    medium: "Acrylic on Canvas",
    dimensions: "30 x 40 inches",
    year: 2023,
    description: "A vibrant expression of city life through abstract forms and colors.",
    style: "Abstract"
  },
  {
    id: "2",
    title: "Silent Echo",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    price: 1800,
    artistId: "2",
    artistName: "Marcus Chen",
    medium: "Digital Print",
    dimensions: "24 x 36 inches",
    year: 2023,
    description: "Minimalist exploration of space and form inspired by architectural elements.",
    style: "Minimalism"
  },
  {
    id: "3",
    title: "Autumn Reflections",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    price: 2500,
    artistId: "3",
    artistName: "Sarah Johnson",
    medium: "Oil on Canvas",
    dimensions: "36 x 48 inches",
    year: 2022,
    description: "Vibrant impressionist landscape capturing the essence of fall colors.",
    style: "Impressionism"
  },
  {
    id: "4",
    title: "Breaking Through",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
    price: 950,
    artistId: "4",
    artistName: "Jamal Williams",
    medium: "Mixed Media",
    dimensions: "40 x 40 inches",
    year: 2023,
    description: "Bold street art inspired piece exploring themes of freedom and expression.",
    style: "Street Art"
  },
  {
    id: "5",
    title: "Dreams of Flight",
    image: "https://images.unsplash.com/photo-1574182745640-e1df64303d6e",
    price: 1750,
    artistId: "5",
    artistName: "Aisha Patel",
    medium: "Watercolor",
    dimensions: "24 x 30 inches",
    year: 2022,
    description: "Surrealist composition blending elements of nature and human imagination.",
    style: "Surrealism"
  },
  {
    id: "6",
    title: "Geometric Journey",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    price: 1350,
    artistId: "2",
    artistName: "Marcus Chen",
    medium: "Acrylic on Panel",
    dimensions: "24 x 24 inches",
    year: 2023,
    description: "Study of geometric patterns and their interaction with light and shadow.",
    style: "Minimalism"
  },
  {
    id: "7",
    title: "City Pulse",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb",
    price: 2200,
    artistId: "1",
    artistName: "Elena Rodriguez",
    medium: "Mixed Media",
    dimensions: "36 x 48 inches",
    year: 2022,
    description: "Abstract representation of urban energy and movement.",
    style: "Abstract"
  },
  {
    id: "8",
    title: "Fragmented Reality",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062",
    price: 2800,
    artistId: "5",
    artistName: "Aisha Patel",
    medium: "Oil on Canvas",
    dimensions: "30 x 40 inches",
    year: 2023,
    description: "Surrealist exploration of perception and reality through fragmented imagery.",
    style: "Surrealism"
  },
  {
    id: "9",
    title: "Mountain Serenity",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84",
    price: 1900,
    artistId: "3",
    artistName: "Sarah Johnson",
    medium: "Oil on Canvas",
    dimensions: "36 x 24 inches",
    year: 2022,
    description: "Impressionist landscape capturing the tranquility of mountain vistas.",
    style: "Impressionism"
  },
  {
    id: "10",
    title: "Urban Legends",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
    price: 1100,
    artistId: "4",
    artistName: "Jamal Williams",
    medium: "Spray Paint and Acrylic",
    dimensions: "40 x 30 inches",
    year: 2023,
    description: "Vibrant street art piece telling stories of city life and culture.",
    style: "Street Art"
  },
  {
    id: "11",
    title: "Chromatic Harmony",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    price: 2100,
    artistId: "1",
    artistName: "Elena Rodriguez",
    medium: "Acrylic on Canvas",
    dimensions: "36 x 36 inches",
    year: 2022,
    description: "Study of color relationships and their emotional impact.",
    style: "Abstract"
  },
  {
    id: "12",
    title: "Structured Void",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7",
    price: 1600,
    artistId: "2",
    artistName: "Marcus Chen",
    medium: "Digital Print on Aluminum",
    dimensions: "30 x 20 inches",
    year: 2023,
    description: "Minimalist exploration of negative space and form.",
    style: "Minimalism"
  }
];
