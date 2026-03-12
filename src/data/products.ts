import neemImg from "@/assets/neem-powder.jpg";
import amlaImg from "@/assets/amla-powder.jpg";
import moringaImg from "@/assets/moringa-powder.jpg";
import turmericImg from "@/assets/turmeric-powder.jpg";
import ashwagandhaImg from "@/assets/ashwagandha-powder.jpg";
import chaimasalaImg from "@/assets/chaimasala.jpg";
import dalmasalaImg from "@/assets/dalmasala.jpg";
import khichadiImg from "@/assets/khichadi.jpg";
import herbalImg from "@/assets/herbaltea.jpg";
import masalachaiImg from "@/assets/masalachai.jpg";
import khichadiImg from "@/assets/khichadi.jpg";

export interface Product {
  id: string;
  name: string;
  benefit: string;
  priceRange: string;
  image: string;
  description: string;
  applications: string[];
  packaging: { qty: string; type: string }[];
  prices: Record<number, number>;
}

export const products: Product[] = [
  {
    id: "neem-powder",
    name: "Neem Powder",
    benefit: "Anti-bacterial & Organic",
    priceRange: "₹250 – ₹350 / kg",
    image: neemImg,
    description:
      "Our Neem powder is made from shade-dried leaves to preserve medicinal properties. Known as the 'Village Pharmacy', it is ideal for skincare, hair care, and organic farming.",
    applications: ["Cosmetics", "Hair care", "Herbal medicine", "Organic farming"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 350, 5: 320, 10: 290, 25: 250 },
  },
  {
    id: "amla-powder",
    name: "Amla Powder",
    benefit: "Rich in Vitamin C for hair and health",
    priceRange: "₹300 – ₹450 / kg",
    image: amlaImg,
    description:
      "Premium Amla powder packed with natural Vitamin C. Sourced from organic farms and processed to retain maximum nutritional value for health and beauty applications.",
    applications: ["Hair care", "Health supplements", "Cosmetics", "Nutrition"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 450, 5: 400, 10: 350, 25: 300 },
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    benefit: "Superfood with high protein and minerals",
    priceRange: "₹400 – ₹600 / kg",
    image: moringaImg,
    description:
      "Our Moringa powder is a nutrient-dense superfood loaded with protein, iron, and essential minerals. Perfect for supplements, food products, and nutraceuticals.",
    applications: ["Nutrition", "Food industry", "Health supplements", "Pharma"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 600, 5: 520, 10: 460, 25: 400 },
  },
  {
    id: "turmeric-powder",
    name: "Turmeric (High Curcumin)",
    benefit: "Natural healing spice with high curcumin",
    priceRange: "₹200 – ₹300 / kg",
    image: turmericImg,
    description:
      "High-curcumin turmeric powder sourced from premium farms. Lab-tested for curcumin content, ideal for food, pharma, and cosmetics industries.",
    applications: ["Food industry", "Pharma", "Cosmetics", "Agriculture"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 300, 5: 270, 10: 240, 25: 200 },
  },
  {
    id: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    benefit: "Pure root powder for vitality and stress relief",
    priceRange: "₹350 – ₹500 / kg",
    image: ashwagandhaImg,
    description:
      "100% pure Ashwagandha root powder, traditionally known as an adaptogen for stress relief, vitality, and overall wellness. Lab-tested for withanolide content.",
    applications: ["Health supplements", "Ayurvedic medicine", "Nutrition", "Pharma"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 500, 5: 440, 10: 390, 25: 350 },
  },

   {
    id: "neem-powder",
    name: "Neem Powder",
    benefit: "Anti-bacterial & Organic",
    priceRange: "₹250 – ₹350 / kg",
    image: neemImg,
    description:
      "Our Neem powder is made from shade-dried leaves to preserve medicinal properties. Known as the 'Village Pharmacy', it is ideal for skincare, hair care, and organic farming.",
    applications: ["Cosmetics", "Hair care", "Herbal medicine", "Organic farming"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 350, 5: 320, 10: 290, 25: 250 },
  },
  {
    id: "Chai Rajwadi masala",
    name: "Chai Rajwadi masala",
    benefit: "Rich in Vitamin C for hair and health",
    priceRange: "₹300 – ₹450 / kg",
    image: chaimasalaImg,
    description:
      "Chai Rajwadi Masala is a royal blend of traditional Indian spices specially crafted to enhance the flavor and aroma of tea. Made from premium ingredients like cardamom, cinnamon, ginger, cloves, and black pepper, this masala gives your chai a rich, aromatic, and authentic taste. Just a pinch transforms your everyday tea into a flavorful and refreshing experience perfect for any time of the day",
    applications: ["Hair care", "Health supplements", "Cosmetics", "Nutrition"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 450, 5: 400, 10: 350, 25: 300 },
  },

   {
    id: "Gujarati Dal Masala",
    name: "Gujarati Dal Masala",
    benefit: "Enhances the traditional sweet-spicy taste of authentic Gujarati dal",
    priceRange: "₹300 – ₹450 / kg",
    image: dalmasalaImg,
    description:
      "Gujarati Dal Masala is a perfectly balanced spice blend designed to bring the authentic taste of traditional Gujarati dal to your kitchen. With aromatic spices like cumin, coriander, turmeric, and red chili, this masala adds a unique sweet-spicy flavor that defines classic Gujarati cuisine.",
    applications: ["Hair care", "Health supplements", "Cosmetics", "Nutrition"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 450, 5: 400, 10: 350, 25: 300 },
  },
  {
    id: "khichaddi Masala",
    name: "Khichaddi Masala",
    benefit: "Enhances the traditional sweet-spicy taste of authentic Gujarati dal",
    priceRange: "₹300 – ₹450 / kg",
    image: khichadiImg,
    description:
      "Gujarati Dal Masala is a perfectly balanced spice blend designed to bring the authentic taste of traditional Gujarati dal to your kitchen. With aromatic spices like cumin, coriander, turmeric, and red chili, this masala adds a unique sweet-spicy flavor that defines classic Gujarati cuisine.",
    applications: ["Hair care", "Health supplements", "Cosmetics", "Nutrition"],
    packaging: [
      { qty: "1kg", type: "Food-grade pouch" },
      { qty: "5kg", type: "Industrial bag" },
      { qty: "25kg", type: "Bulk sack" },
    ],
    prices: { 1: 450, 5: 400, 10: 350, 25: 300 },
  },
];
