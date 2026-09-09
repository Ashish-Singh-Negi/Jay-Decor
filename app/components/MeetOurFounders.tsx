import Image from "next/image";
import jay_decor_founder_pic from "@/public/jay_decor_founder_pic.jpeg";

const MeetOurFounders = () => {
  // #f4f78d
  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full bg-[#F6F6F6] rounded-b-4xl py-10 md:py-16"
    >
      <div className="w-[90%] md:w-3/4 mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8">
          Meet Our <span className="text-primary not-italic">Founder</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center md:items-start py-6 md:py-10 px-4 xl:px-24">
          <div className="relative w-full max-w-xs md:max-w-none md:w-100 aspect-square shrink-0">
            <Image
              src={jay_decor_founder_pic}
              alt="Yatish Arekar, Founder of Jay Decor"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="leading-relaxed flex flex-col gap-3 sm:text-center md:text-left">
            <h3 className="w-fit tracking-wide text-base  md:text-xl font-medium mb-2">
              Yatish Arekar – Founder,{" "}
              <span className="text-primary font-heading font-semibold">
                JAY DECOR
              </span>
            </h3>
            <p className="text-secondary text-xs sm:text-base tracking-wide">
              With over <span>20 years of industry experience</span> Yatish
              Arekar founded JAY DECOR with a simple vision — to make
              high-quality interior and exterior design solutions accessible,
              reliable, and innovative.
            </p>
            <p className="text-secondary text-xs sm:text-base tracking-wide">
              Since 2007, his leadership and commitment to{" "}
              <span>transparency, quality, and customer satisfaction</span> have
              helped JAY DECOR build lasting relationships across residential,
              commercial, and hospitality projects.
            </p>
            <p className="text-secondary text-xs sm:text-base tracking-wider">
              From wallpapers and flooring to blinds, wall panels, awnings,
              artificial turf, glass films, laser cutting, 3D engraving, and
              stretch ceilings JAY DECOR continues to transform spaces through
              experience, creativity, and attention to detail.
            </p>
            <p className="w-fit text-secondary text-xs sm:text-base tracking-wide font-medium">
              20+ Years of Legacy. One Vision — Exceptional Spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetOurFounders;
