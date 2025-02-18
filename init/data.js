const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920959/Wonderlust_image/cihr3rhcqepswgl8orle.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920875/Wonderlust_image/nkd7qb8oumcwucviyrze.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920997/Wonderlust_image/xgfnjhhhydyjumgdgttv.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920875/Wonderlust_image/nkd7qb8oumcwucviyrze.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920959/Wonderlust_image/cihr3rhcqepswgl8orle.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920997/Wonderlust_image/xgfnjhhhydyjumgdgttv.jpg",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920875/Wonderlust_image/nkd7qb8oumcwucviyrze.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920959/Wonderlust_image/cihr3rhcqepswgl8orle.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920997/Wonderlust_image/xgfnjhhhydyjumgdgttv.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920875/Wonderlust_image/nkd7qb8oumcwucviyrze.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920959/Wonderlust_image/cihr3rhcqepswgl8orle.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920997/Wonderlust_image/xgfnjhhhydyjumgdgttv.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920875/Wonderlust_image/nkd7qb8oumcwucviyrze.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Beachfront Villa in Bali",
    description:
      "Enjoy the ultimate beachfront experience in this luxurious villa on the beautiful island of Bali.",
    image: {
      filename: "listingimage",
      url: "http://res.cloudinary.com/dem43kwna/image/upload/v1726920915/Wonderlust_image/fyle3rpugfa0mimku0gb.jpg",
    },
    price: 2800,
    location: "Bali",
    country: "Indonesia",
  },
];


module.exports = { data: sampleListings };



