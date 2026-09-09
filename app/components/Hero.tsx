import Image from "next/image";
import hero_banner from "@/public/primary-banner.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      aria-label="Jay Decor — interior and exterior design"
      className="relative h-[70vh] w-full"
    >
      <Image
        src={hero_banner}
        alt="Modern outdoor living space with pergola, seating, and pool designed by Jay Decor"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-heading text-white text-2xl sm:text-4xl md:text-5xl font-medium max-w-4xl">
          Elevate Your Space with{" "}
          <span className="text-primary">JAY DECOR</span>
        </h1>
        <p className="font-heading text-white/60 text-sm sm:text-base md:text-lg italic mt-4 max-w-xl">
          Interior & exterior design solutions for Residential, Commercial &
          Hospitality projects
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-primary font-primary px-6 py-3 rounded-full text-sm sm:text-base hover:bg-primary-hover transition"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};
export default Hero;
