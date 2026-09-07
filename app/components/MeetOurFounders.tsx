import Image from "next/image";
import jay_decor_founder_pic from "@/public/jay_decor_founder_pic.jpeg";

const MeetOurFounders = () => {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="w-full bg-white py-10 md:py-16"
    >
      <div className="w-[90%] md:w-3/4 mx-auto">
        <h2
          id="founder-heading"
          className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-center italic mb-8"
        >
          Meet Our <span className="text-primary not-italic">Founder</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start py-6 md:py-10 md:px-24">
          <div className="relative w-full max-w-xs md:max-w-none md:w-100 aspect-4/5 shrink-0">
            <Image
              src={jay_decor_founder_pic}
              alt="Yatish Arekar, Founder of Jay Decor"
              fill
              sizes="(max-width: 768px) 320px, 400px"
              className="rounded-xl object-cover"
            />
          </div>

          <div className="leading-relaxed flex flex-col gap-3 sm:text-center md:text-left">
            <h3 className="font-heading tracking-wide text-lg">
              Yatish Arekar – Founder, JAY DECOR
            </h3>
            <p>
              With over 20 years of industry experience, Yatish Arekar founded
              JAY DECOR with a simple vision — to make high-quality interior and
              exterior design solutions accessible, reliable, and innovative.
            </p>
            <p className="tracking-wide">
              Since 2007, his leadership and commitment to transparency,
              quality, and customer satisfaction have helped JAY DECOR build
              lasting relationships across residential, commercial, and
              hospitality projects.
            </p>
            <p className="tracking-wider">
              From wallpapers and flooring to blinds, wall panels, awnings,
              artificial turf, glass films, laser cutting, 3D engraving, and
              stretch ceilings, JAY DECOR continues to transform spaces through
              experience, creativity, and attention to detail.
            </p>
            <p className="tracking-wide font-medium">
              20+ Years of Legacy. One Vision — Exceptional Spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetOurFounders;
