import { Product } from './types';
import neemAloeImg from './assets/images/neem_aloe_soap_product_1778982393363.png';
import roseClayImg from './assets/images/rose_clay_soap_product_1778982410588.png';
import lemonZestImg from './assets/images/lemon_zest_soap_product_1778982426206.png';
import giftTrioImg from './assets/images/botanical_ingredients_banner_1778982441985.png';
import oatHoneyImg from './assets/images/oat_honey_soap_1778984663699.png';
import shampooBarImg from './assets/images/shampoo_bar_ayurvedic_1778984683083.png';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Neem & Aloe Vera Bar',
    category: 'skin',
    price: 280,
    description: 'Deep-cleansing with antibacterial neem and soothing aloe vera.',
    longDescription: 'Our Neem & Aloe Vera bar is a powerhouse of natural skin healing. Neem oil provides potent antibacterial properties that help fight acne and skin infections, while pure aloe vera extract soothes inflammation and keeps skin hydrated. Hand-poured and cured for 4 weeks.',
    image: neemAloeImg,
    rating: 5,
    badge: 'Bestseller',
    ingredients: ['Saponified Coconut Oil', 'Neem Oil', 'Pure Aloe Vera Gel', 'Tea Tree Essential Oil', 'Natural Green Clay'],
    usage: 'Lather between hands with water, and apply generously to face and body. This soap is gentle enough for daily use.'
  },
  {
    id: '2',
    name: 'Rose Petal & Pink Clay',
    category: 'skin',
    price: 320,
    oldPrice: 380,
    description: 'Detoxifying pink clay with Bulgarian rose water to brighten and firm.',
    longDescription: 'Infused with the essence of fresh Bulgarian roses and mineral-rich pink clay, this bar is designed for those seeking a radiant glow. Pink clay gently detoxifies with a mild exfoliating action, while rose water balances your skin\'s natural oils.',
    image: roseClayImg,
    rating: 5,
    badge: 'New',
    ingredients: ['Saponified Olive Oil', 'Bulgarian Rose Water', 'French Pink Clay', 'Dried Rose Petals', 'Geranium Essential Oil'],
    usage: 'Massage over wet skin in circular motions to allow the pink clay to draw out impurities.'
  },
  {
    id: '3',
    name: 'Lemon Zest & Turmeric',
    category: 'skin',
    price: 260,
    description: 'Natural vitamin C and anti-inflammatory turmeric for a radiant tone.',
    longDescription: 'Brighten your morning and your skin with our Lemon Zest & Turmeric bar. Turmeric has been used for centuries for its brightening and healing properties. We combine it with real lemon zest for a refreshing scent and natural Vitamin C boost.',
    image: lemonZestImg,
    rating: 4,
    ingredients: ['Saponified Rice Bran Oil', 'Turmeric Powder', 'Lemon Zest', 'Lemon Essential Oil', 'Ginger Root Oil'],
    usage: 'Perfect for morning showers to awaken the senses and brighten the complexion.'
  },
  {
    id: '4',
    name: 'Oat, Honey & Shea',
    category: 'skin',
    price: 300,
    description: 'Colloidal oatmeal and raw honey lock in moisture while shea butter restores.',
    longDescription: 'Specifically formulated for dry and sensitive skin, this creamy bar combines the soothing power of colloidal oatmeal with the moisture-locking benefits of raw honey. Unscented and ultra-gentle.',
    image: oatHoneyImg,
    rating: 5,
    badge: 'Popular',
    ingredients: ['Saponified Shea Butter', 'Colloidal Oatmeal', 'Raw Local Honey', 'Castor Oil', 'Vitamin E Oil'],
    usage: 'Leave the lather on for 30 seconds before rinsing to get the full moisturizing benefit of the honey and shea.'
  },
  {
    id: '5',
    name: 'Bhringraj Shampoo Bar',
    category: 'hair',
    price: 350,
    description: 'Ayurvedic shampoo bar that strengthens roots and reduces hair fall.',
    longDescription: 'Say goodbye to plastic bottles and hello to healthy hair. Our Bhringraj Shampoo Bar uses ancient Ayurvedic herbs to stimulate hair growth and maintain scalp health. It creates a rich, natural lather without any harsh sulfates.',
    image: shampooBarImg,
    rating: 5,
    badge: 'New',
    ingredients: ['Bhringraj Powder', 'Amla Extract', 'Argan Oil', 'Saponified Coconut Oil', 'Peppermint Essential Oil'],
    usage: 'Rub the bar directly onto wet hair or between hands to create lather. Massage into scalp and rinse thoroughly.'
  },
  {
    id: '6',
    name: 'Botanicals Gift Trio',
    category: 'gift',
    price: 750,
    oldPrice: 860,
    description: 'Our three flagship bars beautifully packaged in eco-friendly kraft boxes.',
    longDescription: 'Selection includes: Neem & Aloe, Rose Clay, and Lemon Zest. The perfect gift for someone who values natural luxury and sustainable living.',
    image: giftTrioImg,
    rating: 5,
    badge: 'Sale',
    ingredients: ['See individual bars for ingredients'],
    usage: 'Store in a dry place between uses to prolong the life of these artisanal bars.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Fatema Nahar',
    text: "The Neem & Aloe bar completely cleared my skin in just three weeks. I've tried dozens of products — nothing worked like PureBar.",
    loc: 'Dhaka, BD',
    rating: 5,
    initials: 'FN'
  },
  {
    id: 2,
    name: 'Morsheda Rahman',
    text: "As a spa owner, I've been stocking PureBar for two years now. My clients absolutely love the Rose Clay bar. Exceptional quality.",
    loc: 'Chattogram, BD',
    rating: 5,
    initials: 'MR',
    featured: true
  },
  {
    id: 3,
    name: 'Sadia Karim',
    text: "My whole family switched to PureBar. The kids love the Oat & Honey bar. No more dry skin in winter. Gorgeous packaging.",
    loc: 'Sylhet, BD',
    rating: 5,
    initials: 'SK'
  }
];
