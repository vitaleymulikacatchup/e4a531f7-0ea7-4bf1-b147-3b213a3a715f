"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Award, Car, CheckCircle, DollarSign, Handshake, MessageSquare, Phone, Star } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-cars-showroom","url":"https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek luxury cars showcased in a stylish, modern automotive dealership."},{"id":"quality-inspection","url":"https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of car's undercarriage in a service station for repair and maintenance."},{"id":"financing-service","url":"https://images.pexels.com/photos/7144199/pexels-photo-7144199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two businessmen shaking hands in a car dealership, sealing a deal."},{"id":"warranty-protection","url":"https://images.pexels.com/photos/34345218/pexels-photo-34345218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Ranger Guard"},{"id":"luxury-sedan","url":"https://images.pexels.com/photos/1036792/pexels-photo-1036792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed shot of a Peugeot car hood featuring the shiny logo and black grille."},{"id":"sports-coupe","url":"https://images.pexels.com/photos/30816058/pexels-photo-30816058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant red sports car featured on a rooftop with a cityscape in the background."},{"id":"family-suv","url":"https://images.pexels.com/photos/27497542/pexels-photo-27497542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A white SUV parked on a rural road with rustic village houses in the background."},{"id":"compact-hatchback","url":"https://images.pexels.com/photos/166680/pexels-photo-166680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Side view of a modern blue smart car against a brick wall, showcasing compact design."},{"id":"electric-vehicle","url":"https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A sleek white electric SUV with tinted windows is parked in a Seattle neighborhood on a rainy fall day."},{"id":"premium-truck","url":"https://images.pexels.com/photos/16033911/pexels-photo-16033911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Black pickup truck navigating a rugged off-road trail amidst greenery, showcasing off-roading capabilities."},{"id":"testimonial-sarah","url":"https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman organizing envelopes in a modern mailroom setting."},{"id":"testimonial-michael","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},{"id":"testimonial-emily","url":"https://images.pexels.com/photos/3762927/pexels-photo-3762927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy woman with curly hair shopping in the city, reflecting joy and a trendy lifestyle."},{"id":"testimonial-david","url":"https://images.pexels.com/photos/27520727/pexels-photo-27520727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elderly man with sunglasses sitting at an outdoor café table in Cairo, Egypt."},{"id":"testimonial-lisa","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"businesswoman portrait professional confident - Photo by Roman Biernacki"},{"id":"bmw-logo","url":"https://images.pexels.com/photos/5534978/pexels-photo-5534978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed shot of BMW car emblem focusing on its iconic grille and logo."},{"id":"mercedes-logo","url":"https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant Mercedes Benz logo on a tall sign with a bright blue sky background."},{"id":"audi-logo","url":"https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek Audi R8 parked in an urban setting with a vivid graffiti background."},{"id":"toyota-logo","url":"https://images.pexels.com/photos/17357680/pexels-photo-17357680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image of a shiny silver Toyota emblem on a vehicle's surface."},{"id":"honda-logo","url":"https://images.pexels.com/photos/6894433/pexels-photo-6894433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Blue Honda Civic parked in a lush, green setting in Hørsholm, Denmark."},{"id":"ford-logo","url":"https://images.pexels.com/photos/18234150/pexels-photo-18234150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detail shot of a Ford car hood showcasing the logo and reflections on the glossy surface."},{"id":"volkswagen-logo","url":"https://images.pexels.com/photos/13436410/pexels-photo-13436410.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A detailed shot of a car emblem on a wet hood, covered in water droplets."},{"id":"contact-showroom","url":"https://images.pexels.com/photos/10029881/pexels-photo-10029881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Spacious car dealership interior featuring red chairs and advertising displays with electric cars."}];

export default function Home() {
  // Asset resolution helper
  const resolveAsset = (assetId: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return {
      url: asset?.url ?? "/public/images/placeholder.webp",
      alt: asset?.alt ?? "Decorative image"
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Financing", id: "financing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoElite"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Dream Car Today"
          description="Discover premium vehicles with unmatched quality, competitive pricing, and exceptional service. Your perfect car awaits."
          tag="Premium Dealership"
          tagIcon={Car}
          buttons={[
            { text: "Browse Inventory", href: "inventory" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc={resolveAsset("hero-cars-showroom").url}
          imageAlt={resolveAsset("hero-cars-showroom").alt}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are passionate automotive experts dedicated to helping you find the perfect vehicle that matches your lifestyle, needs, and dreams with personalized service and uncompromising quality."
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "View Our Story", href: "services" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose AutoElite"
          description="Experience the difference with our comprehensive automotive services and commitment to excellence"
          tag="Our Services"
          tagIcon={Star}
          features={[
            {
              title: "Quality Assurance",
              description: "Every vehicle undergoes rigorous 150-point inspection to ensure reliability and performance",
              imageSrc: resolveAsset("quality-inspection").url,
              imageAlt: resolveAsset("quality-inspection").alt,
              button: { text: "Learn More", href: "services" }
            },
            {
              title: "Flexible Financing",
              description: "Competitive rates and flexible payment options tailored to your budget and credit situation",
              imageSrc: resolveAsset("financing-service").url,
              imageAlt: resolveAsset("financing-service").alt,
              button: { text: "Get Pre-Approved", href: "financing" }
            },
            {
              title: "Extended Warranty",
              description: "Comprehensive warranty coverage and roadside assistance for complete peace of mind",
              imageSrc: resolveAsset("warranty-protection").url,
              imageAlt: resolveAsset("warranty-protection").alt,
              button: { text: "View Coverage", href: "services" }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles across all categories"
          tag="Inventory"
          tagIcon={Car}
          products={[
            {
              id: "luxury-sedan-1",
              name: "Premium Luxury Sedan",
              price: "$52,000",
              imageSrc: resolveAsset("luxury-sedan").url,
              imageAlt: resolveAsset("luxury-sedan").alt,
              onProductClick: () => console.log('View luxury sedan details')
            },
            {
              id: "sports-coupe-1",
              name: "Performance Sports Coupe",
              price: "$68,500",
              imageSrc: resolveAsset("sports-coupe").url,
              imageAlt: resolveAsset("sports-coupe").alt,
              onProductClick: () => console.log('View sports coupe details')
            },
            {
              id: "family-suv-1",
              name: "Family Adventure SUV",
              price: "$45,200",
              imageSrc: resolveAsset("family-suv").url,
              imageAlt: resolveAsset("family-suv").alt,
              onProductClick: () => console.log('View SUV details')
            },
            {
              id: "compact-car-1",
              name: "Efficient City Compact",
              price: "$28,900",
              imageSrc: resolveAsset("compact-hatchback").url,
              imageAlt: resolveAsset("compact-hatchback").alt,
              onProductClick: () => console.log('View compact car details')
            },
            {
              id: "electric-car-1",
              name: "Electric Innovation",
              price: "$42,800",
              imageSrc: resolveAsset("electric-vehicle").url,
              imageAlt: resolveAsset("electric-vehicle").alt,
              onProductClick: () => console.log('View electric car details')
            },
            {
              id: "pickup-truck-1",
              name: "Heavy Duty Pickup",
              price: "$55,700",
              imageSrc: resolveAsset("premium-truck").url,
              imageAlt: resolveAsset("premium-truck").alt,
              onProductClick: () => console.log('View truck details')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Financing Options"
          description="Flexible financing solutions designed to fit your budget and get you driving today"
          tag="Financing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "essential",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "2.9% APR",
              subtitle: "Perfect for qualified buyers",
              buttons: [
                { text: "Get Pre-Approved", href: "financing" },
                { text: "Calculate Payment", href: "contact" }
              ],
              features: [
                "Up to 72-month terms",
                "No down payment required",
                "Fast 24-hour approval",
                "Competitive interest rates",
                "Flexible payment options"
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Award,
              price: "1.9% APR",
              subtitle: "Exclusive rates for excellent credit",
              buttons: [
                { text: "Apply Now", href: "financing" },
                { text: "Speak to Advisor", href: "contact" }
              ],
              features: [
                "Up to 84-month terms",
                "Premium rate guarantee",
                "Same-day approval",
                "Extended warranty included",
                "Loyalty program benefits"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with us"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: resolveAsset("testimonial-sarah").url,
              imageAlt: resolveAsset("testimonial-sarah").alt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Chen Consulting",
              rating: 5,
              imageSrc: resolveAsset("testimonial-michael").url,
              imageAlt: resolveAsset("testimonial-michael").alt
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Project Manager",
              company: "Creative Agency",
              rating: 5,
              imageSrc: resolveAsset("testimonial-emily").url,
              imageAlt: resolveAsset("testimonial-emily").alt
            },
            {
              id: "4",
              name: "David Kim",
              role: "Sales Executive",
              company: "Regional Corp",
              rating: 5,
              imageSrc: resolveAsset("testimonial-david").url,
              imageAlt: resolveAsset("testimonial-david").alt
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Operations Manager",
              company: "Manufacturing Plus",
              rating: 5,
              imageSrc: resolveAsset("testimonial-lisa").url,
              imageAlt: resolveAsset("testimonial-lisa").alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted Automotive Brands"
          description="We proudly represent the world's leading automotive manufacturers"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            resolveAsset("bmw-logo").url,
            resolveAsset("mercedes-logo").url,
            resolveAsset("audi-logo").url,
            resolveAsset("toyota-logo").url,
            resolveAsset("honda-logo").url
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Find Your Perfect Car?"
          description="Contact us today to schedule a test drive, get financing pre-approval, or speak with our automotive experts about your next vehicle purchase."
          tagIcon={Phone}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Visit"
          termsText="By submitting, you agree to receive communications about our vehicles and services. Unsubscribe anytime."
          imageSrc={resolveAsset("contact-showroom").url}
          imageAlt={resolveAsset("contact-showroom").alt}
          mediaPosition="right"
        />
      </div>
    </ThemeProvider>
  );
}