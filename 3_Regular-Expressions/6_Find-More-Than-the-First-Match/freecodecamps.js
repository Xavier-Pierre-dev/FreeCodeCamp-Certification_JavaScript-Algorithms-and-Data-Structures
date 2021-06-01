let twinkleStar = "Twinkle, twinkle, little star";

// We can use multiple tag
// here we have two tag : g and i
// g allow us to find multiple match
// i allow us to remove the case sensitive
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line