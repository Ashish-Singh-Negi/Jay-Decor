import Image from "next/image";
import primary_banner from "@/public/primary-banner.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      aria-label="Jay Decor — interior and exterior design"
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen"
    >
      <Image
        src={primary_banner}
        alt="Modern outdoor living space with pergola, seating, and pool designed by Jay Decor"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-medium max-w-3xl">
          Elevate Your Space with{" "}
          <span className="text-[#F6D425]">Jay Decor</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg italic mt-4 max-w-xl">
          Interior & exterior design solutions for Residential, Commercial &
          Hospitality projects
        </p>
        <Link
          href="#products"
          className="mt-8 inline-block bg-[#F6D425] text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-[#b8952e] transition"
        >
          Explore Our Products
        </Link>
      </div>
    </section>
  );
};
export default Hero;
