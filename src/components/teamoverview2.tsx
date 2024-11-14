import { AnimatedTestimonials } from "@/components/ui/animated-team";

export default function TeamOverview() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Dzaky Athariq Ferreira",
      designation: "Surveyor at NSI",
      src: "/overviewteam/zaki01.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Nurdin",
      designation: "Finance at NSI",
      src: "/overviewteam/nurdin01.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Sudarsono",
      designation: "Lead Technician at NSI",
      src: "/overviewteam/sudar01.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Endang",
      designation: "Technician at NSI",
      src: "/overviewteam/endang01.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Anisa",
      designation: "Administrative at NSI",
      src: "/overviewteam/anisa01.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
