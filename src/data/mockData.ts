import { Product, Benefit, Testimonial, FAQ } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Essence',
    tagline: 'Simplicity Meets Excellence',
    description: 'Experience the perfect balance of form and function. Pure Essence delivers unmatched performance in a beautifully minimal design.',
    price: 299,
    image: 'https://public.youware.com/users-website-assets/prod/8f8e0fd9-02fc-4493-ac8a-ba68af26fb99/f45d45466fdd48e384c533cd008ade6a.jpg',
    features: [
      'Premium Materials',
      'Minimalist Design',
      'Exceptional Quality',
      'Sustainable Production'
    ]
  },
  {
    id: '2',
    name: 'Pure Essence Pro',
    tagline: 'Professional Grade Excellence',
    description: 'Designed for professionals who demand the absolute best. Enhanced features with the same minimalist approach.',
    price: 499,
    image: 'https://public.youware.com/users-website-assets/prod/8f8e0fd9-02fc-4493-ac8a-ba68af26fb99/f45d45466fdd48e384c533cd008ade6a.jpg',
    features: [
      'Professional Grade Materials',
      'Advanced Features',
      'Extended Warranty',
      'Priority Support'
    ]
  },
  {
    id: '3',
    name: 'Pure Essence Lite',
    tagline: 'Essential Minimalism',
    description: 'All the essential features you need in a more accessible package. Perfect for everyday use.',
    price: 199,
    image: 'https://public.youware.com/users-website-assets/prod/8f8e0fd9-02fc-4493-ac8a-ba68af26fb99/f45d45466fdd48e384c533cd008ade6a.jpg',
    features: [
      'Quality Materials',
      'Essential Features',
      'Great Value',
      'Eco-Friendly'
    ]
  }
];

export const featuredProduct: Product = products[0];

export const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Elegant Design',
    description: 'Every detail crafted with precision and purpose',
    icon: 'sparkles'
  },
  {
    id: '2',
    title: 'Built to Last',
    description: 'Premium materials ensure longevity and durability',
    icon: 'shield'
  },
  {
    id: '3',
    title: 'Eco-Friendly',
    description: 'Sustainably sourced with minimal environmental impact',
    icon: 'leaf'
  },
  {
    id: '4',
    title: 'Fast Delivery',
    description: 'Free shipping on all orders worldwide',
    icon: 'truck'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Designer',
    content: 'The quality exceeded my expectations. Pure Essence is everything I was looking for.',
    avatar: '/assets/avatar-1.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Entrepreneur',
    content: 'Minimalist perfection. This product has become an essential part of my daily routine.',
    avatar: '/assets/avatar-2.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Creative Director',
    content: 'Beautiful design and exceptional quality. Highly recommend to anyone seeking excellence.',
    avatar: '/assets/avatar-3.jpg',
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What makes Pure Essence different?',
    answer: 'Pure Essence combines premium materials with minimalist design philosophy. Every detail is carefully considered to deliver both aesthetic beauty and functional excellence.'
  },
  {
    id: '2',
    question: 'How long does shipping take?',
    answer: 'We offer free worldwide shipping. Delivery typically takes 5-7 business days, depending on your location. Express shipping options are available at checkout.'
  },
  {
    id: '3',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you are not completely satisfied, return the product in its original condition for a full refund.'
  },
  {
    id: '4',
    question: 'Is it sustainably made?',
    answer: 'Yes, sustainability is at the core of our production. We use eco-friendly materials and ethical manufacturing processes to minimize environmental impact.'
  },
  {
    id: '5',
    question: 'Do you offer warranty?',
    answer: 'All products come with a 2-year limited warranty covering manufacturing defects. Extended warranty options are available for purchase.'
  }
];
