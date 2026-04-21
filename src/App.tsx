import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import NavbarCentered from '@/components/ui/NavbarCentered';
import ProductVariantCards from '@/components/sections/product/ProductVariantCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Clock, Coffee, Smile } from "lucide-react";

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Bad Day"
      navItems={[
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Menu",
          href: "#products",
        },
        {
          name: "FAQ",
          href: "#faq",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Visit Us",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitMediaGrid
      tag="For the days that just won't behave"
      title="Welcome to Bad Day Coffee"
      description="Sometimes everything goes wrong. We're here to help you hit reset with a perfectly brewed cup of coffee."
      primaryButton={{
        text: "View Menu",
        href: "#products",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/interior-stylish-restaurant_1098-14471.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/transparent-glass-cup-filled-with-coffee-beans_1252-896.jpg",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutFeaturesSplit
      tag="Our Philosophy"
      title="Coffee for Real Life"
      description="Life isn't always filtered, and neither is our coffee. We embrace the chaos of the daily grind and turn it into something smooth, warm, and delicious."
      items={[
        {
          icon: Coffee,
          title: "Artisanal Brews",
          description: "Sourced from the best ethical farms.",
        },
        {
          icon: Clock,
          title: "Your Daily Pause",
          description: "A quiet space to take a deep breath.",
        },
        {
          icon: Smile,
          title: "Honest Service",
          description: "No frills, just good humans.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-indoor-portrait-graceful-blonde-woman-enjoying-smell-cappuccino-dreaming-looking-into-window-wearing-pink-knitted-sweater_273443-2830.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesDetailedCards
      tag="Why Bad Day?"
      title="More Than Just Caffeine"
      description="We are creating a community where it's okay not to be okay, one cup at a time."
      items={[
        {
          title: "Cozy Seating",
          description: "Designed for comfort and long lingering.",
          tags: [
            "Relaxing",
            "Interior",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-round-pancakes-with-black-cup-milk-wooden-desk-with-ropes-grey-background-food-meal-breakfast-sweet_140725-23079.jpg",
        },
        {
          title: "Fresh Baked Goods",
          description: "Pastries baked in-house every morning.",
          tags: [
            "Bakery",
            "Tasty",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-breakfast-food-coffee-cup_23-2147693716.jpg",
        },
        {
          title: "Local Vibe",
          description: "Supporting local artists and suppliers.",
          tags: [
            "Community",
            "Local",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup_74190-1517.jpg",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductVariantCards
      tag="The Daily Menu"
      title="Fuel for Your Day"
      description="From dark roasts to creamy lattes, we've got you covered."
      products={[
        {
          name: "House Brew",
          variant: "12oz",
          price: "$3.50",
          imageSrc: "http://img.b2bpic.net/free-photo/black-cup-wooden-background-beverage-christmas-morning-coffee-beans-cinnamon-sticks_169016-1856.jpg",
        },
        {
          name: "Cappuccino",
          variant: "Large",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/texture-breakfast-art-caffeine-wooden_1150-1577.jpg",
        },
        {
          name: "Iced Latte",
          variant: "Cold",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-woman-drinking-coffee-drink-beach-with-foam-drinking-straw_1268-16574.jpg",
        },
        {
          name: "Croissant",
          variant: "Buttery",
          price: "$3.00",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-croissant-half-covered-strawberry-syrup_140725-1406.jpg",
        },
        {
          name: "Americano",
          variant: "Standard",
          price: "$3.25",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cup-tea-white-table_114579-56275.jpg",
        },
        {
          name: "Flat White",
          variant: "Small",
          price: "$4.25",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-quality-coffee-cup_23-2150691369.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialQuoteCards
      tag="Community Voices"
      title="Loved by Locals"
      description="Hear what our friends have to say after their bad days."
      testimonials={[
        {
          name: "Jordan Smith",
          role: "Graphic Designer",
          quote: "The best place to hide from the world with a perfect flat white.",
          imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-drinking-juice_1157-32300.jpg",
        },
        {
          name: "Alex Rivera",
          role: "Student",
          quote: "My go-to spot when my deadline feels impossible.",
          imageSrc: "http://img.b2bpic.net/free-vector/fantastic-pattern-with-coffee-objects-flat-design_23-2147602664.jpg",
        },
        {
          name: "Casey Morgan",
          role: "Remote Worker",
          quote: "Warm atmosphere and friendly staff. Instant mood lifter.",
          imageSrc: "http://img.b2bpic.net/free-photo/mindful-dark-skinned-male-student-wearing-casual-clothing-preparing-exams-sitting-cafe-table-reading-information-textbook-talking-phone_273609-7441.jpg",
        },
        {
          name: "Riley Chen",
          role: "Teacher",
          quote: "Great coffee, better people. Exactly what I need.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12128.jpg",
        },
        {
          name: "Sam Taylor",
          role: "Architect",
          quote: "Coffee so good it fixed my day. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-smiling-attractive-young-woman-with-short-curly-dark-hair-red-lips_291650-524.jpg",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqTwoColumn
      tag="Common Questions"
      title="Need Help?"
      description="Answers to the most common questions about our shop."
      items={[
        {
          question: "Where are you located?",
          answer: "We are at 123 Main Street in the heart of the city.",
        },
        {
          question: "Do you offer Wi-Fi?",
          answer: "Yes, we have high-speed Wi-Fi for all our guests.",
        },
        {
          question: "Do you have dairy-free options?",
          answer: "We have oat, almond, and soy milk options available.",
        },
        {
          question: "Can I order online?",
          answer: "Not currently, but we're working on it!",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      tag="Find Us"
      title="Let's Get Coffee"
      description="Come visit us today and turn your bad day around."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "What's on your mind?",
        rows: 4,
      }}
      buttonText="Send Message"
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-holding-shop-sign_23-2148731705.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      brand="Bad Day Coffee"
      columns={[
        {
          title: "Visit",
          items: [
            {
              label: "123 Main St",
              href: "#",
            },
            {
              label: "Open daily 7am-7pm",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Bad Day Coffee. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
