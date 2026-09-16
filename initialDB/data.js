const sampleListing=[
  {
  title: 'Alpine Dream Villa',
  description: 'hidden among the snowy mountains',
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  price: 1800,
  location: 'Zermatt',
  country: 'Switzerland'
},
{
  title: 'Ocean Breeze Villa',
  description: 'overlooking the crystal blue ocean',
  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  price: 1500,
  location: 'Santorini',
  country: 'Greece'
},
{
  title: 'Forest Escape Villa',
  description: 'surrounded by lush green forests',
  image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
  price: 950,
  location: 'Ubud, Bali',
  country: 'Indonesia'
},
{
  title: 'Desert Sunset Villa',
  description: 'a peaceful retreat among golden dunes',
  image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
  price: 1300,
  location: 'Marrakech',
  country: 'Morocco'
},
{
  title: 'Northern Lights Villa',
  description: 'beneath the magical northern lights',
  image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80',
  price: 2200,
  location: 'Tromsø',
  country: 'Norway'
},
{
  title: 'Lakeview Retreat',
  description: 'a cozy villa beside a peaceful alpine lake',
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  price: 1100,
  location: 'Queenstown',
  country: 'New Zealand'
},
{
  title: 'Jungle Paradise Villa',
  description: 'deep inside a tropical rainforest',
  image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
  price: 1250,
  location: 'Manuel Antonio',
  country: 'Costa Rica'
},
{
  title: 'Cliffside Haven',
  description: 'perched dramatically above the Mediterranean Sea',
  image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=80',
  price: 2000,
  location: 'Amalfi Coast',
  country: 'Italy'
},
{
  title: 'Snowy Cabin Villa',
  description: 'a warm wooden escape surrounded by pine trees',
  image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80',
  price: 1400,
  location: 'Banff',
  country: 'Canada'
},
{
  title: 'Tropical Sunset Villa',
  description: 'a private paradise with breathtaking island sunsets',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  price: 1700,
  location: 'Malé',
  country: 'Maldives'
}

  ,
  {
    title: 'Coastal Serenity Villa',
    description: 'a peaceful escape overlooking the endless blue sea',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    price: 1600,
    location: 'Mykonos',
    country: 'Greece'
  },
  {
    title: 'Mountain Mist Lodge',
    description: 'a secluded retreat surrounded by dramatic mountain peaks',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    price: 1450,
    location: 'Aspen',
    country: 'United States'
  },
  {
    title: 'Palm Grove Villa',
    description: 'a luxurious tropical stay surrounded by swaying palm trees',
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=80',
    price: 1900,
    location: 'Phuket',
    country: 'Thailand'
  },
  {
    title: 'Lakeside Wooden Retreat',
    description: 'a charming wooden villa beside a crystal clear lake',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
    price: 1200,
    location: 'Lake Tahoe',
    country: 'United States'
  },
  {
    title: 'Tuscan Countryside Villa',
    description: 'an elegant countryside home surrounded by rolling green hills',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    price: 1750,
    location: 'Tuscany',
    country: 'Italy'
  },
  {
    title: 'Island Breeze House',
    description: 'a bright island home just steps away from turquoise waters',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    price: 2100,
    location: 'Nassau',
    country: 'Bahamas'
  },
  {
    title: 'Rainforest Hideaway',
    description: 'a private retreat surrounded by tropical greenery',
    image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80',
    price: 1150,
    location: 'La Fortuna',
    country: 'Costa Rica'
  },
  {
    title: 'Modern City Villa',
    description: 'a stylish luxury home overlooking the city skyline',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    price: 2300,
    location: 'Dubai',
    country: 'United Arab Emirates'
  },
  {
    title: 'Cliffside Ocean House',
    description: 'an extraordinary home hanging above the crashing waves',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    price: 2500,
    location: 'Big Sur',
    country: 'United States'
  },
  {
    title: 'Countryside Stone Villa',
    description: 'a rustic stone home surrounded by peaceful farmland',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    price: 1350,
    location: 'Provence',
    country: 'France'
  },
  {
    title: 'Nordic Forest Cabin',
    description: 'a cozy Scandinavian cabin hidden among tall pine trees',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
    price: 1550,
    location: 'Rovaniemi',
    country: 'Finland'
  },
  {
    title: 'Golden Beach Villa',
    description: 'a luxurious beachfront stay with spectacular sunset views',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    price: 1850,
    location: 'Gold Coast',
    country: 'Australia'
  },
  {
    title: 'Swiss Valley Chalet',
    description: 'a traditional chalet overlooking a breathtaking alpine valley',
    image: 'https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=1200&q=80',
    price: 2000,
    location: 'Interlaken',
    country: 'Switzerland'
  },
  {
    title: 'Moroccan Courtyard Villa',
    description: 'a beautiful traditional home with a peaceful private courtyard',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    price: 1050,
    location: 'Fez',
    country: 'Morocco'
  },
  {
    title: 'Japanese Garden House',
    description: 'a serene modern home surrounded by traditional gardens',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    price: 1650,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Patagonia Mountain Retreat',
    description: 'a remote luxury cabin surrounded by untouched wilderness',
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80',
    price: 1800,
    location: 'El Chaltén',
    country: 'Argentina'
  },
  {
    title: 'Santorini White House',
    description: 'a beautiful whitewashed home overlooking the Aegean Sea',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    price: 2200,
    location: 'Oia',
    country: 'Greece'
  },
  {
    title: 'Bali Jungle Villa',
    description: 'a luxurious open-air villa deep within the tropical jungle',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    price: 1300,
    location: 'Ubud',
    country: 'Indonesia'
  },
  {
    title: 'Scottish Highland Retreat',
    description: 'a peaceful countryside home surrounded by misty highlands',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    price: 1250,
    location: 'Glencoe',
    country: 'United Kingdom'
  },
  {
    title: 'Seychelles Beach Villa',
    description: 'a private tropical paradise beside pristine turquoise waters',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    price: 2400,
    location: 'Mahé',
    country: 'Seychelles'
  }

]
module.exports={data:sampleListing}